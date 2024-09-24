---
title: Parameter
slug: Glossary/Parameter
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Parameter** sind benannte Variablen, die als Teil einer {{Glossary("function")}} deklariert werden. Sie werden verwendet, um auf die an die Funktion übergebenen {{Glossary("argument", "arguments")}} zu verweisen.

Zum Beispiel:

```js
const argument1 = "Web";
const argument2 = "Development";
example(argument1, argument2); // zwei Argumente werden übergeben

// Diese Funktion nimmt zwei Werte entgegen
function example(parameter1, parameter2) {
  console.log(parameter1); // Ausgabe = "Web"
  console.log(parameter2); // Ausgabe = "Development"
}
```

Es gibt zwei Arten von Parametern:

- Eingabeparameter
  - : die häufigste Art; sie übergeben Werte an Funktionen. Abhängig von der Programmiersprache können Eingabeparameter auf verschiedene Weisen übergeben werden (z.B. call-by-value, call-by-address, call-by-reference).
- Ausgabe-/Rückgabeparameter
  - : geben in erster Linie mehrere Werte aus einer Funktion zurück, werden jedoch nicht empfohlen, da sie Verwirrung stiften

### Parameter versus Argumente

Beachten Sie den Unterschied zwischen _Parameter_ und _Argumente_:

- Funktionsparameter sind die Namen, die in der Definition der Funktion aufgeführt sind.
- Funktions{{Glossary("argument","arguments")}} sind die tatsächlichen Werte, die an die Funktion übergeben werden.
- Parameter werden mit den Werten der bereitgestellten Argumente initialisiert.

## Siehe auch

- [Unterschied zwischen _Parameter_ und _Argumente_](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>)
- [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function)
- [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function")}}
  - {{Glossary("Argument")}}
