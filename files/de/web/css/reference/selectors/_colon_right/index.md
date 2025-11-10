---
title: :right
slug: Web/CSS/Reference/Selectors/:right
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules), repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine gegebene Seite "links" oder "rechts" ist, wird durch die Hauptrichtung des Schreibflusses des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptrichtung von links nach rechts hat, dann wird es eine `:right` Seite sein; wenn sie eine Hauptrichtung von rechts nach links hat, dann wird es eine {{Cssxref(":left")}} Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} Eigenschaften der _Seitenschachtel_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und es wird nur die Seitenschachtel und nicht der Dokumentinhalt auf der Seite beeinflusst.

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
