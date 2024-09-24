---
title: Symbol.isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 8421c0cd94fa5aa237c833ac6d24885edbc7d721
---

{{JSRef}}

Die **`Symbol.isConcatSpreadable`** statische Dateneigenschaft repräsentiert das [wohlbekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.isConcatSpreadable`. Die Methode {{jsxref("Array.prototype.concat()")}} überprüft dieses Symbol auf jedem Objekt, das zusammengefügt wird, um festzustellen, ob es als array-ähnliches Objekt behandelt und auf seine Array-Elemente abgeflacht werden soll.

{{EmbedInteractiveExample("pages/js/symbol-isconcatspreadable.html")}}

## Wert

Das wohlbekannte Symbol `Symbol.isConcatSpreadable`.

{{js_property_attributes(0, 0, 0)}}

## Beschreibung

Die Eigenschaft `[Symbol.isConcatSpreadable]` kann als eigene oder vererbte Eigenschaft definiert werden und ihr Wert ist ein boolescher Wert. Sie kann das Verhalten für Arrays und array-ähnliche Objekte steuern:

- Für Array-Objekte ist das Standardverhalten das Aufspalten (Abflachen) von Elementen. `Symbol.isConcatSpreadable` kann das Abflachen in diesen Fällen vermeiden.
- Für array-ähnliche Objekte ist das Standardverhalten keine Verbreitung oder Abflachung. `Symbol.isConcatSpreadable` kann in diesen Fällen eine Abflachung erzwingen.

## Beispiele

### Arrays

Standardmäßig verteilt (abflacht) {{jsxref("Array.prototype.concat()")}} Arrays in seinem Ergebnis:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Ergebnis: ['a', 'b', 'c', 1, 2, 3]
```

Wenn `Symbol.isConcatSpreadable` auf `false` gesetzt wird, können Sie das Standardverhalten deaktivieren:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Ergebnis: ['a', 'b', 'c', [1, 2, 3] ]
```

### Array-ähnliche Objekte

Für array-ähnliche Objekte besteht der Standard darin, nicht zu verteilen. `Symbol.isConcatSpreadable` muss auf `true` gesetzt werden, um ein abgeflachtes Array zu erhalten:

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
> Die Eigenschaft `length` wird verwendet, um die Anzahl der hinzuzufügenden Objekteigenschaften zu steuern. Im obigen Beispiel zeigt `length:2` an, dass zwei Eigenschaften hinzugefügt werden müssen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill von `Symbol.isConcatSpreadable` in `core-js`](https://github.com/zloirock/core-js#ecmascript-symbol)
- {{jsxref("Array.prototype.concat()")}}
