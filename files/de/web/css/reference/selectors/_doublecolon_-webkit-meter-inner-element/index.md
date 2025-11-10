---
title: ::-webkit-meter-inner-element
slug: Web/CSS/Reference/Selectors/::-webkit-meter-inner-element
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{Non-standard_header}}

**`::-webkit-meter-inner-element`** ist ein proprietäres WebKit CSS-Pseudoelement zur Auswahl und Anwendung von Stilen für das äußere enthaltene Element eines {{htmlelement("meter")}}-Elements. Zusätzliches Markup, um das Meter-Element als schreibgeschützt darzustellen.

## Syntax

```css
::-webkit-meter-inner-element {
  /* ... */
}
```

## Beispiele

Dies funktioniert nur in auf WebKit und Blink basierenden Browsern, wie Safari, Chrome und Chromium-basierten Versionen von Edge.

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
  border: 1px dashed #aaaaaa;
}
```

### JavaScript

```js
// Safari requires <meter> elements to have an `appearance` of `none` for custom styling
// using `::-webkit-meter-*` selectors, but `appearance: none` breaks rendering on Chrome.
// Therefore, we must check if the browser is Safari-based.

const isSafari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (isSafari) {
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

Die Pseudoelemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{htmlelement("meter")}}-Elements zu stylen, sind wie folgt:

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
