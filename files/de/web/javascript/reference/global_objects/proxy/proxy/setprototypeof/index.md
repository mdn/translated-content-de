---
title: handler.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die Methode **`handler.setPrototypeOf()`** ist eine Falle für die `[[SetPrototypeOf]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.setPrototypeOf()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.setPrototypeOf()", "taller")}}

```js interactive-example
const handler1 = {
  setPrototypeOf(monster1, monsterProto) {
    monster1.geneticallyModified = true;
    return false;
  },
};

const monsterProto = {};
const monster1 = {
  geneticallyModified: false,
};

const proxy1 = new Proxy(monster1, handler1);
// Object.setPrototypeOf(proxy1, monsterProto); // Throws a TypeError

console.log(Reflect.setPrototypeOf(proxy1, monsterProto));
// Expected output: false

console.log(monster1.geneticallyModified);
// Expected output: true
```

## Syntax

```js-nolint
new Proxy(target, {
  setPrototypeOf(target, prototype) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die Methode `setPrototypeOf()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `prototype`
  - : Das neue Prototype-Objekt oder `null`.

### Rückgabewert

Die Methode `setPrototypeOf()` muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob das Prototype erfolgreich geändert wurde oder nicht. Andere Werte werden in Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.setPrototypeOf()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[SetPrototypeOf]]` `false` zurückgibt.

## Beschreibung

### Abfangmethoden

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Oder jede andere Operation, die die `[[SetPrototypeOf]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[SetPrototypeOf]]`-Methode des Proxies wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Wenn das Zielobjekt nicht erweiterbar ist, kann das Prototype nicht geändert werden. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und `prototype` nicht gleich dem Ergebnis von `Reflect.getPrototypeOf(target)` ist, dann muss die Falle einen falsy-Wert zurückgeben.

## Beispiele

Wenn Sie es verbieten möchten, ein neues Prototype für Ihr Objekt festzulegen, kann die `setPrototypeOf()`-Methode Ihres Handlers entweder `false` zurückgeben oder eine Ausnahme werfen.

### Ansatz 1: Rückgabe von false

Dieser Ansatz bedeutet, dass jede verändernde Operation, die eine Ausnahme bei einem Fehler beim Verändern wirft, die Ausnahme selbst erzeugen muss.

Zum Beispiel wird {{jsxref("Object.setPrototypeOf()")}} selbst einen {{jsxref("TypeError")}} erzeugen und werfen. Wenn die Veränderung von einer Operation durchgeführt wird, die _normalerweise_ bei einem Misserfolg keine Ausnahme wirft, wie zum Beispiel {{jsxref("Reflect.setPrototypeOf()")}}, wird keine Ausnahme geworfen.

```js
const handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

const newProto = {},
  target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // throws a TypeError
Reflect.setPrototypeOf(p1, newProto); // returns false
```

### Ansatz 2: Eine Ausnahme werfen

Der zweite Ansatz wird bewirken, dass _jede_ Operation, die versucht zu verändern, eine Ausnahme wirft. Dieser Ansatz ist am besten, wenn Sie möchten, dass auch nicht werfende Operationen bei Misserfolg eine Ausnahme werfen, oder wenn Sie einen benutzerdefinierten Ausnahme-Wert werfen möchten.

```js
const handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error("custom error");
  },
};

const newProto = {},
  target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // throws new Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // throws new Error("custom error")
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
