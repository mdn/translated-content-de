---
title: :paused
slug: Web/CSS/:paused
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{CSSRef}}

Der **`:paused`** [CSS](/de/docs/Web/CSS) [Pseudoklassen]-Selektor repräsentiert ein Element, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "pausiert" ist (d.h. nicht "abspielt").

Eine Ressource ist pausiert, wenn der Benutzer sie explizit pausiert hat oder wenn sie sich in einem nicht aktivierten oder einem anderen nicht abspielenden Zustand befindet, wie "geladen, aber noch nicht aktiviert worden".
Dies unterscheidet sich von `:buffering` oder `:stalled`, die Zustände sind, die auftreten, während die Ressource als "abspielend" betrachtet wird.

## Syntax

```css
:paused {
  /* ... */
}
```

## Beispiele

### CSS

```css
:paused {
  border: 5px solid orange;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":playing")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
