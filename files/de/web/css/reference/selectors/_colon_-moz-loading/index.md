---
title: :-moz-loading
slug: Web/CSS/Reference/Selectors/:-moz-loading
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}

Die **`:-moz-loading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente anspricht, die nicht angezeigt werden können, weil sie noch nicht mit dem Laden begonnen haben, wie z. B. Bilder, die noch nicht eingetroffen sind. Beachten Sie, dass Bilder, die sich _im Ladevorgang_ befinden, _nicht_ durch diese Pseudoklasse angesprochen werden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für Theme-Entwickler gedacht.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Beispiele

### Festlegen eines Hintergrunds für Bilder, die geladen werden

```css
:-moz-loading {
  background: url("loading-animation.gif") center no-repeat;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
