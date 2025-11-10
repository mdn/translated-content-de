---
title: <integer>
slug: Web/CSS/Reference/Values/integer
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<integer>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein spezieller Typ von {{cssxref("number")}}, der eine positive oder negative ganze Zahl darstellt. Ganzzahlen können in zahlreichen CSS-Eigenschaften und Beschreibungen verwendet werden, wie beispielsweise den Eigenschaften {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, und {{cssxref("z-index")}} sowie der Beschreibung {{cssxref("@counter-style/range", "range")}}.

## Syntax

Der `<integer>`-Datentyp besteht aus einer oder mehreren Dezimalziffern, von 0 bis einschließlich 9, die optional durch ein einzelnes `+`- oder `-`-Zeichen vorangestellt werden können. Es gibt keine Einheit, die mit Ganzzahlen verbunden ist.

> [!NOTE]
> Es gibt keinen offiziellen Bereich für gültige `<integer>`-Werte, und die Spezifikationen legen keinen Bereich fest.

## Interpolation

Bei Animationen werden Werte des `<integer>`-Datentyps unter Verwendung diskreter, ganzer Schritte {{Glossary("interpolation", "interpoliert")}}. Die Berechnung erfolgt, als wären sie reale, Gleitkommazahlen; der diskrete Wert wird unter Verwendung der [Bodenfunktion](https://en.wikipedia.org/wiki/Floor_function) erhalten. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Gültige Ganzzahlen

```plain example-good
12          Positive integer (without a leading + sign)
+123        Positive integer (with a leading + sign)
-456        Negative integer
0           Zero
+0          Zero, with a leading +
-0          Zero, with a leading -
```

### Ungültige Ganzzahlen

```plain example-bad
12.0        This is a <number>, not an <integer>, though it represents an integer.
12.         Decimal points are not allowed.
+---12      Only one leading +/- is allowed.
ten         Letters are not allowed.
_5          Special characters are not allowed.
\35         Escaped Unicode characters are not allowed, even if they are an integer (here: 5).
\4E94       Non-arabic numerals are not allowed, even when escaped (here: the Japanese 5, 五).
3e4         Scientific notation is not allowed.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;number&gt;")}}
