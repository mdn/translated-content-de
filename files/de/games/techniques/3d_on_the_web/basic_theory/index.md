---
title: Grundlegende 3D-Theorie erklären
slug: Games/Techniques/3D_on_the_web/Basic_theory
l10n:
  sourceCommit: d4ea77f1c9e15e472e484d9561319597c5cce716
---

{{GamesSidebar}}

Dieser Artikel erklärt die gesamte grundlegende Theorie, die nützlich ist, zu wissen, wenn Sie mit 3D arbeiten beginnen.

## Koordinatensystem

3D dreht sich im Wesentlichen um Darstellungen von Formen in einem 3D-Raum, wobei ein Koordinatensystem verwendet wird, um ihre Position zu berechnen.

![Koordinatensystem](mdn-games-3d-coordinate-system.png)

WebGL verwendet das rechtshändige Koordinatensystem — die `x`-Achse zeigt nach rechts, die `y`-Achse zeigt nach oben, und die `z`-Achse zeigt aus dem Bildschirm heraus, wie im obigen Diagramm zu sehen ist.

## Objekte

Verschiedene Arten von Objekten werden mit Hilfe von Scheitelpunkten gebaut. Ein **Vertex** ist ein Punkt im Raum mit einer eigenen 3D-Position im Koordinatensystem und in der Regel mit zusätzlichen Informationen, die ihn definieren. Jeder Vertex wird durch diese Attribute beschrieben:

- **Position**: Bestimmt die Lage im 3D-Raum (`x`, `y`, `z`).
- **Farbe**: Enthält einen RGBA-Wert (R, G und B für die roten, grünen und blauen Kanäle, Alpha für die Transparenz — alle Werte liegen im Bereich von `0.0` bis `1.0`).
- **Normalenvektor**: Eine Möglichkeit, die Richtung zu beschreiben, in die der Vertex zeigt.
- **Textur**: Ein 2D-Bild, das der Vertex verwenden kann, um die Fläche, zu der er gehört, anstatt einer einfachen Farbe zu dekorieren.

Diese Informationen können verwendet werden, um Geometrie zu erstellen — hier ist ein Beispiel eines Würfels:

![Würfel](mdn-games-3d-cube.png)

Eine Fläche der gegebenen Form ist ein Plan zwischen Scheitelpunkten. Zum Beispiel hat ein Würfel 8 verschiedene Scheitelpunkte (Punkte im Raum) und 6 verschiedene Flächen, die jeweils aus 4 Scheitelpunkten bestehen. Ein Normalenvektor definiert, in welche Richtung die Fläche ausgerichtet ist. Außerdem erzeugen wir die Kanten des Würfels, indem wir die Punkte verbinden. Die Geometrie wird aus einem Scheitelpunkt und der Fläche gebaut, während Material eine Textur ist, die eine Farbe oder ein Bild verwendet. Wenn wir die Geometrie mit dem Material verbinden, erhalten wir ein Netz.

## Rendering-Pipeline

Die Rendering-Pipeline ist der Prozess, durch den Bilder vorbereitet und auf den Bildschirm ausgegeben werden. Die Grafik-Rendering-Pipeline nimmt die 3D-Objekte, die aus **Primitiven** bestehen, die mithilfe von **Scheitelpunkten** beschrieben werden, verarbeitet diese, berechnet die **Fragmente** und rendert sie auf dem 2D-Bildschirm als **Pixel**.

![Rendering-Pipeline](mdn-games-3d-rendering-pipeline.png)

Die im obigen Diagramm verwendete Terminologie ist wie folgt:

- Ein **Primitive**: Eine Eingabe für die Pipeline — es besteht aus Scheitelpunkten und kann ein Dreieck, Punkt oder eine Linie sein.
- Ein **Fragment**: Eine 3D-Projektion eines Pixels, das alle gleichen Attribute wie ein Pixel hat.
- Ein **Pixel**: Ein Punkt auf dem Bildschirm, der im 2D-Raster angeordnet ist und eine RGBA-Farbe hält.

Vertex- und Fragmentverarbeitung sind programmierbar — Sie können [eigene Shader schreiben](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders), die die Ausgabe manipulieren.

## Vertex-Verarbeitung

Bei der Vertex-Verarbeitung geht es darum, die Informationen über einzelne Scheitelpunkte zu Primitiven zu kombinieren und ihre Koordinaten im 3D-Raum so festzulegen, dass der Betrachter sie sehen kann. Es ist wie ein Foto von der vorbereiteten Szenerie zu machen — Sie müssen zuerst die Objekte platzieren, die Kamera konfigurieren und dann die Aufnahme machen.

![Vertex-Verarbeitung](mdn-games-3d-vertex-processing.png)

