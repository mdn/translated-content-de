---
title: Füllungen und Konturen
slug: Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes
l10n:
  sourceCommit: d559e66723de93ce6c59eb5d22a29afca7265c2a
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}

Es gibt mehrere Möglichkeiten, Formen zu färben (einschließlich der Angabe von Attributen am Objekt) mithilfe von inline {{Glossary("CSS", "CSS")}}, eines eingebetteten CSS-Abschnitts oder einer externen CSS-Datei. Die meisten {{Glossary("SVG", "SVG")}}, die Sie im Web finden werden, nutzen inline CSS, aber es gibt Vor- und Nachteile, die mit jedem Typ verbunden sind.

## Füll- und Konturattribute

### Malen

Grundlegendes Färben kann durch Festlegen von zwei Attributen am Knoten erfolgen: `fill` und `stroke`. Durch die Verwendung von `fill` wird die Farbe innerhalb des Objekts festgelegt und `stroke` legt die Farbe der Linie fest, die um das Objekt gezeichnet wird. Sie können dieselben CSS-Farbbenennungsschemata verwenden, die Sie in HTML verwenden, sei es Farbnamen (wie `red`), RGB-Werte (wie `rgb(255 0 0)`), Hex-Werte usw.

```html
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect
    x="10"
    y="10"
    width="100"
    height="100"
    stroke="blue"
    fill="purple"
    fill-opacity="0.5"
    stroke-opacity="0.8"
    stroke-width="15" />
</svg>
```

{{EmbedLiveSample("Painting", "100%", 150)}}

Zusätzlich können Sie die Deckkraft von entweder `fill` oder `stroke` in SVG separat spezifizieren. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Kontur

Zusätzlich zu seinen Farbeigenschaften gibt es einige andere Attribute, die steuern, wie eine Kontur auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap verändert das Aussehen der Enden dieser Konturen: square fügt eine quadratische Kappe hinzu, round bietet eine abgerundete Kappe, und butt entfernt die Kappen.](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Das `stroke-width`-Attribut definiert die Breite dieser Kontur. Konturen werden zentriert um den Pfad gezeichnet. Im obigen Beispiel ist der Pfad in pink dargestellt und die Kontur in schwarz.

Das zweite Attribut, das die Konturen beeinflusst, ist das `stroke-linecap`-Attribut, wie oben gezeigt. Dieses steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einer geraden Kante ab, die normal (im 90-Grad-Winkel) zur Richtung der Kontur steht und ihr Ende kreuzt.
- `square` hat im Wesentlichen dasselbe Erscheinungsbild, streckt jedoch die Kontur leicht über den tatsächlichen Pfad hinaus. Der Abstand, den die Kontur über den Pfad hinausgeht, beträgt die Hälfte der `stroke-width`.
- `round` erzeugt einen gerundeten Effekt am Ende der Kontur. Der Radius dieser Kurve wird ebenfalls durch die `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu steuern, wie der Übergang zwischen zwei Liniensegmenten gezeichnet wird.

![Das Attribut stroke-linejoin verändert das Aussehen an dem Punkt, an dem zwei Linien zusammentreffen. Mit miter wird eine winklige Verbindung erzeugt, mit round wird die Ecke abgerundet, und bevel schafft eine abgeschrägte Kante, die die Ecke abflacht.](svg_stroke_linejoin_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```

Jede dieser Polylinien hat zwei Segmente. Die Verbindung, an der die beiden sich treffen, wird durch das `stroke-linejoin`-Attribut gesteuert. Es gibt drei mögliche Werte für dieses Attribut. `miter` verlängert die Linie leicht über ihre normale Breite hinaus, um eine quadratische Ecke zu schaffen, bei der nur ein Winkel verwendet wird. `round` erzeugt ein abgerundetes Liniensegment. `bevel` erzeugt einen neuen Winkel, um den Übergang zwischen den beiden Segmenten zu erleichtern.

Schließlich können Sie auch gestrichelte Linientypen auf einer Kontur verwenden, indem Sie das `stroke-dasharray`-Attribut angeben.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßig verteilten Strichen und die andere mit einem langen Strich, kurzen Strich mit einem stroke-dasharray Attributwert.](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das `stroke-dasharray`-Attribut kann eine Serie von durch Kommas und/oder Leerzeichen getrennten Zahlen als Argument annehmen.

Die erste Zahl gibt eine Entfernung für den gefüllten Bereich an, und die zweite eine Entfernung für den ungefüllten Bereich. Im obigen Beispiel füllt der zweite Pfad 5 Pixeleinheiten, mit 5 leeren Einheiten bis zum nächsten Strich von 5 Einheiten. Sie können mehr Zahlen angeben, wenn Sie ein komplizierteres Strichmuster wünschen. Das erste Beispiel gibt drei Zahlen an, in welchem Fall der Renderer die Zahlen zweimal durchläuft, um ein gleichmäßiges Muster zu erstellen. Der erste Pfad rendert also 5 gefüllt, 10 leer, 5 gefüllt und kehrt dann zurück, um 5 leer, 10 gefüllt, 5 leer zu erstellen. Das Muster wiederholt sich dann.

Es gibt zusätzliche `stroke`- und `fill`-Eigenschaften, einschließlich `fill-rule`, die angibt, wie sich selbst überschneidende Formen gefärbt werden sollen; [`stroke-miterlimit`](/de/docs/Web/SVG/Reference/Attribute/stroke-miterlimit), das bestimmt, ob eine Kontur Gehrungen zeichnen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Reference/Attribute/stroke-dashoffset), das angibt, wo ein Strichmuster auf einer Linie beginnen soll.

