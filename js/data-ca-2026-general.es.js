/*
  Spanish translation of data-ca-2026-general.js.
  Any field left out falls back to English. Proper names (organizations, people) stay in English.

  STATUS: machine-assisted draft. Needs review by a native Spanish speaker, and official titles ("title")
  should be matched to the Spanish edition of the Official Voter Guide (Guía Oficial de Información para el Votante).
*/

window.ELECTION_I18N = window.ELECTION_I18N || {};
window.ELECTION_I18N.es = {
  name: "Elección General del 3 de noviembre de 2026",
  props: {
    "1": {
      nickname: "Bono de vivienda",
      title: "Autoriza bonos para programas de vivienda asequible",
      placedBy: "Legislatura",
      eli5: "El estado quiere pedir dinero prestado para construir viviendas más baratas y ayudar a veteranos a comprar casa. Como una hipoteca, el estado lo paga con intereses durante unos 25 años, usando dinero del presupuesto estatal.",
      yesMeans: "El estado puede pedir prestados $11,250 millones para vivienda asequible y préstamos hipotecarios para veteranos.",
      noMeans: "El estado no pide prestado este dinero para estos programas de vivienda.",
      yesSays: "A California le faltan viviendas que la gente pueda pagar. Esto las construye y ayuda a veteranos a comprar casa.",
      noSays: "Esto aumenta la deuda del estado y no resuelve por qué construir vivienda es tan caro.",
      plain: [
        "$10,000 millones van a programas estatales de vivienda: apartamentos de alquiler asequible, ayuda para comprar la primera casa y vivienda para trabajadores agrícolas, personas mayores, estudiantes universitarios y personas sin hogar.",
        "Unos $5,100 millones de eso van al principal programa estatal que construye edificios de apartamentos asequibles, y $1,150 millones a vivienda con servicios de apoyo en el lugar.",
        "$1,250 millones van al programa de préstamos hipotecarios CalVet. Los veteranos pagan esos préstamos con sus pagos de hipoteca."
      ],
      fiscal: "El estado pagaría entre $500 y $600 millones al año durante unos 25 años para pagar los bonos. La LAO estima que el dinero podría ayudar a financiar hasta 40,000 viviendas de alquiler.",
      opponents: ["Algunos legisladores estatales republicanos"]
    },
    "2": {
      nickname: "Fondo para tiempos difíciles",
      title: "Aumenta el fondo de reserva del estado",
      placedBy: "Legislatura",
      eli5: "California tiene una cuenta de ahorros para los años malos. Esto permite al estado ahorrar el doble de lo que puede ahorrar ahora. El punto en debate: el dinero ahorrado no contaría para un límite que a veces obliga a devolver dinero extra a los contribuyentes.",
      yesMeans: "El estado puede ahorrar hasta el 20% de sus ingresos fiscales generales en reservas, en lugar del 10%.",
      noMeans: "Se mantiene el límite actual de ahorro del 10%.",
      yesSays: "Ahorrar más en los años buenos protege las escuelas, la salud y la seguridad pública cuando llega una recesión.",
      noSays: "Crea una laguna para evadir el límite de gasto del estado y hace menos probable que los contribuyentes reciban reembolsos.",
      plain: [
        "Sube el tope de la principal cuenta de ahorros del estado del 10% al 20% de los ingresos fiscales del Fondo General.",
        "El dinero depositado en ahorros ya no contaría para el límite de gasto del estado (el \"límite Gann\"), que normalmente exige devolver el dinero extra a los contribuyentes o dárselo a las escuelas.",
        "Permite usar parte de los ingresos fiscales para pagar la deuda federal del seguro de desempleo del estado, de unos $20,000 millones."
      ],
      fiscal: "No crea ni reduce impuestos. Cambia cuánto dinero puede apartar el estado en ahorros en lugar de gastarlo o devolverlo.",
      opponents: ["Autores del argumento oficial en contra (nombres aún no verificados)"]
    },
    "3": {
      nickname: "Extensión del impuesto a ingresos altos",
      title: "Proporciona fondos permanentes para escuelas y atención médica extendiendo el impuesto existente sobre ingresos altos",
      placedBy: "Legislatura",
      eli5: "Desde 2012, las personas con ingresos muy altos (unos $370,000 o más al año) pagan un poco más de impuesto estatal sobre la renta, y gran parte va a las escuelas. Ese impuesto extra vence en 2030. Esto lo hace permanente. A nadie le sube el impuesto respecto a lo que paga hoy.",
      yesMeans: "Las tasas extra de impuesto sobre la renta para personas de altos ingresos, que vencen en 2030, se vuelven permanentes.",
      noMeans: "Esas tasas extra terminan después de 2030, como está previsto.",
      yesSays: "Este dinero es una fuente clave de fondos para las escuelas. Perderlo significa despidos y recortes de programas.",
      noSays: "California ya tiene algunos de los impuestos sobre la renta más altos del país. Personas y empleos podrían irse.",
      plain: [
        "Los votantes subieron el impuesto a las personas de altos ingresos en 2012 (Prop 30) y lo extendieron en 2016 (Prop 55) hasta 2030.",
        "Esto elimina la fecha de vencimiento de 2030. Las tasas se aplican a ingresos de más de unos $370,000 al año para una persona soltera (ajustado cada año por inflación).",
        "No sube la tasa actual de impuestos de nadie."
      ],
      fiscal: "Mantiene entre $5,000 y $15,000 millones al año en ingresos estatales. La LAO estima que alrededor del 40% iría normalmente a escuelas y colegios comunitarios."
    },
    "4": {
      nickname: "Financiamiento público de campañas",
      title: "Deroga la prohibición del financiamiento público de campañas electorales",
      placedBy: "Legislatura",
      eli5: "Hoy California prohíbe usar dinero público para ayudar a pagar campañas políticas. Esto elimina la prohibición. No crea ningún programa por sí solo. Una ciudad, un condado o el estado tendría que decidir crearlo después.",
      yesMeans: "Los gobiernos estatales y locales podrían crear programas de financiamiento público para campañas.",
      noMeans: "Se mantiene la prohibición actual del financiamiento público de campañas.",
      yesSays: "El financiamiento público reduce el poder de los grandes donantes privados y permite postularse a candidatos sin patrocinadores ricos.",
      noSays: "Los contribuyentes terminarían pagando a candidatos que no apoyan, y los programas cuestan dinero.",
      plain: [
        "Elimina la prohibición de usar dinero público para ayudar a financiar campañas de candidatos.",
        "No crea un programa ni gasta dinero por sí solo. Una ciudad, un condado o el estado tendría que crearlo más adelante.",
        "Ningún programa podría usar dinero destinado a educación, transporte o seguridad pública."
      ],
      fiscal: "Unos cientos de miles de dólares al año para que la comisión estatal de ética (FPPC) asesore a los gobiernos. El costo de cualquier programa dependería de decisiones futuras."
    },
    "5": {
      nickname: "Elecciones de destitución",
      title: "Cambia el proceso de elecciones de destitución de funcionarios estatales",
      placedBy: "Legislatura",
      eli5: "Hoy, cuando los votantes intentan destituir a un funcionario estatal como el gobernador, la misma boleta incluye posibles reemplazos, y uno puede ganar con una pequeña parte del voto. Esto elimina esa lista. Si se destituye al funcionario, entra el suplente normal, como el vicegobernador en el caso del gobernador.",
      yesMeans: "Las boletas de destitución ya no incluirían una lista de candidatos de reemplazo. La vacante se llenaría según las reglas normales de sucesión.",
      noMeans: "Los votantes siguen eligiendo un reemplazo en la misma boleta de la destitución.",
      yesSays: "Los votantes mantienen el poder de destituir, y un reemplazo no puede ganar con una pequeña parte del voto.",
      noSays: "Quita a los votantes el derecho de elegir al reemplazo y se lo da a los políticos.",
      plain: [
        "Hoy la boleta de destitución hace dos preguntas: ¿destituir al funcionario? y ¿quién lo reemplaza?",
        "Con la Prop 5 solo queda la primera. Si se destituye a un gobernador, asume el vicegobernador, y los votantes podrían elegir un nuevo gobernador en la siguiente elección estatal.",
        "Otros cargos estatales se llenarían por nombramiento según las reglas actuales. Los escaños legislativos tendrían una elección especial aparte.",
        "Un funcionario destituido no podría ser nombrado para la vacante, pero sí podría postularse en una elección especial posterior."
      ],
      fiscal: "Podría cambiar el costo de las elecciones según cuántas destituciones y elecciones especiales ocurran. Vea el análisis de la LAO.",
      supporters: ["Autores del argumento oficial a favor (nombres aún no verificados)"],
      opponents: ["Autores del argumento oficial en contra (nombres aún no verificados)"]
    },
    "37": {
      nickname: "Préstamos para compradores de ingresos medios",
      title: "Crea un programa de préstamos para compradores de ingresos medios de viviendas nuevas calificadas",
      placedBy: "Votantes (petición con firmas)",
      eli5: "Esto crea un programa estatal que presta a compradores de ingresos medios hasta el 17% del precio de una casa nueva, para que su hipoteca normal sea más pequeña. Los compradores lo devuelven. El programa pide prestados hasta $25,000 millones, y los pagos de los préstamos están diseñados para cubrirlo.",
      yesMeans: "Una agencia estatal podría emitir hasta $25,000 millones en bonos para ofrecer segundas hipotecas a compradores de ingresos medios de casas nuevas.",
      noMeans: "No se crea un nuevo programa estatal de segundas hipotecas.",
      yesSays: "Ayuda a familias trabajadoras a comprar una casa nueva sin costo para los contribuyentes, y hace que se construyan más viviendas.",
      noSays: "Los enganches bajos aumentan el riesgo de impago, no da prioridad a quienes compran por primera vez y podría empujar la construcción lejos de las ciudades.",
      plain: [
        "La Agencia de Financiamiento de Vivienda de California ofrecería segundas hipotecas de tasa fija que cubren hasta el 17% del precio de una casa recién construida.",
        "Para calificar: vivir en California al menos un año, vivir en la casa, ganar menos del 200% del ingreso medio local y dar al menos un 3% de enganche.",
        "Solo califican casas nuevas (y algunos edificios no residenciales convertidos)."
      ],
      fiscal: "La LAO dice que probablemente no habría costo directo para el estado, porque los pagos de los prestatarios están diseñados para pagar los bonos. Si muchos no pagan, podría no alcanzar para cubrirlos.",
      supporters: ["Exlíder del Senado Robert Hertzberg (patrocinador)", "California Teachers Association", "United Nurses Associations of California", "Sindicatos de la construcción"],
      opponents: ["League of Women Voters of California", "No se presentó un argumento oficial en contra"],
      money: { yes: "Más de $22 millones recaudados, incluyendo de la California Association of Realtors y sindicatos de la construcción.", no: "No se reporta una campaña de oposición importante." }
    },
    "38": {
      nickname: "Bono para investigación en inmunología",
      title: "Autoriza bonos para investigación médica en inmunología",
      placedBy: "Votantes (petición con firmas)",
      eli5: "El estado pediría prestados $8,400 millones para investigación médica sobre el sistema inmunológico, enfocada en enfermedades como el cáncer y el Alzheimer. La mitad del dinero iría a un solo instituto de investigación. CalMatters informa que el principal financiador de la medida cofundó el instituto que probablemente recibiría esa mitad.",
      yesMeans: "El estado pide prestados $8,400 millones para investigar tratamientos del sistema inmunológico contra enfermedades como el cáncer y el Alzheimer.",
      noMeans: "El estado no pide prestado este dinero.",
      yesSays: "La inmunoterapia podría llevar a curas, y los fondos federales para investigación se están recortando.",
      noSays: "La mitad del dinero va a un instituto elegido por los autores de la medida, sin competencia abierta.",
      plain: [
        "Crea un bono de $8,400 millones para investigación en inmunología sobre cáncer, enfermedades del corazón, Alzheimer y otras enfermedades.",
        "La mitad va a un instituto de investigación afiliado a la Universidad de California. La otra mitad se reparte entre universidades públicas y organizaciones sin fines de lucro seleccionadas.",
        "Los medicamentos creados con este dinero deben venderse a los californianos con un 20% de descuento, y el 10% de sus ingresos regresa al estado."
      ],
      fiscal: "Entre $500 y $600 millones al año durante unos 20 años para pagar los bonos. Parte podría compensarse si la investigación genera ingresos.",
      money: { yes: "El principal patrocinador, Gary Michelson, y su fundación dieron al menos $8.2 millones; el cofundador Meyer Luskin dio al menos $5 millones. CalMatters encontró que el instituto que ellos cofundaron probablemente es el único que califica para la parte de $4,200 millones.", no: "No se reporta gasto importante de la oposición." }
    },
    "39": {
      nickname: "Identificación para votar",
      title: "Prohíbe votar a los ciudadanos a menos que presenten una identificación emitida por el gobierno",
      placedBy: "Votantes (petición con firmas)",
      eli5: "Tendrías que mostrar una identificación del gobierno para votar en persona, y escribir parte de un número de identificación en el sobre de tu boleta por correo. El estado ofrecería tarjetas de identificación gratis. Hoy la mayoría de los votantes de California no tiene que mostrar identificación.",
      yesMeans: "Se necesitaría una identificación del gobierno para votar en persona, y parte de un número de identificación para votar por correo.",
      noMeans: "Las reglas de votación siguen igual. California no exige identificación a la mayoría de los votantes.",
      yesSays: "La mayoría de los estados exige identificación. Aumenta la confianza en las elecciones, y el estado daría identificaciones gratis.",
      noSays: "Votantes elegibles sin identificación, sobre todo personas con discapacidad, de bajos ingresos o que se mudaron hace poco, tendrían más dificultad para votar.",
      plain: [
        "Enmienda la constitución estatal para exigir una identificación con foto emitida por el gobierno para votar en persona.",
        "Quienes votan por correo escribirían los últimos cuatro dígitos de un número de identificación del gobierno en el sobre de la boleta.",
        "El estado tendría que ofrecer tarjetas de identificación gratis para votar y reforzar el mantenimiento de las listas de votantes."
      ],
      fiscal: "Costos estatales y de condados de decenas de millones a unos cientos de millones de dólares al año.",
      money: { yes: "El principal donante es el multimillonario de Wisconsin Richard Uihlein, con unos $17 millones. Otros: Steve Bray (préstamo de $1 millón), Nicole Shanahan ($370,000) y los gemelos Winklevoss ($250,000).", no: "Entre los donantes: ACLU of Northern California, Reed Hastings ($1 millón), Patty Quillin ($1.5 millones) y Quinn Delaney ($1.5 millones)." }
    },
    "40": {
      nickname: "Impuesto a multimillonarios",
      title: "Impone un impuesto único a ciertos contribuyentes",
      placedBy: "Votantes (petición con firmas)",
      eli5: "Las personas con más de $1,000 millones de patrimonio que vivían en California el 1 de enero de 2026 pagarían un impuesto único del 5% de su riqueza. La mayor parte del dinero iría a la atención médica. Es un solo pago, no un impuesto anual.",
      yesMeans: "Los californianos con más de $1,000 millones de patrimonio pagan un impuesto único del 5% sobre su riqueza, sobre todo para financiar la atención médica.",
      noMeans: "No hay impuesto a la riqueza.",
      yesSays: "Los multimillonarios fueron los que más ganaron con los recientes recortes de impuestos federales, y este dinero protege la atención médica de millones.",
      noSays: "Los multimillonarios se irán del estado, y California perderá ingresos fiscales con el tiempo.",
      plain: [
        "Se aplica a personas que vivían en California el 1 de enero de 2026 y tienen un patrimonio de más de $1,000 millones.",
        "Pagan un impuesto único del 5% de su patrimonio neto, que vence en 2027. Los bienes raíces, las pensiones y las cuentas de jubilación por lo general no cuentan.",
        "La mayor parte del dinero va a programas estatales de salud, con cantidades menores para asistencia alimentaria y educación."
      ],
      fiscal: "Ingresos grandes por una sola vez, pero la cantidad depende mucho de cuántos multimillonarios se queden. Vea el análisis de la LAO para su estimación.",
      supporters: ["SEIU United Healthcare Workers West (patrocinador)", "Partido Demócrata de California"],
      opponents: ["Empresarios de Silicon Valley y grupos empresariales", "Algunas organizaciones de salud y sindicatos"],
      money: { yes: "Unos $31 millones recaudados, sobre todo de SEIU-UHW.", no: "Más de $56 millones en contra, a través de Building a Better California, financiado por el cofundador de Google Sergey Brin y otros multimillonarios." },
      conflictNote: "Las Props 41 y 42 las financia el mismo grupo que se opone a la Prop 40. Si la Prop 42 recibe más votos que la Prop 40, la Prop 40 quedaría anulada aunque también sea aprobada. La Prop 41 también podría bloquearla."
    },
    "41": {
      nickname: "Auditorías y límite de gasto",
      title: "Prohíbe nuevos impuestos estatales cuyos ingresos se excluyan del límite de gasto del estado. Exige auditorías de nuevos impuestos especiales estatales",
      placedBy: "Votantes (petición con firmas)",
      eli5: "Esto hace dos cosas. Exige auditorías periódicas de los programas pagados con nuevos impuestos especiales. También anula nuevos impuestos estatales que se saltan el límite de gasto del estado, lo que según la prensa podría tumbar el impuesto a multimillonarios de la Prop 40.",
      yesMeans: "Los nuevos impuestos estatales no pueden quedar fuera del límite de gasto, y los programas pagados con nuevos impuestos especiales tendrían auditorías periódicas.",
      noMeans: "Las reglas para nuevos impuestos estatales siguen igual.",
      yesSays: "Los votantes merecen auditorías independientes que muestren si el dinero de los impuestos especiales se gasta bien.",
      noSays: "Está escrita para anular el impuesto a multimillonarios y dificulta financiar servicios públicos.",
      plain: [
        "Anula los impuestos estatales aprobados después del 1 de enero de 2026 cuyos ingresos estén exentos del límite de gasto del estado.",
        "Antes de que una iniciativa ciudadana con un impuesto especial llegue a la boleta, el Auditor Estatal revisa los programas que financiaría.",
        "Los programas pagados con impuestos especiales creados después del 1 de enero de 2026 se auditan cada cuatro años."
      ],
      fiscal: "Efecto neto desconocido; depende de decisiones futuras sobre impuestos. Las auditorías costarían unos pocos millones de dólares al año, pagados sobre todo con los impuestos auditados.",
      money: { yes: "Building a Better California (el grupo que se opone a la Prop 40, financiado por Sergey Brin y otros multimillonarios) ha recaudado unos $131 millones para las Props 41 y 42 en conjunto.", no: null },
      conflictNote: "Según CalMatters, la Prop 41 podría bloquear el impuesto a multimillonarios (Prop 40) aunque la Prop 40 sea aprobada."
    },
    "42": {
      nickname: "Prohibición de impuestos a la riqueza y retroactivos",
      title: "Prohíbe nuevos impuestos estatales sobre bienes muebles y ciertos impuestos estatales retroactivos",
      placedBy: "Votantes (petición con firmas)",
      eli5: "Esto prohíbe nuevos impuestos estatales por tener cosas como acciones, negocios o ahorros, y prohíbe impuestos que se apliquen hacia atrás en el tiempo. Busca frenar los impuestos a la riqueza. Si recibe más votos que la Prop 40, la Prop 40 no entraría en vigor.",
      yesMeans: "El estado no puede crear nuevos impuestos por poseer bienes que no sean bienes raíces (como acciones o negocios), ni impuestos retroactivos.",
      noMeans: "No hay nuevos límites para este tipo de impuestos.",
      yesSays: "A nadie se le debería cobrar impuestos solo por tener cuentas de jubilación, inversiones o un negocio, ni por cosas que hizo en el pasado.",
      noSays: "La diseñaron multimillonarios para acabar con el impuesto a multimillonarios y bloquear futuros impuestos a la riqueza extrema.",
      plain: [
        "Prohíbe nuevos impuestos estatales por poseer bienes muebles: todo lo que no sea bienes raíces, incluyendo acciones de empresas, inversiones, cuentas de jubilación y propiedad intelectual.",
        "Prohíbe nuevos impuestos estatales que se apliquen a cosas que la gente hizo o tuvo antes de que el impuesto entrara en vigor.",
        "Se aplica a impuestos aprobados a partir del 1 de enero de 2026 y anula los que estén en conflicto."
      ],
      fiscal: "Sin costo directo por ahora. Limita las opciones futuras del estado para recaudar ingresos.",
      money: { yes: "Building a Better California (el grupo que se opone a la Prop 40, financiado por Sergey Brin y otros multimillonarios) ha recaudado unos $131 millones para las Props 41 y 42 en conjunto.", no: null },
      conflictNote: "Si la Prop 42 recibe más votos a favor que la Prop 40, la Prop 40 (impuesto a multimillonarios) quedaría anulada aunque también sea aprobada."
    },
    "43": {
      nickname: "Dos tercios para impuestos locales",
      title: "Limita la capacidad de los votantes para recaudar ingresos para servicios del gobierno local",
      placedBy: "Votantes (petición con firmas)",
      eli5: "Cuando los residentes juntan firmas para poner en la boleta un impuesto local con un fin específico (como parques o bomberos), hoy puede aprobarse con poco más de la mitad del voto. Esto exigiría dos tercios, lo que hace más difícil aprobar esos impuestos.",
      yesMeans: "Los impuestos especiales locales propuestos por petición ciudadana necesitarían dos tercios de los votos en lugar de mayoría simple.",
      noMeans: "Los impuestos especiales locales propuestos por ciudadanos pueden seguir aprobándose por mayoría simple.",
      yesSays: "Restaura la regla de dos tercios de la Prop 13 y protege a propietarios e inquilinos de nuevos impuestos aprobados en elecciones de baja participación.",
      noSays: "Hace más difícil que las comunidades financien bomberos, el 911, escuelas, calles y vivienda, y deja que una minoría bloquee lo que la mayoría quiere.",
      plain: [
        "Los impuestos especiales son impuestos locales con un fin específico, como parques o servicios de bomberos.",
        "Una decisión de la Corte Suprema de California de 2017 permitió que los impuestos especiales propuestos por petición ciudadana se aprobaran con 50% más uno. Los propuestos por gobiernos locales ya necesitan dos tercios.",
        "A partir del 1 de enero de 2027, los propuestos por ciudadanos también necesitarían dos tercios."
      ],
      fiscal: "Probablemente menos ingresos fiscales locales en el futuro, según qué medidas habrían pasado con mayoría pero no con dos tercios.",
      supporters: ["Grupos antimpuestos y de contribuyentes (nombres aún no verificados)"],
      opponents: ["Defensores de servicios locales y vivienda (nombres aún no verificados)"]
    },
    "44": {
      nickname: "Regla de gasto para clínicas",
      title: "Requisito de gasto para clínicas comunitarias (título oficial aún no confirmado)",
      placedBy: "Votantes (petición con firmas)",
      eli5: "Las clínicas comunitarias que atienden a pacientes de bajos ingresos tendrían que gastar al menos 90 centavos de cada dólar que reciben en atención a pacientes, o pagar multas. La patrocina el mismo sindicato de trabajadores de salud que está detrás de la Prop 40.",
      yesMeans: "Las clínicas comunitarias sin fines de lucro deben gastar al menos el 90% de sus ingresos en atención a pacientes, o enfrentar multas.",
      noMeans: "No hay nuevo requisito de gasto para las clínicas comunitarias.",
      yesSays: "Las clínicas deberían gastar en pacientes, no en sueldos de ejecutivos y gastos administrativos.",
      noSays: "La mayoría de las clínicas no podría cumplir la regla. Las multas podrían obligarlas a recortar servicios o cerrar.",
      plain: [
        "Se aplica a clínicas privadas sin fines de lucro de la red de seguridad que atienden a pacientes de bajos ingresos.",
        "Al menos el 90% de los ingresos anuales debe ir a servicios de salud. Los gastos administrativos y otros quedan limitados al 10%.",
        "El fiscal general decide qué cuenta como atención a pacientes y puede multar a las clínicas que no cumplan."
      ],
      fiscal: "Costos estatales para hacer cumplir la regla. Los opositores estiman que las clínicas podrían deber más de $1,700 millones en multas el primer año; vea la LAO para la estimación neutral.",
      supporters: ["SEIU United Healthcare Workers West (patrocinador)"],
      opponents: ["California Primary Care Association", "California Medical Association", "Planned Parenthood Affiliates of CA", "California Hospital Association", "Partido Demócrata de California"]
    },
    "45": {
      nickname: "Revisión ambiental más rápida",
      title: "Modifica la revisión ambiental para ciertos proyectos",
      placedBy: "Votantes (petición con firmas)",
      eli5: "California exige estudios ambientales antes de construir muchos proyectos, y las demandas sobre esos estudios pueden retrasar todo por años. Esto pone plazos a los estudios y limita esas demandas para proyectos como vivienda, transporte, agua y energía limpia.",
      yesMeans: "Muchos proyectos de vivienda, transporte, agua, energía y salud tendrían revisión ambiental y decisiones judiciales más rápidas.",
      noMeans: "La revisión ambiental (CEQA) sigue igual.",
      yesSays: "Las revisiones y demandas retrasan por años la vivienda y la infraestructura que tanto se necesitan. Los plazos hacen que se construya.",
      noSays: "Debilita las protecciones para las comunidades y el medio ambiente y hace más difícil hacer cumplir la ley.",
      plain: [
        "Cambia la Ley de Calidad Ambiental de California (CEQA) para proyectos que califican: vivienda, transporte, agua, energía limpia, instalaciones de salud, prevención de incendios, escuelas y banda ancha.",
        "Las agencias tendrían plazos, por ejemplo unos 365 días hábiles para terminar un informe completo de impacto ambiental.",
        "Los tribunales tendrían límites sobre qué pruebas pueden considerar y qué remedios pueden ordenar en demandas bajo CEQA."
      ],
      fiscal: "Vea el análisis de la LAO. Los efectos dependen de cuántos proyectos califiquen y de cómo respondan las agencias y los tribunales.",
      supporters: ["California Chamber of Commerce (autor)", "California Children's Hospital Association", "California Water Association", "California Council for Affordable Housing"],
      opponents: ["Coalition for Clean Air", "CA Environmental Voters", "National Wildlife Federation", "Partido Demócrata de California", "Sindicatos"],
      money: { yes: "Financiada por empresas de gas y electricidad, PACs corporativos y un PAC financiado en gran parte por ejecutivos de tecnología.", no: null }
    }
  }
};
