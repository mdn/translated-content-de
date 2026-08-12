---
title: Texel
slug: Glossary/Texel
l10n:
  sourceCommit: 90f3b0ec3c27814f0571d062f69e4fdbe5546f93
---

In der 3D-Grafik ist ein **Texel** (kurz für "Texture Pixel") ein einzelnes Element einer Textur. Eine Textur besteht aus einem Raster von Texeln, ähnlich wie ein Rasterbild aus einem Raster von {{Glossary("Pixel", "Pixels")}} besteht. Texturen werden auf 3D-Oberflächen gerendert, um Eigenschaften wie Farbe, Tiefe und Reflexivität darzustellen. Mehrere Texturen können geschichtet werden, um komplexe Oberflächenüberlagerungen zu erzeugen.

Das **Textur-Mapping** verknüpft Punkte auf der Oberfläche eines Modells mit Positionen in einer Textur, üblicherweise durch Texturkoordinaten (auch bekannt als UV-Koordinaten), die den Polygon-Eckpunkten zugewiesen sind. Während des Renderings werden diese Koordinaten über das Polygon interpoliert und zur Abtastung der Textur verwendet. Die Abtastposition eines Fragments kann zwischen den Texelzentren liegen, oder sein Bereich im Texturraum kann mehrere Texel abdecken. **Texturfilterung** bestimmt, wie Texel-Werte während der Textur-_Vergrößerung_ oder _Verkleinerung_ ausgewählt oder kombiniert werden.

In programmierbaren Grafik-APIs wie {{Glossary("WebGL", "WebGL")}} werden Texturabtastung und Beleuchtungsberechnungen von Shadern gesteuert und können im selben Shader gleichzeitig ausgeführt werden.

## Siehe auch

- [Texel (graphics)](<https://en.wikipedia.org/wiki/Texel_(graphics)>) auf Wikipedia
- [Texture mapping](https://en.wikipedia.org/wiki/Texture_mapping) auf Wikipedia
- [Texture filtering](https://en.wikipedia.org/wiki/Texture_filtering) auf Wikipedia
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
- [Animation von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
