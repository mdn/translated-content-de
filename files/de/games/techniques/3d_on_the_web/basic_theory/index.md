---
title: Erklärung der grundlegenden 3D-Theorie
slug: Games/Techniques/3D_on_the_web/Basic_theory
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Dieser Artikel erklärt die gesamte grundlegende Theorie, die nützlich ist, wenn Sie mit der Arbeit in 3D beginnen.

## Koordinatensystem

3D dreht sich im Wesentlichen um die Darstellung von Formen im 3D-Raum, wobei ein Koordinatensystem verwendet wird, um ihre Position zu berechnen.

![Koordinatensystem](mdn-games-3d-coordinate-system.png)

WebGL verwendet das Rechts-Hand-Koordinatensystem — die `x`-Achse zeigt nach rechts, die `y`-Achse zeigt nach oben, und die `z`-Achse zeigt aus dem Bildschirm heraus, wie in der obigen Abbildung zu sehen.

## Objekte

Verschiedene Arten von Objekten werden mit Hilfe von Vertices aufgebaut. Ein **Vertex** ist ein Punkt im Raum, der seine eigene 3D-Position im Koordinatensystem hat und in der Regel einige zusätzliche Informationen zur Definition enthält. Jeder Vertex wird durch diese Attribute beschrieben:

- **Position**: Identifiziert ihn im 3D-Raum (`x`, `y`, `z`).
- **Farbe**: Hält einen RGBA-Wert (R, G und B für die roten, grünen und blauen Kanäle, Alpha für die Transparenz — alle Werte reichen von `0.0` bis `1.0`).
- **Normal**: Eine Möglichkeit, die Richtung zu beschreiben, in die der Vertex zeigt.
- **Textur**: Ein 2D-Bild, das der Vertex zur Dekoration der Oberfläche, zu der er gehört, anstelle einer einfachen Farbe verwenden kann.

Mit diesen Informationen können Sie Geometrie erstellen — hier ist ein Beispiel für einen Würfel:

![Würfel](mdn-games-3d-cube.png)

Eine Fläche der gegebenen Form ist eine Ebene zwischen den Vertices. Ein Würfel hat zum Beispiel 8 verschiedene Vertices (Punkte im Raum) und 6 verschiedene Flächen, die jeweils aus 4 Vertices bestehen. Eine Normal definiert, in welche Richtung die Fläche zeigt. Außerdem werden durch das Verbinden der Punkte die Kanten des Würfels erzeugt. Die Geometrie wird aus einem Vertex und der Fläche gebaut, während das Material eine Textur ist, die eine Farbe oder ein Bild verwendet. Wenn wir die Geometrie mit dem Material verbinden, erhalten wir ein Mesh.

## Rendering-Pipeline

Die Rendering-Pipeline ist der Prozess, bei dem Bilder vorbereitet und auf dem Bildschirm ausgegeben werden. Die Grafik-Rendering-Pipeline nimmt die 3D-Objekte, die aus **Primitives** beschrieben werden, indem sie **Vertices** benutzen, verarbeitet sie, berechnet die **Fragments** und rendert sie auf dem 2D-Bildschirm als **Pixels**.

![Rendering-Pipeline](mdn-games-3d-rendering-pipeline.png)

Die im obigen Diagramm verwendete Terminologie ist wie folgt:

- Ein **Primitive**: Ein Input für die Pipeline — es wird aus Vertices aufgebaut und kann ein Dreieck, Punkt oder Linie sein.
- Ein **Fragment**: Eine 3D-Projektion eines Pixels, das alle Attribute eines Pixels hat.
- Ein **Pixel**: Ein Punkt auf dem Bildschirm, der im 2D-Raster angeordnet ist und eine RGBA-Farbe hat.

Vertex- und Fragment-Verarbeitung sind programmierbar — Sie können [Ihre eigenen Shader schreiben](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders), die den Output manipulieren.

## Vertex-Verarbeitung

Bei der Vertex-Verarbeitung geht es darum, die Informationen über einzelne Vertices in Primitives zu kombinieren und ihre Koordinaten im 3D-Raum so einzustellen, dass der Betrachter sie sehen kann. Es ist wie das Aufnehmen eines Fotos der gegebenen Szenerie, die Sie vorbereitet haben — Sie müssen die Objekte zuerst platzieren, die Kamera konfigurieren und dann den Schnappschuss machen.

![Vertex-Verarbeitung](mdn-games-3d-vertex-processing.png)

