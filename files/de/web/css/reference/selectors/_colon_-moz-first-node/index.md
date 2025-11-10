---
title: :-moz-first-node
slug: Web/CSS/Reference/Selectors/:-moz-first-node
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}{{SeeCompatTable}}

Die **`:-moz-first-node`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element repräsentiert, das das erste Kindknoten eines anderen Elements ist. Sie unterscheidet sich von {{Cssxref(":first-child")}}, da sie kein erstes Kind-Element abgleicht, das (nicht-leeren) Text davor hat.

> [!NOTE]
> Jegliche Leerzeichen zu Beginn eines Elements werden bei der Bestimmung von `:-moz-first-node` ignoriert.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-last-node")}}
- {{cssxref(":first-child")}}
