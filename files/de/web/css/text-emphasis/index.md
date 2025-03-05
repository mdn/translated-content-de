---
title: text-emphasis
slug: Web/CSS/text-emphasis
l10n:
  sourceCommit: 7526c9b4f29818bdca7505de41a4883f4ada2707
---

{{CSSRef}}

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS) Eigenschaft wendet Hervorhebungszeichen auf Text an (außer auf Leerzeichen und Steuerzeichen). Sie ist eine [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

Die `text-emphasis` Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Während die `text-decoration` Eigenschaft nicht vererbt wird und die angegebene Dekoration auf das gesamte Element angewendet wird, wird `text-emphasis` vererbt. Das bedeutet, dass es möglich ist, die Hervorhebungszeichen für Nachfahren zu ändern.

Die Größe des Hervorhebungssymbols, ähnlich wie Rubysymbole, beträgt etwa 50 % der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Zeilenvorsprung nicht ausreichend für die Zeichen ist.

> **Note:** `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Der Grund dafür ist, dass, wenn der Stil und die Farbe von Hervorhebungszeichen in einem Text variieren können, ihre Position sehr wahrscheinlich nicht variieren wird. In den äußerst seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Zuordnende Eigenschaften

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
  - : Die Form ist mit einer Volltonfarbe gefüllt. Wenn weder `filled` noch `open` angegeben sind, ist dies der Standard.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Kleine Kreise als Zeichen anzeigen. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Große Kreise als Zeichen anzeigen. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibmodi, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Doppelte Kreise als Zeichen anzeigen. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Dreiecke als Zeichen anzeigen. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Sesamzeichen als Zeichen anzeigen. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibmodi, wenn keine andere Form angegeben ist.
- `<string>`
  - : Die angegebene Zeichenkette als Zeichen anzeigen. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der UA kann Zeichenketten abschneiden oder ignorieren, die aus mehr als einem Graphem-Cluster bestehen.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe angegeben ist, wird standardmäßig `currentcolor` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Hervorhebungsform und -farbe

Dieses Beispiel zeigt eine Überschrift mit Dreiecken, die zur Hervorhebung jedes Zeichens verwendet werden.

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
- Die Eigenschaft {{cssxref('text-emphasis-position')}}, die es ermöglicht, die Position der Hervorhebungszeichen zu definieren.
