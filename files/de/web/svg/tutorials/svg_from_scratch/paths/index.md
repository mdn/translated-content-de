---
title: Wege
slug: Web/SVG/Tutorials/SVG_from_scratch/Paths
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}

Das {{SVGElement('path')}}-Element ist das leistungsfähigste Element in der SVG-Bibliothek der [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Wege erzeugen komplexe Formen, indem sie mehrere gerade Linien oder gekrümmte Linien kombinieren. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes#polyline)-Elemente erstellt werden. Während `<polyline>`- und `<path>`-Elemente ähnliche Formen erzeugen können, erfordern `<polyline>`-Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren sich nicht gut auf größere Größen.

Ein gutes Verständnis von Wegen ist wichtig beim Zeichnen von SVGs. Obwohl es nicht empfohlen wird, komplexe Wege mit einem XML-Editor oder Texteditor zu erstellen, erlaubt das Verständnis ihrer Funktionsweise, Darstellungsprobleme in SVGs zu identifizieren und zu beheben.

Die Form eines `<path>`-Elements wird durch einen Parameter definiert: {{SVGAttr("d")}}. (Siehe mehr unter [Grundformen](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes).) Das `d`-Attribut enthält eine Reihe von Befehlen und Parametern, die von diesen Befehlen verwendet werden.

Jeder der Befehle wird durch einen spezifischen Buchstaben instanziiert (zum Beispiel, eine Klasse zu erstellen, zu benennen und zu lokalisieren). Nehmen wir zum Beispiel an, wir bewegen uns zu den x- und y-Koordinaten (`10`, `10`). Der "Move to"-Befehl wird mit dem Buchstaben `M` aufgerufen. Wenn der Parser auf diesen Buchstaben trifft, weiß er, dass er zu einem Punkt gehen muss. Um also zu (`10`, `10`) zu gelangen, lautet der Befehl `M 10 10`. Danach beginnt der Parser mit dem Lesen des nächsten Befehls.

Alle Befehle gibt es auch in zwei Varianten. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z. B. _bewege 10px nach oben und 7px nach links vom letzten Punkt_).

Koordinaten im `d`-Parameter sind **immer einheitenlos** und daher im Benutzerskoordinatensystem. Später werden wir lernen, wie Wege transformiert werden können, um anderen Bedürfnissen gerecht zu werden.

## Linienbefehle

Es gibt fünf Linienbefehle für {{SVGElement("path")}}-Knoten. Der erste Befehl ist der "Move To" oder `M`, der oben beschrieben wurde. Er nimmt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`), zu der er sich bewegt. Wenn sich der Cursor bereits irgendwo auf der Seite befand, wird keine Linie gezogen, um die beiden Positionen zu verbinden. Der "Move To"-Befehl erscheint am Anfang von Wegen, um zu spezifizieren, wo die Zeichnung beginnen soll. Zum Beispiel:

```plain
M x y
(or)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass er nicht erscheinen würde, wenn ein Pfad normal gezeichnet würde. Zum Beispiel:

![Ein roter Punkt wird auf einem weißen Quadrat 10 Pixel nach unten und 10 Pixel nach rechts gezeichnet. Dieser Punkt würde normalerweise nicht sichtbar sein, wird jedoch als Beispiel verwendet, wo der Cursor nach dem "Move To"-Befehl beginnen wird.](blank_path_area.png)

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>

</svg>
```

Es gibt drei Befehle, die Linien zeichnen. Der allgemeinste ist der "Line To"-Befehl, der mit `L` aufgerufen wird. `L` nimmt zwei Parameter—x- und y-Koordinaten—und zeichnet eine Linie von der aktuellen Position zu einer neuen Position.

```plain
L x y
(or)
l dx dy
```

Es gibt zwei abgekürzte Formen zum Zeichnen von horizontalen und vertikalen Linien. `H` zeichnet eine horizontale Linie, und `V` zeichnet eine vertikale Linie. Beide Befehle nehmen nur einen Parameter, da sie sich nur in eine Richtung bewegen.

```plain
H x
(or)
h dx

V y
(or)
v dy
```

Ein einfacher Einstieg ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (die gleiche Art, die einfacher mit einem {{SVGElement("rect")}}-Element erstellt werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

![Ein Quadrat mit schwarzer Füllung wird innerhalb eines weißen Quadrats gezeichnet. Die Kanten des schwarzen Quadrats beginnen bei der Position (10,10), bewegen sich horizontal zur Position (90,10), dann vertikal zur Position (90,90), bewegen sich dann horizontal zurück zur Position (10,90) und schließlich zurück zur Ausgangsposition (10, 10).](path_line_commands.png)

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

  <path d="M 10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>

</svg>
```

