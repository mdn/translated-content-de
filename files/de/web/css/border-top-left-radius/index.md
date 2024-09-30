---
title: border-top-left-radius
slug: Web/CSS/border-top-left-radius
l10n:
  sourceCommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{CSSRef}}

Die **`border-top-left-radius`** [CSS](/de/docs/Web/CSS) Eigenschaft rundet die obere linke Ecke eines Elements ab, indem der Radius (oder der Radius der Haupt- und Nebenachsen) der Ellipse angegeben wird, die die Krümmung der Ecke definiert.

{{EmbedInteractiveExample("pages/css/border-top-left-radius.html")}}

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung durchgeführt und die Ecke bleibt rechtwinklig.

![border-radius.png](border-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze, auch an einer abgerundeten, abgeschnitten; der genaue Ort des Abschneidens wird durch den Wert der {{cssxref("background-clip")}}-Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}} Kurzschreibweise festgelegt ist, die nach der `border-top-left-radius` CSS-Eigenschaft auf das Element angewendet wird, wird der Wert dieser Eigenschaft durch die [Kurzschreib-Eigenschaft](/de/docs/Web/CSS/Shorthand_properties) auf seinen Anfangswert zurückgesetzt.

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

- Der Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der den Radius des Kreises angibt, der für die Grenze in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- Der erste Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die horizontale Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.
- Der zweite Wert ist eine {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}}, der die vertikale Hauptachse der Ellipse angibt, die für die Grenze in dieser Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Bezeichnet die Größe des Kreisradius oder der Haupt- und Nebenachsen der Ellipse. Als absolute Länge kann es in jeder Einheit ausgedrückt werden, die vom CSS {{cssxref("&lt;length&gt;")}} Datentyp erlaubt ist. Prozentsätze für die horizontale Achse beziehen sich auf die Breite des Kastens, Prozentsätze für die vertikale Achse beziehen sich auf die Höhe des Kastens. Negative Werte sind ungültig.

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
  border-top-left-radius: 40px;
  background-color: lightgreen;
  border: solid 1px black;
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("Arc_of_a_circle")}}

### Bogen einer Ellipse

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

### Quadrat-Element mit prozentualem Radius

Ein Quadrat-Element mit einem einzelnen `<percentage>` Wert erzeugt einen Bogen eines Kreises.

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

### Nicht-quadratisches Element mit prozentualem Radius

Ein nicht-quadratisches Element mit einem einzelnen `<percentage>` Wert erzeugt einen Bogen einer Ellipse.

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

- {{cssxref("border-radius")}} Kurzschreib-Eigenschaft
- {{cssxref("border-top-right-radius")}}, {{cssxref("border-bottom-right-radius")}}, und {{cssxref("border-bottom-left-radius")}}
