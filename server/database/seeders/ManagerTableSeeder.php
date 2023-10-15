<?php

namespace Database\Seeders;

use App\Models\Manager;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Faker\Factory as Faker;


class ManagerTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        
         
        $faker = Faker::create();

        for ($i=0; $i < 10; $i++)
        Manager::create([
            'manager_name' => $faker->name,
            'email' => $faker->email,
            'phone' => $faker->phoneNumber,
            'department' => $faker->randomElement(['Human Resources', 'Finance', 'Marketing', 'Operations', 'Sales']),
            'company_id' => 1
        ]);
    }
}
