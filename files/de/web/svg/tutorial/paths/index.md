---
title: Paths
slug: Web/SVG/Tutorial/Paths
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}

Das {{SVGElement('path')}}-Element ist das leistungsfähigste Element in der SVG-Bibliothek von [Grundformen](/de/docs/Web/SVG/Tutorial/Basic_Shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Pfade erstellen komplexe Formen durch die Kombination mehrerer gerader oder gekrümmter Linien. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorial/Basic_Shapes#polyline)-Elemente erstellt werden. Während `<polyline>`- und `<path>`-Elemente ähnlich aussehende Formen erstellen können, erfordern `<polyline>`-Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren nicht gut auf größere Größen.

Ein gutes Verständnis von Pfaden ist wichtig beim Zeichnen von SVGs. Obwohl es nicht empfohlen wird, komplexe Pfade mit einem XML-Editor oder Texteditor zu erstellen, ermöglicht das Verständnis ihrer Funktionsweise die Identifizierung und Behebung von Darstellungsproblemen in SVGs.

Die Form eines `<path>`-Elements wird durch einen Parameter definiert: {{ SVGAttr("d") }}. (Siehe mehr in [Grundformen](/de/docs/Web/SVG/Tutorial/Basic_Shapes).) Der `d`-Attribut enthält eine Reihe von Befehlen und Parametern, die von diesen Befehlen verwendet werden.

Jeder der Befehle wird durch einen bestimmten Buchstaben instanziiert (zum Beispiel das Erstellen einer Klasse, Benennen und Lokalisieren dieser). Zum Beispiel wollen wir zu den x- und y-Koordinaten (`10`, `10`) gehen. Der "Move to"-Befehl wird mit dem Buchstaben `M` aufgerufen. Wenn der Parser auf diesen Buchstaben stößt, weiß er, dass er zu einem Punkt wechseln muss. Um also zu (`10`, `10`) zu gelangen, wäre der zu verwendende Befehl `M 10 10`. Danach beginnt der Parser mit dem Lesen des nächsten Befehls.

Alle Befehle gibt es auch in zwei Varianten. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z.B. _10px nach oben bewegen und 7px nach links vom letzten Punkt_).

Koordinaten im `d`-Parameter sind **immer einheitslos** und daher im Benutzerskoordinatensystem. Später lernen wir, wie Pfade transformiert werden können, um andere Anforderungen zu erfüllen.

## Linienbefehle

Es gibt fünf Linienbefehle für {{SVGElement("path")}}-Knoten. Der erste Befehl ist der "Move To" oder `M`, der oben beschrieben wurde. Er nimmt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`), zu der bewegt werden soll. Wenn der Cursor bereits irgendwo auf der Seite war, wird keine Linie gezeichnet, um die beiden Positionen zu verbinden. Der "Move To"-Befehl erscheint am Anfang von Pfaden, um anzugeben, wo die Zeichnung beginnen soll. Zum Beispiel:

```plain
M x y
(or)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass er nicht sichtbar wäre, wenn ein Pfad einfach normal gezeichnet wurde. Zum Beispiel:

![Ein roter Punkt ist auf einem weißen Quadrat 10 Pixel nach unten und 10 Pixel nach rechts gezeichnet. Dieser Punkt würde normalerweise nicht sichtbar sein, wird aber als Beispiel verwendet, wo der Cursor nach dem "Move To"-Befehl starten wird.](blank_path_area.png)

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10"/>

  <!-- Points -->
  <circle cx="10" cy="10" r="2" fill="red"/>

</svg>
```

Es gibt drei Befehle, die Linien zeichnen. Der allgemeinste ist der "Line To"-Befehl, aufgerufen mit `L`. `L` nimmt zwei Parameter—x- und y-Koordinaten—und zeichnet eine Linie von der aktuellen Position zu einer neuen Position.

```plain
L x y
(or)
l dx dy
```

Es gibt zwei abgekürzte Formen zum Zeichnen von horizontalen und vertikalen Linien. `H` zeichnet eine horizontale Linie und `V` zeichnet eine vertikale Linie. Beide Befehle nehmen nur einen Parameter, da sie sich nur in eine Richtung bewegen.

```plain
H x
(or)
h dx

