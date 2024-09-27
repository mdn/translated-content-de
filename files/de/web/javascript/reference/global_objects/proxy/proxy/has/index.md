---
title: handler.has()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/has
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.has()`** Methode ist eine Trap für die `[[HasProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/in", "in")}} Operator verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-has.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  has(target, property) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `has()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die `has()` Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Eigenschaft existiert oder nicht. Andere Werte werden [in Booleans konvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

## Beschreibung

### Abfangvorgänge

Diese Trap kann diese Operationen abfangen:

- Der [`in`](/de/docs/Web/JavaScript/Reference/Operators/in) Operator: `foo in proxy`
- [`with`](/de/docs/Web/JavaScript/Reference/Statements/with) Überprüfung: `with(proxy) { (foo); }`
- {{jsxref("Reflect.has()")}}

Oder jede andere Operation, die die `[[HasProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[HasProperty]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Eine Eigenschaft darf nicht als nicht existent gemeldet werden, wenn sie als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false` zurückgibt, muss die Trap `true` zurückgeben.
- Eine Eigenschaft darf nicht als nicht existent gemeldet werden, wenn sie als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das bedeutet, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt, und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} einen Eigenschaftsdeskriptor für die Eigenschaft auf `target` zurückgibt, muss die Trap `true` zurückgeben.

## Beispiele

### Abfangen des in Operators

Der folgende Code fängt den {{jsxref("Operators/in", "in")}} Operator ab.

```js
const p = new Proxy(
  {},
  {
    has(target, prop) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

console.log("a" in p);
// "called: a"
// true
```

Der folgende Code verletzt eine Invariante.

```js example-bad
const obj = { a: 10 };
Object.preventExtensions(obj);

const p = new Proxy(obj, {
  has(target, prop) {
    return false;
  },
});

"a" in p; // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/in", "in")}}
- {{jsxref("Reflect.has()")}}