Wir können die obige Pfaderklärung ein wenig verkürzen, indem wir den "Close Path"-Befehl verwenden, der mit `Z` aufgerufen wird. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten Punkt des Pfades. Er wird oft am Ende eines Pfadknotens platziert, aber nicht immer. Es gibt keinen Unterschied zwischen dem Groß- und dem Kleinbuchstabenbefehl.

```plain
Z
(or)
z
```

Unser obiger Pfad könnte also verkürzt werden zu:

```xml
 <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

Die relativen Formen dieser Befehle können ebenfalls verwendet werden, um das gleiche Bild zu zeichnen. Relative Befehle werden durch Kleinschreibung aufgerufen und bewegen den Cursor relativ zu seiner letzten Position anstatt zu einer genauen Koordinate. Zum Beispiel, da unser Rechteck 80×80 ist, könnte das `<path>`-Element wie folgt geschrieben werden:

```xml
 <path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

Der Pfad bewegt sich zum Punkt (`10`, `10`) und dann horizontal 80 Punkte nach rechts, dann 80 Punkte nach unten, dann 80 Punkte nach links und schließlich zurück zum Anfang.

In diesen Beispielen wäre es wahrscheinlich intuitiver, die {{SVGElement("polygon")}}- oder {{SVGElement("polyline")}}-Elemente zu verwenden. Wegen werden jedoch so häufig beim Zeichnen von SVGs verwendet, dass Entwickler möglicherweise bequemer mit ihnen umgehen. Es gibt keinen echten Leistungsvorteil oder -nachteil bei der Verwendung des einen oder anderen.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, die verwendet werden können, um glatte Kurven zu erzeugen. Zwei dieser Kurven sind {{Glossary("Bezier_curve", "Bézier-Kurven")}} und die dritte ist ein "Bogen" oder Teil eines Kreises. Möglicherweise haben Sie bereits praktische Erfahrungen mit Bézier-Kurven gemacht, indem Sie Pfadwerkzeuge in Inkscape, Illustrator oder Photoshop verwendet haben. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber in `<path>`-Elementen sind nur zwei verfügbar: eine kubische, die mit `C` aufgerufen wird, und eine quadratische, die mit `Q` aufgerufen wird.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Bézier-Kurven erfordern zwei Kontrollpunkte für jeden Punkt. Daher müssen drei Koordinatensätze spezifiziert werden, um eine kubische Bézier-Kurve zu erstellen.

```plain
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

Der letzte Satz von Koordinaten hier (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Anfang der Kurve und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Neigung der Linie, die an jedem Punkt beginnt. Die Bézier-Funktion erzeugt dann eine glatte Kurve, die sich von der am Anfang der Linie festgelegten Neigung zur Neigung am anderen Ende überträgt.

![Kubische Bézier-Kurven mit Raster](cubic_bezier_curves_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

  <path d="M 10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
  <path d="M 70 10 C 70 20, 110 20, 110 10" stroke="black" fill="transparent"/>
  <path d="M 130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
  <path d="M 10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
  <path d="M 70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
  <path d="M 130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
  <path d="M 10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
  <path d="M 70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
  <path d="M 130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>

</svg>
```

Das obige Beispiel erzeugt neun kubische Bézier-Kurven. Während sich die Kurven nach rechts bewegen, werden die Kontrollpunkte horizontal auseinandergezogen. Während sich die Kurven nach unten bewegen, werden sie weiter von den Endpunkten getrennt. Hier ist zu beachten, dass die Kurve in Richtung des ersten Kontrollpunkts beginnt und sich dann so biegt, dass sie in Richtung des zweiten Kontrollpunkts ankommt.

Mehrere Bézier-Kurven können aneinandergereiht werden, um erweiterte, glatte Formen zu erzeugen. Häufig wird der Kontrollpunkt auf einer Seite eines Punktes eine Spiegelung des Kontrollpunkts auf der anderen Seite sein, um die Neigung konstant zu halten. In diesem Fall kann eine Abkürzung der kubischen Bézier-Kurve verwendet werden, die durch den Befehl `S` (oder `s`) bezeichnet wird.

```plain
S x2 y2, x y
(or)
s dx2 dy2, dx dy
```

