---
title: handler.construct()
short-title: construct()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/construct
l10n:
  sourceCommit: 5ed8a617221499f2255e55634ce2122c942eb610
---

Die Methode **`handler.construct()`** ist ein Trap für die [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Construct]]`, die von Operationen wie dem {{jsxref("new")}}-Operator verwendet wird. Damit die `new`-Operation für das resultierende Proxy-Objekt gültig ist, muss das Zielobjekt, mit dem der Proxy initialisiert wird, selbst ein gültiger Konstruktor sein.

{{InteractiveExample("JavaScript Demo: handler.construct()", "taller")}}

```js interactive-example
function Monster(disposition) {
  this.disposition = disposition;
}

const handler = {
  construct(target, args) {
    console.log(`Creating a ${target.name}`);
    // Expected output: "Creating a Monster"

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

Die folgenden Parameter werden an die Methode `construct()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Ziel-Konstruktorobjekt.
- `argumentsList`
  - : Ein {{jsxref("Array")}} mit den Argumenten, die an den Konstruktor übergeben wurden.
- `newTarget`
  - : Der Konstruktor, der ursprünglich aufgerufen wurde.

### Rückgabewert

Die Methode `construct()` muss ein Objekt zurückgeben, das das neu erstellte Objekt repräsentiert.

## Beschreibung

### Abgefangene Operationen

Dieser Trap kann die folgenden Operationen abfangen:

- Den [`new`](/de/docs/Web/JavaScript/Reference/Operators/new)-Operator: `new myFunction(...args)`
- {{jsxref("Reflect.construct()")}}

Oder jede andere Operation, die die [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[Construct]]` aufruft.

### Invarianten

Die interne Methode `[[Construct]]` des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- `target` muss selbst ein Konstruktor sein.
- Das Ergebnis muss ein {{jsxref("Object")}} sein.

## Beispiele

### Den new-Operator abfangen

Der folgende Code fängt den {{jsxref("new")}}-Operator ab.

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

Der folgende Code initialisiert den Proxy nicht ordnungsgemäß. `target` muss bei der Initialisierung des Proxys selbst ein gültiger Konstruktor für den {{jsxref("new")}}-Operator sein.

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
- [Konstruktor `Proxy()`](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("new")}}
- {{jsxref("Reflect.construct()")}}
