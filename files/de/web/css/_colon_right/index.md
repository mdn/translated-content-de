---
title: :right
slug: Web/CSS/:right
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit dem {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), repräsentiert alle rechten Seiten eines ausgedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine gegebene Seite eine "linke" oder "rechte" ist, wird durch die Hauptschreibrichtung des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptschreibrichtung von links nach rechts hat, dann wird sie eine `:right` Seite sein; hat sie eine Hauptschreibrichtung von rechts nach links, dann wird sie eine {{Cssxref(":left")}} Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

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
- Andere seitenbezogene Pseudoklassen: {{ Cssxref(":first") }}, {{ Cssxref(":left") }}
