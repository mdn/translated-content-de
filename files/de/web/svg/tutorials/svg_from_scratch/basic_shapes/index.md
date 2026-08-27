---
title: Grundlegende Formen
slug: Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes
l10n:
  sourceCommit: 87adaa5384b1015690f3435ce0ba64ac097764eb
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Positions", "Web/SVG/Tutorials/SVG_from_scratch/Paths") }}

Es gibt mehrere grundlegende Formen, die für die meisten SVG-Zeichnungen verwendet werden. Der Zweck dieser Formen ist aus ihren Namen ziemlich offensichtlich. Einige der Parameter, die ihre Position und Größe bestimmen, werden angegeben, aber ein Elementreferenz würde wahrscheinlich genauere und vollständigere Beschreibungen zusammen mit anderen Eigenschaften enthalten, die hier nicht behandelt werden. Da sie jedoch in den meisten SVG-Dokumenten verwendet werden, ist es notwendig, ihnen eine Art Einführung zu geben.

Um eine Form einzufügen, erstellen Sie ein Element im Dokument. Verschiedene Elemente entsprechen verschiedenen Formen und nehmen unterschiedliche Parameter an, um die Größe und Position dieser Formen zu beschreiben. Einige sind etwas redundant, da sie durch andere Formen erstellt werden können, aber sie sind alle zu Ihrer Bequemlichkeit da, um Ihre SVG-Dokumente so kurz und lesbar wie möglich zu halten. Alle grundlegenden Formen sind im folgenden Bild dargestellt.

![Folge von acht verschiedenen Formen und Zeichnungen. Oben links ein schwarzes Umrissquadrat, gefolgt von einem schwarzen abgerundeten Umrissquadrat. Unten links ein roter Umrisskreis, gefolgt von einer roten Umrissellipse. Unten links eine gelbe Linie, gefolgt von einem gelben Zickzack. Unter den gelben Linien ein grüner Umrissstern und am Ende des Bildes eine blaue Wellenlinie.](shapes.png)

Der Code, um dieses Bild zu erzeugen, sieht ungefähr so aus:

```xml
<svg width="200" height="250" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="none" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="none" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="none" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="none" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="none" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="none" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

> [!NOTE]
> Die Attribute `stroke`, `stroke-width` und `fill` werden später im Tutorial erklärt.

## Rechteck

Das {{SVGElement("rect")}} Element zeichnet ein Rechteck auf den Bildschirm. Es gibt sechs grundlegende Attribute, die die Position und Form der Rechtecke auf dem Bildschirm steuern. Das rechte hat seine `rx` und `ry` Parameter gesetzt, wodurch es abgerundete Ecken erhält. Wenn sie nicht gesetzt sind, ist der Standardwert `0`.

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- `x`
  - : Die x-Position der oberen linken Ecke des Rechtecks.
- `y`
  - : Die y-Position der oberen linken Ecke des Rechtecks.
- `width`
  - : Die Breite des Rechtecks.
- `height`
  - : Die Höhe des Rechtecks.
- `rx`
  - : Der x-Radius der Ecken des Rechtecks.
- `ry`
  - : Der y-Radius der Ecken des Rechtecks.

## Kreis

Das {{SVGElement("circle")}} Element zeichnet einen Kreis auf den Bildschirm. Es benötigt drei grundlegende Parameter, um die Form und Größe des Elements zu bestimmen.

```xml
<circle cx="25" cy="75" r="20"/>
```

- `r`
  - : Der Radius des Kreises.
- `cx`
  - : Die x-Position des Mittelpunkts des Kreises.
- `cy`
  - : Die y-Position des Mittelpunkts des Kreises.

## Ellipse

Eine {{SVGElement("ellipse")}} ist eine allgemeinere Form des {{SVGElement("circle")}} Elements, bei der Sie den x- und y-Radius (in der Mathematik üblicherweise als _Hauptachse_ und _Nebenachse_ bezeichnet) des Kreises separat skalieren können.

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- `rx`
  - : Der x-Radius der Ellipse.
- `ry`
  - : Der y-Radius der Ellipse.
- `cx`
  - : Die x-Position des Mittelpunktes der Ellipse.
- `cy`
  - : Die y-Position des Mittelpunktes der Ellipse.

## Linie

Das {{SVGElement("line")}} Element nimmt die Positionen von zwei Punkten als Parameter und zieht eine gerade Linie zwischen ihnen.

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>
```

- `x1`
  - : Die x-Position von Punkt 1.
- `y1`
  - : Die y-Position von Punkt 1.
- `x2`
  - : Die x-Position von Punkt 2.
- `y2`
  - : Die y-Position von Punkt 2.

## Polylinie

Eine {{SVGElement("polyline")}} ist eine Gruppe von verbundenen geraden Linien. Da die Liste der Punkte ziemlich lang werden kann, werden alle Punkte in einem Attribut enthalten:

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- `points`
  - : Eine Liste von Punkten. Jede Zahl muss durch ein Leerzeichen, Komma, EOL oder ein Zeilenwechselzeichen mit zusätzlichem Leerraum getrennt sein. Jeder Punkt muss zwei Zahlen enthalten: eine x-Koordinate und eine y-Koordinate. Die Liste `(0,0)`, `(1,1)` und `(2,2)` könnte also als `0, 0 1, 1 2, 2` geschrieben werden.

## Polygon

Ein {{SVGElement("polygon")}} ist ähnlich wie ein {{SVGElement("polyline")}}, da es aus geraden Liniensegmenten besteht, die eine Liste von Punkten verbinden. Für Polygone verbindet der Pfad jedoch automatisch den letzten Punkt mit dem ersten und erstellt so eine geschlossene Form.

> [!NOTE]
> Ein Rechteck ist eine Art Polygon, daher kann ein Polygon verwendet werden, um ein `<rect/>` Element zu erstellen, das keine abgerundeten Ecken hat.

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- `points`
  - : Eine Liste von Punkten, jede Zahl durch ein Leerzeichen, Komma, EOL oder ein Zeilenwechselzeichen mit zusätzlichem Leerraum getrennt. Jeder Punkt muss zwei Zahlen enthalten: eine x-Koordinate und eine y-Koordinate. Die Liste `(0,0)`, `(1,1)` und `(2,2)` könnte also als `0, 0 1, 1 2, 2` geschrieben werden. Das Zeichnen schließt dann den Pfad, sodass eine letzte gerade Linie von `(2,2)` zu `(0,0)` gezeichnet würde.

## Pfad

Ein {{SVGElement("path")}} ist die allgemeinste Form, die in SVG verwendet werden kann. Mit einem `path` Element können Sie Rechtecke (mit oder ohne abgerundete Ecken), Kreise, Ellipsen, Polylinien und Polygone zeichnen. Grundsätzlich jede andere Art von Formen, Bezierkurven, quadratische Kurven und viele mehr.

Aus diesem Grund wird sich [der nächste Abschnitt](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths) in diesem Tutorial auf Pfade konzentrieren. Für jetzt beachten Sie bitte, dass es einen einzigen Parameter gibt, der seine Form steuert.

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- `d`
  - : Eine Liste von Punkten und anderen Informationen darüber, wie der Pfad gezeichnet werden soll. Weitere Informationen finden Sie im Abschnitt [Paths](/de/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths).

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Positions", "Web/SVG/Tutorials/SVG_from_scratch/Paths") }}
