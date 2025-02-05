---
title: ":-moz-suppressed"
slug: Web/CSS/:-moz-suppressed
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-suppressed`** [CSS](/de/docs/Web/CSS)-[Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente auswählt, die Bilder darstellen, die unterdrückt wurden, weil das Laden von Bildern von der angegebenen Website blockiert wurde.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler vorgesehen.

## Syntax

```css
:-moz-suppressed {
  /* ... */
}
```

## Beispiele

### Elemente stylen, die blockiert wurden

```css
:-moz-suppressed {
  background: yellow;
  padding: 8px;
}
```

## Spezifikationen

Kein Bestandteil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-user-disabled")}}
