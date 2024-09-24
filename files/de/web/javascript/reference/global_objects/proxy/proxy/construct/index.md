---
title: handler.construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.construct()`**-Methode ist eine Trap für die `[[Construct]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/new", "new")}} Operator benutzt wird. Damit die new-Operation für das resultierende Proxy-Objekt gültig ist, muss das zur Initialisierung des Proxys verwendete Ziel selbst ein gültiger Konstruktor sein.

{{EmbedInteractiveExample("pages/js/proxyhandler-construct.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  construct(target, argumentsList, newTarget) {
  }
})
```

### Parameter

Folgende Parameter werden an die `construct()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Ziel-Konstruktor-Objekt.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an den Konstruktor übergebenen Argumente enthält.
- `newTarget`
  - : Der ursprünglich aufgerufene Konstruktor.

### Rückgabewert

Die `construct()`-Methode muss ein Objekt zurückgeben, das das neu erstellte Objekt repräsentiert.

## Beschreibung

### Abfangmöglichkeiten

Diese Trap kann folgende Operationen abfangen:

- Den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

Oder jede andere Operation, die die `[[Construct]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Construct]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das `target` muss selbst ein Konstruktor sein.
- Das Ergebnis muss ein {{jsxref("Object")}} sein.

## Beispiele

### Den new Operator abfangen

Der folgende Code fängt den {{jsxref("Operators/new", "new")}} Operator ab.

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

new p(); // TypeError wird ausgelöst
```

Der folgende Code initialisiert den Proxy unsachgemäß. Das `target` in der Proxy-Initialisierung muss selbst ein gültiger Konstruktor für den {{jsxref("Operators/new", "new")}} Operator sein.

```js example-bad
const p = new Proxy(
  {},
  {
    construct(target, argumentsList, newTarget) {
      return {};
    },
  },
);

new p(); // TypeError wird ausgelöst, "p" ist kein Konstruktor
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Reflect.construct()")}}
