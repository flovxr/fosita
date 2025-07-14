const malla = [
  {
    semestre: "I Semestre",
    materias: [
      "Biología Celular y Molecular",
      "Integración I",
      "Fundamentos de la Teología",
      "Fundamentos de la Filosofía",
      "Morfología Humana",
      "Biomatemáticas",
      "Introducción a la Comunicación Médica",
      "Química",
      "Inglés",
    ],
  },
  {
    semestre: "II Semestre",
    materias: [
      "Biología Celular y Molecular",
      "Integración I",
      "Fundamentos de la Teología",
      "Fundamentos de la Filosofía",
      "Morfología Humana",
      "Bioquímica I",
      "Biofísica",
      "Introducción a la Medicina",
      "Bioestadística",
    ],
  },
  {
    semestre: "III Semestre",
    materias: [
      "Fisiología",
      "Integración II",
      "Antropología Médica",
      "Microbiología",
      "Atención Primaria en Salud",
      "Histología",
      "Neurociencia",
      "Bioquímica II",
      "Metodología de la Investigación",
    ],
  },
  {
    semestre: "IV Semestre",
    materias: [
      "Fisiología",
      "Integración II",
      "Antropología Médica",
      "Microbiología",
      "Atención Primaria en Salud",
      "Integración del Saber",
      "Epidemiología",
      "Farmacología",
      "Inmunología",
    ],
  },
  {
    semestre: "V Semestre",
    materias: [
      "Integración III",
      "Salud Pública y Gestión",
      "Fisiopatología",
      "Fundamentos de la Acción Médica",
      "Semiología",
      "Patología General",
      "Optativo de Profundización",
    ],
  },
  {
    semestre: "VI Semestre",
    materias: [
      "Integración III",
      "Salud Pública y Gestión",
      "Fisiopatología",
      "Fundamentos de la Acción Médica",
      "Anatomía Patológica",
      "Medicina Integrada I",
      "Patología Quirúrgica",
      "Integración del Saber",
    ],
  },
  {
    semestre: "VII Semestre",
    materias: [
      "Ciencias Básicas Aplicadas",
      "Proyecto de Investigación",
      "Cirugía",
      "Bioética General",
      "Geriatría y Cuidados en Situaciones Especiales",
      "Medicina Integrada II",
      "Integración IV",
      "Optativo de Profundización",
    ],
  },
  {
    semestre: "VIII Semestre",
    materias: [
      "Ciencias Básicas Aplicadas",
      "Proyecto de Investigación",
      "Cirugía",
      "Bioética General",
      "Geriatría y Cuidados en Situaciones Especiales",
      "Medicina Integrada II",
      "Integración IV",
      "Integración del Saber",
    ],
  },
  {
    semestre: "IX Semestre",
    materias: [
      "Obstetricia y Ginecología",
      "Pediatría y Cirugía Infantil",
      "Psiquiatría y Psicopatología",
      "Bioética Especial",
      "Integración V",
      "Neurociencia y Neurosurugía",
      "Especialidades Médico-Quirúrgicas",
      "Integración del Saber",
    ],
  },
  {
    semestre: "X Semestre",
    materias: [
      "Obstetricia y Ginecología",
      "Pediatría y Cirugía Infantil",
      "Psiquiatría y Psicopatología",
      "Bioética Especial",
      "Integración V",
      "Neurociencia y Neurosurugía",
      "Especialidades Médico-Quirúrgicas",
      "Optativo de Profundización",
      "Medicina Legal",
    ],
  },
  {
    semestre: "XI Semestre",
    materias: [
      "Internado de Medicina Interna",
      "Internado de Cirugía",
      "Internado de Medicina Familiar y Comunitaria",
      "Internado de Pediatría y Cirugía Infantil",
      "Internado de Obstetricia y Ginecología",
      "Internado de Especialidad",
      "Práctica de Bioética Clínica I",
    ],
  },
  {
    semestre: "XII Semestre",
    materias: [
      "Internado de Medicina Interna",
      "Internado de Cirugía",
      "Internado de Medicina Familiar y Comunitaria",
      "Internado de Pediatría y Cirugía Infantil",
      "Internado de Obstetricia y Ginecología",
      "Internado de Especialidad",
      "Práctica de Bioética Clínica II",
    ],
  },
  {
    semestre: "XIII Semestre",
    materias: [
      "Internado de Medicina Interna",
      "Internado de Cirugía",
      "Internado de Medicina Familiar y Comunitaria",
      "Internado de Pediatría y Cirugía Infantil",
      "Internado de Obstetricia y Ginecología",
      "Internado de Especialidad",
      "Práctica de Bioética Clínica II",
    ],
  },
  {
    semestre: "XIV Semestre",
    materias: [
      "Internado de Medicina Interna",
      "Internado de Cirugía",
      "Internado de Medicina Familiar y Comunitaria",
      "Internado de Pediatría y Cirugía Infantil",
      "Internado de Obstetricia y Ginecología",
      "Internado de Especialidad",
      "Práctica de Bioética Clínica II",
    ],
  },
];

