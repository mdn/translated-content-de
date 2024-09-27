---
title: log()
slug: Web/CSS/log
l10n:
  sourceCommit: 44d284b9dbc719fd2b32970df28c9032c075cd78
---

{{CSSRef}}

Die **`log()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine exponentielle Funktion, die den Logarithmus einer Zahl zurückgibt.

Ein [Logarithmus](https://en.wikipedia.org/wiki/Logarithm) ist das Inverse der Exponentiation. Er ist die Zahl, auf die eine feste Basis erhöht werden muss, um die Zahl zu ergeben, die als erster Parameter übergeben wird.

In CSS wird, wenn ein einzelner Parameter übergeben wird, der natürliche Logarithmus `e` oder ungefähr `2,7182818` verwendet, obwohl die Basis mit einem optionalen zweiten Parameter auf einen beliebigen Wert gesetzt werden kann.

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

  - : Eine Berechnung, die zu einer {{cssxref("&lt;number&gt;")}} größer oder gleich 0 aufgelöst wird. Repräsentiert den Wert, der logarithmiert werden soll.

- `base`
  - : Optional. Eine Berechnung, die zu einer {{cssxref("&lt;number&gt;")}} größer oder gleich 0 aufgelöst wird. Repräsentiert die Basis des Logarithmus. Wenn nicht definiert, wird die Standardlogarithmus-Basis `e` verwendet.

### Rückgabewert

Der Logarithmus von `value`, wenn `base` definiert ist.

Der natürliche Logarithmus (Basis `e`) von `value`, wenn `base` nicht definiert ist.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Verwendung der Funktion `log()` auf einer logarithmischen Skala

Dieses Beispiel zeigt, wie die `log()`-Funktion verwendet werden kann, um Datenwerte mithilfe einer [logarithmischen Skala](https://en.wikipedia.org/wiki/Logarithmic_scale) zu visualisieren. Die Breite jedes Balkens in diesem Beispiel ist relativ zu seinem Datenwert auf einer logarithmischen Skala mit Basis 10. Bei jedem Element wird sein Wert einer [CSS-Benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/Using_CSS_custom_properties) namens `--value` zugewiesen, die dann von der `.bar`-Klasse verwendet wird, um ihre Breite zu berechnen.

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
