---
title: ":-moz-first-node"
slug: Web/CSS/:-moz-first-node
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{Non-standard_header}}{{CSSRef}}{{SeeCompatTable}}

Die **`:-moz-first-node`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die jedes Element repräsentiert, das das erste Kindknoten eines anderen Elements ist. Sie unterscheidet sich von {{Cssxref(":first-child")}}, da sie nicht mit einem ersten Kind-Element übereinstimmt, das davor (nicht nur Leerraum-) Text hat.

> [!NOTE]
> Jeder Leerraum am Anfang eines Elements wird bei der Bestimmung von `:-moz-first-node` ignoriert.

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
