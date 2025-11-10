---
title: ::-webkit-meter-even-less-good-value
slug: Web/CSS/Reference/Selectors/::-webkit-meter-even-less-good-value
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{Non-standard_header}}

Der **`::-webkit-meter-even-less-good-value`** stilisiert das {{htmlelement("meter")}}-Element, wenn die Werte- und Optimumattribute außerhalb des niedrigen-hohen Bereichs liegen, jedoch in entgegengesetzten Zonen. Zum Beispiel wird es angewendet, wenn _value_ < _low_ < _high_ < _optimum_ oder _value_ > _high_ > _low_ > _optimum_.

Rot ist die Standardfarbe.

## Syntax

```css
::-webkit-meter-even-less-good-value {
  /* ... */
}
```

## Beispiele

### HTML

```html
Normal:
<meter min="0" max="10" low="3" high="7" optimum="8" value="2">
  Score 2/10
</meter>
<br />
Styled:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="8" value="2">
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

#styled::-webkit-meter-even-less-good-value {
  background: linear-gradient(
    to bottom,
    #ff7777,
    #990000 45%,
    #990000 55%,
    #ff7777
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

const isSafari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (isSafari) {
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

Die Pseudo-Elemente, die von WebKit/Blink verwendet werden, um andere Teile eines {{htmlelement("meter")}}-Elements zu stilisieren, sind wie folgt:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