`S` erzeugt den gleichen Kurventyp wie zuvor—aber wenn es einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird der erste Kontrollpunkt als Spiegelung des zuvor verwendeten angenommen. Wenn der `S`-Befehl keinem weiteren `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht dasselbe wie das, was der `Q`-Befehl mit denselben Parametern erzeugt hätte, ist aber ähnlich.

Ein Beispiel für diese Syntax wird unten gezeigt, und in der Abbildung links sind die spezifizierten Kontrollpunkte in Rot und der abgeleitete Kontrollpunkt in Blau dargestellt.

![Eine glatte S-förmige Kurve wird aus zwei Bézier-Kurven gezeichnet. Die zweite Kurve behält die gleiche Neigung der Kontrollpunkte wie die erste Kurve bei, die auf die andere Seite gespiegelt wird.](shortcut_cubic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

Die andere Art der Bézier-Kurve, die quadratische Kurve, die mit `Q` aufgerufen wird, ist eigentlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, der die Neigung der Kurve sowohl am Start- als auch am Endpunkt bestimmt. Sie nimmt zwei Parameter: den Kontrollpunkt und den Endpunkt der Kurve.

> [!NOTE]
> Die Delta-Werte der Koordinaten für `q` beziehen sich beide auf den vorherigen Punkt (das heißt, `dx` und `dy` sind nicht relativ zu `dx1` und `dy1`).

```plain
Q x1 y1, x y
(or)
q dx1 dy1, dx dy
```

![Quadratische Bézier mit Raster](quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

Ebenso wie bei der kubischen Bézier-Kurve gibt es eine Abkürzung, um mehrere quadratische Béziers aneinanderzureihen, die mit `T` aufgerufen wird.

```plain
T x y
(or)
t dx dy
```

Diese Abkürzung betrachtet den vorherigen verwendeten Kontrollpunkt und leitet einen neuen daraus ab. Dies bedeutet, dass nach dem ersten Kontrollpunkt ziemlich komplexe Formen erstellt werden können, indem nur Endpunkte spezifiziert werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q`- oder ein `T`-Befehl war. Wenn nicht, wird angenommen, dass der Kontrollpunkt mit dem vorherigen Punkt identisch ist, und es werden nur Linien gezeichnet.

