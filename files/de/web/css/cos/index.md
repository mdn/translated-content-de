---
title: cos()
slug: Web/CSS/cos
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{CSSRef}}

Die **`cos()`**-Funktion in [CSS](/de/docs/Web/CSS) ist eine trigonometrische Funktion, die den Kosinus einer Zahl zurückgibt, ein Wert zwischen `-1` und `1`. Die Funktion enthält eine einzelne Berechnung, die durch Interpretation des Ergebnisses des Arguments als Radiant entweder zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst werden muss. Das heißt, `cos(45deg)`, `cos(0.125turn)` und `cos(3.14159 / 4)` repräsentieren alle denselben Wert, ungefähr `0.707`.

## Syntax

```css
/* Einzelne <angle>-Werte */
width: calc(100px * cos(45deg));
width: calc(100px * cos(0.125turn));
width: calc(100px * cos(0.785398163rad));

/* Einzelne <number>-Werte */
width: calc(100px * cos(63.673));
width: calc(100px * cos(2 * 0.125));

/* Andere Werte */
width: calc(100px * cos(pi));
width: calc(100px * cos(e / 2));
```

### Parameter

Die `cos(angle)`-Funktion akzeptiert nur einen Wert als Parameter.

- `angle`
  - : Eine Berechnung, die zu einer {{cssxref("&lt;number&gt;")}} oder einem {{cssxref("&lt;angle&gt;")}} aufgelöst wird. Bei der Angabe von zahlenlosen Zahlen werden sie als Anzahl von Radianten interpretiert, die ein {{cssxref("&lt;angle&gt;")}} repräsentieren.

### Rückgabewert

Der Kosinus eines `angle` wird immer eine Zahl zwischen `−1` und `1` zurückgeben.

- Wenn `angle` `infinity`, `-infinity` oder `NaN` ist, ist das Ergebnis `NaN`.

### Formale Syntax

{{CSSSyntax}}

## Beispiele

### Behalten Sie die Größe einer rotierten Box

Die `cos()`-Funktion kann verwendet werden, um die Größe einer rotierten Box beizubehalten.

Wenn das Element mit der Funktion {{cssxref("transform-function/rotate", "rotate()")}} gedreht wird, übersteigt es seine ursprüngliche Größe. Um dies zu korrigieren, verwenden wir `cos()`, um die Elementgröße zu aktualisieren.

Wenn Sie zum Beispiel ein `100px`/`100px` Quadrat um `45deg` drehen, wird der entstehende Rhombus breiter und höher als das ursprüngliche Quadrat. Um den Rhombus auf die Box zu verkleinern, die für das ursprüngliche Quadrat vorgesehen ist, müssen Sie den Rhombus mit dieser Formel verkleinern: `width = height = 100px * cos(45deg) = 100px * 0.707 = 70.7px`. Sie müssen auch den {{cssxref("transform-origin")}} anpassen und {{cssxref("transform-function/translate", "translate()")}} hinzufügen, um die Position zu korrigieren:

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
