---
title: "`ray()` CSS-Funktion"
short-title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert das {{cssxref("offset-path")}} Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt an einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und die Verwendung des `contain` Schlüsselworts begrenzt werden.

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
  - : Gibt die Richtung an, in die sich das Liniensegment vom offset-Ausgangspunkt erstreckt. Der Winkel `0deg` liegt auf der y-Achse nach oben gerichtet, und positive Winkel erhöhen sich im Uhrzeigersinn.

- `<size>`
  - : Gibt die Länge des Liniensegments an, das die Entfernung zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zum umschließenden Block darstellt. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Entfernung zwischen dem Startpunkt des Strahls und der nächsten Seite des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements. Wenn der Startpunkt des Strahls auf einer Kante des umschließenden Blocks liegt, beträgt die Länge des Liniensegments null. Wenn der Startpunkt des Strahls außerhalb des umschließenden Blocks liegt, wird die Kante des umschließenden Blocks als unendlich ausgedehnt betrachtet. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der nächsten Ecke im umschließenden Block des Elements. Wenn der Startpunkt des Strahls auf einer Ecke des umschließenden Blocks liegt, beträgt die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des umschließenden Blocks des Elements. Wenn der Startpunkt des Strahls außerhalb des umschließenden Blocks liegt, wird die Kante des umschließenden Blocks als unendlich ausgedehnt betrachtet.

    `farthest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im umschließenden Block des Elements.

    `sides`: Entfernung zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des umschließenden Blocks schneidet. Wenn der Startpunkt auf oder außerhalb der Grenze des umschließenden Blocks liegt, beträgt die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, damit das Element auch bei `offset-distance: 100%` innerhalb des umschließenden Blocks bleibt. Konkret wird die Segmentlänge um die Hälfte der Breite oder der Höhe des Rahmenkastens des Elements verkürzt, je nachdem, was größer ist, und niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element in seinem umschließenden Block platziert wird. Dies ist ein optionaler Parameter. Wenn angegeben, muss der `<position>`-Wert vom `at`-Schlüsselwort vorangestellt werden. Wenn weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn nicht angegeben und das Element keinen `offset-position`-Wert hat, wird der verwendete Startpunkt des Strahls auf `offset-position: normal` gesetzt, was das Element im Zentrum (oder `50% 50%`) des umschließenden Blocks platziert.

## Beschreibung

Die `ray()` Funktion positioniert ein Element entlang eines Pfads, indem sie dessen Lage in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt (Polar-Koordinaten) angibt. Diese Funktion ist nützlich für die Erstellung von 2D-Raumübergängen. Im Vergleich unterscheidet sich dieser Ansatz von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung zu spezifizieren (rechtwinklige Koordinaten), was durch die {{cssxref("translate","translate()")}} Funktion verwendet wird, und vom Bewegen eines Elements entlang eines definierten Pfads durch Animation.

Da `ray()` in einem 2D-Raum funktioniert, ist es wichtig, sowohl die Anfangsposition als auch die Ausrichtung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird zu Beginn durch Verschieben des {{cssxref("offset-anchor")}}-Punktes des Elements an die Ausgangsposition des Elements positioniert. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben ist (oder weggelassen und erlaubt, auf `normal` zu standardisieren), wird das Element an der `center` (oder `50% 50%`) seines umschließenden Blocks positioniert. Die Angabe von `offset-position: auto` setzt die Startposition auf die `oben links` Ecke (oder `0 0`) der Elementposition.
- Das Element wird anfänglich so gedreht, dass seine [inline-Achse](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout) — die Richtung des Textflusses — mit dem Winkel übereinstimmt, der durch `ray()` angegeben wird. Zum Beispiel wird das Element mit dem `ray()` Winkel von `0deg`, der auf der y-Achse nach oben zeigt, vertikal gedreht, um den Winkel des Strahls anzupassen. Das Element behält diese Drehung entlang seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}} Eigenschaft, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element anzugeben, um eine genauere Kontrolle über dessen Erscheinungsbild zu ermöglichen, während es dem Pfad folgt. Beispielsweise wird das Setzen von `offset-rotate: 0deg` jegliche von `ray()` angewandte Drehung aufheben und die Inline-Achse des Elements wieder in die Richtung des Textflusses ausrichten.

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

Ähnlich wie bei {{cssxref("transform-origin")}}, ist der Standardverankerungspunkt in der Mitte eines Elements. Dieser Verankerungspunkt kann mit der {{cssxref("offset-anchor")}} Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()` Werte auf die mit `1` bis `5` nummerierten Kästchen angewendet. Der "umschließende Block" jedes Kästchens ist mit einer gestrichelten Linie dargestellt. Ein verblasstes Kästchen in der oberen linken Ecke zeigt die Standardposition jedes Kästchens ohne angewendetes `offset-position` oder `offset-path`, was einen direkten Vergleich ermöglicht. Die Oberseite jedes Kästchens ist mit einem `soliden` Rand hervorgehoben, um die Unterschiede in den Strahlstartpunkten und -orientierungen zu illustrieren. Nach der Positionierung am Startpunkt des Strahls wird ein Kästchen in Richtung des angegebenen Strahlwinkels ausgerichtet. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standardoffset-Startposition des Strahls das Zentrum (oder `50% 50%`) des umschließenden Blocks des Kästchens.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird anfänglich so positioniert, dass sein Verankerungspunkt (seine Mitte) an der Standardoffset-Startposition (`50% 50%` des umschließenden Blocks) liegt. `box1` wird auch gedreht, um es in Richtung des `0deg`-Winkels des Strahls auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Änderung in der Position und Drehung des Kästchens beobachten, indem Sie es mit dem verblassten `box0` auf der linken Seite vergleichen. Das Kästchen wird gedreht, um den `0deg` Winkel entlang der y-Achse zu erreichen, nach oben zeigend. Die Boxdrehung ist von der Orientierung der Zahl im Inneren des Kästchens ersichtlich.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Ausgangspunkt ist die obere linke Ecke, das Kästchen wird im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. Bei `box3` wird ein {{cssxref("offset-rotate")}} von `0deg` ebenfalls auf das Element angewendet. Infolgedessen bleibt das Element entlang des Strahlpfades in diesem spezifischen Winkel gedreht, und das Element wird sich nicht in die Richtung des Pfades drehen. Beachten Sie bei `box3`, dass der Pfad des Strahls bei `150deg` liegt, aber die Boxorientierung wird sich entlang des Pfads nicht ändern, weil `offset-rotate` angewendet wurde. Beachten Sie auch, dass die `offset-path` Eigenschaft von `box3` keinen Start `<position>` angibt, sodass die Startposition des Strahls aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `oben 20% links 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt, und infolgedessen fallen der Verankerungspunkt des Elements und die Offset-Startposition zusammen. Der Strahlwinkel von `0deg` wird zu diesem Startpunkt auf das Element angewendet.

- In `box5` legt die `offset-path` Eigenschaft den `at <position>` Wert fest, der die Box an der unteren und rechten Grenze des umschließenden Blocks des Elements platziert, und `60deg` wird auf den Strahlwinkel angewendet.

### Animation eines Elements entlang des Strahls

In diesem Beispiel wird die erste Form als Referenz für deren Position und Orientierung gezeigt. Ein Strahl-Bewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten beiden Beispielen, wo `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher startet die Pfadbewegung von `50% 50%`. Die letzten zwei `offset-path` Beispiele zeigen die Auswirkung von Eck-`<size>` Werten: `closest-corner` und `farthest-corner`. Der Wert `closest-corner` erzeugt einen sehr kurzen offset-Pfad, weil die Form bereits an der Ecke (`offset-position: auto`) ist. Der Wert `farthest-corner` erzeugt den längsten offset-Pfad, der von der oberen linken Ecke des umschließenden Blocks zur unteren rechten Ecke führt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
