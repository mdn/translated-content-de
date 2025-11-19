---
title: text-emphasis
slug: Web/CSS/Reference/Properties/text-emphasis
l10n:
  sourceCommit: e316a03cc74a78004dbba837c9d5df297e2eb0aa
---

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS)-Eigenschaft wendet Hervorhebungszeichen auf Text an (außer auf Leerzeichen und Steuerzeichen). Sie ist ein [Shorthand](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

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

Die `text-emphasis`-Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Die `text-decoration`-Eigenschaft wird nicht vererbt, und die angegebene Dekoration wird auf das gesamte Element angewendet. `text-emphasis` hingegen wird vererbt, was bedeutet, dass es möglich ist, die Hervorhebungszeichen für Nachkommen zu ändern.

Die Größe des Hervorhebungssymbols beträgt, ähnlich wie bei Ruby-Symbolen, etwa 50 % der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Zeilenabstand nicht ausreichend für die Zeichen ist.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Das liegt daran, dass wenn Stil und Farbe der Hervorhebungszeichen in einem Text variieren können, es äußerst unwahrscheinlich ist, dass sich ihre Position ändert. In den sehr seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Bestandteilige Eigenschaften

Diese Eigenschaft ist eine Shorthand für die folgenden CSS-Eigenschaften:

- [`text-emphasis-color`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-color)
- [`text-emphasis-style`](/de/docs/Web/CSS/Reference/Properties/text-emphasis-style)

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
  - : Die Form ist mit einer Vollfarbe gefüllt. Wenn weder `filled` noch `open` vorhanden ist, ist dies der Standardwert.
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
  - : Den angegebenen String als Zeichen anzeigen. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der UA kann Strings mit mehr als einem Graphemverband kürzen oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe vorhanden ist, wird standardmäßig `currentColor` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Hervorhebungsform und -farbe

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
- Die {{cssxref('text-emphasis-position')}}-Eigenschaft, die es ermöglicht, die Position der Hervorhebungszeichen zu definieren.
