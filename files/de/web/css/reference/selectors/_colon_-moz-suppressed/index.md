---
title: "`:-moz-suppressed` CSS-Pseudoklasse"
short-title: :-moz-suppressed
slug: Web/CSS/Reference/Selectors/:-moz-suppressed
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

Die **`:-moz-suppressed`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente selektiert, die Bilder darstellen, die unterdrückt wurden, weil das Laden von Bildern von der angegebenen Seite blockiert wurde.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-suppressed {
  /* ... */
}
```

## Beispiele

### Stilgebung von blockierten Elementen

```css
:-moz-suppressed {
  background: yellow;
  padding: 8px;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-user-disabled")}}
