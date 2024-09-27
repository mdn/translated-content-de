---
title: Parameter
slug: Glossary/Parameter
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

**Parameter** sind benannte Variablen, die als Teil einer [function](/de/docs/Glossary/function) deklariert werden. Sie werden verwendet, um auf die [arguments](/de/docs/Glossary/argument) zu verweisen, die in die Funktion übergeben werden.

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
  - : die häufigste Art; sie übermitteln Werte an Funktionen. Je nach Programmiersprache können Eingabeparameter auf verschiedene Weise übergeben werden (z.B. Call-by-Value, Call-by-Address, Call-by-Reference).
- Ausgabe/Rückgabeparameter
  - : hauptsächlich, um mehrere Werte aus einer Funktion zurückzugeben, aber sie werden nicht empfohlen, da sie Verwirrung verursachen

### Parameter versus Argumente

Beachten Sie den Unterschied zwischen _Parameter_ und _Argumente_:

- Funktionsparameter sind die Namen, die in der Definition der Funktion aufgeführt sind.
- Funktions-[arguments](/de/docs/Glossary/argument) sind die tatsächlichen Werte, die der Funktion übergeben werden.
- Parameter werden auf die Werte der bereitgestellten Argumente initialisiert.

## Siehe auch

- [Unterschied zwischen _Parameter_ und _Argumente_](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>)
- [Function declaration](/de/docs/Web/JavaScript/Reference/Statements/function)
- [Function expression](/de/docs/Web/JavaScript/Reference/Operators/function)
- Verwandte Glossarbegriffe:
  - [Function](/de/docs/Glossary/Function)
  - [Argument](/de/docs/Glossary/Argument)
