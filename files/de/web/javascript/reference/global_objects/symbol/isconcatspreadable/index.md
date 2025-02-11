---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.isConcatSpreadable`** repräsentiert das [well-known Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.isConcatSpreadable`. Die Methode {{jsxref("Array.prototype.concat()")}} ruft dieses Symbol für jedes zu konkatenierende Objekt ab, um zu bestimmen, ob es als array-ähnliches Objekt behandelt und in seine Array-Elemente aufgelöst (geflattet) werden soll.

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

Das well-known Symbol `Symbol.isConcatSpreadable`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die Eigenschaft `[Symbol.isConcatSpreadable]` kann als eigene oder geerbte Eigenschaft definiert werden, und ihr Wert ist ein Boolean. Sie kann das Verhalten für Arrays und array-ähnliche Objekte steuern:

- Für Array-Objekte ist das Standardverhalten, die Elemente zu spreaden (flachen). `Symbol.isConcatSpreadable` kann das Flachen in diesen Fällen verhindern.
- Für array-ähnliche Objekte ist das Standardverhalten, nicht zu spreaden oder zu flatten. `Symbol.isConcatSpreadable` kann das Flachen in diesen Fällen erzwingen.

## Beispiele

### Arrays

Standardmäßig spreadet (flacht) {{jsxref("Array.prototype.concat()")}} Arrays in seinem Ergebnis:

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

Für array-ähnliche Objekte ist das Standardverhalten, nicht zu spreaden. `Symbol.isConcatSpreadable` muss auf `true` gesetzt werden, um ein geflattetes Array zu erhalten:

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
> Die Eigenschaft `length` wird verwendet, um die Anzahl der hinzuzufügenden Objekteigenschaften zu steuern. Im obigen Beispiel gibt `length:2` an, dass zwei Eigenschaften hinzugefügt werden sollen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.isConcatSpreadable` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}
