---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die statische Dateneigenschaft **`Symbol.isConcatSpreadable`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.isConcatSpreadable`. Die Methode {{jsxref("Array.prototype.concat()")}} prüft dieses Symbol an jedem Objekt, das verkettet werden soll, um festzustellen, ob es wie ein array-ähnliches Objekt behandelt und zu seinen Array-Elementen abgeflacht werden sollte.

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## Wert

Das bekannte Symbol `Symbol.isConcatSpreadable`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die Eigenschaft `[Symbol.isConcatSpreadable]` kann als eigene oder geerbte Eigenschaft definiert werden und ihr Wert ist ein boolescher Wert. Sie kann das Verhalten für Arrays und array-ähnliche Objekte steuern:

- Für Array-Objekte ist das Standardverhalten, die Elemente zu spreaden (abzuflachen). `Symbol.isConcatSpreadable` kann das Abflachen in diesen Fällen vermeiden.
- Für array-ähnliche Objekte ist das Standardverhalten, nicht zu spreaden oder abzuflachen. `Symbol.isConcatSpreadable` kann das Abflachen in diesen Fällen erzwingen.

## Beispiele

### Arrays

Standardmäßig spreadet (flacht) {{jsxref("Array.prototype.concat()")}} Arrays in seinem Ergebnis ab:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
```

Wenn `Symbol.isConcatSpreadable` auf `false` gesetzt wird, kann das Standardverhalten deaktiviert werden:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### Array-ähnliche Objekte

Für array-ähnliche Objekte ist es standardmäßig nicht zu spreaden. `Symbol.isConcatSpreadable` muss auf `true` gesetzt werden, um ein abgeflachtes Array zu erhalten:

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
