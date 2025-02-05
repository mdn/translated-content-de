---
title: ":right"
slug: Web/CSS/:right
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule), repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "left" oder "right" ist, wird durch die Hauptrichtung des Schreibens im Dokument bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptrichtung von links nach rechts hat, wird sie eine `:right`-Seite sein; wenn sie eine Hauptrichtung von rechts nach links hat, wird sie eine {{Cssxref(":left")}}-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} des _Seitenrahmens_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur der Seitenrahmen, nicht der Dokumentinhalt auf der Seite, wird betroffen sein.

## Syntax

```css
:right {
  /* ... */
}
```

## Beispiele

### Festlegen der Ränder für rechte Seiten

```css
@page :right {
  margin: 2in 3in;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{ Cssxref("@page") }}
- Andere seitenspezifische Pseudoklassen: {{ Cssxref(":first") }}, {{ Cssxref(":left") }}
