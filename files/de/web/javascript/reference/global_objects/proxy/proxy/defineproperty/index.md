---
title: handler.defineProperty()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/defineProperty
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die Methode **`handler.defineProperty()`** ist eine Trap für die `[[DefineOwnProperty]]`-[interne Objektmethode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.defineProperty()")}} verwendet wird.

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

Die folgenden Parameter werden an die Methode `defineProperty()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.
- `property`
  - : Ein String oder ein {{jsxref("Symbol")}}, der den Eigenschaftsnamen darstellt.
- `descriptor`
  - : Der Descriptor für die zu definierende oder zu modifizierende Eigenschaft.

### Rückgabewert

Die Methode `defineProperty()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob die Eigenschaft erfolgreich definiert wurde oder nicht. Andere Werte werden [in Booleans umgewandelt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

Viele Operationen, einschließlich {{jsxref("Object.defineProperty()")}} und {{jsxref("Object.defineProperties()")}}, werfen einen {{jsxref("TypeError")}}, wenn die interne Methode `[[DefineOwnProperty]]` `false` zurückgibt.

## Beschreibung

### Abfangvorgänge

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.defineProperty()")}}, {{jsxref("Object.defineProperties()")}}
- {{jsxref("Reflect.defineProperty()")}}

Oder jede andere Operation, die die `[[DefineOwnProperty]]`-[interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die interne Methode `[[DefineOwnProperty]]` des Proxy-Objekts wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Eine Eigenschaft kann nicht hinzugefügt werden, wenn das Zielobjekt nicht erweiterbar ist. Das bedeutet, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt und {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` zurückgibt, muss die Trap einen falsy-Wert zurückgeben.
- Eine Eigenschaft kann nicht nicht-konfigurierbar sein, es sei denn, es existiert eine entsprechende nicht-konfigurierbare eigene Eigenschaft des Zielobjekts. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `undefined` oder `configurable: true` zurückgibt und `descriptor.configurable` `false` ist, muss die Trap einen falsy-Wert zurückgeben.
- Eine nicht-konfigurierbare Eigenschaft kann nicht nicht-beschreibbar sein, es sei denn, es existiert eine entsprechende nicht-konfigurierbare, nicht-beschreibbare eigene Eigenschaft des Zielobjekts. Das bedeutet, wenn {{jsxref("Reflect.getOwnPropertyDescriptor()")}} für die Eigenschaft auf `target` `configurable: false, writable: true` zurückgibt und `descriptor.writable` `false` ist, muss die Trap einen falsy-Wert zurückgeben.
- Wenn eine Eigenschaft eine entsprechende Eigenschaft im Zielobjekt hat, muss der Deskriptor der Zieleigenschaft mit `descriptor` kompatibel sein. Das bedeutet, angenommen `target` ist ein gewöhnliches Objekt und {{jsxref("Object/defineProperty", "Object.defineProperty(target, property, descriptor)")}} würde einen Fehler werfen, dann muss die Trap einen falsy-Wert zurückgeben. Die Referenz `Object.defineProperty()` enthält weitere Informationen, aber zusammenfassend gilt: Wenn die Zieleigenschaft nicht konfigurierbar ist, müssen die folgenden Kriterien erfüllt sein:
  - `configurable`, `enumerable`, `get` und `set` dürfen nicht geändert werden
  - die Eigenschaft darf nicht zwischen Daten und Zugriffswerten geändert werden
  - das Attribut `writable` kann nur von `true` zu `false` geändert werden
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

Beim Aufruf von {{jsxref("Object.defineProperty()")}} oder {{jsxref("Reflect.defineProperty()")}} hat der `descriptor`, der an die `defineProperty()`-Trap übergeben wird, eine Einschränkung – nur die folgenden Eigenschaften können verwendet werden (nicht-standardisierte Eigenschaften werden ignoriert):

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
