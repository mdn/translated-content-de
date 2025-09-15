---
title: ::target-text
slug: Web/CSS/::target-text
l10n:
  sourceCommit: b460458fa125f4ee252d01466c1390d16ba19215
---

Das **`::target-text`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den Text, zu dem gescrollt wurde, falls der Browser [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) unterstützt. Es ermöglicht es Autoren, auszuwählen, wie dieser Textabschnitt hervorgehoben werden soll.

Das `::target-text` Pseudoelement folgt einem speziellen Vererbungsmodell, das allen Hervorhebungs-Pseudoelementen gemein ist. Für weitere Details darüber, wie diese Vererbung funktioniert, siehe den Abschnitt [Vererbung von Hervorhebungs-Pseudoelementen](/de/docs/Web/CSS/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Syntax

```css
::target-text {
  /* ... */
}
```

## Beispiele

### Hervorheben von Textfragmenten

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Um dieses CSS in Aktion zu sehen, folgen Sie dem Link zum [Scroll-to-Text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref(":target")}} (zum Hervorheben von Zielelementen)
