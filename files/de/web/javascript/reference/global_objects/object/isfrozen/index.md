---
title: Object.isFrozen()
slug: Web/JavaScript/Reference/Global_Objects/Object/isFrozen
l10n:
  sourceCommit: fb85334ffa4a2c88d209b1074909bee0e0abd57a
---

{{JSRef}}

Die statische Methode **`Object.isFrozen()`** bestimmt, ob ein Objekt
{{jsxref("Object/freeze", "eingefroren", "", 1)}} ist.

{{EmbedInteractiveExample("pages/js/object-isfrozen.html")}}

## Syntax

```js-nolint
Object.isFrozen(obj)
```

### Parameter

- `obj`
  - : Das zu überprüfende Objekt.

### Rückgabewert

Ein {{jsxref("Boolean")}}, das angibt, ob das angegebene Objekt eingefroren ist oder nicht.

## Beschreibung

Ein Objekt ist genau dann eingefroren, wenn es nicht [erweiterbar](/de/docs/Web/JavaScript/Reference/Global_Objects/Object/isExtensible) ist, alle seine Eigenschaften nicht konfigurierbar sind und alle seine Dateneigenschaften (also Eigenschaften, die keine Zugriffseigenschaften mit Getter- oder Setter-Komponenten sind) nicht beschreibbar sind.

## Beispiele

### Verwendung von Object.isFrozen

```js
// Ein neues Objekt ist erweiterbar, daher ist es nicht eingefroren.
Object.isFrozen({}); // false

// Ein leeres Objekt, das nicht erweiterbar ist,
// ist vacuously eingefroren.
const vacuouslyFrozen = Object.preventExtensions({});
Object.isFrozen(vacuouslyFrozen); // true

// Ein neues Objekt mit einer Eigenschaft ist ebenfalls erweiterbar,
// ergo nicht eingefroren.
const oneProp = { p: 42 };
Object.isFrozen(oneProp); // false

// Das Verhindern von Erweiterungen des Objekts macht es noch nicht
// eingefroren, da die Eigenschaft immer noch
// konfigurierbar (und beschreibbar) ist.
Object.preventExtensions(oneProp);
Object.isFrozen(oneProp); // false

// Das Löschen dieser Eigenschaft macht das Objekt vacuously eingefroren.
delete oneProp.p;
Object.isFrozen(oneProp); // true

// Ein nicht erweiterbares Objekt mit einer nicht beschreibbaren,
// aber noch konfigurierbaren Eigenschaft ist nicht eingefroren.
const nonWritable = { e: "plep" };
Object.preventExtensions(nonWritable);
Object.defineProperty(nonWritable, "e", {
  writable: false,
}); // nicht beschreibbar machen
Object.isFrozen(nonWritable); // false

// Diese Eigenschaft nicht konfigurierbar machen,
// führt dann dazu, dass das Objekt eingefroren ist.
Object.defineProperty(nonWritable, "e", {
  configurable: false,
}); // nicht konfigurierbar machen
Object.isFrozen(nonWritable); // true

// Ein nicht erweiterbares Objekt mit einer nicht konfigurierbaren,
// aber noch beschreibbaren Eigenschaft ist ebenfalls nicht eingefroren.
const nonConfigurable = { release: "the kraken!" };
Object.preventExtensions(nonConfigurable);
Object.defineProperty(nonConfigurable, "release", {
  configurable: false,
});
Object.isFrozen(nonConfigurable); // false

// Diese Eigenschaft nicht beschreibbar machen,
// führt dann dazu, dass das Objekt eingefroren ist.
Object.defineProperty(nonConfigurable, "release", {
  writable: false,
});
Object.isFrozen(nonConfigurable); // true

// Ein nicht erweiterbares Objekt mit einer konfigurierbaren
// Zugriffseigenschaft ist nicht eingefroren.
const accessor = {
  get food() {
    return "yum";
  },
};
Object.preventExtensions(accessor);
Object.isFrozen(accessor); // false

// Wenn wir diese Eigenschaft nicht konfigurierbar machen, wird es eingefroren.
Object.defineProperty(accessor, "food", {
  configurable: false,
});
Object.isFrozen(accessor); // true

// Aber der einfachste Weg, ein Objekt einzufrieren,
// ist, wenn Object.freeze darauf aufgerufen wurde.
const frozen = { 1: 81 };
Object.isFrozen(frozen); // false
Object.freeze(frozen);
Object.isFrozen(frozen); // true

// Per Definition ist ein eingefrorenes Objekt nicht erweiterbar.
Object.isExtensible(frozen); // false

// Ebenfalls per Definition ist ein eingefrorenes Objekt versiegelt.
Object.isSealed(frozen); // true
```

### Argument, das kein Objekt ist

In ES5, wenn das Argument dieser Methode kein Objekt (ein Primärwert) ist, führt es zu einem {{jsxref("TypeError")}}. In ES2015 gibt es keinen Fehler und es wird `true` zurückgegeben, wenn ein Argument, das kein Objekt ist, übergeben wird, da Primärwerte per Definition unveränderlich sind.

```js
Object.isFrozen(1);
// TypeError: 1 is not an object (ES5 code)

Object.isFrozen(1);
// true                          (ES2015 code)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.seal()")}}
- {{jsxref("Object.isSealed()")}}