Es gibt vier Stufen dieser Verarbeitung: Die erste besteht darin, die Objekte in der Welt anzuordnen, und wird als **Modelltransformation** bezeichnet. Dann gibt es die **Sichttransformation**, die sich um die Positionierung und Einstellung der Ausrichtung der Kamera im 3D-Raum kümmert. Die Kamera hat drei Parameter — Standort, Richtung und Ausrichtung —, die für die neu erstellte Szene definiert werden müssen.

![Kamera](mdn-games-3d-camera.png)

Die **Projektionstransformation** (auch Perspektivtransformation genannt) definiert anschließend die Kameraeinstellungen. Sie legt fest, was von der Kamera gesehen werden kann — die Konfiguration umfasst _Sichtfeld_, _Seitenverhältnis_ und optionale _Nahe_ und _Ferne Ebenen_. Lesen Sie den [Kamera-Absatz](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#camera) im Three.js-Artikel, um mehr darüber zu erfahren.

![Kameraeinstellungen](mdn-games-3d-camera-settings.png)

Der letzte Schritt ist die **Viewport-Transformation**, bei der alles für den nächsten Schritt in der Rendering-Pipeline ausgegeben wird.

## Rasterisierung

Die Rasterisierung wandelt Primitives (die verbundenen Scheitelpunkte) in eine Menge von Fragmenten um.

![Rasterisierung](mdn-games-3d-rasterization.png)

Diese Fragmente — die 3D-Projektionen der 2D-Pixel — sind am Pixelraster ausgerichtet, sodass sie schließlich als Pixel auf einem 2D-Bildschirm während der Ausgabezusammenführung gedruckt werden können.

## Fragment-Verarbeitung

Die Fragment-Verarbeitung konzentriert sich auf Texturen und Beleuchtung — sie berechnet die endgültigen Farben basierend auf den gegebenen Parametern.

![Fragment-Verarbeitung](mdn-games-3d-fragment-processing.png)

### Texturen

Texturen sind 2D-Bilder, die im 3D-Raum verwendet werden, um die Objekte besser und realistischer aussehen zu lassen. Texturen setzen sich aus einzelnen Texturelementen, sogenannten Texels, zusammen, genauso wie Bildelemente aus Pixeln bestehen. Texturen auf Objekte während der Fragmentverarbeitungsstufe der Rendering-Pipeline anzuwenden, ermöglicht es uns, sie bei Bedarf durch Umwickeln und Filtern anzupassen.

Texturwicklung ermöglicht es, das 2D-Bild um das 3D-Objekt zu wiederholen. Texturfilterung wird angewendet, wenn die ursprüngliche Auflösung oder das Texturbild von dem angezeigten Fragment abweicht — es wird entsprechend verkleinert oder vergrößert.

### Beleuchtung

Die Farben, die wir auf dem Bildschirm sehen, sind das Ergebnis der Interaktion der Lichtquelle mit den Oberflächenfarben des Materials des Objekts. Licht kann absorbiert oder reflektiert werden. Das Standard-**Phong-Beleuchtungsmodell**, das in WebGL implementiert ist, hat vier grundlegende Arten der Beleuchtung:

- **Diffuse**: Ein entfernter Richtstrahler, wie die Sonne.
- **Specular**: Ein Punktlicht, ähnlich wie eine Glühbirne in einem Raum oder eine Taschenlampe.
- **Ambient**: Das konstante Licht, das auf alles in der Szene angewendet wird.
- **Emissive**: Das Licht, das direkt vom Objekt ausgestrahlt wird.

## Ausgabezusammenführung

Während der Ausgabemanipulationsphase werden alle Fragmente der Primitives aus dem 3D-Raum in ein 2D-Pixelraster umgewandelt, das dann auf dem Bildschirm angezeigt wird.

![Ausgabezusammenführung](mdn-games-3d-output-merging.png)

Während der Ausgabezusammenführung wird auch eine Verarbeitung angewendet, um Informationen zu ignorieren, die nicht benötigt werden — zum Beispiel werden die Parameter von Objekten, die sich außerhalb des Bildschirms oder hinter anderen Objekten befinden und daher nicht sichtbar sind, nicht berechnet.

## Fazit

Nun kennen Sie die grundlegende Theorie hinter 3D-Manipulation. Wenn Sie zur Praxis übergehen und einige Demos in Aktion sehen möchten, folgen Sie den untenstehenden Tutorials:

- [Grundlegende Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Grundlegende Demo mit Babylon.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Grundlegende Demo mit PlayCanvas aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Grundlegende Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)

Gehen Sie voran und erstellen Sie selbst einige coole hochmoderne 3D-Experimente!
