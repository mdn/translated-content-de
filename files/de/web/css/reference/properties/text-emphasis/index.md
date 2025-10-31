---
title: text-emphasis
slug: Web/CSS/Reference/Properties/text-emphasis
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS) Eigenschaft wendet Hervorhebungszeichen auf Text an (außer auf Leerzeichen und Steuerzeichen). Sie ist eine [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

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

Die `text-emphasis` Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Die `text-decoration` Eigenschaft wird nicht vererbt, und die angegebene Dekoration wird über das gesamte Element angewendet. Jedoch erbt `text-emphasis`, was bedeutet, dass es möglich ist, die Hervorhebungszeichen für Nachfahren zu ändern.

Die Größe des Hervorhebungszeichens, ähnlich wie bei Ruby-Symbolen, beträgt etwa 50% der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Durchschuss nicht ausreichend für die Zeichen ist.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass, wenn der Stil und die Farbe der Hervorhebungszeichen in einem Text variieren können, es äußerst unwahrscheinlich ist, dass ihre Position dies tun wird. In den sehr seltenen Fällen, in denen dies benötigt wird, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Bestandteilseigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

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
  - : Zeige kleine Kreise als Zeichen. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeige große Kreise als Zeichen. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibmodi, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeige Doppelpunkte als Zeichen. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeige Dreiecke als Zeichen. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeige Sesamkörner als Zeichen. Das gefüllte Sesamkorn ist `'﹅'` (`U+FE45`), und das offene Sesamkorn ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibmodi, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeige die angegebene Zeichenfolge als Zeichen. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der UA kann Zeichenfolgen mit mehr als einem Graphem-Cluster verkürzen oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe vorhanden ist, wird `currentColor` als Standard verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Hervorhebungsform und -farbe

Dieses Beispiel zeichnet eine Überschrift mit Dreiecken, die jedes Zeichen hervorheben.

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
- Die Eigenschaft {{cssxref('text-emphasis-position')}} zur Definition der Position der Hervorhebungszeichen.
