---
title: Texel
slug: Glossary/Texel
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der 3D-Grafik ist ein **Texel** ein einzelnes Pixel innerhalb einer Textur. _Texturen_ sind Bilder, die auf der Oberfläche eines Polygons innerhalb eines gerenderten 3D-Bildes präsentiert werden. Eine Textur wird durch eine Ansammlung von Texeln charakterisiert, ähnlich wie ein Bild durch eine Ansammlung von Pixeln charakterisiert wird.

Ein Pixel in einer Rasterbilddatei ist eine Folge von Bits, die Farbdaten und manchmal Opazitätsdaten enthalten, welche auf Anzeigepixel auf einem Ausgabegerät wie einem Computermonitor abgebildet werden. Wenn ein Pixel zu einem Bild gehört, das als Texturressource verwendet wird, nennt man es 'Texture Pixel' oder verkürzt 'Texel'. Anstatt direkt auf Bildschirm-Pixel abzubilden, wird die Texel-Daten an eine Position im Koordinatenraum des 3D-Objekts, das modelliert wird, abgebildet. Texturen können verwendet werden, um Farbe und andere Oberflächeneigenschaften wie Tiefe und Reflexivität zu vermitteln. Mehrere Texturen können geschichtet werden, um komplexe Oberflächenüberlagerungen zu schaffen.

Der Prozess der Zuordnung der entsprechenden Texel zu ihren entsprechenden Punkten auf einem Polygon wird **Textur-Mapping** genannt. Texture Mapping ist ein Stadium im Prozess der Darstellung eines 3D-Bildes zur Anzeige. Wenn das Quell-Texel-Raster und das Ziel-Pixel-Raster nicht übereinstimmen, wird zusätzliche **Texturfilterung** angewendet, um die resultierenden textur-abgebildeten Pixel (Textur-_Vergrößerung_ oder _Verkleinerung_) zu glätten. Das endgültige Ergebnis des Renderprozesses ist eine abgeflachte 2D-Projektion des 3D-Modells, wobei die Textur um das Modell 'gewickelt' wurde.

Im Renderpipeline, wird häufig Textur-Mapping vor der Beleuchtung der Szene durchgeführt; jedoch wird in WebGL die Beleuchtung als Teil des Textur-Mapping-Prozesses durchgeführt.

## Siehe auch

- [Texel (Grafik)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) auf Wikipedia
- [Textur-Mapping](https://en.wikipedia.org/wiki/Texture_mapping) auf Wikipedia
- [Texturfilterung](https://en.wikipedia.org/wiki/Texture_filtering) auf Wikipedia
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animation von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
