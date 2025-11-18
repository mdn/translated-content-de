---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck in der angegebenen Entfernung von den oberen und linken Kanten des umgebenden Blocks. Es ist eine Grundformfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clip-Bereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingesetzte Rechteck wird definiert, indem vier Versatzwerte angegeben werden, beginnend mit dem oberen Kantenversatz im Uhrzeigersinn, und ein optionales `round` Schlüsselwort mit dem `border-radius` Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}} Wert des Abstands der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umgebenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Abstände von der oberen Kante des umgebenden Blocks, und die zweiten (rechts) und vierten (links) Werte sind Abstände von der linken Kante des umgebenden Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte geklemmt, um zu verhindern, dass die untere Kante die obere Kante und die rechte Kante die linke Kante überschreiten. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` geklemmt.

- `auto`
  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks übereinstimmen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn es für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit der gleichen Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/Reference/Properties/border-radius) Kurzform-Eigenschaft an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `rect()` Funktion, um die Form des Pfades zu definieren, auf dem sich das Element, in diesem Fall ein rotes Kästchen, bewegt. Es werden drei verschiedene Szenarien gezeigt, die jeweils unterschiedliche Werte für die `rect()` Funktion verwenden. Der Pfeil in den Kästchen zeigt auf die rechte Kante des Kästchens.

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

- Das Rechteck des Pfades 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Abstände von der oberen Kante des umgebenden Blocks. Die rechten und linken Werte sind Abstände von der linken Kante des umgebenden Blocks. Zusätzlich ist die Ecke des Rechtecks bei `20%` abgerundet, wodurch das rote Kästchen-Element den abgerundeten Ecken folgt, wenn es sich entlang diesem Pfad bewegt. Beachten Sie, wie der Pfeil im Kästchen der Kurve an den Ecken des rechteckigen Pfades folgt.
- Das Rechteck des Pfads 2 ähnelt dem des Pfads 1, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies führt dazu, dass die rechte Kante des Rechtecks mit der rechten Kante des umgebenden Blocks übereinstimmt, wodurch ein breiteres Rechteck als bei Pfad 1 entsteht.
- Das Rechteck des Pfads 3 gibt sowohl die linken als auch die rechten Kantenparameter als `auto` an und lässt den `round <'border-radius'>` Parameter weg. Dies erzeugt ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige Ecken anstelle von abgerundeten Ecken wie die Rechtecke der Pfade 1 und 2 besitzt. Beachten Sie die Bewegung des Pfeils in diesem Kästchen an den Ecken.

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
- [CSS Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
