---
title: "`xywh()` CSS-Funktion"
short-title: xywh()
slug: Web/CSS/Reference/Values/basic-shape/xywh
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Die **`xywh()`**-Funktion [CSS](/de/docs/Web/CSS) erstellt ein Rechteck unter Verwendung der angegebenen Abstände von den linken (`x`) und oberen (`y`) Rändern des enthaltenden Blocks sowie der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks. Es ist eine grundlegende Formfunktion des {{cssxref("basic-shape")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `xywh()`-Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, in {{cssxref("clip-path")}}, um die Form des Clipping-Bereichs zu definieren, und in {{cssxref("border-shape")}}, um die Form des Rahmens eines Elements zu definieren.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
border-shape: xywh(5% 5% 90% 90% round 20px);
```

### Werte

- `<length-percentage>`
  - : Gibt die {{cssxref("&lt;length-percentage&gt;")}}-Werte für die `x`- und `y`-Koordinaten des Rechtecks an.
- `<length-percentage [0,∞]>`
  - : Gibt nicht-negative {{cssxref("&lt;length-percentage&gt;")}}-Werte für die Breite und Höhe des Rechtecks an. Der Mindestwert kann null sein, und der Höchstwert ist unbegrenzt.
- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an, unter Verwendung der gleichen Syntax wie die CSS-Kurzschreibweise {{cssxref("border-radius")}}. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit xywh()

Im nachstehenden Beispiel verwendet die Eigenschaft {{cssxref("offset-path")}} die `xywh()`-Funktion, um die Form des Pfades zu definieren, auf dem sich das Element, in diesem Fall ein magentafarbener Kasten, bewegt. Zwei verschiedene Szenarien werden gezeigt, jeweils mit unterschiedlichen Werten für die `xywh()`-Funktion. Der Pfeil innerhalb der Kästen zeigt zur rechten Kante des Kastens.

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

- Das Rechteck des Pfades 1 wird um `20px` von den linken und oberen Rändern des enthaltenden Blocks verschoben. Dieses Pfadrechteck hat die gleichen Abmessungen wie der enthaltende Block, das heißt, die Breite beträgt `100%` der Breite des enthaltenden Blocks, und die Höhe beträgt `100%` der Höhe des enthaltenden Blocks. Beachten Sie, wie der Pfeil innerhalb des Kastens der `10%`-Kurve (definiert durch `round 10%`) an den Ecken des rechteckigen Pfads folgt.
- Da das obere Limit von sowohl Breite als auch Höhe in `xywh()` unendlich ist, macht das Einstellen der Höhe auf `200%` im Pfad-2-Rechteck das generierte Rechteck doppelt so hoch wie den enthaltenden Block. Beachten Sie, wie sich der Pfeil innerhalb des Kastens an den Ecken verhält, wenn kein `round <'border-radius'>` angegeben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}}-Funktion
- {{cssxref("basic-shape/rect","rect()")}}-Funktion
- {{cssxref("border-shape")}}-Eigenschaft
- {{cssxref("clip-path")}}-Eigenschaft
- {{cssxref("offset-path")}}-Eigenschaft
- {{cssxref("basic-shape")}}-Datentyp
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
