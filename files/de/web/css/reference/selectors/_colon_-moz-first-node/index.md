---
title: "`:-moz-first-node` CSS-Pseudoklasse"
short-title: :-moz-first-node
slug: Web/CSS/Reference/Selectors/:-moz-first-node
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}{{SeeCompatTable}}

Die **`:-moz-first-node`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element repräsentiert, das der erste Kindknoten eines anderen Elements ist. Sie unterscheidet sich von {{Cssxref(":first-child")}}, da sie nicht auf ein erstes Kindelement zutrifft, vor dem Text steht, der nicht ausschließlich aus Leerraum besteht.

> [!NOTE]
> Leerraum am Anfang eines Elements wird bei der Bestimmung von `:-moz-first-node` ignoriert.

## Syntax

```css
:-moz-first-node {
  /* ... */
}
```

## Beispiele

### CSS

```css
span:-moz-first-node {
  background-color: lime;
}
```

### HTML

```html
<p>
  <span>This matches!</span>
  <span>This doesn't match.</span>
</p>

<p>
  Blahblah.
  <span>This doesn't match because it's preceded by text.</span>
</p>
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

Nicht Bestandteil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
