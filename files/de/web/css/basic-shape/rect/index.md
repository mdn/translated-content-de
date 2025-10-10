---
title: rect()
slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`rect()`**-Funktion von [CSS](/de/docs/Web/CSS) erstellt ein Rechteck in der angegebenen Entfernung von den oberen und linken Rändern des umgebenden Blocks. Es ist eine grundlegende Formfunktion des {{cssxref("&lt;basic-shape&gt;")}}- [Datentyps](/de/docs/Web/CSS/CSS_values_and_units/CSS_data_types). Sie können die `rect()`-Funktion in CSS-Attributen wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, und in {{cssxref("clip-path")}}, um die Form des Clip-Bereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingefügte Rechteck wird durch die Angabe von vier Versatzwerten definiert, beginnend mit dem Versatz des oberen Randes und im Uhrzeigersinn verlaufend, sowie einem optionalen `round`-Schlüsselwort mit dem `border-radius`-Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder eine `<Länge>`, ein `<Prozent>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}}-Wert des Abstands des oberen, rechten, unteren oder linken Randes des Rechtecks vom oberen oder linken Rand des umgebenden Blocks an. Die ersten (oben) und dritten (unten) Werte sind Abstände vom oberen Rand des umgebenden Blocks, und die zweiten (rechts) und vierten (links) Werte sind Abstände vom linken Rand des umgebenden Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte entsprechend begrenzt, um zu verhindern, dass der untere Rand den oberen Rand überschreitet und der rechte Rand den linken Rand überschreitet. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt den Rand, für den dieser Wert verwendet wird, mit dem entsprechenden Rand des umgebenden Blocks zusammenfallen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, ist der Wert von `auto` `0`, und wenn er für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, ist der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit derselben Syntax wie die CSS-Allegemeinheit [`border-radius`](/de/docs/Web/CSS/border-radius) an. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen des offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `rect()`-Funktion, um die Form des Pfades zu definieren, auf dem sich das Element, in diesem Fall ein rotes Rechteck, bewegt. Drei verschiedene Szenarien werden gezeigt, jedes mit unterschiedlichen Werten für die `rect()`-Funktion. Der Pfeil in den Boxen zeigt zum rechten Rand der Box.

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

- Das Rechteck des Pfades 1 gibt die Entfernungen der vier Kanten (oben, rechts, unten und links) vom umgebenden Block an. Die oberen und unteren Werte sind Entfernungen vom oberen Rand des umgebenden Blocks. Die rechten und linken Werte sind Entfernungen vom linken Rand des umgebenden Blocks. Zusätzlich wird die Ecke des Rechtecks auf `20%` gerundet, sodass das rote Rechteck-Element den abgerundeten Ecken folgt, während es diesem Pfad folgt. Beachten Sie, wie der Pfeil in der Box der Kurve an den rechteckigen Eckpunkten folgt.
- Das Rechteck des Pfades 2 ähnelt dem Rechteck des Pfades 1, außer das der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies bewirkt, dass der rechte Rand des Rechtecks mit dem rechten Rand des umgebenden Blocks übereinstimmt, was ein breiteres Rechteck als im Pfad 1 erzeugt.
- Das Rechteck des Pfades 3 hat sowohl die linken als auch die rechten Randparameter als `auto` und lässt den Parameter `round <'border-radius'>` aus. Dies erzeugt ein Rechteck, das die Breite des umgebenden Blocks hat und rechteckige Ecken statt abgerundeter Ecken wie bei den Rechtecken von Pfad 1 und Pfad 2. Beachten Sie die Bewegung des Pfeils in dieser Box an den Ecken.

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
- [CSS Shape-Module](/de/docs/Web/CSS/CSS_shapes)
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
