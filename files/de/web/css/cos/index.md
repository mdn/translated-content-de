---
title: cos()
slug: Web/CSS/cos
l10n:
  sourceCommit: 5332af37c3d94913bf15b6aed87aaed2693f19d5
---

{{CSSRef}}

Die **`cos()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) ist eine trigonometrische Funktion, die den Kosinus einer Zahl zurückgibt, einen Wert zwischen `-1` und `1`. Die Funktion enthält eine einzelne Berechnung, die entweder zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss, indem das Ergebnis des Arguments als Radiant interpretiert wird. Das heißt, `cos(45deg)`, `cos(0.125turn)` und `cos(3.14159 / 4)` stellen alle denselben Wert dar, ungefähr `0.707`.

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

Die `cos(angle)` Funktion akzeptiert nur einen Wert als ihren Parameter.

- `angle`
  - : Eine Berechnung, die zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst wird. Wenn unitlose Zahlen angegeben werden, werden sie als Anzahl von Radiant interpretiert, die einen {{cssxref("&lt;angle&gt;")}} darstellen.

### Rückgabewert

Der Kosinus eines `angle` gibt immer eine Zahl zwischen `−1` und `1` zurück.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Halten Sie die Größe eines gedrehten Kastens

Die `cos()` Funktion kann verwendet werden, um die Größe eines gedrehten Kastens beizubehalten.

Wenn das Element mit {{cssxref("transform-function/rotate", "rotate()")}} gedreht wird, überschreitet es seine ursprüngliche Größe. Um dies zu korrigieren, verwenden wir `cos()`, um die Größe des Elements zu aktualisieren.

Zum Beispiel, wenn Sie ein `100px`/`100px` Quadrat um `45deg` drehen, wird der erzeugte Rhombus breiter und höher als das ursprüngliche Quadrat. Um den Rhombus in die für das ursprüngliche Quadrat vorgesehene Box zu verkleinern, müssen Sie den Rhombus mit dieser Formel verkleinern: `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. Sie müssen auch die {{cssxref("transform-origin")}} anpassen und {{cssxref("transform-function/translate", "translate()")}} hinzufügen, um die Position zu korrigieren:

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
