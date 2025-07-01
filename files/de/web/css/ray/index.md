---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{CSSRef}}

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert das [offset-path](/de/docs/Web/CSS/offset-path) Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt an einem {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und die Verwendung des `contain` Schlüsselworts eingeschränkt werden.

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
  - : Gibt die Richtung an, in die sich das Liniensegment von der Ausgangsposition aus erstreckt. Der Winkel `0deg` liegt auf der y-Achse und zeigt nach oben, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, die der Entfernung zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zum umschließenden Block entspricht. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Entfernung zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Liegt der Startpunkt des Strahls auf einer Kante des umschließenden Blocks, ist die Länge des Liniensegments null. Liegt der Startpunkt des Strahls außerhalb des umschließenden Blocks, wird angenommen, dass sich die Kante des umschließenden Blocks unendlich erstreckt. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im umschließenden Block des Elements. Liegt der Startpunkt des Strahls auf einer Ecke des umschließenden Blocks, ist die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Startpunkt des Strahls und der entferntesten Seite des umschließenden Blocks des Elements. Liegt der Startpunkt des Strahls außerhalb des umschließenden Blocks, wird angenommen, dass sich die Kante des umschließenden Blocks unendlich erstreckt.

    `farthest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der entferntesten Ecke im umschließenden Block des Elements.

    `sides`: Entfernung zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des umschließenden Blocks schneidet. Liegt der Startpunkt auf oder außerhalb der Grenze des umschließenden Blocks, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, sodass das Element auch bei `offset-distance: 100%` innerhalb des umschließenden Blocks bleibt. Die Segmentlänge wird speziell um die Hälfte der Breite oder Höhe der Randbox (border box) des Elements reduziert, je nachdem, welche größer ist, und nie weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und an dem das Element im umschließenden Block platziert wird. Dies ist ein optionaler Parameter. Wenn enthalten, muss der `<position>`-Wert durch das `at`-Schlüsselwort vorausgehen. Wenn weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird für die Startposition des Strahls der Wert `offset-position: normal` verwendet, wodurch das Element in der Mitte (oder `50% 50%`) des umschließenden Blocks platziert wird.

## Beschreibung

Die `ray()` Funktion positioniert ein Element entlang eines Pfades, indem sie dessen Position in einem zweidimensionalen Raum durch einen Winkel und einen Abstand von einem Referenzpunkt (Polarkoordinaten) angibt. Diese Funktionalität macht die `ray()` Funktion nützlich für die Erstellung von 2D-räumlichen Übergängen. Zum Vergleich: Dieser Ansatz unterscheidet sich von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (rechteckige Koordinaten) anzugeben, wie sie von der {{cssxref("translate","translate()")}} Funktion genutzt wird, und vom Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die Ausgangsposition als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()` Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird zunächst positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor) Punkt des Elements in die Startposition des Offsets verschoben wird. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}} Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen und der Standardwert `normal` zugelassen wird), wird das Element in der `center` (oder `50% 50%`) Position seines umschließenden Blocks platziert. Durch Angabe von `offset-position: auto` wird die Startposition in die `top left` Ecke (oder `0 0`) der Position des Elements gesetzt.
- Das Element wird initial gedreht, sodass seine [inline axis](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — die Fließrichtung seines Textes — mit dem durch `ray()` angegebenen Winkel ausgerichtet ist. Beispielsweise, bei einem `ray()` Winkel von `0deg`, der auf der y-Achse nach oben zeigt, wird die Inline-Achse des Elements vertikal gedreht, um mit dem Winkel des Strahls übereinzustimmen. Das Element behält diese Drehung entlang seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}} Eigenschaft, die es ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element anzugeben, um eine präzise Steuerung seines Erscheinungsbildes während des Pfades zu ermöglichen. Beispielsweise entfernt das Setzen von `offset-rotate: 0deg` jede durch `ray()` angewandte Drehung und richtet die Inline-Achse des Elements wieder mit der Fließrichtung des Textes aus.

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

Ähnlich wie {{cssxref("transform-origin")}} liegt der Standardankerpunkt im Zentrum eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor) Eigenschaft geändert werden.

In diesem Beispiel werden verschiedenen `offset-path: ray()` Werte auf die Kästchen mit den Nummern `1` bis `5` angewendet. Der "umschließende Block" jedes Kästchens wird mit einer gestrichelten Umrandung dargestellt. Ein verblasstes Kästchen in der oberen linken Ecke zeigt die Standardposition jedes Kästchens ohne jede angewandte `offset-position` oder `offset-path`, um einen Vergleich nebeneinander zu ermöglichen. Die Oberseite jedes Kästchens ist mit einer `solid` Umrandung hervorgehoben, um Variationen in den Strahlstartpunkten und Ausrichtungen zu veranschaulichen. Nach der Positionierung am Startpunkt des Strahls richtet sich ein Kästchen entlang der Richtung des angegebenen Strahlwinkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Startposition des Strahls das Zentrum (oder `50% 50%`) des umschließenden Blocks des Kästchens.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass sein Ankerpunkt (sein Zentrum) an der Standard-Offset-Startposition (`50% 50%` des umschließenden Blocks) liegt. `box1` wird auch gedreht, um es auf den `0deg` Winkel des Strahls auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Änderung in Position und Drehung des Kästchens im Vergleich zum verblassten `box0` auf der linken Seite beobachten. Das Kästchen ist gedreht, um mit dem `0deg`-Winkel entlang der y-Achse, der nach oben zeigt, übereinzustimmen. Die Drehung des Kästchens zeigt sich an der Orientierung der Zahl im Inneren des Kästchens.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Ausgehend von der oberen linken Ecke wird das Kästchen im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path` Werte. In `box3` wird zusätzlich ein [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auf das Element angewendet. Daher bleibt das Element entlang des Strahlpfades in diesem bestimmten Winkel gedreht und dreht sich nicht in Richtung des Pfades. Beachten Sie in `box3`, dass der Strahlpfad bei `150deg` liegt, die Ausrichtung des Kästchens sich jedoch aufgrund von `offset-rotate` entlang des Pfades nicht ändert. Beachten Sie auch, dass die `offset-path` Eigenschaft von `box3` keine Startposition `<position>` angibt, sodass die Startposition des Strahls aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt und als Ergebnis fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der Strahlwinkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` gibt die `offset-path` Eigenschaft den `at <position>` Wert an, der das Kästchen an der `bottom` und `right` Kante des umschließenden Blocks des Elements platziert und `60deg` wird auf den Strahlwinkel angewendet.

### Animieren eines Elements entlang des Strahls

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Ausrichtung gezeigt. Ein Strahlbewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten zwei `offset-path` Beispiele zeigen den Einfluss der Ecken `<size>` Werte: `closest-corner` und `farthest-corner`. Der `closest-corner` Wert erzeugt einen sehr kurzen Offset-Pfad, weil sich die Form bereits an der Ecke (`offset-position: auto`) befindet. Der `farthest-corner` Wert erzeugt den längsten Offset-Pfad, der von der oberen linken Ecke des umschließenden Blocks bis zur unteren rechten Ecke reicht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
