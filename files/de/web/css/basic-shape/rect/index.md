---
title: rect()
slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 802978f38824a4132b4f9b3d3c23fb6970beba74
---

{{CSSRef}}

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck in einem angegebenen Abstand von den oberen und linken Rändern des umgebenden Blocks. Es handelt sich um eine Grundformfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/CSS_Types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt und in {{cssxref("clip-path")}}, um die Form des Clip-Bereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingelassene Rechteck wird durch Angabe von vier Offset-Werten definiert, beginnend mit dem Offset der oberen Kante im Uhrzeigersinn, sowie einem optionalen `round` Schlüsselwort mit dem `border-radius` Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Offset-Wert kann entweder eine `<length>`, ein `<percentage>`, oder das Schlüsselwort `auto` sein.

- `<length-percentage>`

  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}} Wert des Abstands von der oberen, rechten, unteren oder linken Kante des Rechtecks vom oberen oder linken Rand des umgebenden Blocks an. Die erste (obere) und dritte (untere) Werte sind Abstände von der oberen Kante des umgebenden Blocks, und die zweite (rechte) und vierte (linke) Werte sind Abstände von der linken Kante des umgebenden Blocks. Die zweite (rechte) und dritte (untere) Werte werden durch die vierte (linke) und erste (obere) Werte jeweils begrenzt, um zu verhindern, dass die untere Kante über die obere Kante und die rechte Kante über die linke Kante hinausgeht. Zum Beispiel wird `rect(10px 0 0 20px)` zu `rect(10px 20px 10px 20px)` begrenzt.

- `auto`

  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks übereinstimmen. Wenn `auto` für den ersten (oberen) oder vierten (linken) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn er für den zweiten (rechten) oder dritten (unteren) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an, wobei die gleiche Syntax wie bei der CSS [`border-radius`](/de/docs/Web/CSS/border-radius) Kurzschreibweise verwendet wird. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `rect()` Funktion, um die Form des Pfades zu definieren, auf dem sich das Element, in diesem Fall ein rotes Quadrat, bewegt. Es werden drei verschiedene Szenarien gezeigt, jedes mit unterschiedlichen Werten für die `rect()` Funktion. Der Pfeil innerhalb der Kästchen zeigt auf den rechten Rand des Kästchens.

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

{{EmbedLiveSample("Creating an offset-path using rect", "100%", 400)}}

- Das Rechteck von Pfad 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Abstände von der oberen Kante des umgebenden Blocks. Die rechten und linken Werte sind Abstände von der linken Kante des umgebenden Blocks. Zusätzlich ist die Ecke des Rechtecks bei `20%` abgerundet, sodass das rote Kästchenelement beim Bewegen entlang dieses Pfades den abgerundeten Ecken folgt. Beachten Sie, wie der Pfeil innerhalb des Kästchens sich an den Kurven des rechteckigen Pfades entlang bewegt.
- Das Rechteck von Pfad 2 ähnelt dem Rechteck von Pfad 1, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dadurch passt sich die rechte Kante des Rechtecks der rechten Kante des umgebenden Blocks an, sodass ein breiteres Rechteck als bei Pfad 1 entsteht.
- Das Rechteck von Pfad 3 gibt sowohl die linken als auch die rechten Kantenparameter als `auto` an und lässt den `round <'border-radius'>` Parameter weg. Dies erzeugt ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige Ecken anstelle von abgerundeten Ecken wie bei den Rechtecken von Pfad 1 und Pfad 2 aufweist. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kästchens an den Ecken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}} Funktion
- {{cssxref("basic-shape/xywh","xywh()")}} Funktion
- {{cssxref("clip-path")}} Eigenschaft
- {{cssxref("offset-path")}} Eigenschaft
- {{cssxref("&lt;basic-shape&gt;")}} Datentyp
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
