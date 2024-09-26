---
title: exp()
slug: Web/CSS/exp
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`exp()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine Exponentialfunktion, die eine Zahl als Argument nimmt und die mathematische Konstante `e` potenziert mit der gegebenen Zahl zurückgibt.

Die mathematische Konstante [e](<https://en.wikipedia.org/wiki/E_(mathematical_constant)>) ist die Basis der natürlichen Logarithmen und beträgt ungefähr `2.718281828459045`.

Die `exp(number)` Funktion enthält eine Berechnung, die denselben Wert wie {{CSSxRef("pow", "pow(e, number)")}} ergibt.

## Syntax

```css
/* Ein <number> Wert */
width: calc(100px * exp(-1)); /* 100px * 0.367879441171442 = 36px */
width: calc(100px * exp(0)); /* 100px * 1 = 100px */
width: calc(100px * exp(1)); /* 100px * 2.718281828459045 = 217px */
```

### Parameter

Die `exp(number)` Funktion akzeptiert nur einen Wert als Parameter.

- `number`
  - : Eine Berechnung, die sich zu einer {{CSSxRef("number")}} auflöst. Sie repräsentiert den Wert, der mit der Potenz von `e` erhoben werden soll.

### Rückgabewert

Gibt eine nicht-negative {{CSSxRef("number")}} zurück, die e<sup>number</sup> darstellt, was das Ergebnis der Berechnung von `e` potenziert mit der Zahl ist.

- Wenn `number` `-Infinity` ist, ist das Ergebnis `0`.
- Wenn `number` `0` ist, ist das Ergebnis `1`.
- Wenn `number` `1` ist, ist das Ergebnis `e` (d.h. `2.718281828459045`).
- Wenn `number` `Infinity` ist, ist das Ergebnis `Infinity`.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Elemente rotieren

Die `exp()` Funktion kann verwendet werden, um Elemente mit {{CSSxRef("transform-function/rotate", "rotate")}} zu drehen, da sie eine {{CSSxRef("number")}} zurückgibt.

#### HTML

```html
<div class="box box-1"></div>
<div class="box box-2"></div>
<div class="box box-3"></div>
<div class="box box-4"></div>
<div class="box box-5"></div>
```

#### CSS

```css hidden
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
```

```css
div.box {
  width: 100px;
  height: 100px;
  background: linear-gradient(orange, red);
}
div.box-1 {
  transform: rotate(calc(1turn * exp(-1))); // 0.3678794411714423turn
}
div.box-2 {
  transform: rotate(calc(1turn * exp(-0.75))); // 0.4723665527410147turn
}
div.box-3 {
  transform: rotate(calc(1turn * exp(-0.5))); // 0.6065306597126334turn
}
div.box-4 {
  transform: rotate(calc(1turn * exp(-0.25))); // 0.7788007830714049turn
}
div.box-5 {
  transform: rotate(calc(1turn * exp(0))); // 1turn
}
```

#### Ergebnis

{{EmbedLiveSample('Rotate elements', '100%', '200px')}}

### Überschriften im festen Verhältnis skalieren

Die `exp()` Funktion kann nützlich für Strategien wie das CSS-Modulmaßstab sein, bei dem alle Schriftgrößen auf einer Seite im festen Verhältnis zueinander stehen.

#### HTML

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

#### CSS

```css
h1 {
  font-size: calc(1rem * exp(1.25)); // 3.4903429574618414rem
}
h2 {
  font-size: calc(1rem * exp(1)); // 2.718281828459045rem
}
h3 {
  font-size: calc(1rem * exp(0.75)); // 2.117000016612675rem
}
h4 {
  font-size: calc(1rem * exp(0.5)); // 1.6487212707001282rem
}
h5 {
  font-size: calc(1rem * exp(0.25)); // 1.2840254166877414rem
}
h6 {
  font-size: calc(1rem * exp(0)); // 1rem
}
```

#### Ergebnis

{{EmbedLiveSample('Scale headings by fixed ratio', '100%', '300px')}}

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("pow")}}
- {{CSSxRef("sqrt")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("log")}}