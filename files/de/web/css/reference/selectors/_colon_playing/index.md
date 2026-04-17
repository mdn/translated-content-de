---
title: "`:playing` CSS-Pseudoklasse"
short-title: :playing
slug: Web/CSS/Reference/Selectors/:playing
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

Der **`:playing`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert den Wiedergabestatus eines Elements, das abspielbar ist, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "wiedergibt".
Ein Element wird als abspielend betrachtet, wenn es derzeit die Medienressource wiedergibt oder wenn es vorübergehend aus anderen Gründen als durch den Benutzer gestoppt wurde (wie etwa {{cssxref(":buffering")}} oder {{cssxref(":stalled")}}).

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
- [CSS-Selektoren](/de/docs/Web/CSS/Guides/Selectors)
