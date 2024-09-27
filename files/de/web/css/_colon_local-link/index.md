---
title: ":local-link"
slug: Web/CSS/:local-link
l10n:
  sourceCommit: 4e002d26cb032c915aeee366f922f23cbacd8bf1
---

{{CSSRef}}

Die **`:local-link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert einen Link zum gleichen Dokument. Daher ist ein Element die Quelle eines Hyperlinks, dessen absolutes URL-Ziel mit der URL des eigenen Dokuments übereinstimmt.

```css
/* Selects any <a> that links to the current document */
a:local-link {
  color: green;
}
```

## Syntax

```css
:local-link {
  /* ... */
}
```

## Beispiele

### HTML

```html
<a href="#target">This is a link on the current page.</a><br />
<a href="https://example.com">This is an external link</a><br />
```

### CSS

```css
a:local-link {
  color: green;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

Diese Funktion ist ein Vorschlag, der in die Spezifikation integriert wurde. Derzeit unterstützt kein Browser sie.

## Siehe auch

- Link-bezogene Pseudoklassen: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
