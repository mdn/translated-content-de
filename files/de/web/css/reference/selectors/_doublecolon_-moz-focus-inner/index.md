---
title: ::-moz-focus-inner
slug: Web/CSS/Reference/Selectors/::-moz-focus-inner
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

{{non-standard_header}}{{deprecated_header}}

Das **`::-moz-focus-inner`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die einen inneren Fokus-Ring des {{HTMLElement("button")}}-Elements sowie der Typen {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}} und {{HTMLElement("input/color","color")}} des {{HTMLElement("input")}}-Elements darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-focus-inner` mit anderen als den unterstützten Schaltflächen bewirkt nichts und hat keine Wirkung.

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

Teil keines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- Verwandte CSS-Eigenschaften:
  - {{cssxref("-moz-user-focus")}}

- Verwandte CSS-Selektoren:
  - [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)
  - [`:focus-visible`](/de/docs/Web/CSS/Reference/Selectors/:focus-visible)
  - [`:focus-within`](/de/docs/Web/CSS/Reference/Selectors/:focus-within)
