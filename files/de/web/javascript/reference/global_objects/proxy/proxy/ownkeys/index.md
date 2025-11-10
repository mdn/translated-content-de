---
title: handler.ownKeys()
short-title: ownKeys()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/ownKeys
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.ownKeys()`**-Methode ist ein Trap für die `[[OwnPropertyKeys]]` [interne Methode des Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.keys()")}}, {{jsxref("Reflect.ownKeys()")}} usw. verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.ownKeys()", "taller")}}

```js interactive-example
const monster = {
  _age: 111,
  [Symbol("secret")]: "I am scared!",
  eyeCount: 4,
};

const handler = {
  ownKeys(target) {
    return Reflect.ownKeys(target);
  },
};

const proxy = new Proxy(monster, handler);

for (const key of Object.keys(proxy)) {
  console.log(key);
  // Expected output: "_age"
  // Expected output: "eyeCount"
}
```

## Syntax

```js-nolint
new Proxy(target, {
  ownKeys(target) {
  }
})
```

### Parameter

Folgender Parameter wird an die Methode `ownKeys()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die Methode `ownKeys()` muss ein [array-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Array#array-like_objects) zurückgeben, bei dem jedes Element entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}} ist, wobei keine doppelten Einträge vorkommen.

## Beschreibung

### Interceptions

Dieser Trap kann diese Operationen abfangen:

- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.getOwnPropertySymbols()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Reflect.ownKeys()")}}

Oder jede andere Operation, die die `[[OwnPropertyKeys]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[OwnPropertyKeys]]`-Methode des Proxys löst einen {{jsxref("TypeError")}} aus, wenn die Handler-Definition eine der folgenden Invarianten verletzt:

- Das Ergebnis ist ein {{jsxref("Object")}}.
- Die Liste der Schlüssel enthält keine doppelten Werte.
- Der Typ jedes Schlüssels ist entweder ein {{jsxref("String")}} oder ein {{jsxref("Symbol")}}.
- Die Ergebnisliste muss die Schlüssel aller nicht konfigurierbaren eigenen Eigenschaften des Zielobjekts enthalten. Das heißt, für alle Schlüssel, die durch {{jsxref("Reflect.ownKeys()")}} auf dem Zielobjekt zurückgegeben werden, muss der Schlüssel enthalten sein, wenn der Schlüssel durch {{jsxref("Reflect.getOwnPropertyDescriptor()")}} `configurable: false` meldet.
- Wenn das Zielobjekt nicht erweiterbar ist, muss die Ergebnisliste alle Schlüssel der eigenen Eigenschaften des Zielobjekts und keine anderen Werte enthalten. Das heißt, wenn {{jsxref("Reflect.isExtensible()")}} auf `target` `false` zurückgibt, muss die Ergebnisliste die gleichen Werte wie das Ergebnis von {{jsxref("Reflect.ownKeys()")}} auf `target` enthalten.

## Beispiele

### Abfangen von getOwnPropertyNames

Der folgende Code fängt {{jsxref("Object.getOwnPropertyNames()")}} ab.

```js
const p = new Proxy(
  {},
  {
    ownKeys(target) {
      console.log("called");
      return ["a", "b", "c"];
    },
  },
);

console.log(Object.getOwnPropertyNames(p));
// "called"
// [ 'a', 'b', 'c' ]
```

Der folgende Code verletzt eine Invariante.

```js example-bad
const obj = {};
Object.defineProperty(obj, "a", {
  configurable: false,
  enumerable: true,
  value: 10,
});

const p = new Proxy(obj, {
  ownKeys(target) {
    return [123, 12.5, true, false, undefined, null, {}, []];
  },
});

console.log(Object.getOwnPropertyNames(p));

// TypeError: proxy [[OwnPropertyKeys]] must return an array
// with only string and symbol elements
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Reflect.ownKeys()")}}
