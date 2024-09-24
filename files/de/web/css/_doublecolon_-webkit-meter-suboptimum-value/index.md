---
title: "::-webkit-meter-suboptimum-value"
slug: Web/CSS/::-webkit-meter-suboptimum-value
l10n:
  sourceCommit: 0a864351a71e7644f992956ef0062e8f5d944624
---

{{CSSRef}}{{Non-standard_header}}

Das **`::-webkit-meter-suboptimum-value`** [Pseudoelement](/de/docs/Glossary/Pseudo-element) stylt das {{htmlelement("meter")}}-Element, wenn der Wert außerhalb des "low-high"-Bereichs liegt und nicht dem optimalen Wert entspricht.

Gelb ist die Standardfarbe.

## Syntax

```css
::-webkit-meter-suboptimum-value {
  /* ... */
}
```

## Beispiele

Dieses Beispiel funktioniert nur in auf WebKit oder Blink basierenden Browsern.

### HTML

```html
Normal:
<meter min="0" max="10" low="3" high="7" optimum="6" value="2">
  Score 2/10
</meter>
<br />
Gestylt:
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
  /* Setzt das Standardaussehen nur für Safari zurück */
  /* .safari Klasse wird über JavaScript hinzugefügt */
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
// Safari erfordert, dass <meter>-Elemente ein `appearance` von `none` für die
// benutzerdefinierte Gestaltung mit `::-webkit-meter-*` Selektoren haben,
// aber `appearance: none` führt zu Darstellungsproblemen in Chrome.
// Daher müssen wir prüfen, ob der Browser auf Safari basiert.

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

Teil keiner Norm.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

Die von WebKit/Blink verwendeten Pseudoelemente, um andere Teile eines {{htmlelement("meter")}}-Elements zu stylen, sind wie folgt:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
