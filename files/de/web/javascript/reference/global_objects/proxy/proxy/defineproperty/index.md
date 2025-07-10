---
title: handler.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die **`handler.defineProperty()`** Methode ist eine Falle für die `[[DefineOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.defineProperty()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.defineProperty()", "taller")}}

```js interactive-example
const handler1 = {
  defineProperty(target, key, descriptor) {
    invariant(key, "define");
    return true;
  },
};

function invariant(key, action) {
  if (key[0] === "_") {
    throw new Error(`Invalid attempt to ${action} private "${key}" property`);
  }
}

const monster1 = {};
const proxy1 = new Proxy(monster1, handler1);

console.log((proxy1._secret = "easily scared"));
// Expected output: Error: Invalid attempt to define private "_secret" property
```

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
  - : Ein String oder ein {{jsxref("Symbol")}}, das den Eigenschaftsnamen darstellt.
- `descriptor`
  - : Der Deskriptor für die definierte oder modifizierte Eigenschaft.

### Rückgabewert

Die `defineProperty()` Methode muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht. Andere Werte werden zu [Booleans gezwungen](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}}, werfen einen {{jsxref("TypeError")}}, wenn die `[[DefineOwnProperty]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Diese Falle kann folgende Operationen abfangen:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Oder jede andere Operation, die die `[[DefineOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[DefineOwnProperty]]` interne Methode des Proxy wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht hinzugefügt werden, wenn das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` zurückgibt, muss die Falle einen falsy Wert zurückgeben.
- Eine Eigenschaft kann nicht nicht-konfigurierbar sein, es sei denn, es existiert eine entsprechende nicht-konfigurierbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` oder `configurable: true` zurückgibt und `descriptor.configurable` `false` ist, muss die Falle einen falsy Wert zurückgeben.
- Eine nicht-konfigurierbare Eigenschaft kann nicht nicht-schreibbar sein, es sei denn, es existiert eine entsprechende nicht-konfigurierbare, nicht-schreibbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: true` zurückgibt und `descriptor.writable` `false` ist, muss die Falle einen falsy Wert zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, muss der Deskriptor der Zielobjekteigenschaft mit `descriptor` kompatibel sein. Das heißt, wenn man vorgibt, `target` sei ein gewöhnliches Objekt, und {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, descriptor)")}} würde einen Fehler auslösen, muss die Falle einen falsy Wert zurückgeben. Der `Object.defineProperty()` Verweis enthält mehr Informationen, aber zusammengefasst, wenn die Zieleigenschaft nicht-konfigurierbar ist, muss Folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` können nicht geändert werden
  - die Eigenschaft kann nicht zwischen Daten und Zugriff gewechselt werden
  - das `writable` Attribut kann nur von `true` auf `false` geändert werden
  - das `value` Attribut kann nur geändert werden, wenn `writable` `true` ist

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

Beim Aufruf von {{jsxref("Object.defineProperty()")}} oder {{jsxref("Reflect.defineProperty()")}}, hat der an
die `defineProperty()` Falle übergebene `descriptor` eine Einschränkung — nur die folgenden Eigenschaften sind verwendbar (nicht standardmäßige Eigenschaften werden ignoriert):

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
