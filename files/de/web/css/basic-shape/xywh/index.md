---
title: xywh()
slug: Web/CSS/basic-shape/xywh
l10n:
  sourceCommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{CSSRef}}

Die **`xywh()`** [CSS](/de/docs/Web/CSS)-Funktion erzeugt ein Rechteck unter Verwendung der angegebenen Abstände von den linken (`x`) und oberen (`y`) Kanten des umgebenden Blocks sowie der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks. Es handelt sich um eine Grundformen-Funktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/CSS_Types). Sie können die Funktion `xywh()` in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Beschneidungsbereichs zu definieren.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### Werte

- `<length-percentage>`
  - : Spezifiziert die {{cssxref("&lt;length-percentage&gt;")}}-Werte für die `x`- und `y`-Koordinaten des Rechtecks.
- `<length-percentage [0,∞]>`
  - : Spezifiziert nicht-negative {{cssxref("&lt;length-percentage&gt;")}}-Werte für die Breite und Höhe des Rechtecks. Der Mindestwert kann Null sein, und der Höchstwert hat kein Limit.
- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks unter Verwendung derselben Syntax wie die CSS-Kurzeigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius) an. Dieser Parameter ist optional.

## Beispiele

### Offset-Pfad mit xywh() erstellen

Im untenstehenden Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `xywh()`-Funktion, um die Form des Pfades zu definieren, auf dem sich das Element, in diesem Fall ein magentafarbener Kasten, bewegt. Zwei verschiedene Szenarien werden gezeigt, jeweils mit unterschiedlichen Werten für die `xywh()`-Funktion. Der Pfeil innerhalb der Kästen zeigt auf den rechten Rand des Kastens.

```html
<div class="container">
  Rechteckiger Pfad 1
  <div class="path xywh-path-1">→</div>
</div>
<div class="container">
  Rechteckiger Pfad 2
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

- Das Rechteck des Pfades 1 ist um `20px` von den linken und oberen Kanten des umgebenden Blocks versetzt. Dieses Pfad-Rechteck hat die gleichen Abmessungen wie der umgebende Block, das heißt, die Breite beträgt `100%` der Breite des umgebenden Blocks und die Höhe beträgt `100%` der Höhe des umgebenden Blocks. Beachten Sie, wie der Pfeil innerhalb des Kastens der `10%`-Kurve (definiert durch `round 10%`) an den Ecken des rechteckigen Pfades folgt.
- Da das obere Limit der Breite und Höhe in `xywh()` unendlich ist, wird das generierte Rechteck durch Setzen der Höhe auf `200%` im Pfad 2 doppelt so hoch wie der umgebende Block. Beachten Sie, wie sich der Pfeil innerhalb des Kastens an den Ecken verhält, wenn kein `round <'border-radius'>` angegeben ist.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}}-Funktion
- {{cssxref("basic-shape/rect","rect()")}}-Funktion
- {{cssxref("clip-path")}}-Eigenschaft
- {{cssxref("offset-path")}}-Eigenschaft
- {{cssxref("&lt;basic-shape&gt;")}}-Datentyp
- [CSS-Shapes](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
