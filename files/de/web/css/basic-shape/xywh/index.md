---
title: xywh()
slug: Web/CSS/basic-shape/xywh
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`xywh()`**-Funktion in [CSS](/de/docs/Web/CSS) erstellt ein Rechteck anhand der angegebenen Abstände von den linken (`x`) und oberen (`y`) Kanten des umgebenden Blocks sowie der angegebenen Breite (`w`) und Höhe (`h`) des Rechtecks. Es handelt sich um eine Grundform-Funktion des {{cssxref("&lt;basic-shape&gt;")}}-[Datentyps](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types). Sie können die Funktion `xywh()` in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erzeugen, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form der Ausschnittsregion zu definieren.

## Syntax

```css
offset-path: xywh(0 1% 2px 3% round 0 1px 2% 3px);
clip-path: xywh(1px 2% 3px 4em round 0 1% 2px 3em);
```

### Werte

- `<length-percentage>`
  - : Bestimmt die Werte des {{cssxref("&lt;length-percentage&gt;")}} für die `x`- und `y`-Koordinaten des Rechtecks.
- `<length-percentage [0,∞]>`
  - : Gibt nicht-negative {{cssxref("&lt;length-percentage&gt;")}}-Werte für die Breite und Höhe des Rechtecks an. Der Minimalwert kann null sein, und es gibt keine Obergrenze für den Maximalwert.
- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit der gleichen Syntax wie die CSS-Eigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius) an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-paths mit xywh()

Im folgenden Beispiel verwendet die Eigenschaft {{cssxref("offset-path")}} die Funktion `xywh()`, um die Form des Pfads zu definieren, auf dem sich das Element – in diesem Fall ein magenta-farbener Block – bewegt. Es werden zwei verschiedene Szenarien gezeigt, jeweils mit unterschiedlichen Werten für die Funktion `xywh()`. Der Pfeil innerhalb der Blöcke zeigt auf die rechte Kante des Blocks.

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

- Das Rechteck des Pfads 1 ist um `20px` von den linken und oberen Kanten des umgebenden Blocks versetzt. Dieses Pfad-Rechteck hat die gleichen Dimensionen wie der umgebende Block, d. h. die Breite beträgt `100%` der Breite des umgebenden Blocks und die Höhe `100%` der Höhe des umgebenden Blocks. Beachten Sie, wie der Pfeil innerhalb des Blocks den `10%`-Kurven (definiert durch `round 10%`) an den rechteckigen Pfadecken folgt.
- Da das obere Limit für Breite und Höhe in `xywh()` unendlich ist, erzeugt das Setzen der Höhe auf `200%` im Rechteck Pfad 2 ein Rechteck, das doppelt so hoch ist wie der umgebende Block. Beachten Sie, wie der Pfeil innerhalb des Blocks sich an den Ecken verhält, wenn kein `round <'border-radius'>` angegeben ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}}-Funktion
- {{cssxref("basic-shape/rect","rect()")}}-Funktion
- {{cssxref("clip-path")}}-Eigenschaft
- {{cssxref("offset-path")}}-Eigenschaft
- {{cssxref("&lt;basic-shape&gt;")}} Datentyp
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
