---
title: handler.getOwnPropertyDescriptor()
short-title: getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.getOwnPropertyDescriptor()`**-Methode ist eine Trap für die `[[GetOwnProperty]]` [objektinternen Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getOwnPropertyDescriptor()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.getOwnPropertyDescriptor()", "taller")}}

```js interactive-example
const monster = {
  eyeCount: 4,
};

const handler = {
  getOwnPropertyDescriptor(target, prop) {
    console.log(`called: ${prop}`);
    // Expected output: "called: eyeCount"

    return { configurable: true, enumerable: true, value: 5 };
  },
};

const proxy = new Proxy(monster, handler);

console.log(Object.getOwnPropertyDescriptor(proxy, "eyeCount").value);
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
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.

### Rückgabewert

Die `getOwnPropertyDescriptor()`-Methode muss ein Objekt oder `undefined` zurückgeben, das den Eigenschaftsdescriptor darstellt. Fehlende Attribute werden auf die gleiche Weise normalisiert wie bei {{jsxref("Object.defineProperty()")}}.

## Beschreibung

### Abfangvorgänge

Diese Trap kann folgende Vorgänge abfangen:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

Oder jede andere Operation, die die `[[GetOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetOwnProperty]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `undefined` sein.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als eigene Eigenschaft eines nicht erweiterbaren Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für das Zielobjekt zurückgibt, darf die Trap nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als existent gemeldet werden, wenn sie nicht als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für das Zielobjekt zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` für die Eigenschaft auf `target` zurückgibt, muss die Trap `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht konfigurierbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `configurable: false` zurückgeben.
- Eine Eigenschaft kann nicht als nicht konfigurierbar und nicht beschreibbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare, nicht beschreibbare eigene Eigenschaft des Zielobjekts. Das heißt, zusätzlich zur vorherigen Invariante, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `configurable: false, writable: false` zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, muss der Descriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das heißt, angenommen, `target` ist ein gewöhnliches Objekt, dann darf {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} keinen Fehler auslösen. Die Referenz von `Object.defineProperty()` enthält mehr Informationen, aber zusammengefasst, wenn die Zieleigenschaft nicht konfigurierbar ist, muss Folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` müssen wie im Original sein. `writable` muss auch aufgrund der vorherigen Invariante das Original sein.
  - die Eigenschaft muss als Daten- oder Accessor-Eigenschaft bleiben
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
