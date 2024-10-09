---
title: text-underline-offset
slug: Web/CSS/text-underline-offset
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

Die **`text-underline-offset`** [CSS](/de/docs/Web/CSS) Eigenschaft legt den Versatzabstand einer Unterstrich-Textdekoration (angewandt mit {{cssxref("text-decoration")}}) von ihrer ursprünglichen Position fest.

{{EmbedInteractiveExample("pages/css/text-underline-offset.html")}}

`text-underline-offset` ist kein Teil der {{cssxref('text-decoration')}} Kurzschreibweise. Während ein Element mehrere `text-decoration` Linien haben kann, beeinflusst `text-underline-offset` nur die Unterstreichung und **nicht** andere mögliche Linien-Dekorationsoptionen wie `overline` oder `line-through`.

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

Die `text-underline-offset` Eigenschaft wird als einzelner Wert aus der unten aufgeführten Liste spezifiziert.

### Werte

- `auto`
  - : Der Browser wählt den geeigneten Versatz für Unterstriche.
- `<length>`
  - : Spezifiziert den Versatz von Unterstrichen als {{cssxref('length')}}, wobei der Vorschlag der Schriftartdatei und die Standardeinstellung des Browsers überschrieben werden. Es wird empfohlen, `em` Einheiten zu verwenden, damit der Versatz mit der Schriftgröße skaliert.
- `<percentage>`
  - : Spezifiziert den Versatz von Unterstrichen als {{cssxref('percentage')}} von **1 em** in der Schriftart des Elements. Ein Prozentsatz erbt als relativer Wert und skaliert daher mit Änderungen der Schrift. Für eine gegebene Anwendung dieser Eigenschaft ist der Versatz über das gesamte Kästchen hinweg konstant, auf das der Unterstrich angewendet wird, selbst wenn es Kindelemente mit unterschiedlichen Schriftgrößen oder vertikalen Ausrichtungen gibt.

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
