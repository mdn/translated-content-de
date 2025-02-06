---
title: ::-webkit-meter-suboptimum-value
slug: Web/CSS/::-webkit-meter-suboptimum-value
l10n:
  sourceCommit: 4d51a212bfda5ce9978d162caf5532d155f7eb0a
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-meter-suboptimum-value`** {{Glossary("Pseudo-element", "Pseudo-Element")}} gestaltet das {{htmlelement("meter")}}-Element, wenn das `value`-Attribut außerhalb des Bereichs `low-high` liegt und nicht dem `optimum`-Wert entspricht.

Gelb ist die Standardfarbe.

## Syntax

```css
::-webkit-meter-suboptimum-value {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nur in Browsern, die auf WebKit oder Blink basieren.

### HTML

```html
Normal:
<meter min="0" max="10" low="3" high="7" optimum="6" value="2">
  Score 2/10
</meter>
<br />
Styled:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="2">
  Score 2/10
</meter>
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

#styled::-webkit-meter-suboptimum-value {
  background: linear-gradient(to bottom, #ff7, #990 45%, #990 55%, #ff7);
  height: 100%;
  box-sizing: border-box;
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

{{ EmbedLiveSample('Examples', '100%', 50) }}

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die von WebKit/Blink verwendeten Pseudo-Elemente, um andere Teile eines {{htmlelement("meter")}}-Elements zu gestalten, sind wie folgt:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
