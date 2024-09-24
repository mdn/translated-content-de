---
title: ":playing"
slug: Web/CSS/:playing
l10n:
  sourceCommit: b85bf9fcc2c0062a765d104799d7d45d9e9b13bb
---

{{CSSRef}}

Der **`:playing`** [CSS](/de/docs/Web/CSS) [Pseudoklassen-Selektor](/de/docs/Web/CSS/Pseudo-classes) repräsentiert den Wiedergabestatus eines abspielbaren Elements, wie zum Beispiel {{htmlelement("audio")}} oder {{htmlelement("video")}}, wenn dieses Element "spielt".
Ein Element wird als spielend betrachtet, wenn es die Mediendatei derzeit abspielt, oder wenn es vorübergehend aus anderen Gründen als einer Benutzerabsicht gestoppt wurde (wie zum Beispiel bei {{cssxref(":buffering")}} oder {{cssxref(":stalled")}}).

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
