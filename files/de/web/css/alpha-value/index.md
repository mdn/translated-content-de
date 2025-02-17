---
title: <alpha-value>
slug: Web/CSS/alpha-value
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) repräsentiert einen Wert, der entweder ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann, und gibt den **{{Glossary("alpha", "Alpha-Kanal")}}** oder die **Transparenz** einer Farbe an.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/number) oder als {{cssxref("percentage")}} angegeben.

Wenn der Wert als Zahl gegeben ist, liegt der nützliche Bereich zwischen 0 (vollständig transparent) und 1.0 (vollständig undurchsichtig), mit Dezimalwerten dazwischen. Zum Beispiel bedeutet 0.5, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind zulässig, werden jedoch [geklammert](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) und liegen dann im Bereich von 0 bis 1.

Wenn der Alpha-Wert als Prozentwert angegeben ist, entspricht 0% vollständig transparent, während 100% vollständig undurchsichtig bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Wenn animiert, werden Werte des `<alpha-value>` CSS-Datentyps als reale Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verknüpfte [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Deckkraft der Textfarbe einstellen

Die Funktion [`rgb()`](/de/docs/Web/CSS/color_value/rgb) akzeptiert einen vierten optionalen Wert, um einen Alpha-Wert anzugeben. Das folgende Beispiel zeigt, wie eine Farbe mit 60% Deckkraft unter Verwendung des Alpha-Werts angewendet wird:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellenwert für Formenbild einstellen

Hier wird ein Alpha-Wert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form angesehen werden:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Grundlegendes Styling von Text und Schriftarten](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS Farbe](/de/docs/Web/CSS/CSS_colors)
- [`<color>`](/de/docs/Web/CSS/color_value)
