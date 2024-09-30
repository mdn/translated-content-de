---
title: Grundlegende 3D-Theorie erklären
slug: Games/Techniques/3D_on_the_web/Basic_theory
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

Dieser Artikel erklärt alle grundlegenden Theorien, die nützlich sind, wenn Sie anfangen, mit 3D zu arbeiten.

## Koordinatensystem

3D dreht sich im Wesentlichen um Darstellungen von Formen im dreidimensionalen Raum, wobei ein Koordinatensystem verwendet wird, um ihre Position zu berechnen.

![Koordinatensystem](mdn-games-3d-coordinate-system.png)

WebGL verwendet das Rechtshänder-Koordinatensystem — die `x`-Achse zeigt nach rechts, die `y`-Achse zeigt nach oben, und die `z`-Achse zeigt aus dem Bildschirm heraus, wie im obigen Diagramm zu sehen ist.

## Objekte

Verschiedene Arten von Objekten werden mit Vertices gebaut. Ein **Vertex** ist ein Punkt im Raum mit seiner eigenen 3D-Position im Koordinatensystem und meist einigen zusätzlichen Informationen, die ihn definieren. Jeder Vertex wird durch diese Attribute beschrieben:

- **Position**: Identifiziert es im 3D-Raum (`x`, `y`, `z`).
- **Farbe**: Hält einen RGBA-Wert (R, G und B für die Rot-, Grün- und Blaukanäle, Alpha für Transparenz — alle Werte reichen von `0.0` bis `1.0`).
- **Normal:** Eine Möglichkeit, die Richtung zu beschreiben, in die der Vertex zeigt.
- **Textur**: Ein 2D-Bild, das der Vertex verwenden kann, um die Oberfläche, zu der er gehört, anstelle einer einfachen Farbe zu dekorieren.

Sie können Geometrie mit diesen Informationen bauen — hier ist ein Beispiel für einen Würfel:

![Würfel](mdn-games-3d-cube.png)

Eine Fläche der gegebenen Form ist eine Ebene zwischen den Vertices. Ein Würfel hat beispielsweise 8 verschiedene Vertices (Punkte im Raum) und 6 verschiedene Flächen, die jeweils aus 4 Vertices bestehen. Eine Normal definiert, in welche Richtung die Fläche zeigt. Außerdem erstellen wir durch Verbinden der Punkte die Kanten des Würfels. Die Geometrie wird aus einem Vertex und der Fläche gebaut, während das Material eine Textur ist, die eine Farbe oder ein Bild verwendet. Wenn wir die Geometrie mit dem Material verbinden, erhalten wir ein Netz.

## Rendering-Pipeline

Die Rendering-Pipeline ist der Prozess, durch den Bilder vorbereitet und auf dem Bildschirm ausgegeben werden. Die Grafik-Rendering-Pipeline nimmt die aus **Primitives** gebauten 3D-Objekte, die mit **Vertices** beschrieben werden, verarbeitet sie, berechnet die **Fragmente** und rendert sie auf dem 2D-Bildschirm als **Pixels**.

![Rendering-Pipeline](mdn-games-3d-rendering-pipeline.png)

Die im obigen Diagramm verwendete Terminologie ist wie folgt:

- Ein **Primitive**: Ein Eingang für die Pipeline — es wird aus Vertices gebaut und kann ein Dreieck, Punkt oder Linie sein.
- Ein **Fragment**: Eine 3D-Projektion eines Pixels, das alle gleichen Attribute wie ein Pixel hat.
- Ein **Pixel**: Ein Punkt auf dem Bildschirm, angeordnet im 2D-Raster, der eine RGBA-Farbe hält.

Vertex- und Fragmentverarbeitung sind programmierbar — Sie können [Ihre eigenen Shader schreiben](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders), die die Ausgabe manipulieren.

## Vertex-Verarbeitung

Die Vertex-Verarbeitung befasst sich mit der Kombination der Informationen über einzelne Vertices zu Primitives und dem Setzen ihrer Koordinaten im 3D-Raum, damit der Betrachter sie sehen kann. Es ist wie das Aufnehmen eines Fotos der vorbereiteten Szenerie — Sie müssen zuerst die Objekte platzieren, die Kamera konfigurieren und dann das Bild aufnehmen.

![Vertex-Verarbeitung](mdn-games-3d-vertex-processing.png)

