---
title: ":right"
slug: Web/CSS/:right
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule), repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "links" oder "rechts" ist, wird durch die Hauptschriftrichtung des Dokuments bestimmt. Beispielsweise, wenn die erste Seite eine Hauptschriftrichtung von links nach rechts hat, dann wird sie eine `:right` Seite sein; wenn sie eine Hauptschriftrichtung von rechts nach links hat, dann wird sie eine {{Cssxref(":left")}} Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

## Syntax

```css
:right {
  /* ... */
}
```

## Beispiele

### Ränder für rechte Seiten festlegen

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
- Andere seitenbezogene Pseudoklassen: {{ Cssxref(":first") }}, {{ Cssxref(":left") }}