Es gibt vier Phasen in dieser Verarbeitung: Die erste Phase beinhaltet das Anordnen der Objekte in der Welt und wird als **Modell-Transformation** bezeichnet. Dann gibt es die **Sicht-Transformation**, die sich um die Positionierung und die Einstellung der Ausrichtung der Kamera im 3D-Raum kümmert. Die Kamera hat drei Parameter — Standort, Richtung und Orientierung —, die für die neu erstellte Szene definiert werden müssen.

![Kamera](mdn-games-3d-camera.png)

Die **Projektions-Transformation** (auch perspektivische Transformation genannt) definiert dann die Kameraeinstellungen. Sie legt fest, was von der Kamera gesehen werden kann — die Konfiguration umfasst _Sichtfeld_, _Seitenverhältnis_ und optionale _Nahe_ und _Ferne Ebenen_. Lesen Sie den [Kamera-Abschnitt](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#camera) im Three.js-Artikel, um mehr darüber zu erfahren.

![Kameraeinstellungen](mdn-games-3d-camera-settings.png)

Der letzte Schritt ist die **Viewport-Transformation**, bei der alles für den nächsten Schritt in der Rendering-Pipeline ausgegeben wird.

## Rasterisierung

Die Rasterisierung wandelt Primitives (die verbundenen Vertices) in einen Satz von Fragments um.

![Rasterisierung](mdn-games-3d-rasterization.png)

Diese Fragments — die 3D-Projektionen der 2D-Pixels sind — werden an das Pixel-Raster ausgerichtet, sodass sie schließlich während der Ausgabe zusammen mit den Pixels auf einem 2D-Bildschirm angezeigt werden können.

## Fragment-Verarbeitung

Die Fragment-Verarbeitung konzentriert sich auf Texturen und Beleuchtung — sie berechnet die endgültigen Farben basierend auf den gegebenen Parametern.

![Fragment-Verarbeitung](mdn-games-3d-fragment-processing.png)

### Texturen

Texturen sind 2D-Bilder, die im 3D-Raum verwendet werden, um die Objekte besser und realistischer aussehen zu lassen. Texturen werden aus einzelnen Texturelementen, Texels genannt, auf die gleiche Weise zusammengesetzt wie Bildelemente aus Pixels. Das Anwenden von Texturen auf Objekte während der Fragmentverarbeitung der Rendering-Pipeline ermöglicht es uns, sie bei Bedarf durch Umhüllung und Filterung anzupassen.

Die Texturumhüllung ermöglicht es uns, das 2D-Bild um das 3D-Objekt zu wiederholen. Die Texturfilterung wird angewendet, wenn die Originalauflösung der Textur oder das Bild vom angezeigten Fragment abweicht — es wird entsprechend verkleinert oder vergrößert.

### Beleuchtung

Die Farben, die wir auf dem Bildschirm sehen, sind das Ergebnis der Interaktion der Lichtquelle mit den Oberflächenfarben des Objektmaterials. Licht kann absorbiert oder reflektiert werden. Das standardmäßige **Phong-Beleuchtungsmodell**, das in WebGL implementiert ist, hat vier grundlegende Beleuchtungsarten:

- **Diffuse**: Ein entferntes, gerichtetes Licht, wie die Sonne.
- **Spekular**: Ein Lichtpunkt, genau wie eine Glühbirne in einem Raum oder eine Taschenlampe.
- **Ambient**: Das konstante Licht, das auf alles in der Szene angewendet wird.
- **Emissiv**: Das Licht, das direkt vom Objekt emittiert wird.

## Ausgabemanipulation

Während der Ausgabemanipulation werden alle Fragmente der Primitives aus dem 3D-Raum in ein 2D-Raster von Pixels umgewandelt, das dann auf dem Bildschirm angezeigt wird.

![Ausgabemanipulation](mdn-games-3d-output-merging.png)

Während der Ausgabemanipulation werden auch einige Prozesse angewendet, um Informationen zu ignorieren, die nicht benötigt werden — zum Beispiel werden die Parameter von Objekten, die sich außerhalb des Bildschirmbereichs oder hinter anderen Objekten befinden und daher nicht sichtbar sind, nicht berechnet.

## Fazit

Jetzt kennen Sie die grundlegende Theorie hinter der 3D-Manipulation. Wenn Sie zur Praxis übergehen und einige Demos in Aktion sehen möchten, folgen Sie den untenstehenden Tutorials:

- [Aufbau eines einfachen Demos mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Aufbau eines einfachen Demos mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Aufbau eines einfachen Demos mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Aufbau eines einfachen Demos mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)

Gehen Sie voran und erstellen Sie selbst einige coole, hochmoderne 3D-Experimente!
