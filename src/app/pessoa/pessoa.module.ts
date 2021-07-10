import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaService } from './services/pessoa.service';
import { ListarPessoaComponent } from './listar-pessoa/listar-pessoa.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
    ListarPessoaComponent
  ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ],
    providers: [
        PessoaService
    ]
})
export class PessoaModule { }
