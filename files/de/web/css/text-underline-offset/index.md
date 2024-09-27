---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{CSSRef}}

Die **`text-underline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Versatzabstand einer Unterstrich-Textdekoration (angewendet mit {{cssxref("text-decoration")}}) von ihrer ursprünglichen Position fest.

{{EmbedInteractiveExample("pages/css/text-underline-offset.html")}}

`text-underline-offset` ist nicht Teil der {{cssxref('text-decoration')}} Kurzschrift. Während ein Element mehrere `text-decoration` Linien haben kann, beeinflusst `text-underline-offset` nur das Unterstreichen und **nicht** andere mögliche Liniendekorationsoptionen wie `overline` oder `line-through`.

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

Die `text-underline-offset` Eigenschaft wird als ein einzelner Wert aus der folgenden Liste angegeben.

### Werte

- `auto`
  - : Der Browser wählt den geeigneten Versatz für Unterstreichungen.
- `<length>`
  - : Spezifiziert den Versatz von Unterstreichungen als ein {{cssxref('length')}}, überschreibt den Vorschlag der Schriftdatei und den Standardwert des Browsers. Es wird empfohlen, `em` Einheiten zu verwenden, damit sich der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Spezifiziert den Versatz von Unterstreichungen als ein {{cssxref('percentage')}} von **1 em** in der Schrift des Elements. Ein Prozentsatz wird als relativer Wert vererbt und skaliert somit mit Änderungen in der Schrift. Für eine gegebene Anwendung dieser Eigenschaft ist der Versatz über die gesamte Box konstant, auf die der Unterstrich angewendet wird, selbst wenn es untergeordnete Elemente mit unterschiedlichen Schriftgrößen oder vertikaler Ausrichtung gibt.

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
