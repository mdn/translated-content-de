---
title: ":right"
slug: Web/CSS/:right
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes), die mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet wird, repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine Seite "links" oder "rechts" ist, wird durch die Hauptschreibrichtung des Dokuments bestimmt. Zum Beispiel, wenn die erste Seite eine Hauptschreibrichtung von links nach rechts hat, wird es eine `:right`-Seite sein; wenn sie eine Hauptschreibrichtung von rechts nach links hat, dann wird es eine {{Cssxref(":left")}}-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} Eigenschaften des _Seitenfeldes_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur das Seitenfeld, nicht der Dokumentinhalt auf der Seite, wird betroffen sein.

## Syntax

```css
:right {
  /* ... */
}
```

## Beispiele

### Setzen von Rändern für rechte Seiten

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
