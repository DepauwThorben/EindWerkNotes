import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatTableModule } from '@angular/material/table' 
import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
imports: [MatButtonModule, MatInputModule, MatTableModule,MatSelectModule],
exports: [MatButtonModule, MatInputModule, MatTableModule,MatSelectModule]
})

export class MaterialModule {
    
}

