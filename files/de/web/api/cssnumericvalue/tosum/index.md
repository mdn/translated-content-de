---
title: "CSSNumericValue: Methode toSum()"
short-title: toSum()
slug: Web/API/CSSNumericValue/toSum
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`toSum()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) wandelt den `CSSNumericValue` in ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) um, dessen Terme [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)-Objekte in den angegebenen Einheiten sind.

## Syntax

```js-nolint
toSum()
toSum(unit1)
toSum(unit1, unit2)
toSum(unit1, unit2, /* …, */ unitN)
```

### Parameter

- `unit1`, …, `unitN` {{optional_inline}}
  - : Zeichenfolgen, die die Einheiten für die Terme des Ergebnisses angeben, etwa `"px"` oder `"percent"`.

### Rückgabewert

Ein [`CSSMathSum`](/de/docs/Web/API/CSSMathSum), dessen Terme ausschließlich `CSSUnitValue`-Objekte sind.

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn einer der Werte `unit1`, …, `unitN` keine gültige CSS-Einheit ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - sich der Wert nicht als Summe einzelner Werte darstellen lässt. Beispielsweise kann ein Term, der zwei Einheiten multipliziert, etwa `CSS.px(1).mul(CSS.s(1))`, nicht als `CSSUnitValue` dargestellt werden.
    - Einheiten übergeben werden und der Wert einen Term enthält, der in keine davon umgewandelt werden kann, etwa einen `em`-Term, wenn nur `"px"` übergeben wird.
    - die übergebenen Einheiten nicht addiert werden können, etwa `"px"` und `"s"`.

## Beschreibung

Die Methode fasst zunächst die Terme des `CSSNumericValue` zusammen, die sich in dieselbe Einheit umwandeln lassen, wie es auch [`to()`](/de/docs/Web/API/CSSNumericValue/to) tut.
Beispielsweise werden `1px` und `1in` zu `97px` zusammengefasst.

Wenn Einheiten übergeben werden, enthält das Ergebnis für jede Einheit einen Term, und zwar in der Reihenfolge, in der die Einheiten übergeben wurden.
Jeder Term des Werts wird in die Einheit umgewandelt, mit der er kompatibel ist.
Wenn sich kein Term in eine der Einheiten umwandeln lässt, enthält das Ergebnis für diese Einheit einen Term mit dem Wert `0`.
Beispielsweise gibt `CSS.px(1).toSum("px", "percent")` den Wert `calc(1px + 0%)` zurück.

Wenn keine Einheiten übergeben werden, enthält das Ergebnis für jede nach dem Zusammenfassen verbleibende Einheit einen Term.
Die Terme werden alphabetisch nach Einheitenname sortiert; der Name für `%` ist dabei `"percent"`.
Beispielsweise ergibt `calc(10px + 2em + 5px)` den Wert `calc(2em + 15px)`.

## Beispiele

### Eine Summe in bestimmte Einheiten umwandeln

```js
const value = CSS.px(100).add(CSS.percent(10)).add(CSS.in(1));
console.log(value.toString()); // "calc(100px + 10% + 1in)"
console.log(value.toSum("px", "percent").toString()); // "calc(196px + 10%)"

console.log(CSS.px(1).toSum("px", "percent").toString()); // "calc(1px + 0%)"
```

### Eine Summe vereinfachen

Wenn keine Einheiten übergeben werden, werden Terme mit derselben Einheit zusammengefasst und nach Einheitenname sortiert:

```js
const value = CSS.px(10).add(CSS.em(2), CSS.px(5));
console.log(value.toString()); // "calc(10px + 2em + 5px)"
console.log(value.toSum().toString()); // "calc(2em + 15px)"
```

### Werte, die nicht umgewandelt werden können

Eine Summe mit einem `em`-Term kann nicht ausschließlich in `px` umgewandelt werden:

```js
try {
  CSS.px(1).add(CSS.em(1)).toSum("px");
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.to()`](/de/docs/Web/API/CSSNumericValue/to)
- [`CSSMathSum`](/de/docs/Web/API/CSSMathSum)
- [Verwendung des CSS Typed OM](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
