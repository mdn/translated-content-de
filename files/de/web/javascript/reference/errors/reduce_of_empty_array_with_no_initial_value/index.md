---
title: "TypeError: Reduce of empty array with no initial value"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "reduce of empty array with no initial value" tritt auf, wenn eine `reduce`-Funktion verwendet wird.

## Nachricht

```plain
TypeError: Reduce of empty array with no initial value (V8-based & Firefox & Safari)
```

## Fehlerart

{{jsxref("TypeError")}}

## Was ist schief gelaufen?

In JavaScript gibt es mehrere `reduce`-Funktionen:

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} und
- {{jsxref("TypedArray.prototype.reduce()")}}, {{jsxref("TypedArray.prototype.reduceRight()")}}).

Diese Funktionen nehmen optional einen `initialValue` an (der als erstes Argument beim ersten Aufruf des `callback` verwendet wird). Wird jedoch kein Anfangswert angegeben, wird das erste Element des {{jsxref("Array")}} oder {{jsxref("TypedArray")}} als Anfangswert verwendet. Dieser Fehler tritt auf, wenn ein leeres Array übergeben wird, da in diesem Fall kein Anfangswert zurückgegeben werden kann.

## Beispiele

### Ungültige Fälle

Dieses Problem tritt häufig in Kombination mit einem Filter
({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}})
auf, der alle Elemente der Liste entfernt. Dadurch bleibt kein Element für den Anfangswert übrig.

```js example-bad
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y); // no more elements to use for the initial value.
```

Ähnlich kann dasselbe Problem auftreten, wenn ein Tippfehler in einem Selektor vorliegt oder eine unerwartete Anzahl von Elementen in einer Liste vorhanden ist:

```js example-bad
const names = document.getElementsByClassName("names");
const name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => `${acc}, ${name}`,
);
```

### Gültige Fälle

Diese Probleme können auf zwei verschiedene Arten gelöst werden.

Eine Möglichkeit besteht darin, tatsächlich einen `initialValue` als neutrales Element des Operators anzugeben, wie z.B. 0 für die Addition, 1 für eine Multiplikation oder einen leeren String für eine Verkettung.

```js example-good
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y, 0); // the initial value is the neutral element of the addition
```

Eine andere Möglichkeit besteht darin, den leeren Fall entweder vor dem Aufruf von `reduce` oder im Callback nach dem Hinzufügen eines unerwarteten Platzhalter-Initialwerts zu behandeln.

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
