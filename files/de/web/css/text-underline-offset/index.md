---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
l10n:
  sourceCommit: 4ec412012be0b083ebcae4a56b425f49901143f2
---

Die **`text-underline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft setzt die Versatzdistanz einer Unterstreichungslinie für Textdekorationen (angewendet mit {{cssxref("text-decoration")}}) von ihrer ursprünglichen Position.

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

`text-underline-offset` ist kein Bestandteil der {{cssxref('text-decoration')}} Kurzschrift. Während ein Element mehrere `text-decoration` Linien haben kann, beeinflusst `text-underline-offset` nur die Unterstreichung und **nicht** andere mögliche Linien-Dekorationsoptionen wie `overline` oder `line-through`.

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

Die `text-underline-offset` Eigenschaft wird als ein einzelner Wert aus der unten aufgeführten Liste angegeben.

### Werte

- `auto`
  - : Der Browser wählt den passenden Versatz für Unterstreichungen.
- `<length>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('length')}} an und überschreibt den Vorschlag der Schriftdatei und die Standardeinstellung des Browsers. Es wird empfohlen, `em` Einheiten zu verwenden, damit der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('percentage')}} von **1 em** in der Schriftart des Elements an. Ein Prozentwert wird als relativer Wert geerbt und skaliert daher mit Änderungen in der Schriftart. Für eine gegebene Anwendung dieser Eigenschaft ist der Versatz über das gesamte Box, auf das die Unterstreichung angewendet wird, konstant, selbst wenn es untergeordnete Elemente mit unterschiedlichen Schriftgrößen oder vertikaler Ausrichtung gibt.

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