// Estado guardado en localStorage
const STORAGE_KEY = "mallaMedicinaAprobadas";
let aprobadas = {};

function cargarEstado() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) aprobadas = JSON.parse(saved);
}

function guardarEstado() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(aprobadas));
}

function estaAprobada(nombre) {
  return !!aprobadas[nombre];
}

function crearMalla() {
  const grid = document.getElementById("grid");
  grid.innerHTML = "";
  malla.forEach((semestreObj, i) => {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");
    const titulo = document.createElement("h2");
    titulo.textContent = semestreObj.semestre;
    semestreDiv.appendChild(titulo);
    const ul = document.createElement("ul");
    ul.classList.add("materia-list");
    semestreObj.materias.forEach((materia) => {
      const li = document.createElement("li");
      li.textContent = materia;
      li.classList.add("materia");
      if (i === 0) {
        li.classList.remove("bloqueada");
      } else {
        li.classList.add("bloqueada");
      }
      if (estaAprobada(materia)) {
        li.classList.add("aprobada");
        li.classList.remove("bloqueada");
      }
      li.addEventListener("click", () => {
        if (li.classList.contains("bloqueada")) return;
        if (li.classList.contains("aprobada")) {
          li.classList.remove("aprobada");
          aprobadas[materia] = false;
        } else {
          li.classList.add("aprobada");
          aprobadas[materia] = true;
        }
        guardarEstado();
        actualizarDesbloqueo();
      });
      ul.appendChild(li);
    });
    semestreDiv.appendChild(ul);
    grid.appendChild(semestreDiv);
  });
}

function actualizarDesbloqueo() {
  const grid = document.getElementById("grid");
  const semestresDivs = grid.querySelectorAll(".semestre");
  for (let i = 0; i < malla.length; i++) {
    const semestre = malla[i];
    const semestreDiv = semestresDivs[i];
    const materiasLis = semestreDiv.querySelectorAll(".materia");
    if (i === 0) {
      materiasLis.forEach((li) => li.classList.remove("bloqueada"));
      continue;
    }
    const semestreAnterior = malla[i - 1];
    let todasPreviasAprobadas = semestreAnterior.materias.every((m) =>
      estaAprobada(m)
    );
    materiasLis.forEach((li) => {
      if (todasPreviasAprobadas) {
        if (!estaAprobada(li.textContent)) {
          li.classList.remove("bloqueada");
        }
      } else {
        if (!estaAprobada(li.textContent)) {
          li.classList.add("bloqueada");
          li.classList.remove("aprobada");
          aprobadas[li.textContent] = false;
        }
      }
    });
  }
}

function init() {
  cargarEstado();
  crearMalla();
  actualizarDesbloqueo();
}

window.onload = init;
