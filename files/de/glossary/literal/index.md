---
title: Literal
slug: Glossary/Literal
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**Literalwerte** repräsentieren Werte in JavaScript. Es handelt sich hierbei um feste Werte—keine Variablen—die Sie _buchstäblich_ in Ihrem Skript angeben.

- [Array-Literalwerte](/de/docs/Web/JavaScript/Guide/Grammar_and_types#array_literals)
- [Boolean-Literalwerte](/de/docs/Web/JavaScript/Guide/Grammar_and_types#boolean_literals)
- [Gleitkomma-Literalwerte](/de/docs/Web/JavaScript/Guide/Grammar_and_types#floating-point_literals)
- [Numerische Literalwerte](/de/docs/Web/JavaScript/Guide/Grammar_and_types#numeric_literals)
- [Objekt-Literalwerte](/de/docs/Web/JavaScript/Guide/Grammar_and_types#object_literals)
- [RegExp-Literalwerte](/de/docs/Web/JavaScript/Guide/Grammar_and_types#regexp_literals)
- [String-Literalwerte](/de/docs/Web/JavaScript/Guide/Grammar_and_types#string_literals)

## Beispiele

### String-Literalwerte

Ein String-Literalwert besteht aus null oder mehr Zeichen, die in doppelte (`"`) oder einfache Anführungszeichen (`'`) eingeschlossen sind. Ein String muss durch Anführungszeichen desselben Typs abgegrenzt werden (d.h., entweder beide einfache Anführungszeichen oder beide doppelte Anführungszeichen).

Die folgenden sind Beispiele für String-Literalwerte:

```js
"foo";
"bar";
"1234";
"one line \n new line";
"Joyo's cat";
```

### Objekt-Literalwerte

Ein Objekt-Literalwert ist eine Liste von null oder mehr Paaren aus Eigenschaftsnamen und zugehörigen Werten eines Objekts, die in geschweifte Klammern (`{}`) eingeschlossen sind.

Das folgende ist ein Beispiel für einen Objekt-Literalwert. Das erste Element des `car` Objekts definiert eine Eigenschaft, `myCar`, und weist ihr einen neuen String zu, "`Toyota`"; das zweite Element, die `getCar` Eigenschaft, wird sofort mit dem Ergebnis des Aufrufs der Funktion `carTypes('Honda')` zugewiesen; das dritte Element, die `special` Eigenschaft, nutzt eine bestehende Variable (`sales`).

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
