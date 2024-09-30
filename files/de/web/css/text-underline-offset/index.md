---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{CSSRef}}

Die CSS-Eigenschaft **`text-underline-offset`** legt die Versatzentfernung einer unterstrichenen Textdekoration fest, die mit {{cssxref("text-decoration")}} angewendet wird.

{{EmbedInteractiveExample("pages/css/text-underline-offset.html")}}

`text-underline-offset` ist kein Bestandteil der Abkürzung {{cssxref('text-decoration')}}. Während ein Element mehrere `text-decoration`-Linien haben kann, wirkt sich `text-underline-offset` nur auf Unterstreichungen aus und **nicht** auf andere mögliche Linieneffekte wie `overline` oder `line-through`.

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

Die Eigenschaft `text-underline-offset` wird als ein einzelner Wert aus der unten stehenden Liste angegeben.

### Werte

- `auto`
  - : Der Browser wählt den passenden Versatz für Unterstreichungen.
- `<length>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('length')}} an und überschreibt den Vorschlag durch die Schriftartdatei sowie die Standardeinstellung des Browsers. Es wird empfohlen, `em`-Einheiten zu verwenden, damit sich der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Gibt den Versatz von Unterstreichungen als {{cssxref('percentage')}} von **1 em** in der Schriftart des Elements an. Ein Prozentsatz wird als relativer Wert vererbt und skaliert daher mit Änderungen der Schrift. Für eine bestimmte Anwendung dieser Eigenschaft bleibt der Versatz über die gesamte Box, auf die die Unterstreichung angewendet wird, konstant, auch wenn es Kindelemente mit unterschiedlichen Schriftgrößen oder vertikaler Ausrichtung gibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration von text-underline-offset

```html
<p class="oneline">Here's some text with an offset wavy red underline!</p>
<br />
<p class="twolines">
  This text has lines both above and below it. Only the bottom one is offset.
</p>
```

```css
p {
  text-decoration: underline wavy red;
  text-underline-offset: 1em;
}

.twolines {
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
