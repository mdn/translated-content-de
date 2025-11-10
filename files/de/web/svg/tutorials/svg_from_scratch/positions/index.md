---
title: Positionen
slug: Web/SVG/Tutorials/SVG_from_scratch/Positions
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}

In diesem Artikel untersuchen wir, wie Scalable Vector Graphics (SVG) die Positionen und Größen von Objekten innerhalb eines Zeichnungsbereichs darstellt, einschließlich des Koordinatensystems und was eine "Pixel"-Messung in einem skalierbaren Kontext bedeutet.

## Das Gitter

Für alle Elemente verwendet SVG ein Koordinatensystem oder **Gittersystem**, das dem ähnlich ist, das von [canvas](/de/docs/Web/API/Canvas_API) (und vielen anderen Computerzeichnungsroutinen) verwendet wird. Das bedeutet: Die obere linke Ecke des Dokuments gilt als Punkt (0,0) oder Ursprung. Positionen werden dann in Pixeln von der oberen linken Ecke aus gemessen, wobei die positive x-Richtung nach rechts und die positive y-Richtung nach unten zeigt.

![X, Y Koordinatengitter mit einem blauen Kasten in der Mitte.](canvas_default_grid.png)

Beachten Sie, dass dies leicht von der Art und Weise abweicht, wie Sie das Zeichnen von Diagrammen als Kind gelernt haben (y-Achse ist umgekehrt). Dies ist jedoch die gleiche Art und Weise, wie Elemente in HTML positioniert sind (Standardmäßig, LTR-Dokumente werden berücksichtigt, nicht die RTL-Dokumente, die das X von rechts nach links positionieren).

### Beispiel

Das Element

```html
<rect x="0" y="0" width="100" height="100" />
```

definiert ein Rechteck von der oberen linken Ecke, das sich 100px nach rechts und 100px nach unten erstreckt.

### Was sind "Pixel"?

Im einfachsten Fall wird ein Pixel in einem SVG-Dokument einem Pixel auf dem Ausgabegerät (z. B. dem Bildschirm) zugeordnet. Aber SVG hätte nicht das "Scalable" in seinem Namen, wenn es nicht mehrere Möglichkeiten gäbe, dieses Verhalten zu ändern. Ähnlich wie bei absoluten und relativen Schriftgrößen in CSS definiert SVG absolute Einheiten (solche mit einem dimensionalen Kennzeichner wie "pt" oder "cm") und sogenannte Benutzereinheiten, die diesen Kennzeichner nicht haben und einfache Zahlen sind.

Ohne weitere Spezifikation entspricht eine Benutzereinheit einer Bildschirmeinheit. Um dieses Verhalten ausdrücklich zu ändern, gibt es mehrere Möglichkeiten in SVG. Wir beginnen mit dem `svg`-Wurzelelement:

```html
<svg width="100" height="100">…</svg>
```

Das obige Element definiert eine SVG-Leinwand mit 100x100px. Eine Benutzereinheit entspricht einer Bildschirmeinheit.

```html
<svg width="200" height="200" viewBox="0 0 100 100">…</svg>
```

Die gesamte SVG-Leinwand ist hier 200px mal 200px groß. Das `viewBox`-Attribut definiert jedoch den Teil dieser Leinwand, der angezeigt werden soll. Diese 200x200 Pixel zeigen einen Bereich an, der bei Benutzereinheit (0,0) beginnt und 100x100 Benutzereinheiten nach rechts und unten abdeckt. Dies vergrößert effektiv den 100x100-Einheitenbereich und vergrößert das Bild auf die doppelte Größe.

Das aktuelle Mapping (für ein einzelnes Element oder das gesamte Bild) von Benutzereinheiten zu Bildschirmeinheiten wird als **Benutzerkoordinatensystem** bezeichnet. Neben dem Skalieren kann das Koordinatensystem auch gedreht, verzerrt und gespiegelt werden. Das standardmäßige Benutzerkoordinatensystem ordnet ein Benutzerpixel einem Gerätepixel zu. (Das Gerät kann jedoch entscheiden, was es als ein Pixel versteht.) Längen in der SVG-Datei mit spezifischen Dimensionen, wie "in" oder "cm", werden dann so berechnet, dass sie im resultierenden Bild 1:1 erscheinen.

Ein Zitat aus der SVG 1.1-Spezifikation veranschaulicht dies:

> \[...] Angenommen, der Benutzeragent kann aus seiner Umgebung bestimmen, dass "1px" "0.2822222mm" entspricht (d.h. 90dpi). Dann für alle Verarbeitungen von SVG-Inhalten: \[...] "1cm" entspricht "35.43307px" (und damit 35.43307 Benutzereinheiten)

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}
