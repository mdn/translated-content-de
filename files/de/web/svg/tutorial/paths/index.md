---
title: Pfade
slug: Web/SVG/Tutorial/Paths
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}

Das {{SVGElement('path')}}-Element ist das mächtigste Element in der SVG-Bibliothek der [Grundformen](/de/docs/Web/SVG/Tutorial/Basic_Shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Pfade erzeugen komplexe Formen durch die Kombination mehrerer gerader oder gekrümmter Linien. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorial/Basic_Shapes#polyline)-Elemente erstellt werden. Während `<polyline>`- und `<path>`-Elemente ähnlich aussehende Formen erzeugen können, erfordern `<polyline>`-Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren nicht gut auf größere Größen.

Ein gutes Verständnis von Pfaden ist wichtig beim Zeichnen von SVGs. Auch wenn das Erstellen komplexer Pfade mit einem XML-Editor oder Texteditor nicht empfohlen wird, ermöglicht das Verständnis ihrer Funktionsweise, Anzeigeprobleme in SVGs zu identifizieren und zu beheben.

Die Form eines `<path>`-Elements wird durch einen Parameter definiert: {{ SVGAttr("d") }}. (Mehr dazu finden Sie unter [Grundformen](/de/docs/Web/SVG/Tutorial/Basic_Shapes).) Das `d`-Attribut enthält eine Reihe von Befehlen und Parametern, die von diesen Befehlen verwendet werden.

Jeder der Befehle wird durch einen bestimmten Buchstaben instanziiert (z. B. beim Erstellen einer Klasse, benennen und positionieren). Wenn wir beispielsweise zu den Koordinaten (`10`, `10`) wechseln, lautet der "Move to"-Befehl `M`. Wenn der Parser auf diesen Buchstaben stößt, weiß er, dass er sich zu einem Punkt bewegen muss. Um also zu (`10`, `10`) zu gelangen, würde der Befehl `M 10 10` lauten. Danach beginnt der Parser mit dem Lesen des nächsten Befehls.

Alle Befehle sind auch in zwei Varianten verfügbar. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z. B. _bewegen Sie sich 10px nach oben und 7px nach links vom letzten Punkt_).

Koordinaten im `d`-Parameter sind **immer einheitslos** und daher im Benutzerkoordinatensystem. Später werden wir lernen, wie Pfade transformiert werden können, um anderen Anforderungen gerecht zu werden.

## Linienbefehle

Es gibt fünf Linienbefehle für {{SVGElement("path")}}-Knoten. Der erste Befehl ist der "Move To" oder `M`, der oben beschrieben wurde. Er nimmt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`) an, um sich dorthin zu bewegen. Wenn sich der Cursor bereits irgendwo auf der Seite befand, wird keine Linie gezogen, um die beiden Positionen zu verbinden. Der "Move To"-Befehl erscheint am Anfang des Pfades, um anzugeben, wo die Zeichnung beginnen soll. Zum Beispiel:

```plain
M x y
(or)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass dieser nicht angezeigt würde, wenn ein Pfad einfach so normal gezeichnet wurde. Zum Beispiel:

![Ein roter Punkt ist auf einem weißen Quadrat 10 Pixel nach unten und 10 Pixel nach rechts gezeichnet. Dieser Punkt würde normalerweise nicht angezeigt werden, sondern dient als Beispiel dafür, wo der Cursor nach dem "Move To"-Befehl starten wird.](blank_path_area.png)

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

Es gibt zwei abgekürzte Formen zum Zeichnen horizontaler und vertikaler Linien. `H` zeichnet eine horizontale Linie, und `V` zeichnet eine vertikale Linie. Beide Befehle benötigen nur einen Parameter, da sie sich nur in eine Richtung bewegen.

```plain
H x
(or)
h dx

V y
(or)
v dy
```

