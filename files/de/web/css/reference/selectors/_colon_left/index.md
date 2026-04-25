---
title: "`:left` CSS-Pseudoklasse"
short-title: :left
slug: Web/CSS/Reference/Selectors/:left
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Die **`:left`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules), repräsentiert alle linken Seiten eines gedruckten Dokuments.

```css
/* Selects any left-hand pages when printing */
@page :left {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "left" oder "right" ist, wird durch die Haupt-Schreibrichtung des Dokuments bestimmt. Beispielsweise, wenn die erste Seite eine Haupt-Schreibrichtung von links nach rechts hat, dann wird es eine {{Cssxref(":right")}} Seite sein; wenn sie eine Haupt-Schreibrichtung von rechts nach links hat, dann wird es eine `:left` Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann nur verwendet werden, um die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} des _Seitenrahmens_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur der Seitenrahmen, nicht der Dokumentinhalt auf der Seite, wird beeinflusst.

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
