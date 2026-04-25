---
title: "`:-moz-user-disabled` CSS-Pseudoklasse"
short-title: :-moz-user-disabled
slug: Web/CSS/Reference/Selectors/:-moz-user-disabled
l10n:
  sourceCommit: bf90d24ddf56e3f60df25fcbc0d4e3e084004794
---

{{Non-standard_header}}

Die **`:-moz-user-disabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente anspricht, die Bilder darstellen, die nicht geladen wurden, weil Bilder aufgrund der Benutzereinstellungen vollständig deaktiviert wurden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-user-disabled {
  /* ... */
}
```

## Beispiele

### Stilgestaltung von benutzerdeaktivierten Elementen

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## Spezifikationen

Gehört zu keinem Standard.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}
