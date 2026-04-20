---
title: "`<alpha-value>` CSS-Typ"
short-title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) repräsentiert einen Wert, der entweder ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und den **{{Glossary("alpha", "Alphakanal")}}** oder die **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als {{cssxref("number")}} oder als {{cssxref("percentage")}} angegeben.

Wird er als Zahl angegeben, reicht der nützliche Bereich von 0 (vollständig transparent) bis 1.0 (vollständig undurchsichtig), mit Dezimalwerten dazwischen; das heißt, 0.5 bedeutet, dass zur Hälfte die Vordergrundfarbe und zur Hälfte die Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind erlaubt, werden jedoch [begrenzt](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs von 0 bis 1 zu liegen.

Wenn der Alphawert als Prozentsatz angegeben wird, entspricht 0% vollständig transparent und 100% vollständig undurchsichtig.

## Formale Syntax

{{csssyntax}}

## Interpolation

Bei Animationen werden Werte des `<alpha-value>` CSS-Datentyps als reale Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verknüpfte [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Beispiele

### Festlegen der Opazität der Textfarbe

Die [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert, um einen Alphawert anzugeben. Das folgende Beispiel zeigt, wie eine Farbe mit 60% Opazität unter Verwendung des Alphawertes angewendet wird:

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

- [Lernen: Grundlegende Text- und Schriftstilierung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS Farbe](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