Ein einfacher Anfangspunkt ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (der gleiche Typ, der einfacher mit einem {{SVGElement("rect")}}-Element erstellt werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

![Ein schwarzes gefülltes Quadrat wird innerhalb eines weißen Quadrats gezeichnet. Die Kanten des schwarzen Quadrats beginnen an Position (10,10), bewegen sich horizontal zur Position (90,10), bewegen sich vertikal zur Position (90,90), bewegen sich horizontal zurück zur Position (10,90) und schließlich wieder zur Ausgangsposition (10, 10).](path_line_commands.png)

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

Wir können die obige Pfaderklärung ein wenig verkürzen, indem wir den "Close Path"-Befehl verwenden, der mit `Z` aufgerufen wird. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten Punkt des Pfades. Er wird oft am Ende eines Pfadknotens platziert, jedoch nicht immer. Es gibt keinen Unterschied zwischen dem Groß- und Kleinschreibbefehl.

```plain
Z
(or)
z
```

Unser Pfad oben könnte also verkürzt werden zu:

```xml
 <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

Die relativen Formen dieser Befehle können auch verwendet werden, um das gleiche Bild zu zeichnen. Relative Befehle werden durch die Verwendung von Kleinbuchstaben aufgerufen, und anstatt den Cursor zu einer genauen Koordinate zu bewegen, bewegen sie ihn relativ zu seiner letzten Position. Da unser Rechteck beispielsweise 80×80 groß ist, könnte das `<path>`-Element auch so geschrieben werden:

```xml
 <path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

Der Pfad wird sich zu Punkt (`10`, `10`) bewegen und dann horizontal 80 Punkte nach rechts, dann 80 Punkte nach unten, dann 80 Punkte nach links und schließlich zurück zum Start.

In diesen Beispielen wäre es wahrscheinlich intuitiver, die {{SVGElement("polygon")}}- oder {{SVGElement("polyline")}}-Elemente zu verwenden. Dennoch werden Pfade so häufig beim Zeichnen von SVG verwendet, dass Entwickler möglicherweise lieber diese statt anderer verwenden. Es gibt keine wirklichen Leistungsnachteile oder Vorteile bei der Verwendung des einen oder anderen.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, die verwendet werden können, um glatte Kurven zu erstellen. Zwei dieser Kurven sind {{Glossary("Bezier_curve", "Bézier-Kurven")}}, und die dritte ist ein "Bogen" oder Teil eines Kreises. Sie haben möglicherweise bereits praktische Erfahrungen mit Bézier-Kurven mit Pfadwerkzeugen in Inkscape, Illustrator oder Photoshop gesammelt. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber nur zwei sind in `<path>`-Elementen verfügbar: eine kubische, genannt mit `C`, und eine quadratische, genannt mit `Q`.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Bézier-Kurven benötigen zwei Kontrollpunkte für jeden Punkt. Um also eine kubische Bézier-Kurve zu erstellen, müssen drei Koordinatensätze angegeben werden.

```plain
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

Der letzte Koordinatensatz hier (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Start der Kurve, und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Steigung der Linie am Startpunkt. Die Bézier-Funktion erstellt dann eine glatte Kurve, die von der am Anfang der Linie festgelegten Neigung zur Neigung am anderen Ende übergeht.

![Kubische Bézier-Kurven mit Gitter](cubic_bezier_curves_with_grid.png)

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

Das obige Beispiel erstellt neun kubische Bézier-Kurven. Während sich die Kurven nach rechts bewegen, werden die Kontrollpunkte horizontal verteilt. Während sich die Kurven nach unten bewegen, werden sie weiter von den Endpunkten getrennt. Wichtig dabei ist, dass die Kurve in Richtung des ersten Kontrollpunkts beginnt und sich dann neigt, sodass sie entlang der Richtung des zweiten Kontrollpunkts eintrifft.

Mehrere Bézier-Kurven können aneinandergereiht werden, um erweiterte, glatte Formen zu erzeugen. Oft wird der Kontrollpunkt auf einer Seite eines Punktes eine Spiegelung des Kontrollpunkts auf der anderen Seite sein, um die Neigung konstant zu halten. In diesem Fall kann eine Abkürzungsversion der kubischen Bézier-Kurve verwendet werden, die durch den Befehl `S` (oder `s`) bezeichnet wird.

```plain
S x2 y2, x y
(or)
s dx2 dy2, dx dy
```

`S` erzeugt die gleiche Art von Kurve wie zuvor—aber wenn sie einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird der erste Kontrollpunkt als Spiegelung des zuvor verwendeten angenommen. Wenn der `S`-Befehl nicht einem anderen `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht dasselbe wie das, was der `Q`-Befehl mit denselben Parametern erzeugt hätte, aber es ist ähnlich.

Ein Beispiel für diese Syntax ist unten gezeigt, und in der Figur links sind die angegebenen Kontrollpunkte in Rot und der erfasste Kontrollpunkt in Blau dargestellt.

![Eine glatte S-förmige Kurve wird aus zwei Bézier-Kurven gezeichnet. Die zweite Kurve hält die gleiche Neigung der Kontrollpunkte wie dieerste Kurve, die auf die andere Seite gespiegelt wird.](shortcut_cubic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

Der andere Typ der Bézier-Kurve, die quadratische Kurve, die mit `Q` aufgerufen wird, ist eigentlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, der die Steigungen der Kurve sowohl am Start- als auch am Endpunkt bestimmt. Sie benötigt zwei Parameter: den Kontrollpunkt und den Endpunkt der Kurve.

> [!NOTE]
> Die Koordinatendeltas für `q` sind beide relativ zum vorherigen Punkt (das heißt, `dx` und `dy` sind nicht relativ zu `dx1` und `dy1`).

```plain
Q x1 y1, x y
(or)
q dx1 dy1, dx dy
```

![Quadratische Bézier mit Gitter](quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

Wie bei der kubischen Bézier-Kurve gibt es eine Abkürzung für das Aneinanderreihen mehrerer quadratischer Béziers, die mit `T` aufgerufen wird.

```plain
T x y
(or)
t dx dy
```

Diese Abkürzung betrachtet den zuvor verwendeten Kontrollpunkt und leitet daraus einen neuen ab. Dies bedeutet, dass nach dem ersten Kontrollpunkt ziemlich komplexe Formen erstellt werden können, indem nur Endpunkte angegeben werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q`- oder ein `T`-Befehl war. Wenn nicht, wird angenommen, dass der Kontrollpunkt derselbe wie der vorherige Punkt ist, und es werden nur Linien gezeichnet.

![Zwei quadratische Kurven bilden eine glatte S-förmige Kurve. Die Kontrollpunkte der zweiten Kurve werden entlang der horizontalen Achse gespiegelt.](shortcut_quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Beide Kurven erzielen ähnliche Ergebnisse, obwohl die kubische mehr Freiheit in der genauen Form der Kurve bietet. Die Entscheidung, welche Kurve zu verwenden ist, ist situationsabhängig und hängt von der Symmetrie der Linie ab.

### Bögen

Der andere Typ der gekrümmten Linie, die mit SVG erstellt werden kann, ist der Bogen, der mit dem `A`-Befehl aufgerufen wird. Bögen sind Teile von Kreisen oder Ellipsen.

Für einen gegebenen x-Radius und y-Radius gibt es zwei Ellipsen, die jeden beliebigen Punkt verbinden können (solange sie sich innerhalb des Radius des Kreises befinden). Entlang einer dieser Kreise gibt es zwei mögliche Wege, die Punkte zu verbinden—sodass in jeder Situation vier mögliche Bögen verfügbar sind.

Aufgrund dessen erfordern Bögen ziemlich viele Parameter:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Am Anfang nimmt das Bogenelement zwei Parameter für den x-Radius und y-Radius ein. Falls nötig, siehe {{SVGElement("ellipse")}}s und wie sie sich verhalten. Die letzten beiden Parameter geben die x- und y-Koordinaten an, um den Strich zu beenden. Zusammen definieren diese vier Werte die Grundstruktur des Bogens.

Der dritte Parameter beschreibt die Rotation des Bogens. Dies wird am besten mit einem Beispiel erklärt:

![SVGArcs_XAxisRotation_mit_Gitter](svgarcs_xaxisrotation_with_grid.png)

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

Das Beispiel zeigt ein `<path>`-Element, das diagonal über die Seite verläuft. Im Zentrum wurden zwei elliptische Bögen ausgeschnitten (x-Radius = `30`, y-Radius = `50`). Beim ersten ist die x-Achsen-Drehung auf `0` belassen, sodass die Ellipse, um die sich der Bogen bewegt (in Grau dargestellt), gerade nach oben und unten ausgerichtet ist. Beim zweiten Bogen jedoch ist die x-Achsen-Drehung auf `-45` Grad eingestellt. Dadurch wird die Ellipse so gedreht, dass sie mit ihrer kleinen Achse entlang der Pfadrichtung ausgerichtet ist, wie durch die zweite Ellipse im Beispielbild gezeigt.

Für die nicht gedrehte Ellipse im obigen Bild gibt es nur zwei verschiedene Bögen und nicht vier zur Auswahl, da die Linie, die vom Start- zum Endpunkt des Bogens gezogen wurde, durch das Zentrum der Ellipse verläuft. In einem leicht modifizierten Beispiel sind die zwei Ellipsen, die die vier verschiedenen Bögen bilden, zu sehen:

![Die 4 Bögen auf dem Ellipsenbeispiel anzeigen](svgarcs_xaxisrotation_with_grid_ellipses.png)

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

Beachten Sie, dass jede der blauen Ellipsen aus zwei Bögen gebildet wird, je nachdem, ob sie im Uhrzeigersinn oder gegen den Uhrzeigersinn verlaufen. Jede Ellipse hat einen kurzen und einen langen Bogen. Die zwei Ellipsen sind einfach Spiegelbilder voneinander. Sie sind entlang der Linie, die durch die Start→End-Punkte gebildet wird, gespiegelt.

Wenn die Start→End-Punkte weiter entfernt sind, als die `x`- und `y`-Radien der Ellipse reichen können, werden die Radien der Ellipse minimal erweitert, sodass sie die Start→End-Punkte erreichen könnten. Der interaktive Codepen unten auf dieser Seite demonstriert dies gut. Um festzustellen, ob die Radien einer Ellipse groß genug sind, um eine Erweiterung zu erfordern, müsste ein Gleichungssystem gelöst werden, wie [dieses auf Wolfram Alpha](https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>. Diese Berechnung ist für die nicht gedrehte Ellipse mit Start→End (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipsen. Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1%3E>) sein, wenn die Radien der Ellipse zu klein sind. Diese zweite Berechnung ist für die nicht gedrehte Ellipse mit Start→End (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine kleine imaginäre Komponente, weil die Ellipse gerade so weit erweitert wurde.

Die vier verschiedenen oben erwähnten Pfade werden durch die nächsten beiden Parameterflags bestimmt. Wie bereits erwähnt, gibt es immer noch zwei mögliche Ellipsen, um den Pfad zu verlaufen, und zwei verschiedene mögliche Pfade sowohl auf beiden Ellipsen, was vier mögliche Pfade ergibt. Der erste Parameter ist das `large-arc-flag`. Es bestimmt, ob der Bogen größer oder kleiner als 180 Grad sein sollte; letztlich bestimmt dieses Flag, in welcher Richtung der Bogen um einen gegebenen Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Es bestimmt, ob der Bogen bei positiven oder negativen Winkeln beginnen sollte, was im Wesentlichen auswählt, um welchen der beiden Kreise herum gegangen wird. Das untenstehende Beispiel zeigt alle vier möglichen Kombinationen zusammen mit den beiden Kreisen für jeden Fall.

![Es werden vier Beispiele für jede Kombination von Large-Arc-Flag und Sweep-Flag für zwei sich überlappende Kreise gezeigt: einen in der oberen rechten Ecke, den anderen in der unteren linken Ecke. Für Sweep-Flag = 0, wenn Large-Arc-Flag = 0 ist, wird der innere Bogen des oberen rechten Kreises gezeichnet, und wenn Large-Arc-Flag = 1 ist, wird der äußere Bogen des unteren linken Kreises gezeichnet. Für Sweep-Flag = 1, wenn Large-Arc-Flag = 0 ist, wird der innere Bogen des unteren linken Kreises gezeichnet, und wenn Large-Arc-Flag = 1 ist, wird der äußere Bogen des oberen rechten Kreises gezeichnet.](svgarcs_flags.png)

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

Bögen sind ein einfacher Weg, um Stücke von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Beispielsweise würde ein Kreisdiagramm einen anderen Bogen für jedes Stück erfordern.

Wenn Sie von {{HTMLElement("canvas")}} auf SVG umsteigen, können sich Bögen als das Schwierigste erweisen, was man lernen muss, sind aber auch wesentlich mächtiger. Volle Kreise und Ellipsen sind die einzigen Formen, die SVG-Bögen Schwierigkeiten beim Zeichnen haben. Da die Start- und Endpunkte eines Pfades, der einen Kreis umrundet, derselbe Punkt sind, könnte es theoretisch eine unendliche Anzahl von Kreisen geben, die gewählt werden könnten, und der tatsächliche Pfad ist undefiniert. Es ist möglich, sie anzunähern, indem man die Start- und Endpunkte des Pfades leicht verschiebt und sie dann mit einem anderen Pfadsegment verbindet. Zum Beispiel ist es möglich, einen Kreis mit einem Bogen für jede Halbkreise zu erstellen. An diesem Punkt ist es oft einfacher, einen echten {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Knoten zu verwenden. Diese interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen: <https://codepen.io/lingtalfi/pen/yaLWJG> (getestet nur in Chrome und Firefox, funktioniert möglicherweise nicht in Ihrem Browser)

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}
