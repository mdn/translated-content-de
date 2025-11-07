---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck in der angegebenen Entfernung von den oberen und linken Kanten des umgebenden Blocks. Sie ist eine Grundformfunktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clip-Bereiches zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingekerbte Rechteck wird definiert durch die Angabe von vier Versatzwerten, beginnend mit dem Versatz der oberen Kante und im Uhrzeigersinn fortschreitend, sowie einem optionalen `round` Schlüsselwort mit dem `border-radius` Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}} Wert der Entfernung der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umgebenden Blocks an. Die ersten (oberen) und dritten (unteren) Werte sind Entfernungen von der oberen Kante des umgebenden Blocks, und die zweiten (rechten) und vierten (linken) Werte sind Entfernungen von der linken Kante des umgebenden Blocks. Die zweiten (rechten) und dritten (unteren) Werte werden durch die vierten (linken) und ersten (oberen) Werte begrenzt, um zu verhindern, dass die untere Kante die obere Kante und die rechte Kante die linke Kante überschreitet. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks zusammenfallen. Wenn `auto` für den ersten (oberen) oder vierten (linken) Wert verwendet wird, ist der Wert von `auto` `0`, und wenn er für den zweiten (rechten) oder dritten (unteren) Wert verwendet wird, ist der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an, wobei die gleiche Syntax wie bei der CSS [`border-radius`](/de/docs/Web/CSS/Reference/Properties/border-radius) Kurzschreib-Weise verwendet wird. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `rect()` Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, in diesem Fall ein rotes Kästchen, bewegt. Drei verschiedene Szenarien werden gezeigt, die jeweils unterschiedliche Werte für die `rect()` Funktion verwenden. Der Pfeil innerhalb der Kästchen zeigt auf die rechte Kante des Kästchens.

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

- Das Rechteck für Pfad 1 gibt die Entfernungen der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Entfernungen von der oberen Kante des umgebenden Blocks. Die rechten und linken Werte sind Entfernungen von der linken Kante des umgebenden Blocks. Darüber hinaus ist die Ecke des Rechtecks an `20%` abgerundet, wodurch das rote Box-Element den abgerundeten Ecken folgt, während es entlang dieses Pfads bewegt wird. Beachten Sie, wie der Pfeil innerhalb des Kästchens der Kurve an den Ecken des rechteckigen Pfades folgt.
- Das Rechteck für Pfad 2 ähnelt dem Rechteck für Pfad 1, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dadurch passt sich die rechte Kante des Rechtecks der rechten Kante des umgebenden Blocks an und schafft ein breiteres Rechteck als Pfad 1.
- Das Rechteck für Pfad 3 gibt sowohl die linken als auch die rechten Kantenparameter als `auto` an und lässt den `round <'border-radius'>` Parameter weg. Dies erzeugt ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige Ecken anstelle von abgerundeten Ecken wie bei den Rechtecken für Pfad 1 und Pfad 2. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kästchens an den Ecken.

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
