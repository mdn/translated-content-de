---
title: ":right"
slug: Web/CSS/:right
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule), repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Wählt alle rechten Seiten beim Drucken aus */
@page :right {
  margin: 2in 3in;
}
```

Ob eine gegebene Seite „left“ oder „right“ ist, wird durch die Hauptschreibrichtung des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptschreibrichtung von links nach rechts hat, wird sie eine `:right`-Seite sein; wenn sie eine Hauptschreibrichtung von rechts nach links hat, wird sie eine {{Cssxref(":left")}}-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird betroffen sein.

## Syntax

```css
:right {
  /* ... */
}
```

## Beispiele

### Festlegen von Rändern für rechte Seiten

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
