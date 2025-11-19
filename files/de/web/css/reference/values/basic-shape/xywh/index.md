---
title: xywh()
slug: Web/CSS/Reference/Values/basic-shape/xywh
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`xywh()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck mit den angegebenen Abständen von den linken (`x`) und oberen (`y`) Rändern des umschließenden Blocks und der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks. Sie ist eine grundlegende Formfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `xywh()`-Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, auf dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clippingbereichs zu definieren.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### Werte

- `<length-percentage>`
  - : Spezifiziert die {{cssxref("&lt;length-percentage&gt;")}} Werte für die `x`- und `y`-Koordinaten des Rechtecks.
- `<length-percentage [0,∞]>`
  - : Spezifiziert nicht-negative {{cssxref("&lt;length-percentage&gt;")}} Werte für die Breite und Höhe des Rechtecks. Der Mindestwert kann null sein, und es gibt kein Maximum.
- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an, unter Verwendung der gleichen Syntax wie die CSS-[`border-radius`](/de/docs/Web/CSS/Reference/Properties/border-radius) Kurzform-Eigenschaft. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellung eines offset-paths mit xywh()

Im untenstehenden Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `xywh()`-Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, ein magentafarbenes Kästchen in diesem Fall, bewegt. Zwei verschiedene Szenarien werden gezeigt, jeweils mit unterschiedlichen Werten für die `xywh()`-Funktion. Der Pfeil in den Kästchen zeigt auf den rechten Rand des Kästchens.

```html
<div class="container">
  Rectangular path 1
  <div class="path xywh-path-1">→</div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path xywh-path-2">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 30px;
  text-align: center;
}

.path {
  width: 50px;
  height: 50px;
  position: absolute;
  background-color: magenta;
  animation: move 10s linear infinite;
}

.xywh-path-1 {
  offset-path: xywh(20px 20px 100% 100% round 10%);
}

.xywh-path-2 {
  offset-path: xywh(20px 30% 150% 200%);
}

@keyframes move {
  0% {
    offset-distance: 0%;
  }
  100% {
    offset-distance: 100%;
  }
}
```

#### Ergebnis

{{EmbedLiveSample("Erstellung eines offset-paths mit xywh", "100%", 600)}}

- Das Rechteck des Pfads 1 ist um `20px` von den linken und oberen Rändern des umschließenden Blocks versetzt. Dieses Pfadrechteck hat die gleichen Dimensionen wie der umschließende Block, also ist die Breite `100%` der Breite des umschließenden Blocks, und die Höhe ist `100%` der Höhe des umschließenden Blocks. Beachten Sie, wie der Pfeil im Kästchen der `10%`-Kurve (definiert durch `round 10%`) an den Ecken des rechteckigen Pfades folgt.
- Da das obere Limit sowohl für die Breite als auch für die Höhe in `xywh()` unendlich ist, erzeugt das Festlegen der Höhe auf `200%` im Pfad 2 Rechteck ein Rechteck, das doppelt so hoch ist wie der umschließende Block. Beachten Sie, wie sich der Pfeil im Kästchen an den Ecken verhält, wenn kein `round <'border-radius'>` angegeben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}} Funktion
- {{cssxref("basic-shape/rect","rect()")}} Funktion
- {{cssxref("clip-path")}} Eigenschaft
- {{cssxref("offset-path")}} Eigenschaft
- {{cssxref("&lt;basic-shape&gt;")}} Datentyp
- [CSS shapes](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
