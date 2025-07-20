---
title: handler.deleteProperty()
short-title: deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.deleteProperty()`** Methode ist eine Falle für die `[[Delete]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/delete", "delete")}} Operator verwendet wird.

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

Die folgenden Parameter werden an die `deleteProperty()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.

### Rückgabewert

Die `deleteProperty()` Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht. Andere Werte werden zu Booleans [gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich des {{jsxref("Operators/delete", "delete")}} Operators im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die `[[Delete]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- Der [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete) Operator: `delete proxy[foo]` und
  `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

Oder jede andere Operation, die die `[[Delete]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Delete]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Definition des Handlers eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als nicht-konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` für die Eigenschaft auf `target` zurückgibt, dann muss die Falle einen nicht-truthy Wert zurückgeben.
- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` auf `target` zurückgibt, und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} einen Eigenschaftsdeskriptor für die Eigenschaft auf `target` zurückgibt, dann muss die Falle einen nicht-truthy Wert zurückgeben.

## Beispiele

### Abfangen des delete Operators

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
