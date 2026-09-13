---
title: "`text-underline-offset` CSS property"
short-title: text-underline-offset
slug: Web/CSS/Reference/Properties/text-underline-offset
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Die [CSS](/de/docs/Web/CSS)-Eigenschaft **`text-underline-offset`** legt den Abstand einer Unterstreichungs-Textdekorationslinie (angewendet mit {{cssxref("text-decoration")}}) von ihrer ursprünglichen Position fest.

`text-underline-offset` ist nicht Teil der Kurzschreibweise {{cssxref('text-decoration')}}. Ein Element kann zwar mehrere `text-decoration`-Linien haben, `text-underline-offset` beeinflusst jedoch nur Unterstreichungen und **nicht** andere mögliche Liniendekorationsoptionen wie `overline` oder `line-through`.

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
  - : Der Browser wählt den geeigneten Versatz für Unterstreichungen.
- `<length>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('length')}} an und überschreibt damit den Vorschlag der Schriftdatei sowie den Browserstandard. Es wird empfohlen, `em`-Einheiten zu verwenden, damit der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('percentage')}} von **1 em** in der Schriftart des Elements an. Ein Prozentsatz wird als relativer Wert geerbt und skaliert daher mit Änderungen der Schriftart. Bei einer bestimmten Anwendung dieser Eigenschaft ist der Versatz über die gesamte Box hinweg, auf die die Unterstreichung angewendet wird, konstant, selbst wenn es Kindelemente mit unterschiedlichen Schriftgrößen oder vertikaler Ausrichtung gibt.

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
