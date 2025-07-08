---
title: "TypeError: Reduce von leerem Array ohne Ausgangswert"
slug: Web/JavaScript/Reference/Errors/Reduce_of_empty_array_with_no_initial_value
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

Der JavaScript-Ausnahmefehler "reduce of empty array with no initial value" tritt auf, wenn eine `reduce`-Funktion verwendet wird.

## Nachricht

```plain
TypeError: Reduce of empty array with no initial value (V8-based & Firefox & Safari)
```

## Fehlertyp

{{jsxref("TypeError")}}

## Was ist schiefgelaufen?

In JavaScript gibt es mehrere `reduce`-Funktionen:

- {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}} und
- {{jsxref("TypedArray.prototype.reduce()")}}, {{jsxref("TypedArray.prototype.reduceRight()")}}.

Diese Funktionen nehmen optional einen `initialValue` an (der als erstes Argument für den ersten Aufruf des `callback` verwendet wird). Wenn jedoch kein Anfangswert bereitgestellt wird, wird das erste Element des {{jsxref("Array")}} oder {{jsxref("TypedArray")}} als Anfangswert verwendet. Dieser Fehler tritt auf, wenn ein leeres Array übergeben wird, da in diesem Fall kein Anfangswert zurückgegeben werden kann.

## Beispiele

### Ungültige Fälle

Dieses Problem tritt häufig in Kombination mit einem Filter auf ({{jsxref("Array.prototype.filter()")}}, {{jsxref("TypedArray.prototype.filter()")}}), der alle Elemente der Liste entfernt. Dadurch bleibt kein Element übrig, das als Anfangswert verwendet werden könnte.

```js example-bad
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y); // no more elements to use for the initial value.
```

Ähnlich kann das gleiche Problem auftreten, wenn ein Tippfehler in einem Selektor vorliegt oder eine unerwartete Anzahl von Elementen in einer Liste vorhanden ist:

```js example-bad
const names = document.getElementsByClassName("names");
const name_list = Array.prototype.reduce.call(
  names,
  (acc, name) => `${acc}, ${name}`,
);
```

### Gültige Fälle

Diese Probleme können auf zwei verschiedene Arten gelöst werden.

Eine Möglichkeit besteht darin, tatsächlich einen `initialValue` als neutrales Element des Operators bereitzustellen, wie 0 für die Addition, 1 für eine Multiplikation oder einen leeren String für eine Verkettung.

```js example-good
const ints = [0, -1, -2, -3, -4, -5];
ints
  .filter((x) => x > 0) // removes all elements
  .reduce((x, y) => x + y, 0); // the initial value is the neutral element of the addition
```

Eine andere Möglichkeit wäre, den leeren Fall entweder vor dem Aufruf von `reduce` zu behandeln oder im Callback, nachdem ein unerwarteter Dummy-Anfangswert hinzugefügt wurde.

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
