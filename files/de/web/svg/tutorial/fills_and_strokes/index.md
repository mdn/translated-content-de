---
title: Fills und Strokes
slug: Web/SVG/Tutorial/Fills_and_Strokes
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}

Es gibt mehrere Möglichkeiten, Formen zu färben (einschließlich der Spezifizierung von Attributen am Objekt) unter Verwendung von inline [CSS](/de/docs/Glossary/CSS), einem eingebetteten CSS-Abschnitt oder einer externen CSS-Datei. Die meisten [SVG](/de/docs/Glossary/SVG), die Sie im Web finden, verwenden inline CSS, aber es gibt Vor- und Nachteile, die mit jedem Typ verbunden sind.

## Fill- und Stroke-Attribute

### Malen

Grundlegende Farbgebung kann erreicht werden, indem zwei Attribute am Knoten gesetzt werden: `fill` und `stroke`. Mit `fill` wird die Farbe innerhalb des Objekts gesetzt, und `stroke` setzt die Farbe der Linie, die um das Objekt gezeichnet wird. Sie können dieselben CSS-Farbbenennungen verwenden, die Sie in HTML verwenden, sei es Farbnamen (wie `red`), rgb-Werte (wie `rgb(255 0 0)`), hex-Werte usw.

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

Darüber hinaus können Sie die Deckkraft von entweder `fill` oder `stroke` separat in SVG angeben. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Stroke

Zusätzlich zu seinen Farbeigenschaften gibt es einige andere Attribute, die verfügbar sind, um zu steuern, wie ein Stroke auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap ändert das Aussehen der Enden dieser Linien: square fügt einen quadratischen Abschluss hinzu, round bietet einen abgerundeten Abschluss, und butt entfernt die Abschlüsse](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Das `stroke-width`-Attribut definiert die Breite dieses Strokes. Strokes werden zentriert um den Pfad gezeichnet. Im obigen Beispiel wird der Pfad in Pink gezeigt und der Stroke in Schwarz.

Das zweite Attribut, das Strokes beeinflusst, ist das `stroke-linecap`-Attribut, wie oben demonstriert. Dies steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einem geraden Rand ab, der normal (im 90-Grad-Winkel) zur Richtung des Strokes ist und dessen Ende kreuzt.
- `square` hat im Wesentlichen das gleiche Erscheinungsbild, dehnt jedoch den Stroke etwas über den tatsächlichen Pfad hinaus. Die Strecke, die der Stroke über den Pfad hinausgeht, beträgt die Hälfte der `stroke-width`.
- `round` erzeugt einen abgerundeten Effekt am Ende des Strokes. Der Radius dieser Kurve wird ebenfalls durch die `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu kontrollieren, wie die Verbindung zwischen zwei Liniensegmenten gezeichnet wird.

![Das Attribut stroke-linejoin ändert das Aussehen an dem Punkt, an dem sich zwei Linien verbinden, wobei miter eine abgewinkelte Verbindung erzeugt, round die Ecke abrundet und bevel eine abgeschrägte Kante erzeugt, die die Ecke abflacht.](svg_stroke_linejoin_example.png)

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

Jede dieser Polylinien hat zwei Segmente. Die Verbindung, an der sich die beiden treffen, wird durch das `stroke-linejoin`-Attribut gesteuert. Für dieses Attribut gibt es drei mögliche Werte. `miter` verlängert die Linie leicht über ihre normale Breite hinaus, um eine quadratische Ecke zu erzeugen, bei der nur ein Winkel verwendet wird. `round` erzeugt ein abgerundetes Liniensegment. `bevel` erstellt einen neuen Winkel, um den Übergang zwischen den beiden Segmenten zu erleichtern.

Schließlich können Sie auch gestrichelte Linientypen auf einem Stroke verwenden, indem Sie das `stroke-dasharray`-Attribut spezifizieren.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßig verteilten Strichen und eine andere mit einem Langstrich-Kurzstrich unter Verwendung eines stroke-dasharray-Attributwerts.](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das `stroke-dasharray`-Attribut kann eine Reihe von durch Kommas und/oder Leerzeichen getrennten Zahlen als Argument annehmen.

Die erste Zahl gibt einen Abstand für den gefüllten Bereich an, und die zweite einen Abstand für den ungefüllten Bereich. Im obigen Beispiel füllt der zweite Pfad 5 Pixeleinheiten und hat 5 leere Einheiten bis zum nächsten Strich von 5 Einheiten. Sie können mehr Zahlen angeben, wenn Sie ein komplizierteres Strichmuster wünschen. Das erste Beispiel gibt drei Zahlen an, in welchem Fall der Renderer die Zahlen zweimal durchläuft, um ein gleichmäßiges Muster zu erstellen. Der erste Pfad rendert also 5 gefüllte, 10 leere, 5 gefüllte und wiederholt dann, um 5 leere, 10 gefüllte, 5 leere zu erstellen. Das Muster wiederholt sich dann.

Es gibt zusätzliche `stroke`- und `fill`-Eigenschaften, einschließlich `fill-rule`, die spezifiziert, wie Formen eingefärbt werden, die sich selbst überlappen; [`stroke-miterlimit`](/de/docs/Web/SVG/Attribute/stroke-miterlimit), die festlegt, ob ein Stroke Mitren zeichnen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Attribute/stroke-dashoffset), der festlegt, wo eine Strichmusterreihe auf einer Linie beginnen soll.

### Malreihenfolge

Die Reihenfolge, in der `fill` und `stroke` gemalt werden, kann mit dem [`paint-order`](/de/docs/Web/SVG/Attribute/paint-order)-Attribut gesteuert werden.

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

Im Fall der ersten Form wurde der `fill` vor dem `stroke` gerendert, sodass der schwarze `stroke` über dem `fill` erscheint.
Im Fall der zweiten Form wurde der `stroke` vor dem `fill` gerendert.

## Verwendung von CSS

Zusätzlich zum Setzen von Attributen auf Objekten können Sie auch CSS verwenden, um Füllungen und Strokes zu stylen. Nicht alle Attribute können über CSS gesetzt werden. Attribute, die sich mit Malen und Füllen beschäftigen, sind normalerweise verfügbar, sodass `fill`, `stroke`, `stroke-dasharray` usw. auf diese Weise festgelegt werden können, zusätzlich zu den unten gezeigten Gradienten- und Muster-Versionen. Attribute wie `width`, `height` oder {{SVGElement("path")}}-Befehle können nicht über CSS gesetzt werden. Es ist am einfachsten, einfach zu testen und herauszufinden, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://www.w3.org/TR/SVG/propidx.html) unterscheidet streng zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Erstere können mit CSS modifiziert werden, letztere nicht.

CSS kann inline mit dem Element über das `style`-Attribut eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann in einen speziellen Stilabschnitt verschoben werden, den Sie einfügen. Statt eines solchen Abschnitts in einen `<head>`-Bereich wie in HTML einzufügen, wird es in einem Bereich namens {{SVGElement("defs")}} eingefügt.

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

Das Verschieben von Styles in einen solchen Bereich kann es einfacher machen, Eigenschaften von großen Gruppen von Elementen anzupassen. Sie können auch Dinge wie die **`:hover` Pseudo-Klasse** verwenden, um Rollover-Effekte zu erzeugen:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

Sie können auch ein externes Stylesheet für Ihre CSS-Regeln durch die [normale XML-Stylesheet-Syntax](https://www.w3.org/TR/xml-stylesheet/) angeben:

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

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}
