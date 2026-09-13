---
title: "`text-emphasis` CSS-Eigenschaft"
short-title: text-emphasis
slug: Web/CSS/Reference/Properties/text-emphasis
l10n:
  sourceCommit: 5381238460a48ff323a93e652d15cb62598f0262
---

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS) [Kurzschrift](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) Eigenschaft wendet Betonungszeichen auf den Text an (außer auf Leerzeichen und Steuerzeichen).

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

Die `text-emphasis`-Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Die `text-decoration`-Eigenschaft wird nicht vererbt, und die spezifizierte Dekoration wird über das gesamte Element angewendet. Allerdings wird `text-emphasis` vererbt, was bedeutet, dass es möglich ist, die Betonungszeichen für Nachkommen zu ändern.

Die Größe des Betonungssymbols, ähnlich wie bei Ruby-Symbolen, beträgt etwa 50 % der Schriftgröße, und `text-emphasis` kann die Zeilenhöhe beeinflussen, wenn der aktuelle Zeilenabstand nicht ausreicht.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Dies liegt daran, dass, wenn Stil und Farbe der Betonungszeichen in einem Text variieren können, es äußerst unwahrscheinlich ist, dass ihre Position dies tun wird. In den sehr seltenen Fällen, in denen dies erforderlich ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Zusammengesetzte Eigenschaften

Diese Eigenschaft ist eine Kurzschrift für die folgenden CSS-Eigenschaften:

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
  - : Die Form ist mit Vollfarbe gefüllt. Wenn weder `filled` noch `open` vorhanden sind, ist dies der Standardwert.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Markierungen an. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Markierungen an. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeigt doppelte Kreise als Markierungen an. Der gefüllte doppelte Kreis ist `'◉'` (`U+25C9`), und der offene doppelte Kreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Markierungen an. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamkörner als Markierungen an. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibrichtungen, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeigt die angegebene Zeichenkette als Markierungen an. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Das UA kann Zeichenketten, die aus mehr als einem Graphem-Cluster bestehen, kürzen oder ignorieren.
- `<color>`
  - : Definiert die Farbe der Markierung. Wenn keine Farbe angegeben ist, wird `currentColor` verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Betonungsform und Farbe

Dieses Beispiel zeigt eine Überschrift, bei der Dreiecke verwendet werden, um jedes Zeichen zu betonen.

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
- Die Eigenschaft {{cssxref('text-emphasis-position')}}, die es Ihnen ermöglicht, die Position der Betonungszeichen zu definieren.
