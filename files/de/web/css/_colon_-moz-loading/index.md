---
title: :-moz-loading
slug: Web/CSS/:-moz-loading
l10n:
  sourceCommit: 0145c6497d2f2206dca1326593fe308f7b771a08
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-loading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente anspricht, die nicht angezeigt werden können, weil sie noch nicht zu laden begonnen haben, wie z. B. Bilder, die noch nicht eingetroffen sind. Beachten Sie, dass Bilder, die sich _im Ladeprozess_ befinden, _nicht_ von dieser Pseudoklasse erfasst werden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Beispiele

### Einstellen eines Hintergrunds für Bilder, die geladen werden

```css
:-moz-loading {
  background: url(loading-animation.gif) center no-repeat;
}
```

## Spezifikationen

Teil keiner Norm.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
