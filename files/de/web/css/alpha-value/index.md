---
title: <alpha-Wert>
slug: Web/CSS/alpha-value
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{CSSRef}}

Der **`<alpha-Wert>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Wert, der entweder eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und die **{{Glossary("alpha", "Alpha-Kanal")}}** oder **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-Wert>` ist entweder als [`<number>`](/de/docs/Web/CSS/number) oder als {{cssxref("percentage")}} angegeben.

Falls als Zahl angegeben, liegt der nützliche Bereich zwischen 0 (vollständig transparent) und 1,0 (vollständig deckend), mit dazwischen liegenden Dezimalwerten; das heißt, 0,5 bedeutet, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind zulässig, werden jedoch [geklammert](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs von 0 bis 1 zu liegen.

Wenn der Alpha-Wert als Prozentsatz angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig deckend bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Wenn animiert, werden Werte des CSS-Datentyps `<alpha-Wert>` als reale, Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Deckkraft der Textfarbe festlegen

Die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alpha-Wert festzulegen. Das folgende Beispiel zeigt, wie eine Farbe mit 60% Deckkraft unter Verwendung des Alpha-Werts angewendet wird:

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

- [Grundlegende Text- und Schriftstilierung](/de/docs/Learn/CSS/Styling_text/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types)
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors)
- [`<color>`](/de/docs/Web/CSS/color_value)
