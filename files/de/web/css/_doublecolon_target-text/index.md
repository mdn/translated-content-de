---
title: "::target-text"
slug: Web/CSS/::target-text
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{CSSRef}}

Das **`::target-text`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den Text, zu dem gescrollt wurde, wenn der Browser [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments) unterstützt. Es ermöglicht Autoren, auszuwählen, wie dieser Textabschnitt hervorgehoben werden soll.

```css
::target-text {
  background-color: pink;
}
```

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

- [Textfragmente](/de/docs/Web/URI/Fragment/Text_fragments)
