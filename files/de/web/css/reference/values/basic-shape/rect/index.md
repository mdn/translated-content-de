---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck in der angegebenen Entfernung von den oberen und linken Kanten des umgebenden Blocks. Es ist eine grundlegende Formfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form der Clip-Region zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das inset-Rechteck wird definiert, indem vier Offset-Werte angegeben werden, beginnend mit dem oberen Kanten-Offset im Uhrzeigersinn, und einem optionalen `round`-Schlüsselwort mit dem Parameter `border-radius`, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Offset-Wert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}} Wert der Entfernung der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umgebenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Abstände von der oberen Kante des umgebenden Blocks, und die zweiten (rechts) und vierten (links) Werte sind Abstände von der linken Kante des umgebenden Blocks. Die zweiten (rechten) und dritten (unteren) Werte werden durch die vierten (linken) und ersten (oberen) Werte begrenzt, um zu verhindern, dass die untere Kante die obere Kante überschreitet und die rechte Kante die linke Kante überschreitet. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Sorgt dafür, dass die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks übereinstimmt. Wenn `auto` für den ersten (obersten) oder vierten (linken) Wert verwendet wird, beträgt der `auto` Wert `0`, und wenn er für den zweiten (rechten) oder dritten (unteren) Wert verwendet wird, beträgt der `auto` Wert `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit der gleichen Syntax wie die CSS-{{cssxref("border-radius")}}-Kurzform-Eigenschaft an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines Offset-Pfads mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `rect()` Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, in diesem Fall ein rotes Kästchen, bewegt. Drei verschiedene Szenarien werden gezeigt, die jeweils unterschiedliche Werte für die `rect()` Funktion verwenden. Der Pfeil innerhalb der Kästchen zeigt auf die rechte Kante des Kästchens.

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

- Das Rechteck von Pfad 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Abstände von der oberen Kante des umgebenden Blocks. Die rechten und linken Werte sind Abstände von der linken Kante des umgebenden Blocks. Zusätzlich ist die Ecke des Rechtecks bei `20%` abgerundet, sodass das rote Boxelement den abgerundeten Ecken folgt, während es sich entlang dieses Pfads bewegt. Beachten Sie, wie der Pfeil innerhalb des Kästchens der Kurve an den Ecken des rechteckigen Pfades folgt.
- Das Rechteck von Pfad 2 ist ähnlich wie das Rechteck von Pfad 1, mit der Ausnahme, dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies führt dazu, dass die rechte Kante des Rechtecks mit der rechten Kante des umgebenden Blocks übereinstimmt und ein breiteres Rechteck als Pfad 1 erstellt.
- Das Rechteck von Pfad 3 spezifiziert sowohl die linken als auch die rechten Kantenparameter als `auto` und lässt den `round <'border-radius'>` Parameter weg. Dies erzeugt ein Rechteck, das die Breite des umgebenden Blocks hat und rechtwinklige Ecken anstelle von abgerundeten Ecken wie in den Rechtecken der Pfade 1 und 2. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kastens an den Ecken.

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
- [CSS-Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
