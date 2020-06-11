import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css'],
})
export class PaginaInicialComponent {
  title = 'Página Inicial';
  CardStyle() {
    return {
      border: 'none',
      borderRadius: 'none',
      marginBottom: '4rem',
      backgroundColor: 'rgba(43, 146, 206, 0.0)',
    };
  }
  iconStyle() {
    return {
      width: 'auto',
      height: '10rem',
      paddingTop: '1px',
      borderLeft: 'solid 1px rgba(43, 146, 206, 1.0)',
      borderRight: 'solid 1px rgba(43, 146, 206, 1.0)',
      backgroundColor: 'white',
    };
  }
  cursos: {
    id: number;
    name: string;
    time: string;
    icon: string;
    image: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    paragraph4: string;
    paragraph5: string;
    paragraph6: string;
    paragraph7: string;
    paragraph8: string;
    paragraph9: string;
    paragraph10: string;
    list: Array<string>;
  }[] = [
    {
      id: 1,

      name: 'Administrção',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/administracao1.svg',

      image: '../../../assets/img/banner-administracao-13100606.jpg',

      paragraph1:
        'Se você pensa em ser um administrador de empresas, quer fundar sua própria empresa e ser um empreendedor, ou mesmo liderar equipes de ponta em uma grande corporação, o começo da sua trajetória passa pela Mauá.',

      paragraph2:
        'Estude Administração em uma instituição renomada no mercado, que obteve conceito máximo pelo reconhecimento do curso pelo MEC, além da possibilidade da dupla diplomação pelo acordo de cooperação com a De Montfort University na Inglaterra. Já imaginou? Você começa sua graduação aqui e pode terminar com um diploma duplo, com muita experiência internacional e com o inglês fluente,pronto para começar a trabalhar.',

      paragraph3:
        'Está procurando um curso superior em Administração? Conheça a estrutura da Mauá!',

      paragraph4:
        'O curso de Administração da Mauá tem foco em Empreendedorismo. O aluno aprende a identificar oportunidades e a alcançar resultados com base na metodologia PBL: Problem Based Learning.',

      paragraph5:
        'O Administrador Mauá é um profissional preparado para atuar, sempre como líder, nos mais diversos mercados de trabalho: instituições financeiras, empresas de serviços, consultorias, comércio varejista ou atacadista e indústrias de diversos segmentos, como Automobilístico, Eletroeletrônico, Alimentício, entre outros. Os alunos desenvolvem, ao longo do curso, capacitação e treinamento para a tomada de decisões e para a resolução de problemas de gestão empresarial.',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [],
    },
    {
      id: 2,

      name: 'Design',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/design1.svg',

      image: '../../../assets/img/banner-design-13100820.jpg',

      paragraph1:
        'O curso de Design da Mauá, oferecido desde 2007, possui nota máxima no MEC, tem conquistado seu espaço no mundo acadêmico e já deixa sua marca de qualidade no mercado. Por meio de uma importante convivência com a tecnologia e os negócios, num ambiente bem estruturado, com professores comprometidos e bem preparados, apresenta um currículo arrojado e um projeto pedagógico atualizadíssimo; Vem formando Designers talentosos e atendendo às demandas do mercado.',

      paragraph2:
        'O curso é totalmente voltado para a prática, com o desenvolvimento de projetos em todos os semestres, do início ao fim. Todos eles são desenvolvidos com empresas parceiras de diversos setores (Automotivo, Eletrodomésticos, Eletroeletrônicos, Embalagens, Mobiliário, Moda e Acessórios, Serviços, Games e Entretenimento, entre outros) que trazem para a academia problemas reais do mercado que serão solucionados por equipes de alunos e professores criativos e competentes. Essas equipes multidisciplinares fortalecem o tripé da inovação, mote estratégico da instituição, com a integração entre as áreas de Design, Engenharia e Administração.',

      paragraph3:
        'Uma infraestrutura de primeira com o 1.º FabLab do ABC (com impressoras 3D e equipamentos de usinagem de última geração, que oferecem todos os recursos necessários para a criação dos projetos e o desenvolvimento de modelos e protótipos), o empreendedorismo (com profissionais e tutores orientando e transformando as ideias em produtos, serviços e negócios), a internacionalização (com parceiros internacionais, vivências no exterior e a dupla diplomação com a De Montfort University na Inglaterra), a oferta de um Minor ainda na graduação, o grande número de premiações em concursos e a tecnologia a serviço da sociedade estão presentes no dia a dia da instituição e nas atividades relativas ao curso e fazem com que a experiência de estudar e se formar na Mauá seja completa e inesquecível!',

      paragraph4: '',

      paragraph5: '',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [],
    },
    {
      id: 3,

      name: 'Engenharia de Alimentos',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/alimentos.svg',

      image: '../../../assets/img/banner-alimentos-13102141.jpg',

      paragraph1:
        'Quer um curso de Engenharia de Alimentos que te ensina o conteúdo na prática durante toda a graduação? A Mauá oferece a melhor infraestrutura para você.',

      paragraph2:
        'A graduação em Engenharia de Alimentos da Mauá oferece um intenso programa prático que leva o aluno desde as primeiras séries para os laboratórios didáticos e de pesquisa e de processamento em pequena escala. O campus conta ainda com uma instalação semi-industrial capaz de simular a produção de diversos produtos, semelhante ao que fazem as indústrias de alimentos.',

      paragraph3:
        'A área de produção de alimentos vem se desenvolvendo e a cada dia cresce a necessidade de profissionais especializados para atender essa demanda. O engenheiro de alimentos pode atuar nas mais diversas áreas relacionadas à cadeia alimentícia: Produção Industrial, Desenvolvimento de Produtos, Otimização de Processos, Garantia da Qualidade, Consultoria, Fiscalização ou até mesmo nas áreas comerciais e de marketing de produtos alimentícios.',

      paragraph4: '',

      paragraph5: '',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [],
    },
    {
      id: 4,

      name: 'Engenharia Civil',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/civil.svg',

      image: '../../../assets/img/banner-civil-13101017.jpg',

      paragraph1:
        'Quer fazer diferença no mercado e na sociedade sendo formado em Engenharia Civil? Conheça o curso da Mauá!',

      paragraph2:
        'O curso tem uma área de atuação ampla que exige do profissional uma formação diversificada e pronto para atender obras distintas: construção de edifícios residenciais, ferrovias, aeroportos ou faça o planejamento de sistemas de saneamento básico para cidades, podendo trabalhar com arquitetos e ambientalistas em grandes construções.',

      paragraph3: 'Em quais campos trabalhar:',

      paragraph4: '',

      paragraph5: '',

      paragraph6:
        'A partir de 2017 os candidatos podem escolher a duração dos cursos de Engenharia Noturno, de 5 ou 6 anos. O curso de 5 anos tem mais disciplinas por série e, consequentemente, uma carga horária semanal maior. A carga horária total é a mesma nas duas opções.',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [
        'Construção Civil: atue em construções em geral: edifícios, casas, obras industriais, desenvolvimento de tecnologias e materiais de construção e gerenciamento de obras;',
        'Estruturas: trabalhe no desenvolvimento dos mais variados projetos aplicados à construção civil: concreto armado, aço e metálicos e estruturas em madeira;',
        'Saneamento básico e recursos hídricos ? atue em estações de tratamento e na regularização de rios, canais, drenagem urbana e obras relacionadas à hidrelétricas;',
        'Transportes: atue no planejamento de rodovias, ferrovias, aeroportos, navegações e sistemas de logística e transporte.',
      ],
    },
    {
      id: 5,

      name: 'Engenharia de Computação',

      time: 'Diurno',

      icon: '../../../assets/icons/computacao1.svg',

      image: '../../../assets/img/banner-computacao-13102424.jpg.jpg',

      paragraph1:
        'A Engenharia de Computação está presente em nosso dia a dia e nas mais diversas áreas: Educação, Indústrias, Redes de Comunicação e Dispositivos Móveis, Transportes, Entreterimento, entre outras. Essa diversidade de aplicações para o Engenheiro de Computação qualifica-o para atuar como desenvolvedor, engenheiro, empreendedor, executivo de grandes corporações.',

      paragraph2:
        'A graduação em Engenharia de Computação da Mauá oferece aos alunos uma formação com base nos conceitos fundamentais da Engenharia, até a formação especializada em Sistemas Embarcados, Software, Infraestrutura e Segurança, Ciência de Dados e suas inter-relações. O profissional de Engenharia de Computação formado pela Mauá está habilitado para atuar nas seguintes áreas e segmentos:',

      paragraph3: '',

      paragraph4: '',

      paragraph5: '',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [
        'desenvolvimento de aplicações para sistemas embarcados;',
        'desenvolvimento de games;',
        'suporte a softwares para redes e cidades inteligentes;',
        'novas tecnologias e desafios;',
        'prestação de serviços e consultoria;',
        'pesquisa e ensino superior.',
      ],
    },
    {
      id: 6,

      name: 'Engenharia de Controle e Automação',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/ca.svg',

      image: '../../../assets/img/banner-controle-automacao-13102559.jpg',

      paragraph1:
        'Quer um curso de Engenharia de Alimentos que te ensina o conteúdo na prática durante toda a graduação? A Mauá oferece a melhor infraestrutura para você.',

      paragraph2:
        'A formação em Engenharia de Controle e Automação da Mauá  prepara o aluno para o uso de máquinas e conhecimento sobre os processos de fabricação, da Engenharia Eletrônica e da Ciência da Computação, além das suas aplicações em controle de processos e automação industrial.',

      paragraph3:
        'Os alunos do curso de Engenharia de Controle da Mauá têm conhecimentos de Mecânica, Eletrônica e Computação para atuarem e se desenvolverem  em novas áreas, entre as quais se destacam: Máquinas e Dispositivos Inteligentes, Robótica, Sistemas Autônomos, Integração de Sistemas Automatizados, Automação da Manufatura, Automação Predial e Controle de Processos.',

      paragraph4:
        'A partir de 2017 os candidatos podem escolher a duração dos cursos de Engenharia Noturno, de 5 ou 6 anos. O curso de 5 anos tem mais disciplinas por série e, consequentemente, uma carga horária semanal maior. A carga horária total é a mesma nas duas opções.',

      paragraph5: '',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [],
    },
    {
      id: 6,

      name: 'Engenharia Elétrica',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/eletrica.svg',

      image: '../../../assets/img/banner-eletrica-13103930.jpg',

      paragraph1:
        'A Engenharia Elétrica está no nosso cotidiano, presente nas diversas áreas industriais, em Sistemas de Transporte, na Automação de instalações elétricas prediais e comerciais, entre outras. O engenheiro eletricista atua na geração, distribuição e conversão eficiente da energia elétrica. Muito além da geração convencional (hidráulica ou térmica), hoje é questão obrigatória a análise de fontes alternativas de energia (eólica, solar...).',

      paragraph2:
        'Adicionalmente, é crescente a busca por novas fontes de energia elétrica alternativa e por projetos que resultem num melhor aproveitamento da energia e em eficiência energética. Cada vez mais, as unidades geradoras de pequeno porte estão presentes, levando os profissionais a desafios crescentes na área de distribuição de energia, convergindo para redes inteligentes e toda uma nova regulamentação do setor. Esses aspectos são ainda mais evidenciados pela imensidão territorial de nosso País.',

      paragraph3:
        'A Mauá oferece a seu aluno de Engenheira Elétrica uma formação que, além de fortemente alicerçada nos conceitos fundamentais da Engenharia, permeia e entrelaça as áreas de Conversão de Energia, Regulamentação, Proteção, Distribuição e Energias Alternativas. Embora científico e tecnológico, o curso de Engenharia Elétrica também dá aos seus alunos a base para um pensamento humanístico e social que faz do profissional um elemento de atuação diferenciada na sociedade.',

      paragraph4: 'O engenheiro eletricista atua na sua área tecnológica em:',

      paragraph5: '',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [
        'projetos de instalações elétricas;',
        'programas de supervisão e ampliação de sistemas elétricos;',
        'projetos de sistemas de conversão de energia',
        'consultoria;',
        'especificação e venda técnica;',
        'gerenciamento de processos industriais;',
        'perícia técnica;',
        'pesquisa e ensino superior;',
        'regulamentação.',
      ],
    },
    {
      id: 7,

      name: 'Engenharia Eletrônica',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/eletronica.svg',

      image: '../../../assets/img/banner-eletronica-13104831.jpg',

      paragraph1:
        'A Engenharia Eletrônica está em nosso cotidiano, presente nas mais diversas áreas: Comunicação, Transporte, Sistemas Computadorizados, Controle de Processos, Entretenimento, Segurança, Automação Predial e Industrial, Indústria de Eletrodomésticos e Equipamentos Médicos, entre muitas outras. Essa amplitude de aplicações para o engenheiro eletrônico, com uma formação ampla e diversificada, faz com que o profissional esteja preparado para assumir projetos que vão desde minúsculos circuitos eletrônicos até imensas redes de comunicação.',

      paragraph2:
        'A Mauá oferece a seu aluno de Engenheira Eletrônica uma formação com base nos conceitos fundamentais da Engenharia com as áreas de Telecomunicações, Sistemas Computacionais, Eletrônica e Automação de Processos Industriais. Embora científica e tecnológica, a formação também valoriza os aspectos humanísticos e sociais que tornam o profissional um elemento de atuação diferenciada para a sociedade.',

      paragraph3: 'O engenheiro eletrônico atua na sua área tecnológica em:',

      paragraph4: '',

      paragraph5: '',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [
        'desenvolvimento e projeto de novos dispositivos e sistemas;',
        'especificação e venda técnica;',
        'fiscalização de produtos e de instalações;',
        'consultoria;',
        'gerenciamento de processos industriais;',
        'perícia técnica;',
        'pesquisa e ensino superior;',
        'suporte técnico.',
      ],
    },
    {
      id: 8,

      name: 'Engenharia Mecânica',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/mecanica.svg',

      image: '../../../assets/img/banner-mecanica-13105701.jpg',

      paragraph1:
        'A graduação em Engenharia Mecânica é uma das mais abrangentes modalidades da Engenharia. Ela trata de tudo o que se move, de brinquedos a fábricas (com tudo o que está dentro), passando por eletrodomésticos, embarcações, veículos etc. Além disso, ela trata de instalações de conversão de energia como hidroelétricas e termoelétricas, instalações de ar-condicionado, de geração de vapor e frigoríficas.',

      paragraph2:
        'A Engenharia Mecânica trabalha por soluções para satisfazer necessidades da sociedade com tecnologias apropriadas. Para isso, ela projeta e desenvolve processos de fabricação de produtos consumidos no cotidiano, de máquinas e equipamentos industriais e de instalações industriais e de geração ou transformação de energia.',

      paragraph3:
        'O engenheiro mecânico poderá desenvolver atividades nas seguintes áreas::',

      paragraph4: '',

      paragraph5: '',

      paragraph6: '',

      paragraph7: '',

      paragraph8: '',

      paragraph9: '',

      paragraph10: '',

      list: [
        'projeto - concebe e desenvolve produtos de consumo, projeto de máquinas, instalações industriais e também equipamentos de processos;',
        'fabricação - desenvolve processos, ferramentas e meios para fabricar máquinas e produtos; administra a manufatura;',
        'manutenção - desenvolve e aplica técnicas para garantir que máquinas e instalações estejam sempre operantes e',
        'serviços - utiliza competências técnicas e gerenciais em compras, vendas, marketing industrial e assistência técnica de produtos de alta tecnologia.',
      ],
    },
    {
      id: 9,

      name: 'Engenharia de Produção',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/producao.svg',

      image: '../../../assets/img/banner-producao-13103804.jpg',

      paragraph1:
        'Infraestrutura de ponta, profissionais reconhecidos num curso bem-conceituado. Essa é a graduação em Engenharia de Produção da Mauá, ideal para um futuro de sucesso!',

      paragraph2:
        'Quero ser engenheiro de produção! Quais são minhas competências?',

      paragraph3:
        'O engenheiro mecânico poderá desenvolver atividades nas seguintes áreas::',

      paragraph4: '',

      paragraph5: '',

      paragraph6:
        'Fábrica Virtual: Um dos diversos diferenciais que a Mauá tem!',

      paragraph7:
        'A plataforma do Projeto Fábrica Virtual funciona como um repositório de conhecimentos que permite gerenciar processos e produtos para adicionar valor a eles em empresas de diferentes portes.',

      paragraph8:
        'O aluno da 3ª série do período diurno projeta o produto;  na 4ª série projeta a fábrica e na 5.ª projeta o empreendimento. Ainda na 5ª série, os alunos desenvolvem os Trabalhos de Conclusão de Curso de preferência  em pequenas e médias empresas. Cria-se, assim, uma equilibrada mescla entre os ambientes virtuais e reais que contribui para a diferenciação do futuro engenheiro no mercado de trabalho.',

      paragraph9: '',

      paragraph10:
        'A partir de 2017 os candidatos podem escolher a duração dos cursos de Engenharia Noturno, de 5 ou 6 anos. O curso de 5 anos tem mais disciplinas por série e, consequentemente, uma carga horária semanal maior. A carga horária total é a mesma nas duas opções.',

      list: [
        'Projetar, implementar, gerenciar e melhorar continuamente sistemas produtivos e de distribuição de bens e serviços, compostos de infraestrutura, processos e pessoas;',
        'Monitorar a operação desses sistemas, com atenção especial para a eficiência - uso otimizado dos recursos internos - e para a eficácia - atendimento correto do consumidor; ',
        'Prever e avaliar os resultados econômicos e os impactos sociais e ambientais advindos dessas operações.',
      ],
    },
    {
      id: 9,

      name: 'Engenharia de Química',

      time: 'Diurno e Noturno',

      icon: '../../../assets/icons/quimica.svg',

      image: '../../../assets/img/banner-quimica-13105855.jpg',

      paragraph1:
        'Está buscando onde cursar Engenharia Química? Conheça mais sobre o Curso na Mauá!',

      paragraph2: 'O que eu preciso saber sobre Engenharia Química?',

      paragraph3:
        'O engenheiro mecânico poderá desenvolver atividades nas seguintes áreas::',

      paragraph4:
        'Essa é a área mais abrangente da Engenharia e compreende todas as etapas de criação, desenvolvimento, melhoramento e aplicação dos processos químicos e bioquímicos e dos seus produtos. Compreende o projeto, a construção, o dimensionamento, a gestão, a operação e o controle de plantas industriais que realizam esses processos, incluindo a disposição e o tratamento de resíduos, o monitoramento e a redução de impactos ambientais e o controle de poluição ambiental (ar, água e solo).',

      paragraph5: 'Gostei! Onde eu posso aplicar meus conhecimentos?',

      paragraph6:
        'O Engenheiro Químico pode atuar em indústrias, nas quais a química se faz presente, em empresas de serviços e consultorias; laboratórios; institutos de pesquisas; instituições públicas e universidades. Nesses setores ele pode atender várias áreas de atuação, como engenheiro de: projeto, produto, processo, produção, desenvolvimento, manutenção, segurança, qualidade, aplicações, assistência técnica, suprimentos e vendas; diversos cargos em nível de gerência, pesquisador e professor.',

      paragraph7:
        'O campo de atuação compreende as indústrias: petroquímica, polímeros, química fina, inorgânica, polpa de celulose e papel, tintas, vernizes, explosivos, farmacêutica, alimentos, tratamento de águas, cerâmica, cimento, vidro, galvanoplastia e outras.',

      paragraph8:
        'A partir de 2017 os candidatos podem escolher a duração dos cursos de Engenharia Noturno, de 5 ou 6 anos. O curso de 5 anos tem mais disciplinas por série e, consequentemente, uma carga horária semanal maior. A carga horária total é a mesma nas duas opções.',

      paragraph9: '',

      paragraph10: '',

      list: [],
    },
  ];
  cursosNome = [
    {
      nome: 'Administração',
    },
    {
      nome: 'Design',
    },
    {
      nome: 'Engenharia de Alimentos',
    },
    {
      nome: 'Engenharia Química',
    },
    {
      nome: 'Engenharia Mecânica',
    },
    {
      nome: 'Engenharia Civil',
    },
    {
      nome: 'Engenharia de Controle e Automação',
    },
    {
      nome: 'Engenharia Elétrica',
    },
    {
      nome: 'Engenharia Eletrônica',
    },
    {
      nome: 'Engenharia de Computação',
    },
  ];
  onAdicionarCurso(cursoNome) {
    this.cursosNome = [cursoNome, ...this.cursosNome];
  }
}
