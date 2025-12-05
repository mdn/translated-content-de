---
title: ray()
slug: Web/CSS/Reference/Values/ray
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) definiert die {{cssxref("offset-path")}} Liniensegment, denen ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann begrenzt werden, indem eine Größe angegeben wird und das Schlüsselwort `contain` verwendet wird.

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
  - : Gibt die Richtung an, in der sich das Liniensegment von der Offset-Ausgangsposition aus erstreckt. Der Winkel `0deg` liegt auf der y-Achse und zeigt nach oben, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, die der Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zur umschließenden Box ist. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben wird). Er akzeptiert einen der folgenden Schlüsselwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Seite des [umschließenden Blocks](/de/docs/Web/CSS/Guides/Display/Containing_block) des Elements. Wenn der Startpunkt des Strahls auf einer Kante des umschließenden Blocks liegt, ist die Länge des Liniensegments null. Wenn der Startpunkt des Strahls außerhalb des umschließenden Blocks liegt, wird angenommen, dass sich die Kante des umschließenden Blocks ins Unendliche erstreckt. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des Strahls und der nächstgelegenen Ecke im umschließenden Block des Elements. Wenn der Startpunkt des Strahls auf einer Ecke des umschließenden Blocks liegt, ist die Länge des Liniensegments null.

    `farthest-side`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des umschließenden Blocks des Elements. Wenn der Startpunkt des Strahls außerhalb des umschließenden Blocks liegt, wird angenommen, dass sich die Kante des umschließenden Blocks ins Unendliche erstreckt.

    `farthest-corner`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im umschließenden Block des Elements.

    `sides`: Abstand zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment den Rand des umschließenden Blocks schneidet. Wenn der Startpunkt auf oder außerhalb des Randes des umschließenden Blocks liegt, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, sodass das Element auch bei `offset-distance: 100%` innerhalb des umschließenden Blocks bleibt. Insbesondere wird die Länge des Segments um die Hälfte der Breite oder die Hälfte der Höhe der Begrenzungsbox des Elements, je nachdem, was größer ist, reduziert und niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, wo der Strahl beginnt und wo das Element in seinem umschließenden Block platziert wird. Dies ist ein optionaler Parameter. Wenn angegeben, muss der `<position>`-Wert dem Schlüsselwort `at` vorangestellt sein. Wenn er weggelassen wird, wird der Wert verwendet, der dem `offset-position`-Wert des Elements entspricht. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird für die Startposition des Strahls der Wert `offset-position: normal` verwendet, was das Element in der Mitte (oder `50% 50%`) des umschließenden Blocks platziert.

## Beschreibung

Die `ray()` Funktion positioniert ein Element entlang eines Pfades, indem sie seinen Standort in einem zweidimensionalen Raum durch einen Winkel und einen Abstand von einem Referenzpunkt (Polarkoordinaten) angibt. Diese Funktion ist nützlich für die Erstellung von 2D-Raumübergängen. Zum Vergleich unterscheidet sich dieser Ansatz von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (rechteckige Koordinaten) anzugeben, die von der {{cssxref("translate","translate()")}} Funktion verwendet wird, und vom Bewegen eines Elements entlang eines definierten Pfades durch Animation.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die anfängliche Position als auch die Ausrichtung des Elements zu berücksichtigen. Wenn die `ray()` Funktion als `offset-path` Wert auf ein Element angewendet wird, können Sie diese Aspekte folgendermaßen steuern:

