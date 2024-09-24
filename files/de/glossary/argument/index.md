---
title: Argument
slug: Glossary/Argument
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Argumente** sind {{glossary("value", "Werte")}} ({{Glossary("primitive")}} oder {{Glossary("object")}}), die als Eingaben an eine {{Glossary("function")}} übergeben werden. Verwechseln Sie Argumente nicht mit {{Glossary("parameter","Parametern")}}, die die Namen sind, die in der Funktionsdefinition verwendet werden, um auf die Argumente zu verweisen.

Zum Beispiel:

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // Zwei Argumente werden übergeben

// Diese Funktion nimmt zwei Werte
function example(parameter1, parameter2) {
  console.log(parameter1); // Ausgabe = "Web"
  console.log(parameter2); // Ausgabe = "Development"
}
```

Die Reihenfolge der Argumente im Funktionsaufruf sollte die gleiche sein wie die Reihenfolge der Parameter in der Funktionsdefinition.

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // Zwei Argumente werden übergeben

// Diese Funktion nimmt einen einzigen Wert, daher wird das zweite übergebene Argument ignoriert
function example(parameter) {
  console.log(parameter); // Ausgabe = foo
}
```

## Siehe auch

- [Unterschied zwischen Parameter und Argument](/de/docs/Glossary/Parameter#parameters_versus_arguments)
- {{jsxref("Functions/arguments", "arguments")}} JavaScript-Objekt
- Verwandte Glossarbegriffe:
  - {{Glossary("Function")}}
  - {{Glossary("Parameter")}}
  - {{glossary("JavaScript")}}
