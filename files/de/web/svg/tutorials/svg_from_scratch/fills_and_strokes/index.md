---
title: Füllungen und Umrandungen
slug: Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}

Es gibt mehrere Möglichkeiten, Formen zu färben (einschließlich der Angabe von Attributen am Objekt) unter Verwendung von inline {{Glossary("CSS", "CSS")}}, einem eingebetteten CSS-Abschnitt oder einer externen CSS-Datei. Die meisten {{Glossary("SVG", "SVG")}}, die Sie im Web finden, verwenden inline CSS, aber es gibt Vor- und Nachteile, die mit jedem Typ verbunden sind.

## Füll- und Umrandungsattribute

### Malen

Einfaches Färben kann durch Setzen von zwei Attributen am Knoten erfolgen: `fill` und `stroke`. Mit `fill` wird die Farbe im Inneren des Objekts festgelegt und `stroke` setzt die Farbe der Linie um das Objekt herum. Sie können die gleichen CSS-Farbbenennungsschemata verwenden, die Sie in HTML verwenden, ob das Farbnamen sind (wie `red`), RGB-Werte (wie `rgb(255 0 0)`), Hex-Werte usw.

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

Zusätzlich können Sie die Deckkraft für entweder `fill` oder `stroke` separat im SVG spezifizieren. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Umrandung

Zusätzlich zu den Farbeigenschaften gibt es noch einige andere Attribute, die die Art und Weise steuern, wie eine Umrandung auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap ändert das Aussehen dieser Linienenden: square fügt eine quadratische Kappe hinzu, round sorgt für eine abgerundete Kappe und butt entfernt die Kappen.](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Die Eigenschaft `stroke-width` definiert die Breite dieser Umrandung. Umrandungen werden zentriert um den Pfad gezeichnet. Im obigen Beispiel ist der Pfad in Pink dargestellt, und die Umrandung in Schwarz.

Das zweite Attribut, das Umrandungen beeinflusst, ist die Eigenschaft `stroke-linecap`, wie oben gezeigt. Dies steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einer geraden Kante ab, die normal (im 90-Grad-Winkel) zur Richtung der Umrandung steht und ihr Ende kreuzt.
- `square` hat im Wesentlichen dasselbe Aussehen, streckt jedoch die Umrandung leicht über den tatsächlichen Pfad hinaus. Der Abstand, den die Umrandung über den Pfad hinausgeht, ist die Hälfte der `stroke-width`.
- `round` erzeugt einen abgerundeten Effekt am Ende der Umrandung. Der Radius dieser Kurve wird ebenfalls durch die `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu steuern, wie die Verbindung zwischen zwei Liniensegmenten gezeichnet wird.

![Das Attribut stroke-linejoin ändert das Aussehen an dem Punkt, an dem zwei Linien sich treffen, mit miter, das eine eckige Verbindung schafft, round, das die Ecke abrundet, und bevel, das eine abgeschrägte Kante schafft, die die Ecke abflacht.](svg_stroke_linejoin_example.png)

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

Jede dieser Polylinien hat zwei Segmente. Die Verbindung, an der sich die beiden treffen, wird durch das `stroke-linejoin` Attribut gesteuert. Es gibt drei mögliche Werte für dieses Attribut. `miter` erstreckt die Linie leicht über ihre normale Breite hinaus, um eine eckige Ecke zu schaffen, bei der nur ein Winkel verwendet wird. `round` erstellt ein abgerundetes Liniensegment. `bevel` erzeugt einen neuen Winkel, um den Übergang zwischen beiden Segmenten zu erleichtern.

Schließlich können Sie auch gestrichelte Linientypen verwenden, indem Sie das Attribut `stroke-dasharray` angeben.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßig verteilten Strichen und die andere mit einem langen und einem kurzen Strich unter Verwendung eines stroke-dasharray Attributwertes.](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das `stroke-dasharray` Attribut kann eine Reihe von durch Kommas und/oder Leerzeichen getrennten Zahlen als Argument annehmen.

Die erste Zahl gibt eine Entfernung für den gefüllten Bereich an und die zweite eine Entfernung für den ungefüllten Bereich. So füllt im obigen Beispiel der zweite Pfad 5 Pixeleinheiten, mit 5 leeren Einheiten bis zum nächsten Strich von 5 Einheiten. Sie können mehr Zahlen angeben, wenn Sie ein komplizierteres Strichmuster wünschen. Das erste Beispiel gibt drei Zahlen an, in diesem Fall wiederholt der Renderer die Zahlen zweimal, um ein gleichmäßiges Muster zu erstellen. So rendert der erste Pfad 5 gefüllt, 10 leer, 5 gefüllt, und wiederholt sich dann, um 5 leer, 10 gefüllt, 5 leer zu erstellen. Das Muster wiederholt sich dann.

Es gibt zusätzliche `stroke` und `fill` Eigenschaften, einschließlich `fill-rule`, das spezifiziert, wie sich selbst überlappende Formen gefüllt werden sollen; [`stroke-miterlimit`](/de/docs/Web/SVG/Reference/Attribute/stroke-miterlimit), das bestimmt, ob eine Umrandung Kanten ziehen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Reference/Attribute/stroke-dashoffset), das angibt, wo eine Strichmuster auf einer Linie starten soll.

### Malreihenfolge

Die Reihenfolge, in der Füllung und Umrandung gezeichnet werden, kann mit dem Attribut [`paint-order`](/de/docs/Web/SVG/Reference/Attribute/paint-order) gesteuert werden.

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

Im Fall der ersten Form wurde die Füllung vor der Umrandung gerendert, sodass die schwarze Umrandung über der Füllung erscheint. Im Fall der zweiten Form wurde die Umrandung vor der Füllung gerendert.

## Verwendung von CSS

Neben dem Setzen von Attributen auf Objekten können Sie auch CSS verwenden, um Füllungen und Umrandungen zu stylen. Nicht alle Attribute können über CSS festgelegt werden. Attribute, die sich mit Malen und Füllen beschäftigen, sind normalerweise verfügbar, also können `fill`, `stroke`, `stroke-dasharray`, usw. auf diese Weise gesetzt werden, zusätzlich zu den unten gezeigten Gradienten- und Musterversionen davon. Attribute wie `width`, `height` oder {{SVGElement("path")}} Befehle können nicht durch CSS gesetzt werden. Es ist am einfachsten, einfach zu testen und herauszufinden, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://svgwg.org/svg2-draft/propidx.html) unterscheidet strikt zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Erstere können mit CSS geändert werden, letzteres nicht.

CSS kann inline mit dem Element über das `style` Attribut eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann zu einem speziellen Stilabschnitt verschoben werden, den Sie einfügen. Anstatt einen solchen Abschnitt in einen `<head>` Bereich wie in HTML zu werfen, wird er in einem Bereich namens {{SVGElement("defs")}} enthalten.

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

Das Verschieben von Stilen in einen solchen Bereich kann es leichter machen, Eigenschaften in großen Elementgruppen anzupassen. Sie können auch Dinge wie die **`:hover` Pseudo-Klasse** verwenden, um Rollover-Effekte zu erstellen:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

Sie können auch ein externes Stylesheet für Ihre CSS-Regeln mit der [normalen XML-Stylesheet-Syntax](https://www.w3.org/TR/xml-stylesheet/) angeben:

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

Wobei `style.css` ungefähr so aussieht:

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}
