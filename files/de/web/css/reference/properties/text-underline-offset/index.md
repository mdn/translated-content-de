---
title: "`text-underline-offset` CSS property"
short-title: text-underline-offset
slug: Web/CSS/Reference/Properties/text-underline-offset
l10n:
  sourceCommit: c0c85c3dc0d6ff4247c85b0144149e584d74b625
---

Die **`text-underline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Versatzabstand einer Unterstreichungslinie (angewendet mittels {{cssxref("text-decoration")}}) von ihrer ursprünglichen Position fest.

{{InteractiveExample("CSS Demo: text-underline-offset")}}

```css interactive-example-choice
text-underline-offset: auto;
```

```css interactive-example-choice
text-underline-offset: 8px;
```

```css interactive-example-choice
text-underline-offset: -0.5rem;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">And after all we are only ordinary</p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
  text-decoration-line: underline;
  text-decoration-color: red;
}
```

`text-underline-offset` ist nicht Teil der {{cssxref('text-decoration')}} Kurzform. Während ein Element mehrere `text-decoration` Linien haben kann, wirkt sich `text-underline-offset` nur auf die Unterstreichung aus, und **nicht** auf andere mögliche Linieneffekte wie `overline` oder `line-through`.

## Syntax

```css
/* Single keyword */
text-underline-offset: auto;

/* length */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* percentage */
text-underline-offset: 20%;

/* Global values */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: revert-layer;
text-underline-offset: unset;
```

### Werte

Diese Eigenschaft wird als einer der folgenden Werte angegeben:

- `auto`
  - : Der Browser wählt den passenden Versatz für Unterstreichungen.
- `<length>`
  - : Bestimmt den Versatz der Unterstreichungen als {{cssxref('length')}}, überschreibt den Vorschlag der Schriftdatei und die Standardeinstellung des Browsers. Es wird empfohlen, `em` Einheiten zu verwenden, damit sich der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Bestimmt den Versatz der Unterstreichungen als {{cssxref('percentage')}} von **1 em** in der Schrift des Elements. Ein Prozentsatz wird als relativer Wert vererbt und skaliert daher mit Änderungen in der Schrift. Bei einer Anwendung dieser Eigenschaft ist der Versatz über die gesamte Box, auf die die Unterstreichung angewendet wird, konstant, selbst wenn es Kindelemente mit unterschiedlichen Schriftgrößen oder vertikaler Ausrichtung gibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration von text-underline-offset

```html
<p class="one-line">Here's some text with an offset wavy red underline!</p>
<br />
<p class="two-lines">
  This text has lines both above and below it. Only the bottom one is offset.
</p>
```

```css
p {
  text-decoration: underline wavy red;
  text-underline-offset: 1em;
}

.two-lines {
  text-decoration-color: purple;
  text-decoration-line: underline overline;
}
```

{{EmbedLiveSample('Examples')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("text-decoration")}}
- {{cssxref("text-decoration-thickness")}}
