---
title: "TypeError: already executing generator"
slug: Web/JavaScript/Reference/Errors/Already_executing_generator
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Die JavaScript-Ausnahme "TypeError: already executing generator" tritt auf, wenn ein [generator](/de/docs/Web/JavaScript/Reference/Global_Objects/Generator) mithilfe einer seiner Methoden (wie {{jsxref("Generator/next", "next()")}}) fortgesetzt wird, während der Rumpf der Generatorfunktion selbst ausgeführt wird.

## Nachricht

```plain
TypeError: Generator is already running (V8-based)
TypeError: already executing generator (Firefox)
TypeError: Generator is executing (Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

Die Methoden des Generators, {{jsxref("Generator/next", "next()")}}, {{jsxref("Generator/return", "return()")}}, und {{jsxref("Generator/throw", "throw()")}}, sollen die Ausführung einer Generatorfunktion fortsetzen, wenn sie nach einem `yield`-Ausdruck oder vor der ersten Anweisung pausiert ist. Wenn ein Aufruf einer dieser Methoden erfolgt, während die Generatorfunktion ausgeführt wird, wird der Fehler ausgelöst. Wenn Sie innerhalb der Generatorfunktion zurückkehren oder eine Ausnahme werfen möchten, verwenden Sie die {{jsxref("Statements/return", "return")}}-Anweisung bzw. die {{jsxref("Statements/throw", "throw")}}-Anweisung.

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

- [Iterators and generators](/de/docs/Web/JavaScript/Guide/Iterators_and_generators)
- [Iteration protocols](/de/docs/Web/JavaScript/Reference/Iteration_protocols)
- {{jsxref("Statements/function*", "function*")}}
- {{jsxref("Generator")}}
