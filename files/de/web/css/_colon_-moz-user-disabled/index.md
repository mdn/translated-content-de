---
title: ":-moz-user-disabled"
slug: Web/CSS/:-moz-user-disabled
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-user-disabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente auswählt, die Bilder repräsentieren, die nicht geladen wurden, weil in den Benutzereinstellungen alle Bilder deaktiviert wurden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Nutzung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-user-disabled {
  /* ... */
}
```

## Beispiele

### Benutzerdeaktivierte Elemente stylen

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}
