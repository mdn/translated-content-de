---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.setPrototypeOf()`**-Methode ist eine Falle für die `[[SetPrototypeOf]]`-[interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.setPrototypeOf()")}} verwendet wird.

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

Die `setPrototypeOf()`-Methode muss ein {{jsxref("Boolean")}} zurückgeben, das anzeigt, ob der Prototyp erfolgreich geändert wurde oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.setPrototypeOf()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[SetPrototypeOf]]` `false` zurückgibt.

## Beschreibung

### Interceptionen

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Oder jede andere Operation, die die `[[SetPrototypeOf]]`-[interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die interne Methode des Proxys `[[SetPrototypeOf]]` wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Wenn das Zielobjekt nicht erweiterbar ist, kann der Prototyp nicht geändert werden. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für `target` zurückgibt und `prototype` nicht dasselbe ist wie das Ergebnis von `Reflect.getPrototypeOf(target)`, muss die Falle einen falschen Wert zurückgeben.

## Beispiele

Wenn Sie das Festlegen eines neuen Prototyps für Ihr Objekt nicht erlauben möchten, kann die `setPrototypeOf()`-Methode Ihres Handlers entweder `false` zurückgeben oder eine Ausnahme werfen.

### Ansatz 1: Zurückgeben von false

Dieser Ansatz bedeutet, dass jede mutierende Operation, die bei einem Fehlschlag eine Ausnahme wirft, die Ausnahme selbst erstellen muss.

Beispielsweise wird {{jsxref("Object.setPrototypeOf()")}} selbst eine {{jsxref("TypeError")}} erstellen und werfen. Wenn die Mutation durch eine Operation durchgeführt wird, die im normalen Fall des Scheiterns _keine_ Ausnahme wirft, wie z.B. {{jsxref("Reflect.setPrototypeOf()")}}, wird keine Ausnahme geworfen.

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

Der letztere Ansatz bewirkt, dass _jede_ Operation, die versucht zu mutieren, eine Ausnahme wirft. Dieser Ansatz ist am besten geeignet, wenn Sie wollen, dass auch nicht-werfende Operationen im Fehlerfall eine Ausnahme werfen, oder Sie möchten einen benutzerdefinierten Ausnahme-Wert werfen.

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
