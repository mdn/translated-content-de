---
title: log()
slug: Web/CSS/log
l10n:
  sourceCommit: 8dac6c62fc3cee2de82960d4dd9d9be16a3a1761
---

{{CSSRef}}

Die **`log()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine exponentielle Funktion, die den Logarithmus einer Zahl zurückgibt.

Ein [Logarithmus](https://de.wikipedia.org/wiki/Logarithmus) ist die Umkehrung der Potenzierung. Es ist die Zahl, auf die eine feste Basis potenziert werden muss, um die als erster Parameter übergebene Zahl zu erhalten.

In CSS wird beim Übergeben eines einzelnen Parameters der natürliche Logarithmus `e`, etwa `2.7182818`, verwendet, obwohl die Basis mit einem optionalen zweiten Parameter auf einen beliebigen Wert gesetzt werden kann.

## Syntax

```css
/* A <number> value */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Parameter

Die Funktion `log(value [, base]?)` akzeptiert zwei durch Kommas getrennte Werte als Parameter.

- `value`

  - : Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Repräsentiert den Wert, dessen Logarithmus berechnet werden soll.

- `base`
  - : Optional. Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Repräsentiert die Basis des Logarithmus. Falls nicht definiert, wird die logarithmische Basis `e` standardmäßig verwendet.

### Rückgabewert

Der Logarithmus von `value`, wenn `base` definiert ist.

Der natürliche Logarithmus (Basis `e`) von `value`, wenn `base` nicht definiert ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Nutzung der `log()`-Funktion auf einer logarithmischen Skala

Dieses Beispiel zeigt, wie die `log()`-Funktion verwendet werden kann, um Datenwerte auf einer [logarithmischen Skala](https://de.wikipedia.org/wiki/Logarithmische_Skala) darzustellen. Die Breite jeder Balkenanzeige in diesem Beispiel ist relativ zum Datenwert auf einer logarithmischen Skala mit der Basis 10. Für jedes Element wird sein Wert einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--value` zugewiesen, die anschließend von der `.bar`-Klasse verwendet wird, um ihre Breite zu berechnen.

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
