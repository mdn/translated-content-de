---
title: "`<gradient>` CSS-Typ"
short-title: <gradient>
slug: Web/CSS/Reference/Values/gradient
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Der **`<gradient>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/Reference/Values/Data_types) ist ein spezieller Typ von {{cssxref("image")}}, der aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht.

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

Ein CSS-Verlauf hat [keine intrinsische Größe](/de/docs/Web/CSS/Reference/Values/image#description); das heißt, er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

## Syntax

Der `<gradient>` Datentyp wird durch eine der unten aufgeführten Funktionstypen definiert.

### Lineare Gradienten

Lineare Verläufe ändern Farben fortschreitend entlang einer imaginären Linie. Sie werden mit der Funktion {{cssxref("gradient/linear-gradient", "linear-gradient()")}} erzeugt.

### Radiale Gradienten

Radiale Verläufe ändern Farben fortschreitend von einem Mittelpunkt (Ursprung) aus. Sie werden mit der Funktion {{cssxref("gradient/radial-gradient", "radial-gradient()")}} erzeugt.

### Kegelförmige Gradienten

Kegelförmige Verläufe ändern Farben fortschreitend um einen Kreis herum. Sie werden mit der Funktion {{cssxref("gradient/conic-gradient", "conic-gradient()")}} erzeugt.

### Wiederholende Gradienten

Wiederholende Verläufe duplizieren einen Verlauf so oft wie nötig, um einen gegebenen Bereich zu füllen. Sie werden mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt.

## Interpolation

Wie bei jeder Interpolation, die Farben betrifft, werden Verläufe im alpha-vorgemultiplizierten Farbraum berechnet. Dies verhindert, dass unerwartete Grautöne erscheinen, wenn sowohl die Farbe als auch die Deckkraft verändert werden. (Beachten Sie, dass ältere Browser dieses Verhalten möglicherweise nicht verwenden, wenn das [transparente Schlüsselwort](/de/docs/Web/CSS/Reference/Values/named-color#transparent) verwendet wird.)

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

- [Verwendung von CSS-Verläufen](/de/docs/Web/CSS/Guides/Images/Using_gradients)
- Verlauffunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS Grunddatentypen](/de/docs/Web/CSS/Reference/Values/Data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/Guides/Values_and_units) Modul
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
