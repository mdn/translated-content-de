---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.set()`** Methode ist eine Falle für die `[[Set]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie der Verwendung von [Eigenschaftenzugriffen](/de/docs/Web/JavaScript/Reference/Operators/Property_accessors) zum Setzen eines Eigenschaftswerts verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-set.html", "taller")}}

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
  - : Ein String oder {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.
- `value`
  - : Der neue Wert der zu setzenden Eigenschaft.
- `receiver`
  - : Der `this`-Wert für Setter; siehe {{jsxref("Reflect.set()")}}. Dies ist normalerweise entweder der Proxy selbst oder ein Objekt, das vom Proxy erbt.

### Rückgabewert

Die `set()` Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Zuweisung erfolgreich war oder nicht. Andere Werte werden [zu Boolean ausgewertet](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich der Verwendung von Eigenschaftenzugriffen im [strict mode](/de/docs/Web/JavaScript/Reference/Strict_mode), werfen einen {{jsxref("TypeError")}}, wenn die `[[Set]]` interne Methode `false` zurückgibt.

## Beschreibung

### Interceptions

Diese Falle kann folgende Operationen abfangen:

- Eigenschaftenzuweisung: `proxy[foo] = bar` und `proxy.foo = bar`
- {{jsxref("Reflect.set()")}}

Oder jede andere Operation, die die `[[Set]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[Set]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Der Wert einer Eigenschaft kann nicht geändert werden, um sich vom Wert der entsprechenden Zielobjekteigenschaft zu unterscheiden, wenn die entsprechende Zielobjekteigenschaft eine nicht beschreibbare und nicht konfigurierbare eigene Dateneigenschaft ist. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: false` zurückgibt und `value` sich von dem `value`-Attribut im Eigenschaftsdeskriptor des `target` unterscheidet, muss die Falle einen unwahren Wert zurückgeben.
- Der Wert einer Eigenschaft kann nicht gesetzt werden, wenn die entsprechende Zielobjekteigenschaft eine nicht konfigurierbare eigene Zugriffseigenschaft ist, die einen undefinierten Setter hat. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, set: undefined` zurückgibt, muss die Falle einen unwahren Wert zurückgeben.

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
