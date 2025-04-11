---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 5a195171d06aee3d9c1c78d71c7f0c3a060f5263
---

{{CSSRef}}

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert das [`offset-path`](/de/docs/Web/CSS/offset-path) Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt an einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und Verwendung des Schlüsselwortes `contain` eingeschränkt werden.

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

  - : Gibt die Richtung an, in die sich das Liniensegment von der Offset-Startposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse und zeigt nach oben, und positive Winkel steigen im Uhrzeigersinn.

- `<size>`

  - : Gibt die Länge des Liniensegments an, d.h. die Entfernung zwischen {{cssxref("offset-distance")}} `0%` und `100%`, relativ zum umgebenden Kasten. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es werden folgende Schlüsselwerte akzeptiert:

    `closest-side`: Entfernung zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Befindet sich der Startpunkt des Strahls auf einer Kante des Containing Blocks, beträgt die Länge des Liniensegments null. Befindet sich der Startpunkt des Strahls außerhalb des Containing Blocks, wird die Kante des Containing Blocks als unendlich verlängert angesehen. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im Containing Block des Elements. Liegt der Startpunkt des Strahls auf einer Ecke des Containing Blocks, beträgt die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des Containing Blocks des Elements. Befindet sich der Startpunkt des Strahls außerhalb des Containing Blocks, wird die Kante des Containing Blocks als unendlich verlängert angesehen.

    `farthest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im Containing Block des Elements.

    `sides`: Entfernung zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des Containing Blocks schneidet. Befindet sich der Startpunkt auf oder außerhalb der Grenze des Containing Blocks, beträgt die Länge des Liniensegments null.

- `contain`

  - : Reduziert die Länge des Liniensegments so, dass das Element im Containing Block verbleibt, auch bei `offset-distance: 100%`. Speziell wird die Länge des Segments um die Hälfte der Breite oder der Hälfte der Höhe der Border-Box des Elements verringert, je nachdem, welche größer ist, jedoch niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element in seinem Containing Block platziert wird. Dies ist ein optionaler Parameter. Wenn er enthalten ist, muss der `<position>`-Wert durch das Schlüsselwort `at` eingeleitet werden. Wird er weggelassen, wird der Wert `offset-position` des Elements verwendet. Wird er weggelassen und hat das Element keinen `offset-position`-Wert, wird der Wert für die Startposition des Strahls `offset-position: normal` verwendet, was das Element in der Mitte (oder `50% 50%`) des Containing Blocks platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfades, indem sie seine Position in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt (Polarkoordinaten) bestimmt. Diese Funktion ist nützlich, um zweidimensionale räumliche Übergänge zu erstellen. Im Vergleich dazu unterscheidet sich dieser Ansatz von der Methode, einen Punkt durch seine horizontalen und vertikalen Entfernungen von einem festen Ursprungspunkt (Rechteckkoordinaten) zu spezifizieren, das von der {{cssxref("translate","translate()")}}-Funktion verwendet wird, sowie vom Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im zweidimensionalen Raum arbeitet, ist es wichtig, sowohl die Anfangsposition als auch die Ausrichtung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird initial positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Punkt des Elements zur Offset-Startposition des Elements verschoben wird. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen und zur Standardvorgabe auf `normal` zurückgefaltet wird), wird das Element im `center` (oder `50% 50%`) seines Containing Blocks positioniert. Die Angabe von `offset-position: auto` setzt die Startposition an der oberen linken Ecke (oder `0 0`) der Position des Elements fest.
- Das Element wird initial so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — seine Textrichtungsflussrichtung — mit dem durch `ray()` angegebenen Winkel ausgerichtet wird. Bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, wird zum Beispiel die Inline-Achse des Elements vertikal gedreht, um mit dem Winkel des Strahls übereinzustimmen. Das Element behält diese Drehung entlang seines Pfades bei. Um dieses Verhalten zu kundenspezifisch anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element anzugeben und mehr Kontrolle über sein Erscheinungsbild zu erlangen, während es dem Pfad folgt. Beispielsweise wird durch Setzen von `offset-rotate: 0deg` jede durch `ray()` verursachte Drehung entfernt und die Inline-Achse des Elements erneut mit der Textrichtungsflussrichtung ausgerichtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren des Winkels und der Startposition für einen Strahl

Dieses Beispiel zeigt, wie Sie die Startposition eines Elements festlegen und wie die Orientierung des Elements durch den angegebenen Strahlwinkel beeinflusst wird.

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

Ähnlich wie {{cssxref("transform-origin")}} ist der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Eigenschaft geändert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die Kästchen `1` bis `5` angewendet. Der "Containing Block" jedes Kästchens wird durch eine gestrichelte Grenze dargestellt. Ein verblasstes Kästchen in der oberen linken Ecke zeigt die Standardposition jedes Kästchens ohne angewendete `offset-position` oder `offset-path`, um einen Vergleich Seite an Seite zu ermöglichen. Die Oberseite jedes Kästchens ist mit einer `soliden` Grenze hervorgehoben, um Variationen in Strahlstartpunkten und Orientierungen zu veranschaulichen. Nachdem ein Kästchen an der Startposition des Strahls positioniert wurde, richtet es sich nach der Richtung des angegebenen Strahlwinkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Startposition des Strahls das Zentrum (oder `50% 50%`) des Containing Blocks des Kästchens.

#### Ergebnis

{{EmbedLiveSample('Geben eines Winkels zum Strahl', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass sein Ankerpunkt (sein Zentrum) an der Standard-Offset-Startposition (`50% 50%` des Containing Blocks) ist. `box1` wird auch gedreht, um es in die Richtung des `0deg` Winkels des Strahls auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Veränderung der Position und Rotation des Kästchens beobachten, indem Sie es mit dem verblassten `box0` links vergleichen. Das Kästchen wird gedreht, um dem `0deg` Winkel entlang der y-Achse zu entsprechen, der nach oben zeigt. Die Drehung des Kästchens wird durch die Orientierung der Zahl innerhalb des Kästchens sichtbar.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Beginnend von der oberen linken Ecke wird das Kästchen im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird ein [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auch auf das Element angewendet. Infolgedessen bleibt das Element während des gesamten Pfades in diesem spezifischen Winkel gedreht und das Element wird sich nicht in Richtung des Pfades drehen. Beachten Sie in `box3`, dass der Strahlpfad auf `150deg` ist, aber die Ausrichtung des Kästchens sich aufgrund von `offset-rotate` nicht entlang des Pfades ändern wird. Beachten Sie auch, dass die `offset-path`-Eigenschaft von `box3` keine Start-`<position>` angibt, sodass die Startposition des Strahls aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des Containing Blocks gesetzt, und infolgedessen fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der Strahlwinkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` spezifiziert die `offset-path`-Eigenschaft den `at <position>`-Wert, der das Kästchen an der `bottom` und `right` Kante des Containing Blocks des Elements platziert und `60deg` wird auf den Strahlwinkel angewendet.

### Ein Element entlang des Strahls animieren

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Orientierung gezeigt. Ein Strahlbewegungspfad wird auf die anderen Formen angewendet.

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

{{EmbedLiveSample('Ein Element entlang des Strahls animieren', '100%', 750)}}

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Ausrichtung der Form mit und ohne {{cssxref("offset-rotate")}}. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher beginnt die Pfadbewegung von `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkungen der Eck-`<size>`-Werte: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen Offset-Pfad, da die Form sich bereits in der Ecke befindet (`offset-position: auto`). Der `farthest-corner`-Wert erzeugt den längsten Offset-Pfad, der von der oberen linken Ecke des Containing Blocks zur unteren rechten Ecke führt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
