<?php

namespace Tests\Unit;

use Tests\TestCase;
use App\Services\GroupByOwnersService;

class GroupByOwnersServiceTest extends TestCase
{
    public function testGroupByOwners()
    {
        $service = new GroupByOwnersService();
        $input = ["insurance.txt" => "Company A", "letter.docx" => "Company A", "Contract.docx" => "Company B"];
        $expectedResult = ["Company A" => ["insurance.txt", "letter.docx"], "Company B" => ["Contract.docx"]];
        $result = $service->groupByOwners($input);

        $this->assertEquals($expectedResult, $result);
    }
}
