---
title: "`:paused` CSS-Pseudoklasse"
short-title: :paused
slug: Web/CSS/Reference/Selectors/:paused
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Der **`:paused`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert ein Element, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "pausiert" ist (d.h. nicht "spielend").

Eine Ressource ist pausiert, wenn der Benutzer sie explizit pausiert hat oder wenn sie sich in einem nicht aktivierten oder anderen nicht abspielenden Zustand befindet, wie "geladen, wurde noch nicht aktiviert". Dies unterscheidet sich von `:buffering` oder `:stalled`, welche Zustände sind, die auftreten, während die Ressource als "spielend" betrachtet wird.

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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