V y
(or)
v dy
```

Ein einfacher Ausgangspunkt ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (derselben Art, die einfacher mit einem {{SVGElement("rect")}}-Element erstellt werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

![Ein schwarzes Quadrat mit Füllung ist innerhalb eines weißen Quadrats gezeichnet. Die Kanten des schwarzen Quadrats beginnen an Position (10,10), bewegen sich horizontal zur Position (90,10), bewegen sich vertikal zur Position (90,90), bewegen sich horizontal zurück zur Position (10,90) und kehren schließlich zur ursprünglichen Position (10, 10) zurück.](path_line_commands.png)

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

Wir können die obige Pfaderklärung ein wenig abkürzen, indem wir den "Close Path"-Befehl verwenden, aufgerufen mit `Z`. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten Punkt des Pfads. Er wird oft am Ende eines Pfadknotens platziert, jedoch nicht immer. Es gibt keinen Unterschied zwischen den Groß- und Kleinbuchstabenbefehl.

```plain
Z
(or)
z
```

Unser Pfad oben könnte also vereinfacht werden zu:

```xml
 <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

Die relativen Formen dieser Befehle können ebenfalls verwendet werden, um dasselbe Bild zu zeichnen. Relative Befehle werden durch die Verwendung von Kleinbuchstaben aufgerufen, und anstatt den Cursor zu einer genauen Koordinate zu bewegen, bewegt er ihn relativ zu seiner letzten Position. Da unser Rechteck beispielsweise 80×80 groß ist, könnte das `<path>`-Element wie folgt geschrieben werden:

```xml
 <path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

Der Pfad bewegt sich zu Punkt (`10`, `10`) und dann horizontal 80 Punkte nach rechts, dann 80 Punkte nach unten, dann 80 Punkte nach links und schließlich zurück zum Ausgangspunkt.

In diesen Beispielen wäre es wahrscheinlich einfacher, die {{SVGElement("polygon")}} oder {{SVGElement("polyline")}}-Elemente zu verwenden. Pfade werden jedoch so oft beim Zeichnen von SVGs verwendet, dass sich Entwickler möglicherweise wohler fühlen, sie stattdessen zu verwenden. Es gibt keinen echten Leistungsnachteil oder -vorteil beim Verwenden eines der beiden.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, die verwendet werden können, um glatte Kurven zu erstellen. Zwei dieser Kurven sind [Bézier-Kurven](/de/docs/Glossary/Bezier_curve), und die dritte ist ein "Bogen" oder ein Teil eines Kreises. Möglicherweise haben Sie bereits praktische Erfahrungen mit Bézier-Kurven mit den Pfadwerkzeugen in Inkscape, Illustrator oder Photoshop gesammelt. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber nur zwei einfache sind in `<path>`-Elementen verfügbar: eine kubische, aufgerufen mit `C`, und eine quadratische, aufgerufen mit `Q`.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Bézier-Kurven verwenden zwei Kontrollpunkte für jeden Punkt. Daher müssen zur Erstellung einer kubischen Bézier-Kurve drei Koordinatensätze angegeben werden.

```plain
C x1 y1, x2 y2, x y
(or)
c dx1 dy1, dx2 dy2, dx dy
```

Der letzte Koordinatensatz hier (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind die Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Start der Kurve, und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Neigung der Linie, die an jedem Punkt beginnt. Die Bézier-Funktion erstellt dann eine glatte Kurve, die von der am Anfang der Linie festgelegten Neigung zur Neigung am anderen Ende wechselt.

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

Das obige Beispiel erzeugt neun kubische Bézier-Kurven. Während sich die Kurven nach rechts bewegen, werden die Kontrollpunkte horizontal weiter ausgefächert. Während sich die Kurven nach unten bewegen, werden sie weiter von den Endpunkten entfernt. Wichtig ist, dass die Kurve in Richtung des ersten Kontrollpunkts startet und dann so gebogen wird, dass sie entlang der Richtung des zweiten Kontrollpunkts ankommt.

Mehrere Bézier-Kurven können zusammengefügt werden, um erweiterte, glatte Formen zu schaffen. Oft ist der Kontrollpunkt auf einer Seite eines Punktes eine Spiegelung des auf der anderen Seite verwendeten Kontrollpunkts, um die Neigung konstant zu halten. In diesem Fall kann eine Abkürzungsversion der kubischen Bézier-Kurve verwendet werden, die durch den Befehl `S` (oder `s`) bezeichnet wird.

```plain
S x2 y2, x y
(or)
s dx2 dy2, dx dy
```

`S` erzeugt denselben Kurventyp wie zuvor—wenn er jedoch einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird angenommen, dass der erste Kontrollpunkt eine Spiegelung des zuvor verwendeten ist. Wenn der `S`-Befehl nicht einem anderen `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht dasselbe, wie es der `Q`-Befehl mit denselben Parametern erzeugt hätte, aber es ist ähnlich.