![Zwei quadratische Kurven bilden eine glatte S-förmige Kurve. Die Kontrollpunkte der zweiten Kurve sind über die horizontale Achse gespiegelt.](shortcut_quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Beide Kurven erzeugen ähnliche Ergebnisse, obwohl die kubische Kurve größere Freiheit in der genauen Form der Kurve erlaubt. Die Entscheidung, welche Kurve zu verwenden ist, ist situationsabhängig und hängt vom Grad der Symmetrie der Linie ab.

### Bögen

Eine andere Art von Kurvenlinie, die mit SVG erstellt werden kann, ist der Bogen, der mit dem `A`-Befehl aufgerufen wird. Bögen sind Abschnitte von Kreisen oder Ellipsen.

Für einen gegebenen x-Radius und y-Radius gibt es zwei Ellipsen, die zwei beliebige Punkte verbinden können (solange sie sich innerhalb des Radius des Kreises befinden). Entlang eines dieser Kreise gibt es zwei mögliche Wege, die genommen werden können, um die Punkte zu verbinden - es gibt also in jeder Situation vier mögliche Bögen.

Aus diesem Grund erfordern Bögen ziemlich viele Parameter:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Am Anfang nimmt das Bogenelement zwei Parameter für den x-Radius und den y-Radius. Wenn nötig, siehe {{SVGElement("ellipse")}}s und wie sie sich verhalten. Die letzten zwei Parameter bezeichnen die x- und y-Koordinaten, um den Strich zu beenden. Zusammen definieren diese vier Werte die Grundstruktur des Bogens.

Der dritte Parameter beschreibt die Rotation des Bogens. Dies lässt sich am besten mit einem Beispiel erklären:

![SVGArcs_XAxisRotation_mit_Raster](svgarcs_xaxisrotation_with_grid.png)

```xml
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 315
           L 110 215
           A 30 50 0 0 1 162.55 162.45
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
</svg>
```

Das Beispiel zeigt ein `<path>`-Element, das diagonal über die Seite geht. In dessen Mitte wurden zwei elliptische Bögen ausgeschnitten (x-Radius = `30`, y-Radius = `50`). Beim ersten wurde die x-Axis-Rotation auf `0` belassen, sodass die Ellipse, um die sich der Bogen bewegt (in Grau dargestellt), senkrecht ausgerichtet ist. Beim zweiten Bogen jedoch wurde die x-Axis-Rotation auf `-45` Grad eingestellt. Dadurch wird die Ellipse so gedreht, dass sie mit ihrer Nebenachse entlang der Pfadrichtung ausgerichtet ist, wie durch die zweite Ellipse im Beispielbild gezeigt.

Für die ungedrehte Ellipse im obigen Bild gibt es nur zwei verschiedene Bögen und nicht vier zur Auswahl, weil die Linie, die vom Anfangs- bis zum Endpunkt des Bogens gezogen wird, durch das Zentrum der Ellipse geht. In einem leicht modifizierten Beispiel können die beiden Ellipsen gesehen werden, die die vier verschiedenen Bögen bilden:

![Demonstration der 4 Bögen auf dem Ellipsenbeispiel](svgarcs_xaxisrotation_with_grid_ellipses.png)

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
  <path d="M 10 315
           L 110 215
           A 36 60 0 0 1 150.71 170.29
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
  <circle cx="150.71" cy="170.29" r="2" fill="red"/>
  <circle cx="110" cy="215" r="2" fill="red"/>
  <ellipse cx="144.931" cy="229.512" rx="36" ry="60" fill="transparent" stroke="blue"/>
  <ellipse cx="115.779" cy="155.778" rx="36" ry="60" fill="transparent" stroke="blue"/>
</svg>
```

Beachten Sie, dass jede der blauen Ellipsen aus zwei Bögen besteht, abhängig davon, ob im Uhrzeigersinn oder gegen den Uhrzeigersinn gereist wird. Jede Ellipse hat einen kurzen Bogen und einen langen Bogen. Die zwei Ellipsen sind einfach Spiegelbilder voneinander. Sie sind entlang der Linie, die die Start-End-Punkte bildet, gespiegelt.

Wenn die Start-End-Punkte weiter entfernt sind, als der `x`- und `y`-Radius der Ellipse erreichen kann, werden die Radien der Ellipse minimal erweitert, damit sie die Start-End-Punkte erreichen können. Der interaktive Codepen am Ende dieser Seite demonstriert dies gut. Um zu bestimmen, ob die Radien einer Ellipse groß genug sind, um erweitert zu werden, müsste ein Gleichungssystem gelöst werden, wie [dieses auf Wolfram Alpha](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>). Diese Berechnung bezieht sich auf die nicht-rotierte Ellipse mit Start-End (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipse(n). Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>) sein, wenn die Radien der Ellipse zu klein sind. Diese zweite Berechnung bezieht sich auf die nicht-rotierte Ellipse mit Start-End (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine kleine imaginäre Komponente, weil die Ellipse nur knapp erweitert wurde.

Die vier oben erwähnten unterschiedlichen Wege werden durch die nächsten beiden Parameter-Flags bestimmt. Wie bereits erwähnt, gibt es noch zwei mögliche Ellipsen, um die der Pfad verlaufen kann, und zwei unterschiedliche mögliche Wege auf beiden Ellipsen, was vier mögliche Wege ergibt. Der erste Parameter ist der `large-arc-flag`. Er bestimmt, ob der Bogen größer oder kleiner als 180 Grad sein soll; letztlich bestimmt dieses Flag, in welche Richtung der Bogen um einen bestimmten Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Er bestimmt, ob der Bogen bei positiven Winkeln oder negativen Winkeln beginnen soll, was im Wesentlichen festlegt, um welchen der beiden Kreise sich bewegt wird. Das folgende Beispiel zeigt alle vier möglichen Kombinationen, zusammen mit den beiden Kreisen für jeden Fall.

![Vier Beispiele werden für jede Kombination aus large-arc-flag und sweep-flag für zwei überlappende Kreise gezeigt, einer im oberen rechten, der andere im unteren linken Bereich. Für sweep-flag = 0, wenn large-arc-flag = 0, wird der innere Bogen des oberen rechten Kreises gezeichnet, und wenn large-arc-flag = 1, wird der äußere Bogen des unteren linken Kreises gezeichnet. Für sweep-flag = 1, wenn large-arc-flag = 0, wird der innere Bogen des unteren linken Kreises gezeichnet, und wenn large-arc-flag = 1, wird der äußere Bogen des oberen rechten Kreises gezeichnet.](svgarcs_flags.png)

```xml
<svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
  <path d="M 80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"/>
  <path d="M 230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/>
  <path d="M 80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/>
  <path d="M 230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/>
</svg>
```

Bögen sind ein einfacher Weg, um Teile von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Beispielsweise würde ein Kuchendiagramm einen anderen Bogen für jedes Stück benötigen.

Wenn Sie von {{HTMLElement("canvas")}} zu SVG wechseln, können Bögen das Schwierigste sein, was man lernen muss, aber sie sind auch viel leistungsstärker. Ganze Kreise und Ellipsen sind die einzigen Formen, bei denen SVG-Bögen Schwierigkeiten haben. Da die Start- und Endpunkte für jeden Pfad, der um einen Kreis geht, derselbe Punkt sind, gibt es eine unendliche Anzahl von Kreisen, die gewählt werden könnten, und der tatsächliche Pfad ist undefiniert. Es ist möglich, sie zu approximieren, indem die Start- und Endpunkte des Pfades leicht verdreht werden und dann mit einem anderen Pfadsegment verbunden werden. Beispielsweise ist es möglich, einen Kreis mit einem Bogen für jeden Halbkreis zu erstellen. Zu diesem Zeitpunkt ist es oft einfacher, einen echten {{SVGElement("circle")}} oder {{SVGElement("ellipse")}}-Knoten zu verwenden. Dieses interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen: <https://codepen.io/lingtalfi/pen/yaLWJG> (getestet nur in Chrome und Firefox, funktioniert möglicherweise nicht in Ihrem Browser)

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes", "Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes") }}
