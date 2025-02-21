---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 891bc513a3349040a16c4896197d6a3a910ca42b
---

{{CSSRef}}

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert das [`offset-path`](/de/docs/Web/CSS/offset-path) Liniensegment, dem ein animiertes Element folgen kann. Dieses Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt bei einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und dem Schlüsselwort `contain` eingeschränkt werden.

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

  - : Gibt die Richtung an, in der sich das Liniensegment von der Versatz-Startposition aus erstreckt. Der Winkel `0deg` liegt auf der y-Achse und zeigt nach oben, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`

  - : Gibt die Länge des Liniensegments an, das den Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zum umgebenden Rahmen darstellt. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben wird). Es akzeptiert einen der folgenden Schlüsselwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [umgebenden Rahmens](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Befindet sich der Startpunkt des Strahls auf einer Kante des umgebenden Rahmens, beträgt die Länge des Liniensegments null. Befindet sich der Startpunkt des Strahls außerhalb des umgebenden Rahmens, wird die Kante des umgebenden Rahmens als ins Unendliche verlaufend betrachtet. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im umgebenden Rahmen des Elements. Befindet sich der Startpunkt des Strahls auf einer Ecke des umgebenden Rahmens, beträgt die Länge des Liniensegments null.

    `farthest-side`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des umgebenden Rahmens des Elements. Befindet sich der Startpunkt des Strahls außerhalb des umgebenden Rahmens, wird die Kante des umgebenden Rahmens als ins Unendliche verlaufend betrachtet.

    `farthest-corner`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im umgebenden Rahmen des Elements.

    `sides`: Abstand zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des umgebenden Rahmens schneidet. Befindet sich der Startpunkt auf oder außerhalb der Grenze des umgebenden Rahmens, beträgt die Länge des Liniensegments null.

- `contain`

  - : Reduziert die Länge des Liniensegments, damit das Element auch bei `offset-distance: 100%` innerhalb des umgebenden Rahmens bleibt. Insbesondere wird die Länge des Segments um die halbe Breite oder Höhe des Randfeldes des Elements reduziert, je nachdem, was größer ist und niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element in seinem umgebenden Rahmen platziert wird. Dies ist ein optionaler Parameter. Wenn er enthalten ist, muss der `<position>` Wert dem Schlüsselwort `at` folgen. Wenn weggelassen, wird der Wert verwendet, der vom `offset-position` des Elements bestimmt wird. Wenn weggelassen und das Element keinen `offset-position` Wert hat, wird für die Startposition des Strahls der Wert `offset-position: normal` verwendet, der das Element in die Mitte (oder `50% 50%`) des umgebenden Rahmens setzt.

## Beschreibung

Die `ray()` Funktion positioniert ein Element entlang eines Pfades, indem sie dessen Standort in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt (polare Koordinaten) festlegt. Diese Funktion ist nützlich für die Erstellung von 2D-Raumübergängen. Zum Vergleich: Diese Methode unterscheidet sich von der Festlegung eines Punktes durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (rechteckige Koordinaten), die von der {{cssxref("translate","translate()")}} Funktion verwendet wird, sowie vom Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die initiale Position als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()` Funktion als `offset-path` Wert angewendet wird, können Sie folgende Aspekte steuern:

- Das Element wird zunächst positioniert, indem der Punkt [`offset-anchor`](/de/docs/Web/CSS/offset-anchor) des Elements zur Beginnposition des Versatzes bewegt wird. Standardmäßig wird die Startposition des Strahls vom {{cssxref("offset-position")}} Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben ist (oder weggelassen und auf `normal` standardisierte), wird das Element in der `center` (oder `50% 50%`) seines umgebenden Rahmens positioniert. Das Angeben von `offset-position: auto` setzt die Startposition in die `top left` Ecke (oder `0 0`) der Position des Elements.

