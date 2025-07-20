---
title: handler.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.setPrototypeOf()`** Methode ist eine Trap für die `[[SetPrototypeOf]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.setPrototypeOf()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.setPrototypeOf()", "taller")}}

```js interactive-example
const handler = {
  setPrototypeOf(monster, monsterProto) {
    monster.geneticallyModified = true;
    return false;
  },
};

const monsterProto = {};
const monster = {
  geneticallyModified: false,
};

const proxy = new Proxy(monster, handler);
// Object.setPrototypeOf(proxy, monsterProto); // Throws a TypeError

console.log(Reflect.setPrototypeOf(proxy, monsterProto));
// Expected output: false

console.log(monster.geneticallyModified);
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

Die folgenden Parameter werden an die `setPrototypeOf()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `prototype`
  - : Das neue Prototyp-Objekt oder `null`.

### Rückgabewert

Die `setPrototypeOf()` Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob das Prototyp erfolgreich geändert wurde oder nicht. Andere Werte werden zu Booleans [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.setPrototypeOf()")}}, werfen einen {{jsxref("TypeError")}}, wenn die `[[SetPrototypeOf]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Diese Trap kann diese Operationen abfangen:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Oder jede andere Operation, die die `[[SetPrototypeOf]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[SetPrototypeOf]]` interne Methode des Proxies wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Wenn das Zielobjekt nicht erweiterbar ist, kann das Prototyp nicht geändert werden. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` auf `target` zurückgibt und `prototype` nicht mit dem Ergebnis von `Reflect.getPrototypeOf(target)` identisch ist, muss die Trap einen falsy-Wert zurückgeben.

## Beispiele

Wenn Sie verhindern möchten, dass ein neues Prototyp für Ihr Objekt gesetzt wird, kann Ihr Handler die
`setPrototypeOf()` Methode entweder `false` zurückgeben oder eine Ausnahme werfen.

### Ansatz 1: Zurückgeben von false

Dieser Ansatz bedeutet, dass jede ändernde Operation, die im Falle eines Fehlschlags eine Ausnahme wirft, die Ausnahme selbst erstellen muss.

Zum Beispiel wird {{jsxref("Object.setPrototypeOf()")}} selbst eine
{{jsxref("TypeError")}} erstellen und werfen. Wenn die Mutation durch eine Operation durchgeführt wird, die im Falle eines Fehlschlags _normalerweise_ keine Ausnahme wirft, wie z.B.
{{jsxref("Reflect.setPrototypeOf()")}}, wird keine Ausnahme geworfen.

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

### Ansatz 2: Werfen einer Ausnahme

Der letztere Ansatz wird dazu führen, dass _jede_ Operation, die versucht zu mutieren, eine Ausnahme wirft. Dieser Ansatz ist am besten, wenn Sie wollen, dass selbst nicht-werfende Operationen im Falle eines Fehlschlags eine Ausnahme werfen, oder wenn Sie einen benutzerdefinierten Ausnahme-Wert werfen möchten.

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
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}
