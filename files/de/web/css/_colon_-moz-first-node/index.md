---
title: :-moz-first-node
slug: Web/CSS/:-moz-first-node
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Die **`:-moz-first-node`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein beliebiges Element darstellt, das das erste Kindelement eines anderen Elements ist. Sie unterscheidet sich von {{Cssxref(":first-child")}}, da sie kein erstes Kindelement erfasst, dem (nicht-weißer) Text vorausgeht.

> [!NOTE]
> Jeglicher Leerraum am Anfang eines Elements wird bei der Bestimmung von `:-moz-first-node` ignoriert.

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
