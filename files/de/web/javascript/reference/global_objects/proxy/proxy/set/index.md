---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`handler.set()`** ist eine Trap für die `[[Set]]` [interne Methode von Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie der Verwendung von [Property Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) genutzt wird, um den Wert einer Eigenschaft festzulegen.

{{InteractiveExample("JavaScript Demo: handler.set()", "taller")}}

```js interactive-example
const monster1 = { eyeCount: 4 };

const handler1 = {
  set(obj, prop, value) {
    if (prop === "eyeCount" && value % 2 !== 0) {
      console.log("Monsters must have an even number of eyes");
    } else {
      return Reflect.set(...arguments);
    }
  },
};

const proxy1 = new Proxy(monster1, handler1);

proxy1.eyeCount = 1;
// Expected output: "Monsters must have an even number of eyes"

console.log(proxy1.eyeCount);
// Expected output: 4

proxy1.eyeCount = 2;
console.log(proxy1.eyeCount);
// Expected output: 2
```

## Syntax

```js-nolint
new Proxy(target, {
  set(target, property, value, receiver) {
  }
})
```

### Parameter

Die folgenden Parameter werden der Methode `set()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.
- `value`
  - : Der neue Wert der zu setzenden Eigenschaft.
- `receiver`
  - : Der `this`-Wert für Setter; siehe {{jsxref("Reflect.set()")}}. Dies ist üblicherweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die Methode `set()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Zuweisung erfolgreich war. Andere Werte werden [in Boolesche Werte umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, darunter die Verwendung von Property Accessors im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[Set]]` `false` zurückgibt.

## Beschreibung

### Interceptionen

Diese Trap kann die folgenden Operationen abfangen:

- Zuweisung von Eigenschaften: `proxy[foo] = bar` und `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Oder jede andere Operation, die die `[[Set]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Set]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der Wert einer Eigenschaft kann nicht geändert werden, um sich von dem Wert der entsprechenden Eigenschaft des Zielobjekts zu unterscheiden, wenn die entsprechende Eigenschaft des Zielobjekts eine nicht beschreibbare, nicht konfigurierbare eigene Data-Eigenschaft ist. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft in `target` `configurable: false, writable: false` zurückgibt und `value` sich von dem Attribut `value` im Eigenschaftsdescriptor des `target` unterscheidet, muss die Trap einen falsy-Wert zurückgeben.
- Der Wert einer Eigenschaft kann nicht festgelegt werden, wenn die entsprechende Eigenschaft des Zielobjekts eine nicht konfigurierbare eigene Accessor-Eigenschaft ist, die keinen definierten Setter hat. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft in `target` `configurable: false, set: undefined` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.

## Beispiele

### Trap für das Setzen eines Eigenschaftswerts

Der folgende Code fängt das Setzen eines Eigenschaftswerts ab.

```js
const p = new Proxy(
  {},
  {
    set(target, prop, value, receiver) {
      target[prop] = value;
      console.log(`property set: ${prop} = ${value}`);
      return true;
    },
  },
);

console.log("a" in p); // false

p.a = 10; // "property set: a = 10"
console.log("a" in p); // true
console.log(p.a); // 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
