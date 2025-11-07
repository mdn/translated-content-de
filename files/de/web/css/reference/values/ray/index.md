---
title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`ray()`**-Funktion definiert das Liniensegment des [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path), dem ein animiertes Element folgen kann. Das Liniensegment wird als "ray" bezeichnet. Der Ray beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Rays kann durch Angabe einer Größe und Verwendung des `contain`-Schlüsselworts begrenzt werden.

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
  - : Gibt die Richtung an, in die sich das Liniensegment von der Offset-Ausgangsposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse, die nach oben zeigt, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, das die Distanz zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zum Begrenzungskasten ist. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Entfernung zwischen dem Startpunkt des Rays und der nächsten Seite des [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Liegt der Startpunkt des Rays auf einem Rand des Containing Blocks, ist die Länge des Liniensegments null. Befindet sich der Startpunkt des Rays außerhalb des Containing Blocks, wird angenommen, dass sich der Rand des Containing Blocks bis ins Unendliche erstreckt. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Startpunkt des Rays und der nächsten Ecke im Containing Block des Elements. Liegt der Startpunkt des Rays auf einer Ecke des Containing Blocks, ist die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Startpunkt des Rays und der am weitesten entfernten Seite des Containing Blocks des Elements. Befindet sich der Startpunkt des Rays außerhalb des Containing Blocks, wird angenommen, dass sich der Rand des Containing Blocks bis ins Unendliche erstreckt.

    `farthest-corner`: Entfernung zwischen dem Startpunkt des Rays und der am weitesten entfernten Ecke im Containing Block des Elements.

    `sides`: Entfernung zwischen dem Startpunkt des Rays und dem Punkt, an dem das Liniensegment die Grenze des Containing Blocks schneidet. Befindet sich der Startpunkt auf oder außerhalb der Grenze des Containing Blocks, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, sodass das Element auch bei `offset-distance: 100%` innerhalb des Containing Blocks bleibt. Insbesondere wird die Länge des Segments um die Hälfte der Breite oder Höhe des Umrandungsrechtecks des Elements reduziert, je nachdem, welcher Wert größer ist, und nie weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Ray beginnt und wo das Element in seinem Containing Block platziert ist. Dies ist ein optionaler Parameter. Wenn eingeschlossen, muss der `<position>`-Wert durch das `at`-Schlüsselwort vorangestellt werden. Wenn weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird der für die Startposition des Rays verwendete Wert `offset-position: normal` sein, der das Element im Zentrum (oder `50% 50%`) des Containing Blocks platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfades, indem es seinen Ort in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt angibt (Polarkoordinaten). Diese Funktion macht die `ray()`-Funktion nützlich für die Erstellung von 2D-Raumübergängen. Zum Vergleich unterscheidet sich dieser Ansatz von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung anzugeben (Rechteckkoordinaten), die von der {{cssxref("translate","translate()")}}-Funktion verwendet wird, und von der Bewegung eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die Anfangsposition als auch die Ausrichtung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird zunächst positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Punkt des Elements zur Ausgangsposition des Offset verschoben wird. Standardmäßig wird die Startposition des Rays durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen und auf `normal` zurückgesetzt wird), wird das Element im `center` (oder `50% 50%`) seines Containing Blocks positioniert. Wird `offset-position: auto` angegeben, wird die Startposition in der oberen linken Ecke (`0 0`) der Position des Elements festgelegt.
- Das Element wird zunächst so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — seine Textflussrichtung — mit dem von `ray()` angegebenen Winkel übereinstimmt. Zum Beispiel wird bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, die Inline-Achse des Elements so gedreht, dass sie vertikal mit dem Winkel des Rays übereinstimmt. Das Element behält diese Rotation während seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Rotationswinkel oder eine andere Richtung für das Element anzugeben und somit eine genauere Kontrolle über sein Erscheinungsbild zu ermöglichen, während es dem Pfad folgt. Zum Beispiel wird durch Setzen von `offset-rotate: 0deg` jegliche von `ray()` angewendete Rotation entfernt, die Inline-Achse des Elements wieder mit der Textflussrichtung ausgerichtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren des Winkels und der Startposition für einen Ray

