---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 523f7ebeb53ed7d95e806279e32d40c92b57d5fb
---

{{CSSRef}}

Die **`ray()`**- [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert das [offset-path](/de/docs/Web/CSS/offset-path)-Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt bei einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch die Angabe einer Größe und die Verwendung des `contain`-Schlüsselworts eingeschränkt werden.

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

  - : Gibt die Richtung an, in die sich das Liniensegment vom Offset-Ausgangspunkt erstreckt. Der Winkel `0deg` liegt auf der y-Achse nach oben, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`

  - : Gibt die Länge des Liniensegments an, das die Entfernung zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zur umschließenden Box ist. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es werden folgende Schlüsselwortwerte akzeptiert:

    `closest-side`: Entfernung zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [Umschließungsblocks](/de/docs/Web/CSS/Containing_block) des Elements. Liegt der Startpunkt des Strahls auf einer Kante des Umschließungsblocks, beträgt die Länge des Liniensegments null. Liegt der Startpunkt des Strahls außerhalb des Umschließungsblocks, wird die Kante des Umschließungsblocks als ins Unendliche verlängert betrachtet. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der nächsten Ecke im Umschließungsblock des Elements. Liegt der Startpunkt des Strahls auf einer Ecke des Umschließungsblocks, beträgt die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Startpunkt des Strahls und der entferntesten Seite des Umschließungsblocks des Elements. Liegt der Startpunkt des Strahls außerhalb des Umschließungsblocks, wird die Kante des Umschließungsblocks als ins Unendliche verlängert betrachtet.

    `farthest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der entferntesten Ecke im Umschließungsblock des Elements.

    `sides`: Entfernung zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des Umschließungsblocks schneidet. Liegt der Startpunkt auf oder außerhalb der Grenze des Umschließungsblocks, beträgt die Länge des Liniensegments null.

- `contain`

  - : Reduziert die Länge des Liniensegments so, dass das Element auch bei `offset-distance: 100%` innerhalb des Umschließungsblocks bleibt. Konkret wird die Länge des Segments um die Hälfte der Breite oder die Hälfte der Höhe der Border-Box des Elements reduziert, je nachdem, was größer ist, und niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element in seinem Umschließungsblock platziert wird. Dies ist ein optionaler Parameter. Falls angegeben, muss dem `<position>`-Wert das Schlüsselwort `at` vorangestellt werden. Wenn es weggelassen wird, wird der Wert der `offset-position` des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird für die Startposition des Strahls `offset-position: normal` verwendet, was das Element in der Mitte (oder `50% 50%`) des Umschließungsblocks platziert.

## Beschreibung

Die Funktion `ray()` positioniert ein Element entlang eines Pfades, indem sie seinen Ort in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt (Polarkoordinaten) angibt. Diese Funktion macht die `ray()` Funktion nützlich für die Erstellung von zweidimensionalen räumlichen Übergängen. Zum Vergleich: Dieser Ansatz unterscheidet sich von der Methode, einen Punkt durch seine horizontale und vertikale Entfernung von einem festen Ursprung (rechtwinklige Koordinaten) zu spezifizieren, wie sie von der {{cssxref("translate","translate()")}}-Funktion verwendet wird, und davon, ein Element entlang eines definierten Pfades durch Animation zu bewegen.

Da `ray()` im zweidimensionalen Raum arbeitet, ist es wichtig, sowohl die Ausgangsposition als auch die Ausrichtung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte folgendermaßen steuern:

- Das Element wird zunächst durch Verschieben des [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Punkts des Elements auf die Offset-Startposition des Elements positioniert. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` ausdrücklich als `normal` (oder weggelassen und erlaubt, auf `normal` zu standardisieren) angegeben ist, wird das Element in der Mitte (oder `50% 50%`) seines Umschließungsblocks positioniert. Die Angabe von `offset-position: auto` setzt die Startposition in die obere linke Ecke (oder `0 0`) der Elementposition.
- Das Element wird anfänglich so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — seine Textflussrichtung — mit dem durch `ray()` angegebenen Winkel ausgerichtet ist. Zum Beispiel wird mit dem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben liegt, die Inline-Achse des Elements vertikal gedreht, um den Winkel des Strahls zu erreichen. Das Element behält diese Drehung während seines gesamten Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen erlaubt, einen anderen Drehwinkel oder eine andere Richtung für das Element anzugeben und so eine genauere Kontrolle über sein Erscheinungsbild zu ermöglichen, während es dem Pfad folgt. Zum Beispiel wird durch das Festlegen von `offset-rotate: 0deg` jede von `ray()` angewendete Drehung entfernt, sodass die Inline-Achse des Elements wieder mit der Textflussrichtung ausgerichtet wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Winkel und den Startpunkt eines Strahls definieren

Dieses Beispiel zeigt, wie mit der Startposition eines Elements gearbeitet wird und wie die Orientierung des Elements durch den angegebenen Strahlwinkel beeinflusst wird.

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

Ähnlich wie bei {{cssxref("transform-origin")}} ist der Standardankerpunkt im Zentrum eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Eigenschaft geändert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die mit `1` bis `5` nummerierten Kästchen angewendet. Der "umschließende Block" jedes Kästchens wird mit einer gestrichelten Umrandung dargestellt. Ein verblasstes Kästchen in der oberen linken Ecke zeigt die Standardposition jedes Kästchens ohne angewendete `offset-position` oder `offset-path`, um einen Seitenvergleich zu ermöglichen. Die Oberseite jedes Kästchens ist mit einer `solid` Umrandung hervorgehoben, um Unterschiede in den Strahlstartpunkten und Ausrichtungen zu illustrieren. Nachdem das Box an den Startpunkt des Strahls positioniert ist, stimmt es mit der Richtung des angegebenen Strahlwinkels überein. Wenn {{cssxref("offset-position")}} nicht angegeben ist, liegt der Standardversatz-Startpunkt des Strahls im Zentrum (oder `50% 50%`) des umschließenden Blocks des Kästchens.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass sein Ankerpunkt (sein Zentrum) am Standardversatz-Startpunkt (`50% 50%` des umschließenden Blocks) liegt. `box1` wird auch gedreht, damit es in Richtung des `0deg` Winkels des Strahls ausgerichtet wird. Dies wird jetzt der Ausgangspunkt des Pfades sein. Sie können die Änderung der Position und Drehung der Box beobachten, indem Sie diese mit dem verblassten `box0` auf der linken Seite vergleichen. Die Box wird gedreht, um den `0deg` Winkel entlang der y-Achse nach oben zu erreichen. Die Drehung der Box wird durch die Orientierung der Zahl innerhalb der Box deutlich.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Ausgehend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird auch eine [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auf das Element angewendet. Infolgedessen bleibt das Element in diesem bestimmten Winkel auf dem Strahlweg gedreht, und das Element wird sich nicht in Richtung des Weges drehen. Beachten Sie in `box3`, dass der Strahlweg bei `150deg` liegt, aber die Box-Ausrichtung sich auf dem Weg nicht ändert, weil `offset-rotate` angewandt wurde. Beachten Sie auch, dass die `offset-path`-Eigenschaft von `box3` keine Anfangs-`<position>` angibt, sodass die Startposition des Strahls von der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt, und infolgedessen fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der Strahlwinkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den `at <position>` Wert an, der die Box an der unteren und rechten Kante des umschließenden Blocks des Elements platziert und `60deg` auf den Winkel des Strahls angewendet wird.

### Ein Element entlang des Strahls animieren

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Ausrichtung gezeigt. Ein Strahlenbewegungspfad wird auf die anderen Formen angewendet.

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
  0%, 20% {
    offset-distance: 0%;
  }
  80%, 100% {
    offset-distance: 100%;
  }
```

```html hidden
<div>
  <div class="container">
    <div class=" shape shape1">&mdash;</div>
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

<pre>offset-path: ray(120deg sides contain);
offset-rotate: 0deg;</pre>

<div>
  <div class="container">
    <div class="shape shape4">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg closest-corner)</pre>

<div>
  <div class="container">
    <div class="shape shape5">&mdash;</div>
  </div>
</div>

<pre>
  offset-position: auto;
  offset-path: ray(120deg farthest-corner)</pre>
</div>
```

#### Ergebnis

{{EmbedLiveSample('Animating an element along the ray', '100%', 750)}}

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher beginnt die Pfadbewegung von `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkungen von Eck-`<size>`-Werten: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen Offset-Pfad, da die Form bereits an der Ecke (`offset-position: auto`) ist. Der `farthest-corner`-Wert erzeugt den längsten Offset-Pfad, der von der oberen linken Ecke des Umschließungsblocks zur unteren rechten Ecke geht.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
