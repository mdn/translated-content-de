---
title: text-emphasis
slug: Web/CSS/text-emphasis
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS) Eigenschaft wendet Hervorhebungszeichen auf Text an (außer Leerzeichen und Steuerzeichen). Sie ist eine [Kurzform](/de/docs/Web/CSS/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

Die `text-emphasis` Eigenschaft unterscheidet sich stark von {{cssxref("text-decoration")}}. Die `text-decoration` Eigenschaft wird nicht vererbt und die angegebene Dekoration wird über das gesamte Element hinweg angewendet. Allerdings wird `text-emphasis` vererbt, was bedeutet, dass es möglich ist, Hervorhebungszeichen für Nachfahren zu ändern.

Die Größe des Hervorhebungssymbols, ähnlich wie bei Ruby-Symbolen, beträgt etwa 50% der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Durchschuss nicht ausreichend für die Zeichen ist.

> **Note:** `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass, wenn Stil und Farbe der Hervorhebungszeichen in einem Text variieren können, es äußerst unwahrscheinlich ist, dass dies auch für ihre Position gilt. In den sehr seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Die Form ist mit einer Vollfarbe gefüllt. Wenn weder `filled` noch `open` vorhanden sind, ist dies der Standardwert.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Kleine Kreise als Zeichen anzeigen. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Große Kreise als Zeichen anzeigen. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schriftmodi, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Doppelte Kreise als Zeichen anzeigen. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Dreiecke als Zeichen anzeigen. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Sesam-Zeichen als Markierungen anzeigen. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schriftmodi, wenn keine andere Form angegeben ist.
- `<string>`
  - : Den gegebenen String als Zeichen anzeigen. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der UA kann Strings, die aus mehr als einem Graphem-Cluster bestehen, abschneiden oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe angegeben ist, wird `currentcolor` als Standard genutzt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Hervorhebungsform und Farbe

Dieses Beispiel zeichnet eine Überschrift mit Dreiecken zur Hervorhebung jedes Zeichens.

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

- Die Langform-Eigenschaften {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis-color')}}.
- Die {{cssxref('text-emphasis-position')}} Eigenschaft, mit der die Position der Hervorhebungszeichen definiert werden kann.
