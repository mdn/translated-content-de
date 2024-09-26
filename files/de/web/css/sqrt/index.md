---
title: sqrt()
slug: Web/CSS/sqrt
l10n:
  sourceCommit: e64a9e8d7c1970472da07c815098b3da56def5af
---

{{CSSRef}}

Die **`sqrt()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine exponentielle Funktion, die die [Quadratwurzel](https://en.wikipedia.org/wiki/Square_root) einer Zahl zurückgibt.

Die Funktion `pow(x, 0.5)` ist äquivalent zu `sqrt(x)`.

## Syntax

```css
/* Ein <number>-Wert */
width: calc(100px * sqrt(9)); /*  300px */
width: calc(100px * sqrt(25)); /*  500px */
width: calc(100px * sqrt(100)); /* 1000px */
```

### Parameter

Die `sqrt(x)`-Funktion akzeptiert nur einen Wert als Parameter.

- `x`
  - : Eine Berechnung, die sich auf ein {{cssxref("&lt;number&gt;")}} größer oder gleich 0 auflöst.

### Rückgabewert

Gibt ein {{cssxref("&lt;number&gt;")}} zurück, welches die Quadratwurzel von `x` ist.

- Wenn `x` `+∞` ist, ist das Ergebnis `+∞`.
- Wenn `x` `0⁻` ist, ist das Ergebnis `0⁻`.
- Wenn `x` kleiner als `0` ist, ist das Ergebnis `NaN`.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Größen basierend auf Quadratwurzel skalieren

Dieses Beispiel zeigt, wie Sie die `sqrt()`-Funktion verwenden können, um Größen zu berechnen.

#### HTML

```html
<div class="boxes">
  <div class="box">50px</div>
  <div class="box one">100px</div>
  <div class="box two">150px</div>
  <div class="box three">200px</div>
</div>
```

#### CSS

Hier verwenden wir [CSS Custom Properties](/de/docs/Web/CSS/Using_CSS_custom_properties), um die zu verwendenden Größen zu definieren. Zuerst deklarieren wir die erste Größe (`--size-0`), die dann zur Berechnung der anderen Größen verwendet wird.

- `--size-1` wird berechnet, indem der Wert von `--size-0` (50px) mit der Quadratwurzel von 4 (2) multipliziert wird, was zu 100px führt.
- `--size-2` wird berechnet, indem der Wert von `--size-0` (50px) mit der Quadratwurzel von 9 (3) multipliziert wird, was zu 150px führt.
- `--size-3` wird berechnet, indem der Wert von `--size-0` (50px) mit der Quadratwurzel von 16 (4) multipliziert wird, was zu 200px führt.

```css
:root {
  --size-0: 50px;
  --size-1: calc(var(--size-0) * sqrt(4)); /*  100px */
  --size-2: calc(var(--size-0) * sqrt(9)); /*  150px */
  --size-3: calc(var(--size-0) * sqrt(16)); /*  200px */
}
```

```css hidden
.boxes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.box {
  width: var(--size-0);
  height: var(--size-0);
  background-color: tomato;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Die Größen werden dann als `width`- und `height`-Werte der Selektoren angewendet.

```css
.one {
  width: var(--size-1);
  height: var(--size-1);
}
.two {
  width: var(--size-2);
  height: var(--size-2);
}
.three {
  width: var(--size-3);
  height: var(--size-3);
}
```

#### Ergebnis

{{EmbedLiveSample('Scale sizes based on square root', '100%', '220px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("pow")}}
- {{CSSxRef("hypot")}}
- {{CSSxRef("log")}}
- {{CSSxRef("exp")}}