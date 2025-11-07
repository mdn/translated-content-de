---
title: :right
slug: Web/CSS/Reference/Selectors/:right
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Die **`:right`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes), verwendet mit der {{cssxref("@page")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules), repräsentiert alle rechten Seiten eines gedruckten Dokuments.

```css
/* Selects any right-hand pages when printing */
@page :right {
  margin: 2in 3in;
}
```

Ob eine bestimmte Seite "links" oder "rechts" ist, wird durch die Hauptschreibrichtung des Dokuments bestimmt. Wenn beispielsweise die erste Seite eine Hauptschreibrichtung von links-nach-rechts hat, dann wird es eine `:right`-Seite sein; wenn sie eine Hauptschreibrichtung von rechts-nach-links hat, dann wird es eine {{Cssxref(":left")}}-Seite sein.

> [!NOTE]
> Diese Pseudoklasse kann verwendet werden, um nur die Eigenschaften {{ Cssxref("margin") }}, {{ Cssxref("padding") }}, {{ Cssxref("border") }} und {{ Cssxref("background") }} des _Seitenkastens_ zu ändern. Alle anderen Eigenschaften werden ignoriert, und nur der Seitenkasten, nicht der Dokumenteninhalt auf der Seite, wird betroffen sein.

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
