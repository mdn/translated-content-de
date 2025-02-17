---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: b8f45350a203be9e6e83c6fcb83c93576d8d5d9c
---

{{CSSRef}}

Die **`ray()`** [CSS](/de/docs/Web/CSS)-[Funktion](/de/docs/Web/CSS/CSS_Functions) definiert das Liniensegment des [`offset-path`](/de/docs/Web/CSS/offset-path), dem ein animiertes Element folgen kann. Dieses Liniensegment wird als „Strahl“ bezeichnet. Der Strahl beginnt bei einer {{cssxref("offset-position")}} und erstreckt sich in Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch die Angabe einer Größe und durch Verwendung des Schlüsselworts `contain` eingeschränkt werden.

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

  - : Gibt die Richtung an, in der sich das Liniensegment von der Offset-Ausgangsposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse und zeigt nach oben, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`

  - : Bestimmt die Länge des Liniensegments, also die Entfernung zwischen {{cssxref("offset-distance")}} `0%` und `100%`, relativ zur umschließenden Box. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Es akzeptiert folgende Schlüsselwortwerte:

    `closest-side`: Der Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [umschließenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Befindet sich der Startpunkt des Strahls auf einer Kante des umschließenden Blocks, beträgt die Länge des Liniensegments null. Liegt der Startpunkt außerhalb des umschließenden Blocks, wird die Kante des Blocks als unendlich verlängert betrachtet. Dies ist der Standardwert.

    `closest-corner`: Der Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im umschließenden Block des Elements. Befindet sich der Startpunkt des Strahls in einer Ecke des Blocks, beträgt die Länge des Liniensegments null.

    `farthest-side`: Der Abstand zwischen dem Startpunkt des Strahls und der entferntesten Seite des umschließenden Blocks des Elements. Befindet sich der Startpunkt außerhalb des Blocks, wird die Kante des Blocks ebenfalls als unendlich verlängert betrachtet.

    `farthest-corner`: Der Abstand zwischen dem Startpunkt des Strahls und der entferntesten Ecke im umschließenden Block.

    `sides`: Der Abstand zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Grenze des umschließenden Blocks schneidet. Liegt der Startpunkt auf oder außerhalb der Grenze, beträgt die Länge null.

- `contain`

  - : Reduziert die Länge des Liniensegments, sodass das Element auch bei `offset-distance: 100%` innerhalb des umschließenden Blocks bleibt. Die Länge wird um die Hälfte der Breite oder Höhe der Rahmenbox des Elements verkürzt, je nachdem, welcher Wert größer ist, jedoch niemals unter null verringert. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Startpunkt des Strahls an, wo das Element im umschließenden Block platziert wird. Dies ist ein optionaler Parameter. Wenn er inkludiert ist, muss der `<position>`-Wert durch das Schlüsselwort `at` eingeleitet werden. Fehlt dieser Parameter, wird der Wert `offset-position` des Elements verwendet. Wenn `offset-position` ebenfalls nicht definiert ist, wird der Standardwert von `offset-position: normal` verwendet, welcher das Element im Zentrum (bzw. `50% 50%`) des umschließenden Blocks positioniert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfades, indem die Position im zweidimensionalen Raum über einen Winkel und eine Entfernung von einem Referenzpunkt (polare Koordinaten) angegeben wird. Diese Funktion ist besonders nützlich für die Erstellung von 2D-Raumübergängen, anders als bei der punktgenauen Positionierung mittels horizontaler und vertikaler Abstände von einem festen Ursprung (rechteckige Koordinaten), wie es die {{cssxref("translate","translate()")}}-Funktion erlaubt, oder das Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` in einem zweidimensionalen Raum operiert, müssen sowohl die Ausgangsposition als auch die Ausrichtung des Elements berücksichtigt werden. Wird die `ray()`-Funktion als `offset-path`-Wert für ein Element angewendet, können diese Aspekte wie folgt gesteuert werden:

- Das Element wird zunächst positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Punkt des Elements an die Offset-Ausgangsposition bewegt wird. Standardmäßig wird die Ausgangsposition des Strahls durch den Wert von {{cssxref("offset-position")}} bestimmt. Wird `offset-position` als `normal` explizit angegeben (oder weggelassen, sodass es auf `normal` zurückfällt), wird das Element im Zentrum (bzw. bei `50% 50%`) des umschließenden Blocks positioniert. `offset-position: auto` setzt die Ausgangsposition auf die obere linke Ecke (bzw. `0 0`) des Elements.

