---
title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`rect()`** [CSS](/de/docs/Web/CSS) Funktion erstellt ein Rechteck in der angegebenen Entfernung von den oberen und linken Rändern des umgebenden Blocks. Es handelt sich um eine Grundform-Funktion des {{cssxref("&lt;basic-shape&gt;")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `rect()` Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clipbereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingelassene Rechteck wird durch Spezifizierung von vier Versatzwerten definiert, beginnend mit dem oberen Randversatz im Uhrzeigersinn, und einem optionalen `round` Schlüsselwort mit dem `border-radius` Parameter, um abgerundete Ecken zum Rechteck hinzuzufügen. Jeder Versatzwert kann entweder eine `<length>`, eine `<percentage>`, oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}} Wert des Abstands des oberen, rechten, unteren oder linken Randes des Rechtecks vom oberen oder linken Rand des umgebenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Abstände vom oberen Rand des umgebenden Blocks, und die zweiten (rechts) und vierten (links) Werte sind Abstände vom linken Rand des umgebenden Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte jeweils begrenzt, um zu verhindern, dass der untere Rand sich über den oberen Rand und der rechte Rand sich über den linken Rand bewegt. Zum Beispiel wird `rect(10px 0 0 20px)` zu `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt den Rand, für den dieser Wert verwendet wird, mit dem entsprechenden Rand des umgebenden Blocks zusammenfallen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn er für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit derselben Syntax wie die CSS [`border-radius`](/de/docs/Web/CSS/Reference/Properties/border-radius) Kurzschreibweise an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}} Eigenschaft die `rect()` Funktion, um die Form des Pfades zu definieren, auf dem sich das Element bewegt, in diesem Fall ein rotes Quadrat. Drei verschiedene Szenarien werden gezeigt, die jeweils unterschiedliche Werte für die `rect()` Funktion verwenden. Der Pfeil innerhalb der Kästchen zeigt auf den rechten Rand des Kästchens.

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

- Das Rechteck des Pfads 1 gibt die Abstände der vier Ränder (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Abstände vom oberen Rand des umgebenden Blocks. Die rechten und linken Werte sind Abstände vom linken Rand des umgebenden Blocks. Zusätzlich sind die Ecken des Rechtecks bei `20%` abgerundet, sodass das rote Kästchen-Element den abgerundeten Ecken folgt, wenn es sich entlang dieses Pfades bewegt. Beachten Sie, wie der Pfeil innerhalb des Kästchens in den Ecken der rechteckigen Bahn folgt.
- Das Rechteck des Pfads 2 ist dem Rechteck des Pfads 1 ähnlich, außer dass der rechte Wert `auto` und damit gleich dem Wert `100%` ist. Dies bewirkt, dass der rechte Rand des Rechtecks mit dem rechten Rand des umgebenden Blocks übereinstimmt, was ein breiteres Rechteck als im Pfad 1 erstellt.
- Das Rechteck des Pfads 3 gibt sowohl den linken als auch den rechten Randparameter als `auto` an und lässt den `round <'border-radius'>` Parameter weg. Dies erstellt ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige Ecken statt abgerundeter Ecken hat, wie sie im Rechteck des Pfads 1 und 2 zu sehen sind. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kästchens an den Ecken.

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
