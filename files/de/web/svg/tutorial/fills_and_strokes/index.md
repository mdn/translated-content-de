---
title: Füllungen und Striche
slug: Web/SVG/Tutorial/Fills_and_Strokes
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}

Es gibt mehrere Möglichkeiten, Formen zu färben (einschließlich der Angabe von Attributen am Objekt) mithilfe von inline [CSS](/de/docs/Glossary/CSS), einem eingebetteten CSS-Bereich oder einer externen CSS-Datei. Die meisten [SVG](/de/docs/Glossary/SVG), die Sie im Web finden, verwenden Inline-CSS, aber es gibt Vor- und Nachteile bei jedem Typ.

## Füll- und Strichattribute

### Malen

Grundlegende Farbgebung kann durch das Setzen von zwei Attributen am Knoten erfolgen: `fill` und `stroke`. Mit `fill` wird die Farbe innerhalb des Objekts gesetzt und `stroke` legt die Farbe der Linie fest, die um das Objekt gezeichnet wird. Sie können die gleichen CSS-Farbbenennungsschemata verwenden, die Sie in HTML verwenden, sei es Farbnamen (wie `red`), RGB-Werte (wie `rgb(255 0 0)`), Hex-Werte usw.

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

Darüber hinaus können Sie die Opazität entweder der `fill` oder `stroke` separat in SVG steuern. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Strich

Zusätzlich zu den Farbeigenschaften gibt es einige andere Attribute, um zu steuern, wie ein Strich auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap verändert das Aussehen der Strichenden: square fügt eine quadratische Kappe hinzu, round sorgt für eine abgerundete Kappe, und butt entfernt die Kappe.](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Das Attribut `stroke-width` definiert die Breite dieses Strichs. Striche werden zentriert um den Pfad gezeichnet. Im obigen Beispiel wird der Pfad in Pink und der Strich in Schwarz dargestellt.

Das zweite Attribut, das die Striche beeinflusst, ist das Attribut `stroke-linecap`, das oben demonstriert wird. Dieses steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einer geraden Kante ab, die normal (im 90-Grad-Winkel) zur Richtung des Strichs steht und sein Ende überkreuzt.
- `square` hat im Wesentlichen das gleiche Erscheinungsbild, dehnt den Strich jedoch leicht über den tatsächlichen Pfad hinaus. Die Entfernung, die der Strich über den Pfad hinausgeht, beträgt die Hälfte der `stroke-width`.
- `round` erzeugt einen abgerundeten Effekt am Ende des Strichs. Der Radius dieser Kurve wird ebenfalls durch die `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu steuern, wie die Verbindung zwischen zwei Liniensegmenten gezeichnet wird.

![Das Attribut stroke-linejoin verändert das Aussehen an dem Punkt, an dem sich zwei Linien verbinden, wobei miter eine abgeschrägte Verbindung erzeugt, round die Ecke abrundet und bevel eine abgeschrägte Kante erzeugt und die Ecke abflacht.](svg_stroke_linejoin_example.png)

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

Jede dieser Polylinien hat zwei Segmente. Der Punkt, an dem sich die beiden treffen, wird durch das Attribut `stroke-linejoin` gesteuert. Es gibt drei mögliche Werte für dieses Attribut. `miter` verlängert die Linie leicht über ihre normale Breite hinaus, um eine quadratische Ecke zu erstellen, bei der nur ein Winkel verwendet wird. `round` erstellt ein abgerundetes Liniensegment. `bevel` erstellt einen neuen Winkel, um den Übergang zwischen den beiden Segmenten zu unterstützen.

Schließlich können Sie auch gestrichelte Linientypen auf einem Strich verwenden, indem Sie das Attribut `stroke-dasharray` angeben.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßigen Abständen und die andere mit einem langen Strich kurzen Strich mit einem Wert des stroke-dasharray-Attributs.](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das Attribut `stroke-dasharray` kann eine Reihe von Komma- und/oder leerzeichengetrennten Zahlen als Argument aufnehmen.

Die erste Zahl gibt eine Entfernung für den gefüllten Bereich an, und die zweite eine Entfernung für den ungefüllten Bereich. Im obigen Beispiel füllt der zweite Pfad 5 Pixel-Einheiten, mit 5 leeren Einheiten bis zum nächsten Strich von 5 Einheiten. Sie können mehr Zahlen angeben, wenn Sie ein komplizierteres Strichmuster wünschen. Das erste Beispiel gibt drei Zahlen an, wobei der Renderer die Zahlen zweimal durchläuft, um ein gleichmäßiges Muster zu erstellen. So rendert der erste Pfad 5 gefüllt, 10 leer, 5 gefüllt, und kehrt dann zurück, um 5 leer, 10 gefüllt, 5 leer zu erstellen. Das Muster wiederholt sich dann.

Es gibt zusätzliche `stroke` und `fill` Eigenschaften, einschließlich `fill-rule`, die angibt, wie Formen gefärbt werden sollen, die sich selbst überlappen; [`stroke-miterlimit`](/de/docs/Web/SVG/Attribute/stroke-miterlimit), die bestimmt, ob ein Strich Mitrels zeichnen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Attribute/stroke-dashoffset), die angibt, wo ein Stricharray auf einer Linie beginnen soll.

### Reihenfolge der Malerei

Die Reihenfolge, in der Füllung und Strich gemalt werden, kann mithilfe des Attributs [`paint-order`](/de/docs/Web/SVG/Attribute/paint-order) gesteuert werden.

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

Im Fall der ersten Form wurde die Füllung vor dem Strich gerendert, so dass der schwarze Strich über der Füllung erscheint.
Im Fall der zweiten Form wurde der Strich vor der Füllung gerendert.

## Verwendung von CSS

Zusätzlich zum Setzen von Attributen an Objekten können Sie auch CSS verwenden, um Füllungen und Striche zu stylen. Nicht alle Attribute können über CSS gesetzt werden. Attribute, die sich mit Malerei und Füllung befassen, sind normalerweise verfügbar, sodass `fill`, `stroke`, `stroke-dasharray` usw. auf diese Weise festgelegt werden können, zusätzlich zu den Verlauf- und Musterversionen, die unten gezeigt werden. Attribute wie `width`, `height` oder {{SVGElement("path")}}-Befehle können nicht über CSS gesetzt werden. Es ist am einfachsten, einfach zu testen und herauszufinden, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://www.w3.org/TR/SVG/propidx.html) unterscheidet strikt zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Die ersteren können mit CSS modifiziert werden, die letzteren nicht.

CSS kann inline mit dem Element über das Attribut `style` eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann in einen speziellen Stilbereich verschoben werden, den Sie einschließen. Anstatt diesen Bereich in einen `<head>`-Abschnitt wie im HTML zu schieben, wird er in einen Bereich eingefügt, der {{SVGElement("defs")}} genannt wird.

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

Das Verschieben von Stilen in einen Bereich wie diesen kann es einfacher machen, Eigenschaften für große Gruppen von Elementen anzupassen. Sie können auch Dinge wie die **`:hover`-Pseudoklasse** verwenden, um Roll-Effekte zu erstellen:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

Sie können auch ein externes Stylesheet für Ihre CSS-Regeln durch [normale XML-Stylesheet-Syntax](https://www.w3.org/TR/xml-stylesheet/) angeben:

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

Wo `style.css` etwa so aussieht:

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}
