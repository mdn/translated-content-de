---
title: ::target-text
slug: Web/CSS/::target-text
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{CSSRef}}

Das **`::target-text`** [CSS](/de/docs/Web/CSS)-[Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den Text, zu dem gescrollt wurde, wenn der Browser [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) unterstützt. Es erlaubt Autoren, festzulegen, wie dieser Abschnitt des Textes hervorgehoben werden soll.

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

Um dieses CSS in Aktion zu sehen, folgen Sie dem Link zur [Scroll-to-Text-Demo](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments)
