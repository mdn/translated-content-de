---
title: :left
slug: Web/CSS/Reference/Selectors/:left
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Die **`:left`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule), repräsentiert alle linken Seiten eines gedruckten Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine gegebene Seite "links" oder "rechts" ist, wird durch die Hauptschreibrichtung des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptschreibrichtung von links-nach-rechts hat, dann wird sie eine {{Cssxref(":right")}} Seite sein; wenn sie eine Hauptschreibrichtung von rechts-nach-links hat, dann wird sie eine `:left` Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} des _Seitenrahmens_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur der Seitenrahmen, nicht der Dokumenteninhalt auf der Seite, wird beeinflusst.

## Syntax

```css
:left {
  /* ... */
}
```

## Beispiele

### Einen Rand für die linken Seiten festlegen

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
