---
title: :left
slug: Web/CSS/:left
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:left`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), die mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet wird, repräsentiert alle linken Seiten eines gedruckten Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "left" oder "right" ist, wird durch die Hauptrichtung des Schreibens des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptrichtung von links-nach-rechts (left-to-right) hat, dann wird sie eine {{Cssxref(":right")}}-Seite sein; wenn sie eine Hauptrichtung von rechts-nach-links (right-to-left) hat, dann wird sie eine `:left`-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

## Syntax

```css
:left {
  /* ... */
}
```

## Beispiele

### Festlegen eines Abstands für linke Seiten

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
