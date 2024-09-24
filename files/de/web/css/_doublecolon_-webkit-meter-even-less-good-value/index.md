---
title: "::-webkit-meter-even-less-good-value"
slug: Web/CSS/::-webkit-meter-even-less-good-value
l10n:
  sourceCommit: 07d81f6124dfd4e248c6004267b3314c5757b4f1
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-meter-even-less-good-value`** stylt das {{htmlelement("meter")}}-Element, wenn die Werte und die optimalen Attribute außerhalb des Low-High-Bereichs fallen, jedoch in entgegengesetzten Zonen. Beispielsweise wird es angewendet, wenn _value_ < _low_ < _high_ < _optimum_ oder _value_ > _high_ > _low_ > _optimum_.

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
Gestylt:
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
  /* Setzen Sie das Standardaussehen nur für Safari zurück */
  /* Die .safari-Klasse wird per JavaScript hinzugefügt */
  -webkit-appearance: none;
}

#styled::-webkit-meter-even-less-good-value {
  background: linear-gradient(to bottom, #f77, #900 45%, #900 55%, #f77);
  height: 100%;
  box-sizing: border-box;
}
```

### JavaScript

```js
// Safari erfordert, dass <meter>-Elemente ein `appearance` von `none` haben, um mit `::-webkit-meter-*` Selektoren benutzerdefiniert gestylt zu werden,
// aber `appearance: none` bricht die Darstellung in Chrome.
// Daher müssen wir überprüfen, ob der Browser auf Safari basiert.

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

Die Pseudo-Elemente, die von WebKit/Blink zum Stylen anderer Teile eines {{htmlelement("meter")}} Elements verwendet werden, sind wie folgt:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
