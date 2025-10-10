---
title: log()
slug: Web/CSS/log
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`log()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ist eine exponentielle Funktion, die den Logarithmus einer Zahl zurückgibt.

Ein [Logarithmus](https://en.wikipedia.org/wiki/Logarithm) ist das Inverse der Exponentiation. Es ist die Zahl, zu der eine bestimmte Basis potenziert werden muss, um die Zahl zu ergeben, die als erster Parameter übergeben wird.

In CSS, wenn ein einzelner Parameter übergeben wird, wird der natürliche Logarithmus `e` oder ungefähr `2.7182818` verwendet, obwohl die Basis mit einem optionalen zweiten Parameter auf einen beliebigen Wert gesetzt werden kann.

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
  - : Eine Berechnung, die auf einen {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auswertet. Es repräsentiert den Wert, dessen Logarithmus genommen werden soll.

- `base`
  - : Optional. Eine Berechnung, die auf einen {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auswertet. Es repräsentiert die Basis des Logarithmus. Wenn nicht definiert, wird die Standardbasis des Logarithmus `e` verwendet.

### Rückgabewert

Der Logarithmus von `value`, wenn `base` definiert ist.

Der natürliche Logarithmus (Basis `e`) von `value`, wenn `base` nicht definiert ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung der `log()` Funktion auf einer logarithmischen Skala

Dieses Beispiel zeigt, wie die `log()` Funktion verwendet werden kann, um Datenwerte auf einer [logarithmischen Skala](https://en.wikipedia.org/wiki/Logarithmic_scale) zu visualisieren. Die Breite jedes Balkens in diesem Beispiel ist relativ zu seinem Datenwert auf einer logarithmischen Skala mit der Basis 10. Auf jedem Element wird sein Wert einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--value` zugewiesen, die dann von der `.bar` Klasse verwendet wird, um deren Breite zu berechnen.

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
