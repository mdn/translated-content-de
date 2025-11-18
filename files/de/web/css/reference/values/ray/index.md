---
title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert das Liniensegment des [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path), das ein animiertes Element verfolgen kann. Das Liniensegment wird als "Ray" bezeichnet. Der Ray beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Rays kann durch die Angabe einer Größe und die Verwendung des `contain`-Schlüsselworts begrenzt werden.

## Syntax

```css
/* all parameters specified */
offset-path: ray(50deg closest-corner contain at 100px 20px);

/* two parameters specified, order does not matter */
offset-path: ray(contain 200deg);

/* only one parameter specified */
offset-path: ray(45deg);
```

### Parameter

Die Parameter können in beliebiger Reihenfolge angegeben werden.

- [`<angle>`](/de/docs/Web/CSS/Reference/Values/angle)
  - : Gibt die Richtung an, in die sich das Liniensegment von der Offset-Startposition aus erstreckt. Der Winkel `0deg` liegt auf der y-Achse nach oben zeigend, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, das den Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zur umgebenden Box darstellt. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des Rays und der nächsten Seite des [enthältenden Block](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements. Liegt der Startpunkt des Rays auf einem Rand des enthältenden Blocks, ist die Länge des Liniensegments null. Liegt der Startpunkt des Rays außerhalb des enthältenden Blocks, wird der Rand des enthältenden Blocks als unendlich angesehen. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des Rays und der nächsten Ecke im enthältenden Block des Elements. Liegt der Startpunkt des Rays auf einer Ecke des enthältenden Blocks, ist die Länge des Liniensegments null.

    `farthest-side`: Abstand zwischen dem Startpunkt des Rays und der am weitesten entfernten Seite des enthältenden Blocks des Elements. Liegt der Startpunkt des Rays außerhalb des enthältenden Blocks, wird der Rand des enthältenden Blocks als unendlich angesehen.

    `farthest-corner`: Abstand zwischen dem Startpunkt des Rays und der am weitesten entfernten Ecke im enthältenden Block des Elements.

    `sides`: Abstand zwischen dem Startpunkt des Rays und dem Punkt, an dem das Liniensegment die Begrenzung des enthältenden Blocks schneidet. Befindet sich der Startpunkt auf oder außerhalb der Begrenzung des enthältenden Blocks, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, damit das Element auch bei `offset-distance: 100%` innerhalb des enthältenden Blocks bleibt. Insbesondere wird die Länge des Segments um die Hälfte der Breite oder die Hälfte der Höhe der Border-Box des Elements reduziert, je nachdem, welches größer ist, und niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Ray beginnt und an dem das Element im enthältenden Block platziert wird. Dies ist ein optionaler Parameter. Wenn er enthalten ist, muss der `<position>`-Wert durch das `at` Schlüsselwort vorangestellt werden. Wenn er weggelassen wird, wird der Wert der `offset-position` des Elements verwendet. Wenn er weggelassen wird und das Element keinen `offset-position`-Wert hat, wird `offset-position: normal` verwendet, wodurch das Element in der Mitte (oder `50% 50%`) des enthältenden Blocks platziert wird.

## Beschreibung

Die Funktion `ray()` positioniert ein Element entlang eines Pfades, indem sie seine Position in einem zweidimensionalen Raum durch einen Winkel und einen Abstand von einem Referenzpunkt (polare Koordinaten) angibt. Diese Funktionalität macht die `ray()`-Funktion nützlich für die Erstellung von 2D-Räumlichen Übergängen. Zum Vergleich: Dieser Ansatz unterscheidet sich von der Methode, bei der ein Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprungspunkt (rechtwinklige Koordinaten) angegeben wird, die von der {{cssxref("translate","translate()")}}-Funktion verwendet wird, und von der Verschiebung eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die anfängliche Position als auch die Orientierung des Elements zu berücksichtigen. Wenn die Funktion `ray()` als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird zunächst positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Punkt des Elements zur Offset-Startposition des Elements verschoben wird. Standardmäßig wird die Startposition des Rays durch den {{cssxref("offset-position")}} Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben ist (oder weggelassen und erlaubt ist, auf `normal` zurückzufallen), wird das Element in der `center` (oder `50% 50%`) seines enthältenden Blocks positioniert. Wenn `offset-position: auto` angegeben ist, wird die Startposition auf der linken oberen Ecke (`0 0`) der Elementposition festgelegt.
- Das Element wird zunächst so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout) — also die Richtung des Textflusses — mit dem durch `ray()` angegebenen Winkel übereinstimmt. Beispielsweise wird bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, die Inline-Achse des Elements vertikal gedreht, um den Winkel des Rays zu treffen. Das Element behält diese Rotation entlang seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Rotationswinkel oder eine andere Richtung für das Element festzulegen und so eine präzisere Kontrolle über sein Erscheinungsbild während des Pfadverlaufs zu erhalten. Wenn Sie beispielsweise `offset-rotate: 0deg` einstellen, wird jede von `ray()` angewendete Rotation aufgehoben, sodass die Inline-Achse des Elements wieder mit der Richtung des Textflusses übereinstimmt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Winkel und die Startposition für einen Ray definieren

