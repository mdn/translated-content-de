---
title: Pfade
slug: Web/SVG/Tutorial/Paths
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}

Das {{SVGElement('path')}}-Element ist das leistungsstärkste Element in der SVG-Bibliothek der [grundlegenden Formen](/de/docs/Web/SVG/Tutorial/Basic_Shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Pfade erstellen komplexe Formen, indem sie mehrere gerade oder gekrümmte Linien kombinieren. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorial/Basic_Shapes#polyline)-Elemente erstellt werden. Während `<polyline>`- und `<path>`-Elemente ähnlich aussehende Formen erzeugen können, erfordern `<polyline>`-Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren nicht gut auf größere Größen.

Ein gutes Verständnis von Pfaden ist wichtig beim Zeichnen von SVGs. Während das Erstellen komplexer Pfade mit einem XML-Editor oder Texteditor nicht empfohlen wird, ermöglicht das Verständnis ihrer Funktionsweise, Anzeigeprobleme in SVGs zu identifizieren und zu beheben.

Die Form eines `<path>`-Elements wird durch einen Parameter definiert: {{ SVGAttr("d") }}. (Weitere Informationen finden Sie unter [grundlegende Formen](/de/docs/Web/SVG/Tutorial/Basic_Shapes).) Das `d`-Attribut enthält eine Reihe von Befehlen und Parameter, die von diesen Befehlen verwendet werden.

Jeder der Befehle wird durch einen spezifischen Buchstaben instanziiert (z. B. wird eine Klasse erstellt, benannt und lokalisiert). Nehmen wir zum Beispiel an, wir wollen zu den x- und y-Koordinaten (`10`, `10`) wechseln. Der "Move to"-Befehl wird mit dem Buchstaben `M` aufgerufen. Wenn der Parser auf diesen Buchstaben stößt, weiß er, dass er zu einem Punkt wechseln muss. Um zu (`10`, `10`) zu wechseln, wäre der Befehl `M 10 10`. Danach beginnt der Parser, den nächsten Befehl zu lesen.

Alle Befehle existieren auch in zwei Varianten. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z. B. _bewege 10px nach oben und 7px nach links vom letzten Punkt_).

Koordinaten im `d`-Parameter sind **immer einheitenlos** und daher im Benutzerkoordinatensystem. Später erfahren wir, wie Pfade transformiert werden können, um anderen Anforderungen gerecht zu werden.

## Linienbefehle

Es gibt fünf Linienbefehle für {{SVGElement("path")}}-Knoten. Der erste Befehl ist der "Move To" oder `M`, der oben beschrieben wurde. Er benötigt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`), zu der man wechseln möchte. Wenn der Cursor bereits irgendwo auf der Seite war, wird keine Linie gezeichnet, um die beiden Positionen zu verbinden. Der "Move To"-Befehl erscheint am Anfang von Pfaden, um festzulegen, wo die Zeichnung beginnen soll. Zum Beispiel:

```plain
M x y
(or)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass er nicht angezeigt wird, wenn ein Pfad normal gezeichnet würde. Zum Beispiel:

![Ein roter Punkt wird auf einem weißen Quadrat 10 Pixel nach unten und 10 Pixel nach rechts gezeichnet. Dieser Punkt würde normalerweise nicht angezeigt, sondern wird hier als Beispiel verwendet, um zu zeigen, wo der Cursor nach dem "Move To"-Befehl starten wird.](blank_path_area.png)

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

Es gibt zwei abgekürzte Formen zum Zeichnen von horizontalen und vertikalen Linien. `H` zeichnet eine horizontale Linie, und `V` zeichnet eine vertikale Linie. Beide Befehle nehmen nur einen Parameter an, da sie sich nur in eine Richtung bewegen.

```plain
H x
(or)
h dx

V y
(or)
v dy
```

