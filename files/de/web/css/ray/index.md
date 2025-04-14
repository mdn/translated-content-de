---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 874ad29df9150037acb8a4a3e7550a302c90a080
---

{{CSSRef}}

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert das [`offset-path`](/de/docs/Web/CSS/offset-path) Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Ray" bezeichnet. Der Ray beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Rays kann begrenzt werden, indem eine Größe angegeben und das Schlüsselwort `contain` verwendet wird.

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

  - : Gibt die Richtung an, in der sich das Liniensegment von der Offset-Startposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse, die nach oben zeigt, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`

  - : Gibt die Länge des Liniensegments an, die die Entfernung zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zum umschließenden Block angibt. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Er akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Entfernung zwischen dem Startpunkt des Rays und der nächstgelegenen Seite des [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Wenn der Startpunkt des Rays auf einer Kante des umschließenden Blocks liegt, ist die Länge des Liniensegments null. Befindet sich der Startpunkt des Rays außerhalb des umschließenden Blocks, wird die Kante des umschließenden Blocks als unendlich lang angesehen. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Startpunkt des Rays und der nächstgelegenen Ecke im umschließenden Block des Elements. Wenn der Startpunkt des Rays auf einer Ecke des umschließenden Blocks liegt, ist die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Startpunkt des Rays und der am weitesten entfernten Seite des umschließenden Blocks des Elements. Wenn der Startpunkt des Rays außerhalb des umschließenden Blocks liegt, wird die Kante des umschließenden Blocks als unendlich lang angesehen.

    `farthest-corner`: Entfernung zwischen dem Startpunkt des Rays und der am weitesten entfernten Ecke im umschließenden Block des Elements.

    `sides`: Entfernung zwischen dem Startpunkt des Rays und dem Punkt, an dem das Liniensegment die Grenze des umschließenden Blocks schneidet. Wenn sich der Startpunkt auf oder außerhalb der Grenze des umschließenden Blocks befindet, ist die Länge des Liniensegments null.

- `contain`

  - : Reduziert die Länge des Liniensegments so, dass das Element innerhalb des umschließenden Blocks bleibt, auch bei `offset-distance: 100%`. Konkret wird die Länge des Segments um die Hälfte der Breite oder Hälfte der Höhe des Rahmenkastens des Elements reduziert, je nachdem, was größer ist, und niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Ray beginnt und wo das Element in seinem umschließenden Block platziert wird. Dies ist ein optionaler Parameter. Wenn enthalten, muss der `<position>`-Wert dem Schlüsselwort `at` vorangestellt werden. Wenn weggelassen, wird der Wert des `offset-position` des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird der Wert für die Startposition des Rays `offset-position: normal` verwendet, was das Element in der Mitte (oder `50% 50%`) des umschließenden Blocks platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfades, indem sie dessen Standort in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt (Polarkoordinaten) angibt. Diese Funktion ist nützlich, um 2D-Raum-Übergänge zu erstellen. Zum Vergleich: Dieser Ansatz unterscheidet sich von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (Rechteckkoordinaten) anzugeben, die von der {{cssxref("translate","translate()")}} Funktion verwendet wird, und vom Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die Anfangsposition als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt kontrollieren:

- Das Element wird anfänglich positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Punkt des Elements zur Offset-Startposition des Elements verschoben wird. Standardmäßig wird die Startposition des Rays durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben ist (oder weggelassen und erlaubt ist, auf `normal` zu standardisieren), wird das Element in der `Mitte` (oder `50% 50%`) seines umschließenden Blocks positioniert. Geben Sie `offset-position: auto` an, um die Startposition in der `oberen linken` Ecke (oder `0 0`) der Position des Elements festzulegen.
- Das Element wird anfänglich so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — die Richtung des Textflusses — mit dem von `ray()` angegebenen Winkel übereinstimmt. Beispielsweise wird bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse liegt und nach oben zeigt, die Inline-Achse des Elements vertikal zur Übereinstimmung mit dem Winkel des Rays gedreht. Das Element behält diese Rotation während seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die Eigenschaft {{cssxref("offset-rotate")}}, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element festzulegen, wodurch Sie mehr Kontrolle über sein Erscheinungsbild haben, während es dem Pfad folgt. Beispielsweise wird durch das Setzen von `offset-rotate: 0deg` jede durch `ray()` angewendete Rotation entfernt und die Inline-Achse des Elements wieder mit der Richtung des Textflusses ausgerichtet.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Winkel und die Startposition für einen Ray definieren

Dieses Beispiel zeigt, wie mit der Startposition eines Elements gearbeitet wird und wie die Orientierung des Elements durch den angegebenen Ray-Winkel beeinflusst wird.

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

Ähnlich wie {{cssxref("transform-origin")}}, befindet sich der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der Eigenschaft [`offset-anchor`](/de/docs/Web/CSS/offset-anchor) modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die Kästchen Nummer `1` bis `5` angewendet. Der "umschließende Block" jedes Kästchens ist mit einem gestrichelten Rahmen dargestellt. Ein verblasstes Kästchen in der oberen linken Ecke zeigt die Standardposition jedes Kästchens ohne angewendete `offset-position` oder `offset-path`, was einen Vergleich nebeneinander ermöglicht. Die Oberseite jedes Kästchens ist mit einem `soliden` Rahmen hervorgehoben, um Variationen in den Ray-Startpunkten und Orientierungen zu veranschaulichen. Nachdem ein Kästchen an der Startposition des Rays positioniert wurde, richtet es sich in die Richtung des angegebenen Ray-Winkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, befindet sich die Standard-Offset-Startposition des Rays in der Mitte (oder `50% 50%`) des umschließenden Blocks des Kästchens.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass sich sein Ankerpunkt (seine Mitte) an der Standard-Offset-Startposition (`50% 50%` des umschließenden Blocks) befindet. `box1` wird ebenfalls gedreht, um es auf den `0deg`-Winkel des Rays auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Änderung in Position und Rotation des Kästchens beobachten, indem Sie es mit dem verblassten `box0` links vergleichen. Das Kästchen ist gedreht, um den `0deg`-Winkel entlang der y-Achse zu erreichen, nach oben zeigend. Die Drehung des Kästchens ist an der Orientierung der Zahl im Inneren des Kästchens erkennbar.

- In `box2` wird dem Ray ein größerer positiver Winkel von `150deg` zugewiesen, um zu zeigen, wie der Ray-Winkel funktioniert. Ausgangspunkt ist die obere linke Ecke, das Kästchen wird im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird auch eine [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auf das Element angewendet. Infolgedessen bleibt das Element entlang des gesamten Pfades des Rays in diesem bestimmten Winkel gedreht, und das Element wird sich nicht in die Richtung des Pfades drehen. Beachten Sie in `box3`, dass der Ray-Pfad `150deg` beträgt, aber die Orientierung des Kästchens sich aufgrund von `offset-rotate` nicht entlang des Pfades ändern wird. Beachten Sie auch, dass die `offset-path`-Eigenschaft von `box3` keine Start-`<position>` angibt, sodass die Startposition des Rays von der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt, und infolgedessen fallen der Ankerpunkt und die Offset-Startposition des Elements zusammen. Der Ray-Winkel von `0deg` wird an diesem Startpunkt auf das Element angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den `at <position>`-Wert an, der das Kästchen am `unteren` und `rechten` Rand des umschließenden Blocks des Elements platziert und `60deg` auf den Ray-Winkel anwendet.

### Ein Element entlang des Rays animieren

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Orientierung gezeigt. Ein Ray-Bewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten beiden Beispielen, bei denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden die Standard-{{cssxref("offset-position")}}-Wert `normal`, daher beginnt die Bewegungspfad von `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkungen von Eck-`<size>`-Werten: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erzeugt einen sehr kurzen Offset-Pfad, da sich die Form bereits in der Ecke befindet (`offset-position: auto`). Der `farthest-corner`-Wert erzeugt den längsten Offset-Pfad, der von der oberen linken Ecke des umschließenden Blocks zur unteren rechten Ecke verläuft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
