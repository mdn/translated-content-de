---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.defineProperty()`** Methode ist eine Falle für die `[[DefineOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.defineProperty()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  defineProperty(target, property, descriptor) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die `defineProperty()` Methode übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.
- `descriptor`
  - : Der Descriptor für die Eigenschaft, die definiert oder geändert wird.

### Rückgabewert

Die `defineProperty()` Methode muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht. Andere Werte werden zu Booleans [zusammengeführt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[DefineOwnProperty]]` `false` zurückgibt.

## Beschreibung

### Abfangmechanismen

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Oder jede andere Operation, die die `[[DefineOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[DefineOwnProperty]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht hinzugefügt werden, wenn das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für `target` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` für die Eigenschaft auf `target` zurückgibt, muss die Falle einen falsy Wert zurückgeben.
- Eine Eigenschaft kann nicht nicht-konfigurierbar sein, es sei denn, es existiert eine entsprechende nicht-konfigurierbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft auf `target` zurückgibt und `descriptor.configurable` `false` ist, muss die Falle einen falsy Wert zurückgeben.
- Eine nicht-konfigurierbare Eigenschaft kann nicht nicht-schreibbar sein, es sei denn, es gibt eine entsprechende nicht-konfigurierbare, nicht-schreibbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft auf `target` zurückgibt und `descriptor.writable` `false` ist, muss die Falle einen falsy Wert zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, dann muss der Descriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das heißt, wenn man so tut, als wäre `target` ein gewöhnliches Objekt und {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, descriptor)")}} würde einen Fehler auslösen, muss die Falle einen falsy Wert zurückgeben. Der Verweis auf `Object.defineProperty()` enthält weitere Informationen, aber zusammenfassend gilt, wenn die Zieleigenschaft nicht konfigurierbar ist, müssen folgende Dinge gültig sein:
  - `configurable`, `enumerable`, `get` und `set` können nicht geändert werden
  - die Eigenschaft kann nicht zwischen Daten- und Zugriffsobjekt geändert werden
  - das Attribut `writable` kann nur von `true` auf `false` geändert werden
  - das Attribut `value` kann nur geändert werden, wenn `writable` `true` ist

## Beispiele

### Abfangen von defineProperty

Der folgende Code fängt {{jsxref("Object.defineProperty()")}} ab.

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(`called: ${prop}`);
      return true;
    },
  },
);

const desc = { configurable: true, enumerable: true, value: 10 };
Object.defineProperty(p, "a", desc); // "called: a"
```

Beim Aufruf von {{jsxref("Object.defineProperty()")}} oder
{{jsxref("Reflect.defineProperty()")}} gibt es eine Einschränkung beim `descriptor`, der an die `defineProperty()` Falle übergeben wird – nur folgende Eigenschaften sind nutzbar (nicht standardisierte Eigenschaften werden ignoriert):

- `enumerable`
- `configurable`
- `writable`
- `value`
- `get`
- `set`

```js
const p = new Proxy(
  {},
  {
    defineProperty(target, prop, descriptor) {
      console.log(descriptor);
      return Reflect.defineProperty(target, prop, descriptor);
    },
  },
);

Object.defineProperty(p, "name", {
  value: "proxy",
  type: "custom",
}); // { value: 'proxy' }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
