---
title: ":-moz-last-node"
slug: Web/CSS/:-moz-last-node
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{Non-standard_header}}{{CSSRef}}{{SeeCompatTable}}

Die **`:-moz-last-node`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die jedes Element darstellt, das das letzte Kindknoten eines anderen Elements ist. Sie unterscheidet sich von {{cssxref(":last-child")}}, da sie kein Element als letztes Kind zuordnet, wenn nach ihm (nicht-leerer) Text vorhanden ist.

> [!NOTE]
> Jeglicher Leerraum am Ende eines Elements wird bei der Bestimmung von `:-moz-last-node` ignoriert.

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

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
