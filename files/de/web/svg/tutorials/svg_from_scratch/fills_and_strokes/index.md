---
title: Fills und Strokes
slug: Web/SVG/Tutorials/SVG_from_scratch/Fills_and_strokes
l10n:
  sourceCommit: 8d0c8728f49f2a0577ca17910f2149d6dd36b37e
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Paths", "Web/SVG/Tutorials/SVG_from_scratch/Gradients") }}

Es gibt mehrere Möglichkeiten, Formen zu färben, einschließlich der Angabe von Attributen am Objekt, durch Verwendung von Inline-{{Glossary("CSS", "CSS")}}, einem eingebetteten CSS-Abschnitt oder einer externen CSS-Datei. Die meisten {{Glossary("SVG", "SVG")}}-Elemente, die Sie im Web finden, verwenden Inline-CSS, aber es gibt Vor- und Nachteile, die mit jedem Typ verbunden sind.

## Fill- und Stroke-Attribute

### Malen

Grundlegende Farbgebung kann erreicht werden, indem zwei Attribute am Knoten gesetzt werden: `fill` und `stroke`. Durch die Verwendung von `fill` wird die Farbe innerhalb des Objekts festgelegt und durch `stroke` wird die Farbe der Linie festgelegt, die um das Objekt gezeichnet wird. Sie können die gleichen CSS-Farbschema-Namen verwenden, die Sie in HTML verwenden, sei es Farbnamen (wie `red`), rgb-Werte (wie `rgb(255 0 0)`), Hex-Werte usw.

```html
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg">
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

Zusätzlich können Sie die Deckkraft von entweder `fill` oder `stroke` separat in SVG angeben. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Stroke

Zusätzlich zu den Eigenschaften der Farbe gibt es einige andere Attribute, um die Art und Weise zu steuern, wie ein Stroke auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap ändert das Aussehen der Enden eines Strokes: square fügt einen quadratischen Abschluss hinzu, round sorgt für einen abgerundeten Abschluss und butt entfernt den Abschluss](svg_stroke_linecap_example.png)

```xml
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Das Attribut `stroke-width` definiert die Breite dieses Strokes. Strokes werden zentriert um den Pfad gezeichnet. Im obigen Beispiel ist der Pfad in Pink und der Stroke in Schwarz dargestellt.

Das zweite Attribut, das Strokes betrifft, ist das Attribut `stroke-linecap`, das oben demonstriert wird. Dieses steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einer geraden Kante ab, die normal (im 90-Grad-Winkel) zur Richtung des Strokes ist und dessen Ende überquert.
- `square` hat im Wesentlichen das gleiche Erscheinungsbild, verlängert jedoch den Stroke leicht über den tatsächlichen Pfad hinaus. Die Entfernung, die der Stroke über den Pfad hinausgeht, beträgt die Hälfte der `stroke-width`.
- `round` erzeugt einen abgerundeten Effekt am Ende des Strokes. Der Radius dieser Kurve wird ebenfalls durch das `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu steuern, wie die Verbindung zwischen zwei Liniensegmenten gezeichnet wird.

![Das Attribut stroke-linejoin ändert das Aussehen an dem Punkt, an dem zwei Linien verbunden werden, wobei miter eine winkelige Verbindung erstellt, round die Ecke abrundet und bevel eine abgeflachte Kante schafft, die Ecke abflacht.](svg_stroke_linejoin_example.png)

```xml
<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg">
  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"
      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>

  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"
      stroke-linecap="round" fill="none" stroke-linejoin="round"/>

  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"
      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>
</svg>
```

Jede dieser Polylinien hat zwei Segmente. Die Verbindung, an der die beiden zusammentreffen, wird durch das Attribut `stroke-linejoin` gesteuert. Es gibt drei mögliche Werte für dieses Attribut. `miter` verlängert die Linie leicht über ihre normale Breite hinaus, um eine rechteckige Ecke zu schaffen, bei der nur ein Winkel verwendet wird. `round` schafft ein abgerundetes Liniensegment. `bevel` schafft einen neuen Winkel, um den Übergang zwischen den beiden Segmenten zu erleichtern.

Schließlich können Sie auch gestrichelte Linientypen auf einem Stroke verwenden, indem Sie das Attribut `stroke-dasharray` angeben.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßig verteilten Strichen und die andere mit einem langen Strich kurzen Strich durch ein stroke-dasharray Attributswert.](svg_stroke_dasharray_example.png)

```xml
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das Attribut `stroke-dasharray` kann eine Reihe von durch Komma und/oder Leerzeichen getrennten Zahlen als Argument aufnehmen.

