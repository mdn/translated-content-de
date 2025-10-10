---
title: <alpha-value>
slug: Web/CSS/alpha-value
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types) repräsentiert einen Wert, der entweder eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und den **{{Glossary("alpha", "Alpha-Kanal")}}** oder die **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/number) oder als {{cssxref("percentage")}} angegeben.

Wenn der Wert als Zahl angegeben wird, liegt der nützliche Bereich zwischen 0 (vollständig transparent) und 1.0 (vollständig undurchsichtig), wobei Dezimalwerte dazwischen liegen; das heißt, 0.5 bedeutet, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind zulässig, werden jedoch [eingeschränkt](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs von 0 bis 1 zu liegen.

Wenn der Alpha-Wert als Prozentsatz angegeben wird, entspricht 0% vollständig transparent und 100% vollständig undurchsichtig.

## Formale Syntax

{{csssyntax}}

## Interpolation

Wenn animiert, werden Werte des `<alpha-value>` CSS-Datentyps als reale, Fließkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Opazität der Textfarbe einstellen

Die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alpha-Wert anzugeben. Das folgende Beispiel zeigt, wie eine Farbe mit 60% Opazität unter Verwendung des Alpha-Werts angewendet wird:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellenwert des Bilds für Formen festlegen

Hier wird ein Alpha-Wert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form betrachtet werden:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Grundlegende Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types)
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors)
- [`<color>`](/de/docs/Web/CSS/color_value)
