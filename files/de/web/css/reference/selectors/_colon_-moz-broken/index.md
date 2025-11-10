---
title: :-moz-broken
slug: Web/CSS/Reference/Selectors/:-moz-broken
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{Non-standard_header}}{{deprecated_header}}

Die **`:-moz-broken`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Reference/Selectors/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die Elemente darstellt, die kaputte Bildlinks repräsentieren.

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

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
- [Firefox-Bug 11011](https://bugzil.la/11011)
