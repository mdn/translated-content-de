---
title: border-top-left-radius
slug: Web/CSS/Reference/Properties/border-top-left-radius
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`border-top-left-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die obere linke Ecke eines Elements ab, indem sie den Radius (oder den Radius der Haupt- und Nebenachsen) der Ellipse angibt, die die Krümmung der Ecke definiert.

{{InteractiveExample("CSS Demo: border-top-left-radius")}}

```css interactive-example-choice
border-top-left-radius: 80px 80px;
```

```css interactive-example-choice
border-top-left-radius: 250px 100px;
```

```css interactive-example-choice
border-top-left-radius: 50%;
```

```css interactive-example-choice
border-top-left-radius: 50%;
border: black 10px double;
background-clip: content-box;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with a top left rounded corner.
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

Die Abrundung kann entweder ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt eckig.

![border-radius.png](border-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, auch bei abgerundeten Ecken; der genaue Ort des Abschneidens wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzschreibweise gesetzt ist, die auf das Element nach der `border-top-left-radius` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft dann durch die [Kurzschreibweise](/de/docs/Web/CSS/CSS_cascade/Shorthand_properties) auf seinen Initialwert zurückgesetzt.

## Syntax

```css
/* the corner is a circle */
/* border-top-left-radius: radius */
border-top-left-radius: 3px;

/* the corner is an ellipse */
/* border-top-left-radius: horizontal vertical */
border-top-left-radius: 0.5em 1em;

border-top-left-radius: inherit;

/* Global values */
border-top-left-radius: inherit;
border-top-left-radius: initial;
border-top-left-radius: revert;
border-top-left-radius: revert-layer;
border-top-left-radius: unset;
```

Mit einem Wert:

- der Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises angibt, der für die Grenze in dieser Ecke verwendet wird.

Mit zwei Werten:

- der erste Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet wird.
- der zweite Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet wird.

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder der Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann es in jeder im CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubten Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite der Box, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Kreisbogen

Ein einzelner `<length>` Wert erzeugt einen Kreisbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Ellipsenbogen

Zwei verschiedene `<length>` Werte erzeugen einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Quadratisches Element mit Prozentwert-Radius

Ein quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Kreisbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### Nicht-quadratisches Element mit Prozentwert-Radius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Ellipsenbogen.

```html hidden
<div></div>
```

```css
div {
  border-top-left-radius: 40%;
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
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, und {{cssxref("border-bottom-left-radius")}}
