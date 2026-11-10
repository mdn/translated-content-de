---
title: CSS-Funktion `ray()`
short-title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Die [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/Reference/Values/Functions) **`ray()`** definiert das Liniensegment für {{cssxref("offset-path")}}, dem ein animiertes Element folgen kann. Dieses Liniensegment wird als „Strahl“ bezeichnet. Der Strahl beginnt an einer {{cssxref("offset-position")}} und erstreckt sich in Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und Verwendung des Schlüsselworts `contain` begrenzt werden.

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
  - : Gibt die Richtung an, in der sich das Liniensegment von der Offset-Startposition aus erstreckt. Der Winkel `0deg` liegt auf der nach oben gerichteten y-Achse; positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, also den Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zum umschließenden Kasten. Dieser Parameter ist optional (wenn kein `<size>` angegeben wird, gilt `closest-side`). Er akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements. Liegt der Startpunkt des Strahls auf einer Kante des umschließenden Blocks, beträgt die Länge des Liniensegments null. Liegt er außerhalb des umschließenden Blocks, wird dessen Kante als bis ins Unendliche verlängert betrachtet. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im umschließenden Block des Elements. Liegt der Startpunkt auf einer Ecke des umschließenden Blocks, beträgt die Länge des Liniensegments null.

    `farthest-side`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des umschließenden Blocks des Elements. Liegt der Startpunkt außerhalb des umschließenden Blocks, wird dessen Kante als bis ins Unendliche verlängert betrachtet.

    `farthest-corner`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im umschließenden Block des Elements.

    `sides`: Abstand zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Begrenzung des umschließenden Blocks schneidet. Liegt der Startpunkt auf oder außerhalb dieser Begrenzung, beträgt die Länge des Liniensegments null.

- `contain`
  - : Verkürzt das Liniensegment so, dass das Element selbst bei `offset-distance: 100%` innerhalb des umschließenden Blocks bleibt. Konkret wird die Länge des Segments um die Hälfte der Breite oder die Hälfte der Höhe der Border-Box des Elements verkürzt, je nachdem, welcher Wert größer ist. Sie wird dabei niemals kleiner als null. Dieser Parameter ist optional.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und an dem das Element innerhalb seines umschließenden Blocks platziert wird. Dieser Parameter ist optional. Wird er angegeben, muss dem Wert `<position>` das Schlüsselwort `at` vorangestellt werden. Wird er weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wird er weggelassen und hat das Element keinen `offset-position`-Wert, wird für die Startposition des Strahls `offset-position: normal` verwendet. Dadurch wird das Element in der Mitte (also bei `50% 50%`) des umschließenden Blocks platziert.

## Beschreibung

Die Funktion `ray()` positioniert ein Element entlang eines Pfads, indem sie dessen Position im zweidimensionalen Raum durch einen Winkel und einen Abstand zu einem Bezugspunkt angibt (Polarkoordinaten). Dadurch eignet sich `ray()` für zweidimensionale räumliche Übergänge. Dieser Ansatz unterscheidet sich sowohl von der Angabe eines Punkts anhand seiner horizontalen und vertikalen Abstände zu einem festen Ursprung (kartesische Koordinaten), wie sie die Funktion {{cssxref("translate","translate()")}} verwendet, als auch von der Bewegung eines Elements entlang eines definierten Pfads mittels Animation.

Da `ray()` im zweidimensionalen Raum arbeitet, müssen sowohl die Ausgangsposition als auch die Ausrichtung des Elements berücksichtigt werden. Wenn `ray()` als Wert für `offset-path` auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird zunächst positioniert, indem sein {{cssxref("offset-anchor")}}-Punkt an die Offset-Startposition des Elements verschoben wird. Standardmäßig bestimmt der Wert von {{cssxref("offset-position")}} die Startposition des Strahls. Wenn `offset-position` ausdrücklich auf `normal` gesetzt wird (oder weggelassen wird und deshalb standardmäßig `normal` gilt), wird das Element in der Mitte (`center` beziehungsweise `50% 50%`) seines umschließenden Blocks positioniert. Mit `offset-position: auto` wird die Startposition auf die obere linke Ecke (`top left` beziehungsweise `0 0`) der Position des Elements gesetzt.
- Das Element wird zunächst so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout) – die Richtung des Textflusses – mit dem durch `ray()` angegebenen Winkel übereinstimmt. Bei einem `ray()`-Winkel von `0deg`, der auf der nach oben gerichteten y-Achse liegt, wird die Inline-Achse des Elements beispielsweise vertikal ausgerichtet. Das Element behält diese Drehung entlang des gesamten Pfads bei. Mit der Eigenschaft {{cssxref("offset-rotate")}} können Sie stattdessen einen anderen Drehwinkel oder eine andere Drehrichtung angeben und so das Erscheinungsbild des Elements entlang des Pfads genauer steuern. Wenn Sie beispielsweise `offset-rotate: 0deg` setzen, wird eine durch `ray()` bewirkte Drehung aufgehoben und die Inline-Achse des Elements wieder an der Richtung des Textflusses ausgerichtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Winkel und Startposition eines Strahls festlegen

