---
title: Positionen
slug: Web/SVG/Tutorials/SVG_from_scratch/Positions
l10n:
  sourceCommit: 787e8f0d2e6796a5973ba1ec431e288d66860063
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}

In diesem Artikel untersuchen wir, wie Scalable Vector Graphics (SVG) die Positionen und Größen von Objekten innerhalb eines Zeichnungskontexts darstellt, einschließlich des SVG-Koordinatensystems und was eine "Pixel"-Messung im skalierbaren Kontext bedeutet.

## Das Raster

Für alle Elemente verwendet SVG ein Koordinatensystem oder **Raster**-System, ähnlich dem, das von [canvas](/de/docs/Web/API/Canvas_API) (und vielen anderen Computerzeichnungsroutinen) verwendet wird. Das bedeutet, die obere linke Ecke des Dokuments wird als Punkt (0,0) betrachtet, der Ursprungspunkt. Positionen werden dann in Pixeln von der oberen linken Ecke gemessen, wobei die positive x-Richtung von links nach rechts und die positive y-Richtung von oben nach unten verläuft.

![X, Y Koordinatenraster mit einem blauen Kasten in der Mitte.](canvas_default_grid.png)

Beachten Sie, dass dies etwas anders ist, als Sie es als Kind beim Graphen gelernt haben (die y-Achse ist umgedreht). Dies ist jedoch dieselbe Methode, wie Elemente in HTML positioniert werden.

## Pixel, Benutzereinheiten und das SVG-Benutzerkoordinatensystem

SVG-Grafiken werden mit einem **Benutzerkoordinatensystem** gezeichnet, in dem Positionen und Längen in **Benutzereinheiten** ausgedrückt werden. Benutzereinheiten sind die einheitenlosen Koordinatenwerte, die Sie in SVG-Attributen wie `x`, `y`, `width` und `height` angeben.

Wenn ein SVG-Ansichtsfenster erstmals erstellt wird, entspricht eine Benutzereinheit einem CSS-Pixel. Dies ist jedoch nur die anfängliche Zuordnung. Funktionen wie das `viewBox`-Attribut können das Benutzerkoordinatensystem so transformieren, dass eine Benutzereinheit mehr oder weniger CSS-Pixeln entspricht.

SVG unterstützt auch absolute Einheiten wie `cm`, `mm` und `pt`. Diese werden vor dem Rendern in das Benutzerkoordinatensystem umgerechnet.

Wir beginnen mit einem `<svg>`-Root-Element:

```html
<svg width="200" height="200">…</svg>
```

Das obige Element definiert ein SVG-Ansichtsfenster von 200 mal 200 CSS-Pixeln. Da kein `viewBox` angegeben ist, wird die anfängliche Zuordnung verwendet, sodass eine Benutzereinheit einem CSS-Pixel entspricht.

Fügen wir ein `viewBox`-Attribut hinzu und rendern ein Quadrat im SVG-Ansichtsfenster mit einem `<rect>`-Element:

```html live-sample___svg-user-units
<svg width="200" height="200" viewBox="0 0 100 100">
  <rect x="10" y="10" width="40" height="40" fill="royalblue" />
</svg>
```

```css hidden live-sample___svg-user-units
svg {
  border: 1px solid gray;
}
```

Das SVG-Ansichtsfenster ist immer noch 200 mal 200 CSS-Pixel groß, aber das `viewBox` definiert ein Koordinatensystem, das von `(0,0)` bis `(100,100)` in Benutzereinheiten reicht. Der Browser ordnet dieses 100 × 100 Benutzereinheits-Koordinatensystem dem 200 × 200 CSS-Pixel-Ansichtsfenster zu, sodass jede Benutzereinheit mit 2 × 2 CSS-Pixeln gerendert wird.

Das Beispiel wird wie folgt gerendert:

{{EmbedLiveSample("svg-user-units", "100%", "250")}}

Das Rechteck ist bei `(10,10)` positioniert und hat innerhalb des `viewBox` eine Größe von `40 × 40` Benutzereinheiten. Da jedoch jede Benutzereinheit mit 2 × 2 CSS-Pixeln gerendert wird, erscheint das Rechteck als 80 × 80 CSS-Pixel-Quadrat auf dem Bildschirm, 20 Pixel vom linken und oberen Rand des SVG entfernt.

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Getting_started", "Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes") }}
