---
title: ray()
slug: Web/CSS/ray
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Die **`ray()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) definiert das [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path) Liniensegment, dem ein animiertes Element folgen kann. Das Liniensegment wird als "Strahl" bezeichnet. Der Strahl beginnt von einer {{cssxref("offset-position")}} und erstreckt sich in die Richtung des angegebenen Winkels. Die Länge eines Strahls kann eingeschränkt werden, indem eine Größe angegeben und das `contain`-Schlüsselwort verwendet wird.

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
  - : Gibt die Richtung an, in die sich das Liniensegment von der Offset-Ausgangsposition erstreckt. Der Winkel `0deg` liegt auf der y-Achse nach oben zeigend, und positive Winkel nehmen im Uhrzeigersinn zu.

- `<size>`
  - : Gibt die Länge des Liniensegments an, welche die Entfernung zwischen {{cssxref("offset-distance")}} `0%` und `100%` ist, relativ zur umgebenden Box. Dies ist ein optionaler Parameter (`closest-side` wird verwendet, wenn keine `<size>` angegeben wird). Er akzeptiert einen der folgenden Schlüsselwortwerte:

    `closest-side`: Entfernung zwischen dem Startpunkt des Strahls und der nächsten Seite des [Containing Block](/de/docs/Web/CSS/CSS_display/Containing_block) des Elements. Wenn der Startpunkt des Strahls auf einer Kante des Containing Blocks liegt, ist die Länge des Liniensegments null. Wenn der Startpunkt des Strahls außerhalb des Containing Blocks liegt, wird die Kante des Containing Blocks als ins Unendliche reichend betrachtet. Dies ist der Standardwert.

    `closest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der nächsten Ecke im Containing Block des Elements. Wenn der Startpunkt des Strahls auf einer Ecke des Containing Blocks liegt, ist die Länge des Liniensegments null.

    `farthest-side`: Entfernung zwischen dem Startpunkt des Strahls und der am weitesten entfernten Seite des Containing Blocks des Elements. Wenn der Startpunkt des Strahls außerhalb des Containing Blocks liegt, wird die Kante des Containing Blocks als ins Unendliche reichend betrachtet.

    `farthest-corner`: Entfernung zwischen dem Startpunkt des Strahls und der am weitesten entfernten Ecke im Containing Block des Elements.

    `sides`: Entfernung zwischen dem Startpunkt des Strahls und dem Punkt, an dem das Liniensegment die Begrenzung des Containing Blocks schneidet. Wenn sich der Startpunkt auf oder außerhalb der Begrenzung des Containing Blocks befindet, ist die Länge des Liniensegments null.

- `contain`
  - : Reduziert die Länge des Liniensegments, damit das Element auch bei `offset-distance: 100%` im Containing Block bleibt. Konkret wird die Länge des Segments um die Hälfte der Breite oder um die Hälfte der Höhe der Umrandungsbox des Elements reduziert, je nachdem, welcher Wert größer ist, und niemals weniger als null. Dies ist ein optionaler Parameter.

- `at <position>`
  - : Gibt den Punkt an, an dem der Strahl beginnt und wo das Element in seinem Containing Block platziert ist. Dies ist ein optionaler Parameter. Wenn angegeben, muss der `<position>`-Wert durch das `at`-Schlüsselwort eingeleitet werden. Wenn weggelassen, wird der `offset-position`-Wert des Elements verwendet. Wenn weggelassen und das Element keinen `offset-position`-Wert hat, wird der Wert für die Startposition des Strahls auf `offset-position: normal` gesetzt, was das Element im Zentrum (oder `50% 50%`) des Containing Blocks platziert.

## Beschreibung

Die `ray()`-Funktion positioniert ein Element entlang eines Pfades, indem sie dessen Position in einem zweidimensionalen Raum durch einen Winkel und eine Entfernung von einem Referenzpunkt (Polarkoordinaten) angibt. Dieses Feature macht die `ray()`-Funktion nützlich für das Erstellen von 2D-Raumübergängen. Zum Vergleich unterscheidet sich dieser Ansatz von der Methode, einen Punkt durch seine horizontalen und vertikalen Abstände von einem festen Ursprungspunkt zu spezifizieren (rechteckige Koordinaten), wie sie durch die {{cssxref("translate","translate()")}}-Funktion verwendet wird, und davon, ein Element entlang eines definierten Pfades durch Animation zu bewegen.

Da `ray()` im 2D-Raum arbeitet, ist es wichtig, sowohl die Anfangsposition als auch die Orientierung des Elements zu berücksichtigen. Wenn die `ray()`-Funktion als `offset-path`-Wert auf ein Element angewendet wird, können Sie diese Aspekte wie folgt steuern:

- Das Element wird anfänglich positioniert, indem der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Punkt des Elements zur Offset-Ausgangsposition des Elements verschoben wird. Standardmäßig wird die Startposition des Strahls durch den {{cssxref("offset-position")}}-Wert bestimmt. Wenn `offset-position` explizit als `normal` angegeben wird (oder weggelassen und auf `normal` standardmäßig), wird das Element im `center` (oder `50% 50%`) seines Containing Blocks positioniert. Die Angabe von `offset-position: auto` setzt die Startposition auf die obere linke Ecke (oder `0 0`) der Position des Elements.

