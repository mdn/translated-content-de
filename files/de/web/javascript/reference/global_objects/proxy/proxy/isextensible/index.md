---
title: handler.isExtensible()
short-title: isExtensible()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/isExtensible
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

Die **`handler.isExtensible()`** Methode ist eine Trap für die `[[IsExtensible]]` [interne Methode eines Objekts](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods), die von Operationen wie {{jsxref("Object.isExtensible()")}} verwendet wird.

{{InteractiveExample("JavaScript Demo: handler.isExtensible()", "taller")}}

```js interactive-example
const monster = {
  canEvolve: true,
};

const handler = {
  isExtensible(target) {
    return Reflect.isExtensible(target);
  },
  preventExtensions(target) {
    target.canEvolve = false;
    return Reflect.preventExtensions(target);
  },
};

const proxy = new Proxy(monster, handler);

console.log(Object.isExtensible(proxy));
// Expected output: true

console.log(monster.canEvolve);
// Expected output: true

Object.preventExtensions(proxy);

console.log(Object.isExtensible(proxy));
// Expected output: false

console.log(monster.canEvolve);
// Expected output: false
```

## Syntax

```js-nolint
new Proxy(target, {
  isExtensible(target) {
  }
})
```

### Parameter

Der folgende Parameter wird an die Methode `isExtensible()` übergeben. `this` ist an den Handler gebunden.

- `target`
  - : Das Zielobjekt.

### Rückgabewert

Die Methode `isExtensible()` muss einen {{jsxref("Boolean")}} zurückgeben, der angibt, ob das Zielobjekt erweiterbar ist oder nicht. Andere Werte werden [zu Booleans umgeformt](/de/docs/Web/JavaScript/Reference/Global_Objects/Boolean#boolean_coercion).

## Beschreibung

### Abfangvorgänge

Diese Trap kann folgende Operationen abfangen:

- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}

Oder jede andere Operation, die die `[[IsExtensible]]` [interne Methode](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy#object_internal_methods) aufruft.

### Invarianten

Die `[[IsExtensible]]` interne Methode des Proxys wirft einen {{jsxref("TypeError")}}, wenn die Handler-Definition gegen eine der folgenden Invarianten verstößt:

- Das Ergebnis muss dasselbe sein wie bei {{jsxref("Reflect.isExtensible()")}} auf dem Zielobjekt.

## Beispiele

### Abfangen von isExtensible

Der folgende Code fängt {{jsxref("Object.isExtensible()")}} ab.

```js
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      console.log("called");
      return true;
    },
  },
);

console.log(Object.isExtensible(p));
// "called"
// true
```

Der folgende Code verletzt die Invariante.

```js example-bad
const p = new Proxy(
  {},
  {
    isExtensible(target) {
      return false;
    },
  },
);

Object.isExtensible(p); // TypeError is thrown
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Proxy")}}
- [`Proxy()` Konstruktor](/de/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Reflect.isExtensible()")}}
- {{jsxref("Reflect.preventExtensions()")}}
