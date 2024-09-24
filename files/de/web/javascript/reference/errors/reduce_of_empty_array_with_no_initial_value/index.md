---
title: "TypeError: Reduzieren eines leeren Arrays ohne Startwert"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
l10n:
  sourceCommit: 6d606174faaedaa5dee7b7ebd87602cd51e5dd7e
---

{{jsSidebar("Errors")}}

Die JavaScript-Ausnahme "reduce of empty array with no initial value" tritt auf, wenn eine Reduce-Funktion verwendet wird.

## Nachricht

```plain
TypeError: Reduce of empty array with no initial value (V8-basiert & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

In JavaScript gibt es mehrere Reduce-Funktionen:

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}
  und
- {{jsxref("TypedArray.prototype.reduce()")}},
  {{jsxref("TypedArray.prototype.reduceRight()")}}).

Diese Funktionen nehmen optional einen `initialValue` (der als erstes Argument beim ersten Aufruf des `callback` verwendet wird). Wenn jedoch kein Startwert angegeben wird, verwendet sie das erste Element des {{jsxref("Array")}} oder {{jsxref("TypedArray")}} als Startwert. Dieser Fehler tritt auf, wenn ein leeres Array bereitgestellt wird, da in diesem Fall kein Startwert zurückgegeben werden kann.

## Beispiele

### Ungültige Fälle

Dieses Problem tritt häufig in Kombination mit einem Filter auf
({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}})
welcher alle Elemente der Liste entfernt. Dadurch bleibt kein Element übrig, das als Startwert verwendet werden kann.

```js example-bad
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // entfernt alle Elemente
  .reduce((x, y) => x + y); // keine weiteren Elemente für den Startwert.
```

Ähnlich kann dasselbe Problem auftreten, wenn es einen Tippfehler in einem Selektor gibt oder eine unerwartete Anzahl von Elementen in einer Liste vorhanden ist:

```js example-bad
const names = document.getElementsByClassName("names");
const name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => acc + ", " + name,
);
```

### Gültige Fälle

Diese Probleme können auf zwei verschiedene Weisen gelöst werden.

Eine Möglichkeit besteht darin, tatsächlich einen `initialValue` als neutrales Element des Operators anzugeben, wie 0 für die Addition, 1 für eine Multiplikation oder einen leeren String für eine Verkettung.

```js example-good
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // entfernt alle Elemente
  .reduce((x, y) => x + y, 0); // der Startwert ist das neutrale Element der Addition
```

Eine andere Möglichkeit wäre, den leeren Fall zu behandeln, entweder vor dem Aufruf von `reduce` oder im Callback, nachdem ein unerwarteter, vorläufiger Startwert hinzugefügt wurde.

```js example-good
const names = document.getElementsByClassName("names");

let nameList1 = "";
if (names.length >= 1) {
  nameList1 = Array.prototype.reduce.call(
    names,
    (acc, name) => `${acc}, ${name}`,
  );
}
// nameList1 === "" wenn names leer ist.

const nameList2 = Array.prototype.reduce.call(
  names,
  (acc, name) => {
    if (acc === "")
      // Startwert
      return name;
    return `${acc}, ${name}`;
  },
  "",
);
// nameList2 === "" wenn names leer ist.
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