- Das Element wird zunächst positioniert, indem der {{cssxref("offset-anchor")}} Punkt des Elements zur Ausgangsposition des Offsets des Elements verschoben wird. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}} Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen und zugelassen wird, dass sie zu `normal` wird), wird das Element in der `center` (oder `50% 50%`) seines umschließenden Blocks positioniert. Die Angabe von `offset-position: auto` setzt die Startposition in der linken oberen Ecke (oder `0 0`) der Position des Elements.
- Das Element wird zunächst so gedreht, dass seine [inline axis](/de/docs/Web/CSS/Guides/Grid_layout/Box_alignment#the_two_axes_of_a_grid_layout) — seine Textrichtung — mit dem Winkel ausgerichtet ist, der durch `ray()` angegeben wird. Zum Beispiel, mit dem `ray()` Winkel von `0deg`, der sich auf der y-Achse nach oben erstreckt, wird die Inline-Achse des Elements vertikal gedreht, um dem Winkel des Strahls zu entsprechen. Das Element behält diese Rotation entlang seines Pfades bei. Um das Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}} Eigenschaft, die es Ihnen ermöglicht, einen anderen Rotationswinkel oder eine andere Richtung für das Element zu bestimmen, um sein Aussehen präziser zu steuern, während es dem Pfad folgt. Zum Beispiel entfernt das Setzen von `offset-rotate: 0deg` jede Rotation, die von `ray()` angewendet wird, und richtet die Inline-Achse des Elements wieder mit dem Textfluss aus.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren des Winkels und der Ausgangsposition eines Strahls

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

Ähnlich wie bei {{cssxref("transform-origin")}} liegt der Standardankerpunkt in der Mitte eines Elements. Dieser Ankerpunkt kann mit der {{cssxref("offset-anchor")}} Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()` Werte auf die Boxen mit den Nummern `1` bis `5` angewendet. Der "umschließende Block" jeder Box wird mit einem gestrichelten Rahmen dargestellt. Eine verblasste Box in der linken oberen Ecke zeigt die Standardposition jeder Box ohne `offset-position` oder `offset-path`, um einen Seitenvergleich zu ermöglichen. Der obere Rand jeder Box ist mit einem `solid` Rahmen hervorgehoben, um Unterschiede in den Strahl-Ausgangspunkten und -Orientierungen zu veranschaulichen. Nach der Positionierung am Strahl-Ausgangspunkt richtet sich eine Box in Richtung des angegebenen Strahlwinkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Ausgangsposition des Strahls die Mitte (oder `50% 50%`) des Boxen-umschließenden Blocks.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird erstmalig so positioniert, dass ihr Ankerpunkt (ihre Mitte) an der Standard-Offset-Ausgangsposition (`50% 50%` des umschließenden Blocks) liegt. `box1` wird auch gedreht, um sich in Richtung des `0deg` Winkels des Strahls auszurichten. Dies wird nun der Ausgangspunkt des Pfades sein. Sie können die Veränderung in Position und Rotation der Box beobachten, indem Sie sie mit der verblassten `box0` links vergleichen. Die Box wird gedreht, um den `0deg` Winkel entlang der y-Achse, nach oben zeigend, zu entsprechen. Die Boxrotation ist aus der Orientierung der Zahl innerhalb der Box ersichtlich.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Beginnend von der linken oberen Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path` Werte. In `box3` wird zusätzlich eine {{cssxref("offset-rotate")}} von `0deg` auf das Element angewendet. Infolgedessen bleibt das Element entlang des Strahlpfades in diesem spezifischen Winkel gedreht, und das Element wird nicht in Richtung des Pfades gedreht. Beachten Sie in `box3`, dass der Strahlpfad bei `150deg` liegt, aber die Orientierung der Box sich entlang des Pfades nicht ändert aufgrund von `offset-rotate`. Beachten Sie auch, dass die `offset-path` Eigenschaft von `box3` keine Start-`<position>` angibt, sodass die Startposition des Strahls von der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umschließenden Blocks gesetzt, und infolgedessen fallen der Ankerpunkt des Elements und die Offset-Ausgangsposition zusammen. Der Strahlwinkel von `0deg` wird an diesem Ausgangspunkt auf das Element angewendet.

- In `box5` bestimmt die `offset-path` Eigenschaft den `at <position>` Wert, der die Box an den unteren und rechten Rand des Element-umschließenden Blocks platziert, und `60deg` wird auf den Strahlwinkel angewendet.

### Animation eines Elements entlang des Strahls

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Ausrichtung gezeigt. Ein Strahl-Bewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten beiden Beispielen, bei denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, und daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten beiden `offset-path` Beispiele zeigen die Auswirkungen von Eck-`<size>` Werten: `closest-corner` und `farthest-corner`. Der `closest-corner` Wert erzeugt einen sehr kurzen Offset-Pfad, da die Form bereits an der Ecke ist (`offset-position: auto`). Der `farthest-corner` Wert erzeugt den längsten Offset-Pfad, von der oberen linken Ecke des umschließenden Blocks zur unteren rechten Ecke verlaufend.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("offset-distance")}}
- {{cssxref("offset-path")}}
- {{cssxref("offset-rotate")}}
