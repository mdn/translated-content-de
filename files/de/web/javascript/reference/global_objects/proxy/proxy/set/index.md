---
title: handler.set()
short-title: set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.set()`** Methode ist eine Falle für die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die bei Operationen verwendet wird, wie zum Beispiel beim Setzen eines Eigenschaftswerts durch [Eigenschafts-Zugriffsoperatoren](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors).

{{InteractiveExample("JavaScript Demo: handler.set()", "taller")}}

```js interactive-example
const monster = { eyeCount: 4 };

const handler = {
  set(obj, prop, value) {
    if (prop === "eyeCount" && value % 2 !== 0) {
      console.log("Monsters must have an even number of eyes");
    } else {
      return Reflect.set(...arguments);
    }
  },
};

const proxy = new Proxy(monster, handler);

proxy.eyeCount = 1;
// Expected output: "Monsters must have an even number of eyes"

console.log(proxy.eyeCount);
// Expected output: 4

proxy.eyeCount = 2;
console.log(proxy.eyeCount);
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

Die folgenden Parameter werden an die `set()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.
- `value`
  - : Der neue Wert der Eigenschaft, die gesetzt werden soll.
- `receiver`
  - : Der `this` Wert für Setter; siehe {{jsxref("Reflect.set()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die `set()` Methode muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Zuweisung erfolgreich war oder nicht. Andere Werte werden in Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich der Nutzung von Eigenschafts-Zugriffsoperatoren im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die `[[Set]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfangmöglichkeiten

Diese Falle kann folgende Operationen abfangen:

- Eigenschaftszuweisung: `proxy[foo] = bar` und `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Oder jede andere Operation, die die `[[Set]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Set]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Es kann nicht der Wert einer Eigenschaft geändert werden, um sich von dem Wert der entsprechenden Zielobjekteigenschaft zu unterscheiden, wenn die entsprechende Zielobjekteigenschaft eine nicht-schreibbare, nicht-konfigurierbare eigene Dateneigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: false` zurückgibt und `value` sich von dem `value`-Attribut im Eigenschaftsbeschreiber von `target` unterscheidet, dann muss die Falle einen falschen Wert zurückgeben.
- Es kann nicht der Wert einer Eigenschaft gesetzt werden, wenn die entsprechende Zielobjekteigenschaft eine nicht-konfigurierbare eigene Accessor-Eigenschaft ist, die einen undefinierten Setter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, set: undefined` zurückgibt, dann muss die Falle einen falschen Wert zurückgeben.

## Beispiele

### Abfangen des Setzens eines Eigenschaftswertes

Der folgende Code fängt das Setzen eines Eigenschaftswertes ab.

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
