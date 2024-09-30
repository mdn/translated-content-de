---
title: handler.getOwnPropertyDescriptor()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/getOwnPropertyDescriptor
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die Methode **`handler.getOwnPropertyDescriptor()`** ist eine Trap für die `[[GetOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.getOwnPropertyDescriptor()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-getownpropertydescriptor.html", "taller")}}

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
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die Methode `getOwnPropertyDescriptor()` muss ein Objekt oder `undefined` zurückgeben, das den Eigenschaftsbeschreiber darstellt. Fehlende Attribute werden auf die gleiche Weise normalisiert wie bei {{jsxref("Object.defineProperty()")}}.

## Beschreibung

### Abfangbare Operationen

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.getOwnPropertyDescriptor()")}}
- {{jsxref("Reflect.getOwnPropertyDescriptor()")}}

Oder jede andere Operation, die die `[[GetOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[GetOwnProperty]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss entweder ein {{jsxref("Object")}} oder `undefined` sein.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als nicht konfigurierbare Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht existent gemeldet werden, wenn sie als eigene Eigenschaft eines nicht erweiterbaren Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für das Zielobjekt zurückgibt, darf die Trap nicht `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als existent gemeldet werden, wenn sie nicht als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für das Zielobjekt zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` für die Eigenschaft auf `target` zurückgibt, muss die Trap `undefined` zurückgeben.
- Eine Eigenschaft kann nicht als nicht konfigurierbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `configurable: false` zurückgeben.
- Eine Eigenschaft kann nicht sowohl als nicht konfigurierbar als auch als nicht beschreibbar gemeldet werden, es sei denn, sie existiert als nicht konfigurierbare, nicht beschreibbare Eigenschaft des Zielobjekts. Das heißt zusätzlich zur vorherigen Invariante, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft auf `target` zurückgibt, darf die Trap nicht `configurable: false, writable: false` zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, dann muss der Eigenschaftsbeschreiber der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das heißt, wenn man `target` als normales Objekt betrachtet, dann darf {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, resultObject)")}} keinen Fehler werfen. Der Verweis auf `Object.defineProperty()` enthält mehr Informationen, aber zusammengefasst, wenn die Zielobjekteigenschaft nicht konfigurierbar ist, muss Folgendes zutreffen:
  - `configurable`, `enumerable`, `get` und `set` müssen die gleichen wie die Originale sein. `writable` muss ebenfalls original sein aufgrund der vorherigen Invariante.
  - Die Eigenschaft muss als Daten- oder Zugriffseigenschaft bleiben
  - Das `value`-Attribut kann nur geändert werden, wenn `writable` `true` ist

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
