---
title: :-moz-last-node
slug: Web/CSS/Reference/Selectors/:-moz-last-node
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}{{SeeCompatTable}}

Die **`:-moz-last-node`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element repräsentiert, das das letzte Kindknoten eines anderen Elements ist. Sie unterscheidet sich von {{cssxref(":last-child")}}, da sie kein letztes Kindelement berücksichtigt, wenn (Nicht-Leerraum-) Text danach vorhanden ist.

> [!NOTE]
> Jeglicher Leerraum am Ende eines Elements wird für die Bestimmung von `:-moz-last-node` ignoriert.

## Syntax

```css
:-moz-last-node {
  /* ... */
}
```

## Beispiele

### CSS

```css
span:-moz-last-node {
  background-color: lime;
}
```

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

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
