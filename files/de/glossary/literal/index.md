---
title: Literale
slug: Glossary/Literal
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Literale** repräsentieren Werte in JavaScript. Es handelt sich um feste Werte—keine Variablen—die Sie _buchstäblich_ in Ihrem Skript angeben.

- [Array-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [Boolean-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [Gleitkomma-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
- [Numerische Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [Objekt-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [RegExp-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [String-Literale](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## Beispiele

### String-Literale

Ein String-Literal besteht aus null oder mehr Zeichen, die in doppelte (`"`) oder einfache Anführungszeichen (`'`) eingeschlossen sind. Ein String muss durch Anführungszeichen desselben Typs begrenzt werden (das heißt, entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literale:

```js
"foo";
"bar";
"1234";
"one line \n new line";
"Joyo's cat";
```

### Objekt-Literale

Ein Objekt-Literal ist eine Liste von null oder mehr Paaren von Eigenschaftsnamen und zugehörigen Werten eines Objekts, eingeschlossen in geschweifte Klammern (`{}`).

Das folgende ist ein Beispiel für ein Objekt-Literal. Das erste Element des `car`-Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String, `"Toyota"`, zu; das zweite Element, die `getCar`-Eigenschaft, wird sofort dem Ergebnis der Ausführung der Funktion `carTypes('Honda')` zugewiesen; das dritte Element, die `special`-Eigenschaft, verwendet eine bestehende Variable (`sales`).

```js
const sales = "BMW";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = {
  myCar: "Toyota",
  getCar: carTypes("Honda"),
  special: sales,
};

console.log(car.myCar); // Toyota
console.log(car.getCar); // Honda
console.log(car.special); // BMW
```

## Siehe auch

- [Literal](<https://en.wikipedia.org/wiki/Literal_(computer_programming)>) auf Wikipedia
