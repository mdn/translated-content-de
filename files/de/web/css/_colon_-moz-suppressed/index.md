---
title: ":-moz-suppressed"
slug: Web/CSS/:-moz-suppressed
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-suppressed`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente matcht, die Bilder darstellen, die unterdrückt wurden, weil das Laden von Bildern von der angegebenen Website blockiert wurde.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-suppressed {
  /* ... */
}
```

## Beispiele

### Styling von blockierten Elementen

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
