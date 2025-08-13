---
title: ::-webkit-meter-inner-element
slug: Web/CSS/::-webkit-meter-inner-element
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{Non-standard_header}}

**`::-webkit-meter-inner-element`** ist ein proprietäres WebKit CSS-Pseudoelement zur Auswahl und Anwendung von Stilen für das äußere enthaltende Element eines {{htmlelement("meter")}}-Elements. Zusätzliche Auszeichnung zur Darstellung des Meter-Elements als schreibgeschützt.

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
  border: 1px dashed #aaaaaa;
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

Die Pseudoelemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{htmlelement("meter")}}-Elements zu stylen, sind wie folgt:

- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
