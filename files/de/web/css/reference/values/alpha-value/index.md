---
title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Wert, der entweder eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann, und spezifiziert den **{{Glossary("alpha", "Alpha-Kanal")}}** oder die **Transparenz** einer Farbe.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als {{cssxref("number")}} oder als {{cssxref("percentage")}} angegeben.

Wenn er als Zahl angegeben wird, liegt der nützliche Bereich zwischen 0 (vollständig transparent) und 1,0 (vollständig opak), mit dazwischenliegenden Dezimalwerten; das heißt, 0,5 gibt an, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind erlaubt, werden aber [gekappt](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs von 0 bis 1 zu bleiben.

Wenn der Alpha-Wert als Prozentsatz angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig opak bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Wenn animiert, werden Werte des `<alpha-value>` CSS-Datentyps als reale Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Einstellen der Textfarb-Deckkraft

Die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb)-Funktion akzeptiert einen vierten optionalen Wert, um einen Alpha-Wert anzugeben.
Das folgende Beispiel zeigt, wie eine Farbe mit 60% Deckkraft mithilfe des Alpha-Werts angewendet wird:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellenwert für Formbilder festlegen

Hier wird ein Alpha-Wert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form betrachtet werden:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Grundlegendes Text- und Schrift-Styling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS Farben](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
