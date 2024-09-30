---
title: "::-webkit-meter-inner-element"
slug: Web/CSS/::-webkit-meter-inner-element
l10n:
  sourceCommit: 07d81f6124dfd4e248c6004267b3314c5757b4f1
---

{{CSSRef}}{{Non-standard_header}}

**`::-webkit-meter-inner-element`** ist ein proprietäres WebKit CSS-Pseudoelement zum Auswählen und Anwenden von Stilen auf das äußere enthaltende Element eines {{htmlelement("meter")}} Elements. Zusätzliches Markup, um das Meter-Element als schreibgeschützt darzustellen.

## Syntax

```css
::-webkit-meter-inner-element {
  /* ... */
}
```

## Beispiele

Dies funktioniert nur in WebKit- und Blink-basierten Browsern wie Safari, Chrome und Chromium-basierten Versionen von Edge.

### HTML

```html
Normal: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Styled: <meter id="styled" min="0" max="10" value="6">Score 6/10</meter>
```

### CSS

```css
body {
  font-family: monospace;
}

.safari meter {
  /* Reset the default appearance for Safari only */
  /* .safari class is added via JavaScript */
  -webkit-appearance: none;
}

#styled::-webkit-meter-inner-element {
  -webkit-appearance: inherit;
  box-sizing: inherit;
  border: 1px dashed #aaa;
}
```

### JavaScript

```js
// Safari requires <meter> elements to have an `appearance` of `none` for custom styling
// using `::-webkit-meter-*` selectors, but `appearance: none` breaks rendering on Chrome.
// Therefore, we must check if the browser is Safari-based.

const is_safari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (is_safari) {
  document.body.classList.add("safari");
}
```

### Ergebnis

{{ EmbedLiveSample('Examples') }}

## Spezifikationen

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die von WebKit/Blink verwendeten Pseudoelemente zur Gestaltung anderer Teile eines {{htmlelement("meter")}} Elements sind wie folgt:

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
