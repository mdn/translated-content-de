---
title: "`text-underline-offset` CSS property"
short-title: text-underline-offset
slug: Web/CSS/Reference/Properties/text-underline-offset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

Die **`text-underline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Versatzabstand einer Unterstreichungslinie für Textdekorationen fest, die mit {{cssxref("text-decoration")}} angewendet werden, von ihrer ursprünglichen Position aus.

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

`text-underline-offset` ist kein Bestandteil der Kurzschrift von {{cssxref('text-decoration')}}. Während ein Element mehrere `text-decoration` Linien haben kann, wirkt sich `text-underline-offset` nur auf Unterstreichungen aus und **nicht** auf andere mögliche Liniendekorationsoptionen wie `overline` oder `line-through`.

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

Die Eigenschaft `text-underline-offset` wird als einzelner Wert aus der folgenden Liste angegeben.

### Werte

- `auto`
  - : Der Browser wählt den geeigneten Versatz für Unterstreichungen.
- `<length>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('length')}} an, der den Vorschlag der Schriftdatei und den Standard des Browsers überschreibt. Es wird empfohlen, `em`-Einheiten zu verwenden, damit der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('percentage')}} von **1 em** in der Schrift des Elements an. Ein Prozentwert wird als relativer Wert vererbt und skaliert daher mit Änderungen in der Schrift. Für eine bestimmte Anwendung dieser Eigenschaft ist der Versatz im gesamten Bereich konstant, auf den die Unterstreichung angewendet wird, selbst wenn es Kindelemente mit unterschiedlichen Schriftgrößen oder vertikalen Ausrichtungen gibt.

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
