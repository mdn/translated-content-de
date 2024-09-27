---
title: "::-moz-focus-inner"
slug: Web/CSS/::-moz-focus-inner
l10n:
  sourceCommit: b60bc79c7ad36c56dddf6760d2fd4dbb642d2023
---

{{CSSRef}}{{SeeCompatTable}}{{non-standard_header}}

Das **`::-moz-focus-inner`** [CSS](/de/docs/Web/CSS) [Pseudo-Element](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die einen inneren Fokusrahmen des {{HTMLElement("button")}}-Elements darstellt, sowie der Typen {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}} und {{HTMLElement("input/color","color")}} des {{HTMLElement("input")}}-Elements.

> [!NOTE]
> Die Verwendung von `::-moz-focus-inner` mit anderen als den unterstützten Tasten führt zu keiner Übereinstimmung und hat keine Wirkung.

## Syntax

```css
::-moz-focus-inner {
  /* ... */
}
```

## Beispiel

### HTML

```html
<input type="submit" value="Input" /> <button type="submit">Button</button>
```

### CSS

```css
button::-moz-focus-inner,
input[type="color"]::-moz-focus-inner,
input[type="reset"]::-moz-focus-inner,
input[type="button"]::-moz-focus-inner,
input[type="submit"]::-moz-focus-inner {
  padding-block-start: 0px;
  padding-inline-end: 2px;
  padding-block-end: 0px;
  padding-inline-start: 2px;
  border: 2px dotted red;
}
```

### Ergebnis

{{EmbedLiveSample("Example", 300, 50)}}

## Spezifikationen

Gehört zu keinem Standard.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Mozilla_Extensions)
- Verwandte CSS-Eigenschaften:

  - [`-moz-user-focus`](/de/docs/Web/CSS/-moz-user-focus)

- Verwandte CSS-Selektoren:

  - [`:focus`](/de/docs/Web/CSS/:focus)
  - [`:focus-visible`](/de/docs/Web/CSS/:focus-visible)
  - [`:focus-within`](/de/docs/Web/CSS/:focus-within)
