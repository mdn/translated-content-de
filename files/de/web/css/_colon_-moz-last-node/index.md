---
title: :-moz-last-node
slug: Web/CSS/:-moz-last-node
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}{{SeeCompatTable}}

Die **`:-moz-last-node`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die jedes Element repräsentiert, das das letzte Kind eines anderen Elements ist. Sie unterscheidet sich von {{cssxref(":last-child")}}, da sie kein letztes Kindelement mit (nicht-leerem) Text nach sich selbst erfasst.

> [!NOTE]
> Jeder Leerraum am Ende eines Elements wird bei der Bestimmung von `:-moz-last-node` ignoriert.

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
