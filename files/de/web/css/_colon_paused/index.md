---
title: ":paused"
slug: Web/CSS/:paused
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

Der **`:paused`** [CSS](/de/docs/Web/CSS) [Pseudo-Klassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert ein Element, das abspielbar ist, wie z.B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "pausiert" ist (d.h. nicht "abspielt").

Eine Ressource ist pausiert, wenn der Benutzer sie ausdrücklich pausiert hat, oder wenn sie in einem nicht aktivierten oder anderen nicht-abspielenden Zustand ist, wie „geladen, aber noch nicht aktiviert“. Dies unterscheidet sich von `:buffering` oder `:stalled`, welche Zustände sind, die auftreten, während die Ressource als "abspielend" betrachtet wird.

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
