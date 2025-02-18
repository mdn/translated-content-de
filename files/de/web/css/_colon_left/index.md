---
title: :left
slug: Web/CSS/:left
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`:left`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), verwendet mit der {{cssxref("@page")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), repräsentiert alle linken Seiten eines gedruckten Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "left" (links) oder "right" (rechts) ist, wird durch die Hauptrichtung des Textflusses im Dokument bestimmt. Wenn zum Beispiel die erste Seite eine Hauptrichtung von links nach rechts hat, dann wird sie eine {{Cssxref(":right")}}-Seite sein; hat sie eine Hauptrichtung von rechts nach links, dann wird sie eine `:left`-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und es wird nur die Seitenbox beeinflusst, nicht der Inhalt des Dokuments auf der Seite.

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
