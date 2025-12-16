---
title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Die **`ray()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert das {{cssxref("offset-path")}}-Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "ray" bezeichnet. Der ray beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines rays kann durch Angabe einer Größe und Verwendung des `contain`-Schlüsselworts eingeschränkt werden.

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

- {{cssxref("angle")}}
  - : Gibt die Richtung an, in die sich das Liniensegment von der Offset-Ausgangsposition aus erstreckt. Der Winkel `0deg` liegt auf der y-Achse nach oben gerichtet, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, das der Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` ist, relativ zum enthaltenen Kasten. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des rays und der nächstgelegenen Seite des [enthältenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements. Wenn der Startpunkt des rays auf einer Kante des enthältenden Blocks liegt, ist die Länge des Liniensegments null. Wenn der Startpunkt des rays außerhalb des enthältenden Blocks liegt, wird die Kante des enthältenden Blocks als ins Unendliche verlängert angesehen. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des rays und der nächstgelegenen Ecke im enthältenden Block des Elements. Wenn der Startpunkt des rays auf einer Ecke des enthältenden Blocks liegt, ist die Länge des Liniensegments null.

    `farthest-side`: Abstand zwischen dem Startpunkt des rays und der am weitesten entfernten Seite des enthältenden Blocks des Elements. Wenn der Startpunkt des rays außerhalb des enthältenden Blocks liegt, wird die Kante des enthältenden Blocks als ins Unendliche verlängert angesehen.

    `farthest-corner`: Abstand zwischen dem Startpunkt des rays und der am weitesten entfernten Ecke im enthältenden Block des Elements.

    `sides`: Abstand zwischen dem Startpunkt des rays und dem Punkt, an dem das Liniensegment die Grenze des enthältenden Blocks schneidet. Wenn der Startpunkt auf oder außerhalb der Grenze des enthältenden Blocks liegt, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, sodass das Element selbst bei `offset-distance: 100%` innerhalb des enthältenden Blocks bleibt. Insbesondere wird die Länge des Segments um die halbe Breite oder halbe Höhe der Begrenzungsbox des Elements verringert, je nachdem, welches größer ist, und nie weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der ray beginnt und wo sich das Element im enthältenden Block befindet. Dies ist ein optionaler Parameter. Wenn enthalten, muss der `<position>`-Wert dem Keyword `at` vorausgehen. Wenn weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird `offset-position: normal` als Startposition des rays verwendet, was das Element in die Mitte (oder `50% 50%`) des enthältenden Blocks platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfads, indem sie seinen Standort im zweidimensionalen Raum durch einen Winkel und einen Abstand von einem Bezugspunkt (polare Koordinaten) angibt. Diese Eigenschaft macht die `ray()`-Funktion nützlich für die Erstellung von 2D-Raumübergängen. Zum Vergleich: Dieser Ansatz unterscheidet sich von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung anzugeben (rechteckige Koordinaten), die von der {{cssxref("translate","translate()")}}-Funktion verwendet wird, und vom Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im 2D-Raum funktioniert, ist es wichtig, sowohl die Anfangsposition als auch die Ausrichtung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie die folgenden Aspekte steuern:

- Das Element wird zunächst positioniert, indem der {{cssxref("offset-anchor")}}-Punkt des Elements an die Ausgangsposition des Offsets verschoben wird. Standardmäßig wird die Startposition des rays durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen und als `normal` standardmäßig angenommen wird), wird das Element im `center` (oder `50% 50%`) seines enthältenden Blocks positioniert. Angabe von `offset-position: auto` setzt die Ausgangsposition in die obere linke Ecke (oder `0 0`) der Elementposition.
- Das Element wird initial so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout) — seine Textflussrichtung — mit dem Winkel von `ray()` ausgerichtet ist. Zum Beispiel wird das Element mit dem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, so gedreht, dass seine Inline-Achse zur Senkrechten passt, um den Winkel des rays zu entsprechen. Das Element behält diese Rotation während seines Pfades bei. Um dieses Verhalten individuell anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element anzugeben, wodurch Sie eine präzisere Kontrolle über sein Erscheinungsbild erhalten, wenn es dem Pfad folgt. Beispielsweise entfernt die Einstellung von `offset-rotate: 0deg` jegliche Drehung, die durch `ray()` angewendet wird, und richtet die Inline-Achse des Elements wieder mit der Textflussrichtung aus.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren des Winkels und der Startposition für einen ray

