---
title: <gradient>
slug: Web/CSS/gradient
l10n:
  sourceCommit: 87516f27d798caad1c3b2f1e5c4a9017ec1b3daf
---

{{CSSRef}}

Der **`<gradient>`** [CSS](/de/docs/Web/CSS) [Datentyp](/de/docs/Web/CSS/CSS_Types) ist ein besonderer Typ von {{cssxref("&lt;image&gt;")}}, der aus einem fortschreitenden Übergang zwischen zwei oder mehr Farben besteht.

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

Ein CSS-Verlauf hat [keine intrinsischen Dimensionen](/de/docs/Web/CSS/image#description); d.h., er hat keine natürliche oder bevorzugte Größe, noch ein bevorzugtes Verhältnis. Seine konkrete Größe wird der Größe des Elements entsprechen, auf das er angewendet wird.

## Syntax

Der `<gradient>` Datentyp wird mit einer der unten aufgeführten Funktionstypen definiert.

### Linearer Verlauf

Lineare Verläufe wechseln die Farben schrittweise entlang einer imaginären Linie. Sie werden mit der {{cssxref("gradient/linear-gradient", "linear-gradient()")}} Funktion erzeugt.

### Radialer Verlauf

Radiale Verläufe wechseln die Farben schrittweise von einem Mittelpunkt (Ursprung). Sie werden mit der {{cssxref("gradient/radial-gradient", "radial-gradient()")}} Funktion erzeugt.

### Kegelförmiger Verlauf

Kegelförmige Verläufe wechseln die Farben schrittweise um einen Kreis. Sie werden mit der {{cssxref("gradient/conic-gradient", "conic-gradient()")}} Funktion erzeugt.

### Wiederholender Verlauf

Wiederholende Verläufe duplizieren einen Verlauf so oft wie nötig, um einen gegebenen Bereich zu füllen. Sie werden mit den Funktionen {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}} und {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}} erzeugt.

## Interpolation

Wie bei jeder Interpolation, die Farben betrifft, werden Verläufe im Alpha-vorvermultiplizierten Farbraum berechnet. Dies verhindert, dass unerwartete Grautöne erscheinen, wenn sowohl die Farbe als auch die Deckkraft verändert werden. (Beachten Sie, dass ältere Browser dieses Verhalten möglicherweise nicht verwenden, wenn das [transparente Schlüsselwort](/de/docs/Web/CSS/named-color#transparent) verwendet wird.)

## Formale Syntax

{{csssyntax}}

## Beispiele

### Beispiel eines linearen Verlaufs

Ein einfacher linearer Verlauf.

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

### Beispiel eines radialen Verlaufs

Ein einfacher radialer Verlauf.

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

### Beispiel eines kegelförmigen Verlaufs

Ein einfaches Beispiel für einen kegelförmigen Verlauf. Beachten Sie, dass dies noch nicht weit verbreitet in Browsern unterstützt wird.

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

Einfache Beispiele für wiederholende lineare und radiale Verläufe.

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
- Verlaufsfunktionen: {{cssxref("gradient/linear-gradient", "linear-gradient()")}}, {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("gradient/radial-gradient", "radial-gradient()")}}, {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}, {{cssxref("gradient/conic-gradient", "conic-gradient()")}}, {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
- [CSS Grundlegende Datentypen](/de/docs/Web/CSS/CSS_Types)
- [CSS Einheiten und Werte](/de/docs/Web/CSS/CSS_Values_and_Units)
- [Lernen: Werte und Einheiten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
