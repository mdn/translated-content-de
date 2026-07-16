---
title: "`rect()` CSS-Funktion"
short-title: rect()
slug: Web/CSS/Reference/Values/basic-shape/rect
l10n:
  sourceCommit: cd0970bc03cf30a9a8089954cc542a17dbe9eba3
---

Die **`rect()`**-Funktion in [CSS](/de/docs/Web/CSS) erstellt ein Rechteck in der angegebenen Entfernung von den oberen und linken Rändern des enthaltenen Blocks. Sie ist eine Grundformfunktion des {{cssxref("basic-shape")}} [Datentyps](/de/docs/Web/CSS/Reference/Values/Data_types). Sie können die `rect()`-Funktion in CSS-Eigenschaften wie {{cssxref("offset-path")}} verwenden, um den rechteckigen Pfad zu erstellen, entlang dessen sich ein Element bewegt, in {{cssxref("clip-path")}}, um die Form des Ausschnittsbereichs zu definieren, und in {{cssxref("border-shape")}}, um die Form des Randes eines Elements zu definieren.

## Syntax

```css
offset-path: rect(0 1% auto 3% round 0 1px);
clip-path: rect(50px 70px 80% 20%);
border-shape: rect(10px 500px 130px 20px round 20px);
```

### Werte

Das eingetragene Rechteck wird definiert, indem vier Versatzwerte angegeben werden, beginnend mit dem Versatz des oberen Rands und im Uhrzeigersinn, sowie ein optionales `round`-Schlüsselwort mit dem `border-radius`-Parameter, um dem Rechteck abgerundete Ecken hinzuzufügen. Jeder Versatzwert kann entweder eine `<length>`, ein `<percentage>` oder das Schlüsselwort `auto` sein.

- `<length-percentage>`
  - : Gibt den {{cssxref("&lt;length-percentage&gt;")}}-Wert des Abstands des oberen, rechten, unteren oder linken Rands des Rechtecks vom oberen oder linken Rand des enthaltenen Blocks an. Die ersten (oben) und dritten (unten) Werte sind Abstände vom oberen Rand des enthaltenen Blocks, und die zweiten (rechts) und vierten (links) Werte sind Abstände vom linken Rand des enthaltenen Blocks. Die zweiten (rechts) und dritten (unten) Werte werden durch die vierten (links) und ersten (oben) Werte entsprechend begrenzt, um zu verhindern, dass der untere Rand den oberen Rand kreuzt und der rechte Rand den linken Rand kreuzt. Zum Beispiel wird `rect(10px 0 0 20px)` auf `rect(10px 20px 10px 20px)` begrenzt.

- `auto`
  - : Lässt den Rand, für den dieser Wert verwendet wird, mit dem entsprechenden Rand des enthaltenen Blocks zusammenfallen. Wenn `auto` für den ersten (oben) oder vierten (links) Wert verwendet wird, beträgt der Wert von `auto` `0`, und wenn es für den zweiten (rechts) oder dritten (unten) Wert verwendet wird, beträgt der Wert von `auto` `100%`.

- `round <'border-radius'>`
  - : Gibt den Radius der abgerundeten Ecken des Rechtecks an, unter Verwendung derselben Syntax wie die CSS-{{cssxref("border-radius")}}-Kurzformeigenschaft. Dieser Parameter ist optional.

## Formale Syntax

{{CSSSyntax}}

## Beispiele

### Erstellen eines offset-path mit rect()

In diesem Beispiel verwendet die {{cssxref("offset-path")}}-Eigenschaft die `rect()`-Funktion, um die Form des Pfads zu definieren, auf dem sich das Element, in diesem Fall ein rotes Kästchen, bewegt. Es werden drei verschiedene Szenarien gezeigt, die jeweils unterschiedliche Werte für die `rect()`-Funktion verwenden. Der Pfeil innerhalb der Kästen zeigt auf den rechten Rand des Kastens.

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

- Das Rechteck des Pfads 1 gibt die Abstände der vier Ränder (oben, rechts, unten und links) vom enthaltenen Block an. Die oberen und unteren Werte sind Abstände vom oberen Rand des enthaltenen Blocks. Die rechten und linken Werte sind Abstände vom linken Rand des enthaltenen Blocks. Zusätzlich ist die Ecke des Rechtecks auf `20%` abgerundet, was dazu führt, dass das rote Box-Element den abgerundeten Ecken folgt, während es sich entlang dieses Pfads bewegt. Beachten Sie, wie der Pfeil innerhalb des Kastens der Kurve an den Ecken des rechteckigen Pfads folgt.
- Das Rechteck des Pfads 2 ähnelt dem Rechteck des Pfads 1, mit der Ausnahme, dass der rechte Wert `auto` ist, was dem Wert `100%` entspricht. Dies bewirkt, dass der rechte Rand des Rechtecks mit dem rechten Rand des enthaltenen Blocks übereinstimmt, wodurch ein breiteres Rechteck als Pfad 1 entsteht.
- Das Rechteck des Pfads 3 gibt sowohl die linken als auch die rechten Randparameter als `auto` an und lässt den Parameter `round <'border-radius'>` weg. Dies erzeugt ein Rechteck, das die Breite des enthaltenen Blocks hat, und rechteckige Ecken anstelle von abgerundeten Ecken wie bei den Rechtecken des Pfads 1 und 2 aufweist. Beachten Sie die Bewegung des Pfeils innerhalb dieses Kastens an den Ecken.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("basic-shape/inset","inset()")}}-Funktion
- {{cssxref("basic-shape/xywh","xywh()")}}-Funktion
- {{cssxref("border-shape")}}-Eigenschaft
- {{cssxref("clip-path")}}-Eigenschaft
- {{cssxref("offset-path")}}-Eigenschaft
- {{cssxref("basic-shape")}}-Datentyp
- [CSS Formen](/de/docs/Web/CSS/Guides/Shapes) Modul
- [Leitfaden zu Grundformen](/de/docs/Web/CSS/Guides/Shapes/Using_shape-outside)