- Das Element wird anfänglich so gedreht, dass seine [Inline-Achse](/de/docs/Web/CSS/CSS_grid_layout/Box_alignment_in_grid_layout#the_two_axes_of_a_grid_layout) — seine Textflussrichtung — mit dem durch `ray()` angegebenen Winkel übereinstimmt. Zum Beispiel wird bei einem `ray()`-Winkel von `0deg`, der auf der y-Achse nach oben zeigt, die Inline-Achse des Elements vertikal gedreht, um dem Winkel des Strahls zu entsprechen. Das Element behält diese Rotation entlang seines Pfades bei. Um dieses Verhalten anzupassen, verwenden Sie die {{cssxref("offset-rotate")}}-Eigenschaft, die es Ihnen ermöglicht, einen anderen Rotationswinkel oder eine andere Richtung für das Element anzugeben, wodurch Sie genauere Kontrolle über sein Erscheinungsbild erhalten, während es dem Pfad folgt. Zum Beispiel wird durch die Einstellung `offset-rotate: 0deg` jede von `ray()` angewandte Rotation entfernt, wodurch die Inline-Achse des Elements wieder mit der Textflussrichtung ausgerichtet wird.

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

Ähnlich wie bei {{cssxref("transform-origin")}} befindet sich der Standardankerpunkt im Zentrum eines Elements. Dieser Ankerpunkt kann mithilfe der [`offset-anchor`](/de/docs/Web/CSS/Reference/Properties/offset-anchor)-Eigenschaft modifiziert werden.

In diesem Beispiel werden auf die Boxen, die mit den Nummern `1` bis `5` gekennzeichnet sind, verschiedene `offset-path: ray()`-Werte angewendet. Der "Containing Block" jeder Box ist mit einer gestrichelten Linie dargestellt. Eine verblasste Box in der oberen linken Ecke zeigt die Standardposition jeder Box ohne angewendete `offset-position` oder `offset-path`, was einen direkten Vergleich ermöglicht. Die Oberseite jeder Box ist mit einem `solide` Umrandung hervorgehoben, um Variationen in den Startpunkten und Ausrichtungen des Strahls zu veranschaulichen. Nachdem die Position auf den Startpunkt des Strahls festgelegt wurde, richtet sich eine Box nach der Richtung des angegebenen Strahlwinkels aus. Wenn {{cssxref("offset-position")}} nicht spezifiziert ist, ist die Standard-Ausgangsposition der Strahls das Zentrum (oder `50% 50%`) des Containing Blocks der Box.

#### Ergebnis

{{EmbedLiveSample('Giving an angle to the ray', '100%', 1100)}}

- `box1` wird initial so positioniert, dass sein Ankerpunkt (sein Zentrum) an der Standard-Ausgangsposition (`50% 50%` des Containing Blocks) liegt. `box1` wird auch gedreht, um sich zum `0deg`-Winkel des Strahls auszurichten. Dies wird nun der Startpunkt des Pfades sein. Sie können die Veränderung in der Position und Rotation der Box erkennen, indem Sie sie mit der verblassten `box0` links vergleichen. Die Box ist gedreht, um mit dem `0deg`-Winkel entlang der y-Achse, die nach oben zeigt, übereinzustimmen. Die Boxrotation ist am Orientierungswechsel der Zahl in der Box erkennbar.

- In `box2` wird ein größerer positiver Winkel von `150deg` auf den Strahl angewendet, um zu zeigen, wie der Strahlwinkel funktioniert. Ausgehend von der oberen linken Ecke wird die Box im Uhrzeigersinn gedreht, um den angegebenen Winkel von `150deg` zu erreichen.

- `box2` und `box3` haben die gleichen `offset-path`-Werte. In `box3` wird auch ein [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate) von `0deg` auf das Element angewendet. Damit bleibt das Element in diesem spezifischen Winkel entlang des Strahlpfades rotiert, und das Element wird sich nicht in Richtung des Pfades drehen. Beachten Sie in `box3`, dass der Strahlenpfad bei `150deg` liegt, aber die Boxorientierung sich nicht entlang des Pfades ändert aufgrund von `offset-rotate`. Auch beachten Sie, dass die `offset-path`-Eigenschaft von `box3` keine Start-`<position>`-Angabe enthält, sodass sich die Ausgangsposition des Strahls aus der `offset-position` des Elements ergibt, die in diesem Fall `top 20% left 40%` ist.

- Die `offset-position` von `box4` ist auf die obere linke Ecke (`0 0`) des Containing Blocks gesetzt, und dadurch fallen der Ankerpunkt des Elements und die Ausgangsposition des Strahls zusammen. Der Strahlwinkel von `0deg` wird an diesem Startpunkt auf das Element angewendet.

- In `box5` spezifiziert die `offset-path`-Eigenschaft den `at <position>`-Wert, der die Box am unteren und rechten Rand des Containing Blocks des Elements platziert, und `60deg` wird auf den Strahlwinkel angewendet.

### Animieren eines Elements entlang des Strahls

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

In den ersten beiden Beispielen, bei denen `offset-path` angewendet wird, achten Sie auf die Ausrichtung der Form ohne {{cssxref("offset-rotate")}} und mit `offset-rotate`. Beide Beispiele verwenden den Standard-{{cssxref("offset-position")}}-Wert `normal`, und daher beginnt die Pfadbewegung bei `50% 50%`. Die letzten beiden `offset-path`-Beispiele zeigen den Einfluss der Größeneckwerte: `closest-corner` und `farthest-corner`. Der `closest-corner`-Wert erschafft einen sehr kurzen Offset-Pfad, da die Form bereits an der Ecke ist (`offset-position: auto`). Der `farthest-corner`-Wert erschafft den längsten Offset-Pfad, der von der oberen linken Ecke des Containing Blocks bis zur unteren rechten Ecke führt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`offset-distance`](/de/docs/Web/CSS/Reference/Properties/offset-distance)
- [`offset-path`](/de/docs/Web/CSS/Reference/Properties/offset-path)
- [`offset-rotate`](/de/docs/Web/CSS/Reference/Properties/offset-rotate)
