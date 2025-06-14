---
title: ::-moz-focus-inner
slug: Web/CSS/::-moz-focus-inner
l10n:
  sourceCommit: d105060fc9f3269c6559e55c4fcd5cea27f065fa
---

{{CSSRef}}{{non-standard_header}}{{deprecated_header}}

Das **`::-moz-focus-inner`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Mozilla_Extensions), die einen inneren Fokusrahmen des {{HTMLElement("button")}}-Elements sowie der Typen {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}} und {{HTMLElement("input/color","color")}} des {{HTMLElement("input")}}-Elements darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-focus-inner` mit anderen als den unterstützten Schaltflächen hat keine Wirkung und trifft auf nichts zu.

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

Teil keiner Norm.

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
