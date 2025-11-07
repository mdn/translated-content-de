---
title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Wert, der entweder eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und den **{{Glossary("alpha", "Alphakanal")}}** oder die **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/Reference/Values/number) oder als {{cssxref("percentage")}} angegeben.

Wird er als Zahl angegeben, so liegt der nützliche Bereich zwischen 0 (vollständig transparent) und 1.0 (vollständig opak), mit dazwischenliegenden Dezimalwerten; das heißt, 0.5 zeigt an, dass die Hälfte der Vordergrundfarbe verwendet wird und die andere Hälfte aus der Hintergrundfarbe besteht. Werte außerhalb des Bereichs von 0 bis 1 sind erlaubt, werden jedoch [eingeschränkt](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) auf den Bereich von 0 bis 1.

Wenn der Alpha-Wert als Prozentwert angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig opak bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Bei Animationen werden Werte des CSS-Datentyps `<alpha-value>` als reelle, Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Deckkraft der Textfarbe setzen

Die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alpha-Wert anzugeben.
Das folgende Beispiel zeigt, wie eine Farbe mit 60% Deckkraft unter Verwendung des Alpha-Werts angewendet wird:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellwert des Bildes für Formen setzen

Hier wird ein Alpha-Wert verwendet, um festzulegen, welche Teile eines Bildes als Teil einer Form betrachtet werden:

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
- [CSS-Farbe](/de/docs/Web/CSS/CSS_colors)
- [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value)
