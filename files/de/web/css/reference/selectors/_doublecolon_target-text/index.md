---
title: "`::target-text` CSS pseudo-element"
short-title: ::target-text
slug: Web/CSS/Reference/Selectors/::target-text
l10n:
  sourceCommit: 6cf697a8965ecdc4967258cc0282fe789b60318e
---

Das **`::target-text`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) stellt den Text dar, zu dem gescrollt wurde, falls der Browser [Textfragmente](/de/docs/Web/URI/Reference/Fragment/Text_fragments) unterstützt. Es ermöglicht Autoren zu bestimmen, wie dieser Textabschnitt hervorgehoben wird.

Das `::target-text` Pseudoelement folgt einem speziellen Vererbungsmodell, das für alle Highlight-Pseudoelemente gilt. Weitere Details, wie diese Vererbung funktioniert, finden Sie im Abschnitt [Highlight-Pseudoelements-Vererbung](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements#highlight_pseudo-elements_inheritance).

## Syntax

```css
::target-text {
  /* ... */
}
```

## Beispiele

### Hervorhebung von Textfragmenten

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
