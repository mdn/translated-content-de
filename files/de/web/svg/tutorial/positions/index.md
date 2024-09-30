---
title: Positions
slug: Web/SVG/Tutorial/Positions
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}

In diesem Artikel untersuchen wir, wie Scalable Vector Graphics (SVG) die Positionen und Größen von Objekten innerhalb eines Zeichenkontextes darstellt, einschließlich des Koordinatensystems und was ein "Pixel"-Maß in einem skalierbaren Kontext bedeutet.

## Das Raster

Für alle Elemente verwendet SVG ein Koordinatensystem oder ein **Raster**system, ähnlich wie das von [canvas](/de/docs/Web/API/Canvas_API) (und von vielen anderen Computer-Zeichenroutinen). Das heißt, die obere linke Ecke des Dokuments wird als Punkt (0,0) betrachtet, oder als Ursprungspunkt. Positionen werden dann in Pixeln von der oberen linken Ecke gemessen, wobei die positive x-Richtung nach rechts und die positive y-Richtung nach unten geht.

![X, Y Koordinatenraster mit einem blauen Kasten in der Mitte.](canvas_default_grid.png)

Beachten Sie, dass dies etwas anders ist, als man es als Kind beim Graphenlernen beigebracht bekommt (y-Achse ist umgekehrt). Es ist jedoch die gleiche Art, wie Elemente in HTML positioniert werden (Standardmäßig werden LTR-Dokumente betrachtet, nicht RTL-Dokumente, die X von rechts nach links positionieren).

### Beispiel

Das Element

```html
<rect x="0" y="0" width="100" height="100" />
```

definiert ein Rechteck von der oberen linken Ecke, das sich 100px nach rechts und 100px nach unten erstreckt.

### Was sind "Pixel"?

Im grundlegendsten Fall wird ein Pixel in einem SVG-Dokument auf ein Pixel auf dem Ausgabegerät (d. h. dem Bildschirm) abgebildet. Aber SVG hätte nicht das "Skalierbare" in seinem Namen, wenn es nicht mehrere Möglichkeiten gäbe, dieses Verhalten zu ändern. Ähnlich wie absolute und relative Schriftgrößen in CSS definiert SVG absolute Einheiten (solche mit einer Maßangsabe wie "pt" oder "cm") und sogenannte Benutzereinheiten, die keine solche Angabe haben und einfache Zahlen sind.

Ohne weitere Spezifikation entspricht eine Benutzereinheit einer Bildeinheit. Um dieses Verhalten explizit zu ändern, gibt es mehrere Möglichkeiten in SVG. Wir beginnen mit dem `svg` Wurzelelement:

```html
<svg width="100" height="100">…</svg>
```

Das obige Element definiert eine einfache SVG-Leinwand mit 100x100px. Eine Benutzereinheit entspricht einer Bildeinheit.

```html
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

Die gesamte SVG-Leinwand ist hier 200px auf 200px groß. Das `viewBox` Attribut definiert jedoch den Teil dieser Leinwand, der angezeigt werden soll. Diese 200x200 Pixel zeigen einen Bereich an, der bei der Benutzereinheit (0,0) beginnt und 100x100 Benutzereinheiten nach rechts und nach unten reicht. Dies zoomt effektiv in den 100x100 Einheitenbereich hinein und vergrößert das Bild auf die doppelte Größe.

Die aktuelle Zuordnung (für ein einzelnes Element oder das gesamte Bild) von Benutzereinheiten zu Bildeinheiten wird als **Benutzerkoordinatensystem** bezeichnet. Abgesehen von der Skalierung kann das Koordinatensystem auch gedreht, verzerrt und gespiegelt werden. Das Standard-Benutzerkoordinatensystem ordnet ein Benutzerpixel einem Gerätepixel zu. (Das Gerät kann jedoch selbst bestimmen, was es als ein Pixel versteht.) Längen im SVG-Dokument mit spezifischen Abmessungen, wie "in" oder "cm", werden dann so berechnet, dass sie im resultierenden Bild im Verhältnis 1:1 erscheinen.

Ein Zitat aus der SVG 1.1-Spezifikation verdeutlicht dies:

> \[...] nehmen wir an, dass der User-Agent aus seiner Umgebung ableiten kann, dass "1px" "0.2822222mm" entspricht (d. h. 90dpi). Dann gilt für alle Verarbeitungen von SVG-Inhalten: \[...] "1cm" entspricht "35.43307px" (und daher 35.43307 Benutzereinheiten)

{{ PreviousNext("Web/SVG/Tutorial/Getting_Started", "Web/SVG/Tutorial/Basic_Shapes") }}
