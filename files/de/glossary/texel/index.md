---
title: Texel
slug: Glossary/Texel
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In der 3D-Grafik ist ein **Texel** ein einzelnes Pixel innerhalb einer Textur. _Texturen_ sind Bilder, die auf der Oberfläche eines Polygons innerhalb eines gerenderten 3D-Bildes dargestellt werden. Eine Textur wird durch eine Sammlung von Texeln charakterisiert, ähnlich wie ein Bild durch eine Sammlung von Pixeln charakterisiert wird.

Ein Pixel in einer Rasterbilddatei ist eine Folge von Bits, die Farbdaten und manchmal Opazitätsdaten enthalten, welche auf Anzeigepixel auf einem Ausgabegerät wie einem Computermonitor abgebildet werden. Wenn ein Pixel zu einem Bild gehört, das als Texturressource verwendet wird, wird es als 'Textur-Pixel' oder kurz 'Texel' bezeichnet. Statt direkt auf Bildschirm-Pixel abgebildet zu werden, wird ein Texel auf einen Ort im Koordinatenraum des 3D-Objekts, das modelliert wird, abgebildet. Texturen können verwendet werden, um Farbe und andere Oberflächenmerkmale wie Tiefe und Reflexion widerzugeben. Mehrere Texturen können übereinandergelegt werden, um komplexe Oberflächenüberlagerungen zu erstellen.

Der Prozess, die entsprechenden Texel ihren korrespondierenden Punkten auf einem Polygon zuzuordnen, wird als **Textur-Mapping** bezeichnet. Das Textur-Mapping ist eine Phase im Prozess des Renderns eines 3D-Bildes zur Anzeige. Wenn das Quell-Texel-Raster und das Ziel-Pixel-Raster nicht übereinstimmen, wird zusätzlich eine **Texturfilterung** angewendet, um die resultierenden texturgemappten Pixel zu glätten (Textur _Vergrößerung_ oder _Verkleinerung_). Das endgültige Ergebnis des Rendering-Prozesses ist eine abgeflachte 2D-Projektion des 3D-Modells, bei der die Textur um das Modell 'gewickelt' wurde.

Während der Render-Pipeline wird das Textur-Mapping normalerweise vor der Beleuchtung der Szene durchgeführt; in WebGL wird die Beleuchtung jedoch als Teil des Textur-Mapping-Prozesses ausgeführt.

## Siehe auch

- [Texel (Grafik)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) auf Wikipedia
- [Texture Mapping](https://en.wikipedia.org/wiki/Texture_mapping) auf Wikipedia
- [Texture Filtering](https://en.wikipedia.org/wiki/Texture_filtering) auf Wikipedia
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Texturen in WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
