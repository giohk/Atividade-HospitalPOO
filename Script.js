// Classe base: Médico
class Medico {
    constructor(nome, especialidade) {
        this.nome = nome;
        this.especialidade = especialidade;
    }

    falar() {
        console.log(`${this.nome}, o(a) Médico(a), está falando.`);
    }
}

// Classe Médico Cirurgião (herda de Médico)
class MedicoCirurgiao extends Medico {
    constructor(nome) {
        super(nome, "Cirurgião");
    }

    falar() {
        console.log(`${this.nome}, o(a) Cirurgião(a), diz: "Estou preparando para a cirurgia."`);
    }
}

// Classe Médico Clínico Geral (herda de Médico)
class MedicoClinicoGeral extends Medico {
    constructor(nome) {
        super(nome, "Clínico Geral");
    }

    falar() {
        console.log(`${this.nome}, o(a) Clínico(a) Geral, diz: "Estou fazendo a consulta clínica."`);
    }
}

// Classe Médico Pediatra (herda de Médico)
class MedicoPediatra extends Medico {
    constructor(nome) {
        super(nome, "Pediatra");
    }

    falar() {
        console.log(`${this.nome}, o(a) Pediatra, diz: "Estou cuidando das crianças."`);
    }
}

// Classe Médico Ginecologista (herda de Médico)
class MedicoGinecologista extends Medico {
    constructor(nome) {
        super(nome, "Ginecologista");
    }

    falar() {
        console.log(`${this.nome}, o(a) Ginecologista, diz: "Estou realizando exames ginecológicos."`);
    }
}

// Classe Médico Cardiologista (herda de Médico)
class MedicoCardiologista extends Medico {
    constructor(nome) {
        super(nome, "Cardiologista");
    }

    falar() {
        console.log(`${this.nome}, o(a) Cardiologista, diz: "Estou monitorando a saúde do coração."`);
    }
}

// Classe Médico Ortopedista (herda de Médico)
class MedicoOrtopedista extends Medico {
    constructor(nome) {
        super(nome, "Ortopedista");
    }

    falar() {
        console.log(`${this.nome}, o(a) Ortopedista, diz: "Estou tratando fraturas e lesões ósseas."`);
    }
}

// Classe Médico Dermatologista (herda de Médico)
class MedicoDermatologista extends Medico {
    constructor(nome) {
        super(nome, "Dermatologista");
    }

    falar() {
        console.log(`${this.nome}, o(a) Dermatologista, diz: "Estou tratando doenças de pele."`);
    }
}

// Criando instâncias de médicos
const cirurgiao = new MedicoCirurgiao("Dr. Silva");
const clinicoGeral = new MedicoClinicoGeral("Dr. Almeida");
const pediatra = new MedicoPediatra("Dr. Costa");
const ginecologista = new MedicoGinecologista("Dra. Oliveira");
const cardiologista = new MedicoCardiologista("Dr. Rocha");
const ortopedista = new MedicoOrtopedista("Dr. Martins");
const dermatologista = new MedicoDermatologista("Dra. Souza");

// Testando os métodos
cirurgiao.falar();
clinicoGeral.falar();
pediatra.falar();
ginecologista.falar();
cardiologista.falar();
ortopedista.falar();
dermatologista.falar();
