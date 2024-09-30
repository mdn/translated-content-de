---
title: text-emphasis
slug: Web/CSS/text-emphasis
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS) Eigenschaft wendet Hervorhebungszeichen auf Text an (außer Leerzeichen und Steuerzeichen). Sie ist eine [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

Die Eigenschaft `text-emphasis` unterscheidet sich deutlich von {{cssxref("text-decoration")}}. Die `text-decoration` Eigenschaft wird nicht vererbt, und die angegebene Dekoration wird auf das gesamte Element angewendet. `text-emphasis` dagegen wird vererbt, was bedeutet, dass es möglich ist, Hervorhebungszeichen für Nachfahren zu ändern.

Die Größe des Hervorhebungszeichens, ähnlich wie bei Rubinzeichen, beträgt etwa 50 % der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Durchschuss nicht ausreichend für die Zeichen ist.

> **Note:** `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass es sehr unwahrscheinlich ist, dass sich die Position der Zeichen ändert, auch wenn Stil und Farbe der Hervorhebungszeichen in einem Text variieren können. In den sehr seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschreibweise für die folgenden CSS-Eigenschaften:

- [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color)
- [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style)

## Syntax

```css
/* Initial value */
text-emphasis: none; /* No emphasis marks */

/* <string> value */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
text-emphasis: "foo"; /* Should NOT use. It may be computed to or rendered as 'f' only */

/* Keywords value */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Keywords value combined with a color */
text-emphasis: filled sesame #555;

/* Global values */
text-emphasis: inherit;
text-emphasis: initial;
text-emphasis: revert;
text-emphasis: revert-layer;
text-emphasis: unset;
```

### Werte

- `none`
  - : Keine Hervorhebungszeichen.
- `filled`
  - : Die Form ist mit Farbe gefüllt. Wenn weder `filled` noch `open` vorhanden ist, ist dies der Standard.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Zeichen. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Zeichen. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibmodi, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeigt Doppelkreise als Zeichen. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Zeichen. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamformen als Zeichen. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibmodi, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeigt die angegebene Zeichenkette als Zeichen. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der UA kann Zeichenketten, die aus mehr als einem Graphem-Cluster bestehen, abschneiden oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe angegeben ist, wird `currentcolor` als Standard verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Form- und Farbbetonung

Dieses Beispiel zeichnet eine Überschrift mit Dreiecken, die zur Betonung jedes Zeichens verwendet werden.

#### CSS

```css
h2 {
  text-emphasis: triangle #d55;
}
```

#### HTML

```html
<h2>This is important!</h2>
```

#### Ergebnis

{{EmbedLiveSample("A_heading_with_emphasis_shape_and_color", 500, 90)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Langformen der Eigenschaften {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis-color')}}.
- Die Eigenschaft {{cssxref('text-emphasis-position')}}, die es ermöglicht, die Position der Hervorhebungszeichen zu definieren.
