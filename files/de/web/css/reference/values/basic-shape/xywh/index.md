---
title: xywh()
slug: Web/CSS/Reference/Values/basic-shape/xywh
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`xywh()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck unter Verwendung der angegebenen Abstände von der linken (`x`) und oberen (`y`) Kante des umgebenden Blocks sowie der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks. Es handelt sich um eine grundlegende Formfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `xywh()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clipping-Bereichs zu definieren.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### Werte

- `<length-percentage>`
  - : Gibt die {{cssxref("&lt;length-percentage&gt;")}} Werte für die `x` und `y` Koordinaten des Rechtecks an.
- `<length-percentage [0,∞]>`
  - : Gibt nicht-negative {{cssxref("&lt;length-percentage&gt;")}} Werte für die Breite und Höhe des Rechtecks an. Der Mindestwert kann null sein, und der Höchstwert ist unbegrenzt.
- `round <'border-radius'>`
  - : Bestimmt den Radius der abgerundeten Ecken des Rechtecks unter Verwendung derselben Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/Reference/Properties/border-radius) Kurzform-Eigenschaft. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-paths mit xywh()

Im folgenden Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `xywh()` Funktion, um die Form des Pfades zu definieren, auf dem sich das Element, in diesem Fall ein magentafarbener Kasten, bewegt. Zwei verschiedene Szenarien werden gezeigt, jedes mit unterschiedlichen Werten für die `xywh()` Funktion. Der Pfeil innerhalb der Kästen zeigt auf den rechten Rand des Kastens.

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

{{EmbedLiveSample("Creating offset-path using xywh", "100%", 600)}}

- Das path 1 Rechteck ist um `20px` von den linken und oberen Kanten des umgebenden Blocks verschoben. Dieses Pfadrechteck hat dieselbe Dimension wie der umgebende Block, das heißt, die Breite beträgt `100%` der Breite des umgebenden Blocks, und die Höhe beträgt `100%` der Höhe des umgebenden Blocks. Beachten Sie, wie der Pfeil innerhalb des Kastens der `10%` Krümmung (definiert durch `round 10%`) an den rechteckigen Pfadecken folgt.
- Da das obere Limit sowohl für die Breite als auch für die Höhe in `xywh()` unendlich ist, macht die Einstellung der Höhe auf `200%` im path 2 Rechteck das erzeugte Rechteck doppelt so hoch wie den umgebenden Block. Beachten Sie, wie sich der Pfeil innerhalb des Kastens an den Ecken verhält, wenn kein `round <'border-radius'>` angegeben ist.

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
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
