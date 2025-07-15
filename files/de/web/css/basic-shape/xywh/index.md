---
title: xywh()
slug: Web/CSS/basic-shape/xywh
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`xywh()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck, indem sie die angegebenen Abstände von den linken (`x`) und oberen (`y`) Kanten des umgebenden Blocks und die angegebene Breite (`w`) und Höhe (`h`) des Rechtecks verwendet. Es ist eine grundlegende Formfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types). Sie können die `xywh()`-Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Ausschnittbereichs zu definieren.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### Werte

- `<length-percentage>`
  - : Gibt die {{cssxref("&lt;length-percentage&gt;")}}-Werte für die `x`- und `y`-Koordinaten des Rechtecks an.
- `<length-percentage [0,∞]>`
  - : Gibt nicht negative {{cssxref("&lt;length-percentage&gt;")}}-Werte für die Breite und Höhe des Rechtecks an. Der Mindestwert kann null sein, und der Höchstwert hat kein Limit.
- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit derselben Syntax wie die CSS-{{cssxref("border-radius")}}-Shorthand-Eigenschaft an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-paths mit xywh()

Im folgenden Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `xywh()`-Funktion, um die Form des Pfades zu definieren, auf dem sich das Element, in diesem Fall ein magentafarbener Kasten, bewegt. Es werden zwei verschiedene Szenarien gezeigt, jedes mit unterschiedlichen Werten für die `xywh()`-Funktion. Der Pfeil innerhalb der Kästen zeigt auf den rechten Rand des Kastens.

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

- Das Rechteck des Pfades 1 ist um `20px` von den linken und oberen Kanten des umgebenden Blocks versetzt. Dieses Pfad-Rechteck hat die gleichen Abmessungen wie der umgebende Block, das heißt, die Breite beträgt `100%` der Breite des umgebenden Blocks und die Höhe `100%` der Höhe des umgebenden Blocks. Beachten Sie, wie der Pfeil innerhalb des Kastens der `10%` Kurve (definiert durch `round 10%`) an den Ecken des rechteckigen Pfads folgt.
- Da das obere Limit sowohl für Breite als auch für Höhe in `xywh()` unendlich ist, führt die Einstellung der Höhe auf `200%` im Pfad 2-Rechteck dazu, dass das erzeugte Rechteck doppelt so hoch wie der umgebende Block ist. Beachten Sie, wie sich der Pfeil innerhalb des Kastens an den Ecken verhält, wenn `round <'border-radius'>` nicht angegeben ist.

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