- Das Element wird initial so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — die Richtung des Textflusses — mit dem durch `ray()` angegebenen Winkel übereinstimmt. Zum Beispiel wird bei einem `ray()` Winkel von `0deg`, der auf der y-Achse, nach oben zeigt, die Inline-Achse des Elements vertikal gedreht, um mit dem Winkel des Strahls zu übereinstimmen. Das Element behält diese Drehung entlang seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}} Eigenschaft. Diese ermöglicht es Ihnen, einen anderen Drehwinkel oder eine andere Drehrichtung für das Element festzulegen, was mehr Kontrolle über dessen Erscheinungsbild bietet, während es dem Pfad folgt. Zum Beispiel setzt `offset-rotate: 0deg` jede durch `ray()` angewendete Drehung zurück und richtet die Inline-Achse des Elements wieder mit der Fließrichtung des Textes aus.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen des Winkels und der Startposition für einen Strahl

Dieses Beispiel zeigt, wie man mit der Startposition eines Elements arbeitet und wie die Ausrichtung des Elements durch den angegebenen Strahlwinkel beeinflusst wird.

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

Ähnlich wie bei {{cssxref("transform-origin")}}, liegt der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann über die [`offset-anchor`](/de/docs/Web/CSS/offset-anchor) Eigenschaft verändert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()` Werte auf die Boxen mit den Nummern `1` bis `5` angewendet. Der "umgebende Block" jeder Box wird mit einer gestrichelten Grenze dargestellt. Eine verblasste Box in der oberen linken Ecke zeigt die Standardposition jeder Box ohne angewendeten `offset-position` oder `offset-path`, um einen Vergleich nebeneinander zu ermöglichen. Der obere Teil jeder Box ist mit einer `solid` Grenze hervorgehoben, um die Unterschiede in den Strahlstartpunkten und Ausrichtungen aufzuzeigen. Nachdem die Box an der Strahlstartposition ausgerichtet wurde, richtet sie sich entsprechend der Richtung des angegebenen Strahlwinkels aus. Ist {{cssxref("offset-position")}} nicht angegeben, ist die Standardposition des Versatzes für den Strahl die Mitte (oder `50% 50%`) des umgebenden Blocks der Box.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird anfangs positioniert, sodass ihr Ankerpunkt (ihr Zentrum) an der Standard-Starposition des Versatzes (`50% 50%` des umgebenden Blocks) ist. `box1` wird auch gedreht, um sich in Richtung des `0deg` Winkels des Strahls auszurichten. Dies wird nun der Ausgangspunkt des Pfades sein. Sie können die Veränderung in Position und Rotation der Box beobachten, indem Sie sie mit der verblassten `box0` links vergleichen. Die Box wird gedreht, um mit dem `0deg` Winkel entlang der y-Achse nach oben übereinzustimmen. Die Boxdrehung wird durch die Orientierung der Zahl innerhalb der Box deutlich.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Beginnend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path` Werte. In `box3` wird zusätzlich ein [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auf das Element angewendet. Als Ergebnis bleibt das Element während des gesamten Strahlpfades in diesem spezifischen Winkel gedreht, und das Element wird sich nicht in Richtung des Pfades drehen. Beachten Sie in `box3`, dass der Strahlenpfad bei `150deg` liegt, aber die Boxausrichtung wird sich aufgrund von `offset-rotate` nicht entlang des Pfades ändern. Beachten Sie auch, dass die `offset-path` Eigenschaft von `box3` keine startende `<position>` angibt, sodass die Startposition des Strahls aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umgebenden Blocks gesetzt, und als Ergebnis fallen der Ankerpunkt des Elements und die Startposition des Versatzes zusammen. Der Strahlwinkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` gibt die `offset-path` Eigenschaft den `at <position>` Wert an, der die Box an der unteren und rechten Kante des umgebenden Blocks des Elements platziert, und `60deg` wird auf den Winkel des Strahls angewendet.

### Animieren eines Elements entlang des Strahls

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Orientierung dargestellt. Ein Strahlbewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher startet die Pfadbewegung von `50% 50%`. Die letzten beiden `offset-path` Beispiele zeigen die Auswirkungen von Ecken `<size>` Werten: `closest-corner` und `farthest-corner`. Der `closest-corner` Wert erzeugt einen sehr kurzen offset-path, da die Form bereits an der Ecke ist (`offset-position: auto`). Der `farthest-corner` Wert erzeugt den längsten offset-path, der von der oberen linken Ecke des umgebenden Blocks zur unteren rechten Ecke verläuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
