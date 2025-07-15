---
title: :-moz-user-disabled
slug: Web/CSS/:-moz-user-disabled
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die **`:-moz-user-disabled`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente abgleicht, die Bilder darstellen, die nicht geladen wurden, weil Bilder durch die Präferenzen des Benutzers vollständig deaktiviert wurden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-user-disabled {
  /* ... */
}
```

## Beispiele

### Stil für benutzerdeaktivierte Elemente

```css
:-moz-user-disabled {
  background-color: lightgray;
  padding: 8px;
}
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}
