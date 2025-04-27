<?php

namespace Database\Seeders;

use App\Models\Project;
use Illuminate\Database\Seeder;

class ProjectsSeeder extends Seeder
{
    public function run(): void
    {
        Project::query()->create([
            'name' => 'derworth',
        ]);
        Project::query()->create([
            'name' => 'laravel',
        ]);
    }
}
