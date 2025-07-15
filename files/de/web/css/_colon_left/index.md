---
title: :left
slug: Web/CSS/:left
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:left`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), repräsentiert alle auf der linken Seite gedruckten Seiten eines Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "left" oder "right" ist, wird durch die Hauptrichtung des Schreibens des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptrichtung von links nach rechts hat, dann wird sie eine {{Cssxref(":right")}} Seite sein; hat sie eine Hauptrichtung von rechts nach links, dann wird sie eine `:left` Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

## Syntax

```css
:left {
  /* ... */
}
```

## Beispiele

### Festlegung eines Rands für linke Seiten

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
