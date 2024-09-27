---
title: WebGL anhand von Beispielen
slug: Web/API/WebGL_API/By_example
l10n:
  sourceCommit: 8d5440dbd259fd6eea32b4f4a200f25257d1bf41
---

{{DefaultAPISidebar("WebGL")}}{{Next("Learn/WebGL/By_example/Detect_WebGL")}}

_WebGL anhand von Beispielen_ ist eine Serie von interaktiven Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten demonstrieren.

Die Beispiele sind nach Themen und Schwierigkeitsgrad sortiert, sie decken den WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktion und mehr ab.

## Beispiele nach Thema

Die Beispiele sind in aufsteigender Schwierigkeit geordnet. Statt sie jedoch nur in einer langen Liste zu präsentieren, sind sie auch in Themen unterteilt. Manchmal wird ein Thema mehrmals behandelt, zum Beispiel wenn es zunächst auf einem einfachen Niveau diskutiert und später auf mittlerem und fortgeschrittenem Niveau erörtert wird.

Anstatt schon im ersten Programm Shader, Geometrie und den Umgang mit [GPU](/de/docs/Glossary/GPU)-Speicher zu jonglieren, erkunden die Beispiele hier WebGL auf eine schrittweise Weise. Wir sind der Meinung, dass dies zu einem effektiveren Lernerlebnis und letztendlich zu einem tieferen Verständnis der zugrunde liegenden Konzepte führt.

Erklärungen zu den Beispielen finden sich sowohl im Haupttext als auch in Kommentaren im Code. Sie sollten alle Kommentare lesen, da bei fortgeschritteneren Beispielen Kommentare zu bereits erklärten Code-Teilen möglicherweise nicht wiederholt werden.

### Kennenlernen des Rendering-Kontexts

- [WebGL erkennen](/de/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : Dieses Beispiel zeigt, wie man einen [WebGL](/de/docs/Glossary/WebGL)-Rendering-Kontext erkennt und das Ergebnis dem Benutzer meldet.
- [Mit Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : Wie man den Rendering-Kontext mit einer Volltonfarbe löscht.
- [Durch Klicken löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : Wie man Benutzerinteraktion mit Grafikoperationen kombiniert. Löschen des Rendering-Kontexts mit einer zufälligen Farbe, wenn der Benutzer klickt.
- [Einfache Farbanimation](/de/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : Eine sehr grundlegende Farbanimation, erzeugt durch das Löschen des [WebGL](/de/docs/Glossary/WebGL)-Zeichnungsbuffers mit einer anderen zufälligen Farbe jede Sekunde.
- [Farbmaskierung](/de/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : Zufällige Farben durch Farbmaskierung modifizieren und somit den Bereich der angezeigten Farben auf bestimmte Schattierungen beschränken.
- [Grundlegendes Ausschneiden](/de/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : Wie man einfache Rechtecke und Quadrate mit Ausschneideoperationen zeichnet.
- [Canvas-Größe und WebGL](/de/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : Das Beispiel untersucht die Auswirkung davon, die Canvas-Größe auf ihre Elementgröße in [CSS](/de/docs/Glossary/CSS)-Pixeln im Browserfenster einzustellen oder nicht.
- [Gerüst 1](/de/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : Das Beispiel beschreibt wiederholte Codeabschnitte, die ab jetzt verborgen werden, sowie die Definition einer JavaScript-Utility-Funktion, um die WebGL-Initialisierung zu erleichtern.
- [Ausschneideanimation](/de/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : Etwas Animationsspaß mit Ausschneide- und Löschoperationen.
- [Regnende Rechtecke](/de/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : Ein einfaches Spiel, das Löschen mit Volltonfarben, Ausschnitte, Animation und Benutzerinteraktion demonstriert.

### Grundlagen der Shader-Programmierung

- [Hallo GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : Ein sehr einfaches Shader-Programm, das ein Volltonfarbquadrat zeichnet.
- [Hallo Vertex-Attribute](/de/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : Kombination aus Shader-Programmierung und Benutzerinteraktion durch Vertex-Attribute.
- [Texturen aus Code](/de/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : Eine einfache Demonstration von prozeduralen Texturen mit Fragment-Shadern.

### Verschiedene fortgeschrittene Beispiele

- [Video-Texturen](/de/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : Dieses Beispiel zeigt, wie man Video-Dateien als Texturen verwendet.

{{Next("Learn/WebGL/By_example/Detect_WebGL")}}
