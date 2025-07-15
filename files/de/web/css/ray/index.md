---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_Values_and_Units/CSS_Value_Functions) definiert das [`offset-path`](/de/docs/Web/CSS/offset-path) Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann durch Angabe einer Größe und Verwendung des `contain`-Schlüsselworts begrenzt werden.

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
  - : Legt die Richtung fest, in die sich das Liniensegment von der Offset-Ausgangsposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse nach oben, und positive Winkel steigen im Uhrzeigersinn.

- `<size>`
  - : Gibt die Länge des Liniensegments an, das der Abstand zwischen {{cssxref("offset-distance")}} `0%` und `100%` relativ zur umgebenden Box ist. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben ist). Er akzeptiert eine der folgenden Schlüsselwortwerte:

    `closest-side`: Abstand zwischen dem Startpunkt des Strahls und der nächsten Seite des [umgebenden Blocks](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Wenn der Startpunkt des Strahls auf einer Kante des umgebenden Blocks liegt, ist die Länge des Liniensegments null. Wenn der Startpunkt des Strahls außerhalb des umgebenden Blocks liegt, wird die Kante des umgebenden Blocks als unendlich verlängert betrachtet. Dies ist der Standardwert.

    `closest-corner`: Abstand zwischen dem Startpunkt des Strahls und der nächsten Ecke im umgebenden Block des Elements. Wenn der Startpunkt des Strahls auf einer Ecke des umgebenden Blocks liegt, ist die Länge des Liniensegments null.

    `farthest-side`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des umgebenden Blocks des Elements. Wenn der Startpunkt des Strahls außerhalb des umgebenden Blocks liegt, wird die Kante des umgebenden Blocks als unendlich verlängert betrachtet.

    `farthest-corner`: Abstand zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im umgebenden Block des Elements.

    `sides`: Abstand zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Begrenzung des umgebenden Blocks schneidet. Wenn der Startpunkt auf oder außerhalb der Begrenzung des umgebenden Blocks liegt, ist die Länge des Liniensegments null.

- `contain`
  - : Verkürzt die Länge des Liniensegments, sodass das Element innerhalb des umgebenden Blocks bleibt, selbst bei `offset-distance: 100%`. Insbesondere wird die Länge des Segments um die Hälfte der Breite oder Hälfte der Höhe der Border-Box des Elements reduziert, je nachdem, welcher Wert größer ist, und niemals unter null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element in seinem umgebenden Block platziert wird. Dies ist ein optionaler Parameter. Wenn er enthalten ist, muss der `<position>`-Wert mit dem Schlüsselwort `at` vorausgehen. Wenn weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird für die Ausgangsposition des Strahls der Wert `offset-position: normal` verwendet, der das Element im Zentrum (oder `50% 50%`) des umgebenden Blocks platziert.

## Beschreibung

Die `ray()` Funktion positioniert ein Element entlang eines Pfades, indem sie den Standort in einem zweidimensionalen Raum durch einen Winkel und einen Abstand von einem Referenzpunkt (Polarkoordinaten) angibt. Diese Funktion macht die `ray()` Funktion nützlich, um 2D räumliche Übergänge zu erstellen. Im Vergleich dazu unterscheidet sich dieser Ansatz von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprung (Rechteckkoordinaten) anzugeben, die von der {{cssxref("translate","translate()")}} Funktion verwendet wird, und davon, ein Element entlang eines definierten Pfades durch Animation zu bewegen.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die Anfangsposition als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()` Funktion als `offset-path` Wert auf ein Element angewendet wird, können Sie folgende Aspekte steuern:

- Das Element wird initial positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor) Punkt des Elements an die Ausgangsposition des Elements bewegt wird. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}} Wert bestimmt. Wenn `offset-position` explizit als `normal` spezifiziert wird (oder weggelassen und "normal" darf standardmäßig verwendet werden), wird das Element im `center` (oder `50% 50%`) seines umgebenden Blocks positioniert. Angabe von `offset-position: auto` legt die Startposition an die obere linke Ecke (oder `0 0`) der Elementposition.
- Das Element wird anfangs so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — seine Laufrichtung des Textes — mit dem Winkel übereinstimmt, der durch `ray()` spezifiziert wird. Zum Beispiel, bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, wird die Inline-Achse des Elements vertikal gedreht, um mit dem Winkel des Strahls übereinzustimmen. Das Element behält diese Drehung über seinen gesamten Pfad bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}} Eigenschaft, die es Ihnen ermöglicht, einen anderen Drehwinkel oder eine andere Richtung für das Element zu spezifizieren, wodurch Sie mehr Kontrolle über das Aussehen des Elements bei der Verfolgung des Pfads erhalten. Wenn Sie zum Beispiel `offset-rotate: 0deg` einstellen, wird jede Drehung entfernt, die von `ray()` angewendet wurde, und die Inline-Achse des Elements kehrt zur Fließrichtung des Textes zurück.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Definieren des Winkels und der Startposition für einen Strahl

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

Ähnlich wie {{cssxref("transform-origin")}} liegt der Standardankerpunkt im Zentrum eines Elements. Dieser Ankerpunkt kann mit der [`offset-anchor`](/de/docs/Web/CSS/offset-anchor) Eigenschaft modifiziert werden.

In diesem Beispiel werden verschiedene `offset-path: ray()` Werte auf die Boxen mit den Nummern `1` bis `5` angewendet. Der "umgebende Block" jeder Box ist durch eine gestrichelte Grenze dargestellt. Eine verblasste Box in der oberen linken Ecke zeigt die Standardposition jeder Box ohne angewendete `offset-position` oder `offset-path`, um einen direkten Vergleich zu ermöglichen. Die Oberseite jeder Box ist mit einer `soliden` Grenze hervorgehoben, um Unterschiede in den Strahl-Startpunkten und Orientierungen zu veranschaulichen. Nach der Positionierung am Startpunkt des Strahls richtet sich eine Box in die Richtung des angegebenen Strahlwinkels aus. Wenn {{cssxref("offset-position")}} nicht angegeben ist, ist die Standard-Offset-Startposition des Strahls das Zentrum (oder `50% 50%`) des umgebenden Blocks der Box.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird zunächst so positioniert, dass sein Ankerpunkt (sein Zentrum) an der Standard-Offset-Startposition (`50% 50%` des umgebenden Blocks) liegt. `box1` wird auch gedreht, um es in Richtung des `0deg` Winkels des Strahls auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Veränderung in der Position und Drehung der Box beobachten, indem Sie sie mit der verblassten `box0` auf der linken Seite vergleichen. Die Box ist gedreht, um mit dem `0deg` Winkel entlang der y-Achse nach oben zu zeigen. Die Boxrotation ist aus der Orientierung der Nummer innerhalb der Box ersichtlich.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Beginnend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path` Werte. In `box3` wird ein [`offset-rotate`](/de/docs/Web/CSS/offset-rotate) von `0deg` auch auf das Element angewendet. Als Ergebnis bleibt das Element über den gesamten Weg des Strahls dieser spezifischen Drehung ausgesetzt, und das Element wird sich nicht in die Richtung des Pfades drehen. Beachten Sie in `box3`, dass der Strahlweg bei `150deg` liegt, aber die Orientierung der Box sich nicht entlang des Pfades ändert aufgrund von `offset-rotate`. Beachten Sie auch, dass die `offset-path` Eigenschaft von `box3` keine Start `<position>` spezifiziert, sodass die Startposition des Strahls aus der `offset-position` des Elements abgeleitet wird, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des umgebenden Blocks gesetzt, und in der Folge fallen der Ankerpunkt des Elements und die Offset-Startposition zusammen. Der Strahlwinkel von `0deg` wird an diesem Startpunkt auf das Element angewendet.

- In `box5` spezifiziert die `offset-path` Eigenschaft den `at <position>` Wert, der die Box an der `bottom` und `right` Kante des umgebenden Blocks des Elements platziert und `60deg` auf den Strahlwinkel angewendet wird.

### Animieren eines Elements entlang des Strahls

In diesem Beispiel wird die erste Form als Referenz für ihre Position und Orientierung gezeigt. Ein Strahlenbewegungspfad wird auf die anderen Formen angewendet.

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

In den ersten beiden Beispielen, in denen `offset-path` angewendet wird, beachten Sie die Orientierung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standardwert {{cssxref("offset-position")}} `normal`, daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen die Auswirkungen der Eck-`<size>`-Werte: `closest-corner` und `farthest-corner`. Der Wert `closest-corner` erzeugt einen sehr kurzen offset-path, da die Form bereits an der Ecke ist (`offset-position: auto`). Der Wert `farthest-corner` erzeugt den längsten offset-path, beginnend von der oberen linken Ecke des umgebenden Blocks zur unteren rechten Ecke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/offset-rotate)