### Malreihenfolge

Die Reihenfolge, in der Füllung und Kontur gemalt werden, kann mit dem [`paint-order`](/de/docs/Web/SVG/Reference/Attribute/paint-order)-Attribut gesteuert werden.

```html
<?xml version="1.0" standalone="no"?>
<svg width="400" height="180" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <polyline
    points="40 80 80 40 120 80"
    stroke-width="15"
    stroke="black"
    fill="coral"
    paint-order="fill" />

  <polyline
    points="40 140 80 100 120 140"
    stroke-width="15"
    stroke="black"
    fill="coral"
    paint-order="stroke" />
</svg>
```

{{EmbedLiveSample("Paint order", "100%", 180)}}

Beim ersten Objekt wurde die Füllung vor der Kontur gerendert, sodass die schwarze Kontur über der Füllung erscheint. Beim zweiten Objekt wurde die Kontur vor der Füllung gerendert.

## Verwendung von CSS

Zusätzlich zum Setzen von Attributen an Objekten können Sie auch CSS verwenden, um Füllungen und Konturen zu gestalten. Nicht alle Attribute können über CSS gesetzt werden. Attribute, die sich mit Malen und Füllen befassen, sind normalerweise verfügbar, sodass `fill`, `stroke`, `stroke-dasharray` usw. auf diese Weise festgelegt werden können, zusätzlich zu den unten gezeigten Farbverlauf- und Musterversionen. Attribute wie `width`, `height` oder {{SVGElement("path")}}-Befehle können nicht über CSS festgelegt werden. Es ist am einfachsten, einfach zu testen und festzustellen, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://w3c.github.io/svgwg/svg2-draft/propidx.html) unterscheidet streng zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Erstere können mit CSS verändert werden, letztere nicht.

CSS kann inline mit dem Element über das `style`-Attribut eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann in einen speziellen Stilabschnitt verschoben werden, den Sie einfügen. Anstatt einen solchen Abschnitt in einen `<head>`-Abschnitt zu schieben, wie Sie es in HTML tun, wird er in einem Bereich namens {{SVGElement("defs")}} aufgenommen.

{{SVGElement("defs")}} steht für Definitionen, und hier können Sie Elemente erstellen, die nicht direkt im SVG erscheinen, aber von anderen Elementen verwendet werden.

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
         paint-order: stroke;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

Das Verschieben von Stilen in einen Bereich wie diesen kann es einfacher machen, Eigenschaften an großen Gruppen von Elementen anzupassen. Sie können auch Dinge wie die **`:hover`-Pseudoklasse** verwenden, um Rollover-Effekte zu erstellen:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

Sie können auch ein externes Stylesheet für Ihre CSS-Regeln über die [normale XML-Stylesheet-Syntax](https://www.w3.org/TR/xml-stylesheet/) angeben:

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

Wo `style.css` ungefähr so aussieht:

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}
