---
title: text-underline-offset
slug: Web/CSS/Reference/Properties/text-underline-offset
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`text-underline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt die Versatzdistanz einer unterstrichenen Textdekoration (angewandt mit {{cssxref("text-decoration")}}) von ihrer ursprünglichen Position fest.

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

`text-underline-offset` ist nicht Bestandteil der {{cssxref('text-decoration')}} Kurzschreibweise. Während ein Element mehrere `text-decoration` Linien haben kann, beeinflusst `text-underline-offset` nur die Unterstreichung und **nicht** andere mögliche Linienstilverzierungen wie `overline` oder `line-through`.

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

Die Eigenschaft `text-underline-offset` wird als ein einzelner Wert aus der untenstehenden Liste angegeben.

### Werte

- `auto`
  - : Der Browser wählt den geeigneten Versatz für Unterstreichungen.
- `<length>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('length')}} an, der die Empfehlung der Schriftdatei und die Vorgabe des Browsers überschreibt. Es wird empfohlen, `em` Einheiten zu verwenden, sodass der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('percentage')}} von **1 em** in der Schrift des Elements an. Ein Prozentsatz wird als relativer Wert geerbt und skaliert daher mit Änderungen der Schriftgröße. Bei einer bestimmten Anwendung dieser Eigenschaft ist der Versatz über die gesamte Box konstant, auf die die Unterstreichung angewendet wird, auch wenn es Unterelemente mit unterschiedlichen Schriftgrößen oder vertikaler Ausrichtung gibt.

## Offizielle Definition

{{CSSInfo}}

## Offizielle Syntax

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
