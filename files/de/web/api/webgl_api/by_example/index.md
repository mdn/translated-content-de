---
title: WebGL anhand von Beispielen
slug: Web/API/WebGL_API/By_example
l10n:
  sourceCommit: 1eae3d383ad47b5e21bf25764d1d35487ea52bb8
---

{{DefaultAPISidebar("WebGL")}}{{Next("Web/API/WebGL_API/By_example/Detect_WebGL")}}

_WebGL anhand von Beispielen_ ist eine Serie von interaktiven Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten präsentieren.

Die Beispiele sind nach Thema und Schwierigkeitsgrad geordnet, wobei der WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktion und mehr abgedeckt werden.

## Beispiele nach Thema

Die Beispiele sind mit steigender Schwierigkeitsstufe geordnet. Anstatt sie jedoch nur in einer langen Liste zu präsentieren, sind sie zusätzlich in Themen unterteilt. Manchmal kehren wir zu einem Thema mehrfach zurück, z.B. wenn wir es zunächst auf einer grundlegenden Ebene und später auf mittlerem und fortgeschrittenem Niveau diskutieren müssen.

Anstatt gleich im ersten Programm Shader, Geometrie und die Arbeit mit {{Glossary("GPU", "GPU")}}-Speicher zu jonglieren, werden hier WebGL in einer inkrementellen Weise untersucht. Wir glauben, dass dies zu einem effektiveren Lernerlebnis führt und letztendlich zu einem tieferen Verständnis der zugrunde liegenden Konzepte.

Erklärungen zu den Beispielen finden sich sowohl im Haupttext als auch in Kommentaren innerhalb des Codes. Sie sollten alle Kommentare lesen, da fortgeschrittenere Beispiele möglicherweise keine Kommentare zu Teilen des Codes wiederholen, die bereits erklärt wurden.

### Den Rendering-Kontext kennenlernen

- [WebGL erkennen](/de/docs/Web/API/WebGL_API/By_example/Detect_WebGL)
  - : Dieses Beispiel demonstriert, wie man einen {{Glossary("WebGL", "WebGL")}}-Rendering-Kontext erkennt und das Ergebnis dem Benutzer mitteilt.
- [Mit Farben löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_with_colors)
  - : Wie man den Rendering-Kontext mit einer Volltonfarbe löscht.
- [Durch Klicken löschen](/de/docs/Web/API/WebGL_API/By_example/Clearing_by_clicking)
  - : Wie man Benutzerinteraktion mit Grafikoperationen kombiniert. Löschen des Rendering-Kontexts mit einer zufälligen Farbe, wenn der Benutzer klickt.
- [Einfache Farbanimation](/de/docs/Web/API/WebGL_API/By_example/Simple_color_animation)
  - : Eine sehr einfache Farbanimation, die durch Löschen des {{Glossary("WebGL", "WebGL")}}-Zeichenpuffers mit einer anderen zufälligen Farbe jede Sekunde durchgeführt wird.
- [Farbmaskierung](/de/docs/Web/API/WebGL_API/By_example/Color_masking)
  - : Modifizieren zufälliger Farben durch Anwendung von Farbmaskierung und damit Begrenzung des Bereichs der angezeigten Farben auf spezifische Schattierungen.
- [Grundlegendes Scheren](/de/docs/Web/API/WebGL_API/By_example/Basic_scissoring)
  - : Wie man mit Scheroperationen Rechtecke und Quadrate zeichnet.
- [Leinwandgröße und WebGL](/de/docs/Web/API/WebGL_API/By_example/Canvas_size_and_WebGL)
  - : Dieses Beispiel untersucht die Wirkung der Einstellung (oder Nicht-Einstellung) der Leinwandgröße auf ihre Elementgröße in {{Glossary("CSS", "CSS")}}-Pixeln, wie sie im Browserfenster angezeigt wird.
- [Vorlage 1](/de/docs/Web/API/WebGL_API/By_example/Boilerplate_1)
  - : Das Beispiel beschreibt wiederkehrende Codefragmente, die ab jetzt ausgeblendet werden, sowie die Definition einer JavaScript-Dienstprogrammfunktion, um die WebGL-Initialisierung zu erleichtern.
- [Scheranimation](/de/docs/Web/API/WebGL_API/By_example/Scissor_animation)
  - : Ein wenig Spaß mit Animationen, Scheren und Löschoperationen.
- [Regnende Rechtecke](/de/docs/Web/API/WebGL_API/By_example/Raining_rectangles)
  - : Ein Spiel, das Löschen mit Volltonfarben, Scheren, Animation und Benutzerinteraktion demonstriert.

### Grundlagen der Shader-Programmierung

- [Hallo GLSL](/de/docs/Web/API/WebGL_API/By_example/Hello_GLSL)
  - : Ein sehr einfaches Shader-Programm, das ein Quadrat in einer Volltonfarbe zeichnet.
- [Hallo Vertex-Attribute](/de/docs/Web/API/WebGL_API/By_example/Hello_vertex_attributes)
  - : Kombination von Shader-Programmierung und Benutzerinteraktion durch Vertex-Attribute.
- [Texturen aus Code](/de/docs/Web/API/WebGL_API/By_example/Textures_from_code)
  - : Eine Demonstration der prozeduralen Texturierung mit Fragment-Shadern.

### Verschiedene fortgeschrittene Beispiele

- [Videotexturen](/de/docs/Web/API/WebGL_API/By_example/Video_textures)
  - : Dieses Beispiel zeigt, wie man Videodateien als Texturen verwendet.

{{Next("Web/API/WebGL_API/By_example/Detect_WebGL")}}
