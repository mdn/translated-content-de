---
title: "`text-emphasis` CSS-Eigenschaft"
short-title: text-emphasis
slug: Web/CSS/Reference/Properties/text-emphasis
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS)-Eigenschaft wendet Betonungszeichen auf Text an (außer auf Leerzeichen und Steuerzeichen). Sie ist eine [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

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

Die `text-emphasis`-Eigenschaft unterscheidet sich stark von {{cssxref("text-decoration")}}. Die `text-decoration`-Eigenschaft wird nicht vererbt, und die angegebene Dekoration wird über das ganze Element angewendet. `text-emphasis` hingegen wird vererbt, was bedeutet, dass es möglich ist, Betonungszeichen für Nachfahren zu ändern.

Die Größe des Betonungssymbols, ähnlich wie Ruby-Symbole, beträgt etwa 50% der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn das aktuelle Führungsmaß nicht ausreichend für die Zeichen ist.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass, selbst wenn der Stil und die Farbe von Betonungszeichen in einem Text variieren können, es extrem unwahrscheinlich ist, dass sich deren Position ändern wird. In den sehr seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Bestandteileigenschaften

Diese Eigenschaft ist eine Kurzform für die folgenden CSS-Eigenschaften:

- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis-style")}}

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
  - : Keine Betonungszeichen.
- `filled`
  - : Die Form ist mit einer Vollfarbe gefüllt. Wenn weder `filled` noch `open` vorhanden ist, ist dies der Standardwert.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Zeichen an. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Zeichen an. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeigt doppelte Kreise als Zeichen an. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Zeichen an. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamene als Zeichen an. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeigt die angegebene Zeichenkette als Zeichen an. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Die UA kann Zeichenfolgen, die aus mehr als einem Graphem-Cluster bestehen, abschneiden oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe vorhanden ist, wird `currentColor` als Standard verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Betonungsform und -farbe

Dieses Beispiel zeichnet eine Überschrift, bei der Dreiecke verwendet werden, um jedes Zeichen zu betonen.

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
- Die Eigenschaft {{cssxref('text-emphasis-position')}}, die es ermöglicht, die Position der Betonungszeichen zu definieren.
