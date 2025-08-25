---
title: ::target-text
slug: Web/CSS/::target-text
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Das **`::target-text`** [CSS](/de/docs/Web/CSS)-[Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) repräsentiert den Text, zu dem gescrollt wurde, wenn der Browser [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) unterstützt. Es ermöglicht Autoren, auszuwählen, wie dieser Textabschnitt hervorgehoben wird.

Das `::target-text` Pseudoelement folgt einem speziellen Vererbungsmodell, das für alle Hervorhebungs-Pseudoelemente üblich ist. Für weitere Details, wie diese Vererbung funktioniert, siehe den Abschnitt [Highlight pseudo-elements inheritance](/de/docs/Web/CSS/Pseudo-elements#highlight_pseudo-elements_inheritance).

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
