---
title: "::-webkit-meter-optimum-value"
slug: Web/CSS/::-webkit-meter-optimum-value
l10n:
  sourceCommit: 07d81f6124dfd4e248c6004267b3314c5757b4f1
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-meter-optimum-value`** CSS-[Pseudoelement](/de/docs/Glossary/Pseudo-element) gestaltet das {{htmlelement("meter")}}-Element, wenn dessen Wert im Low-High-Bereich liegt oder wenn der Wert dem optimalen Wert entspricht.

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
  /* Setzt das Standardaussehen nur für Safari zurück */
  /* .safari-Klasse wird über JavaScript hinzugefügt */
  -webkit-appearance: none;
}

#styled::-webkit-meter-optimum-value {
  background: linear-gradient(to bottom, #7f7, #090 45%, #090 55%, #7f7);
  height: 100%;
  box-sizing: border-box;
}
```

### JavaScript

```js
// Safari erfordert, dass <meter>-Elemente ein `appearance` von `none` haben,
// um eine benutzerdefinierte Gestaltung mit `::-webkit-meter-*`-Selektoren zu ermöglichen,
// aber `appearance: none` zerstört das Rendering in Chrome. Daher müssen wir prüfen, ob der Browser Safari-basiert ist.

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

Die Pseudoelemente, die von WebKit/Blink zur Gestaltung anderer Teile eines {{htmlelement("meter")}}-Elements verwendet werden, sind wie folgt:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
