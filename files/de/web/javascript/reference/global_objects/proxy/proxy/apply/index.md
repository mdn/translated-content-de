---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.apply()`** Methode ist ein Trap für die `[[Call]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie Funktionsaufrufen verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

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
  - : Das zu behandelnde aufrufbare Objekt.
- `thisArg`
  - : Das `this`-Argument für den Aufruf.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an die Funktion übergebenen Argumente enthält.

### Rückgabewert

Die `apply()`-Methode kann einen beliebigen Wert zurückgeben, der den Rückgabewert des Funktionsaufrufs darstellt.

## Beschreibung

### Abfangmechanismen

Dieser Trap kann folgende Operationen abfangen:

- Funktionsaufruf: `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

Oder jede andere Operation, die die `[[Call]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Call]]` interne Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition gegen eine der folgenden Invarianten verstößt:

- Das `target` muss selbst aufrufbar sein. Das heißt, es muss ein Funktionsobjekt sein.

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
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Function.prototype.apply()")}}
- {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}
