---
title: "TypeError: already executing generator"
slug: Web/JavaScript/Reference/Errors/Already_executing_generator
l10n:
  sourceCommit: af8c003be438157fb59397347ca766bf997c7934
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "TypeError: already executing generator" tritt auf, wenn ein [Generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) mit einer seiner Methoden (wie {{jsxref("Generator/next", "next()")}}) fortgesetzt wird, während der Funktionskörper des Generators selbst ausgeführt wird.

## Meldung

```plain
TypeError: Generator is already running (V8-based)
TypeError: already executing generator (Firefox)
TypeError: Generator is executing (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Die Methoden eines Generators, {{jsxref("Generator/next", "next()")}}, {{jsxref("Generator/return", "return()")}}, und {{jsxref("Generator/throw", "throw()")}}, sind dazu gedacht, die Ausführung einer Generatorfunktion fortzusetzen, wenn sie nach einem `yield`-Ausdruck pausiert oder vor der ersten Anweisung steht. Wenn ein Aufruf einer dieser Methoden erfolgt, während die Generatorfunktion ausgeführt wird, wird der Fehler ausgelöst. Wenn Sie innerhalb der Generatorfunktion zurückkehren oder einen Fehler werfen möchten, verwenden Sie bitte die {{jsxref("Statements/return", "return")}}-Anweisung oder die {{jsxref("Statements/throw", "throw")}}-Anweisung.

## Beispiele

```js example-bad
let it;
function* getNumbers(times) {
  if (times <= 0) {
    it.throw(new Error("times must be greater than 0"));
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next();
```

```js example-good
let it;
function* getNumbers(times) {
  if (times <= 0) {
    throw new Error("times must be greater than 0");
  }
  for (let i = 0; i < times; i++) {
    yield i;
  }
}
it = getNumbers(3);
it.next(); // { value: 0, done: false }
```

## Siehe auch

- [Iteratoren und Generatoren](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
- [Iterationsprotokolle](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Generator")}}
