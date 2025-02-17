---
title: ":right"
slug: Web/CSS/:right
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), die mit der {{cssxref("@page")}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) verwendet wird, repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "left" oder "right" ist, wird durch die Hauptrichtung des Schreibens im Dokument bestimmt. Zum Beispiel: Wenn die erste Seite eine Hauptrichtung von links nach rechts hat, ist es eine `:right`-Seite; wenn die Hauptrichtung von rechts nach links ist, wird sie eine {{Cssxref(":left")}}-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Inhalt des Dokuments auf der Seite, wird beeinflusst.

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
