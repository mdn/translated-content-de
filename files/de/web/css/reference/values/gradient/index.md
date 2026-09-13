---
title: CSS-Typ `<gradient>`
short-title: <gradient>
slug: Web/CSS/Reference/Values/gradient
l10n:
  sourceCommit: 3fb9ea0187429234b47cb0385a9515a69757fe63
---

Der [CSS](/de/docs/Web/CSS)-[Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) **`<gradient>`** ist ein spezieller Typ von {{cssxref("image")}}, der aus einem stufenlosen Übergang zwischen zwei oder mehr Farben besteht.

Ein CSS-Farbverlauf hat [keine intrinsischen Abmessungen](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat weder eine natürliche oder bevorzugte Größe noch ein bevorzugtes Seitenverhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

{{InteractiveExample("CSS Demo: &lt;gradient&gt;")}}

```css interactive-example-choice
background: linear-gradient(#f69d3c, #3f87a6);
```

```css interactive-example-choice
background: radial-gradient(#f69d3c, #3f87a6);
```

```css interactive-example-choice
background: repeating-linear-gradient(#f69d3c, #3f87a6 50px);
```

```css interactive-example-choice
background: repeating-radial-gradient(#f69d3c, #3f87a6 50px);
```

```css interactive-example-choice
background: conic-gradient(#f69d3c, #3f87a6);
```

```html interactive-example
<section class="display-block" id="default-example">
  <div id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  min-height: 100%;
}
```

## Syntax

Der Datentyp `<gradient>` wird mit einem der unten aufgeführten Funktionstypen definiert.

### Linearer Farbverlauf

Lineare Farbverläufe führen Farben entlang einer imaginären Linie stufenlos ineinander über. Sie werden mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}} erzeugt.

### Radialer Farbverlauf

Radiale Farbverläufe führen Farben stufenlos von einem Mittelpunkt (Ursprung) aus ineinander über. Sie werden mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}} erzeugt.

### Konischer Farbverlauf

Konische Farbverläufe führen Farben stufenlos um einen Kreis herum ineinander über. Sie werden mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}} erzeugt.

### Wiederholender Farbverlauf

Wiederholende Farbverläufe duplizieren einen Farbverlauf so oft wie nötig, um einen gegebenen Bereich auszufüllen. Sie werden mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt.

## Interpolation

Wie bei jeder Interpolation mit Farben werden Farbverläufe im alpha-prämultiplizierten Farbraum berechnet. Dadurch wird verhindert, dass unerwartete Grautöne auftreten, wenn sich sowohl die Farbe als auch die Deckkraft ändern. (Beachten Sie, dass ältere Browser dieses Verhalten bei Verwendung des [Schlüsselworts `transparent`](/de/docs/Web/CSS/Reference/Values/named-color#transparent) möglicherweise nicht verwenden.)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für einen linearen Farbverlauf

Ein linearer Farbverlauf.

```html hidden
<div class="linear-gradient">Linear gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.linear-gradient {
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{EmbedLiveSample('Linear_gradient_example', 240, 120)}}

### Beispiel für einen radialen Farbverlauf

Ein radialer Farbverlauf.

```html hidden
<div class="radial-gradient">Radial gradient</div>
```

```css hidden
div {
  width: 240px;
  height: 80px;
}
```

```css
.radial-gradient {
  background: radial-gradient(red, yellow, dodgerblue);
}
```

{{EmbedLiveSample('Radial_gradient_example', 240, 120)}}

### Beispiel für einen konischen Farbverlauf

Ein Beispiel für einen konischen Farbverlauf.

```html hidden
<div class="conic-gradient">Conic gradient</div>
```

```css hidden
div {
  width: 200px;
  height: 200px;
}
```

```css
.conic-gradient {
  background: conic-gradient(pink, coral, lime);
}
```

{{EmbedLiveSample('Conic_gradient_example', 240, 240)}}

### Beispiele für wiederholende Farbverläufe

Beispiele für wiederholende lineare und radiale Farbverläufe.

```html hidden
<div class="linear-repeat"></div>
<span>Repeating linear gradient</span>
<hr />
<div class="radial-repeat"></div>
<span>Repeating radial gradient</span>
<hr />
<div class="conic-repeat"></div>
<span>Repeating conic gradient</span>
```

```css hidden
div {
  display: inline-block;
  width: 240px;
  height: 80px;
}

span {
  font-weight: bold;
  vertical-align: top;
}
```

```css
.linear-repeat {
  background: repeating-linear-gradient(
    to top left,
    pink,
    pink 5px,
    white 5px,
    white 10px
  );
}

.radial-repeat {
  background: repeating-radial-gradient(
    lime,
    lime 15px,
    white 15px,
    white 30px
  );
}

.conic-repeat {
  background: repeating-conic-gradient(lime, pink 30deg);
}
```

{{EmbedLiveSample('Repeating_gradient_examples', 240, 300)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von CSS-Farbverläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Farbverlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS Basic Data Types](/de/docs/Web/CSS/Reference/Values/Data_types)
- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
