---
title: ::-webkit-meter-optimum-value
slug: Web/CSS/::-webkit-meter-optimum-value
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{Non-standard_header}}

Das **`::-webkit-meter-optimum-value`** CSS-{{Glossary("Pseudo-element", "Pseudoelement")}} stylt das {{htmlelement("meter")}}-Element, wenn sein Wert innerhalb des Niedrig-Hoch-Bereichs liegt oder wenn der Wert dem optimalen Wert entspricht.

Grün ist die Standardfarbe.

## Syntax

```css
::-webkit-meter-optimum-value {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nur in Browsern, die auf WebKit oder Blink basieren.

### HTML

```html
Normal:
<meter min="0" max="10" low="3" high="7" optimum="6" value="6">
  Score 6/10
</meter>
<br />
Styled:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="6">
  Score 6/10
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

#styled::-webkit-meter-optimum-value {
  background: linear-gradient(
    to bottom,
    #77ff77,
    #009900 45%,
    #009900 55%,
    #77ff77
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

Die von WebKit/Blink verwendeten Pseudoelemente zum Stylen anderer Teile eines {{htmlelement("meter")}}-Elements sind wie folgt:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
