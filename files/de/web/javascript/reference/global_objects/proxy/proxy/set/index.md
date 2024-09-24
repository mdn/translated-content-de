---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die Methode **`handler.set()`** dient als Abfangmethode für die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die in Operationen wie dem Verwenden von [Eigenschaftszugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) eingesetzt wird, um den Wert einer Eigenschaft zu setzen.

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

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
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen repräsentiert.
- `value`
  - : Der neue Wert der Eigenschaft, die gesetzt werden soll.
- `receiver`
  - : Der `this`-Wert für Setter; siehe {{jsxref("Reflect.set()")}}. Dies ist üblicherweise entweder das Proxy-Objekt selbst oder ein Objekt, das vom Proxy-Objekt erbt.

### Rückgabewert

Die Methode `set()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Zuweisung erfolgreich war oder nicht. Andere Werte werden in Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich der Verwendung von Eigenschaftszugriffen im [strikten Modus](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[Set]]` `false` zurückgibt.

## Beschreibung

### Interceptionen

Diese Abfangmethode kann folgende Operationen abfangen:

- Eigenschaftszuweisung: `proxy[foo] = bar` und `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Oder jede andere Operation, die die `[[Set]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Set]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der Wert einer Eigenschaft kann nicht von dem Wert der entsprechenden Zielobjekt-Eigenschaft abweichen, wenn die entsprechende Zielobjekt-Eigenschaft eine nicht beschreibbare, nicht konfigurierbare eigene Dateneigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: false` für die Eigenschaft auf dem `target` zurückgibt, und `value` von dem Wertattribut im Property-Descriptor des `target` abweicht, muss die Abfangmethode einen falschen Wert zurückgeben.
- Der Wert einer Eigenschaft kann nicht gesetzt werden, wenn die entsprechende Zielobjekt-Eigenschaft eine nicht konfigurierbare eigene Accessor-Eigenschaft ist, die einen undefinierten Setter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, set: undefined` für die Eigenschaft auf dem `target` zurückgibt, muss die Abfangmethode einen falschen Wert zurückgeben.

## Beispiele

### Abfangen des Setzens eines Eigenschaftswerts

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
