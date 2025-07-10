---
title: handler.setPrototypeOf()
short-title: setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`handler.setPrototypeOf()`** Methode ist eine Falle für die `[[SetPrototypeOf]]` [interne Objektsmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.setPrototypeOf()")}} verwendet wird.

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
  - : Das neue Prototype des Objekts oder `null`.

### Rückgabewert

Die Methode `setPrototypeOf()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob das Prototype erfolgreich geändert wurde oder nicht. Andere Werte werden zu Booleschen [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.setPrototypeOf()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[SetPrototypeOf]]` `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Oder jede andere Operation, die die `[[SetPrototypeOf]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die interne Methode `[[SetPrototypeOf]]` des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Wenn das Zielobjekt nicht erweiterbar ist, kann das Prototype nicht geändert werden. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und `prototype` nicht dasselbe ist wie das Ergebnis von `Reflect.getPrototypeOf(target)`, dann muss die Falle einen falschen Wert zurückgeben.

## Beispiele

Wenn Sie das Setzen eines neuen Prototyps für Ihr Objekt nicht zulassen möchten, kann die `setPrototypeOf()` Methode Ihres Handlers entweder `false` zurückgeben oder eine Ausnahme auslösen.

### Ansatz 1: Rückgabe von false

Dieser Ansatz bedeutet, dass jede mutierende Operation, die bei einem Fehlschlag eine Ausnahme wirft, die Ausnahme selbst erzeugen muss.

Zum Beispiel wird {{jsxref("Object.setPrototypeOf()")}} selbst einen {{jsxref("TypeError")}} erzeugen und werfen. Wenn die Mutation durch eine Operation erfolgt, die bei einem Fehlschlag _normalerweise nicht_ wirft, wie etwa {{jsxref("Reflect.setPrototypeOf()")}}, wird keine Ausnahme geworfen.

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

### Ansatz 2: Auslösen einer Ausnahme

Der letzte Ansatz führt dazu, dass _jede_ Operation, die versucht zu mutieren, eine Ausnahme wirft. Dieser Ansatz ist am besten, wenn Sie möchten, dass auch nicht-wurfende Operationen bei einem Fehlschlag eine Ausnahme werfen, oder wenn Sie eine benutzerdefinierte Ausnahme auslösen möchten.

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
