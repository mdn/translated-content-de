---
title: Texel
slug: Glossary/Texel
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

In der 3D-Grafik ist ein **Texel** ein einzelnes Pixel innerhalb einer Textur. _Texturen_ sind Bilder, die auf der Oberfläche eines Polygons innerhalb eines in 3D gerenderten Bildes dargestellt werden. Eine Textur wird durch eine Sammlung von Texeln charakterisiert, ähnlich wie ein Bild durch eine Sammlung von Pixeln charakterisiert wird.

Ein Pixel in einer Rasterbilddatei ist eine Serie von Bits, die Farbdaten und manchmal Opazitätsdaten enthalten, welche auf Anzeigepixel auf einem Ausgabegerät wie einem Computermonitor abgebildet werden. Wenn ein Pixel zu einem Bild gehört, das als Texturressource verwendet wird, wird es als 'Textur-Pixel' oder verkürzt 'Texel' bezeichnet. Statt direkt auf Bildschirm-Pixel abgebildet zu werden, wird ein Texel-Daten auf eine Position im Koordinatenraum des zu modellierenden 3D-Objekts abgebildet. Texturen können verwendet werden, um Farbe und andere Oberflächeneigenschaften wie Tiefe und Reflexion zu vermitteln. Mehrere Texturen können geschichtet werden, um komplexe Oberflächenüberlagerungen zu erstellen.

Der Vorgang, die entsprechenden Texel auf ihre entsprechenden Punkte auf einem Polygon abzubilden, wird **Textur-Mapping** genannt. Textur-Mapping ist ein Abschnitt des Prozesses, ein 3D-Bild zur Anzeige zu rendern. Wenn das Quell-Texel-Raster und das Ziel-Pixel-Raster nicht übereinstimmen, wird eine zusätzliche **Textur-Filterung** angewendet, um die resultierenden texturgemappten Pixel zu glätten (Textur-_Vergrößerung_ oder _Verkleinerung_). Das endgültige Ergebnis des Renderprozesses ist eine abgeflachte 2D-Projektion des 3D-Modells, bei dem die Textur um das Modell 'gewickelt' wurde.

Während der Render-Pipeline wird das Textur-Mapping typischerweise durchgeführt, bevor die Szene beleuchtet wird; jedoch wird in WebGL die Beleuchtung als Teil des Textur-Mapping-Prozesses durchgeführt.

## Siehe auch

- [Texel (graphics)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) auf Wikipedia
- [Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping) auf Wikipedia
- [Texture filtering](https://en.wikipedia.org/wiki/Texture_filtering) auf Wikipedia
- [Using textures in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Lighting in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animating textures in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
