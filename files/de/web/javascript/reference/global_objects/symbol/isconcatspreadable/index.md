---
title: Symbol.isConcatSpreadable
short-title: isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Die statische Dateneigenschaft **`Symbol.isConcatSpreadable`** repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.isConcatSpreadable`. Die Methode {{jsxref("Array.prototype.concat()")}} prüft dieses Symbol bei jedem zu konkatinierenden Objekt, um festzustellen, ob es wie ein arrayähnliches Objekt behandelt und auf seine Array-Elemente abgeflacht werden soll.

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

Das wohlbekannte Symbol `Symbol.isConcatSpreadable`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die Eigenschaft `[Symbol.isConcatSpreadable]` kann als eigene oder geerbte Eigenschaft definiert werden, und ihr Wert ist ein Boolean. Sie kann das Verhalten für Arrays und arrayähnliche Objekte steuern:

- Für Array-Objekte ist das Standardverhalten, die Elemente zu spreaden (abzuflachen). `Symbol.isConcatSpreadable` kann das Abflachen in diesen Fällen vermeiden.
- Für arrayähnliche Objekte ist das Standardverhalten, nicht zu spreaden oder abzuflachen. `Symbol.isConcatSpreadable` kann in diesen Fällen das Abflachen erzwingen.

## Beispiele

### Arrays

Standardmäßig spreadet {{jsxref("Array.prototype.concat()")}} Arrays in sein Ergebnis:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
```

Indem `Symbol.isConcatSpreadable` auf `false` gesetzt wird, können Sie das Standardverhalten deaktivieren:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### Array-ähnliche Objekte

Für arrayähnliche Objekte ist das Standardverhalten, nicht zu spreaden. `Symbol.isConcatSpreadable` muss auf `true` gesetzt werden, um ein abgeflachtes Array zu erhalten:

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
> Die Eigenschaft `length` wird verwendet, um die Anzahl der hinzuzufügenden Objekteigenschaften zu steuern. Im obigen Beispiel gibt `length:2` an, dass zwei Eigenschaften hinzugefügt werden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.isConcatSpreadable` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}
