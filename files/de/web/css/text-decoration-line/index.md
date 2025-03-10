---
title: text-decoration-line
slug: Web/CSS/text-decoration-line
l10n:
  sourceCommit: 429d45679a29f386af0ddfcf2a64498843c3e1e5
---

{{CSSRef}}

Die **`text-decoration-line`** [CSS](/de/docs/Web/CSS)-Eigenschaft legt die Art der Dekoration fest, die auf Text in einem Element angewendet wird, wie zum Beispiel eine Unterstreichung oder ein Überstrich.

{{InteractiveExample("CSS Demo: text-decoration-line")}}

```css interactive-example-choice
text-decoration-line: none;
```

```css interactive-example-choice
text-decoration-line: underline;
```

```css interactive-example-choice
text-decoration-line: overline;
```

```css interactive-example-choice
text-decoration-line: line-through;
```

```css interactive-example-choice
text-decoration-line: underline overline;
```

```css interactive-example-choice
text-decoration-line: underline line-through;
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

Wenn mehrere Zeilendekorations-Eigenschaften auf einmal festgelegt werden, ist es möglicherweise praktischer, die Kurzform-Eigenschaft {{cssxref("text-decoration")}} zu verwenden.

## Syntax

```css
/* Single keyword */
text-decoration-line: none;
text-decoration-line: underline;
text-decoration-line: overline;
text-decoration-line: line-through;
text-decoration-line: blink;

/* Multiple keywords */
text-decoration-line: underline overline; /* Two decoration lines */
text-decoration-line: overline underline line-through; /* Multiple decoration lines */

/* Global values */
text-decoration-line: inherit;
text-decoration-line: initial;
text-decoration-line: revert;
text-decoration-line: revert-layer;
text-decoration-line: unset;
```

Die `text-decoration-line`-Eigenschaft wird entweder als `none` oder als **eine oder mehrere** der unten angegebenen, durch Leerzeichen getrennten Werte angegeben.

### Werte

- `none`
  - : Erzeugt keine Textdekoration.
- `underline`
  - : Jede Textzeile hat eine dekorative Linie unterhalb.
- `overline`
  - : Jede Textzeile hat eine dekorative Linie oberhalb.
- `line-through`
  - : Jede Textzeile hat eine dekorative Linie, die durch die Mitte verläuft.
- `blink`
  - : Der Text blinkt (wechselt zwischen sichtbar und unsichtbar). Konforme Benutzeragenten dürfen den Text nicht blinken lassen. Dieser Wert ist zugunsten von [CSS-Animationen](/de/docs/Web/CSS/animation) **veraltet**.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einfaches Beispiel

```html
<p class="wavy">Here's some text with wavy red underline!</p>
<p class="both">This text has lines both above and below it.</p>
```

```css
.wavy {
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: red;
}

.both {
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Wenn mehrere Zeilendekorations-Eigenschaften auf einmal festgelegt werden, ist es möglicherweise praktischer, die Kurzform-Eigenschaft {{cssxref("text-decoration")}} zu verwenden, die auch Folgendes beinhaltet:
  - {{cssxref("text-decoration-style")}}
  - {{cssxref("text-decoration-color")}}
  - {{cssxref("text-decoration-thickness")}}
- {{cssxref("text-underline-offset")}}
