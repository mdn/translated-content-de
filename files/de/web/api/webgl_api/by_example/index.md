---
title: WebGL anhand von Beispielen
slug: Web/API/WebGL_API/By_example
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{Next("Learn/WebGL/By_example/Detect_WebGL")}}

_WebGL anhand von Beispielen_ ist eine Serie von Live-Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten veranschaulichen.

Die Beispiele sind nach Thema und Schwierigkeitsgrad geordnet und decken den WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktion und mehr ab.

## Beispiele nach Thema

Die Beispiele sind in aufsteigender Schwierigkeitsordnung sortiert. Anstatt sie jedoch nur in einer einzigen langen Liste zu präsentieren, sind sie zusätzlich in Themen unterteilt. Manchmal kehren wir zu einem Thema mehrmals zurück, zum Beispiel, wenn wir es zunächst auf einer grundlegenden Ebene und später auf mittleren und fortgeschrittenen Ebenen besprechen müssen.

Anstatt schon im ersten Programm Shader, Geometrie und das Arbeiten mit {{Glossary("GPU")}}-Speicher jonglieren zu müssen, werden die Beispiele hier schrittweise erkundet. Wir glauben, dass dies zu einem effektiveren Lernerlebnis und letztendlich zu einem tieferen Verständnis der zugrunde liegenden Konzepte führt.

Erklärungen zu den Beispielen finden sich sowohl im Haupttext als auch in Kommentaren innerhalb des Codes. Sie sollten alle Kommentare lesen, da bei fortgeschritteneren Beispielen möglicherweise keine Kommentare zu Codeabschnitten wiederholt werden, die zuvor erklärt wurden.

### Den Rendering-Kontext kennenlernen

- [WebGL erkennen](/de/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : Dieses Beispiel zeigt, wie ein {{Glossary("WebGL")}}-Rendering-Kontext erkannt wird und das Ergebnis dem Benutzer gemeldet wird.
- [Mit Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : Wie der Rendering-Kontext mit einer Volltonfarbe gelöscht wird.
- [Durch Klicken löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : Wie Benutzerinteraktion mit Grafikoperationen kombiniert wird. Der Rendering-Kontext wird mit einer zufälligen Farbe gelöscht, wenn der Benutzer klickt.
- [Einfache Farbanimation](/de/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : Eine sehr grundlegende Farbanimation, bei der der {{Glossary("WebGL")}}-Zeichenpuffer jede Sekunde mit einer anderen zufälligen Farbe gelöscht wird.
- [Farbmaskierung](/de/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : Zufällige Farben modifizieren, indem Farbmaskierung angewendet wird, um so den Bereich der angezeigten Farben auf bestimmte Schattierungen zu begrenzen.
- [Grundlegendes Ausschneiden](/de/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : Wie einfache Rechtecke und Quadrate mit Ausschneideoperationen gezeichnet werden.
- [Canvas-Größe und WebGL](/de/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : Das Beispiel untersucht die Auswirkung davon, die Canvas-Größe auf ihre Elementgröße in {{Glossary("CSS")}}-Pixeln zu setzen oder nicht, wie sie im Browserfenster erscheint.
- [Grundgerüst 1](/de/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : Das Beispiel beschreibt wiederkehrende Codeabschnitte, die von nun an ausgeblendet werden, sowie die Definition einer JavaScript-Hilfsfunktion, um die WebGL-Initialisierung zu erleichtern.
- [Ausschneideanimation](/de/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : Ein bisschen Animationsspaß mit Ausschneide- und Löschoperationen.
- [Regen von Rechtecken](/de/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : Ein einfaches Spiel, das Löschen mit Volltonfarben, Ausschneiden, Animation und Benutzerinteraktion demonstriert.

### Grundlagen der Shader-Programmierung

- [Hallo GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : Ein sehr einfaches Shader-Programm, das ein einfarbiges Quadrat zeichnet.
- [Hallo Vertex-Attribute](/de/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : Shader-Programmierung und Benutzerinteraktion durch Vertex-Attribute kombinieren.
- [Texturen aus Code](/de/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : Eine einfache Demonstration der prozeduralen Texturierung mit Fragment-Shadern.

### Verschiedene fortgeschrittene Beispiele

- [Video-Texturen](/de/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : Dieses Beispiel zeigt, wie Videodateien als Texturen verwendet werden.

{{Next("Learn/WebGL/By_example/Detect_WebGL")}}
