---
title: handler.ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.ownKeys()`** Methode ist eine Trap für die `[[OwnPropertyKeys]]` [interne Objekt-Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.keys()")}}, {{jsxref("Reflect.ownKeys()")}}, usw. verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-ownkeys.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  ownKeys(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die `ownKeys()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die `ownKeys()` Methode muss ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) zurückgeben, bei dem jedes Element entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} ohne doppelte Einträge ist.

## Beschreibung

### Abfangmöglichkeiten

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

Oder jede andere Operation, die die `[[OwnPropertyKeys]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[OwnPropertyKeys]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handlerdefinition eine der folgenden Invarianten verletzt:

- Das Ergebnis ist ein {{jsxref("Object")}}.
- Die Liste der Schlüssel enthält keine doppelten Werte.
- Der Typ jedes Schlüssels ist entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}}.
- Die Ergebnisliste muss die Schlüssel aller nicht-konfigurierbaren eigenen Eigenschaften des Zielobjekts enthalten. Das bedeutet, für alle Schlüssel, die von {{jsxref("Reflect.ownKeys()")}} auf dem Zielobjekt zurückgegeben werden, wenn der Schlüssel durch {{jsxref("Reflect.getOwnPropertyDescriptor()")}} als `konfigurierbar: false` gemeldet wird, muss der Schlüssel in der Ergebnisliste enthalten sein.
- Wenn das Zielobjekt nicht erweiterbar ist, muss die Ergebnisliste alle Schlüssel der eigenen Eigenschaften des Zielobjekts und keine anderen Werte enthalten. Das bedeutet, wenn {{jsxref("Reflect.isExtensible()")}} `false` auf `target` zurückgibt, muss die Ergebnisliste die gleichen Werte enthalten wie das Ergebnis von {{jsxref("Reflect.ownKeys()")}} auf `target`.

## Beispiele

### Abfangen von getOwnPropertyNames

Der folgende Code fängt {{jsxref("Object.getOwnPropertyNames()")}} ab.

```js
const p = new Proxy(
  {},
  {
    ownKeys(target) {
      console.log("called");
      return ["a", "b", "c"];
    },
  },
);

console.log(Object.getOwnPropertyNames(p));
// "called"
// [ 'a', 'b', 'c' ]
```

Der folgende Code verletzt eine Invariante.

```js example-bad
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10,
});

const p = new Proxy(obj, {
  ownKeys(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  },
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
