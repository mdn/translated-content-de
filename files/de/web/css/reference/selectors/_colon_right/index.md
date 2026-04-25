---
title: "`:right` CSS-Pseudoklasse"
short-title: :right
slug: Web/CSS/Reference/Selectors/:right
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), die mit dem {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) verwendet wird, repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine gegebene Seite "links" oder "rechts" ist, wird durch die Hauptrichtung des Schreibens im Dokument bestimmt. Beispielsweise, wenn die erste Seite eine Hauptrichtung von links nach rechts hat, wird sie eine `:right` Seite sein; wenn sie eine Hauptrichtung von rechts nach links hat, wird sie eine {{Cssxref(":left")}} Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} der _Seitenbox_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur die Seitenbox, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

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
