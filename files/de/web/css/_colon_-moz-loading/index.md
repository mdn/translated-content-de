---
title: ":-moz-loading"
slug: Web/CSS/:-moz-loading
l10n:
  sourceCommit: 4cb569f768ec9529724f8fb06539f2903a583a41
---

{{CSSRef}}{{Non-standard_header}}

Die **`:-moz-loading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente selektiert, die nicht angezeigt werden können, weil sie noch nicht mit dem Laden begonnen haben, wie zum Beispiel Bilder, die noch nicht angekommen sind. Beachten Sie, dass Bilder, die _gerade geladen werden_, _nicht_ durch diese Pseudoklasse selektiert werden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler gedacht.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Beispiele

### Hintergrund für Bilder, die geladen werden, festlegen

```css
:-moz-loading {
  background-color: #aaa;
  background-image: url(loading-animation.gif) center no-repeat;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
