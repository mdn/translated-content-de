---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.deleteProperty()`** Methode ist eine Trap für die `[[Delete]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) des Objekts, die von Operationen wie dem {{jsxref("Operators/delete", "delete")}} Operator verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-deleteproperty.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  deleteProperty(target, property) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `deleteProperty()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die `deleteProperty()` Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht. Andere Werte werden zu Booleans [zwangskonvertiert](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich des {{jsxref("Operators/delete", "delete")}} Operators im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die `[[Delete]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfangpunkte

Diese Trap kann folgende Operationen abfangen:

- Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator: `delete proxy[foo]` und
  `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

Oder jede andere Operation, die die `[[Delete]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Delete]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition gegen eine der folgenden Invarianten verstößt:

- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als nicht konfigurierbares eigenes Attribut des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` für die Eigenschaft auf `target` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.
- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als eigenes Attribut des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für `target` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} einen Eigenschafts-Descriptor für die Eigenschaft auf `target` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.

## Beispiele

### Den delete Operator abfangen

Der folgende Code fängt den {{jsxref("Operators/delete", "delete")}} Operator ab.

```js
const p = new Proxy(
  {},
  {
    deleteProperty(target, prop) {
      if (!(prop in target)) {
        console.log(`property not found: ${prop}`);
        return false;
      }
      delete target[prop];
      console.log(`property removed: ${prop}`);
      return true;
    },
  },
);

p.a = 10;
console.log("a" in p); // true

const result1 = delete p.a; // "property removed: a"
console.log(result1); // true
console.log("a" in p); // false

const result2 = delete p.a; // "property not found: a"
console.log(result2); // false
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Reflect.deleteProperty()")}}
