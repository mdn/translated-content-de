---
title: "`text-emphasis-style` CSS property"
short-title: text-emphasis-style
slug: Web/CSS/Reference/Properties/text-emphasis-style
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-emphasis-style`**-[CSS](/de/docs/Web/CSS)-Eigenschaft legt das Aussehen von Betonungsmarkierungen fest. Sie kann auch mit dem {{cssxref("text-emphasis")}}-Shorthand gesetzt und zurückgesetzt werden.

{{InteractiveExample("CSS Demo: text-emphasis-style")}}

```css interactive-example-choice
text-emphasis-style: none;
```

```css interactive-example-choice
text-emphasis-style: triangle;
```

```css interactive-example-choice
text-emphasis-style: "x";
```

```css interactive-example-choice
text-emphasis-style: filled double-circle;
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

## Syntax

```css
/* Initial value */
text-emphasis-style: none; /* No emphasis marks */

/* <string> values */
text-emphasis-style: "x";
text-emphasis-style: "\25B2";
text-emphasis-style: "*";

/* Keyword values */
text-emphasis-style: filled;
text-emphasis-style: open;
text-emphasis-style: dot;
text-emphasis-style: circle;
text-emphasis-style: double-circle;
text-emphasis-style: triangle;
text-emphasis-style: filled sesame;
text-emphasis-style: open sesame;

/* Global values */
text-emphasis-style: inherit;
text-emphasis-style: initial;
text-emphasis-style: revert;
text-emphasis-style: revert-layer;
text-emphasis-style: unset;
```

### Werte

- `none`
  - : Keine Betonungsmarkierungen.
- `filled`
  - : Die Form ist mit einer soliden Farbe gefüllt. Wenn weder `filled` noch `open` vorhanden ist, ist dies der Standard.
- `open`
  - : Die Form ist hohl.
- `dot`
  - : Zeigt kleine Kreise als Markierungen. Der gefüllte Punkt ist `'•'` (`U+2022`), und der offene Punkt ist `'◦'` (`U+25E6`).
- `circle`
  - : Zeigt große Kreise als Markierungen. Der gefüllte Kreis ist `'●'` (`U+25CF`), und der offene Kreis ist `'○'` (`U+25CB`).
- `double-circle`
  - : Zeigt doppelte Kreise als Markierungen. Der gefüllte Doppelkegel ist `'◉'` (`U+25C9`), und der offene Doppelkegel ist `'◎'` (`U+25CE`).
- `triangle`
  - : Zeigt Dreiecke als Markierungen. Das gefüllte Dreieck ist `'▲'` (`U+25B2`), und das offene Dreieck ist `'△'` (`U+25B3`).
- `sesame`
  - : Zeigt Sesamkörner als Markierungen. Der gefüllte Sesam ist `'﹅'` (`U+FE45`), und der offene Sesam ist `'﹆'` (`U+FE46`).
- `<string>`
  - : Zeigt die angegebene Zeichenkette als Markierungen. Autoren sollten nicht mehr als ein _Zeichen_ in `<string>` angeben. Der UA kann Zeichenfolgen, die aus mehr als einem Graphem-Cluster bestehen, abschneiden oder ignorieren.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```css
h2 {
  -webkit-text-emphasis-style: sesame;
  text-emphasis-style: sesame;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die zugehörigen Eigenschaften {{cssxref('text-emphasis-color')}}, {{cssxref('text-emphasis')}}.
- Die Eigenschaft {{cssxref('text-emphasis-position')}}, die es ermöglicht, die Position der Betonungsmarkierungen festzulegen.
