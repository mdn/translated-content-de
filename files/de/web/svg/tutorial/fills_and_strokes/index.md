---
title: Fills und Strokes
slug: Web/SVG/Tutorial/Fills_and_Strokes
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}

Es gibt mehrere Möglichkeiten, Formen zu färben (einschließlich der Angabe von Attributen am Objekt) mithilfe von inline {{Glossary("CSS", "CSS")}}, einem eingebetteten CSS-Abschnitt oder einer externen CSS-Datei. Die meisten {{Glossary("SVG", "SVG")}}, die Sie im Internet finden, verwenden inline CSS, aber es gibt Vorteile und Nachteile im Zusammenhang mit jedem Typ.

## Fill- und Stroke-Attribute

### Malen

Grundfarben können durch Setzen von zwei Attributen am Knoten festgelegt werden: `fill` und `stroke`. Mit `fill` wird die Farbe innerhalb des Objekts festgelegt und mit `stroke` die Farbe der Linie, die um das Objekt gezeichnet wird. Sie können dieselben CSS-Farbschemata verwenden, die Sie in HTML verwenden, egal ob es sich um Farbnamen (wie `red`), RGB-Werte (wie `rgb(255 0 0)`), Hex-Werte usw. handelt.

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

Zusätzlich können Sie in SVG die Deckkraft von entweder `fill` oder `stroke` separat angeben. Diese werden durch die Attribute `fill-opacity` und `stroke-opacity` gesteuert.

### Stroke

Zusätzlich zu seinen Farbeigenschaften gibt es einige weitere Attribute, um zu steuern, wie ein Strich auf einer Linie gezeichnet wird.

