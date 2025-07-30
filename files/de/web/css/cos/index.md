---
title: cos()
slug: Web/CSS/cos
l10n:
  sourceCommit: c51c4c3911715acdfd2e3912b6e6df95d40d4e0c
---

Die **`cos()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Kosinus einer Zahl zurückgibt, ein Wert zwischen `-1` und `1`. Die Funktion enthält eine einzelne Berechnung, die entweder zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Radiant interpretiert wird. Das heißt, `cos(45deg)`, `cos(0.125turn)` und `cos(3.14159 / 4)` repräsentieren alle den gleichen Wert, ungefähr `0,707`.

{{InteractiveExample("CSS Demo: cos()")}}

```css interactive-example-choice
transform: translateX(calc(cos(0deg) * 140px))
  translateY(calc(sin(0deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(90deg) * 140px))
  translateY(calc(sin(90deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(135deg) * 140px))
  translateY(calc(sin(135deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(180deg) * 140px))
  translateY(calc(sin(180deg) * -140px));
```

```css interactive-example-choice
transform: translateX(calc(cos(-45deg) * 140px))
  translateY(calc(sin(-45deg) * -140px));
```

```html interactive-example
<div class="circle">
  <span class="dot" id="example-element"></span>
</div>
```

```css interactive-example
:root {
  --radius: 140px;
  --dotsize: 10px;
}
.circle {
  display: grid;
  place-content: center;
  margin: 0 auto;
  width: calc(var(--radius) * 2);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666;
  background-image:
    radial-gradient(black var(--dotsize), transparent var(--dotsize)),
    linear-gradient(135deg, #0000ff, #00c9ff, #92fe9d, #e6e6fa, #f0fff0);
}
.dot {
  display: block;
  width: var(--dotsize);
  aspect-ratio: 1;
  border-radius: 50%;
  border: 2px solid #666;
  background-color: #f66;
  transform: translateX(calc(cos(0deg) * var(--radius)))
    translateY(calc(sin(0deg) * var(--radius) * -1));
}
```

## Syntax

```css
/* Single <angle> values */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* Single <number> values */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* Other values */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));
```

### Parameter

Die `cos(angle)` Funktion akzeptiert nur einen Wert als Parameter.

- `angle`
  - : Eine Berechnung, die sich zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} auflösen muss. Wenn zahlenlose Zahlen angegeben werden, werden sie als Anzahl von Radianten interpretiert und stellen einen {{cssxref("&lt;angle&gt;")}} dar.

### Rückgabewert

Der Kosinus eines `angle` gibt immer eine Zahl zwischen `−1` und `1` zurück.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Die Größe eines gedrehten Kastens beibehalten

Die `cos()` Funktion kann verwendet werden, um die Größe eines gedrehten Kastens beizubehalten.

Wenn das Element mit {{cssxref("transform-function/rotate", "rotate()")}} gedreht wird, geht es über seine ursprüngliche Größe hinaus. Um dies zu korrigieren, verwenden wir `cos()`, um die Elementgröße zu aktualisieren.

Beispielsweise, wenn Sie ein `100px`/`100px` Quadrat um `45deg` drehen, wird der entstehende Diamant breiter und höher als das ursprüngliche Quadrat. Um den Diamanten in das für das ursprüngliche Quadrat vorgesehene Kästchen zu verkleinern, müssen Sie den Diamanten mit dieser Formel verkleinern: `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. Sie müssen auch den {{cssxref("transform-origin")}} anpassen und {{cssxref("transform-function/translate", "translate()")}} hinzufügen, um die Position zu korrigieren:

#### HTML

```html
<div class="original-square"></div>
<div class="rotated-diamond"></div>
<div class="rotated-scaled-diamond"></div>
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
div.original-square {
  width: 100px;
  height: 100px;
  background-color: blue;
}
div.rotated-diamond {
  width: 100px;
  height: 100px;
  background-color: red;
  transform: rotate(45deg);
}
div.rotated-scaled-diamond {
  width: calc(100px * cos(45deg));
  height: calc(100px * cos(45deg));
  margin: calc(100px / 4 * cos(45deg));
  transform: rotate(45deg);
  transform-origin: center;
  background-color: green;
}
```

#### Ergebnis

{{EmbedLiveSample('Keep the size of a rotated box', '100%', '200px')}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{CSSxRef("sin")}}
- {{CSSxRef("tan")}}
- {{CSSxRef("asin")}}
- {{CSSxRef("acos")}}
- {{CSSxRef("atan")}}
- {{CSSxRef("atan2")}}
