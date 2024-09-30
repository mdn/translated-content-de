---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.construct()`**-Methode ist eine Falle für die `[[Construct]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/new", "new")}}-Operator verwendet wird. Damit die new-Operation auf dem resultierenden Proxy-Objekt gültig ist, muss das zur Initialisierung des Proxy verwendete Ziel selbst ein gültiger Konstruktor sein.

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  construct(target, argumentsList, newTarget) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `construct()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielkonstruktorobjekt.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an den Konstruktor übergebenen Argumente enthält.
- `newTarget`
  - : Der ursprünglich aufgerufene Konstruktor.

### Rückgabewert

Die `construct()`-Methode muss ein Objekt zurückgeben, das das neu erstellte Objekt repräsentiert.

## Beschreibung

### Abfangungen

Diese Falle kann folgende Operationen abfangen:

- Der [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

Oder jede andere Operation, die die `[[Construct]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Construct]]`-interne Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der `target` muss selbst ein Konstruktor sein.
- Das Ergebnis muss ein {{jsxref("Object")}} sein.

## Beispiele

### Abfangen des new-Operators

Der folgende Code fängt den {{jsxref("Operators/new", "new")}}-Operator ab.

```js
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    console.log(`called: ${argumentsList}`);
    return { value: argumentsList[0] * 10 };
  },
});

console.log(new p(1).value); // "called: 1"
// 10
```

Der folgende Code verletzt die Invariante.

```js example-bad
const p = new Proxy(function () {}, {
  construct(target, argumentsList, newTarget) {
    return 1;
  },
});

new p(); // TypeError is thrown
```

Der folgende Code initialisiert den Proxy unsachgemäß. Der `target` bei der Proxy-Initialisierung muss für den {{jsxref("Operators/new", "new")}}-Operator selbst ein gültiger Konstruktor sein.

```js example-bad
const p = new Proxy(
  {},
  {
    construct(target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError is thrown, "p" is not a constructor
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Reflect.construct()")}}
