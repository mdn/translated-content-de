---
title: cos()
slug: Web/CSS/cos
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`cos()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) ist eine trigonometrische Funktion, die den Kosinus einer Zahl zurückgibt, ein Wert zwischen `-1` und `1`. Die Funktion enthält eine einzelne Berechnung, die entweder in ein {{cssxref("&lt;number&gt;")}} oder ein {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Bogenmaß interpretiert wird. Das bedeutet, dass `cos(45deg)`, `cos(0.125turn)` und `cos(3.14159 / 4)` alle den gleichen Wert repräsentieren, ungefähr `0.707`.

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
  - : Eine Berechnung, die zu einem {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst wird. Wenn einheitslose Zahlen angegeben werden, werden sie als Anzahl von Bogenmaß interpretiert, die ein {{cssxref("&lt;angle&gt;")}} darstellen.

### Rückgabewert

Der Kosinus eines `angle` wird immer eine Zahl zwischen `−1` und `1` zurückgeben.

- Wenn `angle` `unendlich`, `-unendlich` oder `NaN` ist, ist das Ergebnis `NaN`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Die Größe eines gedrehten Kastens beibehalten

Die `cos()` Funktion kann verwendet werden, um die Größe eines gedrehten Kastens beizubehalten.

Wenn das Element mit {{cssxref("transform-function/rotate", "rotate()")}} gedreht wird, überschreitet es seine ursprüngliche Größe. Um dies zu beheben, verwenden wir `cos()`, um die Größe des Elements zu aktualisieren.

Zum Beispiel, wenn Sie ein `100px`/`100px` Quadrat um `45deg` drehen, wird die resultierende Raute breiter und höher als das ursprüngliche Quadrat sein. Um die Raute auf die Größe des für das ursprüngliche Quadrat vorgesehenen Kastens zu verkleinern, müssen Sie die Raute mit dieser Formel skalieren: `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. Sie müssen auch den {{cssxref("transform-origin")}} anpassen und {{cssxref("transform-function/translate", "translate()")}} hinzufügen, um die Position zu korrigieren:

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
