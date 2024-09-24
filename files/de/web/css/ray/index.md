---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 523f7ebeb53ed7d95e806279e32d40c92b57d5fb
---

{{CSSRef}}

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Functions) definiert das [`offset-path`](/de/docs/Web/CSS/offset-path)-Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und die Verwendung des Schlüsselworts `contain` eingeschränkt werden.

## Syntax

```css
/* alle Parameter angegeben */
offset-path: ray(50deg closest-corner contain at 100px 20px);

/* zwei Parameter angegeben, deren Reihenfolge keine Rolle spielt */
offset-path: ray(contain 200deg);

/* nur ein Parameter angegeben */
offset-path: ray(45deg);
```

### Parameter

Die Parameter können in beliebiger Reihenfolge angegeben werden.

- [`<angle>`](/de/docs/Web/CSS/angle)

  - : Gibt die Richtung an, in der sich das Liniensegment von der Offset-Ausgangsposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse und zeigt nach oben, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`

  - : Gibt die Länge des Liniensegments an, das der Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zum umschließenden Block ist. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [umgebenden Blocks](/de/docs/Web/CSS/Containing_block) des Elements. Wenn sich der Startpunkt des Strahls auf einer Kante des umgebenden Blocks befindet, ist die Länge des Liniensegments Null. Wenn der Startpunkt des Strahls außerhalb des umgebenden Blocks liegt, wird die Kante des umgebenden Blocks als bis ins Unendliche erstreckend betrachtet. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im umgebenden Block des Elements. Wenn sich der Startpunkt des Strahls auf einer Ecke des umgebenden Blocks befindet, ist die Länge des Liniensegments Null.

    `farthest-side`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des umgebenden Blocks des Elements. Wenn der Startpunkt des Strahls außerhalb des umgebenden Blocks liegt, wird die Kante des umgebenden Blocks als bis ins Unendliche erstreckend betrachtet.

    `farthest-corner`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im umgebenden Block des Elements.

    `sides`: Abstand zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des umgebenden Blocks schneidet. Wenn sich der Startpunkt auf oder außerhalb der Grenze des umgebenden Blocks befindet, ist die Länge des Liniensegments Null.

- `contain`

  - : Reduziert die Länge des Liniensegments, so dass das Element innerhalb des umgebenden Blocks bleibt, selbst bei `offset-distance: 100%`. Genauer gesagt wird die Länge des Segments um die Hälfte der Breite oder die Hälfte der Höhe der Rahmenschachtel des Elements reduziert, wobei niemals weniger als Null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element in seinem umgebenden Block platziert wird. Dies ist ein optionaler Parameter. Wird er angegeben, muss der `<position>`-Wert durch das Schlüsselwort `at` vorangestellt werden. Wird dieser Wert weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wird dieser Wert weggelassen und das Element hat keinen `offset-position`-Wert, wird als Startpunkt des Strahls `offset-position: normal` verwendet, was das Element in der Mitte (oder `50% 50%`) des umgebenden Blocks platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfades, indem sie seinen Standort in einem zweidimensionalen Raum durch einen Winkel und einen Abstand von einem Referenzpunkt (Polarkoordinaten) angibt. Diese Funktionalität macht die `ray()`-Funktion nützlich für die Erstellung von 2D-Raumberechnungen. Im Vergleich dazu unterscheidet sich dieser Ansatz von der Methode der Angabe eines Punkts durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (Rechteckkoordinaten), die von der {{cssxref("translate","translate()")}}-Funktion verwendet wird, und vom Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` in einem 2D-Raum arbeitet, ist es wichtig, sowohl die Anfangsposition als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte folgendermaßen steuern:

