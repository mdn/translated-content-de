---
title: :-moz-user-disabled
slug: Web/CSS/:-moz-user-disabled
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-user-disabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente auswählt, die Bilder darstellen, die nicht geladen wurden, weil Bilder basierend auf den Benutzereinstellungen vollständig deaktiviert wurden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für Theme-Entwickler gedacht.

## Syntax

```css
:-moz-user-disabled {
  /* ... */
}
```

## Beispiele

### Gestaltung von benutzerdeaktivierten Elementen

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## Spezifikationen

Teil keiner Standardisierung.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}
