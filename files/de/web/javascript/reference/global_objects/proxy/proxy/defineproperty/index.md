---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: 5c9b080f763346a4a18cc2c50fa4e21d2feec700
---

{{JSRef}}

Die **`handler.defineProperty()`** Methode ist eine Falle für die `[[DefineOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die durch Operationen wie {{jsxref("Object.defineProperty()")}} verwendet wird.

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
  - : Ein String oder {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.
- `descriptor`
  - : Der Deskriptor für die zu definierende oder zu modifizierende Eigenschaft.

### Rückgabewert

Die `defineProperty()` Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}}, werfen einen {{jsxref("TypeError")}}, wenn die `[[DefineOwnProperty]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Oder jede andere Operation, die die `[[DefineOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[DefineOwnProperty]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition gegen eine der folgenden Invarianten verstößt:

- Eine Eigenschaft kann nicht hinzugefügt werden, wenn das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für `target` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` für die Eigenschaft auf `target` zurückgibt, muss die Falle einen Falschwert zurückgeben.
- Eine Eigenschaft kann nicht nicht-konfigurierbar sein, es sei denn, es existiert eine entsprechende nicht-konfigurierbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft auf `target` zurückgibt und `descriptor.configurable` `false` ist, muss die Falle einen Falschwert zurückgeben.
- Eine nicht-konfigurierbare Eigenschaft kann nicht nicht-schreibbar sein, es sei denn, es existiert eine entsprechende nicht-konfigurierbare, nicht-schreibbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft auf `target` zurückgibt und `descriptor.writable` `false` ist, muss die Falle einen Falschwert zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, dann muss der Deskriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das heißt, wenn man so tut, als wäre `target` ein gewöhnliches Objekt und {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, descriptor)")}} einen Fehler werfen würde, dann muss die Falle einen Falschwert zurückgeben. Der `Object.defineProperty()` Verweis enthält mehr Informationen, aber zusammengefasst muss bei nicht-konfigurierbaren Zielobjekteigenschaften Folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` dürfen nicht geändert werden
  - die Eigenschaft kann nicht zwischen Daten- und Accessor-Eigenschaft gewechselt werden
  - das `writable` Attribut darf nur von `true` zu `false` geändert werden
  - das `value` Attribut darf nur geändert werden, wenn `writable` `true` ist

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

Beim Aufrufen von {{jsxref("Object.defineProperty()")}} oder {{jsxref("Reflect.defineProperty()")}} hat der an die `defineProperty()` Falle übergebene `descriptor` eine Einschränkung—nur die folgenden Eigenschaften sind nutzbar (nicht-Standard-Eigenschaften werden ignoriert):

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
