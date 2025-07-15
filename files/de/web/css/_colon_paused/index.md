---
title: :paused
slug: Web/CSS/:paused
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:paused`** [CSS](/de/docs/Web/CSS) [Pseudo-Klassen](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "pausiert" ist (d.h. nicht "abspielt").

Eine Ressource ist pausiert, wenn der Benutzer sie ausdrücklich pausiert hat oder sie sich in einem nicht aktivierten oder anderen Nicht-Abspielzustand befindet, wie "geladen, wurde noch nicht aktiviert".
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