- Das Element wird zunächst so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — die Richtung des Textflusses — mit dem von `ray()` festgelegten Winkel übereinstimmt. Zum Beispiel wird bei einem `ray()`-Winkel von `0deg` (auf der y-Achse nach oben zeigend) die Inline-Achse des Elements vertikal ausgerichtet, um den Strahlwinkel zu entsprechen. Das Element behält diesen Drehwinkel während seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es erlaubt, einen anderen Drehwinkel oder eine andere Richtung anzugeben, und so eine präzisere Steuerung des Erscheinungsbilds des Elements entlang des Pfads zu ermöglichen. Beispielsweise entfernt ein Wert von `offset-rotate: 0deg` jegliche durch `ray()` bewirkte Drehung, sodass die Inline-Achse des Elements wieder mit der Richtung des Textflusses übereinstimmt.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Den Winkel und den Startpunkt eines Strahls definieren

Dieses Beispiel demonstriert, wie Position und Orientierung eines Elements durch den angegebenen Strahlwinkel beeinflusst werden.

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

Ähnlich wie bei {{cssxref("transform-origin")}} befindet sich der standardmäßige Ankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mithilfe der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor)-Eigenschaft angepasst werden.

In diesem Beispiel werden verschiedene `offset-path: ray()`-Werte auf die Kästchen 1 bis 5 angewendet. Der "umschließende Block" jedes Kästchens ist durch eine gestrichelte Umrandung dargestellt. Ein verblasstes Kästchen in der oberen linken Ecke zeigt die Standardposition jedes Kästchens ohne jegliche `offset-position` oder `offset-path`-Anwendung, sodass ein direkter Vergleich möglich ist. Die Oberseite jedes Kästchens ist mit einer `solid`-Umrandung markiert, um Unterschiede zwischen den Startpunkten und -winkeln hervorzuheben. Nach dem Positionieren am Startpunkt eines Strahls richtet sich jedes Kästchen in Richtung des angegebenen Strahlwinkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, wird die Standard-Offset-Startposition des Strahls in der Mitte (bzw. `50% 50%`) des umschließenden Blocks des Kästchens angesetzt.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird so positioniert, dass sein Ankerpunkt (seine Mitte) bei der Standard-Offset-Startposition (`50% 50%` des umschließenden Blocks) liegt. `box1` wird auch gedreht, um zum `0deg`-Winkel des Strahls zu passen. Dies wird nun der Startpunkt des Pfades. Änderungen in Position und Rotation des Kästchens können durch den Vergleich mit dem verblassten `box0` links beobachtet werden. Das Kästchen ist in den `0deg`-Winkel entlang der y-Achse gedreht, der nach oben zeigt.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel wirkt. Ausgehend von der oberen linken Ecke wird das Kästchen im Uhrzeigersinn gedreht, bis der angegebene Winkel von `150deg` erreicht ist.

- `box2` und `box3` haben dieselben `offset-path`-Werte. In `box3` wird jedoch zusätzlich ein [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auf das Element angewendet. Dadurch bleibt das Element die ganze Zeit bei diesem spezifischen Winkel entlang des Strahlpfades und dreht sich nicht in Richtung des Pfades.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt, wodurch der Ankerpunkt und die Offset-Ausgangsposition des Elements zusammenfallen. Der Strahlwinkel von `0deg` wird auf das Element an diesem Startpunkt angewendet.

- In `box5` gibt die `offset-path`-Eigenschaft den `at <position>`-Wert an, wodurch das Kästchen am unteren rechten Rand des umschließenden Blocks positioniert wird, und es wird ein Strahlwinkel von `60deg` angewendet.

### Ein Element entlang des Strahls animieren

In diesem Beispiel wird die Position und Ausrichtung einer Form gezeigt, wobei auf andere Formen ein Strahlbewegungspfad angewendet wird.

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

>>> Im Beispiel, wo `offset-path` ohne und mit {{cssxref("offset-rotate")}} angewendet wird, wird der Standardwert {{cssxref("offset-position")}} auf `normal` gesetzt, was bedeutet, dass die Bewegung des Pfads vom Punkt `50% 50%` aus startet. Die letzten zwei `offset-path`-Beispiele zeigen `<size>`-Werte an den Ecken: `closest-corner` und `farthest-corner`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
