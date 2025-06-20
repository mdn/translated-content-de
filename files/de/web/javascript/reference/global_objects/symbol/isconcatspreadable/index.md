---
title: Symbol.isConcatSpreadable
short-title: isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: b6cab42cf7baf925f2ef6a2c98db0778d9c2ec46
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.isConcatSpreadable`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.isConcatSpreadable`. Die Methode {{jsxref("Array.prototype.concat()")}} überprüft dieses Symbol bei jedem Objekt, das zusammengeführt wird, um festzustellen, ob es als ein array-ähnliches Objekt behandelt und auf seine Array-Elemente abgeflacht werden sollte.

{{InteractiveExample("JavaScript Demo: Symbol.isConcatSpreadable")}}

```js interactive-example
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];
let alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);
// Expected output: Array ["a", "b", "c", 1, 2, 3]

numeric[Symbol.isConcatSpreadable] = false;
alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric);
// Expected output: Array ["a", "b", "c", Array [1, 2, 3]]
```

## Wert

Das bekannte Symbol `Symbol.isConcatSpreadable`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die Eigenschaft `[Symbol.isConcatSpreadable]` kann als eigene oder geerbte Eigenschaft definiert werden, und ihr Wert ist ein boolescher Wert. Sie kann das Verhalten für Arrays und array-ähnliche Objekte steuern:

- Für Array-Objekte ist das Standardverhalten, Elemente zu verbreiten (zu flatten). `Symbol.isConcatSpreadable` kann in diesen Fällen das Flattening verhindern.
- Für array-ähnliche Objekte ist das Standardverhalten kein Verbreiten oder Flattening. `Symbol.isConcatSpreadable` kann in diesen Fällen das Flattening erzwingen.

## Beispiele

### Arrays

Standardmäßig verbreitet (flacht) {{jsxref("Array.prototype.concat()")}} Arrays in seinem Ergebnis:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
```

Wenn `Symbol.isConcatSpreadable` auf `false` gesetzt wird, können Sie das Standardverhalten deaktivieren:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### Array-ähnliche Objekte

Für array-ähnliche Objekte ist es Standard, nicht zu verbreiten. `Symbol.isConcatSpreadable` muss auf `true` gesetzt werden, um ein abgeflachtes Array zu erhalten:

```js
const x = [1, 2, 3];

const fakeArray = {
  [Symbol.isConcatSpreadable]: true,
  length: 2,
  0: "hello",
  1: "world",
};

x.concat(fakeArray); // [1, 2, 3, "hello", "world"]
```

> [!NOTE]
> Die `length`-Eigenschaft wird verwendet, um die Anzahl der Objekteigenschaften zu steuern, die hinzugefügt werden sollen. Im obigen Beispiel gibt `length:2` an, dass zwei Eigenschaften hinzugefügt werden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.isConcatSpreadable` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}