Dieses Beispiel zeigt, wie man mit der Startposition eines Elements arbeitet und wie die Ausrichtung des Elements durch den angegebenen Winkel des Rays beeinflusst wird.

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

Ähnlich wie {{cssxref("transform-origin")}} liegt der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedenen Kästchen mit den Nummern `1` bis `5` `offset-path: ray()`-Werte zugewiesen. Der "Containing Block" jedes Kästchens wird mit einer gestrichelten Grenze dargestellt. Ein verblasstes Kästchen in der oberen linken Ecke zeigt die Standardposition jedes Kästchens ohne angewendetes `offset-position` oder `offset-path`, um einen direkten Vergleich zu ermöglichen. Die Oberseite jedes Kästchens ist mit einer `solid` Grenze hervorgehoben, um Abweichungen in den Startpunkten und Ausrichtungen des Rays zu veranschaulichen. Nachdem das Kästchen am Startpunkt des Rays positioniert ist, richtet es sich in die Richtung des angegebenen Ray-Winkels aus. Wenn {{cssxref("offset-position")}} nicht spezifiziert ist, ist die Standard-Offset-Startposition des Rays das Zentrum (oder `50% 50%`) des Containing Blocks des Kästchens.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird so initial positioniert, dass sein Ankerpunkt (seine Mitte) an der Standard-Offset-Startposition (`50% 50%` des Containing Block) liegt. `box1` wird ebenfalls gedreht, um es in Richtung des `0deg`-Winkels des Rays auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Änderung der Position und Rotation des Kästchens beobachten, indem Sie es mit dem verblassten `box0` auf der linken Seite vergleichen. Das Kästchen wird gedreht, um den `0deg`-Winkel entlang der y-Achse, der nach oben zeigt, auszurichten. Die Box-Rotation ist deutlich anhand der Orientierung der Zahl im Inneren des Kästchens zu erkennen.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Ray angewendet, um zu zeigen, wie der Ray-Winkel funktioniert. Ausgehend von der oberen linken Ecke wird das Kästchen im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird zusätzlich ein [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate) von `0deg` auf das Element angewendet. Dadurch bleibt das Element entlang des Pfades in diesem spezifischen Winkel gedreht und wird sich nicht in Richtung des Pfades drehen. Beachten Sie in `box3`, dass der Ray-Pfad auf `150deg` liegt, aber die Box-Orientierung sich entlang des Pfades nicht ändert aufgrund von `offset-rotate`. Außerdem beachten Sie, dass die `offset-path`-Eigenschaft von `box3` keine anfängliche `<position>` angibt, sodass die Startposition des Rays von der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des Containing Blocks gesetzt, und als Ergebnis fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der Ray-Winkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den `at <position>`-Wert an, der die Box an der `bottom` und `right` Kante des Containing Blocks des Elements platziert, und es wird ein Winkel von `60deg` auf den Ray angewendet.

### Animation eines Elements entlang des Rays

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Ausrichtung gezeigt. Ein Ray-Bewegungspfad ist auf die anderen Formen angewendet.

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

In den ersten beiden Beispiel, in denen `offset-path` angewendet wird, beachten Sie die Ausrichtung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide diese Beispiele verwenden den Standardwert `normal` von {{cssxref("offset-position")}}, und daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen den Einfluss von `<size>`-Eckwerten: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen Offset-Pfad, da die Form bereits an der Ecke (`offset-position: auto`) ist. Der `farthest-corner`-Wert erzeugt den längsten Offset-Pfad, der von der oberen linken Ecke des Containing Blocks zur unteren rechten Ecke führt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/Reference/Properties/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate)
