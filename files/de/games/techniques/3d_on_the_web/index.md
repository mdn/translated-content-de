---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

Für reichhaltige Spielerlebnisse im Web ist WebGL das Mittel der Wahl, das auf dem HTML-{{htmlelement("canvas")}} gerendert wird. WebGL ist im Grunde genommen ein OpenGL ES 2.0 für das Web — es ist eine JavaScript-API, die Werkzeuge zur Erstellung interaktiver Animationen und natürlich auch von Spielen bietet. Sie können dynamische 3D-Grafiken mit JavaScript erzeugen und rendern, die hardwarebeschleunigt sind.

## Dokumentation und Browser-Kompatibilität

Die [WebGL](/de/docs/Web/API/WebGL_API)-Projektdokumentation und Spezifikation wird von der [Khronos Group](https://www.khronos.org/) gepflegt, nicht vom W3C wie bei den meisten Web-APIs. Die Unterstützung in modernen Browsern ist sehr gut, sogar auf Mobilgeräten, daher müssen Sie sich darüber nicht allzu viele Gedanken machen. Die Hauptbrowser unterstützen alle WebGL, und es kommt nur darauf an, die Leistung auf den von Ihnen verwendeten Geräten zu optimieren.

Es gibt laufende Bemühungen, WebGL 2.0 (basierend auf OpenGL ES 3.0) in naher Zukunft zu veröffentlichen, was viele Verbesserungen bringen und den Entwicklern helfen wird, Spiele für das moderne Web mit aktueller, leistungsstarker Hardware zu entwickeln.

## Grundlagen der 3D-Theorie

Die Grundlagen der 3D-Theorie drehen sich um Formen, die in einem 3D-Raum dargestellt werden, wobei ein Koordinatensystem verwendet wird, um ihre Positionen zu berechnen. Lesen Sie unseren Artikel [Grundlagen der 3D-Theorie erklären](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) für alle notwendigen Informationen.

## Fortgeschrittene Konzepte

Mit WebGL können Sie viel mehr erreichen. Es gibt einige fortgeschrittene Konzepte, in die Sie eintauchen und über die Sie mehr lernen sollten — wie Shader, Kollisionsabfrage oder das neueste Trendthema: virtuelle Realität im Web.

### Shader

Es ist erwähnenswert, dass Shader eine eigene Geschichte sind. Shader benutzen GLSL, eine spezielle OpenGL-Shading-Sprache mit einer Syntax ähnlich zu C, die direkt von der Grafikpipeline ausgeführt wird. Sie lassen sich in Vertex-Shader und Fragment-Shader (oder Pixel-Shader) unterteilen — der erstere transformiert Formpositionen zu tatsächlichen 3D-Zeichenkoordinaten, während der letztere Farben und andere Attribute rendert. Sie sollten sich unbedingt den Artikel [GLSL Shaders](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) ansehen, um mehr über sie zu erfahren.

### Kollisionsabfrage

Es ist schwer, sich ein Spiel ohne Kollisionsabfrage vorzustellen — wir müssen immer herausfinden, wann etwas mit etwas anderem kollidiert. Wir haben Informationen für Sie, aus denen Sie lernen können:

- [2D-Kollisionsabfrage](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsabfrage](/de/docs/Games/Techniques/3D_collision_detection)

### WebXR

Das Konzept der virtuellen Realität ist nicht neu, aber es erobert dank Hardware-Fortschritten wie dem [Meta Quest](https://www.meta.com/quest/) und der (derzeit experimentellen) [WebXR API](/de/docs/Web/API/WebXR_Device_API), die Informationen von XR-Hardware erfasst und für JavaScript-Anwendungen verfügbar macht, das Web im Sturm. Lesen Sie mehr unter [WebXR — Virtuelle und erweiterte Realität für das Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Es gibt auch den Artikel [Ein einfaches Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame), der Ihnen zeigt, wie Sie 3D-Umgebungen für virtuelle Realität mit dem [A-Frame](https://aframe.io/)-Framework erstellen.

## Der Aufstieg der Bibliotheken und Frameworks

Das Codieren von rohem WebGL ist ziemlich komplex, aber Sie sollten sich damit vertraut machen, wenn Ihre Projekte fortgeschrittener werden (siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API), um loszulegen). Für reale Projekte werden Sie wahrscheinlich auch ein Framework verwenden, um die Entwicklung zu beschleunigen und Ihnen zu helfen, das Projekt zu verwalten, an dem Sie arbeiten. Die Verwendung eines Frameworks für 3D-Spiele hilft auch bei der Optimierung der Leistung, da vieles von den von Ihnen verwendeten Werkzeugen übernommen wird, sodass Sie sich darauf konzentrieren können, das Spiel selbst zu bauen.

Die bekannteste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein vielseitiges Werkzeug, das gängige 3D-Techniken einfacher umsetzbar macht. Es gibt auch andere beliebte Spieleentwicklungs-Bibliotheken und Frameworks, die es wert sind, ausprobiert zu werden; [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten mit umfangreicher Dokumentation, Online-Editoren und aktiven Communities.

### Ein einfaches Demo mit A-Frame aufbauen

A-Frame ist ein Webframework zum Erstellen von 3D- und VR-Erlebnissen. Unter der Haube ist es ein Three.js-Framework mit einem deklarativen Entitätskomponenten-Muster, was bedeutet, dass wir Szenen nur mit HTML erstellen können. Finden Sie den Schritt-für-Schritt-Prozess zur Erstellung des Demos im [Ein einfaches Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)-Unterseite.

### Ein einfaches Demo mit Babylon.js aufbauen

Babylon.js ist eine der beliebtesten 3D-Spiele-Engines, die von Entwicklern verwendet wird. Wie jede andere 3D-Bibliothek bietet sie eingebaute Funktionen, um gängige 3D-Funktionen schneller umzusetzen. Sehen Sie sich die Grundlagen der Nutzung von Babylon.js auf der [Ein einfaches Demo mit Babylon.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)-Unterseite an, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML und des Schreibens des JavaScript-Codes.

### Ein einfaches Demo mit PlayCanvas aufbauen

PlayCanvas ist eine beliebte 3D-WebGL-Spiele-Engine, die als Open Source auf GitHub verfügbar ist, mit einem online verfügbaren Editor und guter Dokumentation. Sehen Sie sich die [Ein einfaches Demo mit PlayCanvas aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)-Unterseite für detailliertere Informationen an und entdecken Sie weitere Artikel, die zeigen, wie man Demos mit der PlayCanvas-Bibliothek und dem Online-Editor erstellt.

### Ein einfaches Demo mit Three.js aufbauen

Three.js, wie jede andere Bibliothek, bietet Ihnen einen großen Vorteil: Anstatt Hunderte von Zeilen WebGL-Code zu schreiben, um etwas Interessantes zu erstellen, können Sie eingebaute Hilfsfunktionen verwenden, um es viel schneller zu tun. Sehen Sie sich den Schritt-für-Schritt-Prozess zur Erstellung des Demos auf der [Ein einfaches Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)-Unterseite an.

### Andere Werkzeuge

Sowohl [Unity](https://unity.com/) als auch [Unreal](https://www.unrealengine.com/en-US) können Ihr Spiel mit [WebGL](/de/docs/Web/API/WebGL_API) und [asm.js](/de/docs/Games/Tools/asm.js) exportieren, sodass Sie frei ihre Werkzeuge und Techniken verwenden können, um Spiele zu erstellen, die für das Web exportiert werden.

![Illustration von drei 3D-Geometrieformen: ein grauer Torus, ein blauer Würfel und ein gelber Zylinder.](shapes.png)

## Wohin als nächstes?

Mit diesem Artikel haben wir nur einen kleinen Teil der verfügbaren Möglichkeiten mit den derzeit verfügbaren Technologien aufgezeigt. Sie können immersive, schöne und schnelle 3D-Spiele im Web mit WebGL und den darauf aufgebauten Bibliotheken und Frameworks entwickeln.

### Quellcode

Sie können den gesamten Quellcode dieser Serie [Demos auf GitHub](https://end3r.github.io/MDN-Games-3D/) finden.

### APIs

- [Canvas API](/de/docs/Web/API/Canvas_API)
- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Frameworks

- [Three.js](https://threejs.org/)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](https://www.babylonjs.com/)
- [A-Frame](https://aframe.io/)

### Tutorials

- [Ein einfaches Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Ein einfaches Demo mit PlayCanvas aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Ein einfaches Demo mit Babylon.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Ein einfaches Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
