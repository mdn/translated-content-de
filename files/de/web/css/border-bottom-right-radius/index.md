---
title: border-bottom-right-radius
slug: Web/CSS/border-bottom-right-radius
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-bottom-right-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die untere rechte Ecke eines Elements ab, indem sie den Radius (oder den Radius der Haupt- und Nebenachsen) der Ellipse angibt, die die Krümmung der Ecke bestimmt.

{{EmbedInteractiveExample("pages/css/border-bottom-right-radius.html")}}

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke ist quadratisch.

![border-bottom-right-radius.png](border-bottom-right-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgeschnitten, selbst bei einer abgerundeten; der genaue Ort des Abschneidens wird durch den Wert der {{cssxref("background-clip")}} Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzschreibweise festgelegt ist, die auf das Element nach der `border-bottom-right-radius` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft dann auf seinen ursprünglichen Wert durch die [Kurzschreibweise](/de/docs/Web/CSS/Shorthand_properties) zurückgesetzt.

## Syntax

```css
/* The corner is a circle */
/* border-bottom-right-radius: radius */
border-bottom-right-radius: 3px;

/* Percentage values */
border-bottom-right-radius: 20%; /* corner of a circle if box is a square or else corner of a rectangle */
border-bottom-right-radius: 20% 20%; /* same as above */ /* 20% of horizontal(width) and vertical(height) */
border-bottom-right-radius: 20% 10%; /* 20% of horizontal(width) and 10% of vertical(height) */

/*The corner is an ellipse */
/* border-bottom-right-radius: horizontal vertical */
border-bottom-right-radius: 0.5em 1em;

/* Global values */
border-bottom-right-radius: inherit;
border-bottom-right-radius: initial;
border-bottom-right-radius: revert;
border-bottom-right-radius: revert-layer;
border-bottom-right-radius: unset;
```

Mit einem Wert:

- der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und bezeichnet den Radius des Kreises, der für die Grenze in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und bezeichnet die horizontale Hauptachse der Ellipse, die für die Grenze in der Ecke verwendet werden soll.
- der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und bezeichnet die vertikale Hauptachse der Ellipse, die für die Grenze in der Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder der Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann sie in jeder vom CSS {{cssxref("&lt;length&gt;")}} Datentyp zugelassenen Einheit ausgedrückt werden. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

## Formale Definition

{{CSSInfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Bogen eines Kreises

Ein einzelner `<length>` Wert erzeugt einen Bogen eines Kreises.

```html hidden
<div></div>
```

```css
div {
  border-bottom-right-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Bogen einer Ellipse

Zwei unterschiedliche `<length>` Werte erzeugen einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-bottom-right-radius: 40px 20px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_an_ellipse")}}

### Quadratisches Element mit prozentualem Radius

Ein quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Bogen eines Kreises.

```html hidden
<div></div>
```

```css
div {
  border-bottom-right-radius: 40%;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Square_element_with_percentage_radius")}}

### Nicht-quadratisches Element mit prozentualem Radius

Ein nicht-quadratisches Element mit einem einzigen `<percentage>` Wert erzeugt einen Bogen einer Ellipse.

```html hidden
<div></div>
```

```css
div {
  border-bottom-right-radius: 40%;
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
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-left-radius")}}, und {{cssxref("border-top-left-radius")}}
