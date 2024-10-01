---
title: <alpha-value>
slug: Web/CSS/alpha-value
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{CSSRef}}

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Wert, der entweder eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann, und der den **{{Glossary("alpha", "Alpha-Kanal")}}** oder die **Transparenz** einer Farbe spezifiziert.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/number) oder als {{cssxref("percentage")}} angegeben.

Wenn er als Zahl angegeben wird, liegt der sinnvolle Bereich zwischen 0 (vollständig transparent) und 1.0 (vollständig opak), mit Dezimalwerten dazwischen; das heißt, 0,5 bedeutet, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind erlaubt, werden jedoch [geklammert](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs 0 bis 1 zu liegen.

Wenn der Alpha-Wert als Prozentwert angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig opak bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Wenn animiert, werden Werte des `<alpha-value>` CSS-Datentyps als reelle, Gleitkomma-Zahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Deckkraft von Textfarbe einstellen

Die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alpha-Wert anzugeben. Das folgende Beispiel zeigt, wie eine Farbe mit 60% Deckkraft unter Verwendung des Alpha-Wertes angewendet wird:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellenwert für Formbild festlegen

Hier wird ein Alpha-Wert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form betrachtet werden:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Grundlegende Text- und Schrift-Stylings](/de/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types)
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors)
- [`<color>`](/de/docs/Web/CSS/color_value)
