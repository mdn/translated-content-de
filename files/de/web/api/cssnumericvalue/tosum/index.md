---
title: "CSSNumericValue: toSum() Methode"
short-title: toSum()
slug: Web/API/CSSNumericValue/toSum
l10n:
  sourceCommit: 793b293c6c43b480bf060c2f98ca9240712f461e
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`toSum()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle konvertiert den Wert des Objekts in eine [`CSSMathSum`](/de/docs/Web/API/CSSMathSum) von [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue)s, indem nur die angegebenen Einheiten verwendet werden, wenn möglich. Wenn sie ohne Einheiten aufgerufen wird, vereinfacht sie den Wert stattdessen in eine minimale Summe von `CSSUnitValue`s.

## Syntax

```js-nolint
toSum()
toSum(unit1)
toSum(unit1, unit2)
toSum(unit1, unit2, /* …, */ unitN)
```

### Parameter

- `unit1`, …, `unitN` {{optional_inline}}
  - : Die Einheiten, in die konvertiert werden soll.

### Rückgabewert

Eine [`CSSMathSum`](/de/docs/Web/API/CSSMathSum).

### Ausnahmen

- `SyntaxError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine der `unit1`, …, `unitN` keine gültige Einheit ist.
- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn:
    - Der Wert nicht als Summe von `CSSUnitValue`s ausgedrückt werden kann — zum Beispiel, weil einer seiner Terme eine zusammengesetzte Einheit (wie `px * s`) hat, die nicht durch einen einzelnen `CSSUnitValue` dargestellt werden kann.
    - Eine oder mehrere Einheiten an die Methode übergeben wurden und der Wert einen Term enthält, dessen Einheit mit keiner von ihnen kompatibel ist.

## Beispiele

### Grundlegende Verwendung

```js
let v = CSS.px("23").add(CSS.percent("4")).add(CSS.cm("3")).add(CSS.in("9"));
v.toString(); // => "calc(23px + 4% + 3cm + 9in)"
v.toSum("px", "percent").toString(); // => "calc(1000.39px + 4%)"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
