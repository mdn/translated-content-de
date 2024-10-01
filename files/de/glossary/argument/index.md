---
title: Argument
slug: Glossary/Argument
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

**Argumente** sind {{Glossary("value", "Werte")}} ({{Glossary("primitive", "primitive")}} oder {{Glossary("object", "Objekt")}}), die als Eingabe an eine {{Glossary("function", "Funktion")}} übergeben werden. Verwechseln Sie Argumente nicht mit {{Glossary("parameter", "Parametern")}}, die die Namen sind, die in der Funktionsdefinition verwendet werden, um die Argumente zu referenzieren.

Zum Beispiel:

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // passing two arguments

// This function takes two values
function example(parameter1, parameter2) {
  console.log(parameter1); // Output = "Web"
  console.log(parameter2); // Output = "Development"
}
```

Die Reihenfolge der Argumente innerhalb des Funktionsaufrufs sollte dieselbe sein wie die Reihenfolge der Parameter in der Funktionsdefinition.

```js
const argument1 = "foo";
const argument2 = [1, 2, 3];
example(argument1, argument2); // passing two arguments

// This function takes a single value, so the second argument passed is ignored
function example(parameter) {
  console.log(parameter); // Output = foo
}
```

## Siehe auch

- {{Glossary("Parameter#parameters_versus_arguments", "Unterschied zwischen Parameter und Argument")}}
- {{jsxref("Functions/arguments", "arguments")}} JavaScript-Objekt
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Funktion")}}
  - {{Glossary("Parameter", "Parameter")}}
  - {{Glossary("JavaScript", "JavaScript")}}
