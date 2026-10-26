---
title: Symbol.isConcatSpreadable
short-title: isConcatSpreadable
slug: Web/JavaScript/Reference/Global_Objects/Symbol/isConcatSpreadable
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

Die statische Dateneigenschaft **`Symbol.isConcatSpreadable`** repräsentiert das [bekannte Symbol](/de/docs/Web/JavaScript/Reference/Global_Objects/Symbol#well-known_symbols) `Symbol.isConcatSpreadable`. Die Methode {{jsxref("Array.prototype.concat()")}} prüft dieses Symbol bei jedem zu verkettenden Objekt, um festzustellen, ob es als Array-ähnliches Objekt behandelt und seine Elemente in das Ergebnis eingefügt werden sollen.

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

Die Eigenschaft `[Symbol.isConcatSpreadable]` kann als eigene oder geerbte Eigenschaft definiert werden. Ihr Wert ist ein boolescher Wert. Sie kann das Verhalten von Arrays und Array-ähnlichen Objekten steuern:

- Bei Arrays werden die Elemente standardmäßig einzeln in das Ergebnis eingefügt. `Symbol.isConcatSpreadable` kann dieses Verhalten verhindern.
- Bei Array-ähnlichen Objekten werden die Elemente standardmäßig nicht einzeln eingefügt. `Symbol.isConcatSpreadable` kann dieses Verhalten erzwingen.

## Beispiele

### Arrays

Standardmäßig fügt {{jsxref("Array.prototype.concat()")}} die Elemente von Arrays einzeln in das Ergebnis ein:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', 1, 2, 3]
```

Wenn Sie `Symbol.isConcatSpreadable` auf `false` setzen, können Sie dieses Standardverhalten deaktivieren:

```js
const alpha = ["a", "b", "c"];
const numeric = [1, 2, 3];

numeric[Symbol.isConcatSpreadable] = false;
const alphaNumeric = alpha.concat(numeric);

console.log(alphaNumeric); // Result: ['a', 'b', 'c', [1, 2, 3] ]
```

### Array-ähnliche Objekte

Array-ähnliche Objekte werden standardmäßig nicht aufgelöst. Um ihre Elemente einzeln in das Ergebnis einzufügen, muss `Symbol.isConcatSpreadable` auf `true` gesetzt werden:

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
> Die Eigenschaft `length` steuert, wie viele Eigenschaften des Objekts hinzugefügt werden. Im obigen Beispiel gibt `length:2` an, dass zwei Eigenschaften hinzugefügt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Polyfill für `Symbol.isConcatSpreadable` in `core-js`](https://core-js.io/docs/features/ecmascript/symbol)
- {{jsxref("Array.prototype.concat()")}}
