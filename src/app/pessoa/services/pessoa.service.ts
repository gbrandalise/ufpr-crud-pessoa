import { Injectable } from "@angular/core";
import { Pessoa } from "src/app/shared/models/pessoa.model";

const LS_CHAVE_PESSOA: string = "pessoas";

@Injectable({
    providedIn: 'root'
})
export class PessoaService {

    listarTodos(): Pessoa[] {
        const pessoas: string = localStorage[LS_CHAVE_PESSOA];
        return pessoas ? JSON.parse(pessoas) : [];
    }

    inserir(pessoa: Pessoa): void {
        const pessoas: Pessoa[] = this.listarTodos();
        pessoa.id = new Date().getTime();
        pessoas.push(pessoa);
        localStorage[LS_CHAVE_PESSOA] = JSON.stringify(pessoas);
    }

    buscarPorId(id: number): Pessoa {
        const pessoas: Pessoa[] = this.listarTodos();
        return pessoas.find(pessoa => pessoa.id === id)!;
    }

    atualizar(pessoa: Pessoa): void {
        const pessoas: Pessoa[] = this.listarTodos();
        pessoas.forEach((obj, index, objs) => {
            if (pessoa.id === obj.id) {
                objs[index] = pessoa;
            }
        });
        localStorage[LS_CHAVE_PESSOA] = JSON.stringify(pessoas);
    }

    remover(id: number): void {
        let pessoas: Pessoa[] = this.listarTodos();
        pessoas = pessoas.filter(pessoa => pessoa.id !== id);
        localStorage[LS_CHAVE_PESSOA] = JSON.stringify(pessoas);
    }
}
