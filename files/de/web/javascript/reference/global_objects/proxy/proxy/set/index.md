---
title: handler.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`handler.set()`**-Methode ist ein Trap für die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die bei Operationen wie der Verwendung von [Property-Zugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) verwendet wird, um den Wert einer Eigenschaft festzulegen.

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
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.
- `value`
  - : Der neue Wert der festzulegenden Eigenschaft.
- `receiver`
  - : Der `this`-Wert für Setter; siehe {{jsxref("Reflect.set()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die `set()`-Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Zuweisung erfolgreich war oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich der Verwendung von Property-Zugriffen im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die `[[Set]]`-Methode `false` zurückgibt.

## Beschreibung

### Abfangmöglichkeiten

Dieser Trap kann folgende Operationen abfangen:

- Eigenschaftszuweisung: `proxy[foo] = bar` und `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Oder jede andere Operation, die die `[[Set]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Set]]`-Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der Wert einer Eigenschaft kann nicht geändert werden, um sich von dem Wert der entsprechenden Zielobjekteigenschaft zu unterscheiden, wenn die entsprechende Zielobjekteigenschaft eine nicht beschreibbare, nicht konfigurierbare eigene Dateneigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: false` für die Eigenschaft auf `target` zurückgibt und sich `value` von dem `value`-Attribut im Property-Descriptor des `target` unterscheidet, muss der Trap einen nicht-wahrheitsgemäßen Wert zurückgeben.
- Der Wert einer Eigenschaft kann nicht gesetzt werden, wenn die entsprechende Zielobjekteigenschaft eine nicht konfigurierbare eigene Accessor-Eigenschaft ist, die einen undefinierten Setter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, set: undefined` für die Eigenschaft auf `target` zurückgibt, muss der Trap einen nicht-wahrheitsgemäßen Wert zurückgeben.

## Beispiele

### Trap beim Setzen eines Eigenschaftswerts

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
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Reflect.set()")}}