Dieses Beispiel zeigt, wie mit der Startposition eines Elements gearbeitet wird und wie die Ausrichtung des Elements durch den angegebenen ray-Winkel beeinflusst wird.

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

Ähnlich wie bei {{cssxref("transform-origin")}} befindet sich der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der {{cssxref("offset-anchor")}}-Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die Kästen mit den Nummern `1` bis `5` angewendet. Der "enthältende Block" jedes Kastens wird mit einer gestrichelten Grenze dargestellt. Ein verblasster Kasten in der oberen linken Ecke zeigt die Standardposition jedes Kastens an, ohne dass eine `offset-position` oder `offset-path` angewendet wird, was einen Vergleich nebeneinander ermöglicht. Die Oberseite jedes Kastens ist mit einer `solid`-Grenze hervorgehoben, um die Variationen in den ray-Startpunkten und Ausrichtungen zu verdeutlichen. Nachdem das Element auf dem Startpunkt des rays positioniert wurde, richtet sich ein Kasten nach der Richtung des angegebenen ray-Winkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Startposition des rays das Zentrum (oder `50% 50%`) des enthältenden Blocks des Kastens.

#### Ergebnis

{{EmbedLiveSample('Geben eines Winkels zum ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass sein Ankerpunkt (seine Mitte) an der Standard-Offset-Startposition (`50% 50%` des enthältenden Blocks) liegt. `box1` wird auch gedreht, um es in Richtung des `0deg`-Winkels des rays auszurichten. Dies wird nun der Startpunkt des Pfads sein. Sie können die Änderung in der Position und Drehung des Kastens durch den Vergleich mit dem verblassten `box0` auf der linken Seite beobachten. Der Kasten wird so gedreht, dass er dem `0deg`-Winkel entlang der y-Achse entspricht, nach oben zeigend. Die Drehung des Kastens ist aus der Ausrichtung der Nummer innerhalb des Kastens ersichtlich.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den ray angewendet, um zu zeigen, wie der ray-Winkel funktioniert. Vom oberen linken Ecke aus wird der Kasten im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird zusätzlich ein {{cssxref("offset-rotate")}} von `0deg` auf das Element angewendet. Infolgedessen bleibt das Element auf diesem spezifischen Winkel entlang des ray-Pfads gedreht, und das Element dreht sich nicht in die Richtung des Pfads. Beachten Sie in `box3`, dass der ray-Pfad bei `150deg` liegt, aber die Ausrichtung des Kastens sich entlang des Pfads nicht verändert aufgrund von `offset-rotate`. Beachten Sie auch, dass die `offset-path`-Eigenschaft von `box3` keine Startposition `<position>` angibt, sodass die Startposition des rays aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des enthältenden Blocks gesetzt, und infolgedessen fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der ray-Winkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den `at <position>`-Wert an, der den Kasten an die `unten` und `rechts` Seite des enthältenden Blocks des Elements platziert und `60deg` auf den Winkel des rays angewendet wird.

### Animieren eines Elements entlang des rays

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Ausrichtung angezeigt. Ein ray-Bewegungspfad wird auf die anderen Formen angewendet.

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

{{EmbedLiveSample('Animieren eines Elements entlang des rays', '100%', 750)}}

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Ausrichtung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und deshalb beginnt die Pfadbewegung bei `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkungen der Eckwerte `<size>`: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen Offset-Pfad, da die Form bereits an einer Ecke ist (`offset-position: auto`). Der `farthest-corner`-Wert erstellt den längsten Offset-Pfad, der von der oberen linken Ecke des enthältenden Blocks zur unteren rechten Ecke reicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
