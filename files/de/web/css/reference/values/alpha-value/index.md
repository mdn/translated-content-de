---
title: CSS-Typ `<alpha-value>`
short-title: <alpha-value>
slug: Web/CSS/Reference/Values/alpha-value
l10n:
  sourceCommit: bb5ced11c285b1039e5ee64484ca5609e45a2e93
---

Der **`<alpha-value>`**-[CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) stellt einen Wert dar, der entweder ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} sein kann. Er gibt den **{{Glossary("alpha", "Alphakanal")}}** beziehungsweise die **Transparenz** einer Farbe an.

## Zugehörige Funktionen

Dieser Datentyp wird von den folgenden CSS-Funktionen als Parameter akzeptiert:

- {{cssxref("alpha()")}}
- {{cssxref("color()")}}
- {{cssxref("device-cmyk()")}}
- {{cssxref("hsl()")}}
- {{cssxref("hsl()", "hsla()")}}
- {{cssxref("hwb()")}}
- {{cssxref("lab()")}}
- {{cssxref("lch()")}}
- {{cssxref("oklab()")}}
- {{cssxref("oklch()")}}
- {{cssxref("rgb()")}}
- {{cssxref("rgb()", "rgba()")}}

## Syntax

```css
/* <number> values */
0
0.125
0.5
1

/* <percentage> values */
0%
12.5%
50%
100%
```

### Werte

Dieser Datentyp wird als einer der folgenden Werte angegeben:

- {{cssxref("number")}}
  - : Ein positiver Wert zwischen `0` und `1`, einschließlich der Grenzwerte.
- {{cssxref("percentage")}}
  - : Ein `<percentage>` zwischen `0%` und `100%`, einschließlich der Grenzwerte.

Werte außerhalb dieser Bereiche sind zwar gültig, werden aber auf den jeweils nächstgelegenen Grenzwert begrenzt.

## Beschreibung

Ein `<alpha-value>` wird entweder als {{cssxref("number")}} oder als {{cssxref("percentage")}} angegeben.

Bei Angabe als Zahl reicht der sinnvolle Bereich von `0` (vollständig transparent) bis `1.0` (vollständig deckend), mit Dezimalwerten dazwischen. Beispielsweise bedeutet `0.5`, dass die Vordergrundfarbe und die Hintergrundfarbe jeweils zur Hälfte verwendet werden. Werte außerhalb des Bereichs von `0` bis `1` sind zulässig, werden aber auf diesen Bereich begrenzt.

Wird der Alphawert als Prozentwert angegeben, entspricht `0%` vollständiger Transparenz und `100%` vollständiger Deckkraft.

### Interpolation

Bei Animationen werden Werte des CSS-Datentyps `<alpha-value>` als reelle Gleitkommazahlen {{Glossary("interpolation", "interpoliert")}}. Die Geschwindigkeit der Interpolation wird durch die der Animation zugeordnete [Easing-Funktion](/de/docs/Web/CSS/Reference/Values/easing-function) bestimmt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Deckkraft der Textfarbe festlegen

Das Beispiel zeigt, wie eine Farbe mit `60%` Deckkraft angewendet wird. Dazu wird `<alpha-value>` als Parameter innerhalb einer {{cssxref("rgb()")}}-Funktion verwendet, die einen optionalen vierten Parameter für den Alphawert akzeptiert:

```css
/* <rgb()> */
color: rgb(34 12 64 / 60%);
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Lernen: Grundlagen der Text- und Schriftgestaltung](/de/docs/Learn_web_development/Core/Text_styling/Fundamentals)
- [CSS-Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Farben](/de/docs/Web/CSS/Guides/Colors)
- {{cssxref("&lt;color&gt;")}}
