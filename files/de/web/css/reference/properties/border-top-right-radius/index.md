---
title: "`border-top-right-radius` CSS property"
short-title: border-top-right-radius
slug: Web/CSS/Reference/Properties/border-top-right-radius
l10n:
  sourceCommit: f78ca75460fbdbc7f17b6e366dad47b9760054b0
---

Die **`border-top-right-radius`** [CSS](/de/docs/Web/CSS)-Eigenschaft rundet die obere rechte Ecke eines Elements ab, indem sie den Radius (oder die Radien der Semi-Haupt- und der Semi-Nebenachse) der Ellipse angibt, die die Krümmung der Ecke definiert.

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

- Der Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt den Radius des Kreises an, der für die Grenze in dieser Ecke verwendet werden soll.

Mit zwei Werten:

- Der erste Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt die horizontale Semi-Hauptachse der Ellipse an, die für die Grenze in dieser Ecke verwendet werden soll.
- Der zweite Wert ist ein {{cssxref("&lt;length&gt;")}} oder ein {{cssxref("&lt;percentage&gt;")}} und gibt die vertikale Semi-Hauptachse der Ellipse an, die für die Grenze in dieser Ecke verwendet werden soll.

### Werte

- `<length-percentage>`
  - : Gibt die Größe des Kreisradius oder die Semi-Haupt- und Semi-Nebenachse der Ellipse an. Als absolute Länge kann er in jeder Einheit ausgedrückt werden, die vom CSS-{{cssxref("&lt;length&gt;")}}-Datentyp erlaubt ist. Prozentwerte für die horizontale Achse beziehen sich auf die Breite der Box, Prozentwerte für die vertikale Achse beziehen sich auf die Höhe der Box. Negative Werte sind ungültig.

## Beschreibung

Die Abrundung kann ein Kreis oder eine Ellipse sein, oder wenn einer der Werte `0` ist, wird keine Abrundung vorgenommen und die Ecke bleibt quadratisch.

![border-top-right-radius.png](border-top-right-radius.png)

Ein Hintergrund, sei es ein Bild oder eine Farbe, wird an der Grenze abgegrenzt, auch wenn sie abgerundet ist; der genaue Ort der Abgrenzung wird durch den Wert der {{cssxref("background-clip")}}-Eigenschaft definiert.

> [!NOTE]
> Wenn der Wert dieser Eigenschaft nicht in einer {{cssxref("border-radius")}}-Kurzschreibweise festgelegt ist, die auf das Element nach der `border-top-right-radius` CSS-Eigenschaft angewendet wird, wird der Wert dieser Eigenschaft dann durch die [Kurzschreibweise](/de/docs/Web/CSS/Guides/Cascade/Shorthand_properties) auf ihren Anfangswert zurückgesetzt.

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

Zwei unterschiedliche `<length>`-Werte erzeugen einen Bogen einer Ellipse.

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

### Quadratisches Element mit Prozent-Radius

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

### Nicht-quadratisches Element mit Prozent-Radius

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
