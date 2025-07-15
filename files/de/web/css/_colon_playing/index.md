---
title: :playing
slug: Web/CSS/:playing
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`:playing`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) Selektor repräsentiert den Wiedergabestatus eines Elemente, das abspielbar ist, wie {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "wiedergibt".
Ein Element wird als spielend betrachtet, wenn es die Mediendatei derzeit abspielt, oder wenn es aus anderen Gründen als der Absicht des Benutzers vorübergehend gestoppt wurde (zum Beispiel {{cssxref(":buffering")}} oder {{cssxref(":stalled")}}).

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
- [CSS Selektoren](/de/docs/Web/CSS/CSS_selectors)
