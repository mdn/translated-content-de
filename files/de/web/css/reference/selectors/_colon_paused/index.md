---
title: :paused
slug: Web/CSS/Reference/Selectors/:paused
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **`:paused`** [CSS](/de/docs/Web/CSS) [Pseudoklasse-Selektor](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "pausiert" ist (d. h. nicht "abspielt").

Eine Ressource ist pausiert, wenn der Benutzer sie explizit pausiert hat oder wenn sie sich in einem nicht aktivierten oder anderen nicht-abspielenden Zustand befindet, wie zum Beispiel "geladen, aber noch nicht aktiviert". Dies unterscheidet sich von `:buffering` oder `:stalled`, die Zustände sind, die auftreten, während die Ressource als "abspielend" betrachtet wird.

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
