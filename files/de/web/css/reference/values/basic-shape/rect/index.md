---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erzeugt ein Rechteck in der angegebenen Entfernung von den oberen und linken Kanten des umgebenden Blocks. Sie ist eine Grundform-Funktion des {{cssxref("basic-shape")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, auf dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Ausschnittbereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingeschnittene Rechteck wird definiert, indem vier Offset-Werte angegeben werden, die mit dem oberen Kantenoffset beginnen und im Uhrzeigersinn fortfahren. Ein optionales `round`-Schlüsselwort mit dem `border-radius`-Parameter kann hinzugefügt werden, um abgerundete Ecken zum Rechteck hinzuzufügen. Jeder Offset-Wert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}}-Wert des Abstands der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umgebenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Abstände von der oberen Kante des umgebenden Blocks, und die zweiten (rechts) und vierten (links) Werte sind Abstände von der linken Kante des umgebenden Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte beschränkt, um zu verhindern, dass die untere Kante über die obere Kante und die rechte Kante über die linke Kante hinweg bewegt wird. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks zusammenfallen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn es für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks unter Verwendung derselben Syntax wie die CSS-Kurzschreibweise {{cssxref("border-radius")}} an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die Eigenschaft {{cssxref("offset-path")}} die Funktion `rect()`, um die Form des Pfades zu definieren, auf dem sich das Element – in diesem Fall ein rotes Feld – bewegt. Es werden drei verschiedene Szenarien gezeigt, die jeweils unterschiedliche Werte für die `rect()`-Funktion verwenden. Der Pfeil innerhalb der Box zeigt auf die rechte Kante der Box.

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

- Das Rechteck des Pfad 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Abstände von der oberen Kante des umgebenden Blocks. Die rechten und linken Werte sind Abstände von der linken Kante des umgebenden Blocks. Zusätzlich ist die Ecke des Rechtecks an `20%` abgerundet, was das rote Box-Element den abgerundeten Ecken folgen lässt, während es sich entlang dieses Pfades bewegt. Beachten Sie, wie der Pfeil innerhalb der Box der Kurve an den rechteckigen Pfadecken folgt.
- Das Rechteck des Pfad 2 ähnelt dem Rechteck des Pfad 1, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies bewirkt, dass die rechte Kante des Rechtecks mit der rechten Kante des umgebenden Blocks übereinstimmt, und erstellt ein breiteres Rechteck als Pfad 1.
- Das Rechteck des Pfad 3 gibt sowohl die linken als auch die rechten Kantenparameter als `auto` an und lässt den Parameter `round <'border-radius'>` weg. Dies erstellt ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige Ecken anstelle von abgerundeten Ecken wie bei den Pfad 1 und Pfad 2-Rechtecken. Beachten Sie die Bewegung des Pfeils innerhalb dieser Box an den Ecken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}} Funktion
- {{cssxref("basic-shape/xywh","xywh()")}} Funktion
- {{cssxref("clip-path")}} Eigenschaft
- {{cssxref("offset-path")}} Eigenschaft
- {{cssxref("basic-shape")}} Datentyp
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
