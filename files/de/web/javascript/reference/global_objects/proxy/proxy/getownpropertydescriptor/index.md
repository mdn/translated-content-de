---
title: handler.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`handler.getOwnPropertyDescriptor()`**-Methode ist eine Falle für die `[[GetOwnProperty]]` [interne Objektsmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getOwnPropertyDescriptor()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.getOwnPropertyDescriptor()", "taller")}}

```js interactive-example
const monster1 = {
  eyeCount: 4,
};

const handler1 = {
  getOwnPropertyDescriptor(target, prop) {
    console.log(`called: ${prop}`);
    // Expected output: "called: eyeCount"

    return { configurable: true, enumerable: true, value: 5 };
  },
};

const proxy1 = new Proxy(monster1, handler1);

console.log(Object.getOwnPropertyDescriptor(proxy1, "eyeCount").value);
// Expected output: 5
```

## Syntax

```js-nolint
new Proxy(target, {
  getOwnPropertyDescriptor(target, property) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `getOwnPropertyDescriptor()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, der den Eigenschaftsnamen repräsentiert.

### Rückgabewert

Die `getOwnPropertyDescriptor()`-Methode muss ein Objekt oder `undefined` zurückgeben, das den Eigenschaftsdeskriptor repräsentiert. Fehlende Attribute werden auf die gleiche Weise normalisiert wie bei {{jsxref("Object.defineProperty()")}}.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

Oder jede andere Operation, die die `[[GetOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetOwnProperty]]`-interne Methode der Proxy wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `undefined` sein.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das bedeutet, dass, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false` zurückgibt, die Falle nicht `undefined` zurückgeben darf.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als eigene Eigenschaft eines nicht erweiterbaren Zielobjekts existiert. Das bedeutet, dass, wenn {{jsxref("Reflect.isExtensible()")}} für das Zielobjekt `false` zurückgibt, die Falle nicht `undefined` zurückgeben darf.
- Eine Eigenschaft kann nicht als existent gemeldet werden, wenn sie nicht als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das bedeutet, dass, wenn {{jsxref("Reflect.isExtensible()")}} für das Zielobjekt `false` zurückgibt, und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` zurückgibt, die Falle `undefined` zurückgeben muss.
- Eine Eigenschaft kann nicht als nicht konfigurierbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare eigene Eigenschaft des Zielobjekts. Das bedeutet, dass, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` oder `configurable: true` zurückgibt, die Falle nicht `configurable: false` zurückgeben darf.
- Eine Eigenschaft kann nicht als sowohl nicht konfigurierbar als auch nicht schreibbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare, nicht schreibbare eigene Eigenschaft des Zielobjekts. Das bedeutet im Einklang mit der vorherigen Invariante, dass, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: true` zurückgibt, die Falle nicht `configurable: false, writable: false` zurückgeben darf.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, dann muss der Eigenschaftsdeskriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das bedeutet, wenn man `target` als ein gewöhnliches Objekt betrachtet, darf {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} keinen Fehler werfen. Die `Object.defineProperty()`-Referenz enthält mehr Informationen, aber zusammengefasst muss, wenn die Zieleigenschaft nicht konfigurierbar ist, Folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` müssen dasselbe wie das Original sein. Auch `writable` muss durch die vorherige Invariante das Original sein.
  - die Eigenschaft muss entweder Daten oder Accessor bleiben
  - das `value`-Attribut kann nur geändert werden, wenn `writable` `true` ist

## Beispiele

### Abfangen von getOwnPropertyDescriptor

Der folgende Code fängt {{jsxref("Object.getOwnPropertyDescriptor()")}} ab.

```js
const p = new Proxy(
  { a: 20 },
  {
    getOwnPropertyDescriptor(target, prop) {
      console.log(`called: ${prop}`);
      return { configurable: true, enumerable: true, value: 10 };
    },
  },
);

console.log(Object.getOwnPropertyDescriptor(p, "a").value);
// "called: a"
// 10
```

Der folgende Code verletzt eine Invariante.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);
const p = new Proxy(obj, {
  getOwnPropertyDescriptor(target, prop) {
    return undefined;
  },
});

Object.getOwnPropertyDescriptor(p, "a"); // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
