---
title: ":paused"
slug: Web/CSS/:paused
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:paused`**-[CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) stellt ein Element dar, das abspielbar ist, wie z. B. {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "pausiert" ist (d. h. nicht "abspielt").

Eine Ressource ist pausiert, wenn der Benutzer sie explizit pausiert hat oder wenn sie sich in einem nicht aktivierten oder anderen Nicht-Abspielzustand befindet, wie z. B. "geladen, aber noch nicht aktiviert". Dies unterscheidet sich von `:buffering` oder `:stalled`, die Zustände darstellen, die während des Abspielens der Ressource auftreten können.

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
