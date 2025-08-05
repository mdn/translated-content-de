---
title: :-moz-loading
slug: Web/CSS/:-moz-loading
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

{{Non-standard_header}}

Die **`:-moz-loading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente abgleicht, die nicht angezeigt werden können, weil sie noch nicht zu laden begonnen haben, wie Bilder, die noch nicht begonnen haben, anzukommen. Beachten Sie, dass Bilder, die _gerade_ geladen werden, _nicht_ von dieser Pseudoklasse erfasst werden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler vorgesehen.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Beispiele

### Hintergrund für ladeende Bilder festlegen

```css
:-moz-loading {
  background: url("loading-animation.gif") center no-repeat;
}
```

## Spezifikationen

Nicht Teil eines Standards.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
