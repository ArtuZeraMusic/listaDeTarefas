
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Tarefa {
  id?: number;
  descricao: string;
  concluida: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tarefas: Tarefa[] = [];
  novaTarefaDescricao: string = '';
  private apiUrl = 'http://localhost:8080/api/tarefas';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.http.get<Tarefa[]>(this.apiUrl).subscribe(data => {
      this.tarefas = data;
    });
  }

  adicionarTarefa(): void {
    if (this.novaTarefaDescricao.trim()) {
      const novaTarefa: Tarefa = { descricao: this.novaTarefaDescricao, concluida: false };
      this.http.post<Tarefa>(this.apiUrl, novaTarefa).subscribe(tarefa => {
        this.tarefas.push(tarefa);
        this.novaTarefaDescricao = '';
      });
    }
  }

  excluirTarefa(id?: number): void {
    if (id !== undefined) {
      this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
        this.tarefas = this.tarefas.filter(t => t.id !== id);
      });
    }
  }
}


