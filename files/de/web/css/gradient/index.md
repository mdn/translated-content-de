---
title: <gradient>
slug: Web/CSS/gradient
l10n:
  sourceCommit: 745950224a21606bb2d953e149b1385b9ea6a3f8
---

{{CSSRef}}

Der **`<gradient>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) ist ein spezieller Typ von {{cssxref("&lt;image&gt;")}}, der aus einem progressiven Übergang zwischen zwei oder mehr Farben besteht.

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

Ein CSS-Gradient hat [keine intrinsischen Abmessungen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das es angewendet wird.

## Syntax

Der `<gradient>`-Datentyp wird mit einer der unten aufgeführten Funktionstypen definiert.

### Linearer Gradient

Lineare Gradienten ändern die Farben progressiv entlang einer imaginären Linie. Sie werden mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion erzeugt.

### Radialer Gradient

Radiale Gradienten ändern die Farben progressiv von einem Mittelpunkt (Ursprung) aus. Sie werden mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion erzeugt.

### Konischer Gradient

Konische Gradienten ändern die Farben progressiv um einen Kreis herum. Sie werden mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion erzeugt.

### Wiederholender Gradient

Wiederholende Gradienten duplizieren einen Gradient, so oft wie nötig, um einen bestimmten Bereich zu füllen. Sie werden mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt.

## Interpolation

Wie bei jeder Interpolation, die Farben umfasst, werden Gradienten im alpha-vormultiplizierten Farbraum berechnet. Dies verhindert, dass unerwartete Grautöne erscheinen, wenn sich sowohl die Farbe als auch die Transparenz ändern. (Beachten Sie, dass ältere Browser dieses Verhalten möglicherweise nicht verwenden, wenn das [Schlüsselwort transparent](/de/docs/Web/CSS/named-color#transparent) verwendet wird.)

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

### Beispiel für einen konischen Gradient

Ein einfaches Beispiel für einen konischen Gradient. Beachten Sie, dass dies bisher nicht weit verbreitet in Browsern unterstützt wird.

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

### Beispiele für wiederholende Gradienten

Einfache Beispiele für wiederholende lineare und radiale Gradienten.

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

- [Verwendung von CSS-Gradienten](/de/docs/Web/CSS/CSS_images/Using_CSS_gradients)
- Gradientfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Types)
- [CSS-Einheiten und -Werte](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Einführung in CSS: Werte und Einheiten](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
