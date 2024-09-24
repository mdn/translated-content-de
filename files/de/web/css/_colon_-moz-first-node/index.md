---
title: ":-moz-first-node"
slug: Web/CSS/:-moz-first-node
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{Non-standard_header}}{{CSSRef}}{{SeeCompatTable}}

Die **`:-moz-first-node`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein beliebiges Element darstellt, das das erste Kindknoten eines anderen Elements ist. Sie unterscheidet sich von {{Cssxref(":first-child")}}, da sie nicht mit einem Erstkindelement übereinstimmt, wenn sich (nicht leere) Text vor ihm befindet.

> [!NOTE]
> Jegliche Leerzeichen am Anfang eines Elements werden bei der Bestimmung von `:-moz-first-node` ignoriert.

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
  <span>Dies passt!</span>
  <span>Dies passt nicht.</span>
</p>

<p>
  Blahblah.
  <span>Dies passt nicht, weil es von Text vorangegangen wird.</span>
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
