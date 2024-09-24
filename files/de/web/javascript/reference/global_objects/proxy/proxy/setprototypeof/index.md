---
title: handler.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/setPrototypeOf
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.setPrototypeOf()`**-Methode ist eine Trap für die `[[SetPrototypeOf]]` [interne Objekt-Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.setPrototypeOf()")}} verwendet wird.

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

Die `setPrototypeOf()`-Methode muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob der Prototyp erfolgreich geändert wurde oder nicht. Andere Werte werden in Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.setPrototypeOf()")}}, werfen einen {{jsxref("TypeError")}}, wenn die `[[SetPrototypeOf]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfänge

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.setPrototypeOf()")}}
- {{jsxref("Reflect.setPrototypeOf()")}}

Oder jede andere Operation, die die `[[SetPrototypeOf]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[SetPrototypeOf]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Wenn das Zielobjekt nicht erweiterbar ist, kann der Prototyp nicht geändert werden. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf dem `target` `false` zurückgibt und `prototype` nicht das gleiche ist wie das Ergebnis von `Reflect.getPrototypeOf(target)`, muss die Trap einen falsy-Wert zurückgeben.

## Beispiele

Wenn Sie das Setzen eines neuen Prototyps für Ihr Objekt verbieten möchten, kann die `setPrototypeOf()`-Methode Ihres Handlers entweder `false` zurückgeben oder eine Ausnahme auslösen.

### Ansatz 1: Rückgabe von false

Dieser Ansatz bedeutet, dass jede mutierende Operation, die im Falle eines Fehlers beim Mutieren eine Ausnahme auslöst, die Ausnahme selbst erstellen muss.

Zum Beispiel wird {{jsxref("Object.setPrototypeOf()")}} selbst einen {{jsxref("TypeError")}} erstellen und auslösen. Wenn die Mutation von einer Operation durchgeführt wird, die _normalerweise_ bei einem Fehlschlag keine Ausnahme auslöst, wie {{jsxref("Reflect.setPrototypeOf()")}}, wird keine Ausnahme ausgelöst.

```js
const handlerReturnsFalse = {
  setPrototypeOf(target, newProto) {
    return false;
  },
};

const newProto = {},
  target = {};

const p1 = new Proxy(target, handlerReturnsFalse);
Object.setPrototypeOf(p1, newProto); // wirft einen TypeError
Reflect.setPrototypeOf(p1, newProto); // gibt false zurück
```

### Ansatz 2: Auslösen einer Ausnahme

Der letzte Ansatz führt dazu, dass _jede_ Operation, die versucht zu mutieren, eine Ausnahme auslöst. Dieser Ansatz ist am besten geeignet, wenn Sie möchten, dass auch nicht auslösende Operationen im Fehlerfall eine Ausnahme auslösen, oder wenn Sie einen benutzerdefinierten Ausnahme-Wert auslösen möchten.

```js
const handlerThrows = {
  setPrototypeOf(target, newProto) {
    throw new Error("custom error");
  },
};

const newProto = {},
  target = {};

const p2 = new Proxy(target, handlerThrows);
Object.setPrototypeOf(p2, newProto); // wirft neuen Error("custom error")
Reflect.setPrototypeOf(p2, newProto); // wirft neuen Error("custom error")
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
