---
title: <integer>
slug: Web/CSS/integer
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<integer>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) ist eine spezielle Art von {{cssxref("number")}}, die eine positive oder negative ganze Zahl darstellt. Ganzzahlen können in zahlreichen CSS-Eigenschaften und Deskriptoren verwendet werden, wie z.B. die Eigenschaften {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}}, und {{cssxref("z-index")}} sowie der Deskriptor {{cssxref("@counter-style/range", "range")}}.

## Syntax

Der `<integer>`-Datentyp besteht aus einer oder mehreren Dezimalziffern, einschließlich 0 bis 9, die optional von einem einzelnen `+`- oder `-`-Zeichen vorangestellt sind. Es ist keine Einheit mit Ganzzahlen verbunden.

> [!NOTE]
> Es gibt keinen offiziellen Bereich für gültige `<integer>`-Werte, und die Spezifikationen spezifizieren keinen Bereich.

## Interpolation

Wenn animiert, werden Werte des `<integer>`-Datentyps unter Verwendung von diskreten, ganzen Schritten {{Glossary("interpolation", "interpoliert")}}. Die Berechnung erfolgt, als ob sie reale, Gleitkommazahlen wären; der diskrete Wert wird unter Verwendung der [Floor-Funktion](https://en.wikipedia.org/wiki/Floor_function) erhalten. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

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
