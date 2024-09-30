---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die Methode **`handler.set()`** ist eine Trap für die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie der Verwendung von [Eigenschaftszuweisern](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zum Setzen des Werts einer Eigenschaft verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  set(target, property, value, receiver) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die Methode `set()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.
- `value`
  - : Der neue Wert der Eigenschaft, der festgelegt werden soll.
- `receiver`
  - : Der `this`-Wert für Setter; siehe {{jsxref("Reflect.set()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die Methode `set()` muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Zuweisung erfolgreich war oder nicht. Andere Werte werden in Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich der Verwendung von Eigenschaftszuweisern im [Strict-Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die `[[Set]]` interne Methode `false` zurückgibt.

## Beschreibung

### Interceptionen

Diese Trap kann folgende Operationen abfangen:

- Eigenschaftszuweisung: `proxy[foo] = bar` und `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Oder jede andere Operation, die die `[[Set]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Set]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der Wert einer Eigenschaft kann nicht von dem Wert der entsprechenden Zielobjekteigenschaft abweichen, wenn die entsprechende Zielobjekteigenschaft eine nicht beschreibbare, nicht konfigurierbare eigene Dieneigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: false` zurückgibt und `value` sich vom `value`-Attribut im Eigenschaftsdescriptor von `target` unterscheidet, muss die Trap einen falschen Wert zurückgeben.
- Der Wert einer Eigenschaft kann nicht gesetzt werden, wenn die entsprechende Zielobjekteigenschaft eine nicht konfigurierbare eigene Accessor-Eigenschaft ist, die einen undefinierten Setter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, set: undefined` zurückgibt, muss die Trap einen falschen Wert zurückgeben.

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
