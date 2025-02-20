---
title: <gradient>
slug: Web/CSS/gradient
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Der **`<gradient>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types) ist eine spezielle Art von {{cssxref("&lt;image&gt;")}}, die aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht.

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

Ein CSS-Gradient hat [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); das heißt, er hat weder eine natürliche oder bevorzugte Größe noch ein bevorzugtes Verhältnis. Seine konkrete Größe entspricht der Größe des Elements, auf das er angewendet wird.

## Syntax

Der `<gradient>`-Datentyp wird mit einer der unten aufgeführten Funktionstypen definiert.

### Linearer Gradient

Lineare Gradients verändern die Farben progressiv entlang einer imaginären Linie. Sie werden mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}}-Funktion erzeugt.

### Radialer Gradient

Radiale Gradients verändern die Farben progressiv von einem Mittelpunkt (Ursprung). Sie werden mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}}-Funktion erzeugt.

### Kegelförmiger Gradient

Kegelförmige Gradients verändern die Farben progressiv um einen Kreis herum. Sie werden mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}}-Funktion erzeugt.

### Wiederholender Gradient

Wiederholende Gradients duplizieren einen Gradient, so oft wie erforderlich, um einen bestimmten Bereich auszufüllen. Sie werden mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt.

## Interpolation

Wie bei jeder Interpolation, die Farben umfasst, werden Gradients im Alpha-vorverarbeiteten Farbraum berechnet. Dies verhindert das Auftreten unerwarteter Grautöne, wenn sich sowohl die Farbe als auch die Deckkraft ändern. (Beachten Sie, dass ältere Browser dieses Verhalten möglicherweise nicht verwenden, wenn das [transparent-Schlüsselwort](/de/docs/Web/CSS/named-color#transparent) verwendet wird.)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel für einen linearen Gradient

Ein einfacher linearer Gradient.

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

### Beispiel für einen radialen Gradient

Ein einfacher radialer Gradient.

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
  background: radial-gradient(red, yellow, rgb(30 144 255));
}
```

{{EmbedLiveSample('Radial_gradient_example', 240, 120)}}

### Beispiel für einen kegelförmigen Gradient

Ein einfaches Beispiel für einen kegelförmigen Gradient. Beachten Sie, dass dies derzeit nicht in allen Browsern weitreichend unterstützt wird.

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

### Beispiele für wiederholende Gradients

Einfache Beispiele für wiederholende lineare und radiale Gradients.

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

- [CSS-Gradients verwenden](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Gradient-Funktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS-Basisdatentypen](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types)
- [CSS-Werte und -Einheiten](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
