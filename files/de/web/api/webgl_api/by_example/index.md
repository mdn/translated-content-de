---
title: WebGL anhand von Beispielen
slug: Web/API/WebGL_API/By_example
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("WebGL")}}{{Next("Learn/WebGL/By_example/Detect_WebGL")}}

_WebGL anhand von Beispielen_ ist eine Serie von Live-Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten veranschaulichen.

Die Beispiele sind nach Thema und Schwierigkeitsgrad sortiert und decken den WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktion und mehr ab.

## Beispiele nach Thema

Die Beispiele sind in aufsteigender Schwierigkeit sortiert. Anstatt sie nur in einer langen Liste zu präsentieren, sind sie zusätzlich in Themen unterteilt. Manchmal behandeln wir ein Thema mehrmals, z. B. wenn wir es zunächst auf einem grundlegenden Niveau erörtern müssen und später auf mittlerem und fortgeschrittenem Niveau.

Anstatt schon im ersten Programm Shader, Geometrie und die Arbeit mit {{Glossary("GPU", "GPU")}}-Speicher zu jonglieren, werden die Beispiele hier schrittweise in WebGL erkundet. Wir glauben, dass dies zu einem effektiveren Lernerlebnis führt und letztendlich ein tieferes Verständnis der zugrunde liegenden Konzepte ermöglicht.

Erklärungen zu den Beispielen finden Sie sowohl im Haupttext als auch in Kommentaren innerhalb des Codes. Sie sollten alle Kommentare lesen, da fortgeschrittenere Beispiele Kommentare zu Codeabschnitten möglicherweise nicht wiederholen, die zuvor erklärt wurden.

### Den Rendering-Kontext kennenlernen

- [Detect WebGL](/de/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : Dieses Beispiel zeigt, wie man einen {{Glossary("WebGL", "WebGL")}}-Rendering-Kontext erkennt und das Ergebnis dem Benutzer meldet.
- [Clearing with colors](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : Wie man den Rendering-Kontext mit einer Volltonfarbe löscht.
- [Clearing by clicking](/de/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : Wie man Benutzerinteraktion mit Grafikoperationen kombiniert. Löschen des Rendering-Kontextes mit einer zufälligen Farbe, wenn der Benutzer klickt.
- [Simple color animation](/de/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : Eine sehr einfache Farbanimation, indem der {{Glossary("WebGL", "WebGL")}}-Zeichenpuffer jede Sekunde mit einer anderen zufälligen Farbe gelöscht wird.
- [Color masking](/de/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : Modifizieren zufälliger Farben durch Anwenden von Farbmaskierung und dadurch Begrenzung des Bereichs der angezeigten Farben auf bestimmte Schattierungen.
- [Basic scissoring](/de/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : Wie man Rechtecke und Quadrate mit Zuschneideoperationen zeichnet.
- [Canvas size and WebGL](/de/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : Das Beispiel untersucht die Auswirkung der Festlegung (oder Nichtfestlegung) der Canvas-Größe auf ihre Elementgröße in {{Glossary("CSS", "CSS")}}-Pixeln, wie sie im Browserfenster angezeigt wird.
- [Boilerplate 1](/de/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : Das Beispiel beschreibt wiederkehrende Codeabschnitte, die von nun an ausgeblendet werden, sowie die Definition einer JavaScript-Dienstfunktion zur Vereinfachung der WebGL-Initialisierung.
- [Scissor animation](/de/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : Etwas Animationsspaß mit Zuschneide- und Löschoperationen.
- [Raining rectangles](/de/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : Ein Spiel, das das Löschen mit Volltonfarben, Zuschneiden, Animation und Benutzerinteraktion demonstriert.

### Grundlagen der Shader-Programmierung

- [Hello GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : Ein sehr einfaches Shader-Programm, das ein Quadrat in einer Vollfarbe zeichnet.
- [Hello vertex attributes](/de/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : Kombination von Shader-Programmierung und Benutzerinteraktion durch Vertex-Attribute.
- [Textures from code](/de/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : Eine Demonstration prozeduraler Texturierung mit Fragment-Shadern.

### Verschiedene fortgeschrittene Beispiele

- [Video textures](/de/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : Dieses Beispiel zeigt, wie man Videodateien als Texturen verwendet.

{{Next("Learn/WebGL/By_example/Detect_WebGL")}}
