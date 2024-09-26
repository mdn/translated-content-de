---
title: handler.preventExtensions()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/preventExtensions
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.preventExtensions()`** Methode ist eine Trap für die `[[PreventExtensions]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.preventExtensions()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-preventextensions.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  preventExtensions(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die Methode `preventExtensions()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die Methode `preventExtensions()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob der Vorgang erfolgreich war oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.preventExtensions()")}}, werfen einen {{jsxref("TypeError")}}, wenn die `[[PreventExtensions]]` interne Methode `false` zurückgibt.

## Beschreibung

### Interceptionen

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.freeze()")}}

Oder jede andere Operation, die die `[[PreventExtensions]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[PreventExtensions]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handlervorgabe eine der folgenden Invarianten verletzt:

- Das Ergebnis ist nur dann `true`, wenn {{jsxref("Reflect.isExtensible()")}} auf dem Zielobjekt nach dem Aufruf von `handler.preventExtensions()` `false` zurückgibt.

## Beispiele

### Trap von preventExtensions

Der folgende Code fängt {{jsxref("Object.preventExtensions()")}} ab.

```js
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      console.log("called");
      Object.preventExtensions(target);
      return true;
    },
  },
);

console.log(Object.preventExtensions(p));
// "called"
// false
```

Der folgende Code verletzt die Invariante.

```js example-bad
const p = new Proxy(
  {},
  {
    preventExtensions(target) {
      return true;
    },
  },
);

Object.preventExtensions(p); // TypeError wird ausgelöst
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Reflect.preventExtensions()")}}