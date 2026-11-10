---
title: "`:-moz-last-node` CSS-Pseudoklasse"
short-title: :-moz-last-node
slug: Web/CSS/Reference/Selectors/:-moz-last-node
l10n:
  sourceCommit: b4f42a2037bcb8f2daec61f6b3d92bfdd13e5386
---

{{Non-standard_header}}{{SeeCompatTable}}

Die **`:-moz-last-node`**-[CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element repräsentiert, das der letzte Kindknoten eines anderen Elements ist. Sie unterscheidet sich von {{cssxref(":last-child")}}, da sie nicht auf ein letztes Kindelement zutrifft, auf das Text folgt, der nicht nur aus Leerraum besteht.

> [!NOTE]
> Leerraum am Ende eines Elements wird bei der Bestimmung von `:-moz-last-node` ignoriert.

## Syntax

```css
:-moz-last-node {
  /* ... */
}
```

## Beispiele

### HTML

```html
<p>
  <span>This does not match.</span>
  <span>This matches!</span>
</p>

<p>
  <span>This doesn't match because it's followed by text.</span>
  Blahblah.
</p>
```

### CSS

```css
span:-moz-last-node {
  background-color: lime;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
