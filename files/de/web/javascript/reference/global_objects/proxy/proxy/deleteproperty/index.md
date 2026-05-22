---
title: handler.deleteProperty()
short-title: deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

Die Methode **`handler.deleteProperty()`** ist eine Trap für die `[[Delete]]` [interne Methode des Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("delete")}}-Operator verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.deleteProperty()", "taller")}}

```js interactive-example
const monster = {
  texture: "scaly",
};

const handler = {
  deleteProperty(target, prop) {
    if (prop in target) {
      delete target[prop];
      console.log(`property removed: ${prop}`);
      // Expected output: "property removed: texture"
    }
  },
};

console.log(monster.texture);
// Expected output: "scaly"

const proxy = new Proxy(monster, handler);
delete proxy.texture;

console.log(monster.texture);
// Expected output: undefined
```

## Syntax

```js-nolint
new Proxy(target, {
  deleteProperty(target, property) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die Methode `deleteProperty()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die Methode `deleteProperty()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht. Andere Werte werden in Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich des {{jsxref("delete")}}-Operators im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[Delete]]` `false` zurückgibt.

## Beschreibung

### Interceptions

Diese Trap kann die folgenden Operationen abfangen:

- Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator: `delete proxy[foo]` und
  `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

Oder jede andere Operation, die die `[[Delete]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Delete]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Definition des Handlers eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als nicht konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.
- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das bedeutet, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} einen Eigenschaftsdeskriptor für die Eigenschaft auf `target` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.

## Beispiele

### Abfangen des delete-Operatos

Der folgende Code fängt den {{jsxref("delete")}}-Operator ab.

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
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("delete")}}
- {{jsxref("Reflect.deleteProperty()")}}