Dieses Beispiel zeigt, wie man mit der Startposition eines Elements arbeitet und wie die Orientierung des Elements durch den angegebenen Ray-Winkel beeinflusst wird.

#### CSS

```css hidden
body {
  width: fit-content;
  height: fit-content;
}

.container {
  width: 80vw;
  height: 100px;
  border: 1px dashed black;
  margin: 0 0.5em 2em 2em;
  text-align: center;
}

pre {
  font-size: 1em;
  text-align: right;
  padding-right: 10px;
  line-height: 1em;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
}

.box + .box {
  opacity: 1;
}
```

```css
.box {
  background-color: palegreen;
  border-top: 4px solid black;
  opacity: 20%;
}

.box:first-of-type {
  position: absolute;
}

.box1 {
  offset-path: ray(0deg);
}

.box2 {
  offset-path: ray(150deg);
}

.box3 {
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
}

.box4 {
  offset-position: 0 0;
  offset-path: ray(0deg);
}

.box5 {
  offset-path: ray(60deg closest-side at bottom right);
}
```

```html hidden
<pre>/* original */</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box0">0</div>
</div>

<pre>
  offset-path: ray(0deg);
  /* Default offset starting position is 50% 50% */
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box1">1</div>
</div>

<pre>
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box2">2</div>
</div>

<pre>
  offset-rotate: 0deg;
  offset-position: 20% 40%;
  offset-path: ray(150deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box3">3</div>
</div>

<pre>
  offset-position: 0 0;
  offset-path: ray(0deg);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box4">4</div>
</div>

<pre>
  offset-path: ray(60deg closest-side at bottom right);
</pre>
<div class="container">
  <div class="box">0</div>
  <div class="box box5">5</div>
</div>
```