![Das Attribut stroke-linecap ändert das Aussehen dieser Strichenden: square fügt eine quadratische Kappe hinzu, round sorgt für eine abgerundete Kappe, und butt entfernt die Kappe.](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

Das Attribut `stroke-width` definiert die Breite dieses Strichs. Striche werden zentriert um den Pfad gezeichnet. Im obigen Beispiel wird der Pfad in Pink und der Strich in Schwarz gezeigt.

Das zweite Attribut, das Striche beeinflusst, ist das eigens demonstrierte Attribut `stroke-linecap`. Dieses steuert die Form der Enden von Linien.

Es gibt drei mögliche Werte für `stroke-linecap`:

- `butt` schließt die Linie mit einer geraden Kante ab, die normal (im 90-Grad-Winkel) zur Richtung des Strichs steht und dessen Ende durchquert.
- `square` hat im Wesentlichen das gleiche Aussehen, dehnt den Strich jedoch leicht über den tatsächlichen Pfad hinaus. Der Abstand, den der Strich über den Pfad hinausgeht, beträgt die Hälfte der `stroke-width`.
- `round` erzeugt einen abgerundeten Effekt am Ende des Strichs. Der Radius dieser Krümmung wird ebenfalls durch die `stroke-width` gesteuert.

Verwenden Sie `stroke-linejoin`, um zu steuern, wie die Verbindung zwischen zwei Liniensegmenten gezeichnet wird.

![Das Attribut stroke-linejoin verändert das Aussehen an der Stelle, an der zwei Linien zusammentreffen, wobei miter eine eckige Verbindung schafft, round die Ecke abrundet und bevel eine abgeschrägte Kante schafft, die die Ecke abflacht.](svg_stroke_linejoin_example.png)

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

Jede dieser Polylinien hat zwei Segmente. Die Verbindung, an der sich die beiden treffen, wird durch das Attribut `stroke-linejoin` gesteuert. Es gibt drei mögliche Werte für dieses Attribut. `miter` verlängert die Linie leicht über ihre normale Breite hinaus, um eine rechtwinklige Ecke zu erzeugen, bei der nur ein Winkel verwendet wird. `round` erzeugt ein abgerundetes Liniensegment. `bevel` schafft einen neuen Winkel, um den Übergang zwischen den beiden Segmenten zu unterstützen.

Schließlich können Sie auch gestrichelte Linientypen auf einen Strich anwenden, indem Sie das Attribut `stroke-dasharray` angeben.

![Zwei benutzerdefinierte gestrichelte Linien, eine mit gleichmäßig verteilten Strichen und die andere mit einem Langstrich-Kurzstrich unter Verwendung eines stroke-dasharray-Attributwerts.](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"
    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>
  <path d="M 10 75 L 190 75" stroke="red"
    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>
</svg>
```

Das Attribut `stroke-dasharray` kann eine Reihe durch Kommas und/oder Leerzeichen getrennte Zahlen als Argument annehmen.

Die erste Zahl gibt einen Abstand für den gefüllten Bereich an und die zweite einen Abstand für den ungefüllten Bereich. Im obigen Beispiel füllt der zweite Pfad 5 Pixeleinheiten, mit 5 leeren Einheiten bis zum nächsten Strich von 5 Einheiten. Sie können mehr Zahlen angeben, wenn Sie ein komplizierteres Strichmuster wünschen. Das erste Beispiel gibt drei Zahlen an, wobei der Renderer die Zahlen zweimal durchläuft, um ein gleichmäßiges Muster zu erzeugen. So rendert der erste Pfad 5 gefüllte, 10 leere, 5 gefüllte und dann wiederholt sich das Muster mit 5 leeren, 10 gefüllten, 5 leeren Einheiten. Das Muster wiederholt sich dann.

Es gibt zusätzliche `stroke`- und `fill`-Eigenschaften, einschließlich `fill-rule`, welches angibt, wie überlappende Formen eingefärbt werden sollen; [`stroke-miterlimit`](/de/docs/Web/SVG/Attribute/stroke-miterlimit), welches bestimmt, ob ein Strich Mitren zeichnen soll; und [stroke-dashoffset](/de/docs/Web/SVG/Attribute/stroke-dashoffset), welches angibt, wo ein Strichmuster auf einer Linie beginnen soll.

### Auftrag der Farbe

Die Reihenfolge, in der Fill und Stroke gezeichnet werden, kann mit dem Attribut [`paint-order`](/de/docs/Web/SVG/Attribute/paint-order) gesteuert werden.

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

Im Fall der ersten Form wurde der Fill vor dem Stroke gerendert, sodass der schwarze Stroke über dem Fill erscheint.
Im Fall der zweiten Form wurde der Stroke vor dem Fill gerendert.

## Verwendung von CSS

Neben dem Setzen von Attributen an Objekten können Sie auch CSS verwenden, um Fill und Stroke zu stylen. Nicht alle Attribute können über CSS gesetzt werden. Attribute, die sich mit Malen und Füllen beschäftigen, sind normalerweise verfügbar, sodass `fill`, `stroke`, `stroke-dasharray` usw. auf diese Weise gesetzt werden können, zusätzlich zu den unten gezeigten Farbverlaufs- und Mustervarianten. Attribute wie `width`, `height` oder {{SVGElement("path")}}-Befehle können nicht über CSS gesetzt werden. Es ist am einfachsten, es einfach zu testen und herauszufinden, was verfügbar ist und was nicht.

> [!NOTE]
> Die [SVG-Spezifikation](https://www.w3.org/TR/SVG/propidx.html) unterscheidet strikt zwischen Attributen, die _Eigenschaften_ sind, und anderen Attributen. Die ersteren können mit CSS modifiziert werden, die letzteren nicht.

CSS kann inline mit dem Element mittels des `style`-Attributs eingefügt werden:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

Oder es kann in einen speziellen Stilabschnitt verschoben werden, den Sie einfügen. Statt eines solchen Abschnitts in einen `<head>`-Abschnitt wie in HTML zu schieben, wird er jedoch in einen Bereich namens {{SVGElement("defs")}} eingefügt.

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

Die Verschiebung von Stilen in einen solchen Bereich kann es einfacher machen, Eigenschaften bei großen Gruppen von Elementen zu ändern. Sie können auch Dinge wie die **`:hover`-Pseudo-Klasse** verwenden, um Rollover-Effekte zu erstellen:

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

Sie können auch ein externes Stylesheet für Ihre CSS-Regeln über die [normale XML-Stilesheetsyntax](https://www.w3.org/TR/xml-stylesheet/) angeben:

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

Wobei `style.css` etwa folgendermaßen aussieht:

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}
