---
title: <gradient>
slug: Web/CSS/gradient
l10n:
  sourceCommit: 0fb61080baf21a3efd8f21911bd4554c14f75c17
---

Der **`<gradient>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) ist ein spezieller Typ von {{cssxref("&lt;image&gt;")}}, der aus einem allmählichen Übergang zwischen zwei oder mehr Farben besteht.

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

Ein CSS-Verlauf hat [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h. er hat keine natürliche oder bevorzugte Größe und kein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

## Syntax

Der `<gradient>` Datentyp wird mit einer der unten aufgeführten Funktionstypen definiert.

### Linearer Verlauf

Lineare Verläufe ändern die Farben allmählich entlang einer imaginären Linie. Sie werden mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion erzeugt.

### Radialer Verlauf

Radiale Verläufe ändern die Farben allmählich von einem Mittelpunkt (Ursprung) aus. Sie werden mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion erzeugt.

### Kegelförmiger Verlauf

Kegelförmige Verläufe ändern die Farben allmählich um einen Kreis herum. Sie werden mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion erzeugt.

### Wiederholender Verlauf

Wiederholende Verläufe duplizieren einen Verlauf so oft wie nötig, um einen gegebenen Bereich zu füllen. Sie werden mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt.

## Interpolation

Wie bei jeder Interpolation, die Farben betrifft, werden Verläufe im alpha-vormultiplizierten Farbraum berechnet. Dies verhindert, dass unerwartete Grautöne erscheinen, wenn sowohl die Farbe als auch die Transparenz verändert werden. (Beachten Sie, dass ältere Browser dieses Verhalten möglicherweise nicht verwenden, wenn das [transparent Schlüsselwort](/de/docs/Web/CSS/named-color#transparent) benutzt wird.)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für einen linearen Verlauf

Ein linearer Verlauf.

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

### Beispiel für einen radialen Verlauf

Ein radialer Verlauf.

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

### Beispiel für einen kegelförmigen Verlauf

Ein Beispiel für einen kegelförmigen Verlauf.

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

### Beispiele für wiederholende Verläufe

Beispiele für wiederholende lineare und radiale Verläufe.

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

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Gradient-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS Werte und Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
