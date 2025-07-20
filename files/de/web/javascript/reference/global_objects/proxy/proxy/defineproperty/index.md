---
title: handler.defineProperty()
short-title: defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.defineProperty()`** Methode ist eine Trap für die `[[DefineOwnProperty]]` [interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.defineProperty()")}} genutzt wird.

{{InteractiveExample("JavaScript Demo: handler.defineProperty()", "taller")}}

```js interactive-example
const handler = {
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

const monster = {};
const proxy = new Proxy(monster, handler);

console.log((proxy._secret = "easily scared"));
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
  - : Ein String oder {{jsxref("Symbol")}}, der den Eigenschaftsnamen repräsentiert.
- `descriptor`
  - : Der Deskriptor für die zu definierende oder zu ändernde Eigenschaft.

### Rückgabewert

Die `defineProperty()` Methode muss ein {{jsxref("Boolean")}} zurückgeben, das angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}}, werfen einen {{jsxref("TypeError")}}, wenn die `[[DefineOwnProperty]]` interne Methode `false` zurückgibt.

## Beschreibung

### Abfangmöglichkeiten

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Oder jede andere Operation, die die `[[DefineOwnProperty]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[DefineOwnProperty]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht hinzugefügt werden, wenn das Zielobjekt nicht erweiterbar ist. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} `false` für `target` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` für die Eigenschaft auf `target` zurückgibt, dann muss die Trap einen falschen Wert zurückgeben.
- Eine Eigenschaft kann nicht nicht-konfigurierbar sein, es sei denn, es gibt eine entsprechende nicht-konfigurierbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `undefined` oder `configurable: true` für die Eigenschaft auf `target` zurückgibt, und `descriptor.configurable` ist `false`, dann muss die Trap einen falschen Wert zurückgeben.
- Eine nicht-konfigurierbare Eigenschaft kann nicht nicht-schreibbar sein, es sei denn, es gibt eine entsprechende nicht-konfigurierbare, nicht-schreibbare eigene Eigenschaft des Zielobjekts. Das heißt, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false, writable: true` für die Eigenschaft auf `target` zurückgibt und `descriptor.writable` ist `false`, dann muss die Trap einen falschen Wert zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft auf dem Zielobjekt hat, dann muss der Deskriptor der Zieleigenschaft mit `descriptor` kompatibel sein. Das heißt, wenn man annimmt, `target` ist ein gewöhnliches Objekt, und {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, descriptor)")}} würde einen Fehler werfen, dann muss die Trap einen falschen Wert zurückgeben. Die `Object.defineProperty()` Referenz enthält mehr Informationen, aber zusammengefasst, wenn die Zieleigenschaft nicht-konfigurierbar ist, muss Folgendes gelten:
  - `configurable`, `enumerable`, `get` und `set` können nicht geändert werden
  - die Eigenschaft kann nicht zwischen Daten- und Zugriffsorakel gewechselt werden
  - das `writable` Attribut kann nur von `true` zu `false` geändert werden
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

Beim Aufruf von {{jsxref("Object.defineProperty()")}} oder
{{jsxref("Reflect.defineProperty()")}}, hat der `descriptor`, der an die `defineProperty()` Trap übergeben wird, eine Einschränkung — nur die folgenden Eigenschaften sind verwendbar (nicht-standardisierte Eigenschaften werden ignoriert):

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