Die erste Zahl gibt eine Entfernung für den gefüllten Bereich an, und die zweite eine Entfernung für den ungefüllten Bereich. Im obigen Beispiel füllt der zweite Pfad 5 Pixel-Einheiten, mit 5 leeren Einheiten bis zum nächsten Strich von 5 Einheiten. Sie können mehr Zahlen angeben, wenn Sie ein komplizierteres Strichmuster wünschen. Das erste Beispiel spezifiziert drei Zahlen, wobei der Renderer die Zahlen zweimal durchläuft, um ein gleichmäßiges Muster zu erzeugen. Der erste Pfad rendert also 5 gefüllt, 10 leer, 5 gefüllt, und schleift dann zurück, um 5 leer, 10 gefüllt, 5 leer zu erzeugen. Das Muster wiederholt sich dann.

Es gibt zusätzliche `stroke`- und `fill`-Eigenschaften, darunter `fill-rule`, das angibt, wie Formen gefärbt werden sollen, die sich selbst überlappen; [`stroke-miterlimit`](/de/docs/Web/SVG/Reference/Attribute/stroke-miterlimit), das bestimmt, ob ein Stroke Miters zeichnen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Reference/Attribute/stroke-dashoffset), das angibt, wo ein Strichmuster auf einer Linie beginnen soll.

### Farbauftrag

Die Reihenfolge, in der `fill` und `stroke` gemalt werden, kann mit dem [`paint-order`](/de/docs/Web/SVG/Reference/Attribute/paint-order) Attribut gesteuert werden.

```html
<svg width="400" height="180" xmlns="http://www.w3.org/2000/svg">
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

Im Fall der ersten Form wurde `fill` vor `stroke` gerendert, daher erscheint der schwarze Stroke über `fill`.
Im Fall der zweiten Form wurde `stroke` vor `fill` gerendert.

## Verwendung von CSS

Zusätzlich zum Setzen von Attributen an Objekten können Sie auch CSS verwenden, um Füllungen und Striche zu stylen. Nicht alle Attribute können über CSS gesetzt werden. Attribute, die sich mit Malen und Füllen beschäftigen, sind in der Regel verfügbar, sodass `fill`, `stroke`, `stroke-dasharray` usw. auf diese Weise gesetzt werden können, zusätzlich zu den unten gezeigten Versionen von Verläufen und Mustern. Attribute wie `width`, `height` oder {{SVGElement("path")}}-Befehle können nicht über CSS gesetzt werden. Es ist am einfachsten, einfach zu testen, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://w3c.github.io/svgwg/svg2-draft/propidx.html) unterscheidet strikt zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Erstere können mit CSS modifiziert werden, letztere nicht.

CSS kann inline mit dem Element über das Attribut `style` eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann in einen speziellen Style-Abschnitt verschoben werden, den Sie einfügen. Anstatt einen solchen Abschnitt in einen `<head>`-Abschnitt wie in HTML zu verschieben, wird er in einem Bereich namens {{SVGElement("defs")}} eingefügt.

{{SVGElement("defs")}} steht für Definitionen, und hier können Sie Elemente erstellen, die nicht direkt im SVG erscheinen, sondern von anderen Elementen verwendet werden.

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
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

Das Verschieben von Stilen in einen solchen Bereich kann es einfacher machen, Eigenschaften in großen Gruppen von Elementen anzupassen. Sie können auch Dinge wie die **`:hover` Pseudo-Klasse** verwenden, um Roll-over-Effekte zu erzeugen:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

Sie können auch ein externes Stylesheet für Ihre CSS-Regeln durch die [normale XML-stylesheet-Syntax](https://www.w3.org/TR/xml-stylesheet/) angeben:

```xml
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg">
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
