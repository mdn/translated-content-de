---
title: :-moz-broken
slug: Web/CSS/:-moz-broken
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{Non-standard_header}}{{deprecated_header}}

Die **`:-moz-broken`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente abgleicht, die defekte Bildlinks darstellen.

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
- [Firefox-Bug 11011](https://bugzil.la/11011)
