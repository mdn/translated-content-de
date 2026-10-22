---
title: CSS-Pseudoklasse `:local-link`
short-title: :local-link
slug: Web/CSS/Reference/Selectors/:local-link
l10n:
  sourceCommit: e59d26003fa9f0a91ae316fad08c5977cf69908b
---

{{SeeCompatTable}}

Die [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) **`:local-link`** repräsentiert einen Link zum selben Dokument. Sie trifft auf ein Element zu, das als Ausgangsanker eines Hyperlinks dient, dessen absolute Ziel-URL mit der URL des Dokuments übereinstimmt, zu dem das Element gehört.

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

Derzeit unterstützt kein Browser diese Funktion.

## Siehe auch

- Linkbezogene Pseudoklassen: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
- Modul [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
