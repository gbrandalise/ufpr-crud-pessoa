import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { PessoaService } from '../services/pessoa.service';

@Component({
    selector: 'app-editar-pessoa',
    templateUrl: './editar-pessoa.component.html',
    styleUrls: ['./editar-pessoa.component.scss']
})
export class EditarPessoaComponent implements OnInit {

    @ViewChild('formPessoa') formPessoa!: NgForm;
    pessoa: Pessoa = new Pessoa();

    constructor(
        private pessoaService: PessoaService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.pessoa = this.pessoaService.buscarPorId(id);
    }

    atualizar(): void {
        if (this.formPessoa.valid) {
            this.pessoaService.atualizar(this.pessoa);
            this.router.navigate(['/pessoas']);
        }
    }

}
