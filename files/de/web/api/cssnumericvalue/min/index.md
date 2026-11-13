---
title: "CSSNumericValue: min()-Methode"
short-title: min()
slug: Web/API/CSSNumericValue/min
l10n:
  sourceCommit: 3e9a4ed4d90d0b1793999940290293df7feebba2
---

{{APIRef("CSS Typed Object Model API")}} {{AvailableInWorkers}}

Die **`min()`**-Methode der [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue)-Schnittstelle gibt den kleinsten Wert aus dem `CSSNumericValue` und den übergebenen Werten zurück.

## Syntax

```js-nolint
min()
min(number1)
min(number1, number2)
min(number1, number2, /* …, */ numberN)
```

### Parameter

- `number1`, …, `numberN` {{optional_inline}}
  - : Entweder eine Zahl oder ein [`CSSNumericValue`](/de/docs/Web/API/CSSNumericValue).
    Eine Zahl wird in einen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) mit der Einheit `"number"` umgewandelt. Daher wird `2` wie [`CSS.number(2)`](/de/docs/Web/API/CSS/factory_functions_static) behandelt.

### Rückgabewert

Ein [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue), wenn das `CSSNumericValue` und alle übergebenen Werte dieselbe Einheit haben.
Andernfalls ein [`CSSMathMin`](/de/docs/Web/API/CSSMathMin).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die Werte inkompatible Typen haben, beispielsweise eine Länge und eine Zeit.

## Beschreibung

Wenn das `CSSNumericValue` und alle übergebenen Werte genau dieselbe Einheit haben, vergleicht die Methode sie und gibt den kleinsten Wert als einzelnen [`CSSUnitValue`](/de/docs/Web/API/CSSUnitValue) zurück.
Beispielsweise gibt `CSS.px(10).min(CSS.px(25))` den Wert `10px` zurück.

Andernfalls gibt die Methode einen [`CSSMathMin`](/de/docs/Web/API/CSSMathMin) zurück, der eine CSS-{{cssxref("min()")}}-Funktion darstellt und jeden Wert als eigenen Term beibehält.
Der Browser bestimmt erst bei der Verwendung des Werts, welcher Term der kleinste ist.
Welcher Wert beispielsweise kleiner ist, `100px` oder `50%`, hängt von der Größe des umgebenden Elements ab.
Einheiten werden nicht umgerechnet. Deshalb ergibt auch der Vergleich einer Länge in `cm` mit einer Länge in `in` einen `CSSMathMin`, obwohl beides absolute Längeneinheiten sind.

Wenn das `CSSNumericValue` bereits ein `CSSMathMin` ist, werden die übergebenen Werte als zusätzliche Terme hinzugefügt, statt den vorhandenen `CSSMathMin` als einen Term in einen neuen aufzunehmen.
Die Terme des Ergebnisses stehen in folgender Reihenfolge: zuerst das `CSSNumericValue` (oder, wenn es bereits ein `CSSMathMin` ist, dessen Terme), danach die übergebenen Werte in der Reihenfolge ihrer Übergabe.

Die Werte müssen vergleichbare Typen haben, beispielsweise zwei Längen oder eine Länge und einen Prozentwert.
Der Vergleich einer Länge mit einer Zeit oder einer einfachen Zahl löst einen `TypeError` aus.

## Beispiele

### Den kleinsten Wert bei gleicher Einheit ermitteln

Wenn alle Werte dieselbe Einheit haben, ist das Ergebnis ein einzelner `CSSUnitValue`:

```js
const smallest = CSS.px(10).min(CSS.px(25), CSS.px(5));
console.log(smallest.toString()); // "5px"
```

### Werte mit unterschiedlichen Einheiten vergleichen

Wenn die Einheiten unterschiedlich sind, ist das Ergebnis ein `CSSMathMin`, selbst wenn sich die Werte in dieselbe Einheit umrechnen ließen:

```js
const atMost = CSS.px(100).min(CSS.percent(50));
console.log(atMost.toString()); // "min(100px, 50%)"

const lengths = CSS.cm(1).min(CSS.in(0.393701));
console.log(lengths.toString()); // "min(1cm, 0.393701in)"
```

### Nicht vergleichbare Werte vergleichen

Der Vergleich einer Länge mit einer Zeit löst einen `TypeError` aus:

```js
try {
  CSS.px(1).min(CSS.s(1));
} catch (e) {
  console.log(e instanceof TypeError); // true
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CSSNumericValue.max()`](/de/docs/Web/API/CSSNumericValue/max)
- [`CSSMathMin`](/de/docs/Web/API/CSSMathMin)
- CSS-{{cssxref("min()")}}-Funktion
- [CSS Typed OM verwenden](/de/docs/Web/API/CSS_Typed_OM_API/Guide)
