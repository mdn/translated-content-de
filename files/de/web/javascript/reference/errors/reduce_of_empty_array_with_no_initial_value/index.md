---
title: "TypeError: Reduce von leerem Array ohne Anfangswert"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

Der JavaScript-Fehler "reduce von leerem Array ohne Anfangswert" tritt auf, wenn eine `reduce`-Funktion verwendet wird.

## Meldung

```plain
TypeError: Reduce of empty array with no initial value (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

In JavaScript gibt es mehrere `reduce`-Funktionen:

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}
  und
- {{jsxref("TypedArray.prototype.reduce()")}},
  {{jsxref("TypedArray.prototype.reduceRight()")}}).

Diese Funktionen nehmen optional einen `initialValue` an (der als
erstes Argument beim ersten Aufruf des `callback` verwendet wird). Wenn jedoch kein Anfangswert angegeben wird, wird das erste Element des {{jsxref("Array")}} oder
{{jsxref("TypedArray")}} als Anfangswert verwendet. Dieser Fehler tritt auf, wenn ein leeres Array übergeben wird, da in diesem Fall kein Anfangswert zurückgegeben werden kann.

## Beispiele

### Ungültige Fälle

Dieses Problem tritt häufig auf, wenn es mit einem Filter kombiniert wird
({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}})
der alle Elemente der Liste entfernt. Somit bleibt kein Element übrig, das als Anfangswert verwendet werden könnte.

```js example-bad
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y); // no more elements to use for the initial value.
```

Ähnlicherweise kann dasselbe Problem auftreten, wenn ein Tippfehler in einem Selektor vorliegt oder eine unerwartete Anzahl von Elementen in einer Liste vorhanden ist:

```js example-bad
const names = document.getElementsByClassName("names");
const nameList = Array.prototype.reduce.call(
  names,
  (acc, name) => `${acc}, ${name}`,
);
```

### Gültige Fälle

Diese Probleme können auf zwei verschiedene Arten gelöst werden.

Eine Möglichkeit besteht darin, tatsächlich einen `initialValue` als neutrales Element des
Operators anzugeben, wie 0 für die Addition, 1 für eine Multiplikation oder einen leeren String für
eine Verkettung.

```js example-good
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y, 0); // the initial value is the neutral element of the addition
```

Eine andere Möglichkeit wäre, den Leerfall zu behandeln, entweder vor dem Aufruf von
`reduce`, oder im Callback nach dem Hinzufügen eines unerwarteten Dummys als Anfangswert.

```js example-good
const names = document.getElementsByClassName("names");

let nameList1 = "";
if (names.length >= 1) {
  nameList1 = Array.prototype.reduce.call(
    names,
    (acc, name) => `${acc}, ${name}`,
  );
}
// nameList1 === "" when names is empty.

const nameList2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc === "")
      // initial value
      return name;
    return `${acc}, ${name}`;
  },
  "",
);
// nameList2 === "" when names is empty.
```

## Siehe auch

- {{jsxref("Array.prototype.reduce()")}}
- {{jsxref("Array.prototype.reduceRight()")}}
- {{jsxref("TypedArray.prototype.reduce()")}}
- {{jsxref("TypedArray.prototype.reduceRight()")}}
- {{jsxref("Array")}}
- {{jsxref("TypedArray")}}
- {{jsxref("Array.prototype.filter()")}}
- {{jsxref("TypedArray.prototype.filter()")}}