Es gibt vier Stufen in dieser Verarbeitung: die erste besteht darin, die Objekte in der Welt zu arrangieren, und wird als **Modell-Transformation** bezeichnet. Dann folgt die **Sicht-Transformation**, die sich um die Positionierung und Einstellung der Ausrichtung der Kamera im 3D-Raum kümmert. Die Kamera hat drei Parameter — Standort, Richtung und Orientierung — die für die neu erstellte Szene definiert werden müssen.

![Kamera](mdn-games-3d-camera.png)

Die **Projektions-Transformation** (auch Perspektiv-Transformation genannt) definiert dann die Kameraeinstellungen. Sie legt fest, was die Kamera sehen kann — die Konfiguration umfasst _Sichtfeld_, _Seitenverhältnis_ und optionale _nahe_ und _ferne Ebenen_. Lesen Sie den [Kamera-Absatz](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#camera) im Three.js Artikel, um mehr darüber zu erfahren.

![Kameraeinstellungen](mdn-games-3d-camera-settings.png)

Der letzte Schritt ist die **Viewport-Transformation**, die alles für den nächsten Schritt in der Rendering-Pipeline ausgibt.

## Rasterisierung

Die Rasterisierung wandelt Primitives (die verbundenen Vertices) in eine Menge von Fragmenten um.

![Rasterisierung](mdn-games-3d-rasterization.png)

Diese Fragmente — die 3D-Projektionen der 2D-Pixels sind — werden an das Pixelraster ausgerichtet, so dass sie schließlich während der Ausgabeverarbeitungsphase als Pixels auf einem 2D-Bildschirm dargestellt werden können.

## Fragmentverarbeitung

Die Fragmentverarbeitung konzentriert sich auf Texturen und Beleuchtung — sie berechnet die endgültigen Farben basierend auf den gegebenen Parametern.

![Fragmentverarbeitung](mdn-games-3d-fragment-processing.png)

### Texturen

Texturen sind 2D-Bilder, die im 3D-Raum verwendet werden, um Objekte besser und realistischer aussehen zu lassen. Texturen werden aus einzelnen Texturelementen, sogenannten Texels, kombiniert, genauso wie Bildelemente aus Pixels kombiniert werden. Das Anwenden von Texturen auf Objekte während der Fragmentverarbeitungsphase der Rendering-Pipeline ermöglicht es uns, sie anzupassen, indem wir sie bei Bedarf einwickeln und filtern.

Texture Wrapping erlaubt es uns, das 2D-Bild um das 3D-Objekt zu wiederholen. Texture Filtering wird angewendet, wenn die ursprüngliche Auflösung oder das Texturbild von dem angezeigten Fragment abweicht — es wird entsprechend verkleinert oder vergrößert.

### Beleuchtung

Die Farben, die wir auf dem Bildschirm sehen, sind das Ergebnis der Interaktion der Lichtquelle mit den Oberflächenfarben des Materials des Objekts. Licht kann absorbiert oder reflektiert werden. Das in WebGL implementierte Standard-Phon Lichtmodell hat vier grundlegende Arten der Beleuchtung:

- **Diffus**: Ein entfernter, gerichteter Lichtstrahl, wie die Sonne.
- **Spekular**: Ein Lichtpunkt, ähnlich einer Glühbirne in einem Raum oder einer Taschenlampe.
- **Umgebend**: Das konstante Licht, das auf alles in der Szene angewendet wird.
- **Emissiv**: Das Licht, das direkt vom Objekt ausgestrahlt wird.

## Ausgabezusammenführung

Während der Ausgabemanipulation werden alle Fragmente der Primitives aus dem 3D-Raum in ein 2D-Raster von Pixels umgewandelt, das dann auf dem Bildschirm ausgegeben wird.

![Ausgabezusammenführung](mdn-games-3d-output-merging.png)

Während der Ausgabe-Zusammenführung wird auch eine Verarbeitung angewendet, um Informationen zu ignorieren, die nicht benötigt werden — zum Beispiel werden die Parameter von Objekten außerhalb des Bildschirms oder hinter anderen Objekten, die somit nicht sichtbar sind, nicht berechnet.

## Fazit

Nun kennen Sie die grundlegende Theorie hinter der 3D-Manipulation. Wenn Sie zur Praxis übergehen und einige Demos in Aktion sehen möchten, folgen Sie den Tutorials unten:

- [Grundlegende Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Grundlegende Demo mit Babylon.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Grundlegende Demo mit PlayCanvas erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Grundlegende Demo mit A-Frame erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)

Machen Sie sich daran, einige coole, fortschrittliche 3D-Experimente selbst zu erstellen!
