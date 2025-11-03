---
title: ::target-text
slug: Web/CSS/Reference/Selectors/::target-text
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Das **`::target-text`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) repräsentiert den Text, zu dem gescrollt wurde, wenn der Browser [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) unterstützt. Es ermöglicht Autoren, auszuwählen, wie dieser Textabschnitt hervorgehoben wird.

Das `::target-text` Pseudo-Element folgt einem speziellen Vererbungsmuster, das allen Hervorhebungs-Pseudo-Elementen gemeinsam ist. Für weitere Informationen darüber, wie diese Vererbung funktioniert, siehe den Abschnitt [Vererbung von Hervorhebungs-Pseudo-Elementen](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

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

Um dieses CSS in Aktion zu sehen, folgen Sie dem Link zur [scroll-to-text Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
- {{cssxref(":target")}} (zum Hervorheben von Zielelementen)
