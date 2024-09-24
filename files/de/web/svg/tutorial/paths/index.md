---
title: Pfade
slug: Web/SVG/Tutorial/Paths
l10n:
  sourceCommit: 1952d89acf75a2a9448cab9d323aa320281cd746
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}

Das {{SVGElement('path')}}-Element ist das leistungsstärkste Element in der SVG-Bibliothek der [Grundformen](/de/docs/Web/SVG/Tutorial/Basic_Shapes). Es kann verwendet werden, um Linien, Kurven, Bögen und mehr zu erstellen.

Pfade erstellen komplexe Formen, indem sie mehrere gerade oder gekrümmte Linien kombinieren. Komplexe Formen, die nur aus geraden Linien bestehen, können als [`<polyline>`](/de/docs/Web/SVG/Tutorial/Basic_Shapes#polyline)-Elemente erstellt werden. Während `<polyline>`- und `<path>`-Elemente ähnlich aussehende Formen erzeugen können, erfordern `<polyline>`-Elemente viele kleine gerade Linien, um Kurven zu simulieren, und skalieren nicht gut auf größere Größen.

Ein gutes Verständnis von Pfaden ist wichtig beim Zeichnen von SVGs. Während es nicht empfohlen wird, komplexe Pfade mit einem XML-Editor oder Texteditor zu erstellen, ermöglicht das Verständnis ihrer Funktionsweise, Anzeigeprobleme in SVGs zu identifizieren und zu beheben.

Die Form eines `<path>`-Elements wird durch einen Parameter definiert: {{SVGAttr("d")}}. (Weitere Informationen finden Sie in [Grundformen](/de/docs/Web/SVG/Tutorial/Basic_Shapes).) Das `d`-Attribut enthält eine Reihe von Befehlen und Parametern, die von diesen Befehlen verwendet werden.

Jeder der Befehle wird durch einen bestimmten Buchstaben instanziiert (z. B. durch Erstellen einer Klasse, Benennen und Lokalisieren). Zum Beispiel bewegen wir uns zu den x- und y-Koordinaten (`10`, `10`). Der "Move to"-Befehl wird mit dem Buchstaben `M` aufgerufen. Wenn der Parser auf diesen Buchstaben stößt, weiß er, dass er sich zu einem Punkt bewegen muss. Um also zu (`10`, `10`) zu gelangen, wäre der zu verwendende Befehl `M 10 10`. Danach beginnt der Parser, den nächsten Befehl zu lesen.

Alle Befehle gibt es auch in zwei Varianten. Ein **Großbuchstabe** gibt absolute Koordinaten auf der Seite an, und ein **Kleinbuchstabe** gibt relative Koordinaten an (z. B. _10px nach oben und 7px nach links vom letzten Punkt bewegen_).

Koordinaten im `d`-Parameter sind **immer einheitenlos** und daher im Benutzerkoordinatensystem. Später werden wir lernen, wie Pfade transformiert werden können, um anderen Anforderungen gerecht zu werden.

## Linienbefehle

Es gibt fünf Linienbefehle für {{SVGElement("path")}}-Knoten. Der erste Befehl ist "Move To" oder `M`, der oben beschrieben wurde. Er benötigt zwei Parameter, eine Koordinate (`x`) und eine Koordinate (`y`), zu der er sich bewegen soll. Wenn der Cursor bereits irgendwo auf der Seite war, wird keine Linie gezeichnet, um die beiden Positionen zu verbinden. Der "Move To"-Befehl erscheint am Anfang von Pfaden, um anzugeben, wo die Zeichnung beginnen soll. Zum Beispiel:

```plain
M x y
(oder)
m dx dy
```

Im folgenden Beispiel gibt es nur einen Punkt bei (`10`, `10`). Beachten Sie jedoch, dass er nicht erscheinen würde, wenn ein Pfad einfach normal gezeichnet worden wäre. Zum Beispiel:

![Ein roter Punkt wird auf einem weißen Quadrat 10 Pixel nach unten und 10 Pixel nach rechts gezeichnet. Dieser Punkt würde normalerweise nicht angezeigt werden, wird jedoch als Beispiel verwendet, wo der Cursor nach dem "Move To"-Befehl starten wird](blank_path_area.png)

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10"/>

  <!-- Punkte -->
  <circle cx="10" cy="10" r="2" fill="red"/>

</svg>
```

Es gibt drei Befehle, die Linien zeichnen. Der allgemeinste ist der "Line To"-Befehl, aufgerufen mit `L`. `L` benötigt zwei Parameter—x- und y-Koordinaten—und zeichnet eine Linie von der aktuellen Position zu einer neuen Position.

```plain
L x y
(oder)
l dx dy
```

Es gibt zwei abgekürzte Formen zum Zeichnen horizontaler und vertikaler Linien. `H` zeichnet eine horizontale Linie, und `V` zeichnet eine vertikale Linie. Beide Befehle benötigen nur einen Parameter, da sie sich nur in eine Richtung bewegen.

```plain
H x
(oder)
h dx

V y
(oder)
v dy
```

Ein einfacher Ausgangspunkt ist das Zeichnen einer Form. Wir beginnen mit einem Rechteck (gleichartiger Typ, der leichter mit einem {{SVGElement("rect")}}-Element erstellt werden könnte). Es besteht nur aus horizontalen und vertikalen Linien.

![Ein Quadrat mit schwarzer Füllung wird in einem weißen Quadrat gezeichnet. Die Kanten des schwarzen Quadrats beginnen an der Position (10,10), bewegen sich horizontal zur Position (90,10), bewegen sich vertikal zur Position (90,90), bewegen sich horizontal zurück zur Position (10,90) und schließlich zurück zur ursprünglichen Position (10,10).](path_line_commands.png)

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

  <path d="M 10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- Punkte -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>

</svg>
```

Wir können die obige Pfaddeklaration ein wenig verkürzen, indem wir den "Close Path"-Befehl verwenden, aufgerufen mit `Z`. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zurück zum ersten Punkt des Pfades. Er wird oft am Ende eines Pfadknotens platziert, aber nicht immer. Es gibt keinen Unterschied zwischen dem Groß- und Kleinbuchstaben.

```plain
Z
(oder)
z
```

Unser Pfad oben könnte also verkürzt werden auf:

```xml
 <path d="M 10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

Auch die relativen Formen dieser Befehle können verwendet werden, um dasselbe Bild zu zeichnen. Relative Befehle werden verwendet, indem Kleinbuchstaben verwendet werden, und anstatt den Cursor zu einer exakten Koordinate zu bewegen, bewegen sie ihn relativ zu seiner letzten Position. Zum Beispiel, da unser Rechteck 80×80 groß ist, könnte das `<path>`-Element geschrieben worden sein als:

```xml
 <path d="M 10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

Der Pfad wird sich zu Punkt (`10`, `10`) bewegen und dann horizontal 80 Punkte nach rechts, dann 80 Punkte nach unten, dann 80 Punkte nach links und schließlich zurück zum Anfang.

In diesen Beispielen wäre es wahrscheinlich einfacher, die {{SVGElement("polygon")}}- oder {{SVGElement("polyline")}}-Elemente zu verwenden. Allerdings werden Pfade so oft beim Zeichnen von SVG verwendet, dass Entwickler möglicherweise bequemer sind, diese stattdessen zu verwenden. Es gibt keinen wirklichen Performance-Nachteil oder -Vorteil bei der Verwendung des einen oder anderen.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, mit denen glatte Kurven erstellt werden können. Zwei dieser Kurven sind [Bézier-Kurven](/de/docs/Glossary/Bezier_curve), und die dritte ist ein "Arc" oder Teil eines Kreises. Sie haben möglicherweise bereits praktische Erfahrungen mit Bézier-Kurven durch die Verwendung von Pfadwerkzeugen in Inkscape, Illustrator oder Photoshop gesammelt. Es gibt eine unendliche Anzahl von Bézier-Kurven, aber nur zwei einfache sind in `<path>`-Elementen verfügbar: eine kubische, aufgerufen mit `C`, und eine quadratische, aufgerufen mit `Q`.

### Bézier-Kurven

Die kubische Kurve, `C`, ist die etwas komplexere Kurve. Kubische Bézier-Kurven benötigen zwei Kontrollpunkte für jeden Punkt. Daher müssen zur Erstellung einer kubischen Bézier-Kurve drei Koordinatensätze angegeben werden.

```plain
C x1 y1, x2 y2, x y
(oder)
c dx1 dy1, dx2 dy2, dx dy
```

Der letzte Satz von Koordinaten hier (`x`, `y`) gibt an, wo die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (`x1`, `y1`) ist der Kontrollpunkt für den Anfang der Kurve und (`x2`, `y2`) ist der Kontrollpunkt für das Ende. Die Kontrollpunkte beschreiben im Wesentlichen die Neigung der Linie, die an jedem Punkt beginnt. Die Bézier-Funktion erstellt dann eine glatte Kurve, die sich von der zu Beginn der Linie festgelegten Neigung bis zur Neigung am anderen Ende überträgt.

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

Das obige Beispiel erstellt neun kubische Bézier-Kurven. Während die Kurven nach rechts gehen, werden die Kontrollpunkte horizontal auseinandergezogen. Während die Kurven nach unten verlaufen, werden sie weiter von den Endpunkten getrennt. Hierbei ist zu beachten, dass die Kurve in Richtung des ersten Kontrollpunkts beginnt und dann so gebogen wird, dass sie entlang der Richtung des zweiten Kontrollpunkts ankommt.

Mehrere Bézier-Kurven können aneinandergereiht werden, um erweiterte, glatte Formen zu erstellen. Oft wird der Kontrollpunkt auf einer Seite eines Punktes eine Spiegelung des Kontrollpunkts sein, der auf der anderen Seite verwendet wird, um die Neigung konstant zu halten. In diesem Fall kann eine Abkürzungsversion der kubischen Bézier-Kurve verwendet werden, die mit dem Befehl `S` (oder `s`) bezeichnet wird.

```plain
S x2 y2, x y
(oder)
s dx2 dy2, dx dy
```

`S` erzeugt die gleiche Art von Kurve wie zuvor, aber wenn es einem anderen `S`-Befehl oder einem `C`-Befehl folgt, wird der erste Kontrollpunkt als Spiegelbild des zuvor verwendeten betrachtet. Wenn der `S`-Befehl keinem anderen `S`- oder `C`-Befehl folgt, wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. Das Ergebnis ist nicht dasselbe wie das, was der `Q`-Befehl mit denselben Parametern erzeugt hätte, ist jedoch ähnlich.

Ein Beispiel für diese Syntax wird unten gezeigt, und in der Abbildung links werden die angegebenen Kontrollpunkte in Rot und der erfasste Kontrollpunkt in Blau angezeigt.

![Eine glatte S-förmige Kurve wird aus zwei Bézier-Kurven gezeichnet. Die zweite Kurve behält die gleiche Neigung der Kontrollpunkte wie die erste Kurve bei, die auf die andere Seite gespiegelt wird.](shortcut_cubic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

Die andere Art von Bézier-Kurve, die quadratische Kurve, aufgerufen mit `Q`, ist tatsächlich eine einfachere Kurve als die kubische. Sie erfordert einen Kontrollpunkt, der die Neigung der Kurve sowohl am Startpunkt als auch am Endpunkt bestimmt. Sie hat zwei Parameter: den Kontrollpunkt und den Endpunkt der Kurve.

> [!NOTE]
> Die Koordinatendeltas für `q` sind beide relativ zum vorherigen Punkt (das heißt, `dx` und `dy` sind nicht relativ zu `dx1` und `dy1`).

```plain
Q x1 y1, x y
(oder)
q dx1 dy1, dx dy
```

![Quadratische Bézier mit Raster](quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

Wie bei der kubischen Bézier-Kurve gibt es auch hier eine Abkürzung, um mehrere quadratische Béziers aneinanderzureihen, die mit `T` aufgerufen wird.

```plain
T x y
(oder)
t dx dy
```

Diese Abkürzung betrachtet den zuvor verwendeten Kontrollpunkt und erfasst daraus einen neuen. Das bedeutet, dass nach dem ersten Kontrollpunkt ziemlich komplexe Formen erstellt werden können, indem nur Endpunkte angegeben werden.

Dies funktioniert nur, wenn der vorherige Befehl ein `Q`- oder `T`-Befehl war. Wenn nicht, wird der Kontrollpunkt als gleich dem vorherigen Punkt angenommen, und es werden nur Linien gezeichnet.

![Zwei quadratische Kurven bilden eine glatte S-förmige Kurve. Die Kontrollpunkte der zweiten Kurve werden über die horizontale Achse gespiegelt](shortcut_quadratic_bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Beide Kurven ergeben ähnliche Ergebnisse, obwohl die kubische mehr Freiheit in der genauen Gestaltung der Kurve erlaubt. Die Entscheidung, welche Kurve verwendet werden soll, hängt von der Symmetrie der Linie ab.

### Bögen

Die andere Art von gebogener Linie, die mithilfe von SVG erstellt werden kann, ist der Bogen, aufgerufen mit dem `A`-Befehl. Bögen sind Abschnitte von Kreisen oder Ellipsen.

Für einen gegebenen x-Radius und y-Radius gibt es zwei Ellipsen, die zwei beliebige Punkte verbinden können (solange sie innerhalb des Kreisradius liegen). Entlang eines dieser Kreise gibt es zwei mögliche Pfade, die die Punkte verbinden können, d. h. in jeder Situation stehen vier mögliche Bögen zur Verfügung.

Aufgrund dessen benötigen Bögen ziemlich viele Parameter:

```plain
A rx ry x-axis-rotation large-arc-flag sweep-flag x y
a rx ry x-axis-rotation large-arc-flag sweep-flag dx dy
```

Zu Beginn nimmt das Bogenelement zwei Parameter für den x-Radius und den y-Radius auf. Bei Bedarf siehe {{SVGElement("ellipse")}}-Elemente und deren Verhalten. Die letzten beiden Parameter geben die x- und y-Koordinaten an, um den Strich zu beenden. Diese vier Werte zusammen definieren die grundlegende Struktur des Bogens.

Der dritte Parameter beschreibt die Drehung des Bogens. Dies lässt sich am besten mit einem Beispiel erklären:

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

Das Beispiel zeigt ein `<path>`-Element, das diagonal über die Seite verläuft. In der Mitte wurden zwei elliptische Bögen ausgeschnitten (x Radius = `30`, y Radius = `50`). Beim ersten Bogen wurde die x-axis-rotation auf `0` gelassen, sodass die Ellipse, um die der Bogen verläuft (in Grau dargestellt), gerade nach oben und unten ausgerichtet ist. Beim zweiten Bogen jedoch beträgt die x-axis-rotation `-45` Grad. Dies dreht die Ellipse so, dass sie mit ihrer Nebenachse entlang der Pfadrichtung ausgerichtet ist, wie in der zweiten Ellipse im Beispielbild gezeigt.

Für die nicht gedrehte Ellipse im obigen Bild gibt es nur zwei verschiedene Bögen und nicht vier zur Auswahl, da die Linie, die vom Start und Ende des Bogens gezogen wird, durch das Zentrum der Ellipse verläuft. In einem leicht modifizierten Beispiel können die beiden Ellipsen, die die vier verschiedenen Bögen bilden, gesehen werden:

![Die 4 Bögen auf dem Ellipse-Beispiel anzeigen](svgarcs_xaxisrotation_with_grid_ellipses.png)

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

Beachten Sie, dass jede der blauen Ellipsen durch zwei Bögen gebildet werden kann, je nachdem, ob sie im Uhrzeigersinn oder gegen den Uhrzeigersinn verlaufen. Jede Ellipse hat einen kurzen und einen langen Bogen. Die beiden Ellipsen sind lediglich Spiegelbilder voneinander. Sie sind entlang der Linie, die von den Start→End-Punkten gebildet wird, gespiegelt.

Wenn die Start→End-Punkte weiter sind, als der `x`- und `y`-Radius der Ellipse erreichen kann, werden die Radien der Ellipse minimal erweitert, damit sie die Start→End-Punkte erreichen können. Der interaktive Codepen am Ende dieser Seite demonstriert dies gut. Um festzustellen, ob die Radien einer Ellipse groß genug sind, um erweitert werden zu müssen, müsste ein System von Gleichungen gelöst werden, wie [dieses auf wolfram alpha](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F36%5E2)+%2B+((215+-+y)%5E2%2F60%5E2)+%3D+1,+((150.71+-+x)%5E2%2F36%5E2)+%2B+((170.29+-+y)%5E2%2F60%5E2)+%3D+1>). Diese Berechnung bezieht sich auf die nicht gedrehte Ellipse mit Start→End (`110`, `215`)→(`150.71`, `170.29`). Die Lösung, (`x`, `y`), ist das Zentrum der Ellipse(n). Die Lösung wird [imaginär](<https://www.wolframalpha.com/input/?i=solve+((110+-+x)%5E2%2F30%5E2)+%2B+((215+-+y)%5E2%2F50%5E2)+%3D+1,+((162.55+-+x)%5E2%2F30%5E2)+%2B+((162.45+-+y)%5E2%2F50%5E2)+%3D+1>) sein, wenn die Radien der Ellipse zu klein sind. Diese zweite Berechnung bezieht sich auf die nicht gedrehte Ellipse mit Start→End (`110`, `215`)→(`162.55`, `162.45`). Die Lösung hat eine kleine imaginäre Komponente, da die Ellipse gerade so erweitert wurde.

Die vier oben genannten unterschiedlichen Pfade werden durch die nächsten beiden Parameter-Flags bestimmt. Wie bereits erwähnt, gibt es noch zwei mögliche Ellipsen, um die der Pfad verlaufen kann und zwei verschiedene mögliche Pfade auf beiden Ellipsen, die vier mögliche Pfade ergeben. Der erste Parameter ist das `large-arc-flag`. Es bestimmt, ob der Bogen größer oder kleiner als 180 Grad sein soll; letztendlich bestimmt dieses Flag, in welche Richtung der Bogen um einen gegebenen Kreis verlaufen wird. Der zweite Parameter ist das `sweep-flag`. Es bestimmt, ob der Bogen sich in positive oder negative Winkel zu bewegen beginnen soll, was im Wesentlichen auswählt, welcher der beiden Kreise durchlaufen wird. Das folgende Beispiel zeigt alle vier möglichen Kombinationen, zusammen mit den beiden Kreisen für jeden Fall.

![Vier Beispiele werden gezeigt für jede Kombination aus large-arc-flag und sweep-flag für zwei sich überlappende Kreise, einer in der rechten oberen Ecke, der andere in der unteren linken Ecke. Für sweep-flag = 0 wird bei large-arc-flag = 0 der innere Bogen des rechten oberen Kreises gezeichnet, und bei large-arc-flag = 1 der äußere Bogen des linken unteren Kreises. Für sweep-flag = 1 wird bei large-arc-flag = 0 der innere Bogen des linken unteren Kreises gezeichnet, und bei large-arc-flag = 1 der äußere Bogen des rechten oberen Kreises.](svgarcs_flags.png)

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

Bögen sind eine einfache Möglichkeit, Teile von Kreisen oder Ellipsen in Zeichnungen zu erstellen. Beispielsweise würde ein Tortendiagramm für jedes Stück einen anderen Bogen erfordern.

Wenn Sie von {{HTMLElement("canvas")}} auf SVG umsteigen, können Bögen das Schwerste zu lernen sein, sind aber auch viel mächtiger. Vollständige Kreise und Ellipsen sind die einzigen Formen, die SVG-Bögen Schwierigkeiten beim Zeichnen bereiten. Da die Start- und Endpunkte für jeden Pfad, der um einen Kreis verläuft, derselbe Punkt sind, gibt es eine unendliche Anzahl von Kreisen, die gewählt werden könnten, und der tatsächliche Pfad ist undefiniert. Es ist möglich, sie zu approximieren, indem die Start- und Endpunkte des Pfades leicht schräg gestellt werden und sie dann mit einem anderen Pfadsegment verbunden werden. Beispielsweise ist es möglich, einen Kreis mit einem Bogen für jeden Halbkubismus zu erstellen. In diesem Fall ist es oft einfacher, einen echten {{SVGElement("circle")}}- oder {{SVGElement("ellipse")}}-Knoten zu verwenden. Dieses interaktive Demo könnte helfen, die Konzepte hinter SVG-Bögen zu verstehen: <https://codepen.io/lingtalfi/pen/yaLWJG> (getestet in Chrome und Firefox, funktioniert möglicherweise nicht in Ihrem Browser)

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}
