---
title: handler.apply()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/apply
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die Methode **`handler.apply()`** ist eine Trap für die `[[Call]]` [interne Methode eines Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die bei Operationen wie Funktionsaufrufen verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-apply.html", "taller")}}

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
  - : Das Ziel-Callable-Objekt.
- `thisArg`
  - : Das `this`-Argument für den Aufruf.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an die Funktion übergebenen Argumente enthält.

### Rückgabewert

Die Methode `apply()` kann jeden Wert zurückgeben, der den Rückgabewert des Funktionsaufrufs darstellt.

## Beschreibung

### Abfangvorgänge

Diese Trap kann folgende Operationen abfangen:

- Funktionsaufruf: `proxy(...args)`
- {{jsxref("Function.prototype.apply()")}} und {{jsxref("Function.prototype.call()")}}
- {{jsxref("Reflect.apply()")}}

Oder jede andere Operation, die die `[[Call]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Call]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Definition des Handlers gegen eine der folgenden Invarianten verstößt:

- Das `target` muss selbst ein aufrufbares Objekt sein. Das heißt, es muss ein Funktionsobjekt sein.

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
