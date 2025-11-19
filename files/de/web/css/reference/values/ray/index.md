---
title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: 8fd626a7b7f1fcb19193325bbac5b87e719f83ea
---

Die **`ray()`**- [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert das [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path)-Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann begrenzt werden, indem eine Größe spezifiziert und das Schlüsselwort `contain` verwendet wird.

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
  - : Bestimmt die Richtung, in die sich das Liniensegment von der Offset-Startposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse, die nach oben zeigt, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, die den Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` im Verhältnis zum umschließenden Kasten darstellt. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Er akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements. Wenn der Startpunkt des Strahls auf einer Kante des umschließenden Blocks liegt, ist die Länge des Liniensegments null. Wenn der Startpunkt des Strahls außerhalb des umschließenden Blocks liegt, wird die Kante des umschließenden Blocks als unendlich verlängert betrachtet. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im umschließenden Block des Elements. Wenn der Startpunkt des Strahls auf einer Ecke des umschließenden Blocks liegt, ist die Länge des Liniensegments null.

    `farthest-side`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des umschließenden Blocks des Elements. Wenn der Startpunkt des Strahls außerhalb des umschließenden Blocks liegt, wird die Kante des umschließenden Blocks als unendlich verlängert betrachtet.

    `farthest-corner`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im umschließenden Block des Elements.

    `sides`: Abstand zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des umschließenden Blocks schneidet. Wenn der Startpunkt auf der oder außerhalb der Grenze des umschließenden Blocks liegt, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, sodass das Element auch bei `offset-distance: 100%` innerhalb des umschließenden Blocks bleibt. Konkret wird die Länge des Segments um die halbe Breite oder die halbe Höhe des Randkastens des Elements reduziert, je nachdem, welcher Wert größer ist, und niemals kleiner als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Bestimmt den Punkt, an dem der Strahl beginnt und an dem das Element in seinem umschließenden Block platziert wird. Dies ist ein optionaler Parameter. Falls eingeschlossen, muss der `<position>`-Wert mit dem Schlüsselwort `at` vorangestellt werden. Wird er weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird der Wert verwendet, der den Startpunkt des Strahls auf `offset-position: normal` setzt, was das Element in der Mitte (oder `50% 50%`) des umschließenden Blocks platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfads, indem es dessen Position in einem zweidimensionalen Raum durch einen Winkel und einen Abstand von einem Referenzpunkt (Polarkoordinaten) spezifiziert. Diese Funktion macht die `ray()`-Funktion nützlich für die Erstellung von 2D-Raumübergängen. Zum Vergleich unterscheidet sich dieser Ansatz von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (Rechteckkoordinaten) zu spezifizieren, die von der {{cssxref("translate","translate()")}}-Funktion verwendet wird und von der Bewegung eines Elements entlang eines definierten Pfads durch Animation.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die anfängliche Position als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird initial positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Punkt des Elements an die Offset-Startposition des Elements verschoben wird. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen und auf `normal` standardisiert wird), wird das Element am `center` (oder `50% 50%`) seines umschließenden Blocks positioniert. Die Angabe `offset-position: auto` setzt die Startposition auf die `top left`-Ecke (oder `0 0`) der Position des Elements.
- Das Element wird initial so gedreht, dass seine [inline axis](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout) — seine Richtung des Textflusses — sich mit dem von `ray()` angegebenen Winkel ausrichtet. Bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse liegt, die nach oben zeigt, wird die Inline-Achse des Elements so gedreht, dass sie vertikal mit dem Winkel des Strahls übereinstimmt. Das Element behält diese Drehung während seines Pfads bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element festzulegen, um eine präzisere Kontrolle über sein Erscheinungsbild beim Folgen des Pfads zu ermöglichen. Zum Beispiel wird beim Einstellen von `offset-rotate: 0deg` jede von `ray()` angewendete Drehung entfernt, wodurch die Inline-Achse des Elements wieder mit der Textfließrichtung ausgerichtet wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren des Winkels und der Startposition für einen Strahl

Dieses Beispiel zeigt, wie man mit der Startposition eines Elements arbeitet und wie die Orientierung des Elements durch den angegebenen Strahlwinkel beeinflusst wird.

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

Ähnlich wie bei {{cssxref("transform-origin")}} befindet sich der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die Boxen mit den Nummern `1` bis `5` angewendet. Der "umschließende Block" jeder Box wird mit einem gestrichelten Rahmen dargestellt. Eine verblasste Box in der oberen linken Ecke zeigt die Standardposition jeder Box ohne angewendete `offset-position` oder `offset-path`, um einen direkten Vergleich zu ermöglichen. Der obere Bereich jeder Box ist mit einem `soliden` Rahmen hervorgehoben, um Variationen in den Strahlstartpunkten und Orientierungen zu veranschaulichen. Nachdem sie an der Startposition des Strahls positioniert wurde, richtet sich eine Box in die durch den angegebenen Strahlwinkel bestimmte Richtung aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Startposition des Strahls das Zentrum (oder `50% 50%`) des umschließenden Blocks der Box.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird initial so positioniert, dass ihr Ankerpunkt (ihre Mitte) sich an der Standard-Offset-Startposition (`50% 50%` des umschließenden Blocks) befindet. `box1` wird auch gedreht, um sich zum `0deg`-Winkel des Strahls zu orientieren. Dies wird nun der Startpunkt des Pfads sein. Sie können die Änderung der Position und Drehung der Box beobachten, indem Sie sie mit der verblassten `box0` links vergleichen. Die Box wird gedreht, um mit dem `0deg`-Winkel entlang der y-Achse übereinzustimmen, der nach oben zeigt. Die Boxrotation ist aus der Orientierung der Zahl in der Box ersichtlich.

- In `box2` wird dem Strahl ein größerer positiver Winkel von `150deg` zugewiesen, um zu zeigen, wie der Strahlwinkel funktioniert. Ausgehend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird auch ein [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate) von `0deg` auf das Element angewendet. Infolgedessen bleibt das Element während des gesamten Pfads bei diesem spezifischen Winkel gedreht, und das Element wird nicht in Richtung des Pfads gedreht. Beachten Sie in `box3`, dass der Strahlpfad bei `150deg` liegt, aber die Boxorientierung sich wegen `offset-rotate` nicht entlang des Pfads ändert. Auch ist zu beachten, dass die `offset-path`-Eigenschaft von `box3` keine startende `<position>` angibt, sodass die Startposition des Strahls von der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt, und infolgedessen fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der Strahlwinkel von `0deg` wird an diesem Startpunkt auf das Element angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den `at <position>`-Wert an, der die Box an die `bottom`- und `right`-Kante des umschließenden Blocks des Elements setzt und `60deg` auf den Winkel des Strahls angewendet wird.

### Animieren eines Elements entlang des Strahls

In diesem Beispiel wird die erste Form als Referenz für Position und Orientierung gezeigt. Ein Strahl-Bewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkung von Eck-`<size>`-Werten: `closest-corner` und `farthest-corner`. Der Wert `closest-corner` erzeugt einen sehr kurzen Offset-Pfad, da sich die Form bereits an der Ecke befindet (`offset-position: auto`). Der Wert `farthest-corner` erzeugt den längsten Offset-Pfad, der von der oberen linken Ecke des umschließenden Blocks zur unteren rechten Ecke verläuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/Reference/Properties/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate)
