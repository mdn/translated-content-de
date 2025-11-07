---
title: :left
slug: Web/CSS/Reference/Selectors/:left
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`:left`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), in Verbindung mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) verwendet, repräsentiert alle linken Seiten eines gedruckten Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "left" (links) oder "right" (rechts) ist, wird durch die hauptsächliche Schreibrichtung des Dokuments bestimmt. Wenn beispielsweise die erste Seite eine Schreibrichtung von links nach rechts hat, dann wird sie eine {{Cssxref(":right")}}-Seite sein; wenn sie eine Schreibrichtung von rechts nach links hat, dann wird sie eine `:left`-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird betroffen sein.

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
