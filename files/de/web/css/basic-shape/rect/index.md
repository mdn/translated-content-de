---
title: rect()
slug: Web/CSS/basic-shape/rect
l10n:
  sourceCommit: 8cd08162e592c1baf5d888f4c5a08a58360344b5
---

{{CSSRef}}

Die **`rect()`**-Funktion von [CSS](/de/docs/Web/CSS) erzeugt ein Rechteck in einem bestimmten Abstand von den oberen und linken Rändern des Rahmenblocks. Es handelt sich um eine Grundformfunktion des {{cssxref("&lt;basic-shape&gt;")}}- [Datentyps](/de/docs/Web/CSS/CSS_Types). Sie können die `rect()`-Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dem sich ein Element bewegt, sowie in {{cssxref("clip-path")}}, um die Form des Clipping-Bereichs zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
```

### Werte

Das eingesetzte Rechteck wird durch die Angabe von vier Versatzwerten definiert, beginnend mit dem Versatz der oberen Kante und im Uhrzeigersinn fortlaufend, sowie einem optionalen `round`-Schlüsselwort mit dem `border-radius`-Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`

  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}}-Wert der Entfernung der oberen, rechten, unteren oder linken Kante des Rechtecks vom oberen oder linken Rand des Rahmenblocks an. Die ersten (oben) und dritten (unten) Werte sind Entfernungen vom oberen Rand des Rahmenblocks, und die zweiten (rechts) und vierten (links) Werte sind Entfernungen vom linken Rand des Rahmenblocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und die ersten (oben) Werte abgegrenzt, um zu verhindern, dass die untere Kante über die obere und die rechte Kante über die linke Kante kreuzt. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` beschränkt.

- `auto`

  - : Sorgt dafür, dass die Kante, für die dieser Wert verwendet wird, mit der entsprechenden Kante des Rahmenblocks zusammenfällt. Wenn `auto` für die erste (oben) oder vierte (links) Werte verwendet wird, ist der Wert von `auto` `0`, und wenn es für die zweite (rechts) oder dritte (unten) Werte verwendet wird, ist der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks mit der gleichen Syntax wie die CSS- [(`border-radius`)](/de/docs/Web/CSS/border-radius)-Kurzschreibweise an. Dieser Parameter ist optional.

## Beispiele

### Erstellung eines offset-paths mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `rect()`-Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, in diesem Fall ein rotes Kästchen, bewegt. Drei verschiedene Szenarien werden gezeigt, die jeweils verschiedene Werte für die `rect()`-Funktion verwenden. Der Pfeil innerhalb der Kästchen zeigt auf die rechte Kante des Kästchens.

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

- Das Rechteck von Pfad 1 gibt die Abstände der vier Kanten (oben, rechts, unten und links) vom Rahmenblock an. Die Werte oben und unten sind Abstände vom oberen Rand des Rahmenblocks. Die Werte rechts und links sind Abstände vom linken Rand des Rahmenblocks. Zusätzlich ist die Ecke des Rechtecks mit `20%` abgerundet, wodurch das rote Box-Element den abgerundeten Ecken folgt, wenn es diesen Pfad entlangfährt. Beachten Sie, wie der Pfeil innerhalb des Kästchens der Kurve an den Ecken des Rechteckpfads folgt.
- Das Rechteck von Pfad 2 ähnelt dem von Pfad 1, außer dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies führt dazu, dass die rechte Kante des Rechtecks mit der rechten Kante des Rahmenblocks übereinstimmt, was ein breiteres Rechteck als Pfad 1 ergibt.
- Das Rechteck von Pfad 3 gibt sowohl die linke als auch die rechte Kante als `auto` an und lässt den Parameter `round <'border-radius'>` weg. Dies erzeugt ein Rechteck, das die Breite des Rahmenblocks hat und rechteckige Ecken statt abgerundeter Ecken wie bei den Rechtecken von Pfad 1 und Pfad 2. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kästchens an den Ecken.

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
- [Leitfaden zu grundlegenden Formen](/de/docs/Web/CSS/CSS_shapes/Basic_shapes)
