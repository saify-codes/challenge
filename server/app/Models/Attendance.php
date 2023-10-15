<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    public $timestamps = false;
    protected $fillable = [
        'emp_id',
        'check_in',
        'check_out',
        'working_hour',
    ];

    public function employee(){
        return $this->belongsTo(Employee::class,'emp_id');
    }
}
