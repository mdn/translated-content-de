---
title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Wert, der entweder ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und den **{{Glossary("alpha", "Alphakanal")}}** oder die **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/Reference/Values/number) oder als {{cssxref("percentage")}} angegeben.

Wenn er als Zahl angegeben wird, liegt der nützliche Bereich bei 0 (vollständig transparent) bis 1,0 (vollständig undurchsichtig), mit Dezimalwerten dazwischen; das heißt, 0,5 gibt an, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind erlaubt, werden jedoch [geklammert](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs von 0 bis 1 zu liegen.

Wenn der Alphawert als Prozentsatz angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig undurchsichtig bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Bei Animationen werden Werte des CSS-Datentyps `<alpha-value>` als reelle, Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Opazität von Textfarbe setzen

Die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alphawert anzugeben.
Das folgende Beispiel zeigt, wie eine Farbe mit 60% Opazität mithilfe des Alphawertes angewendet wird:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellenwert von Bildformen setzen

Hier wird ein Alphawert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form betrachtet werden:

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
