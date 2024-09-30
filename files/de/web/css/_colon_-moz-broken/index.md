---
title: ":-moz-broken"
slug: Web/CSS/:-moz-broken
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{Non-standard_header}}{{deprecated_header}}

Die **`:-moz-broken`** [CSS](/de/docs/Web/CSS) [Pseudoklasse](/de/docs/Web/CSS/Pseudo-classes) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die Elemente abgleicht, die defekte Bildlinks darstellen.

> [!NOTE]
> Dieser Selektor ist hauptsächlich für die Verwendung durch Theme-Entwickler gedacht.

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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref(":-moz-loading")}}, {{cssxref(":-moz-suppressed")}}, {{cssxref(":-moz-user-disabled")}}
- [Firefox Bug 11011](https://bugzil.la/11011)
