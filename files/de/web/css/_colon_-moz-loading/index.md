---
title: :-moz-loading
slug: Web/CSS/:-moz-loading
l10n:
  sourceCommit: 1f6d5b39a5883789ece6b570227648113c7021a1
---

{{Non-standard_header}}

Die **`:-moz-loading`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente auswählt, die nicht angezeigt werden können, da sie noch nicht mit dem Laden begonnen haben, wie z.B. Bilder, die noch nicht angekommen sind. Beachten Sie, dass Bilder, die _bereits im Ladevorgang_ sind, _nicht_ von dieser Pseudoklasse erfasst werden.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für Design-Entwickler gedacht.

## Syntax

```css
:-moz-loading {
  /* ... */
}
```

## Beispiele

### Ein Hintergrund für Bilder, die geladen werden

```css
:-moz-loading {
  background: url("loading-animation.gif") center no-repeat;
}
```

## Spezifikationen

Teil keiner Spezifikation.

## Siehe auch

- {{cssxref(":-moz-broken")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
