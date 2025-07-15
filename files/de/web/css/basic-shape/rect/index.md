---
title: rect()
slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck in einem bestimmten Abstand von den oberen und linken Kanten des umgebenden Blocks. Sie ist eine grundlegende Formfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Zuschneidebereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das versenkte Rechteck wird definiert, indem vier Versatzwerte angegeben werden, beginnend mit dem oberen Kantenversatz und im Uhrzeigersinn verlaufend, sowie einem optionalen `round` Schlüsselwort mit dem `border-radius` Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder ein `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}} Wert der Entfernung der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umgebenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Entfernungen von der oberen Kante des umgebenden Blocks, und die zweiten (rechts) und vierten (links) Werte sind Entfernungen von der linken Kante des umgebenden Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte begrenzt, um zu verhindern, dass die untere Kante die obere Kante und die rechte Kante die linke Kante überschreitet. Beispielsweise wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks übereinstimmen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn es für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit derselben Syntax wie die CSS- [border-radius](/de/docs/Web/CSS/border-radius) Kurzschreibweise an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `rect()` Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, in diesem Fall ein rotes Feld, bewegt. Drei verschiedene Szenarien werden gezeigt, die jeweils unterschiedliche Werte für die `rect()` Funktion verwenden. Der Pfeil innerhalb der Kästen zeigt auf die rechte Kante des Kastens.

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

- Das Rechteck von Pfad 1 gibt die Entfernungen der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Entfernungen von der oberen Kante des umgebenden Blocks. Die rechten und linken Werte sind Entfernungen von der linken Kante des umgebenden Blocks. Darüber hinaus ist die Ecke des Rechtecks mit `20%` abgerundet, wodurch sich das rote Kastenelement beim Bewegen entlang dieses Pfads den abgerundeten Ecken anpasst. Beachten Sie, wie der Pfeil innerhalb des Kastens der Kurve an den Ecken des rechteckigen Pfads folgt.
- Das Rechteck von Pfad 2 ist dem Rechteck von Pfad 1 ähnlich, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies führt dazu, dass die rechte Kante des Rechtecks mit der rechten Kante des umgebenden Blocks übereinstimmt und ein breiteres Rechteck als Pfad 1 entsteht.
- Das Rechteck von Pfad 3 legt sowohl die linken als auch die rechten Kantenparameter als `auto` fest und lässt den `round <'border-radius'>` Parameter weg. Dies erzeugt ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige statt abgerundete Ecken wie bei den Rechtecken von Pfad 1 und Pfad 2 aufweist. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kastens an den Ecken.

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
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
