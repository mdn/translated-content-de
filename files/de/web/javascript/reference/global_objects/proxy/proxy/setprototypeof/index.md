---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
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
  - : Das neue Prototyp-Objekt oder `null`.

### Rückgabewert

Die Methode `setPrototypeOf()` muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob der Prototyp erfolgreich geändert wurde. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.setPrototypeOf()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[SetPrototypeOf]]` `false` zurückgibt.

## Beschreibung

### Abfangmöglichkeiten

Diese Falle kann die folgenden Operationen abfangen:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Oder jede andere Operation, die die interne Methode `[[SetPrototypeOf]]` [invokiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods).

### Invarianten

Die interne Methode `[[SetPrototypeOf]]` des Proxy-Objekts wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Wenn das Zielobjekt nicht erweiterbar ist, kann der Prototyp nicht geändert werden. Das bedeutet, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und `prototype` nicht derselbe ist wie das Ergebnis von `Reflect.getPrototypeOf(target)`, muss die Falle einen falschen Wert zurückgeben.

## Beispiele

Wenn Sie nicht möchten, dass ein neuer Prototyp für Ihr Objekt gesetzt wird, kann die Methode `setPrototypeOf()` Ihres Handlers entweder `false` zurückgeben oder eine Ausnahme werfen.

### Ansatz 1: `false` zurückgeben

Dieser Ansatz bedeutet, dass jede mutierende Operation, die bei einem Fehler eine Ausnahme wirft, die Ausnahme selbst erstellen muss.

Zum Beispiel wird {{jsxref("Object.setPrototypeOf()")}} selbst einen {{jsxref("TypeError")}} erstellen und werfen. Wenn die Mutation durch eine Operation durchgeführt wird, die beim Scheitern normalerweise _keine_ Ausnahme wirft, wie etwa {{jsxref("Reflect.setPrototypeOf()")}}, wird keine Ausnahme geworfen.

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

Dieser Ansatz führt dazu, dass _jede_ Operation, die versucht, zu mutieren, eine Ausnahme wirft. Dieser Ansatz ist ideal, wenn Sie möchten, dass selbst nicht-wurfende Operationen bei einem Scheitern eine Ausnahme werfen, oder wenn Sie eine benutzerdefinierte Ausnahme werfen möchten.

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
