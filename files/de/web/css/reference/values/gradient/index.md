---
title: <gradient>
slug: Web/CSS/Reference/Values/gradient
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Der **`<gradient>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein besonderer Typ von {{cssxref("image")}}, der aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht.

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

Ein CSS-Gradient hat [keine intrinsischen Dimensionen](/de/docs/Web/CSS/Reference/Values/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe passt sich der Größe des Elements an, auf das er angewendet wird.

## Syntax

Der `<gradient>` Datentyp wird mit einer der unten aufgelisteten Funktionstypen definiert.

### Linearer Gradient

Lineare Gradienten ändern die Farben progressiv entlang einer imaginären Linie. Sie werden mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion erzeugt.

### Radialer Gradient

Radiale Gradienten ändern die Farben progressiv von einem Mittelpunkt (Ursprung). Sie werden mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion erzeugt.

### Konischer Gradient

Konische Gradienten ändern die Farben progressiv um einen Kreis. Sie werden mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion erzeugt.

### Wiederholender Gradient

Wiederholende Gradienten duplizieren einen Gradient so oft wie nötig, um einen gegebenen Bereich zu füllen. Sie werden mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt.

## Interpolation

Wie bei jeder Interpolation, die Farben betrifft, werden Gradienten im Alpha-vorvermittelten Farbraum berechnet. Dies verhindert das Auftreten unerwarteter Grautöne, wenn sowohl die Farbe als auch die Deckkraft sich ändern. (Es ist zu beachten, dass ältere Browser dieses Verhalten möglicherweise nicht anwenden, wenn das [transparent Schlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color#transparent) verwendet wird.)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel eines linearen Gradients

Ein linearer Gradient.

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

### Beispiel eines radialen Gradients

Ein radialer Gradient.

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

### Beispiel eines konischen Gradients

Ein Beispiel eines konischen Gradients.

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

### Beispiele von wiederholenden Gradienten

Beispiele für wiederholende lineare und radiale Gradienten.

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

- [CSS-Gradienten verwenden](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Gradientenfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- Modul [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
