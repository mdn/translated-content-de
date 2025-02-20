---
title: rect()
slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

Die **`rect()`**-Funktion in [CSS](/de/docs/Web/CSS) erstellt ein Rechteck in einem angegebenen Abstand von den oberen und linken Rändern des umgebenden Blocks. Sie ist eine Grundform-Funktion des {{cssxref("&lt;basic-shape&gt;")}}-[Datentyps](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_data_types). Die `rect()`-Funktion kann in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwendet werden, um den rechteckigen Pfad zu definieren, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clip-Bereichs zu bestimmen.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingesetzte Rechteck wird definiert, indem vier Versatzwerte spezifiziert werden, beginnend mit dem oberen Kantenversatz im Uhrzeigersinn. Ein optionales Schlüsselwort `round` zusammen mit dem `border-radius`-Parameter kann verwendet werden, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`

  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}}-Wert für den Abstand der oberen, rechten, unteren oder linken Kante des Rechtecks von der oberen oder linken Kante des umgebenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Abstände von der oberen Kante des umgebenden Blocks, die zweiten (rechts) und vierten (links) Werte sind Abstände von der linken Kante des umgebenden Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte begrenzt, um zu verhindern, dass die untere Kante die obere Kante und die rechte Kante die linke Kante überschreitet. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`

  - : Lässt die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des umgebenden Blocks zusammenfallen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`. Wenn es für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an und verwendet dabei die gleiche Syntax wie die CSS-Shortcode-Eigenschaft [`border-radius`](/de/docs/Web/CSS/border-radius). Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### offset-path mit rect() erstellen

In diesem Beispiel verwendet die Eigenschaft {{cssxref("offset-path")}} die `rect()`-Funktion, um die Form des Pfads zu definieren, auf dem sich das Element (in diesem Fall ein rotes Kästchen) bewegt. Drei verschiedene Szenarien werden gezeigt, die jeweils unterschiedliche Werte für die `rect()`-Funktion nutzen. Der Pfeil innerhalb der Kästchen zeigt auf die rechte Kante des Kästchens.

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

- Das Rechteck des Pfads 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die Werte oben und unten sind Abstände von der oberen Kante des umgebenden Blocks. Die Werte rechts und links sind Abstände von der linken Kante des umgebenden Blocks. Zusätzlich ist die Ecke des Rechtecks bei `20%` abgerundet, wodurch sich das rote Kästchen entlang der abgerundeten Ecken bewegt. Beachten Sie, wie der Pfeil innerhalb des Kästchens der Kurve an den Ecken des Rechteckspfades folgt.
- Das Rechteck des Pfads 2 ist dem Rechteck des Pfads 1 ähnlich, außer dass der Wert rechts `auto` ist, was dem Wert `100%` entspricht. Dadurch stimmt die rechte Kante des Rechtecks mit der rechten Kante des umgebenden Blocks überein, wodurch ein breiteres Rechteck als bei Pfad 1 entsteht.
- Das Rechteck des Pfads 3 definiert sowohl die Parameter für die linke als auch die rechte Kante als `auto` und lässt den Parameter `round <'border-radius'>` weg. Dadurch entsteht ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige Ecken statt abgerundeter Ecken wie bei den Rechtecken von Pfad 1 und 2 aufweist. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kästchens an den Ecken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}}-Funktion
- {{cssxref("basic-shape/xywh","xywh()")}}-Funktion
- {{cssxref("clip-path")}}-Eigenschaft
- {{cssxref("offset-path")}}-Eigenschaft
- {{cssxref("&lt;basic-shape&gt;")}}-Datentyp
- [CSS shapes](/de/docs/Web/CSS/CSS_shapes)-Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
