---
title: :-moz-last-node
slug: Web/CSS/:-moz-last-node
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{SeeCompatTable}}

Die **`:-moz-last-node`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die ein beliebiges Element darstellt, das das letzte Kindelement eines anderen Elements ist. Sie unterscheidet sich von {{cssxref(":last-child")}}, da sie kein letztes Kind-Element berücksichtigt, das (nicht-weißen) Text danach hat.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-first-node")}}
- {{cssxref(":last-child")}}
