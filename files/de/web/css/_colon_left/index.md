---
title: ":left"
slug: Web/CSS/:left
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:left`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), zusammen mit der {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/At-rule) verwendet, repräsentiert alle linken Seiten eines gedruckten Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine gegebene Seite "links" oder "rechts" ist, wird durch die hauptsächliche Schreibrichtung des Dokuments bestimmt. Zum Beispiel wird eine Seite mit einer hauptsächlichen Schreibrichtung von links nach rechts eine {{Cssxref(":right")}} Seite sein; hat sie eine hauptsächliche Schreibrichtung von rechts nach links, wird es eine `:left` Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

## Syntax

```css
:left {
  /* ... */
}
```

## Beispiele

### Festlegen eines Randes für linke Seiten

```css
@page :left {
  margin: 2in 3in;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ Cssxref("@page") }}
- Andere seitenbezogene Pseudoklassen: {{ Cssxref(":first") }}, {{ Cssxref(":right") }}
