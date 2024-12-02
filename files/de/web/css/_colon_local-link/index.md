---
title: ":local-link"
slug: Web/CSS/:local-link
l10n:
  sourceCommit: 83d1dcd39940a7a2c48dec4ae817bac77fbbeca0
---

{{CSSRef}}{{SeeCompatTable}}

Die **`:local-link`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert einen Link zum selben Dokument. Daher ist ein Element, das der Quellanker eines Hyperlinks ist, dessen Ziel-URL absolut mit der Dokument-URL des Elements übereinstimmt.

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

Derzeit hat kein Browser diese Funktion implementiert.

## Siehe auch

- Pseudoklassen im Zusammenhang mit Links: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
