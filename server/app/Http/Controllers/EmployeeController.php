<?php

namespace App\Http\Controllers;

use App\Models\Attendance;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PhpOffice\PhpSpreadsheet\IOFactory;

class EmployeeController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Attendance::with('employee')->get()->map(function ($attendance) {
            return [
                'emp_id' => $attendance->employee->id,
                'name' => $attendance->employee->name,
                'check_in' => $attendance->check_in,
                'check_out' => $attendance->check_out,
                'working_hour' => $attendance->working_hour,
            ];
        });
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        

        $validator = Validator::make($request->all(), [
            'spreadsheet' => 'required|mimes:xls,xlsx|max:2048',
        ]);
        
        if ($validator->fails()) {
            return response(['error' => 'invalid file'],406);
        }
        
        $file = $request->file('spreadsheet');
        $path = $file->getRealPath();
        $spreadsheet = IOFactory::load($path);
        $worksheet = $spreadsheet->getActiveSheet();
        $rows = $worksheet->getHighestDataRow();


        // Check if the header fields are present
        $expectedHeader = ['employee_id', 'check_in', 'check_out', 'working_hours'];
        $headerValues = [];
        for ($col = 1; $col <= 4; $col++) {
            $headerValues[] = $worksheet->getCell([$col, 1])->getValue();
        }

        
        if ($headerValues !== $expectedHeader) {
            return ['msg' => 'Invalid excel file uploaded'];
        }


        // Process the rest of the data
        for ($row = 2; $row <= $rows; $row++) {
            $emp_id = $worksheet->getCell([1, $row])->getFormattedValue();
            $emp_check_in = $worksheet->getCell([2, $row])->getFormattedValue();
            $emp_check_out = $worksheet->getCell([3, $row])->getFormattedValue();
            $emp_working_hours = $worksheet->getCell([4, $row])->getFormattedValue();

            Attendance::create([
                'emp_id' => $emp_id,
                'check_in' => $emp_check_in,
                'check_out' => $emp_check_out,
                'working_hour' => $emp_working_hours,
            ]);
        }

        return ['msg' => 'uploaded'];
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
