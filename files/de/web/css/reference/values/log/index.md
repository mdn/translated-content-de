---
title: log()
slug: Web/CSS/Reference/Values/log
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`log()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ist eine exponentielle Funktion, die den Logarithmus einer Zahl zurückgibt.

Ein [Logarithmus](https://en.wikipedia.org/wiki/Logarithm) ist das Inverse der Exponentiation. Es ist die Zahl, zu der eine feste Basis potenziert werden muss, um die Zahl zu ergeben, die als erstes Parameter übergeben wird.

In CSS wird, wenn ein einzelner Parameter übergeben wird, der natürliche Logarithmus `e` verwendet, der ungefähr `2.7182818` beträgt, obwohl die Basis mit einem optionalen zweiten Parameter auf jeden Wert gesetzt werden kann.

## Syntax

```css
/* A <number> value */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Parameter

Die `log(value [, base]?)` Funktion akzeptiert zwei kommagetrennte Werte als Parameter.

- `value`
  - : Eine Berechnung, die sich in ein {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Sie repräsentiert den Wert, von dem der Logarithmus genommen werden soll.

- `base`
  - : Optional. Eine Berechnung, die sich in ein {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Sie repräsentiert die Basis des Logarithmus. Wenn nicht definiert, wird die standardmäßige logarithmische Basis `e` verwendet.

### Rückgabewert

Der Logarithmus von `value`, wenn `base` definiert ist.

Der natürliche Logarithmus (Basis `e`) von `value`, wenn `base` nicht definiert ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung der `log()` Funktion auf einer logarithmischen Skala

Dieses Beispiel zeigt, wie die `log()` Funktion verwendet werden kann, um Datenwerte durch die Verwendung einer [logarithmischen Skala](https://en.wikipedia.org/wiki/Logarithmic_scale) zu visualisieren. Die Breite jedes Balkens in diesem Beispiel entspricht seinem Datenwert auf einer logarithmischen Skala mit Basis 10. Auf jedem Element wird sein Wert einer [CSS benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--value` zugewiesen, die dann von der `.bar` Klasse verwendet wird, um ihre Breite zu berechnen.

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
