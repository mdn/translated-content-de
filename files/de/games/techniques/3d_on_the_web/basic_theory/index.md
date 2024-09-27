---
title: Erklärung der grundlegenden 3D-Theorie
slug: Games/Techniques/3D_on_the_web/Basic_theory
l10n:
  sourceCommit: 56db19e6b8d19932c1b6150bc42e752e12a2b21f
---

{{GamesSidebar}}

Dieser Artikel erklärt die gesamte grundlegende Theorie, die nützlich ist, wenn Sie anfangen, mit 3D zu arbeiten.

## Koordinatensystem

3D bezieht sich im Wesentlichen auf die Darstellung von Formen in einem 3D-Raum, wobei ein Koordinatensystem verwendet wird, um ihre Position zu berechnen.

![Koordinatensystem](mdn-games-3d-coordinate-system.png)

WebGL verwendet das Rechtshänder-Koordinatensystem — die `x`-Achse zeigt nach rechts, die `y`-Achse zeigt nach oben und die `z`-Achse zeigt aus dem Bildschirm heraus, wie im obigen Diagramm zu sehen ist.

## Objekte

Verschiedene Arten von Objekten werden mit Hilfe von Vertices erstellt. Ein **Vertex** ist ein Punkt im Raum mit einer eigenen 3D-Position im Koordinatensystem und in der Regel zusätzlichen Informationen, die ihn definieren. Jeder Vertex wird durch diese Attribute beschrieben:

- **Position**: Identifiziert ihn in einem 3D-Raum (`x`, `y`, `z`).
- **Farbe**: Beinhaltet einen RGBA-Wert (R, G und B für die roten, grünen und blauen Kanäle, Alpha für Transparenz — alle Werte reichen von `0.0` bis `1.0`).
- **Normalen**: Eine Möglichkeit, die Richtung zu beschreiben, in die der Vertex zeigt.
- **Textur**: Ein 2D-Bild, das der Vertex verwenden kann, um die Oberfläche zu dekorieren, zu der er gehört, anstatt nur eine einfache Farbe.

Mit diesen Informationen können Sie Geometrie erstellen – hier ist ein Beispiel eines Würfels:

![Würfel](mdn-games-3d-cube.png)

Eine Fläche der gegebenen Form ist eine Ebene zwischen Vertices. Zum Beispiel hat ein Würfel 8 verschiedene Vertices (Punkte im Raum) und 6 verschiedene Flächen, die jeweils aus 4 Vertices konstruiert sind. Eine Normale definiert, in welche Richtung die Fläche zeigt. Auch durch das Verbinden der Punkte entstehen die Kanten des Würfels. Die Geometrie wird aus einem Vertex und der Fläche gebaut, während das Material eine Textur ist, die eine Farbe oder ein Bild verwendet. Wenn wir die Geometrie mit dem Material verbinden, erhalten wir ein Mesh.

## Rendering-Pipeline

Die Rendering-Pipeline ist der Prozess, durch den Bilder vorbereitet und auf dem Bildschirm ausgegeben werden. Die Grafik-Rendering-Pipeline nimmt die aus **Primitiven** gebauten 3D-Objekte, die mit **Vertices** beschrieben werden, und verarbeitet diese, berechnet die **Fragmente** und rendert sie auf dem 2D-Bildschirm als **Pixel**.

![Rendering-Pipeline](mdn-games-3d-rendering-pipeline.png)

Die im obigen Diagramm verwendeten Begriffe sind wie folgt:

- Ein **Primitive**: Ein Input für die Pipeline — es wird aus Vertices gebaut und kann ein Dreieck, Punkt oder Linie sein.
- Ein **Fragment**: Eine 3D-Projektion eines Pixels, das alle Attribute eines Pixels hat.
- Ein **Pixel**: Ein Punkt auf dem Bildschirm, der in einem 2D-Gitter angeordnet ist und einen RGBA-Farbwert hat.

Die Verarbeitung von Vertex und Fragment ist programmierbar — Sie können [Ihre eigenen Shader schreiben](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders), die das Output manipulieren.

## Vertex-Verarbeitung

Die Vertex-Verarbeitung befasst sich mit der Kombination von Informationen über einzelne Vertices zu Primitiven und dem Setzen ihrer Koordinaten im 3D-Raum, damit der Betrachter sie sehen kann. Es ist wie das Fotografieren der gegebenen Szene, die Sie vorbereitet haben — Sie müssen zuerst die Objekte platzieren, die Kamera konfigurieren und dann das Foto aufnehmen.

![Vertex-Verarbeitung](mdn-games-3d-vertex-processing.png)

