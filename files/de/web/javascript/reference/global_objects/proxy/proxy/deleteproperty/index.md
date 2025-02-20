---
title: handler.deleteProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/deleteProperty
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`handler.deleteProperty()`** ist eine Trap für die `[[Delete]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie dem {{jsxref("Operators/delete", "delete")}}-Operator verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.deleteProperty()", "taller")}}

```js interactive-example
const monster1 = {
  texture: "scaly",
};

const handler1 = {
  deleteProperty(target, prop) {
    if (prop in target) {
      delete target[prop];
      console.log(`property removed: ${prop}`);
      // Expected output: "property removed: texture"
    }
  },
};

console.log(monster1.texture);
// Expected output: "scaly"

const proxy1 = new Proxy(monster1, handler1);
delete proxy1.texture;

console.log(monster1.texture);
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
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen repräsentiert.

### Rückgabewert

Die Methode `deleteProperty()` muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Eigenschaft erfolgreich gelöscht wurde oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich des {{jsxref("Operators/delete", "delete")}}-Operators im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), lösen einen {{jsxref("TypeError")}} aus, wenn die interne Methode `[[Delete]]` `false` zurückgibt.

## Beschreibung

### Interceptions

Diese Trap kann folgende Operationen abfangen:

- Den [`delete`](/de/docs/Web/JavaScript/Reference/Operators/delete)-Operator: `delete proxy[foo]` und
  `delete proxy.foo`
- {{jsxref("Reflect.deleteProperty()")}}

Oder jede andere Operation, die die `[[Delete]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die interne Methode `[[Delete]]` des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Deklaration eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als nicht-konfigurierbare eigene Eigenschaft des Zielobjekts existiert. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.
- Eine Eigenschaft kann nicht als gelöscht gemeldet werden, wenn sie als eigene Eigenschaft des Zielobjekts existiert und das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} einen Eigenschaftsdeskriptor für die Eigenschaft auf `target` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.

## Beispiele

### Löschen-Operator abfangen

Der folgende Code fängt den {{jsxref("Operators/delete", "delete")}}-Operator ab.

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
- {{jsxref("Operators/delete", "delete")}}
- {{jsxref("Reflect.deleteProperty()")}}
