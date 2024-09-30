---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die Methode **`handler.defineProperty()`** ist eine Trap für die Methode `[[DefineOwnProperty]]` [objektinterne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.defineProperty()")}} verwendet wird.

{{EmbedInteractiveExample("pages/js/proxyhandler-defineproperty.html", "taller")}}

## Syntax

```js-nolint
new Proxy(target, {
  defineProperty(target, property, descriptor) {
  }
})
```

### Parameter

Die folgenden Parameter werden an die Methode `defineProperty()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder {{jsxref("Symbol")}}, das den Eigenschaftsnamen repräsentiert.
- `descriptor`
  - : Der Deskriptor für die Eigenschaft, die definiert oder modifiziert wird.

### Rückgabewert

Die Methode `defineProperty()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht. Andere Werte werden in Booleans [umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[DefineOwnProperty]]` `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Oder jede andere Operation, die die [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) `[[DefineOwnProperty]]` aufruft.

### Invarianten

Die `[[DefineOwnProperty]]`-Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handlerdefinition eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht hinzugefügt werden, wenn das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` zurückgibt, muss die Trap einen falschen Wert zurückgeben.
- Eine Eigenschaft kann nicht nicht-konfigurierbar sein, es sei denn, es gibt eine entsprechende nicht-konfigurierbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft auf `target` zurückgibt und `descriptor.configurable` `false` ist, muss die Trap einen falschen Wert zurückgeben.
- Eine nicht-konfigurierbare Eigenschaft kann nicht nicht-schreibbar sein, es sei denn, es gibt eine entsprechende nicht-konfigurierbare, nicht-schreibbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft auf `target` zurückgibt und `descriptor.writable` `false` ist, muss die Trap einen falschen Wert zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, muss der Deskriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das heißt, wenn `target` ein gewöhnliches Objekt wäre und {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, descriptor)")}} einen Fehler werfen würde, muss die Trap einen falschen Wert zurückgeben. Die Referenz `Object.defineProperty()` enthält mehr Informationen, aber zusammenfassend muss, wenn die Zieleigenschaft nicht konfigurierbar ist, Folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` können nicht geändert werden
  - die Eigenschaft kann nicht zwischen Daten- und Accessor-Eigenschaft gewechselt werden
  - das `writable`-Attribut kann nur von `true` zu `false` geändert werden
  - das `value`-Attribut kann nur geändert werden, wenn `writable` `true` ist

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

Beim Aufruf von {{jsxref("Object.defineProperty()")}} oder {{jsxref("Reflect.defineProperty()")}} hat der an die `defineProperty()`-Trap übergebene `descriptor` eine Einschränkung—es sind nur die folgenden Eigenschaften nutzbar (nicht-standardisierte Eigenschaften werden ignoriert):

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
- [`Proxy()`-Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Reflect.defineProperty()")}}
