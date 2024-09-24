---
title: Positionen
slug: Web/SVG/Tutorial/Positions
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}

In diesem Artikel untersuchen wir, wie Scalable Vector Graphics (SVG) die Positionen und Größen von Objekten innerhalb eines Zeichenkontextes darstellt, einschließlich des Koordinatensystems und was eine "Pixel"-Messung in einem skalierbaren Zusammenhang bedeutet.

## Das Raster

Für alle Elemente verwendet SVG ein Koordinatensystem oder **Raster**-System, das demjenigen ähnlich ist, das vom [Canvas](/de/docs/Web/API/Canvas_API) (und von vielen anderen Computer-Zeichenroutinen) verwendet wird. Das bedeutet, dass die obere linke Ecke des Dokuments als Punkt (0,0) oder Ursprungspunkt betrachtet wird. Positionen werden dann in Pixeln von der oberen linken Ecke gemessen, wobei die positive x-Richtung nach rechts und die positive y-Richtung nach unten zeigt.

![X, Y Koordinatenraster mit einer blauen Box in der Mitte.](canvas_default_grid.png)

Beachten Sie, dass dies etwas anders ist als die Art und Weise, wie Sie als Kind das Zeichnen beigebracht bekommen haben (y-Achse ist umgedreht). Diese Methode entspricht jedoch der Art, wie Elemente in HTML positioniert sind (Standardmäßig werden LTR-Dokumente betrachtet und nicht die RTL-Dokumente, die X von rechts nach links positionieren).

### Beispiel

Das Element

```html
<rect x="0" y="0" width="100" height="100" />
```

definiert ein Rechteck von der oberen linken Ecke, das sich 100px nach rechts und 100px nach unten erstreckt.

### Was sind "Pixel"?

Im einfachsten Fall entspricht ein Pixel in einem SVG-Dokument einem Pixel auf dem Ausgabegerät (d.h. dem Bildschirm). SVG hätte jedoch nicht das "Scalable" in seinem Namen, wenn es nicht mehrere Möglichkeiten gäbe, dieses Verhalten zu ändern. Ähnlich wie absolute und relative Schriftgrößen in CSS definiert SVG absolute Einheiten (solche mit einem Dimensionserkenner wie "pt" oder "cm") und sogenannte Benutzereinheiten, die diesen Erkenner nicht haben und einfache Zahlen sind.

Ohne weitere Spezifizierung entspricht eine Benutzereinheit einer Bildschirmeinheit. Um dieses Verhalten explizit zu ändern, gibt es mehrere Möglichkeiten in SVG. Wir beginnen mit dem `svg`-Root-Element:

```html
<svg width="100" height="100">…</svg>
```

Das obige Element definiert eine einfache SVG-Leinwand mit 100x100px. Eine Benutzereinheit entspricht einer Bildschirmeinheit.

```html
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

Die gesamte SVG-Leinwand ist hier 200px mal 200px groß. Das `viewBox`-Attribut definiert jedoch den Bereich dieser Leinwand, der angezeigt wird. Diese 200x200 Pixel zeigen einen Bereich, der bei Benutzereinheit (0,0) beginnt und sich 100x100 Benutzereinheiten nach rechts und nach unten erstreckt. Dies zoomt effektiv in den 100x100 Einheitenbereich und vergrößert das Bild auf doppelte Größe.

Die aktuelle Zuordnung (für ein einzelnes Element oder das gesamte Bild) von Benutzereinheiten zu Bildschirmeinheiten wird als **Benutzerkoordinatensystem** bezeichnet. Abgesehen vom Skalieren kann das Koordinatensystem auch gedreht, abgeschrägt und gespiegelt werden. Das Standard-Benutzerkoordinatensystem ordnet ein Benutzerpixel einem Gerätepixel zu. (Das Gerät kann jedoch entscheiden, was es als ein Pixel versteht.) Längen im SVG-Dokument mit spezifischen Dimensionen, wie "in" oder "cm", werden dann so berechnet, dass sie im resultierenden Bild im Verhältnis 1:1 erscheinen.

Ein Zitat aus der SVG 1.1-Spezifikation veranschaulicht dies:

> \[...] Angenommen, der Benutzeragent kann aus seiner Umgebung bestimmen, dass "1px" "0.2822222mm" entspricht (d.h. 90dpi). Dann gilt für alle Verarbeitungen von SVG-Inhalten: \[...] "1cm" entspricht "35.43307px" (und damit 35.43307 Benutzereinheiten)

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}
