---
title: "`:-moz-loading` CSS-Pseudoklasse"
short-title: :-moz-loading
slug: Web/CSS/Reference/Selectors/:-moz-loading
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

Die **`:-moz-loading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente abgleicht, die nicht angezeigt werden können, weil sie noch nicht mit dem Laden begonnen haben, wie zum Beispiel Bilder, die noch nicht begonnen haben, anzukommen. Beachten Sie, dass Bilder, die sich _im Prozess_ des Ladens befinden, _nicht_ von dieser Pseudoklasse erfasst werden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler vorgesehen.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Beispiele

### Hintergrund für Bilder, die geladen werden, setzen

```css
:-moz-loading {
  background: url("loading-animation.gif") center no-repeat;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
