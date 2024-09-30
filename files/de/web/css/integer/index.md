---
title: <integer>
slug: Web/CSS/integer
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<integer>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) ist eine spezielle Art von {{cssxref("number")}}, die eine positive oder negative ganze Zahl darstellt. Ganzzahlen können in zahlreichen CSS-Eigenschaften und Deskriptoren verwendet werden, wie zum Beispiel in den Eigenschaften {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}} und {{cssxref("z-index")}} sowie im Deskriptor {{cssxref("@counter-style/range", "range")}}.

## Syntax

Der `<integer>` Datentyp besteht aus einer oder mehreren Dezimalziffern, 0 bis einschließlich 9, optional vorangestellt durch ein einzelnes `+` oder `-` Zeichen. Es ist keine Einheit mit Ganzzahlen verbunden.

> [!NOTE]
> Es gibt keinen offiziellen Bereich gültiger `<integer>` Werte, und die Spezifikationen geben keinen Bereich an.

## Interpolation

Bei Animationen werden Werte des `<integer>` Datentyps unter Verwendung diskreter, ganzer Schritte [interpoliert](/de/docs/Glossary/interpolation). Die Berechnung erfolgt, als ob es sich um reale Gleitkommazahlen handelt; der diskrete Wert wird mit der [Floor-Funktion](https://en.wikipedia.org/wiki/Floor_function) ermittelt. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

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
