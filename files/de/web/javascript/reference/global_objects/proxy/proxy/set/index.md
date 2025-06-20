---
title: handler.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die **`handler.set()`**-Methode ist eine Falle für die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie der Verwendung von [Property-Accessors](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) genutzt wird, um den Wert eines Properties festzulegen.

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

Die folgenden Parameter werden an die `set()`-Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, das den Property-Namen repräsentiert.
- `value`
  - : Der neue Wert des zu setzenden Properties.
- `receiver`
  - : Der `this`-Wert für Setter; siehe {{jsxref("Reflect.set()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die `set()`-Methode muss ein {{jsxref("Boolean")}} zurückgeben, das anzeigt, ob die Zuweisung erfolgreich war oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich der Verwendung von Property-Accessors im [Strict Mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die `[[Set]]`-interne Methode `false` zurückgibt.

## Beschreibung

### Interceptions

Diese Falle kann folgende Operationen abfangen:

- Property-Zuweisung: `proxy[foo] = bar` und `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Oder jede andere Operation, die die `[[Set]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Set]]`-interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der Wert eines Properties kann nicht geändert werden, um von dem des entsprechenden Zielobjekt-Properties abzuweichen, wenn das entsprechende Zielobjekt-Property ein nicht beschreibbares, nicht konfigurierbares eigenes Daten-Property ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: false` für das Property auf dem `target` zurückgibt und `value` sich von dem `value`-Attribut im Property-Deskriptor des `target` unterscheidet, dann muss die Falle einen falsy Wert zurückgeben.
- Der Wert eines Properties kann nicht gesetzt werden, wenn das entsprechende Zielobjekt-Property ein nicht konfigurierbares eigenes Accessor-Property ist, das einen undefinierten Setter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, set: undefined` für das Property auf dem `target` zurückgibt, dann muss die Falle einen falsy Wert zurückgeben.

## Beispiele

### Falle zum Setzen eines Property-Wertes

Der folgende Code fängt das Setzen eines Property-Wertes ab.

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
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
