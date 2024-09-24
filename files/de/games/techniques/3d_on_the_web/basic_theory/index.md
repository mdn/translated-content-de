---
title: Erklärung der grundlegenden 3D-Theorie
slug: Games/Techniques/3D_on_the_web/Basic_theory
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

Dieser Artikel erklärt die gesamte grundlegende Theorie, die nützlich ist, wenn Sie mit der Arbeit im 3D-Bereich beginnen.

## Koordinatensystem

3D dreht sich im Wesentlichen um die Darstellung von Formen im 3D-Raum, wobei ein Koordinatensystem verwendet wird, um ihre Position zu berechnen.

![Koordinatensystem](mdn-games-3d-coordinate-system.png)

WebGL verwendet das rechtshändige Koordinatensystem — die `x`-Achse zeigt nach rechts, die `y`-Achse zeigt nach oben, und die `z`-Achse zeigt aus dem Bildschirm heraus, wie im obigen Diagramm zu sehen ist.

## Objekte

Verschiedene Arten von Objekten werden mit Hilfe von Vertices erstellt. Ein **Vertex** ist ein Punkt im Raum, der seine eigene 3D-Position im Koordinatensystem hat und in der Regel einige zusätzliche Informationen, die ihn definieren. Jeder Vertex wird durch diese Attribute beschrieben:

- **Position**: Identifiziert ihn im 3D-Raum (`x`, `y`, `z`).
- **Farbe**: Enthält einen RGBA-Wert (R, G und B für die roten, grünen und blauen Kanäle, Alpha für die Transparenz — alle Werte reichen von `0,0` bis `1,0`).
- **Normal:** Eine Möglichkeit, die Richtung zu beschreiben, in die der Vertex zeigt.
- **Textur**: Ein 2D-Bild, das der Vertex verwenden kann, um die Oberfläche, von der er Teil ist, statt einer einfachen Farbe zu dekorieren.

Mit diesen Informationen können Sie Geometrien erstellen — hier ist ein Beispiel eines Würfels:

![Würfel](mdn-games-3d-cube.png)

Eine Fläche der gegebenen Form ist eine Ebene zwischen Vertices. Ein Würfel hat zum Beispiel 8 verschiedene Vertices (Punkte im Raum) und 6 verschiedene Flächen, die jeweils aus 4 Vertices konstruiert sind. Eine Normale definiert, in welche Richtung die Fläche zeigt. Außerdem erstellen wir durch das Verbinden der Punkte die Kanten des Würfels. Die Geometrie wird aus einem Vertex und der Fläche aufgebaut, während Material eine Textur ist, die eine Farbe oder ein Bild verwendet. Wenn wir die Geometrie mit dem Material verbinden, erhalten wir ein Netz.

## Rendering-Pipeline

Die Rendering-Pipeline ist der Prozess, durch den Bilder vorbereitet und auf den Bildschirm ausgegeben werden. Die Grafik-Rendering-Pipeline nimmt die aus **Primitives** gebauten 3D-Objekte, die mit **Vertices** beschrieben sind, verarbeitet sie, berechnet die **Fragmente** und rendert sie auf dem 2D-Bildschirm als **Pixel**.

![Rendering-Pipeline](mdn-games-3d-rendering-pipeline.png)

Die im obigen Diagramm verwendete Terminologie ist wie folgt:

- Ein **Primitive**: Eine Eingabe in die Pipeline — es wird aus Vertices aufgebaut und kann ein Dreieck, Punkt oder Linie sein.
- Ein **Fragment**: Eine 3D-Projektion eines Pixels, das alle gleichen Attribute wie ein Pixel hat.
- Ein **Pixel**: Ein Punkt auf dem Bildschirm, der im 2D-Raster angeordnet ist und eine RGBA-Farbe enthält.

Vertex- und Fragment-Verarbeitung sind programmierbar — Sie können [Ihre eigenen Shader schreiben](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders), die die Ausgabe manipulieren.

## Vertex-Verarbeitung

Bei der Vertex-Verarbeitung geht es darum, die Informationen über einzelne Vertices in Primitives zu kombinieren und ihre Koordinaten im 3D-Raum so festzulegen, dass der Betrachter sie sehen kann. Es ist wie ein Foto von der gegebenen Szenerie zu machen, die Sie vorbereitet haben — Sie müssen zuerst die Objekte platzieren, die Kamera konfigurieren und dann das Bild aufnehmen.

![Vertex-Verarbeitung](mdn-games-3d-vertex-processing.png)

