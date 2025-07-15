---
title: :-moz-loading
slug: Web/CSS/:-moz-loading
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die **`:-moz-loading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente erfasst, die nicht angezeigt werden können, weil sie noch nicht mit dem Laden begonnen haben, wie zum Beispiel Bilder, die noch nicht eingetroffen sind. Beachten Sie, dass Bilder, die _bereits im Prozess_ des Ladens sind, _nicht_ von dieser Pseudoklasse erfasst werden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Nutzung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Beispiele

### Einen Hintergrund für ladende Bilder setzen

```css
:-moz-loading {
  background: url(loading-animation.gif) center no-repeat;
}
```

## Spezifikationen

Teil keiner Norm.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
