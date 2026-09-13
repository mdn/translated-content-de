---
title: "`:-moz-broken` CSS-Pseudoklasse"
short-title: :-moz-broken
slug: Web/CSS/Reference/Selectors/:-moz-broken
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_header}}

Die **`:-moz-broken`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente auswählt, die defekte Bildlinks darstellen.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für Theme-Entwickler gedacht.

## Syntax

```css
:-moz-broken {
  /* ... */
}
```

## Beispiele

### HTML

```html
<img src="broken.jpg" alt="This image is broken. :-(" />
```

### CSS

```css
:-moz-broken {
  background: bisque;
  padding: 8px;
}
```

### Ergebnis

{{EmbedLiveSample("Examples")}}

## Spezifikationen

Kein Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
- [Firefox Bug 11011](https://bugzil.la/11011)
