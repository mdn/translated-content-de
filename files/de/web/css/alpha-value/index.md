---
title: <alpha-value>
slug: Web/CSS/alpha-value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Wert, der entweder eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann, und die **{{Glossary("alpha", "Alphakanal")}}** oder **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/number) oder als {{cssxref("percentage")}} angegeben.

Wenn der Wert als Zahl angegeben wird, liegt der sinnvolle Bereich zwischen 0 (vollständig transparent) und 1.0 (vollständig opak), mit dazwischenliegenden Dezimalwerten; das heißt, 0.5 zeigt an, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe genutzt wird. Werte außerhalb des Bereichs von 0 bis 1 sind erlaubt, werden jedoch [geklammert](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) und in den Bereich 0 bis 1 eingegrenzt.

Wenn der Alphawert als Prozentsatz angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig opak bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Wenn animiert, werden Werte des `<alpha-value>` CSS-Datentyps als reelle, gleitkommazahlige Werte {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Einstellen der Textfarb-Deckkraft

Die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alphawert anzugeben.
Das folgende Beispiel zeigt, wie man eine Farbe mit 60% Deckkraft unter Verwendung des Alphawerts anwendet:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Festlegen der Formbildschwelle

Hier wird ein Alphawert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form betrachtet werden:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Grundlegende Text- und Schriftartgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors)
- [`<color>`](/de/docs/Web/CSS/color_value)
