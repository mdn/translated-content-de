---
title: :playing
slug: Web/CSS/Reference/Selectors/:playing
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Der **`:playing`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert den Wiedergabezustand eines Elements, das abspielbar ist, wie etwa {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "wiedergegeben" wird.
Ein Element wird als spielend betrachtet, wenn es die Mediendatei gerade abspielt oder wenn es vorübergehend aus anderen Gründen als der Benutzerabsicht gestoppt hat (wie zum Beispiel {{cssxref(":buffering")}} oder {{cssxref(":stalled")}}).

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
