---
title: Parameter
slug: Glossary/Parameter
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

**Parameter** sind benannte Variablen, die als Teil einer {{Glossary("function", "Funktion")}} deklariert werden. Sie werden verwendet, um auf die an die Funktion übergebenen {{Glossary("argument", "Argumente")}} zu verweisen.

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

Es gibt zwei Arten von Parametern:

- Eingabeparameter
  - : die häufigste Art; sie übergeben Werte an Funktionen. Je nach Programmiersprache können Eingabeparameter auf verschiedene Weise übergeben werden (z.B. Call-by-Value, Call-by-Address, Call-by-Reference).
- Ausgabe-/Rückgabeparameter
  - : dienen hauptsächlich dazu, mehrere Werte aus einer Funktion zurückzugeben, werden jedoch nicht empfohlen, da sie Verwirrung verursachen

## Parameter versus Argumente

Beachten Sie den Unterschied zwischen _Parametern_ und _Argumenten_:

- Funktionsparameter sind die in der Definition der Funktion aufgelisteten Namen.
- {{Glossary("argument", "Argumente")}} sind die tatsächlichen Werte, die an die Funktion übergeben werden.
- Parameter werden mit den Werten der bereitgestellten Argumente initialisiert.

## Siehe auch

- [Unterschied zwischen _Parametern_ und _Argumenten_](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>)
- [Funktionserklärung (function declaration)](/de/docs/Web/JavaScript/Reference/Statements/function)
- [Funktionsausdruck (function expression)](/de/docs/Web/JavaScript/Reference/Operators/function)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Funktion")}}
  - {{Glossary("Argument", "Argument")}}
