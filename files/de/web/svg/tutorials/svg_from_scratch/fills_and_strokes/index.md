---
title: Füllungen und Umrandungen
slug: Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}

Es gibt verschiedene Möglichkeiten, Formen zu kolorieren (einschließlich dem Setzen von Attributen auf dem Objekt) mittels inline {{Glossary("CSS", "CSS")}}, einem eingebetteten CSS-Bereich oder einer externen CSS-Datei. Die meisten {{Glossary("SVG", "SVG")}}-Dateien, die Sie im Web finden, verwenden Inline-CSS, aber es gibt Vor- und Nachteile, die mit jeder Art verbunden sind.

## Füll- und Umrandungsattribute

### Malen

Grundlegende Kolorierungen können durch das Setzen von zwei Attributen am Knoten vorgenommen werden: `fill` und `stroke`. Durch die Verwendung von `fill` wird die Farbe innerhalb des Objekts gesetzt und `stroke` setzt die Farbe der Linie um das Objekt herum. Sie können die gleichen CSS-Farbbenennungsschemata verwenden, die Sie in HTML verwenden, sei es Farbnamen (wie `red`), RGB-Werte (wie `rgb(255 0 0)`), Hex-Werte, etc.

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

Zusätzlich können Sie die Opazität entweder der `fill`- oder `stroke`-Attribute separat in SVG festlegen. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Umrandung

Zusätzlich zu den Farbeigenschaften gibt es einige andere Attribute, die die Art und Weise kontrollieren, wie eine Umrandung auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap ändert das Aussehen der Enden dieser Umrandung: square fügt ein quadratisches Ende hinzu, round sorgt für ein abgerundetes Ende, und butt entfernt das Ende](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Die Eigenschaft `stroke-width` definiert die Breite dieser Umrandung. Umrandungen werden zentriert um den Pfad gezeichnet. Im obigen Beispiel ist der Pfad rosa dargestellt, und die Umrandung in schwarz.

Das zweite Attribut, das Umrandungen beeinflusst, ist die Eigenschaft `stroke-linecap`, die oben gezeigt wurde. Diese steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einer geraden Kante ab, die normal (in 90 Grad) zur Richtung der Umrandung ist und ihr Ende kreuzt.
- `square` hat im Wesentlichen das gleiche Aussehen, aber es verlängert die Umrandung leicht über den tatsächlichen Pfad hinaus. Die Entfernung, die die Umrandung über den Pfad hinausgeht, beträgt die Hälfte der `stroke-width`.
- `round` erzeugt einen abgerundeten Effekt am Ende der Umrandung. Der Radius dieser Kurve wird ebenfalls von der `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu steuern, wie die Verbindung zwischen zwei Liniensementen gezeichnet wird.

![Das Attribut stroke-linejoin ändert das Aussehen am Punkt, an dem zwei Linien sich verbinden, miter erstellt eine abgewinkelte Verbindung, round rundet die Ecke ab, und bevel erzeugt eine abgeschrägte Kante, die die Ecke abflacht.](svg_stroke_linejoin_example.png)

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

Jede dieser Polylinien hat zwei Segmente. Die Verbindung, an der die beiden sich treffen, wird durch das Attribut `stroke-linejoin` gesteuert. Es gibt drei mögliche Werte für dieses Attribut. `miter` verlängert die Linie leicht außerhalb ihrer normalen Breite, um eine quadratische Ecke zu bilden, bei der nur ein Winkel verwendet wird. `round` erzeugt ein abgerundetes Liniensegment. `bevel` erzeugt einen neuen Winkel, um den Übergang zwischen den beiden Segmenten zu erleichtern.

Schließlich können Sie auch gestrichelte Linientypen bei einer Umrandung verwenden, indem Sie das Attribut `stroke-dasharray` festlegen.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßig verteilten Strichen und die andere verwendet abwechselnd lange und kurze Striche mit einem Wert für das Attribut stroke-dasharray.](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das Attribut `stroke-dasharray` kann eine Reihe von Kommata und/oder durch Leerzeichen getrennte Zahlen als Argument verwenden.

Die erste Zahl gibt eine Distanz für den gefüllten Bereich an, und die zweite eine Distanz für den ungefüllten Bereich. So in dem obigen Beispiel, füllt der zweite Pfad 5 Pixel-Einheiten, mit 5 leeren Einheiten bis zum nächsten Strich von 5 Einheiten. Wenn Sie ein komplizierteres Strichmuster möchten, können Sie mehr Zahlen angeben. Das erste Beispiel gibt drei Zahlen an, in diesem Fall schleift der Renderer die Zahlen zweimal, um ein gleichmäßiges Muster zu erstellen. Der erste Pfad rendert also 5 gefüllt, 10 leer, 5 gefüllt und schleift dann zurück, um 5 leer, 10 gefüllt, 5 leer zu erstellen. Das Muster wiederholt sich dann.

Es gibt zusätzliche `stroke`- und `fill`-Eigenschaften, einschließlich `fill-rule`, die spezifiziert, wie Formen gefärbt werden, die sich selbst überschneiden; [`stroke-miterlimit`](/de/docs/Web/SVG/Reference/Attribute/stroke-miterlimit), das bestimmt, ob eine Umrandung Kanten zeichnen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Reference/Attribute/stroke-dashoffset), das spezifiziert, wo bei einer Linie eine gestrichelte Reihe beginnen soll.

### Malreihenfolge

Die Reihenfolge, in der Füllung und Umrandung gemalt werden, kann durch das Attribut [`paint-order`](/de/docs/Web/SVG/Reference/Attribute/paint-order) gesteuert werden.

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

Im Fall der ersten Form wurde die Füllung vor der Umrandung gerendert, daher erscheint die schwarze Umrandung über der Füllung. Im Fall der zweiten Form wurde die Umrandung vor der Füllung gerendert.

## Verwendung von CSS

Zusätzlich zum Setzen von Attributen auf Objekten können Sie auch CSS verwenden, um Füllungen und Umrandungen zu gestalten. Nicht alle Attribute können über CSS gesetzt werden. Attribute, die sich mit Malen und Füllen befassen, sind in der Regel verfügbar, somit können `fill`, `stroke`, `stroke-dasharray` etc. auf diese Weise gesetzt werden, zusätzlich zu den unten gezeigten Verlaufs- und Musterversionen. Attribute wie `width`, `height` oder {{SVGElement("path")}}-Befehle können nicht durch CSS gesetzt werden. Es ist am einfachsten, einfach zu testen, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://www.w3.org/TR/SVG/propidx.html) unterscheidet streng zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Erstere können mit CSS modifiziert werden, Letztere nicht.

CSS kann inline mit dem Element über das `style`-Attribut eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann in einen speziellen Stilbereich verschoben werden, den Sie einbeziehen. Anstatt einen solchen Bereich in einen `<head>`-Bereich wie in HTML zu schieben, ist er in einem Bereich namens {{SVGElement("defs")}} enthalten.

{{SVGElement("defs")}} steht für Definitionen, und hier können Sie Elemente erstellen, die nicht direkt im SVG erscheinen, sondern von anderen Elementen verwendet werden.

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

Das Verschieben von Stilen in einen solchen Bereich kann es erleichtern, Eigenschaften bei großen Gruppen von Elementen anzupassen. Sie können auch Dinge verwenden wie die **`:hover` Pseudo-Klasse**, um Rollover-Effekte zu erstellen:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

Sie können auch ein externes Stylesheet für Ihre CSS-Regeln durch den [normalen XML-Stylesheet-Syntax](https://www.w3.org/TR/xml-stylesheet/) angeben:

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
