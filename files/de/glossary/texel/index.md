---
title: Texel
slug: Glossary/Texel
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In der 3D-Grafik ist ein **Texel** ein einzelnes Pixel innerhalb einer Textur. _Texturen_ sind Bilder, die auf der Oberfläche eines Polygons in einem 3D-gerenderten Bild dargestellt werden. Eine Textur ist durch eine Sammlung von Texeln charakterisiert, ähnlich wie ein Bild durch eine Sammlung von Pixeln charakterisiert ist.

Ein Pixel in einer Rasterbilddatei ist eine Reihe von Bits, die Farbdaten und manchmal Transparenzdaten enthalten und die auf Anzeigepixel auf einem Ausgabegerät wie einem Computermonitor abgebildet werden. Wenn ein Pixel zu einem Bild gehört, das als Texturressource verwendet wird, wird es als 'Texture Pixel' oder verkürzt 'Texel' bezeichnet. Anstatt direkt auf Bildschirm-Pixel abgebildet zu werden, werden die Daten eines Texels auf eine Position im Koordinatenraum des 3D-Objekts abgebildet, das modelliert wird. Texturen können verwendet werden, um Farbe und andere Oberflächenmerkmale wie Tiefe und Reflexionseigenschaften darzustellen. Mehrere Texturen können geschichtet werden, um komplexe Oberflächenüberlagerungen zu erzeugen.

Der Prozess des Zuordnens der entsprechenden Texel zu ihren entsprechenden Punkten auf einem Polygon wird als **Texturabbildung** bezeichnet. Die Texturabbildung ist eine Phase des Prozesses der Darstellung eines 3D-Bildes für die Anzeige. Wenn das Quelltexelraster und das Zielpixelraster nicht übereinstimmen, wird eine zusätzliche **Texturfilterung** angewendet, um die resultierenden texturierten Pixel (Texturvergrößerung oder -verkleinerung) zu glätten. Das Endergebnis des Rendering-Prozesses ist eine abgeflachte 2D-Projektion des 3D-Modells, bei der die Textur um das Modell 'gewickelt' wurde.

Während der Render-Pipeline wird die Texturabbildung typischerweise vor der Beleuchtung der Szene durchgeführt; jedoch wird im WebGL die Beleuchtung als Teil des Texturabbildungsprozesses durchgeführt.

## Siehe auch

- [Texel (Grafik)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) auf Wikipedia
- [Texturabbildung](https://en.wikipedia.org/wiki/Texture_mapping) auf Wikipedia
- [Texturfilterung](https://en.wikipedia.org/wiki/Texture_filtering) auf Wikipedia
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Texturen animieren in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
