---
title: log()
slug: Web/CSS/log
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`log()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine exponentielle Funktion, die den Logarithmus einer Zahl zurückgibt.

Der [Logarithmus](https://de.wikipedia.org/wiki/Logarithmus) ist das Inverse der Potenzierung. Es handelt sich um die Zahl, zu der eine feste Basis potenziert werden muss, um die als erster Parameter übergebene Zahl zu erhalten.

In CSS, wenn ein einzelner Parameter übergeben wird, wird der natürliche Logarithmus `e`, oder ungefähr `2.7182818`, verwendet, obwohl die Basis mit einem optionalen zweiten Parameter auf einen beliebigen Wert gesetzt werden kann.

## Syntax

```css
/* A <number> value */
width: calc(100px * log(7.389)); /* 200px */
width: calc(100px * log(8, 2)); /* 300px */
width: calc(100px * log(625, 5)); /* 400px */
```

### Parameter

Die `log(value [, base]?)` Funktion akzeptiert zwei durch Komma getrennte Werte als Parameter.

- `value`

  - : Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Repräsentiert den Wert, dessen Logarithmus berechnet werden soll.

- `base`
  - : Optional. Eine Berechnung, die sich zu einem {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst. Repräsentiert die Basis des Logarithmus. Wenn nicht definiert, wird die Standardbasis `e` für den Logarithmus verwendet.

### Rückgabewert

Der Logarithmus von `value`, wenn `base` definiert ist.

Der natürliche Logarithmus (Basis `e`) von `value`, wenn `base` nicht definiert ist.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung der `log()` Funktion auf einer logarithmischen Skala

Dieses Beispiel veranschaulicht, wie die `log()` Funktion verwendet werden kann, um Datenwerte mithilfe einer [logarithmischen Skala](https://de.wikipedia.org/wiki/Logarithmische_Skala) zu visualisieren. Die Breite jedes Balkens in diesem Beispiel ist relativ zu seinem Datenwert auf einer logarithmischen Skala mit der Basis 10. Auf jedem Element wird sein Wert einer [CSS-Benutzervariable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) namens `--value` zugewiesen, die dann von der `.bar` Klasse verwendet wird, um ihre Breite zu berechnen.

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
