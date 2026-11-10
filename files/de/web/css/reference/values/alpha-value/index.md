---
title: CSS-Typ `<alpha-value>`
short-title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: bc838d9946a95b501a9ce3e522929eebcce7a3e5
---

Der **`<alpha-value>`**-[CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt einen Wert dar, der entweder ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und den **{{Glossary("alpha", "Alphakanal")}}** beziehungsweise die **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als {{cssxref("number")}} oder als {{cssxref("percentage")}} angegeben.

Bei einer Angabe als Zahl liegt der sinnvolle Bereich zwischen 0 (vollständig transparent) und 1.0 (vollständig deckend), mit Dezimalwerten dazwischen. Beispielsweise bedeutet 0.5, dass die Vordergrund- und die Hintergrundfarbe jeweils zur Hälfte verwendet werden. Werte außerhalb des Bereichs von 0 bis 1 sind zulässig, werden aber auf diesen Bereich [begrenzt](<https://en.wikipedia.org/wiki/Clamping_(graphics)>).

Wird der Alphawert als Prozentsatz angegeben, entspricht 0% vollständiger Transparenz und 100% vollständiger Deckkraft.

## Interpolation

Bei Animationen werden Werte des CSS-Datentyps `<alpha-value>` als reelle Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft der Textfarbe festlegen

Die Funktion [`rgb()`](/de/docs/Web/CSS/Reference/Values/color_value/rgb) akzeptiert einen vierten, optionalen Wert zur Angabe eines Alphawerts.
Das folgende Beispiel zeigt, wie Sie mithilfe des Alphawerts eine Farbe mit 60% Deckkraft anwenden:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Schwellenwert für eine Bildform festlegen

Hier wird ein Alphawert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form gelten:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
