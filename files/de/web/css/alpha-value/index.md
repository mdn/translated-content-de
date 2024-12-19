---
title: <alpha-value>
slug: Web/CSS/alpha-value
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

Der **`<alpha-value>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) repräsentiert einen Wert, der entweder eine {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann und den **{{Glossary("alpha", "Alpha-Kanal")}}** oder die **Transparenz** einer Farbe angibt.

## Syntax

Der Wert eines `<alpha-value>` wird entweder als [`<number>`](/de/docs/Web/CSS/number) oder als {{cssxref("percentage")}} angegeben.

Wenn es als Zahl angegeben wird, ist der nützliche Bereich von 0 (vollständig transparent) bis 1,0 (vollständig opak), mit dazwischen liegenden Dezimalwerten; das heißt, 0,5 gibt an, dass die Hälfte der Vordergrundfarbe und die Hälfte der Hintergrundfarbe verwendet wird. Werte außerhalb des Bereichs von 0 bis 1 sind zulässig, werden jedoch [abgegrenzt](<https://en.wikipedia.org/wiki/Clamping_(graphics)>) um innerhalb des Bereichs von 0 bis 1 zu liegen.

Wenn der Alphawert als Prozentsatz angegeben wird, entspricht 0% vollständig transparent, während 100% vollständig opak bedeutet.

## Formale Syntax

{{csssyntax}}

## Interpolation

Bei Animationen werden Werte des `<alpha-value>` CSS-Datentyps als reale, Gleitkommawerte {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die mit der Animation verbundene [Easing-Funktion](/de/docs/Web/CSS/easing-function) bestimmt.

## Beispiele

### Einstellen der Textfarbendeckkraft

Die [`rgb()`](/de/docs/Web/CSS/color_value/rgb) Funktion akzeptiert einen vierten optionalen Wert zur Angabe eines Alphawertes. Das folgende Beispiel zeigt, wie man eine Farbe mit 60% Deckkraft mithilfe des Alphawertes anwendet:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

### Einstellen der Formbildschwelle

Hier wird ein Alphawert verwendet, um zu bestimmen, welche Teile eines Bildes als Teil einer Form betrachtet werden:

```css
/* shape-image-threshold */
shape-image-threshold: 70%;
shape-image-threshold: 0.7;
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Grundlegendes Text- und Schriftartenstyling](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/CSS_Types)
- [CSS-Farben](/de/docs/Web/CSS/CSS_colors)
- [`<color>`](/de/docs/Web/CSS/color_value)