Ein Beispiel für diese Syntax wird unten gezeigt, und in der Abbildung links werden die angegebenen Kontrollpunkte in Rot und der abgeleitete Kontrollpunkt in Blau gezeigt.

![Eine glatte S-förmige Kurve wird aus zwei Bézier-Kurven gezeichnet. Die zweite Kurve behält dieselbe Neigung der Kontrollpunkte wie die erste Kurve bei, die zur anderen Seite gespiegelt wird.](shortcut_cubic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

Der andere Typ von Bézier-Kurve, die quadratische Kurve, aufgerufen mit `Q`, ist tatsächlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, der die Neigung der Kurve sowohl am Startpunkt als auch am Endpunkt bestimmt. Sie nimmt zwei Parameter: den Kontrollpunkt und den Endpunkt der Kurve.

> [!NOTE]
> Die Koordinatenänderungen für `q` sind beide relativ zum vorherigen Punkt (das heißt, `dx` und `dy` sind nicht relativ zu `dx1` und `dy1`).

```plain
Q x1 y1, x y
(or)
q dx1 dy1, dx dy
```

![Quadratische Bézier-Kurve mit Raster](quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

Wie bei der kubischen Bézier-Kurve gibt es eine Abkürzung zum Aneinanderreihen mehrerer quadratischer Bézier-Kurven, aufgerufen mit `T`.

```plain
T x y
(or)
t dx dy
```

Diese Abkürzung betrachtet den zuvor verwendeten Kontrollpunkt und leitet daraus einen neuen ab. Das bedeutet, dass nach dem ersten Kontrollpunkt recht komplexe Formen erstellt werden können, indem nur Endpunkte angegeben werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q`- oder `T`-Befehl war. Wenn nicht, wird angenommen, dass der Kontrollpunkt derselbe ist wie der vorherige Punkt, und es werden nur Linien gezeichnet.

![Zwei quadratische Kurven bilden eine glatte S-förmige Kurve. Die Kontrollpunkte der zweiten Kurve sind entlang der horizontalen Achse gespiegelt](shortcut_quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Beide Kurventypen erzeugen ähnliche Ergebnisse, obwohl die kubische größere Freiheit bietet, wie genau die Kurve aussehen soll. Die Entscheidung, welche Kurve verwendet werden soll, ist situationsabhängig und hängt davon ab, wie symmetrisch die Linie ist.

### Bögen

Der andere Typ der gekrümmten Linie, die mit SVG erstellt werden kann, ist der Bogen, der mit dem `A`-Befehl aufgerufen wird. Bögen sind Abschnitte von Kreisen oder Ellipsen.

Für einen gegebenen x-Radius und y-Radius gibt es zwei Ellipsen, die zwei beliebige Punkte verbinden können (sofern sie im Radius des Kreises liegen). Entlang jeder dieser Kreise gibt es zwei mögliche Wege, die genommen werden können, um die Punkte zu verbinden—so gibt es in jeder Situation vier mögliche Bögen.

Aufgrund dessen erfordern Bögen eine ganze Reihe von Parametern:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Zu Beginn nimmt das Bogenelement zwei Parameter für den x-Radius und den y-Radius an. Bei Bedarf, siehe {{SVGElement("ellipse")}}s und wie sie sich verhalten. Die letzten beiden Parameter bezeichnen die x- und y-Koordinaten, um die Linie zu beenden. Zusammen definieren diese vier Werte die Grundstruktur des Bogens.

Der dritte Parameter beschreibt die Rotation des Bogens. Dies wird am besten mit einem Beispiel erklärt:

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

Das Beispiel zeigt ein `<path>`-Element, das sich diagonal über die Seite erstreckt. In seiner Mitte wurden zwei ellipsenförmige Bögen ausgeschnitten (x-Radius = `30`, y-Radius = `50`). Im ersten wurde die x-axis-rotation auf `0` belassen, sodass die Ellipse, um die der Bogen verläuft (in Grau gezeigt), direkt auf und ab orientiert ist. Für den zweiten Bogen jedoch wurde die x-axis-rotation auf `-45` Grad gesetzt. Dies rotiert die Ellipse so, dass sie mit ihrer Nebenachse entlang der Pfadrichtung ausgerichtet ist, wie in der zweiten Ellipse im Beispielbild gezeigt.

Für die unrotierte Ellipse im obigen Bild gibt es nur zwei verschiedene Bögen und nicht vier zur Auswahl, da die Linie, die vom Start- bis zum Endpunkt des Bogens gezogen wird, durch das Zentrum der Ellipse verläuft. In einem leicht modifizierten Beispiel sind die beiden Ellipsen zu sehen, die die vier verschiedenen Bögen bilden:

![Zeigt die 4 Bögen im Ellipsenexample](svgarcs_xaxisrotation_with_grid_ellipses.png)

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

Beachten Sie, dass jede der blauen Ellipsen aus zwei Bögen besteht, je nachdem, ob im Uhrzeigersinn oder gegen den Uhrzeigersinn gereist wird. Jede Ellipse hat einen kurzen Bogen und einen langen Bogen. Die zwei Ellipsen sind lediglich Spiegelbilder voneinander. Sie sind entlang der Linie, die von den Start- zu Endpunkten gebildet wird, gespiegelt.

Wenn die Start-zu-Endpunkte weiter voneinander entfernt sind, als die Ellipsen `x`- und `y`-Radien erreichen können, werden die Radien der Ellipse minimal erweitert, sodass sie die Start-zu-Endpunkte erreichen könnten. Der interaktive Codepen am Seitenende demonstriert dies gut. Um festzustellen, ob die Radien einer Ellipse groß genug sind, um erweitert werden zu müssen, müsste ein Gleichungssystem gelöst werden, wie dieses auf Wolfram Alpha (https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1). Diese Berechnung bezieht sich auf die nicht rotierte Ellipse mit Start-zu-Endpunkt (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipse(n). Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>), wenn die Radien der Ellipse zu klein sind. Diese zweite Berechnung bezieht sich auf die nichtrotierte Ellipse mit Start-zu-Endpunkt (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine geringe imaginäre Komponente, weil die Ellipse nur geringfügig erweitert wurde.

Die oben erwähnten vier verschiedenen Pfade werden durch die nächsten beiden Parameterflags bestimmt. Wie bereits erwähnt, gibt es immer noch zwei mögliche Ellipsen, um die der Pfad verlaufen kann, und zwei verschiedene mögliche Pfade auf beiden Ellipsen, was vier mögliche Pfade ergibt. Der erste Parameter ist das `large-arc-flag`. Es bestimmt, ob der Bogen größer oder kleiner als 180 Grad sein soll; letztendlich bestimmt dieses Flag, in welche Richtung der Bogen um einen gegebenen Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Es bestimmt, ob der Bogen bei positiven oder negativen Winkeln beginnen soll und wählt dabei im Wesentlichen aus, um welchen der beiden Kreise der Weg führen wird. Das folgende Beispiel zeigt alle vier möglichen Kombinationen sowie die beiden Kreise für jeden Fall.

![Vier Beispiele werden gezeigt für jede Kombination von large-arc-flag und sweep-flag für zwei Kreise, die sich überschneiden, einer oben rechts, der andere unten links. Für sweep-flag = 0, wenn large-arc-flag = 0, wird der innere Bogen des oberen rechten Kreises gezeichnet, und wenn large-arc-flag = 1, wird der äußere Bogen des unteren linken Kreises gezeichnet. Für sweep-flag = 1, wenn large-arc-flag = 0, wird der innere Bogen des unteren linken Kreises gezeichnet, und wenn large-arc-flag = 1, wird der äußere Bogen des oberen rechten Kreises gezeichnet.](svgarcs_flags.png)

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

Bögen sind ein einfacher Weg, um Teile von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Beispielsweise würde ein Kreisdiagramm einen anderen Bogen für jedes Segment erfordern.

Wenn Sie von {{HTMLElement("canvas")}} zu SVG wechseln, können Bögen das Schwierigste sein, das zu lernen ist, aber sie sind auch viel leistungsfähiger. Vollständige Kreise und Ellipsen sind die einzigen Formen, die SVG-Bögen Schwierigkeiten haben zu zeichnen. Da die Start- und Endpunkte für jeden Pfad um einen Kreis derselbe Punkt sind, gibt es eine unendliche Anzahl von Kreisen, die gewählt werden könnten, und der tatsächliche Pfad ist undefiniert. Es ist möglich, sie zu approximieren, indem die Start- und Endpunkte des Pfades leicht verschoben werden und sie dann mit einem anderen Pfadsegment verbunden werden. Zum Beispiel ist es möglich, einen Kreis mit einem Bogen für jede Halbkreis zu erstellen. Zu diesem Zeitpunkt ist es oft einfacher, einen echten {{SVGElement("circle")}} oder {{SVGElement("ellipse")}}-Knoten zu verwenden. Dieses interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen: <https://codepen.io/lingtalfi/pen/yaLWJG> (getestet in Chrome und Firefox, funktioniert möglicherweise nicht in Ihrem Browser)

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}
