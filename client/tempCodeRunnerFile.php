<?php


$input = ["insurance.txt" => "Company A", "letter.docx" => "Company A", "Contract.docx" => "Company B"];
$expectedResult = ["Company A" => ["insurance.txt", "letter.docx"], "Company B" => ["Contract.docx"]];
$result = [];


foreach ($input as $file => $owner) {
    $result[$owner][] = $file;

}


print_r($result);