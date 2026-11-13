---
title: "CSSNumericValue: max()-Methode"
short-title: max()
slug: Web/API/CSSNumericValue/max
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die Methode **`max()`** der Schnittstelle [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue) gibt den größten Wert aus dem `CSSNumericValue` und den übergebenen Werten zurück.

## Syntax

```js-nolint
max()
max(number1)
max(number1, number2)
max(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Eine Zahl wird in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt. Daher wird `2` wie [`CSS.number(2)`](/de/docs/Web/API/CSS/factory_functions_static) behandelt.

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn der `CSSNumericValue` und alle übergebenen Werte dieselbe Einheit haben.
Andernfalls ein [`CSSMathMax`](/de/docs/Web/API/CSSMathMax).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Werte inkompatible Typen haben, beispielsweise eine Länge und eine Zeit.

## Beschreibung

Wenn der `CSSNumericValue` und alle übergebenen Werte genau dieselbe Einheit haben, vergleicht die Methode sie und gibt den größten Wert als einzelnen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück.
Beispielsweise gibt `CSS.px(10).max(CSS.px(25))` den Wert `25px` zurück.

Andernfalls gibt die Methode einen [`CSSMathMax`](/de/docs/Web/API/CSSMathMax) zurück, der eine CSS-Funktion {{cssxref("max()")}} darstellt und jeden Wert als separaten Term beibehält.
Der Browser ermittelt erst bei der Verwendung des Werts, welcher Term der größte ist.
Ob beispielsweise `100px` oder `50%` größer ist, hängt von der Größe des umgebenden Elements ab.
Einheiten werden nicht umgerechnet. Deshalb ergibt auch der Vergleich einer Länge in `cm` mit einer Länge in `in` einen `CSSMathMax`, obwohl beide feste Längen sind.

Wenn der `CSSNumericValue` bereits ein `CSSMathMax` ist, werden die übergebenen Werte als zusätzliche Terme hinzugefügt. Der vorhandene `CSSMathMax` wird also nicht zu einem Term innerhalb eines neuen `CSSMathMax`.
Die Terme des Ergebnisses sind in folgender Reihenfolge angeordnet: zuerst der `CSSNumericValue` (oder, falls er bereits ein `CSSMathMax` ist, dessen Terme), dann die übergebenen Werte in der Reihenfolge ihrer Übergabe.

Die Werte müssen vergleichbare Typen haben, beispielsweise zwei Längen oder eine Länge und einen Prozentwert.
Der Vergleich einer Länge mit einer Zeit oder einer einfachen Zahl löst einen `TypeError` aus.

## Beispiele

### Den größten Wert bei gleicher Einheit ermitteln

Wenn alle Werte dieselbe Einheit haben, ist das Ergebnis ein einzelner `CSSUnitValue`:

```js
const largest = CSS.px(10).max(CSS.px(25), CSS.px(5));
console.log(largest.toString()); // "25px"
```

### Werte mit unterschiedlichen Einheiten vergleichen

Wenn sich die Einheiten unterscheiden, ist das Ergebnis ein `CSSMathMax` – selbst wenn die Werte in dieselbe Einheit umgerechnet werden könnten:

```js
const atLeast = CSS.px(100).max(CSS.percent(50));
console.log(atLeast.toString()); // "max(100px, 50%)"

const lengths = CSS.cm(1).max(CSS.in(0.393701));
console.log(lengths.toString()); // "max(1cm, 0.393701in)"
```

### Nicht vergleichbare Werte vergleichen

Der Vergleich einer Länge mit einer Zeit löst einen `TypeError` aus:

```js
try {
  CSS.px(1).max(CSS.s(1));
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.min()`](/de/docs/Web/API/CSSNumericValue/min)
- [`CSSMathMax`](/de/docs/Web/API/CSSMathMax)
- CSS-Funktion {{cssxref("max()")}}
- [CSS Typed OM verwenden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
