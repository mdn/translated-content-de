---
title: ::-moz-focus-inner
slug: Web/CSS/Reference/Selectors/::-moz-focus-inner
l10n:
  sourceCommit: 21da3683d67c91c9a75a1c3fe98d406c82d8bf8b
---

{{non-standard_header}}{{deprecated_header}}

Der **`::-moz-focus-inner`** [CSS](/de/docs/Web/CSS) [Pseudoelement](/de/docs/Web/CSS/Reference/Selectors/Pseudo-elements) ist eine [Mozilla-Erweiterung](/de/docs/Web/CSS/Reference/Mozilla_extensions), die einen inneren Fokus-Ring des {{HTMLElement("button")}}-Elements sowie der Typen {{HTMLElement("input/button","button")}}, {{HTMLElement("input/submit","submit")}}, {{HTMLElement("input/reset","reset")}} und {{HTMLElement("input/color","color")}} des {{HTMLElement("input")}}-Elements darstellt.

> [!NOTE]
> Die Verwendung von `::-moz-focus-inner` mit anderen Elementen als den unterstützten Schaltflächen führt zu keinem Treffer und hat keine Wirkung.

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

- [Mozilla CSS-Erweiterungen](/de/docs/Web/CSS/Reference/Mozilla_extensions)
- Verwandte CSS-Eigenschaften:
  - [`-moz-user-focus`](/de/docs/Web/CSS/Reference/Properties/-moz-user-focus)

- Verwandte CSS-Selektoren:
  - [`:focus`](/de/docs/Web/CSS/Reference/Selectors/:focus)
  - [`:focus-visible`](/de/docs/Web/CSS/Reference/Selectors/:focus-visible)
  - [`:focus-within`](/de/docs/Web/CSS/Reference/Selectors/:focus-within)