- Das Element wird zunächst positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Punkt des Elements zur Offset-Ausgangsposition des Elements bewegt wird. Standardmäßig wird die Ausgangsposition des Strahls durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben ist (oder weggelassen und eingestellt wird, standardmäßig `normal`), wird das Element in der `Mitte` (oder `50% 50%`) des umgebenden Blocks positioniert. Das Festlegen von `offset-position: auto` setzt die Ausgangsposition an die `obere linke` Ecke (oder `0 0`) der Position des Elements.
- Das Element wird zunächst so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — seine Textfließrichtung — mit dem Winkel übereinstimmt, der von `ray()` angegeben wird. Zum Beispiel wird bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, die Inline-Achse des Elements vertikal gedreht, um dem Winkel des Strahls zu entsprechen. Das Element behält diese Drehung während seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element anzugeben, womit Sie präziser steuern können, wie es entlang des Pfades aussieht. Zum Beispiel entfernt das Festlegen von `offset-rotate: 0deg` jede durch `ray()` angewandte Drehung, indem die Inline-Achse des Elements wieder mit der Richtung des Textflusses ausgerichtet wird.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Winkel und die Ausgangsposition für einen Strahl definieren

Dieses Beispiel zeigt, wie Sie mit der Ausgangsposition eines Elements arbeiten können und wie die Orientierung des Elements durch den angegebenen Strahlwinkel beeinflusst wird.

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
  /* Die standardmäßig offset-Ausgangsposition ist 50% 50%. */
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

Ähnlich wie bei {{cssxref("transform-origin")}} liegt der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die Boxen mit den Nummern `1` bis `5` angewendet. Der "umgebende Block" jeder Box ist mit einer gestrichelten Linie dargestellt. Eine verblasste Box in der oberen linken Ecke zeigt die Standardposition jeder Box ohne angewendete `offset-position` oder `offset-path` und ermöglicht einen direkten Vergleich. Die Oberseite jeder Box ist mit einem `solid`-Rand markiert, um Variationen in den Strahlstartpunkten und Orientierungen zu veranschaulichen. Nach der Positionierung am Startpunkt des Strahls richtet sich eine Box entlang der Richtung des angegebenen Strahlwinkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Ausgangsposition des Strahls die Mitte (oder `50% 50%`) des umgebenden Blocks der Box.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass ihr Ankerpunkt (ihre Mitte) an der Standardversatz-Ausgangsposition (`50% 50%` des umgebenden Blocks) ist. `box1` wird auch gedreht, um sie zur `0deg`-Richtung des Strahls auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Veränderung in Position und Drehung der Box beobachten, indem Sie sie mit der verblassten `box0` links vergleichen. Die Box wird gedreht, um dem Winkel `0deg` entlang der y-Achse nach oben zu entsprechen. Die Drehung der Box ist an der Ausrichtung der Zahl innerhalb der Box erkennbar.

- Bei `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu demonstrieren, wie der Strahlwinkel funktioniert. Ausgehend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben dieselben `offset-path`-Werte. In `box3` wird auch ein [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auf das Element angewendet. Infolgedessen bleibt das Element entlang des gesamten Strahlpfads in diesem speziellen Winkel gedreht und dreht sich nicht in Richtung des Pfades. Beachten Sie in `box3`, dass der Strahlweg bei `150deg` liegt, aber bei der Box wird die Orientierung entlang des Pfades nicht geändert, da `offset-rotate` gesetzt ist. Beachten Sie auch, dass die `offset-path`-Eigenschaft von `box3` keine Start-`<position>` spezifiziert, sodass die Startposition des Strahls aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `oben 20% links 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umgebenden Blocks gesetzt, und infolgedessen fallen der Ankerpunkt des Elements und die Ausgangsposition des Offsets zusammen. Der Strahlwinkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den `at <position>`-Wert an, der die Box an der `unteren` und `rechten` Kante des umgebenden Blocks des Elements platziert und ein Winkel von `60deg` auf den Strahl angewendet wird.

### Animieren eines Elements entlang des Strahls

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Orientierung angezeigt. Ein Strahlbewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten zwei Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten zwei `offset-path`-Beispiele zeigen die Auswirkungen von Eck-`<size>`-Werten: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen offset-Pfad, weil sich die Form bereits an der Ecke befindet (`offset-position: auto`). Der `farthest-corner`-Wert erzeugt den längsten Versatzpfad, der von der oberen linken Ecke des umgebenden Blocks zur unteren rechten Ecke verläuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
