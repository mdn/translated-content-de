---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.setPrototypeOf()`**-Methode ist eine Falle für die `[[SetPrototypeOf]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.setPrototypeOf()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-setprototypeof.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  setPrototypeOf(target, prototype) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `setPrototypeOf()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `prototype`
  - : Das neue Prototyp-Objekt oder `null`.

### Rückgabewert

Die `setPrototypeOf()`-Methode muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob der Prototyp erfolgreich geändert wurde oder nicht. Andere Werte werden zu Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.setPrototypeOf()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne `[[SetPrototypeOf]]`-Methode `false` zurückgibt.

## Beschreibung

### Abfangmethoden

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Oder jede andere Operation, die die `[[SetPrototypeOf]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[SetPrototypeOf]]`-Methode des Proxies wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Wenn das Zielobjekt nicht erweiterbar ist, kann der Prototyp nicht geändert werden. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und `prototype` nicht mit dem Ergebnis von `Reflect.getPrototypeOf(target)` identisch ist, muss die Falle einen falschen Wert zurückgeben.

## Beispiele

Wenn Sie das Setzen eines neuen Prototyps für Ihr Objekt nicht erlauben möchten, kann die `setPrototypeOf()`-Methode Ihres Handlers entweder `false` zurückgeben oder eine Ausnahme werfen.

### Ansatz 1: Zurückgeben von false

Dieser Ansatz bedeutet, dass jede verändernde Operation, die bei nicht erfolgreicher Mutation eine Ausnahme wirft, die Ausnahme selbst erzeugen muss.

Zum Beispiel wird {{jsxref("Object.setPrototypeOf()")}} selbst eine {{jsxref("TypeError")}}-Ausnahme erzeugen und werfen. Wenn die Mutation durch eine Operation vorgenommen wird, die normalerweise keine Ausnahme im Falle eines Scheiterns wirft, wie {{jsxref("Reflect.setPrototypeOf()")}}, wird keine Ausnahme geworfen.

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

Der zweite Ansatz führt dazu, dass _jede_ Operation, die versucht zu mutieren, eine Ausnahme wirft. Dieser Ansatz ist am besten geeignet, wenn Sie möchten, dass selbst nicht werfende Operationen im Falle eines Scheiterns eine Ausnahme werfen, oder wenn Sie einen benutzerdefinierten Ausnahme-Wert werfen möchten.

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
