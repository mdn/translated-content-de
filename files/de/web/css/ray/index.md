---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) definiert das [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path) Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als „Strahl“ bezeichnet. Der Strahl beginnt an einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und durch Verwenden des `contain`-Schlüsselworts eingeschränkt werden.

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

- [`<angle>`](/de/docs/Web/CSS/angle)
  - : Gibt die Richtung an, in die sich das Liniensegment von der Offset-Ausgangsposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse nach oben und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, das ist der Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%`, relativ zur umgebenden Box. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Entfernung zwischen dem Ausgangspunkt des Strahls und der nächsten Seite des [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Liegt der Ausgangspunkt des Strahls auf einer Kante des Containing Block, ist die Länge des Liniensegments null. Wenn der Ausgangspunkt des Strahls außerhalb des Containing Block liegt, wird angenommen, dass sich die Kante des Containing Block ins Unendliche erstreckt. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Ausgangspunkt des Strahls und der nächstgelegenen Ecke im Containing Block des Elements. Liegt der Ausgangspunkt des Strahls auf einer Ecke des Containing Block, ist die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Ausgangspunkt des Strahls und der am weitesten entfernten Seite des Containing Block des Elements. Wenn der Ausgangspunkt des Strahls außerhalb des Containing Block liegt, wird angenommen, dass sich die Kante des Containing Block ins Unendliche erstreckt.

    `farthest-corner`: Entfernung zwischen dem Ausgangspunkt des Strahls und der am weitesten entfernten Ecke im Containing Block des Elements.

    `sides`: Entfernung zwischen dem Ausgangspunkt des Strahls und dem Punkt, an dem das Liniensegment die Begrenzung des Containing Block schneidet. Befindet sich der Ausgangspunkt auf oder außerhalb der Grenze des Containing Block, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, sodass das Element auch bei `offset-distance: 100%` innerhalb des Containing Block bleibt. Insbesondere wird die Länge des Segments um die Hälfte der Breite oder die Hälfte der Höhe des Border-Box des Elements reduziert, je nachdem, welcher Wert größer ist, und niemals kleiner als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element im Containing Block platziert wird. Dies ist ein optionaler Parameter. Wenn eingeschlossen, muss der `<position>`-Wert durch das Schlüsselwort `at` vorangestellt werden. Wenn weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird für die Startposition des Strahls `offset-position: normal` verwendet, was das Element im Zentrum (oder `50% 50%`) des Containing Block platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfads, indem sie seine Position in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt (Polarkoordinaten) festlegt. Dieses Feature macht die `ray()`-Funktion nützlich zur Erstellung von 2D-Raumübergängen. Zum Vergleich: Dieser Ansatz unterscheidet sich von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (Rechteckkoordinaten) anzugeben, die von der {{cssxref("translate","translate()")}}-Funktion verwendet wird, und von der Methode, ein Element entlang eines definierten Pfades durch Animation zu bewegen.

Da `ray()` im 2D-Raum funktioniert, ist es wichtig, sowohl die Anfangsposition als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte steuern:

- Das Element wird zunächst positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Punkt des Elements an die Offset-Ausgangsposition des Elements verschoben wird. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen wird und auf `normal` standardmäßig festgelegt wird), wird das Element im `center` (oder `50% 50%`) seines Containing Block positioniert. Wenn `offset-position: auto` angegeben wird, wird die Startposition an der `top left`-Ecke (oder `0 0`) der Position des Elements festgelegt.
- Das Element wird initial so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — die Richtung des Textflusses — mit dem von `ray()` angegebenen Winkel übereinstimmt. Beispiel: Mit dem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, wird die Inline-Achse des Elements vertikal gedreht, um mit dem Winkel des Strahls übereinzustimmen. Das Element behält diese Drehung entlang seines Pfads bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element anzugeben und so eine präzisere Kontrolle über sein Erscheinungsbild beim Folgen des Pfades zu ermöglichen. Zum Beispiel führt die Einstellung von `offset-rotate: 0deg` dazu, dass jegliche durch `ray()` angewendete Drehung entfernt wird, wodurch die Inline-Achse des Elements wieder mit der Richtung des Textflusses übereinstimmt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren des Winkels und der Startposition für einen Strahl

Dieses Beispiel zeigt, wie mit der Startposition eines Elements gearbeitet wird und wie die Ausrichtung des Elements durch den angegebenen Strahlwinkel beeinflusst wird.

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

Ähnlich wie bei {{cssxref("transform-origin")}} liegt der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Eigenschaft geändert werden.

In diesem Beispiel werden verschiedenen `offset-path: ray()`-Werte auf die Boxen mit den Nummern `1` bis `5` angewendet. Der „umgebende Block“ jeder Box wird mit einem gestrichelten Rand dargestellt. Eine verblasste Box in der oberen linken Ecke zeigt die Standardposition jeder Box ohne angewendetes `offset-position` oder `offset-path`, um einen Vergleich nebeneinander zu ermöglichen. Die Oberseite jeder Box ist mit einem `solid`-Rand hervorgehoben, um Variationen in den Ausgangspunkten und Ausrichtungen des Strahls zu veranschaulichen. Nachdem sie an der Startposition des Strahls positioniert wurde, richtet sich eine Box in die Richtung des angegebenen Strahlwinkels aus. Wird {{cssxref("offset-position")}} nicht angegeben, ist die Standardausgangsposition des Strahls das Zentrum (oder `50% 50%`) des Containing Block der Box.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass ihr Ankerpunkt (ihr Zentrum) an der Standard-Offset-Ausgangsposition (`50% 50%` des Containing Block) liegt. `box1` wird auch gedreht, um sich zum `0deg`-Winkel des Strahls auszurichten. Dies wird jetzt der Ausgangspunkt des Pfades sein. Sie können die Veränderung in der Position und Drehung der Box beobachten, indem Sie sie mit der verblassten `box0` links vergleichen. Die Box wird gedreht, um dem `0deg`-Winkel entlang der y-Achse zu entsprechen, der nach oben zeigt. Die Drehung der Box ist an der Ausrichtung der Nummer innerhalb der Box erkennbar.

- In `box2` wird dem Strahl ein größerer positiver Winkel von `150deg` zugewiesen, um zu zeigen, wie der Strahlwinkel funktioniert. Ausgehend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben dieselben `offset-path`-Werte. In `box3` wird ein [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate) von `0deg` ebenfalls auf das Element angewendet. Infolgedessen bleibt das Element während des gesamten Strahlpfads in diesem speziellen Winkel gedreht, und das Element wird nicht in Richtung des Pfads drehen. Beachten Sie in `box3`, dass der Strahlpfad bei `150deg` liegt, aber die Ausrichtung der Box sich aufgrund von `offset-rotate` nicht entlang des Pfads ändert. Beachten Sie auch, dass die `offset-path`-Eigenschaft von `box3` keine anfängliche `<position>` angibt, sodass die Startposition des Strahls aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des Containing Block gesetzt, und infolgedessen fallen der Ankerpunkt des Elements und die Offset-Ausgangsposition zusammen. Der Strahlwinkel von `0deg` wird an diesem Startpunkt auf das Element angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den Wert `at <position>` an, der die Box an der `bottom` und `right`-Kante des Containing Block des Elements platziert und `60deg` auf den Strahlwinkel angewendet wird.

### Ein Element entlang des Strahls animieren

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Ausrichtung gezeigt. Auf die anderen Formen wird ein Strahlbewegungspfad angewendet.

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

In den ersten beiden Beispielen, bei denen `offset-path` angewendet wird, beachten Sie die Ausrichtung der Formen ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkungen von Eck-`<size>`-Werten: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen `offset-path`, da sich die Form bereits in der Ecke befindet (`offset-position: auto`). Der `farthest-corner`-Wert erzeugt den längsten `offset-path`, der von der oberen linken Ecke des Containing Block zur unteren rechten Ecke führt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/Reference/Properties/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate)
