---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
l10n:
  sourceCommit: 37163d27e0625a83a3f8633fe58b9041867adeaa
---

{{CSSRef}}

Die **`text-underline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Versatzabstand einer Unterstreichungslinien-Dekoration (angewendet mit {{cssxref("text-decoration")}}) von ihrer ursprünglichen Position fest.

{{EmbedInteractiveExample("pages/css/text-underline-offset.html")}}

`text-underline-offset` ist kein Bestandteil der {{cssxref('text-decoration')}}-Kurzschreibweise. Während ein Element mehrere `text-decoration`-Linien besitzen kann, betrifft `text-underline-offset` nur Unterstreichungen und **nicht** andere mögliche Liniendekorationsoptionen wie `overline` oder `line-through`.

## Syntax

```css
/* Einzelnes Schlüsselwort */
text-underline-offset: auto;

/* Länge */
text-underline-offset: 0.1em;
text-underline-offset: 3px;

/* Prozentwert */
text-underline-offset: 20%;

/* Globale Werte */
text-underline-offset: inherit;
text-underline-offset: initial;
text-underline-offset: revert;
text-underline-offset: revert-layer;
text-underline-offset: unset;
```

Die Eigenschaft `text-underline-offset` wird als ein einzelner Wert aus der untenstehenden Liste spezifiziert.

### Werte

- `auto`
  - : Der Browser wählt den geeigneten Versatz für Unterstreichungen.
- `<length>`
  - : Gibt den Versatz der Unterstreichungen als {{cssxref('length')}} an und überschreibt den Vorschlag aus der Schriftdatei und den Standard des Browsers. Es wird empfohlen, `em` Einheiten zu verwenden, damit sich der Versatz an die Schriftgröße anpasst.
- `<percentage>`
  - : Gibt den Versatz der Unterstreichungen als {{cssxref('percentage')}} von **1 em** der Schriftart des Elements an. Ein Prozentsatz wird als relativer Wert vererbt und skaliert daher mit Änderungen der Schrift. Für eine bestimmte Anwendung dieser Eigenschaft ist der Versatz konstant über die gesamte Box, auf die die Unterstreichung angewendet wird, auch wenn es Kindelemente mit unterschiedlichen Schriftgrößen oder vertikaler Ausrichtung gibt.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Demonstration von text-underline-offset

```html
<p class="oneline">Here’s some text with an offset wavy red underline!</p>
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
