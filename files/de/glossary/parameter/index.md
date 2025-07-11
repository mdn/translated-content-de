---
title: Parameter
slug: Glossary/Parameter
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Parameter** sind benannte Variablen, die als Teil einer {{Glossary("function", "Funktion")}} deklariert werden. Sie werden verwendet, um auf die {{Glossary("argument", "Argumente")}} zu verweisen, die in die Funktion übergeben werden.

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
  - : die gebräuchlichste Art; sie übergeben Werte an Funktionen. Abhängig von der Programmiersprache können Eingabeparameter auf verschiedene Arten übergeben werden (z.B. Call-by-Value, Call-by-Address, Call-by-Reference).
- Ausgabe-/Rückgabeparameter
  - : geben in erster Linie mehrere Werte von einer Funktion zurück, werden jedoch nicht empfohlen, da sie Verwirrung stiften

### Parameter versus Argumente

Beachten Sie den Unterschied zwischen _Parametern_ und _Argumenten_:

- Funktionsparameter sind die in der Definition der Funktion aufgelisteten Namen.
- Funktions-{{Glossary("argument", "Argumente")}} sind die tatsächlichen Werte, die an die Funktion übergeben werden.
- Parameter werden mit den Werten der übergebenen Argumente initialisiert.

## Siehe auch

- [Unterschied zwischen _Parametern_ und _Argumenten_](<https://en.wikipedia.org/wiki/Parameter_(computer_programming)#Parameters_and_arguments>)
- [Funktionsdeklaration](/de/docs/Web/JavaScript/Reference/Statements/function)
- [Funktionsausdruck](/de/docs/Web/JavaScript/Reference/Operators/function)
- Verwandte Glossarbegriffe:
  - {{Glossary("Function", "Funktion")}}
  - {{Glossary("Argument", "Argument")}}
