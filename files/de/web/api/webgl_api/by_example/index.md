---
title: WebGL an Beispielen
slug: Web/API/WebGL_API/By_example
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{Next("Learn/WebGL/By_example/Detect_WebGL")}}

_WebGL an Beispielen_ ist eine Reihe von Live-Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten veranschaulichen.

Die Beispiele sind nach Thema und Schwierigkeitsgrad sortiert und decken den WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktion und mehr ab.

## Beispiele nach Thema

Die Beispiele sind in aufsteigender Schwierigkeit sortiert. Statt sie nur in einer langen Liste zu präsentieren, sind sie zusätzlich in Themen unterteilt. Manchmal wird ein Thema mehrmals behandelt, zum Beispiel auf einer grundlegenden Ebene und später auf mittleren und fortgeschrittenen Ebenen.

Anstatt gleich im ersten Programm mit Shadern, Geometrie und der Arbeit mit dem [GPU](/de/docs/Glossary/GPU)-Speicher zu jonglieren, erkunden die Beispiele hier WebGL auf eine inkrementelle Weise. Wir glauben, dass dies zu einem effektiveren Lernerlebnis führt und letztlich zu einem tieferen Verständnis der zugrunde liegenden Konzepte.

Erklärungen zu den Beispielen finden sich sowohl im Haupttext als auch in Kommentaren im Code. Sie sollten alle Kommentare lesen, da bei fortgeschritteneren Beispielen möglicherweise Kommentare zu Teilen des Codes nicht wiederholt werden, die bereits erklärt wurden.

### Den Rendering-Kontext kennenlernen

- [WebGL erkennen](/de/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : Dieses Beispiel zeigt, wie ein [WebGL](/de/docs/Glossary/WebGL)-Rendering-Kontext erkannt und das Ergebnis dem Benutzer mitgeteilt wird.
- [Mit Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : Wie man den Rendering-Kontext mit einer Volltonfarbe löscht.
- [Durch Klicken löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : Wie man Benutzerinteraktion mit Grafikoperationen kombiniert. Löschen des Rendering-Kontexts mit einer zufälligen Farbe, wenn der Benutzer klickt.
- [Einfache Farbanimation](/de/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : Eine sehr grundlegende Farbanimation, indem der [WebGL](/de/docs/Glossary/WebGL)-Zeichenpuffer jede Sekunde mit einer anderen zufälligen Farbe gelöscht wird.
- [Farbmaskierung](/de/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : Modifizieren zufälliger Farben durch Anwendung von Farbmaskierung und dadurch Begrenzung der Anzeigefarben auf bestimmte Schattierungen.
- [Grundlegendes Ausschneiden](/de/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : Wie man einfache Rechtecke und Quadrate mit Ausschneideoperationen zeichnet.
- [Canvas-Größe und WebGL](/de/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : Das Beispiel untersucht die Auswirkungen, wenn die Canvas-Größe nicht auf ihre Elementgröße in [CSS](/de/docs/Glossary/CSS)-Pixeln gesetzt wird, wie sie im Browserfenster erscheint.
- [Vorlage 1](/de/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : Das Beispiel beschreibt wiederholte Codeabschnitte, die von nun an ausgeblendet werden, sowie die Definition einer JavaScript-Hilfsfunktion, um die WebGL-Initialisierung zu erleichtern.
- [Ausschnitt-Animation](/de/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : Etwas Animationsspaß mit Ausschneide- und Löschoperationen.
- [Regnende Rechtecke](/de/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : Ein einfaches Spiel, das das Löschen mit Volltonfarben, Ausschneiden, Animation und Benutzerinteraktion demonstriert.

### Grundlagen der Shader-Programmierung

- [Hallo GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : Ein sehr einfaches Shader-Programm, das ein Vollfarbquadrat zeichnet.
- [Hallo Vertex-Attribute](/de/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : Kombination aus Shader-Programmierung und Benutzerinteraktion durch Vertex-Attribute.
- [Texturen aus Code](/de/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : Eine einfache Demonstration der prozeduralen Texturierung mit Fragment-Shadern.

### Verschiedene fortgeschrittene Beispiele

- [Video-Texturen](/de/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : Dieses Beispiel zeigt, wie Videodateien als Texturen verwendet werden können.

{{Next("Learn/WebGL/By_example/Detect_WebGL")}}
