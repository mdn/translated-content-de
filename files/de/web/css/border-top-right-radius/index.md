---
title: border-top-right-radius
slug: Web/CSS/border-top-right-radius
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`border-top-right-radius`**-Eigenschaft von [CSS](/de/docs/Web/CSS) rundet die obere rechte Ecke eines Elements ab, indem der Radius (oder der Radius der Haupt- und Nebenachsen) der Ellipse, die die Krümmung der Ecke definiert, angegeben wird.

{{InteractiveExample("CSS Demo: border-top-right-radius")}}

```css interactive-example-choice
border-top-right-radius: 80px 80px;
```

```css interactive-example-choice
border-top-right-radius: 250px 100px;
```

```css interactive-example-choice
border-top-right-radius: 50%;
```

```css interactive-example-choice
border-top-right-radius: 50%;
border: black 10px double;
background-clip: content-box;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a top right rounded corner.
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: #5b6dcd;
  color: white;
  padding: 10px;
}
```

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt eckig.

![border-top-right-radius.png](border-top-right-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, auch bei abgerundeten Ecken; der genaue Ort des Abschneidens wird durch den Wert der {{cssxref("background-clip")}}-Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}}-Kurzschreibweise gesetzt ist, die auf das Element nach der `border-top-right-radius` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft dann auf seinen initialen Wert durch die [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) zurückgesetzt.

## Syntax

```css
/* the corner is a circle */
/* border-top-right-radius: radius */
border-top-right-radius: 3px;

/* the corner is an ellipse */
/* border-top-right-radius: horizontal vertical */
border-top-right-radius: 0.5em 1em;

border-top-right-radius: inherit;

/* Global values */
border-top-right-radius: inherit;
border-top-right-radius: initial;
border-top-right-radius: revert;
border-top-right-radius: revert-layer;
border-top-right-radius: unset;
```

Mit einem Wert:

- Der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises angibt, der für die Begrenzung in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- Der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale Hauptachse der Ellipse angibt, die für die Begrenzung in dieser Ecke verwendet werden soll.
- Der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale Hauptachse der Ellipse angibt, die für die Begrenzung in dieser Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder der Haupt- und Nebenachsen der Ellipse an. Als absolute Länge kann er in jeder von der CSS {{cssxref("&lt;length&gt;")}}-Datentyp erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Rahmens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Rahmens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bogen eines Kreises

Ein einzelner `<length>`-Wert erzeugt einen Bogen eines Kreises.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Bogen einer Ellipse

Zwei verschiedene `<length>`-Werte erzeugen einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Quadratisches Element mit Prozentwert

Ein quadratisches Element mit einem einzigen `<percentage>`-Wert erzeugt einen Bogen eines Kreises.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### Nicht-quadratisches Element mit Prozentwert

Ein nicht-quadratisches Element mit einem einzigen `<percentage>`-Wert erzeugt einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-top-right-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 200px;
  height: 100px;
}
```

{{EmbedLiveSample("Non-square_element_with_percentage_radius")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("border-radius")}} Kurzschreibweise
- {{cssxref("border-bottom-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, und {{cssxref("border-top-left-radius")}}
