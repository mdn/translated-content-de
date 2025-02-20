---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`handler.apply()`** ist eine Falle für die `[[Call]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die bei Operationen wie Funktionsaufrufen verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.apply()", "taller")}}

```js interactive-example
function sum(a, b) {
  return a + b;
}

const handler = {
  apply: function (target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // Expected output: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  },
};

const proxy1 = new Proxy(sum, handler);

console.log(sum(1, 2));
// Expected output: 3
console.log(proxy1(1, 2));
// Expected output: 30
```

## Syntax

```js-nolint
new Proxy(target, {
  apply(target, thisArg, argumentsList) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die Methode `apply()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt, das aufrufbar ist.
- `thisArg`
  - : Das `this`-Argument für den Aufruf.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an die Funktion übergebenen Argumente enthält.

### Rückgabewert

Die Methode `apply()` kann jeden Wert zurückgeben, der den Rückgabewert des Funktionsaufrufs repräsentiert.

## Beschreibung

### Abfangmechanismen

Diese Falle kann folgende Operationen abfangen:

- Funktionsaufruf: `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

Oder jede andere Operation, die die `[[Call]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Call]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das `target` muss selbst aufrufbar sein. Das bedeutet, es muss ein Funktionsobjekt sein.

## Beispiele

### Abfangen eines Funktionsaufrufs

Der folgende Code fängt einen Funktionsaufruf ab.

```js
const p = new Proxy(function () {}, {
  apply(target, thisArg, argumentsList) {
    console.log(`called: ${argumentsList}`);
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  },
});

console.log(p(1, 2, 3)); // "called: 1,2,3"
// 6
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
