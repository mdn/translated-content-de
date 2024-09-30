---
title: Parameter
slug: Glossary/Parameter
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Parameter** sind benannte Variablen, die als Teil einer [Funktion](/de/docs/Glossary/function) deklariert sind. Sie werden verwendet, um auf die [Argumente](/de/docs/Glossary/argument) zu verweisen, die an die Funktion übergeben werden.

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

- Eingabewerte
  - : die häufigste Art; sie übergeben Werte an Funktionen. Abhängig von der Programmiersprache können Eingabewerte auf verschiedene Weisen übergeben werden (z. B. Call-by-Value, Call-by-Address, Call-by-Reference).
- Ausgabe-/Rückgabewerte
  - : geben hauptsächlich mehrere Werte aus einer Funktion zurück, werden jedoch nicht empfohlen, da sie Verwirrung stiften

### Parameter versus Argumente

Beachten Sie den Unterschied zwischen _Parametern_ und _Argumenten_:

- Funktionsparameter sind die Namen, die in der Definition der Funktion aufgelistet sind.
- Funktions[argumente](/de/docs/Glossary/argument) sind die tatsächlichen Werte, die an die Funktion übergeben werden.
- Parameter werden mit den Werten der bereitgestellten Argumente initialisiert.

## Siehe auch

- [Unterschied zwischen _Parametern_ und _Argumenten_](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>)
- [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function)
- [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- Verwandte Glossarbegriffe:
  - [Funktion](/de/docs/Glossary/Function)
  - [Argument](/de/docs/Glossary/Argument)
