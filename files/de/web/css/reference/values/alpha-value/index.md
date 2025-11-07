---
title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Wert, der entweder ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und den **{{Glossary("alpha", "Alpha-Kanal")}}** oder die **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/Reference/Values/number) oder als {{cssxref("percentage")}} angegeben.

Wenn der Wert als Zahl angegeben wird, reicht der nützliche Bereich von 0 (vollständig transparent) bis 1.0 (vollständig opak), mit dazwischen liegenden Dezimalwerten; das heißt, 0.5 bedeutet, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind erlaubt, werden aber [geklammert](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs von 0 bis 1 zu liegen.

Wenn der Alpha-Wert als Prozentwert angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig opak bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Wenn animiert werden die Werte des `<alpha-value>` CSS-Datentyps {{Glossary("interpolation", "interpoliert")}} als reale Gleitkommazahlen. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Opazität der Textfarbe einstellen

Die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alpha-Wert anzugeben. Das folgende Beispiel zeigt, wie eine Farbe mit 60 % Opazität unter Verwendung des Alpha-Wertes angewendet wird:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellenwert für Formabbildungen festlegen

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
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Farbe](/de/docs/Web/CSS/Guides/Colors)
- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)
