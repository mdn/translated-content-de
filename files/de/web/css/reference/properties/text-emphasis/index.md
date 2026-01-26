---
title: text-emphasis
slug: Web/CSS/Reference/Properties/text-emphasis
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`text-emphasis`** [CSS](/de/docs/Web/CSS)-Eigenschaft wendet Betonungszeichen auf Text an (ausgenommen Leerzeichen und Steuerzeichen). Sie ist eine [Kurzform](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) für {{cssxref("text-emphasis-style")}} und {{cssxref("text-emphasis-color")}}.

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

Die `text-emphasis`-Eigenschaft unterscheidet sich erheblich von {{cssxref("text-decoration")}}. Die `text-decoration`-Eigenschaft wird nicht vererbt, und die angegebene Dekoration wird auf das gesamte Element angewendet. `text-emphasis` hingegen wird vererbt, was bedeutet, dass es möglich ist, Betonungszeichen für Nachfahren zu ändern.

Die Größe des Betonungssymbols, ähnlich wie bei Rubysymbolen, beträgt etwa 50% der Schriftgröße, und `text-emphasis` kann die Linienhöhe beeinflussen, wenn der aktuelle Zeilenabstand nicht ausreichend für die Zeichen ist.

> [!NOTE]
> `text-emphasis` setzt den Wert von {{cssxref("text-emphasis-position")}} nicht zurück. Das liegt daran, dass, wenn der Stil und die Farbe der Betonungszeichen in einem Text variieren können, es äußerst unwahrscheinlich ist, dass sich deren Position ändern wird. In den sehr seltenen Fällen, in denen dies nötig ist, verwenden Sie die Eigenschaft {{cssxref("text-emphasis-position")}}.

## Einzelne Eigenschaften

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
  - : Die Form wird mit einer Vollfarbe ausgefüllt. Wenn weder `filled` noch `open` angegeben sind, ist dies der Standard.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Zeichen an. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Zeichen an. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`). Dies ist die Standardform in horizontalen Schreibmodi, wenn keine andere Form angegeben ist.
- `double-circle`
  - : Zeigt Doppelkreise als Zeichen an. Der gefüllte Doppelkreis ist `'◉'` (`U+25C9`), und der offene Doppelkreis ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Zeichen an. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamzeichen an. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`). Dies ist die Standardform in vertikalen Schreibmodi, wenn keine andere Form angegeben ist.
- `<string>`
  - : Zeigt die angegebene Zeichenkette als Zeichen an. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der benutzerseitige Agent (UA) kann Zeichenfolgen, die aus mehr als einem Grapheme-Cluster bestehen, kürzen oder ignorieren.
- `<color>`
  - : Definiert die Farbe des Zeichens. Wenn keine Farbe angegeben ist, wird `currentColor` als Standardwert verwendet.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine Überschrift mit Betonungsform und Farbe

Dieses Beispiel zeichnet eine Überschrift mit Dreiecken, die zur Betonung jedes Zeichens verwendet werden.

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

- Die Langformen der Eigenschaften {{cssxref('text-emphasis-style')}}, {{cssxref('text-emphasis-color')}}.
- Die {{cssxref('text-emphasis-position')}}-Eigenschaft, die es ermöglicht, die Position der Betonungszeichen zu definieren.
