---
title: text-emphasis
slug: Web/CSS/text-emphasis
l10n:
  sourceCommit: 06639598f7805417a0331fe403304af9c7ecc2de
---

Die **`text-emphasis`**-[CSS](/de/docs/Web/CSS) Eigenschaft wendet Hervorhebungszeichen auf Text an (außer Leerzeichen und Steuerzeichen). Es ist eine [Kurzschrift](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

{{InteractiveExample("CSS Demo: text-emphasis")}}

```css interactive-example-choice
text-emphasis: none;
```

```css interactive-example-choice
text-emphasis: filled red;
```

```css interactive-example-choice
text-emphasis: "x";
```

```css interactive-example-choice
text-emphasis: filled double-circle #ffb703;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}
```

Die `text-emphasis` Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Die `text-decoration` Eigenschaft wird nicht vererbt, und die angegebene Dekoration wird auf das gesamte Element angewendet. `text-emphasis` hingegen wird vererbt, was bedeutet, dass es möglich ist, Hervorhebungszeichen für Nachfahren zu ändern.

Die Größe des Hervorhebungssymbols, ähnlich wie bei Rubysymbolen, beträgt etwa 50% der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Zeilenabstand nicht ausreichend für die Zeichen ist.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass, wenn der Stil und die Farbe der Hervorhebungszeichen in einem Text variieren können, es äußerst unwahrscheinlich ist, dass sich deren Position ändert. In den sehr seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Einzelne Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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
text-emphasis: "*" #555555;
text-emphasis: "foo"; /* Should NOT use. It may be computed to or rendered as 'f' only */

/* Keywords value */
text-emphasis: filled;
text-emphasis: open;
text-emphasis: filled sesame;
text-emphasis: open sesame;

/* Keywords value combined with a color */
text-emphasis: filled sesame #555555;

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
  - : Die Form ist mit einer Vollfarbe ausgefüllt. Wenn weder `filled` noch `open` vorhanden ist, ist dies der Standard.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Kleine Kreise als Zeichen anzeigen. Der ausgefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Große Kreise als Zeichen anzeigen. Der ausgefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Doppelte Kreise als Zeichen anzeigen. Der ausgefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Dreiecke als Zeichen anzeigen. Das ausgefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Sesamzeichen als Zeichen anzeigen. Der ausgefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `<string>`
  - : Die angegebene Zeichenfolge als Zeichen anzeigen. Autoren sollten nicht mehr als ein Zeichen in `<string>` angeben. Das UA kann Zeichenfolgen, die aus mehr als einem Graphem-Cluster bestehen, kürzen oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe angegeben ist, wird `currentColor` verwendet.

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
  text-emphasis: triangle #dd5555;
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
- Die {{cssxref('text-emphasis-position')}} Eigenschaft, die es erlaubt, die Position der Hervorhebungszeichen zu definieren.
