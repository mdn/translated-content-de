---
title: handler.isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.isExtensible()`** Methode ist ein Trap für die `[[IsExtensible]]` [interne Objekt-Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), welche von Operationen wie {{jsxref("Object.isExtensible()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-isextensible.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  isExtensible(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die `isExtensible()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die `isExtensible()`-Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob das Zielobjekt erweiterbar ist oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

## Beschreibung

### Abfangen von Operationen

Dieser Trap kann diese Operationen abfangen:

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

Oder jede andere Operation, die die `[[IsExtensible]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[IsExtensible]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis muss dasselbe sein wie bei {{jsxref("Reflect.isExtensible()")}} auf dem Zielobjekt.

## Beispiele

### Abfangen von isExtensible

Der folgende Code fängt {{jsxref("Object.isExtensible()")}} ab.

```js
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      console.log("called");
      return true;
    },
  },
);

console.log(Object.isExtensible(p));
// "called"
// true
```

Der folgende Code verletzt die Invariante.

```js example-bad
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
- {{jsxref("Reflect.preventExtensions()")}}
