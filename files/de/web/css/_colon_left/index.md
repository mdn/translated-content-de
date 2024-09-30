---
title: ":left"
slug: Web/CSS/:left
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:left`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule), repräsentiert alle linken Seiten eines gedruckten Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine gegebene Seite "left" oder "right" ist, wird durch die Hauptschreibrichtung des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptschreibrichtung von links nach rechts hat, wird es eine {{Cssxref(":right")}} Seite sein; wenn sie eine Hauptschreibrichtung von rechts nach links hat, dann wird es eine `:left` Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

## Syntax

```css
:left {
  /* ... */
}
```

## Beispiele

### Einen Rand für linke Seiten festlegen

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
