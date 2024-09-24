---
title: rect()
slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{CSSRef}}

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erzeugt ein Rechteck in einem bestimmten Abstand von den oberen und linken Kanten des enthaltenen Blocks. Es ist eine Grundformfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/CSS_Types). Sie können die `rect()`-Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clip-Bereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingefügte Rechteck wird durch das Spezifizieren von vier Offset-Werten definiert, beginnend mit dem oberen Kanten-Offset und im Uhrzeigersinn, sowie einem optionalen `round`-Schlüsselwort mit dem `border-radius`-Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Offset-Wert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`

  - : Bestimmt den {{cssxref("&lt;length-percentage&gt;")}} Wert des Abstands der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des enthaltenen Blocks. Die ersten (oben) und dritten (unten) Werte sind Abstände von der oberen Kante des enthaltenen Blocks, und die zweiten (rechts) und vierten (links) Werte sind Abstände von der linken Kante des enthaltenen Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte begrenzt, um zu verhindern, dass die untere Kante die obere Kante überkreuzt und die rechte Kante die linke Kante überkreuzt. Zum Beispiel wird `rect(10px 0 0 20px)` in `rect(10px 20px 10px 20px)` begrenzt.

- `auto`

  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des enthaltenen Blocks übereinstimmen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`. Wenn es für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Bestimmt den Radius der abgerundeten Ecken des Rechtecks unter Verwendung der gleichen Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/border-radius) Kurzschreibweise. Dieser Parameter ist optional.

## Beispiele

### Verwendung von rect() zur Erstellung eines Offset-Pfads

In diesem Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `rect()`-Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, in diesem Fall ein rotes Kästchen, bewegt. Es werden drei verschiedene Szenarien gezeigt, die jeweils unterschiedliche Werte für die `rect()`-Funktion verwenden. Der Pfeil in den Boxen zeigt auf die rechte Kante der Box.

```html
<div class="container">
  Rechteckiger Pfad 1
  <div class="path rect-path-1">→</div>
</div>
<div class="container">
  Rechteckiger Pfad 2
  <div class="path rect-path-2">→</div>
</div>
<div class="container">
  Rechteckiger Pfad 3
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

{{EmbedLiveSample("Erstellen eines Offset-Pfads mit rect", "100%", 400)}}

- Das Rechteck des Pfades 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom enthaltenen Block an. Die oberen und unteren Werte sind Abstände von der oberen Kante des enthaltenen Blocks. Die rechten und linken Werte sind Abstände von der linken Kante des enthaltenen Blocks. Außerdem ist die Ecke des Rechtecks an `20%` abgerundet, wodurch das rote Kästchen-Element den abgerundeten Ecken folgt, während es sich entlang dieses Pfades bewegt. Beachten Sie, wie der Pfeil im Kästchen der Kurve an den rechteckigen Pfadecken folgt.
- Das Rechteck des Pfades 2 ist dem des Pfades 1 ähnlich, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies bewirkt, dass die rechte Kante des Rechtecks mit der rechten Kante des enthaltenen Blocks übereinstimmt, wodurch ein breiteres Rechteck als bei Pfad 1 entsteht.
- Das Rechteck des Pfades 3 gibt sowohl die linken als auch die rechten Kantenparameter als `auto` an und lässt den `round <'border-radius'>`-Parameter weg. Dies erzeugt ein Rechteck, das die Breite des enthaltenen Blocks hat und rechteckige Ecken anstelle von abgerundeten Ecken wie bei den Pfaden 1 und 2 Rechtecken. Beachten Sie die Bewegung des Pfeils in diesem Kästchen an den Ecken.

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
- [CSS Shapes](/de/docs/Web/CSS/CSS_shapes) Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
