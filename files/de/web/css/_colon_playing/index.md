---
title: ":playing"
slug: Web/CSS/:playing
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}

Der **`:playing`** [CSS](/de/docs/Web/CSS)-[Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert den Wiedergabezustand eines Elements, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element „spielt“.
Ein Element wird als spielend betrachtet, wenn es die Medienressource derzeit abspielt oder wenn es vorübergehend aus anderen Gründen als der Benutzerabsicht (wie {{cssxref(":buffering")}} oder {{cssxref(":stalled")}}) angehalten wurde.

## Syntax

```css
:playing {
  /* ... */
}
```

## Beispiele

### CSS

```css
:playing {
  border: 5px solid green;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":buffering")}}
- {{cssxref(":muted")}}
- {{cssxref(":paused")}}
- {{cssxref(":seeking")}}
- {{cssxref(":stalled")}}
- {{cssxref(":volume-locked")}}
- [CSS-Selektoren](/de/docs/Web/CSS/CSS_selectors)
