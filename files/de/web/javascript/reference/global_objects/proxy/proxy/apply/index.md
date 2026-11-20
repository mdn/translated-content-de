---
title: handler.apply()
short-title: apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
l10n:
  sourceCommit: b251b9bd2932d837806d743051b60aeab778d0f1
---

Die Methode **`handler.apply()`** ist ein Trap für die [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Call]]`, die bei Operationen wie Funktionsaufrufen verwendet wird.

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

Die folgenden Parameter werden an die Methode `apply()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das aufrufbare Zielobjekt.
- `thisArg`
  - : Das `this`-Argument für den Aufruf.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an die Funktion übergebenen Argumente enthält.

### Rückgabewert

Die Methode `apply()` kann einen beliebigen Wert zurückgeben, der den Rückgabewert des Funktionsaufrufs darstellt.

## Beschreibung

### Abgefangene Operationen

Dieser Trap kann die folgenden Operationen abfangen:

- [Funktionsaufruf](/de/docs/Web/JavaScript/Reference/Operators/Function_call): `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

Ebenso jede andere Operation, die die [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Call]]` aufruft.

### Invarianten

Die interne Methode `[[Call]]` des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition gegen die folgende Invariante verstößt:

- `target` muss selbst aufrufbar sein. Das heißt, es muss ein Funktionsobjekt sein.

## Beispiele

### Einen Funktionsaufruf abfangen

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
- [Konstruktor `Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