Dieses Beispiel zeigt, wie Sie die Startposition eines Elements festlegen und wie sich der angegebene Strahlwinkel auf seine Ausrichtung auswirkt.

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

Ähnlich wie bei {{cssxref("transform-origin")}} liegt der Ankerpunkt standardmäßig in der Mitte eines Elements. Mit der Eigenschaft {{cssxref("offset-anchor")}} können Sie diesen Ankerpunkt ändern.

In diesem Beispiel werden verschiedene Werte für `offset-path: ray()` auf die mit `1` bis `5` nummerierten Boxen angewendet. Der „umschließende Block“ jeder Box ist durch einen gestrichelten Rahmen dargestellt. Eine verblasste Box oben links zeigt die Standardposition jeder Box ohne `offset-position` oder `offset-path` und ermöglicht so einen direkten Vergleich. Die Oberseite jeder Box ist durch einen `solid`-Rahmen hervorgehoben, um Unterschiede bei den Startpunkten und Ausrichtungen der Strahlen zu veranschaulichen. Nach der Positionierung am Startpunkt des Strahls wird eine Box in Richtung des angegebenen Strahlwinkels ausgerichtet. Wenn {{cssxref("offset-position")}} nicht angegeben ist, liegt die standardmäßige Offset-Startposition des Strahls in der Mitte (bei `50% 50%`) des umschließenden Blocks der Box.

#### Ergebnis

{{EmbedLiveSample('defining_the_angle_and_starting_position_for_a_ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass ihr Ankerpunkt (ihre Mitte) an der standardmäßigen Offset-Startposition liegt (`50% 50%` des umschließenden Blocks). Außerdem wird `box1` in Richtung des Strahlwinkels von `0deg` gedreht. Dies ist nun der Startpunkt des Pfads. Die Änderung von Position und Drehung können Sie erkennen, indem Sie die Box mit der verblassten `box0` links vergleichen. Die Box ist entsprechend dem nach oben gerichteten Winkel `0deg` entlang der y-Achse gedreht. Die Drehung ist an der Ausrichtung der Zahl in der Box zu erkennen.

- Bei `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um die Wirkung des Strahlwinkels zu zeigen. Ausgehend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, bis der angegebene Winkel von `150deg` erreicht ist.

- `box2` und `box3` haben dieselben `offset-path`-Werte. Bei `box3` wird zusätzlich ein {{cssxref("offset-rotate")}}-Wert von `0deg` auf das Element angewendet. Dadurch behält das Element entlang des gesamten Strahlpfads genau diese Ausrichtung bei und dreht sich nicht in die Richtung des Pfads. Beachten Sie bei `box3`, dass der Strahlpfad zwar einen Winkel von `150deg` hat, die Ausrichtung der Box sich entlang des Pfads wegen `offset-rotate` aber nicht ändert. Beachten Sie außerdem, dass die Eigenschaft `offset-path` von `box3` keine Startposition `<position>` angibt. Die Startposition des Strahls wird daher aus dem `offset-position`-Wert des Elements abgeleitet, der hier `top 20% left 40%` beträgt.

- `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt. Dadurch fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. An diesem Startpunkt wird der Strahlwinkel `0deg` auf das Element angewendet.

- Bei `box5` gibt die Eigenschaft `offset-path` den Wert `at <position>` an. Dadurch wird die Box am unteren (`bottom`) und rechten (`right`) Rand des umschließenden Blocks des Elements platziert; der Strahlwinkel beträgt `60deg`.

### Ein Element entlang des Strahls animieren

In diesem Beispiel dient die erste Form als Referenz für Position und Ausrichtung. Auf die anderen Formen wird ein Strahl als Bewegungspfad angewendet.

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

{{EmbedLiveSample('Animating an element along the ray', '100%', 750)}}

Beachten Sie bei den ersten beiden Beispielen mit `offset-path` die Ausrichtung der Form ohne und mit {{cssxref("offset-rotate")}}. Beide verwenden den Standardwert `normal` für {{cssxref("offset-position")}}; die Bewegung entlang des Pfads beginnt daher bei `50% 50%`. Die letzten beiden Beispiele mit `offset-path` zeigen die Wirkung der eckenbezogenen `<size>`-Werte `closest-corner` und `farthest-corner`. Der Wert `closest-corner` erzeugt einen sehr kurzen `offset-path`, da sich die Form bereits an der Ecke befindet (`offset-position: auto`). Der Wert `farthest-corner` erzeugt den längsten `offset-path`, der von der oberen linken zur unteren rechten Ecke des umschließenden Blocks verläuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
