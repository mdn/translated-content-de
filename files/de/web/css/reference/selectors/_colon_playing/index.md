---
title: :playing
slug: Web/CSS/Reference/Selectors/:playing
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`:playing`** [CSS](/de/docs/Web/CSS) [Pseudoklassen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) Selektor repräsentiert den Wiedergabestatus eines Elements, das abspielbar ist, wie beispielsweise {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "abgespielt" wird.
Ein Element gilt als abgespielt, wenn es die Mediendatei aktuell wiedergibt oder vorübergehend aus anderen Gründen als dem Benutzerwunsch gestoppt wurde (wie etwa {{cssxref(":buffering")}} oder {{cssxref(":stalled")}}).

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
