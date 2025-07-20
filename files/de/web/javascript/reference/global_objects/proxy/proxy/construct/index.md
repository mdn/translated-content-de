---
title: handler.construct()
short-title: construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.construct()`** Methode ist eine Falle für die `[[Construct]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/new", "new")}} Operator verwendet wird. Damit die `new`-Operation auf dem resultierenden Proxy-Objekt gültig ist, muss das Ziel, das verwendet wird, um den Proxy zu initialisieren, selbst ein gültiger Konstruktor sein.

{{InteractiveExample("JavaScript Demo: handler.construct()", "taller")}}

```js interactive-example
function Monster(disposition) {
  this.disposition = disposition;
}

const handler = {
  construct(target, args) {
    console.log(`Creating a ${target.name}`);
    // Expected output: "Creating a monster"

    return new target(...args);
  },
};

const ProxiedMonster = new Proxy(Monster, handler);

console.log(new ProxiedMonster("fierce").disposition);
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

Die folgenden Parameter werden an die `construct()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Ziel-Konstruktorobjekt.
- `argumentsList`
  - : Ein {{jsxref("Array")}}, das die an den Konstruktor übergebenen Argumente enthält.
- `newTarget`
  - : Der Konstruktor, der ursprünglich aufgerufen wurde.

### Rückgabewert

Die `construct()` Methode muss ein Objekt zurückgeben, das das neu erstellte Objekt darstellt.

## Beschreibung

### Abfangmethoden

Diese Falle kann folgende Operationen abfangen:

- Den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new) Operator: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

Oder jede andere Operation, die die `[[Construct]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Construct]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das `target` muss selbst ein Konstruktor sein.
- Das Ergebnis muss ein {{jsxref("Object")}} sein.

## Beispiele

### Den new-Operator abfangen

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
