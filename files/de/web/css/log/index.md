---
title: log()
slug: Web/CSS/log
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`log()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine exponentielle Funktion, die den Logarithmus einer Zahl zurückgibt.

[Logarithmen](https://en.wikipedia.org/wiki/Logarithm) sind die Umkehrung der Exponentiation. Es ist die Zahl, auf die eine feste Basis erhöht werden muss, um die als erster Parameter übergebene Zahl zu erhalten.

In CSS wird, wenn ein einzelner Parameter übergeben wird, der natürliche Logarithmus `e` oder ungefähr `2.7182818` verwendet, obwohl die Basis mit einem optionalen zweiten Parameter auf jeden Wert gesetzt werden kann.

## Syntax

```css
/* A <number> value */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Parameter

Die `log(value [, base]?)` Funktion akzeptiert zwei durch Kommas getrennte Werte als Parameter.

- `value`
  - : Eine Berechnung, die auf einen {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Repräsentiert den Wert, von dem der Logarithmus genommen werden soll.

- `base`
  - : Optional. Eine Berechnung, die auf einen {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Repräsentiert die Basis des Logarithmus. Wenn nicht definiert, wird die Standardlogarithmus-Basis `e` verwendet.

### Rückgabewert

Der Logarithmus von `value`, wenn `base` definiert ist.

Der natürliche Logarithmus (Basis `e`) von `value`, wenn `base` nicht definiert ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung der `log()`-Funktion auf einer logarithmischen Skala

Dieses Beispiel zeigt, wie die `log()`-Funktion verwendet werden kann, um Datenwerte durch die Verwendung einer [logarithmischen Skala](https://en.wikipedia.org/wiki/Logarithmic_scale) zu visualisieren. Die Breite jeder Leiste in diesem Beispiel ist relativ zu ihrem Datenwert auf einer logarithmischen Skala mit Basis 10. Auf jedem Element wird sein Wert einer [benutzerdefinierten CSS-Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--value` zugewiesen, die dann von der `.bar` Klasse verwendet wird, um ihre Breite zu berechnen.

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
