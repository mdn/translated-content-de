---
title: :local-link
slug: Web/CSS/:local-link
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

{{SeeCompatTable}}

Die **`:local-link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert einen Link zum gleichen Dokument. Daher ist ein Element, das die Quellverankerung eines Hyperlinks ist, dessen Ziel-URL mit der absoluten URL des eigenen Dokuments des Elements übereinstimmt.

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

Derzeit wird dieses Feature von keinem Browser unterstützt.

## Siehe auch

- Pseudoklassen im Zusammenhang mit Links: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors) Modul
