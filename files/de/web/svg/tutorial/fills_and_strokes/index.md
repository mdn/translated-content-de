---
title: Füllungen und Umrandungen
slug: Web/SVG/Tutorial/Fills_and_Strokes
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}

Es gibt mehrere Möglichkeiten, Formen zu färben (einschließlich der Angabe von Attributen am Objekt) unter Verwendung von Inline-[CSS](/de/docs/Glossary/CSS), einem eingebetteten CSS-Bereich oder einer externen CSS-Datei. Die meisten [SVGs](/de/docs/Glossary/SVG), die Sie im Web finden, verwenden Inline-CSS, aber es gibt Vor- und Nachteile, die mit jedem Typ verbunden sind.

## Füll- und Umrandungsattribute

### Malen

Grundlegende Färbung kann durch Setzen von zwei Attributen am Knoten erfolgen: `fill` und `stroke`. Mit `fill` wird die Innenfarbe des Objekts festgelegt und `stroke` legt die Farbe der Linie fest, die um das Objekt herum gezeichnet wird. Sie können dieselben CSS-Farbschemata verwenden, die Sie in HTML verwenden, sei es Farbennamen (wie `red`), RGB-Werte (wie `rgb(255 0 0)`), Hex-Werte usw.

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

Zusätzlich können Sie die Deckkraft von `fill` oder `stroke` in SVG separat festlegen. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Umrandung

Zusätzlich zu den Farbeigenschaften gibt es ein paar andere Attribute, mit denen Sie steuern können, wie eine Umrandung auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap verändert das Aussehen der Enden von diesen Umrandungen: square fügt eine quadratische Kappe hinzu, round sorgt für eine abgerundete Kappe und butt entfernt die Kappung](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Das `stroke-width`-Eigenschaft definiert die Breite dieser Umrandung. Umrandungen werden zentriert um den Pfad gezeichnet. Im obigen Beispiel wird der Pfad in Pink gezeigt, und die Umrandung in Schwarz.

Das zweite Attribut, das Umrandungen beeinflusst, ist das `stroke-linecap`-Eigenschaft, wie oben dargestellt. Es steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einer geraden Kante ab, die normal (im 90-Grad-Winkel) zur Richtung der Umrandung steht und deren Ende überkreuzt.
- `square` hat im Wesentlichen das gleiche Aussehen, streckt jedoch die Umrandung leicht über den tatsächlichen Pfad hinaus. Die Entfernung, die die Umrandung über den Pfad hinausgeht, entspricht der Hälfte der `stroke-width`.
- `round` erzeugt einen abgerundeten Effekt am Ende der Umrandung. Der Radius dieser Kurve wird ebenfalls durch `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu steuern, wie der Übergang zwischen zwei Liniensegmenten gezeichnet wird.

![Das Attribut stroke-linejoin verändert das Aussehen an dem Punkt, an dem zwei Linien zusammentreffen, indem miter eine rechtwinklige Verbindung erstellt, round die Ecke abrundet und bevel eine abgeschrägte Kante erstellt und die Ecke abflacht.](svg_stroke_linejoin_example.png)

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

Jede dieser Polylinien hat zwei Segmente. Der Übergang, wo die beiden sich treffen, wird durch das Attribut `stroke-linejoin` gesteuert. Es gibt drei mögliche Werte für dieses Attribut. `miter` verlängert die Linie leicht über ihre normale Breite hinaus, um eine eckige Ecke zu schaffen, bei der nur ein Winkel verwendet wird. `round` erzeugt ein abgerundetes Liniensegment. `bevel` erzeugt einen neuen Winkel, um den Übergang zwischen den beiden Segmenten zu unterstützen.

Schließlich können Sie auch Stricharten mit gestrichelten Linien auf einer Umrandung verwenden, indem Sie das `stroke-dasharray`-Attribut angeben.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßig verteilten Strichen und die andere mit einer langen Strichkurzstrich-Darstellung mit einem stroke-dasharray-Attributwert.](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das `stroke-dasharray`-Attribut kann eine Reihe von kommagetrennten und/oder durch Leerzeichen getrennten Zahlen als Argument annehmen.

Die erste Zahl gibt eine Entfernung für den gefüllten Bereich an, und die zweite eine Entfernung für den ungefüllten Bereich. Im obigen Beispiel füllt der zweite Pfad 5 Pixeleinheiten, mit 5 leeren Einheiten bis zum nächsten Strich von 5 Einheiten. Sie können mehr Zahlen angeben, wenn Sie ein komplizierteres Strichmuster möchten. Das erste Beispiel gibt drei Zahlen an, in welchem Fall der Renderer die Zahlen zweimal wiederholt, um ein gleichmäßiges Muster zu erzeugen. So rendert der erste Pfad 5 gefüllte, 10 leere, 5 gefüllte und wiederholt dann 5 leere, 10 gefüllte, 5 leere. Das Muster wird dann erneut wiederholt.

Es gibt zusätzliche `stroke`- und `fill`-Eigenschaften, darunter `fill-rule,` das angibt, wie sich selbst überlappende Formen gefärbt werden sollen; [`stroke-miterlimit`](/de/docs/Web/SVG/Attribute/stroke-miterlimit), das bestimmt, ob eine Umrandung Ecken zeichnen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Attribute/stroke-dashoffset), das angibt, wo ein Strich-Typ auf einer Linie beginnen soll.

### Reihenfolge der Farbauftragung

Die Reihenfolge, in der Füllungen und Umrandungen aufgetragen werden, kann mit dem [`paint-order`](/de/docs/Web/SVG/Attribute/paint-order) Attribut gesteuert werden.

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

Im Fall der ersten Form wurde die Füllung vor der Umrandung gerendert, sodass die schwarze Umrandung über der Füllung erscheint.
Im Fall der zweiten Form wurde die Umrandung vor der Füllung gerendert.

## Verwendung von CSS

Neben dem Setzen von Attributen an Objekten können Sie auch CSS verwenden, um Füllungen und Umrandungen zu gestalten. Nicht alle Attribute können über CSS gesetzt werden. Attribute, die mit Malen und Füllen zu tun haben, sind normalerweise verfügbar, sodass `fill`, `stroke`, `stroke-dasharray` usw. auf diese Weise gesetzt werden können, zusätzlich zu den unten gezeigten Farbverlauf- und Muster-Versionen davon. Attribute wie `width`, `height`, oder {{SVGElement("path")}}-Befehle können nicht über CSS gesetzt werden. Es ist am einfachsten, es einfach auszuprobieren und herauszufinden, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://www.w3.org/TR/SVG/propidx.html) unterscheidet strikt zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Erstere können mit CSS modifiziert werden, letztere nicht.

CSS kann inline mit dem Element über das `style`-Attribut eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann in einen speziellen Stilbereich verschoben werden, den Sie einfügen. Anstatt einen solchen Bereich in einen `<head>`-Bereich wie in HTML einzufügen, wird er in einem Bereich namens {{SVGElement("defs")}} eingefügt.

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

Das Verschieben von Stilen in einen Bereich wie diesen kann es einfacher machen, Eigenschaften für große Gruppen von Elementen anzupassen. Sie können auch Dinge wie die **`:hover`-Pseudoklasse** verwenden, um Überblendeffekte zu erstellen:

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

Wo `style.css` ungefähr so aussieht:

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}
