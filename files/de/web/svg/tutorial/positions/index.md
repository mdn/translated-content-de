---
title: Positionen
slug: Web/SVG/Tutorial/Positions
l10n:
  sourceCommit: 01b8471b84e1d157cbddbb3ffaf560a86b082070
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}

In diesem Artikel untersuchen wir, wie Scalable Vector Graphics (SVG) die Positionen und Größen von Objekten innerhalb eines Zeichenkontexts darstellt, einschließlich Koordinatensystem und was ein "Pixel"-Maß in einem skalierbaren Kontext bedeutet.

## Das Raster

Für alle Elemente verwendet SVG ein Koordinatensystem oder **Gittersystem**, ähnlich dem, das von [canvas](/de/docs/Web/API/Canvas_API) (und von vielen anderen Computer-Zeichnungsroutinen) verwendet wird. Das heißt, die obere linke Ecke des Dokuments wird als Punkt (0,0), oder Ursprungspunkt, betrachtet. Positionen werden dann in Pixeln gemessen, von der oberen linken Ecke aus, wobei die positive x-Richtung nach rechts und die positive y-Richtung nach unten zeigt.

![X, Y Koordinatengitter mit einem blauen Feld in der Mitte.](canvas_default_grid.png)

Beachten Sie, dass dies leicht anders ist als die Art und Weise, wie Sie als Kind das Zeichnen auf einem Graphen lernen (y-Achse ist umgekehrt). Dies ist jedoch die gleiche Art und Weise, wie Elemente in HTML positioniert werden (Standardmäßig werden LTR-Dokumente betrachtet, nicht RTL-Dokumente, die X von rechts nach links positionieren).

### Beispiel

Das Element

```html
<rect x="0" y="0" width="100" height="100" />
```

definiert ein Rechteck von der oberen linken Ecke, das sich 100px nach rechts und 100px nach unten erstreckt.

### Was sind "Pixel"?

Im einfachsten Fall entspricht ein Pixel in einem SVG-Dokument einem Pixel auf dem Ausgabegerät (zum Beispiel dem Bildschirm). Aber SVG hätte das "Skalierbar" nicht im Namen, wenn es nicht mehrere Möglichkeiten gäbe, dieses Verhalten zu ändern. Ähnlich wie absolute und relative Schriftgrößen in CSS definiert SVG absolute Einheiten (solche mit einem Dimensionierungsbezeichner wie "pt" oder "cm") und sogenannte Benutzereinheiten, die diesen Bezeichner nicht aufweisen und einfache Zahlen sind.

Ohne weitere Spezifikation entspricht eine Benutzereinheit einer Bildschirmeinheit. Um dieses Verhalten explizit zu ändern, gibt es mehrere Möglichkeiten in SVG. Wir beginnen mit dem `svg` Wurzelelement:

```html
<svg width="100" height="100">…</svg>
```

Das oben stehende Element definiert eine SVG-Leinwand mit 100x100px. Eine Benutzereinheit entspricht einer Bildschirmeinheit.

```html
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

Die gesamte SVG-Leinwand ist hier 200px mal 200px groß. Das `viewBox`-Attribut definiert jedoch den Bereich dieser Leinwand, der angezeigt werden soll. Diese 200x200 Pixel zeigen einen Bereich, der bei der Benutzereinheit (0,0) beginnt und 100x100 Benutzereinheiten nach rechts und unten umfasst. Dies vergrößert effektiv den 100x100 Einheiten Bereich und vergrößert das Bild auf die doppelte Größe.

Die aktuelle Zuordnung (für ein einzelnes Element oder das ganze Bild) von Benutzereinheiten zu Bildschirmeinheiten wird als **Benutzerkoordinatensystem** bezeichnet. Neben dem Skalieren kann das Koordinatensystem auch gedreht, geneigt und gespiegelt werden. Das Standard-Benutzerkoordinatensystem ordnet ein Benutzerpixel einem Gerätepixel zu. (Jedoch kann das Gerät entscheiden, was es als ein Pixel versteht.) Längen im SVG-Dokument mit spezifischen Dimensionen wie "in" oder "cm" werden dann so berechnet, dass sie im resultierenden Bild 1:1 erscheinen.

Ein Zitat aus der SVG 1.1 Spezifikation veranschaulicht dies:

> \[...] Angenommen, der Benutzeragent kann aus seiner Umgebung bestimmen, dass "1px" "0.2822222mm" entspricht (d.h. 90dpi). Dann gilt für die gesamte Verarbeitung von SVG-Inhalten: \[...] "1cm" entspricht "35.43307px" (und damit 35.43307 Benutzereinheiten).

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}
