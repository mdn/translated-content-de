---
title: :local-link
slug: Web/CSS/:local-link
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

Die **`:local-link`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) repräsentiert einen Link zum gleichen Dokument. Ein Element, das der Quellanker eines Hyperlinks ist, dessen Ziel-URL mit der absoluten URL des eigenen Dokuments übereinstimmt.

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

- Link-bezogene Pseudo-Klassen: {{ cssxref(":link") }}, {{ cssxref(":visited") }}, {{ cssxref(":hover") }}, {{ cssxref(":active") }}, {{ cssxref(":any-link") }}
