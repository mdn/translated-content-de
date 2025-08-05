---
title: text-emphasis
slug: Web/CSS/text-emphasis
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS) Eigenschaft wendet Betonungszeichen auf Text an (außer bei Leerzeichen und Steuerzeichen). Es ist eine [Kurzform](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

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

Die `text-emphasis` Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Die `text-decoration` Eigenschaft wird nicht vererbt und die spezifizierte Dekoration wird über das gesamte Element angewendet. `text-emphasis` hingegen wird vererbt, was bedeutet, dass es möglich ist, die Betonungszeichen für Nachfahren zu ändern.

Die Größe des Betonungssymbols, ähnlich wie Rubysymbole, beträgt etwa 50% der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn das aktuelle Zeilenmaß nicht ausreichend für die Zeichen ist.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass, wenn der Stil und die Farbe der Betonungszeichen in einem Text variieren können, ihre Position äußerst selten variieren wird. In den sehr seltenen Fällen, in denen dies notwendig ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Bestandteile

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
  - : Keine Betonungszeichen.
- `filled`
  - : Die Form ist mit einer Volltonfarbe gefüllt. Wenn weder `filled` noch `open` vorhanden sind, ist dies der Standard.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Markierungen an. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Markierungen an. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeigt doppelte Kreise als Markierungen an. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkrei sich `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Markierungen an. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamsamen als Markierungen an. Der gefüllte Sesamsamen ist `'﹅'` (`U+FE45`), und der offene Sesamsamen ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeigt die angegebene Zeichenkette als Markierungen an. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der Benutzeragent kann Zeichenfolgen, die aus mehr als einem Graphem-Cluster bestehen, abschneiden oder ignorieren.
- `<color>`
  - : Definiert die Farbe der Markierung. Wenn keine Farbe vorhanden ist, wird `currentColor` als Standard verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Form und Farbe der Betonung

Dieses Beispiel zeichnet eine Überschrift mit Dreiecken, die verwendet werden, um jeden Buchstaben hervorzuheben.

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
- Die {{cssxref('text-emphasis-position')}} Eigenschaft, die es erlaubt, die Position der Betonungszeichen zu definieren.
