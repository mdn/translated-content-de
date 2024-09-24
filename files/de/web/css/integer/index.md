---
title: <Ganzzahl>
slug: Web/CSS/integer
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

Der **`<integer>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) ist ein spezieller Typ von {{cssxref("number")}}, der eine positive oder negative ganze Zahl darstellt. Ganzzahlen können in zahlreichen CSS-Eigenschaften und Deskriptoren verwendet werden, wie z.B. in den Eigenschaften {{cssxref("column-count")}}, {{cssxref("counter-increment")}}, {{cssxref("grid-column")}}, {{cssxref("grid-row")}} und {{cssxref("z-index")}} sowie im Deskriptor {{cssxref("@counter-style/range", "range")}}.

## Syntax

Der `<integer>` Datentyp besteht aus einer oder mehreren Dezimalziffern von 0 bis einschließlich 9, optional vorangestellt mit einem einzelnen `+` oder `-` Zeichen. Es gibt keine Einheit, die mit Ganzzahlen verbunden ist.

> [!NOTE]
> Es gibt keinen offiziellen Bereich gültiger `<integer>`-Werte, und die Spezifikationen legen keinen Bereich fest.

## Interpolation

Bei Animationen werden Werte des `<integer>` Datentyps mittels diskreter, ganzer Schritte {{Glossary("interpolation", "interpoliert")}}. Die Berechnung erfolgt, als ob sie reale, gleitkommagenaue Zahlen wären; der diskrete Wert wird mit der [floor function](https://en.wikipedia.org/wiki/Floor_function) erhalten. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [easing function](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Gültige Ganzzahlen

```plain example-good
12          Positive ganze Zahl (ohne ein führendes + Zeichen)
+123        Positive ganze Zahl (mit einem führenden + Zeichen)
-456        Negative ganze Zahl
0           Null
+0          Null, mit einem führenden +
-0          Null, mit einem führenden -
```

### Ungültige Ganzzahlen

```plain example-bad
12.0        Dies ist eine <number>, keine <integer>, obwohl sie eine Ganzzahl darstellt.
12.         Dezimalpunkte sind nicht erlaubt.
+---12      Nur ein führendes +/- ist erlaubt.
ten         Buchstaben sind nicht erlaubt.
_5          Sonderzeichen sind nicht erlaubt.
\35         Escapete Unicode-Zeichen sind nicht erlaubt, auch wenn sie eine Ganzzahl darstellen (hier: 5).
\4E94       Nicht-arabische Ziffern sind nicht erlaubt, selbst wenn sie escapet sind (hier: die japanische 5, 五).
3e4         Wissenschaftliche Notation ist nicht erlaubt.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("&lt;number&gt;")}}
