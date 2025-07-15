---
title: :-moz-suppressed
slug: Web/CSS/:-moz-suppressed
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}

Die **`:-moz-suppressed`** [CSS](/de/docs/Web/CSS) [Pseudo-Klasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente selektiert, die Bilder darstellen, die unterdrückt wurden, da das Laden von Bildern von der angegebenen Seite blockiert wurde.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Nutzung durch Theme-Entwickler vorgesehen.

## Syntax

```css
:-moz-suppressed {
  /* ... */
}
```

## Beispiele

### Elemente formatieren, die blockiert wurden

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