Es gibt vier Phasen dieser Verarbeitung: Die erste umfasst das Anordnen der Objekte in der Welt und wird als **Modelltransformation** bezeichnet. Dann gibt es die **Ansichtstransformation**, die sich um die Positionierung und die Festlegung der Ausrichtung der Kamera im 3D-Raum kümmert. Die Kamera hat drei Parameter — Standort, Richtung und Ausrichtung — die für die neu erstellte Szene definiert werden müssen.

![Kamera](mdn-games-3d-camera.png)

Die **Projektionstransformation** (auch Perspektivtransformation genannt) definiert dann die Kameraeinstellungen. Sie legt fest, was von der Kamera gesehen werden kann — die Konfiguration umfasst das _Sichtfeld_, das _Seitenverhältnis_ und die optionalen _Nah- und Fernebenen_. Lesen Sie den [Abschnitt Kamera](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#camera) im Three.js-Artikel, um mehr darüber zu erfahren.

![Kameraeinstellungen](mdn-games-3d-camera-settings.png)

Der letzte Schritt ist die **Viewport-Transformation**, die alles für den nächsten Schritt in der Rendering-Pipeline ausgibt.

## Rasterisierung

Die Rasterisierung wandelt Primitives (die verbundenen Vertices) in eine Menge von Fragmenten um.

![Rasterisierung](mdn-games-3d-rasterization.png)

Diese Fragmente — die 3D-Projektionen der 2D-Pixel — werden auf das Pixelraster ausgerichtet, damit sie schließlich als Pixel auf einem 2D-Bildschirm während der Ausgabe-Merge-Stufe ausgedruckt werden können.

## Fragment-Verarbeitung

Die Fragment-Verarbeitung konzentriert sich auf Texturen und Beleuchtung — sie berechnet die endgültigen Farben basierend auf den gegebenen Parametern.

![Fragment-Verarbeitung](mdn-games-3d-fragment-processing.png)

### Texturen

Texturen sind 2D-Bilder, die im 3D-Raum verwendet werden, um die Objekte besser und realistischer aussehen zu lassen. Texturen werden aus einzelnen Texturelementen, sogenannten Texeln, kombiniert, analog zu Bildelementen, die aus Pixeln kombiniert werden. Das Anwenden von Texturen auf Objekte während des Fragmentverarbeitungsstadiums der Rendering-Pipeline ermöglicht es uns, diese durch Wickeln und Filtern gegebenenfalls anzupassen.

Das Texturwickeln ermöglicht es, das 2D-Bild um das 3D-Objekt zu wiederholen. Das Texturfiltern wird angewendet, wenn die ursprüngliche Auflösung oder das Texturbild von dem angezeigten Fragment abweicht — es wird entsprechend verkleinert oder vergrößert.

### Beleuchtung

Die Farben, die wir auf dem Bildschirm sehen, sind das Ergebnis der Interaktion der Lichtquelle mit den Oberflächenfarben des Objektmaterials. Licht kann absorbiert oder reflektiert werden. Das standardmäßige **Phong-Beleuchtungsmodell**, das in WebGL implementiert ist, verfügt über vier grundlegende Beleuchtungsarten:

- **Diffuse**: Ein fernes gerichtetes Licht, wie die Sonne.
- **Spekulär**: Ein Lichtpunkt, ähnlich wie eine Glühbirne in einem Raum oder eine Taschenlampe.
- **Umgebungslicht**: Das konstante Licht, das auf alles in der Szene angewendet wird.
- **Emittierend**: Das Licht, das direkt vom Objekt ausgestrahlt wird.

## Ausgabevermischung

Während der Ausgabemanipulation werden alle Fragmente der Primitives aus dem 3D-Raum in ein 2D-Raster von Pixeln umgewandelt, die dann auf dem Bildschirm ausgedruckt werden.

![Ausgabevermischung](mdn-games-3d-output-merging.png)

Während der Ausgabevermischung wird auch eine Verarbeitung angewendet, um Informationen zu ignorieren, die nicht benötigt werden — zum Beispiel werden die Parameter von Objekten, die sich außerhalb des Bildschirms oder hinter anderen Objekten befinden und daher nicht sichtbar sind, nicht berechnet.

## Fazit

Jetzt kennen Sie die grundlegende Theorie hinter der 3D-Manipulation. Wenn Sie zur Praxis übergehen und einige Demos in Aktion sehen möchten, folgen Sie den untenstehenden Tutorials:

- [Erstellen einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Erstellen einer grundlegenden Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Erstellen einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Erstellen einer grundlegenden Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)

Gehen Sie weiter und erstellen Sie selbst einige coole, hochmoderne 3D-Experimente!
