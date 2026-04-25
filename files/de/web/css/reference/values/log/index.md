---
title: "`log()` CSS function"
short-title: log()
slug: Web/CSS/Reference/Values/log
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`log()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine exponentielle Funktion, die den Logarithmus einer Zahl zurückgibt.

Ein [Logarithmus](https://en.wikipedia.org/wiki/Logarithm) ist die Umkehrung der Exponentiation. Es ist die Zahl, die eine feste Basis potenziert ergeben muss, um die als erster Parameter übergebene Zahl zu erhalten.

In CSS wird, wenn ein einzelner Parameter übergeben wird, der natürliche Logarithmus `e` oder ungefähr `2.7182818` verwendet, obwohl die Basis mit einem optionalen zweiten Parameter auf einen beliebigen Wert festgelegt werden kann.

## Syntax

```css
/* A <number> value */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Parameter

Die Funktion `log(value [, base]?)` akzeptiert zwei durch Komma getrennte Werte als Parameter.

- `value`
  - : Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Sie stellt den Wert dar, dessen Logarithmus berechnet werden soll.

- `base`
  - : Optional. Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Sie stellt die Basis des Logarithmus dar. Wenn nicht definiert, wird die Standard-Logarithmusbasis `e` verwendet.

### Rückgabewert

Der Logarithmus von `value`, wenn `base` definiert ist.

Der natürliche Logarithmus (Basis `e`) von `value`, wenn `base` nicht definiert ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung der `log()` Funktion auf einer logarithmischen Skala

Dieses Beispiel zeigt, wie die `log()` Funktion verwendet werden kann, um Datenwerte mit einer [logarithmischen Skala](https://en.wikipedia.org/wiki/Logarithmic_scale) zu visualisieren. Die Breite jeder Leiste in diesem Beispiel ist relativ zu ihrem Datenwert auf einer logarithmischen Skala mit der Basis 10. Für jedes Element wird dessen Wert einer [CSS-Custom-Property](/de/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) mit dem Namen `--value` zugewiesen, die dann von der `.bar` Klasse zur Berechnung ihrer Breite verwendet wird.

#### HTML

```html
<div class="bar" style="--value: 50">50</div>
<div class="bar" style="--value: 100">100</div>
<div class="bar" style="--value: 500">500</div>
<div class="bar" style="--value: 10000">10,000</div>
<div class="bar" style="--value: 2000000">2,000,000</div>
```

#### CSS

```css
.bar {
  width: calc(log(var(--value), 10) * 2em);
}
```

```css hidden
.bar {
  height: 2em;
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.25em 0;
}
```

#### Ergebnis

{{EmbedLiveSample('Using the log() function on a logarithmic scale', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("exp")}}
