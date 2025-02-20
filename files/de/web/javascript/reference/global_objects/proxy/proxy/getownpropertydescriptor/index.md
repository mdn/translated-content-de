---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`handler.getOwnPropertyDescriptor()`** ist eine Trap für die `[[GetOwnProperty]]`-[interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die bei Operationen wie {{jsxref("Object.getOwnPropertyDescriptor()")}} verwendet wird.

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

Die folgenden Parameter werden an die Methode `getOwnPropertyDescriptor()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die Methode `getOwnPropertyDescriptor()` muss ein Objekt oder `undefined` zurückgeben, das den Eigenschafts-Deskriptor darstellt. Fehlende Attribute werden auf dieselbe Weise normalisiert wie bei {{jsxref("Object.defineProperty()")}}.

## Beschreibung

### Abfangen von Operationen

Diese Trap kann die folgenden Operationen abfangen:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

Oder jede andere Operation, die die `[[GetOwnProperty]]`-[interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetOwnProperty]]`-Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `undefined` sein.
- Eine Eigenschaft darf nicht als nicht-existent gemeldet werden, wenn sie als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `undefined` zurückgeben.
- Eine Eigenschaft darf nicht als nicht-existent gemeldet werden, wenn sie als eigene Eigenschaft eines nicht erweiterbaren Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} für das Zielobjekt `false` zurückgibt, darf die Trap nicht `undefined` zurückgeben.
- Eine Eigenschaft darf nicht als existent gemeldet werden, wenn sie nicht als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} für das Zielobjekt `false` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` für die Eigenschaft auf `target` zurückgibt, dann muss die Trap `undefined` zurückgeben.
- Eine Eigenschaft darf nicht als nicht konfigurierbar gemeldet werden, wenn sie nicht als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `configurable: false` zurückgeben.
- Eine Eigenschaft darf nicht als sowohl nicht konfigurierbar als auch nicht schreibbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare, nicht schreibbare eigene Eigenschaft des Zielobjekts. Das heißt zusätzlich zu der vorherigen Invariante: Wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `configurable: false, writable: false` zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, dann muss der Deskriptor der Zielobjekt-Eigenschaft mit `descriptor` kompatibel sein. Das heißt, wenn man sich vorstellt, dass `target` ein gewöhnliches Objekt ist, dann darf {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} keinen Fehler auslösen. Die Referenz zu `Object.defineProperty()` enthält weitere Informationen, aber zusammengefasst gilt Folgendes: Wenn die Zieleigenschaft nicht konfigurierbar ist, muss Folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` müssen identisch mit dem Original sein. `writable` muss aufgrund der vorherigen Invariante ebenfalls das Original sein.
  - Die Eigenschaft muss entweder Daten- oder Accessor-Eigenschaft bleiben.
  - Das Attribut `value` kann nur geändert werden, wenn `writable` `true` ist.

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
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}
