import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  inf: any;
  id: number = 0;

  filmes = [
    {
      id: 0,
      nome: 'Mortal Kombat',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      descricao:'Nova aventura baseada no videogame Mortal Kombat. Na história, um jovem que nunca treinou artes marciais acaba envolvido em um gigantesco torneio',
      classificacao: '18',
      lancamento: '2021',
      duracao: '1h 50m',
    },
    {
      id: 1,
      nome: 'Cruella',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljPHd7WiPVKmuXi1hgQUpZQslbC.jpg',
      descricao: 'Na Londres dos anos 70 em meio à revolução do punk rock, Estella, uma garota inteligente e criativa determinada a fazer um nome para si através de seus designs.',
      classificacao: '12',
      lancamento: '2021',
      duracao: '2h 14m'
    },
    {
      id: 2,
      nome: 'Godzilla vs Kong',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg',
      descricao: 'Em uma época em que os monstros andam na Terra, a luta da humanidade por seu futuro coloca Godzilla e Kong em rota de colisão',
      classificacao: '12',
      lancamento: '2021',
      duracao: '1h 53m'
    },
    {
      id: 3,
      nome: 'Rogai por Nós',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg',
      descricao: 'Conheça Alice, uma jovem com deficiência auditiva que, após uma suposta visita da Virgem Maria, é inexplicavelmente capaz de ouvir, falar e curar os enfermos.',
      classificacao: '14',
      lancamento: '2021',
      duracao: '1h 40m'
    },
    {
      id: 4,
      nome: 'Liga da Justiça',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ArWn6gCi61b3b3hclD2L0LOk66k.jpg',
      descricao: 'Determinado a garantir que o sacrifício final do Superman não foi em vão, Bruce Wayne alinha forças com Diana Prince com planos de recrutar uma equipe para proteger o mundo ',
      classificacao: '16',
      lancamento: '2021',
      duracao: '4h 2m'
    },
    {
      id: 5,
      nome: 'Infiltrado',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dAtAp4IeT6EYGhewfnNNhalobme.jpg',
      descricao: 'Harry, conhecido apenas como H, é um homem misterioso que trabalha para uma empresa de carros-fortes e movimenta grandes quantias de dinheiro pela cidade de Los Angeles.',
      classificacao: '18',
      lancamento: '2021',
      duracao: '1h 59m'
    },
  ]


  series = [
    {
      id: 0,
      nome: 'Ragnarok',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg',
      descricao: 'Em uma cidade norueguesa envenenada pela poluição e abalada por geleiras derretendo, o fim dos tempos parece real. Só uma lenda poderá combater um mal antigo.',
      classificacao: '16',
      lancamento: '2020',
      duracao: '45m'
    },
    {
      id: 1,
      nome: 'The Flash',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      descricao: 'Um perito forense desperta de um coma com poderes especiais que serão postos à prova na luta contra forças que ameaçam a cidade.',
      classificacao: '14',
      lancamento: '2014',
      duracao: '44m'
    },
    {
      id: 2,
      nome: 'Lúcifer',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      descricao: 'Entediado com a vida nas trevas, o diabo se muda para Los Angeles, abre um piano-bar e empresta sua sabedoria a uma investigadora de assassinatos.',
      classificacao: '16',
      lancamento: '2016',
      duracao: '45m'
    },
    {
      id: 3,
      nome: 'Invencível',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hXWGbKLfARbfFyMCQ90AQRGjEGo.jpg',
      descricao: 'INVENCÍVEL é uma animação de super-heróis para adultos e conta a história de Mark Grayson, de 17 anos, um cara como qualquer outro de sua idade, exceto que seu pai é o super-herói mais poderoso do planeta, Omni-Man.',
      classificacao: '16',
      lancamento: '2021',
      duracao: '45m'
    },
    {
      id: 4,
      nome: 'The Walking Dead',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rqeYMLryjcawh2JeRpCVUDXYM5b.jpg',
      descricao: 'Nos Estados Unidos pós-apocalíptico, um pequeno grupo de sobreviventes segue viajando à procura de uma nova casa longe dos mortos-vivos.',
      classificacao: '16',
      lancamento: '2010',
      duracao: '42m'
    },
    {
      id: 5,
      nome: 'Game of Thrones',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mQ9cyw1gfpK1M3a69cgXFHvWkih.jpg',
      descricao: 'Em uma terra onde os verões podem durar vários anos e o inverno toda uma vida, sete nobres famílias lutam pelo controle da mítica terra de Westeros, dividida depois de uma guerra.',
      classificacao: '16',
      lancamento: '2011',
      duracao: '1h'
    }
  ]

  animes = [
    {
      id: 0,
      nome: 'One Piece',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oag7edI9flSMawmNySEiSEJAbrf.jpg',
      descricao: 'Houve um homem que conquistou tudo aquilo que o mundo tinha a oferecer, o lendário Rei dos Piratas, Gold Roger.  Capturado e condenado à execução pelo Governo Mundial',
      classificacao: '14',
      lancamento: '1999',
      duracao: '25m'
    },
    {
      id: 1,
      nome: 'Demon Slayer',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7Uj6vqmznWQ3w3hpQ1eIY9mMyMw.jpg',
      descricao: 'Tanjiro, um bondoso jovem que ganha a vida vendendo carvão, descobre que sua família foi massacrada por um demônio. E pra piorar, Nezuko, sua irmã mais nova também foi transformada num demônio.',
      classificacao: '14',
      lancamento: '2019',
      duracao: '25m'
    },
    {
      id: 2,
      nome: 'Tokyo Revengers ',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/e77ZdXs1tFmpTOiFfEZSlcz9ZWN.jpg',
      descricao: 'A vida de Takemichi Hanagaki está ruim. Quando pensou que não poderia piorar, ele descobre que Hinata Tachibana, sua ex-namorada, foi assassinada pela Gangue Manji de Tóquio',
      classificacao: '14',
      lancamento: '2021',
      duracao: '25m'
    },
    {
      id: 3,
      nome: 'Death Note',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vapuYy7yrYcML9bHuq5ct97hpSY.jpg',
      descricao: 'O jovem estudante Light Yagami acha um caderno com poderes sobrenaturais, chamado Death Note, no qual é possível matar uma pessoa apenas escrevendo seu nome no caderno.',
      classificacao: '16',
      lancamento: '2006',
      duracao: '25m'
    },
    {
      id: 4,
      nome: 'Naruto Shippuden',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cIGqCdclILvuexM04PnRaFbtAWq.jpg',
      descricao: 'Naruto Shippuden ocorre 2 anos e meio após Naruto ter ficado para treinar com Jiraiya. Após seu retorno, Naruto descobre que seus amigos shinobis o superaram na classificação, e ele caiu para trás.',
      classificacao: '14',
      lancamento: '2007',
      duracao: '25m'
    },
    {
      id: 5,
      nome: 'Attack on Titan',
      capa: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zMnQh4sNYySLJvSZSSJ2HGIeKw6.jpg',
      descricao: 'Titãs estão quase exterminando a raça humana. Porém alguns estão dispostos a formar um exército de ataque aos seres assassinos. O jovem Eren, após ver sua mãe ser devorada por um titã',
      classificacao: '16',
      lancamento: '2013',
      duracao: '25m'
    }
  ]

  constructor( ) { }

  ngOnInit(): void {
    this.inf = this.filmes[0];
    this.inf = this.series[0];
    this.inf = this.animes[0];
  }

  pegarInfFilmes(id: number){
    this.inf = this.filmes[id]
  }

  pegarInfSeries(id: number){
    this.inf = this.series[id]
  }

  pegarInfAnimes(id: number){
    this.inf = this.animes[id]
  }
}
