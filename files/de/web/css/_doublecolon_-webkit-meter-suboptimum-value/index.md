---
title: ::-webkit-meter-suboptimum-value
slug: Web/CSS/::-webkit-meter-suboptimum-value
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{Non-standard_header}}

Das **`::-webkit-meter-suboptimum-value`** {{Glossary("Pseudo-element", "Pseudo-Element")}} stylt das {{htmlelement("meter")}}-Element, wenn das Attribut `value` außerhalb des Bereichs von `low-high` liegt und nicht dem optimalen Wert entspricht.

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
  background: linear-gradient(
    to bottom,
    #ffff77,
    #999900 45%,
    #999900 55%,
    #ffff77
  );
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

Nicht Teil eines Standards.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die Pseudo-Elemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{htmlelement("meter")}}-Elements zu stylen, sind wie folgt:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
