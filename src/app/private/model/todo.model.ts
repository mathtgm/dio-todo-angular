
export class Todo {
    id: number;
    atividade: string;
    data: string;
    situacao: boolean;

    constructor(id: number, atividade: string, data: string, situacao: boolean) {
        this.id = id,
        this.atividade = atividade,
        this.data = data,
        this.situacao = situacao
    }
}