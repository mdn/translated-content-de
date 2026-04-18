---
title: "`rect()` CSS-Funktion"
short-title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`rect()`** [CSS](/de/docs/Web/CSS)-Funktion erzeugt ein Rechteck in einem bestimmten Abstand von den oberen und linken Kanten des umgebenden Blocks. Es handelt sich um eine Grundformfunktion des {{cssxref("basic-shape")}}-[Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `rect()`-Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clipping-Bereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingeschnittene Rechteck wird definiert, indem vier Versatzwerte angegeben werden, beginnend mit dem oberen Kantenversatz im Uhrzeigersinn, und einem optionalen `round`-Schlüsselwort mit dem `border-radius`-Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder ein `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}}-Wert der Entfernung der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umgebenden Blocks an. Die erste (oben) und dritte (unten) Werte sind Entfernungen von der oberen Kante des umgebenden Blocks, und die zweite (rechts) und vierte (links) Werte sind Entfernungen von der linken Kante des umgebenden Blocks. Die zweite (rechts) und dritte (unten) Werte werden jeweils durch die vierte (links) und erste (oben) Werte begrenzt, um zu verhindern, dass die untere Kante über die obere Kante und die rechte Kante über die linke Kante hinausgeht. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks zusammenfallen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn es für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an und verwendet dabei die gleiche Syntax wie die CSS-{{cssxref("border-radius")}}-Kurzform. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `rect()`-Funktion, um die Form des Pfads zu definieren, auf dem das Element, in diesem Fall ein rotes Kästchen, sich bewegt. Drei verschiedene Szenarien werden gezeigt, wobei jeweils unterschiedliche Werte für die `rect()`-Funktion verwendet werden. Der Pfeil innerhalb der Kästchen zeigt auf die rechte Kante des Kästchens.

```html
<div class="container">
  Rectangular path 1
  <div class="path rect-path-1">→</div>
</div>
<div class="container">
  Rectangular path 2
  <div class="path rect-path-2">→</div>
</div>
<div class="container">
  Rectangular path 3
  <div class="path rect-path-3">→</div>
</div>
```

```css
.container {
  position: relative;
  display: inline-block;
  width: 200px;
  height: 200px;
  border: 1px solid black;
  margin: 15px;
  text-align: center;
}

.path {
  width: 40px;
  height: 40px;
  background-color: red;
  position: absolute;
  animation: move 10s linear infinite;
}

.rect-path-1 {
  offset-path: rect(50px 150px 200px 50px round 20%);
}

.rect-path-2 {
  offset-path: rect(50px auto 200px 50px round 20%);
}

.rect-path-3 {
  offset-path: rect(50px auto 200px auto);
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

{{EmbedLiveSample("Erstellen eines offset-path mit rect", "100%", 400)}}

- Das Rechteck des Pfades 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Entfernungen von der oberen Kante des umgebenden Blocks. Die rechten und linken Werte sind Entfernungen von der linken Kante des umgebenden Blocks. Zusätzlich ist die Ecke des Rechtecks um `20%` abgerundet, was dazu führt, dass das rote Kästchen-Element den abgerundeten Ecken folgt, während es sich entlang dieses Pfads bewegt. Beachten Sie, wie der Pfeil innerhalb des Kastens der Kurve an den Ecken des rechteckigen Pfads folgt.
- Das Rechteck des Pfades 2 ähnelt dem Rechteck des Pfades 1, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dadurch passt sich die rechte Kante des Rechtecks an die rechte Kante des umgebenden Blocks an und erzeugt ein breiteres Rechteck als Pfad 1.
- Das Rechteck des Pfades 3 gibt sowohl die linken als auch die rechten Parameter als `auto` an und lässt den `round <'border-radius'>`-Parameter weg. Dies erzeugt ein Rechteck in der Breite des umgebenden Blocks und rechteckige Ecken anstelle von abgerundeten Ecken wie bei den Rechtecken der Pfade 1 und 2. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kastens an den Ecken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}}-Funktion
- {{cssxref("basic-shape/xywh","xywh()")}}-Funktion
- {{cssxref("clip-path")}}-Eigenschaft
- {{cssxref("offset-path")}}-Eigenschaft
- {{cssxref("basic-shape")}}-Datentyp
- [CSS-Shapes](/de/docs/Web/CSS/Guides/Shapes)-Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