Ähnlich wie bei {{cssxref("transform-origin")}} befindet sich der Standardverankerungspunkt in der Mitte eines Elements. Dieser Verankerungspunkt kann über die [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die Boxen `1` bis `5` angewendet. Der "enthältende Block" jeder Box wird durch eine gestrichelte Grenze dargestellt. Eine verblasste Box in der oberen linken Ecke zeigt die Standardposition jeder Box ohne angewendete `offset-position` oder `offset-path`, was einen Vergleich nebeneinander ermöglicht. Der obere Rand jeder Box ist mit einer `soliden` Linie hervorgehoben, um Variationen in den Ray-Startpunkten und Ausrichtungen zu veranschaulichen. Nach dem Positionieren am Startpunkt des Rays richtet sich eine Box in die Richtung des angegebenen Ray-Winkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Startposition des Rays die Mitte (oder `50% 50%`) des enthältenden Blocks der Box.

#### Ergebnis

{{EmbedLiveSample('Defining the angle to the ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass sich ihr Ankerpunkt (ihre Mitte) an der Standard-Offset-Startposition befindet (`50% 50%` des enthältenden Blocks). `box1` wird auch gedreht, um sich in Richtung des `0deg` Winkels des Rays auszurichten. Dies ist nun der Startpunkt des Pfades. Sie können die Änderung der Position und Drehung der Box beobachten, indem Sie sie mit der verblassten `box0` links vergleichen. Die Box wird gedreht, um den `0deg`-Winkel entlang der y-Achse zu treffen, der nach oben zeigt. Die Boxdrehung ist aus der Ausrichtung der Zahl im Inneren der Box ersichtlich.

- Bei `box2` wird ein größerer positiver Winkel von `150deg` auf den Ray angewendet, um zu zeigen, wie der Ray-Winkel funktioniert. Ausgehend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den festgelegten Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird außerdem ein [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate) von `0deg` auf das Element angewendet. Infolgedessen bleibt das Element entlang des Ray-Pfads in diesem spezifischen Winkel gedreht, und das Element wird sich nicht in Richtung des Pfads drehen. Beachten Sie in `box3`, dass der Ray-Pfad bei `150deg` liegt, aber die Orientierung der Box sich entlang des Pfades nicht ändert, weil `offset-rotate angewendet ist`. Beachten Sie auch, dass die `offset-path`-Eigenschaft von `box3` keine Start-`<position>` spezifiziert, sodass die Startposition des Rays aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` beträgt.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des enthältenden Blocks gesetzt, und als Ergebnis fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der Ray-Winkel von `0deg` wird an diesem Startpunkt auf das Element angewendet.

- In `box5` spezifiziert die `offset-path`-Eigenschaft den Wert `at <position>`, der die Box am `bottom` und `right` Rand des enthältenden Blocks des Elements platziert, und `60deg` wird auf den Ray-Winkel angewendet.

### Ein Element entlang des Rays animieren

In diesem Beispiel wird das erste Shape als Referenz für seine Position und Orientierung gezeigt. Ein Ray-Bewegungspfad wird auf die anderen Shapes angewendet.

#### CSS

```css
body {
  display: grid;
  grid-template-columns: 200px 100px;
  gap: 40px;
  margin-left: 40px;
}

.container {
  transform-style: preserve-3d;
  width: 150px;
  height: 100px;
  border: 2px dotted green;
}

.shape {
  width: 40px;
  height: 40px;
  background: #2bc4a2;
  margin: 5px;
  text-align: center;
  line-height: 40px;
  clip-path: polygon(0% 0%, 70% 0%, 100% 50%, 70% 100%, 0% 100%, 30% 50%);
  animation: move 5000ms infinite alternate ease-in-out;
}

.shape2 {
  offset-path: ray(120deg sides contain);
}

.shape3 {
  offset-rotate: 0deg;
  offset-path: ray(120deg sides contain);
}

.shape4 {
  offset-position: auto;
  offset-path: ray(120deg closest-corner);
}

.shape5 {
  offset-position: auto;
  offset-path: ray(120deg farthest-corner);
}

@keyframes move {
  0%,
  20% {
    offset-distance: 0%;
  }
  80%,
  100% {
    offset-distance: 100%;
  }
}
```

```html hidden
<div>
  <div class="container">
    <div class="shape shape1">&mdash;</div>
  </div>
</div>

<pre>/* no offset-path applied */</pre>

<div>
  <div class="container">
    <div class="shape shape2">&mdash;</div>
  </div>
</div>

<pre>offset-path: ray(120deg sides contain);</pre>

<div>
  <div class="container">
    <div class="shape shape3">&mdash;</div>
  </div>
</div>

<pre>
offset-path: ray(120deg sides contain);
offset-rotate: 0deg;
</pre>

<div>
  <div class="container">
    <div class="shape shape4">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg closest-corner);
</pre>

<div>
  <div class="container">
    <div class="shape shape5">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg farthest-corner);
</pre>
```

#### Ergebnis

{{EmbedLiveSample('Animieren eines Elements entlang des Strahls', '100%', 750)}}

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Orientierung des Shapes ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide diese Beispiele verwenden den Standard-{{cssxref("offset-position")}}-Wert `normal`, und daher beginnt die Pfadbewegung von `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkungen von Eck-`<size>`-Werten: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen Offset-Pfad, da das Shape bereits an der Ecke ist (`offset-position: auto`). Der `farthest-corner`-Wert erzeugt den längsten Offset-Pfad, der von der oberen linken Ecke des enthältenden Blocks bis zur unteren rechten Ecke reicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/Reference/Properties/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate)
