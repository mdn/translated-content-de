---
title: handler.apply()
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.apply()`**-Methode ist eine Falle für die `[[Call]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie Funktionsaufrufen verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.apply()", "taller")}}

```js interactive-example
function sum(a, b) {
  return a + b;
}

const handler = {
  apply(target, thisArg, argumentsList) {
    console.log(`Calculate sum: ${argumentsList}`);
    // Expected output: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  },
};

const proxy = new Proxy(sum, handler);

console.log(sum(1, 2));
// Expected output: 3
console.log(proxy(1, 2));
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

Die folgenden Parameter werden an die `apply()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das aufrufbare Zielobjekt.
- `thisArg`
  - : Das `this`-Argument für den Aufruf.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an die Funktion übergebenen Argumente enthält.

### Rückgabewert

Die `apply()`-Methode kann jeden Wert zurückgeben, der den Rückgabewert des Funktionsaufrufs darstellt.

## Beschreibung

### Abfangmöglichkeiten

Diese Falle kann folgende Operationen abfangen:

- Funktionsaufruf: `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

Oder jede andere Operation, die die `[[Call]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Call]]`-Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Definition des Handlers eine der folgenden Invarianten verletzt:

- Das `target` muss selbst aufrufbar sein. Das heißt, es muss sich um ein Funktionsobjekt handeln.

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