Ein einfacher Ausgangspunkt ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (der gleichen Art, die leichter mit einem {{SVGElement("rect")}}-Element erstellt werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

![Ein schwarzes Quadrat wird innerhalb eines weißen Quadrats gezeichnet. Die Kanten des schwarzen Quadrats beginnen bei Position (10,10), bewegen sich horizontal zur Position (90,10), bewegen sich vertikal zur Position (90,90), bewegen sich horizontal zurück zur Position (10,90) und schließlich zurück zur ursprünglichen Position (10, 10).](path_line_commands.png)

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

Wir können die obige Pfaderklärung ein wenig verkürzen, indem wir den "Close Path"-Befehl verwenden, der mit `Z` aufgerufen wird. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten Punkt des Pfades. Er wird oft am Ende eines Pfadknotens platziert, wenn auch nicht immer. Es gibt keinen Unterschied zwischen dem Groß- und Kleinbuchstaben-Befehl.

```plain
Z
(or)
z
```

Unser obiger Pfad könnte also wie folgt verkürzt werden:

```xml
 <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

Die relativen Formen dieser Befehle können ebenfalls verwendet werden, um das gleiche Bild zu zeichnen. Relative Befehle werden durch die Verwendung von Kleinbuchstaben aufgerufen und bewegen den Cursor relativ zu seiner letzten Position, anstatt ihn auf eine genaue Koordinate zu bewegen. Da unser Rechteck 80×80 ist, könnte das `<path>`-Element also wie folgt geschrieben werden:

```xml
 <path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

Der Pfad bewegt sich zu Punkt (`10`, `10`) und dann 80 Punkte horizontal nach rechts, dann 80 Punkte nach unten, dann 80 Punkte nach links und schließlich zurück zum Start.

In diesen Beispielen wäre es wahrscheinlich einfacher, die {{SVGElement("polygon")}}- oder {{SVGElement("polyline")}}-Elemente zu verwenden. Pfade werden jedoch so häufig beim Zeichnen von SVG verwendet, dass Entwickler möglicherweise lieber damit arbeiten. Es gibt keinen echten Leistungsnach- oder -vorteil bei der Verwendung des einen oder anderen.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, die verwendet werden können, um glatte Kurven zu erstellen. Zwei dieser Kurven sind [Bézier-Kurven](/de/docs/Glossary/Bezier_curve), und die dritte ist ein "Bogen" oder ein Teil eines Kreises. Sie haben möglicherweise bereits praktische Erfahrungen mit Bézier-Kurven mithilfe von Pfadwerkzeugen in Inkscape, Illustrator oder Photoshop gesammelt. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber nur zwei einfache sind in `<path>`-Elementen verfügbar: eine kubische, die mit `C` aufgerufen wird, und eine quadratische, die mit `Q` aufgerufen wird.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Béziers haben zwei Kontrollpunkte für jeden Punkt. Daher müssen zur Erstellung einer kubischen Bézier drei Koordinatenpaare angegeben werden.

```plain
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

Das letzte Koordinatenpaar (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Anfang der Kurve, und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Steigung der Linie, die bei jedem Punkt beginnt. Die Bézier-Funktion erstellt dann eine glatte Kurve, die von der zu Beginn der Linie festgelegten Steigung zur Steigung am anderen Ende übergeht.

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

Das obige Beispiel erstellt neun kubische Bézier-Kurven. Wenn sich die Kurven nach rechts bewegen, werden die Kontrollpunkte horizontal verteilt. Wenn sich die Kurven nach unten bewegen, werden sie weiter von den Endpunkten entfernt. Zu beachten ist hier, dass die Kurve in Richtung des ersten Kontrollpunkts beginnt und dann so gebogen wird, dass sie entlang der Richtung des zweiten Kontrollpunkts ankommt.

Mehrere Bézier-Kurven können aneinandergereiht werden, um ausgedehnte, glatte Formen zu erstellen. Oft wird der Kontrollpunkt auf einer Seite eines Punktes eine Spiegelung des auf der anderen Seite verwendeten Kontrollpunkts sein, um die Steigung konstant zu halten. In diesem Fall kann eine Abkürzungsversion der kubischen Bézier verwendet werden, die durch den Befehl `S` (oder `s`) gekennzeichnet ist.

```plain
S x2 y2, x y
(or)
s dx2 dy2, dx dy
```

`S` erstellt die gleiche Art von Kurve wie zuvor—aber wenn es einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird angenommen, dass der erste Kontrollpunkt eine Spiegelung des zuvor verwendeten ist. Wenn der `S`-Befehl nicht einem anderen `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht dasselbe wie das, was der `Q`-Befehl mit den gleichen Parametern erzeugt hätte, aber es ist ähnlich.

Ein Beispiel für diese Syntax ist unten gezeigt, und in der Abbildung links sind die angegebenen Kontrollpunkte in Rot und der abgeleitete Kontrollpunkt in Blau dargestellt.

![Eine glatte S-förmige Kurve wird aus zwei Bézier-Kurven gezeichnet. Die zweite Kurve behält die gleiche Steigung der Kontrollpunkte bei wie die erste Kurve, die auf die andere Seite gespiegelt wird.](shortcut_cubic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

Der andere Typ von Bézier-Kurve, die quadratische Kurve, die mit `Q` aufgerufen wird, ist tatsächlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, welcher die Steigung der Kurve sowohl am Startpunkt als auch am Endpunkt bestimmt. Sie nimmt zwei Parameter an: den Kontrollpunkt und den Endpunkt der Kurve.

> [!NOTE]
> Die Koordinaten-Deltas für `q` sind beide relativ zum vorherigen Punkt (d. h., `dx` und `dy` sind nicht relativ zu `dx1` und `dy1`).

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

Wie bei der kubischen Bézier-Kurve gibt es auch eine Abkürzung für das Aneinanderreihen mehrerer quadratischer Bézier-Kurven, die mit `T` aufgerufen wird.

```plain
T x y
(or)
t dx dy
```

Diese Abkürzung betrachtet den zuvor verwendeten Kontrollpunkt und leitet einen neuen daraus ab. Das bedeutet, dass nach dem ersten Kontrollpunkt ziemlich komplexe Formen gemacht werden können, indem nur Endpunkte angegeben werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q`- oder ein `T`-Befehl war. Wenn nicht, wird angenommen, dass der Kontrollpunkt derselbe ist wie der vorherige Punkt, und es werden nur Linien gezeichnet.

![Zwei quadratische Kurven bilden eine glatte S-förmige Kurve. Die Kontrollpunkte der zweiten Kurve sind entlang der horizontalen Achse gespiegelt](shortcut_quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Beide Kurven erzeugen ähnliche Ergebnisse, obwohl die kubische mehr Freiheit darin bietet, wie die Kurve tatsächlich aussehen soll. Welche Kurve verwendet wird, ist situativ und hängt vom Grad der Symmetrie der Linie ab.

### Bögen

Der andere Typ von gekrümmten Linien, die mit SVG erstellt werden können, ist der Bogen, der mit dem `A`-Befehl aufgerufen wird. Bögen sind Abschnitte von Kreisen oder Ellipsen.

Für einen gegebenen x-Radius und y-Radius gibt es zwei Ellipsen, die zwei beliebige Punkte verbinden können (solange sie innerhalb des Radius des Kreises liegen). Auf beiden dieser Kreise gibt es zwei mögliche Wege, die genommen werden können, um die Punkte zu verbinden—es gibt also in jeder Situation vier mögliche Bögen.

Aus diesem Grund erfordern Bögen ziemlich viele Parameter:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Am Anfang nimmt das Bogenelement zwei Parameter für den x-Radius und den y-Radius auf. Bei Bedarf lesen Sie nach, wie sich {{SVGElement("ellipse")}}n verhalten. Die beiden letzten Parameter bestimmen die x- und y-Koordinaten, um den Strich zu beenden. Zusammen definieren diese vier Werte die Grundstruktur des Bogens.

Der dritte Parameter beschreibt die Drehung des Bogens. Dies wird am besten mit einem Beispiel erklärt:

![SVGArcs_XAxisRotation mit Raster](svgarcs_xaxisrotation_with_grid.png)

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

Das Beispiel zeigt ein `<path>`-Element, das diagonal über die Seite verläuft. In der Mitte wurden zwei elliptische Bögen ausgeschnitten (x-Radius = `30`, y-Radius = `50`). Beim ersten Bogen wurde die Drehung entlang der x-Achse auf `0` belassen, sodass die Ellipse, um die sich der Bogen bewegt (angezeigt in Grau), gerade nach oben und unten ausgerichtet ist. Beim zweiten Bogen ist die Drehung entlang der x-Achse jedoch auf `-45` Grad eingestellt. Dadurch wird die Ellipse so gedreht, dass sie mit ihrer Nebenachse entlang der Pfadrichtung ausgerichtet ist, wie durch die zweite Ellipse im Beispielbild gezeigt.

Für die ungedrehte Ellipse im obigen Bild gibt es nur zwei verschiedene Bögen und nicht vier zur Auswahl, da die Linie, die vom Start bis zum Ende des Bogens gezogen wird, durch die Mitte der Ellipse verläuft. In einem leicht modifizierten Beispiel können die beiden Ellipsen gezeigt werden, die die vier verschiedenen Bögen bilden:

![Die 4 Bögen im Ellipse-Beispiel anzeigen](svgarcs_xaxisrotation_with_grid_ellipses.png)

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

Beachten Sie, dass jede der blauen Ellipsen von zwei Bögen gebildet wird, abhängig davon, ob im Uhrzeigersinn oder gegen den Uhrzeigersinn gereist wird. Jede Ellipse hat einen kurzen Bogen und einen langen Bogen. Die beiden Ellipsen sind einfach Spiegelbilder voneinander. Sie sind entlang der Linie gezeichnet, die von Punkt Start→Ende gebildet wird.

Wenn die Start→Ende-Punkte weiter entfernt sind, als die Ellipsen im `x`- und `y`-Radius erreichen können, werden die Radien der Ellipsen minimal erweitert, damit sie die Start→Ende-Punkte erreichen könnten. Der interaktive Codepen am unteren Ende dieser Seite zeigt dies gut. Um zu bestimmen, ob Radien der Ellipsen groß genug sind, um erweitert werden zu müssen, müsste ein System von Gleichungen gelöst werden, wie [dies auf Wolfram Alpha](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>). Diese Berechnung ist für die nicht-rotierte Ellipse mit Start→Ende (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipse(n). Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>) sein, wenn die Radien der Ellipsen zu klein sind. Diese zweite Berechnung ist für die nicht-rotierte Ellipse mit Start→Ende (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine kleine imaginäre Komponente, da die Ellipse nur minimal erweitert wurde.

Die vier oben genannten verschiedenen Pfade werden durch die nächsten zwei Parameterflags bestimmt. Wie bereits erwähnt, gibt es noch zwei mögliche Ellipsen, um die der Pfad verlaufen kann, und zwei verschiedene mögliche Pfade auf beiden Ellipsen, die vier mögliche Pfade ergeben. Der erste Parameter ist das `large-arc-flag`. Er bestimmt, ob der Bogen größer als oder weniger als 180 Grad sein sollte; letztendlich bestimmt dieses Flag die Richtung, in der der Bogen um einen gegebenen Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Es bestimmt, ob der Bogen mit positiven Winkeln oder negativen Winkel beginnen soll, was im Wesentlichen bestimmt, um welchen der beiden Kreise gereist wird. Das folgende Beispiel zeigt alle vier möglichen Kombinationen, zusammen mit den zwei Kreisen für jeden Fall.

![Vier Beispiele werden für jede Kombination von large-arc-flag und sweep-flag für zwei sich überlappende Kreise gezeigt, einer oben rechts, der andere unten links. Für sweep-flag = 0 wird bei large-arc-flag = 0 der innere Bogen des Kreises oben rechts gezeichnet, und bei large-arc-flag = 1 der äußere Bogen des Kreises unten links. Für sweep-flag = 1 wird bei large-arc-flag = 0 der innere Bogen des Kreises unten links gezeichnet, und bei large-arc-flag = 1 der äußere Bogen des Kreises oben rechts.](svgarcs_flags.png)

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

Bögen sind ein einfacher Weg, um Teile von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Beispielsweise würde ein Kreisdiagramm für jedes Stück einen anderen Bogen erfordern.

Beim Übergang zu SVG aus {{HTMLElement("canvas")}} können Bögen das Schwierigste sein, aber sie sind auch viel mächtiger. Vollständige Kreise und Ellipsen sind die einzigen Formen, die SVG-Bögen Schwierigkeiten haben, zu zeichnen. Da die Start- und Endpunkte für jeden Pfad, der um einen Kreis verläuft, derselbe Punkt sind, gibt es eine unendliche Anzahl von Kreisen, die gewählt werden könnten, und der tatsächliche Pfad ist undefiniert. Es ist möglich, sie zu nähern, indem die Start- und Endpunkte des Pfades leicht verschoben werden und sie dann mit einem anderen Pfadsegment verbunden werden. Beispielsweise kann ein Kreis mit einem Bogen für jede Halbkreis erstellt werden. Zu diesem Zeitpunkt ist es oft einfacher, stattdessen einen echten {{SVGElement("circle")}} oder {{SVGElement("ellipse")}}-Knoten zu verwenden. Dieses interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen: <https://codepen.io/lingtalfi/pen/yaLWJG> (getestet in Chrome und Firefox, funktioniert möglicherweise nicht in Ihrem Browser)

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}
