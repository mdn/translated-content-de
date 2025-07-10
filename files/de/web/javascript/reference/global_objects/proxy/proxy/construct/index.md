---
title: handler.construct()
short-title: construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`handler.construct()`**-Methode ist eine Falle für die `[[Construct]]`-Methode des [internen Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/new", "new")}} Operator genutzt wird. Damit die neue Operation auf dem resultierenden Proxy-Objekt gültig ist, muss das zur Initialisierung des Proxys verwendete Ziel selbst ein gültiger Konstruktor sein.

{{InteractiveExample("JavaScript Demo: handler.construct()", "taller")}}

```js interactive-example
function monster1(disposition) {
  this.disposition = disposition;
}

const handler1 = {
  construct(target, args) {
    console.log(`Creating a ${target.name}`);
    // Expected output: "Creating a monster1"

    return new target(...args);
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(new proxy1("fierce").disposition);
// Expected output: "fierce"
```

## Syntax

```js-nolint
new Proxy(target, {
  construct(target, argumentsList, newTarget) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `construct()`-Methode übergeben. `this` ist mit dem Handler verbunden.

- `target`
  - : Das Zielkonstruktor-Objekt.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an den Konstruktor übergebenen Argumente enthält.
- `newTarget`
  - : Der ursprünglich aufgerufene Konstruktor.

### Rückgabewert

Die `construct()`-Methode muss ein Objekt zurückgeben, das das neu erstellte Objekt darstellt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- Der [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

Oder jede andere Operation, die die `[[Construct]]`-[interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Construct]]`-Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das `target` muss selbst ein Konstruktor sein.
- Das Ergebnis muss ein {{jsxref("Object")}} sein.

## Beispiele

### Abfangen des new Operators

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

new p(); // TypeError is thrown
```

Der folgende Code initialisiert den Proxy unsachgemäß. Das `target` bei der Proxy-Initialisierung muss selbst ein gültiger Konstruktor für den {{jsxref("Operators/new", "new")}} Operator sein.

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
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/new", "new")}}
- {{jsxref("Reflect.construct()")}}