Dieser Verarbeitungsprozess umfasst vier Phasen: Die erste Phase umfasst das Anordnen der Objekte in der Welt und wird als **Modelltransformation** bezeichnet. Dann gibt es die **View-Transformation**, die sich um die Positionierung und Einstellung der Kameraorientierung im 3D-Raum kümmert. Die Kamera verfügt über drei Parameter – Position, Richtung und Orientierung – die für die neu erstellte Szene definiert werden müssen.

![Kamera](mdn-games-3d-camera.png)

Die **Projektionstransformation** (auch Perspektivtransformation genannt) definiert dann die Kameraeinstellungen. Sie legt fest, was von der Kamera gesehen werden kann – die Konfiguration umfasst _Sichtfeld_, _Seitenverhältnis_ und optionale _nahe_ und _ferne Ebenen_. Lesen Sie den [Kamera-Abschnitt](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js#camera) im Three.js-Artikel, um mehr darüber zu erfahren.

![Kameraeinstellungen](mdn-games-3d-camera-settings.png)

Der letzte Schritt ist die **Viewport-Transformation**, die alles für den nächsten Schritt in der Rendering-Pipeline ausgibt.

## Rasterisierung

Die Rasterisierung wandelt Primitive (die verbundenen Vertices) in eine Menge von Fragmenten um.

![Rasterisierung](mdn-games-3d-rasterization.png)

Diese Fragmente — die 3D-Projektionen der 2D-Pixel — sind am Pixelgitter ausgerichtet, so dass sie schließlich in der Ausgabe-Mischphase als Pixel auf einem 2D-Bildschirm dargestellt werden können.

## Fragment-Verarbeitung

Die Fragment-Verarbeitung konzentriert sich auf Texturen und Beleuchtung — sie berechnet die endgültigen Farben basierend auf den gegebenen Parametern.

![Fragment-Verarbeitung](mdn-games-3d-fragment-processing.png)

### Texturen

Texturen sind 2D-Bilder, die im 3D-Raum verwendet werden, um die Objekte besser und realistischer aussehen zu lassen. Texturen werden aus einzelnen Texelelementen genauso kombiniert wie Bildelemente aus Pixeln. Das Anwenden von Texturen auf Objekte während der Fragment-Verarbeitungsphase der Rendering-Pipeline ermöglicht es uns, sie durch Umwickeln und Filtern anzupassen, falls erforderlich.

Das Textur-Umwickeln ermöglicht es, das 2D-Bild um das 3D-Objekt herum zu wiederholen. Textur-Filterung wird angewendet, wenn die ursprüngliche Auflösung oder das Texturbild vom angezeigten Fragment abweicht — es wird entsprechend verkleinert oder vergrößert.

### Beleuchtung

Die Farben, die wir auf dem Bildschirm sehen, sind das Ergebnis der Interaktion der Lichtquelle mit den Oberflächenfarben des Materials des Objekts. Licht kann absorbiert oder reflektiert werden. Das Standard-**Phong-Beleuchtungsmodell**, das in WebGL implementiert ist, hat vier grundlegende Beleuchtungsarten:

- **Diffuse**: Ein entfernter gerichteter Lichtstrahl, wie die Sonne.
- **Spekular**: Ein Lichtpunkt, wie eine Glühbirne in einem Raum oder eine Taschenlampe.
- **Umgebungslicht**: Das konstante Licht, das auf alles in der Szene angewendet wird.
- **Emissive**: Das Licht, das direkt vom Objekt abgegeben wird.

## Ausgabe-Mischung

Während der Ausgabemanipulationsstufe werden alle Fragmente der Primitiven aus dem 3D-Raum in ein 2D-Pixelgitter umgewandelt, das dann auf dem Bildschirm angezeigt wird.

![Ausgabe-Mischung](mdn-games-3d-output-merging.png)

Während der Ausgabe-Mischung wird auch eine Verarbeitung angewendet, um Informationen zu ignorieren, die nicht benötigt werden — zum Beispiel werden die Parameter von Objekten, die sich außerhalb des Bildschirms oder hinter anderen Objekten befinden und daher nicht sichtbar sind, nicht berechnet.

## Fazit

Nun kennen Sie die grundlegende Theorie hinter der 3D-Manipulation. Wenn Sie mit der Praxis fortfahren und einige Demos in Aktion sehen möchten, folgen Sie den untenstehenden Tutorials:

- [Grundlegende Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Grundlegende Demo mit Babylon.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Grundlegende Demo mit PlayCanvas aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Grundlegende Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)

Gehen Sie voran und erstellen Sie selbst einige coole, innovative 3D-Experimente!
