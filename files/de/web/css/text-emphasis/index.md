---
title: text-emphasis
slug: Web/CSS/text-emphasis
l10n:
  sourceCommit: b82ff59aab7883b7bb2222cf9f9f9b6eed818e08
---

{{CSSRef}}

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS) Eigenschaft wendet Hervorhebungszeichen auf Text an (außer Leerzeichen und Steuerzeichen). Es ist eine [Kurzform](/de/docs/Web/CSS/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

{{EmbedInteractiveExample("pages/css/text-emphasis.html")}}

Die `text-emphasis` Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Die `text-decoration` Eigenschaft wird nicht vererbt, und die angegebene Dekoration wird auf das gesamte Element angewendet. Hingegen wird `text-emphasis` vererbt, was bedeutet, dass es möglich ist, die Hervorhebungszeichen für Nachfahren zu ändern.

Die Größe des Hervorhebungssymbols, ähnlich wie Rubysymbole, beträgt etwa 50 % der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Zeilenabstand für die Zeichen nicht ausreicht.

> **Hinweis:** `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass, wenn der Stil und die Farbe der Hervorhebungszeichen in einem Text variieren, es äußerst unwahrscheinlich ist, dass sich ihre Position ändert. In den sehr seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- [`text-emphasis-color`](/de/docs/Web/CSS/text-emphasis-color)
- [`text-emphasis-style`](/de/docs/Web/CSS/text-emphasis-style)

## Syntax

```css
/* Anfangswert */
text-emphasis: none; /* Keine Hervorhebungszeichen */

/* <string> Wert */
text-emphasis: "x";
text-emphasis: "点";
text-emphasis: "\25B2";
text-emphasis: "*" #555;
text-emphasis: "foo"; /* Sollte NICHT verwendet werden. Es könnte zu 'f' berechnet oder dargestellt werden */

/* Schlüsselwortwert */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Schlüsselwortwert kombiniert mit einer Farbe */
text-emphasis: filled sesame #555;

/* Globale Werte */
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
  - : Die Form ist mit einer Vollfarbe gefüllt. Wenn weder `filled` noch `open` vorhanden ist, ist dies der Standardwert.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Zeichen an. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Zeichen an. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schriftsystemen, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeigt doppelte Kreise als Zeichen an. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Zeichen an. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamzeichen als Markierungen. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schriftsystemen, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeigt die angegebene Zeichenfolge als Zeichen an. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Das UA kann Zeichenfolgen, die aus mehr als einem Graphem-Cluster bestehen, kürzen oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe vorhanden ist, wird standardmäßig `currentcolor` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Hervorhebungsform und -farbe

Dieses Beispiel zeichnet eine Überschrift mit Dreiecken, die verwendet werden, um jedes Zeichen zu betonen.

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

- Die Langformen-Eigenschaften {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis-color')}}.
- Die Eigenschaft {{cssxref('text-emphasis-position')}}, die es ermöglicht, die Position der Hervorhebungszeichen zu definieren.
