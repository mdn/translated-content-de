---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

Für reichhaltige Spielerlebnisse im Web ist die bevorzugte Wahl WebGL, das auf dem HTML {{htmlelement("canvas")}} gerendert wird. WebGL ist im Grunde OpenGL ES 2.0 für das Web — es ist eine JavaScript-API, die Werkzeuge zum Erstellen von reichhaltigen interaktiven Animationen bietet und natürlich auch Spiele. Sie können dynamische 3D-Grafiken mit JavaScript generieren und rendern, die hardwarebeschleunigt sind.

## Dokumentation und Browser-Kompatibilität

Die [WebGL](/de/docs/Web/API/WebGL_API) Projektdokumentation und Spezifikation wird von der [Khronos Group](https://www.khronos.org/) gepflegt, nicht wie bei den meisten Web-APIs vom W3C. Die Unterstützung in modernen Browsern ist sehr gut, sogar auf Mobilgeräten, sodass Sie sich darüber keine großen Sorgen machen müssen. Die Hauptbrowser unterstützen alle WebGL und Sie müssen sich nur darauf konzentrieren, die Leistung auf den Geräten, die Sie verwenden, zu optimieren.

Es gibt laufende Bemühungen, WebGL 2.0 (basierend auf OpenGL ES 3.0) in naher Zukunft zu veröffentlichen, wodurch viele Verbesserungen kommen werden und Entwicklern helfen werden, Spiele für das moderne Web mit aktueller, leistungsstarker Hardware zu entwickeln.

## Erläuterung der grundlegenden 3D-Theorie

Die Grundlagen der 3D-Theorie konzentrieren sich auf Formen, die in einem 3D-Raum dargestellt sind, wobei ein Koordinatensystem zur Berechnung ihrer Positionen verwendet wird. Siehe unseren Artikel [Erläuterung der grundlegenden 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) für alle Informationen, die Sie benötigen.

## Fortgeschrittene Konzepte

Mit WebGL können Sie noch viel mehr tun. Es gibt einige fortgeschrittene Konzepte, in die Sie eintauchen und über die Sie mehr lernen sollten — wie Shader, Kollisionserkennung oder das aktuell heiße Thema: virtuelle Realität im Web.

### Shader

Erwähnenswert sind Shader, die eine eigene Geschichte erzählen. Shader nutzen GLSL, eine spezielle OpenGL-Shading-Sprache mit einer Syntax, die C ähnlich ist und direkt von der Grafik-Pipeline ausgeführt wird. Sie können in Vertex-Shader und Fragment-Shader (oder Pixel-Shader) unterteilt werden — erstere transformieren Formpositionen in reale 3D-Zeichnungskoordinaten, während letztere Rendering-Farben und andere Attribute berechnen. Sie sollten sich definitiv den Artikel über [GLSL Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) ansehen, um mehr darüber zu erfahren.

### Kollisionserkennung

Es ist schwer, sich ein Spiel ohne Kollisionserkennung vorzustellen — wir müssen immer herausfinden, wann etwas auf etwas anderes trifft. Wir haben Informationen für Sie verfügbar, aus denen Sie lernen können:

- [2D-Kollisionserkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection)

### WebXR

Das Konzept der virtuellen Realität ist nicht neu, aber es erobert das Web im Sturm dank Hardware-Fortschritten wie der [Meta Quest](https://www.meta.com/quest/) und der (derzeit experimentellen) [WebXR API](/de/docs/Web/API/WebXR_Device_API) zum Erkennen von Informationen von XR-Hardware und deren Bereitstellung für JavaScript-Anwendungen. Lesen Sie mehr unter [WebXR — Virtual und Augmented Reality für das Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Es gibt auch den Artikel [Aufbau einer grundlegenden Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame), der Ihnen zeigt, wie Sie 3D-Umgebungen für virtuelle Realität mit dem [A-Frame](https://aframe.io/) Rahmenwerk erstellen.

## Der Aufstieg von Bibliotheken und Frameworks

Das Kodieren von rohem WebGL ist ziemlich komplex, aber Sie sollten sich im Laufe der Zeit damit vertraut machen, da Ihre Projekte fortgeschrittener werden (siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API), um loszulegen). Für Projekte in der realen Welt werden Sie wahrscheinlich auch ein Framework verwenden, um die Entwicklung zu beschleunigen und Ihnen bei der Verwaltung des Projekts zu helfen, an dem Sie arbeiten. Die Verwendung eines Frameworks für 3D-Spiele hilft auch bei der Optimierung der Leistung, da vieles von den von Ihnen verwendeten Werkzeugen übernommen wird, sodass Sie sich auf den Aufbau des Spiels selbst konzentrieren können.

Die beliebteste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein vielseitiges Werkzeug, das die Implementierung gängiger 3D-Techniken vereinfacht. Es gibt auch andere beliebte Spieleentwicklungsbibliotheken und -frameworks, die es sich anzusehen lohnt; [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten mit reichhaltiger Dokumentation, Online-Editoren und aktiven Gemeinschaften.

### Aufbau einer grundlegenden Demo mit A-Frame

A-Frame ist ein Web-Framework zum Erstellen von 3D- und VR-Erlebnissen. Unter der Haube ist es ein Three.js-Framework mit einem deklarativen Entitäts-Komponenten-Muster, was bedeutet, dass wir Szenen einfach mit HTML erstellen können. Siehe die Unterseite [Aufbau einer grundlegenden Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) für den Schritt-für-Schritt-Prozess der Erstellung der Demo.

### Aufbau einer grundlegenden Demo mit Babylon.js

Babylon.js ist eine der am häufigsten verwendeten 3D-Game-Engines von Entwicklern. Wie jede andere 3D-Bibliothek bietet es integrierte Funktionen, um Ihnen bei der schnellen Implementierung gängiger 3D-Funktionalitäten zu helfen. Siehe die Unterseite [Aufbau einer grundlegenden Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) für die Grundlagen der Verwendung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML und des Schreibens des JavaScript-Codes.

### Aufbau einer grundlegenden Demo mit PlayCanvas

PlayCanvas ist eine beliebte 3D-WebGL-Game-Engine, die auf GitHub als Open Source verfügbar ist, mit einem online verfügbaren Editor und guter Dokumentation. Siehe die Unterseite [Aufbau einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) für höhere Details und weitere Artikel, die zeigen, wie man Demos mit der PlayCanvas-Bibliothek und dem Online-Editor erstellt.

### Aufbau einer grundlegenden Demo mit Three.js

Three.js, wie jede andere Bibliothek, bietet Ihnen einen großen Vorteil: Anstatt hunderte Zeilen WebGL-Code zu schreiben, um etwas Interessantes zu erstellen, können Sie integrierte Hilfsfunktionen verwenden, um es viel schneller zu machen. Siehe die Unterseite [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) für den Schritt-für-Schritt-Prozess der Erstellung der Demo.

### Andere Werkzeuge

Sowohl [Unity](https://unity.com/) als auch [Unreal](https://www.unrealengine.com/) können Ihr Spiel nach [WebGL](/de/docs/Web/API/WebGL_API) mit [asm.js](/de/docs/Games/Tools/asm.js) exportieren, sodass Sie deren Werkzeuge und Techniken verwenden können, um Spiele zu erstellen, die ins Web exportiert werden.

![Illustration von drei 3D-Geometrieformen: ein grauer Torus, ein blauer Würfel und ein gelber Zylinder.](shapes.png)

## Wohin als Nächstes

Mit diesem Artikel haben wir nur die Oberfläche dessen angekratzt, was mit den derzeit verfügbaren Technologien möglich ist. Sie können immersive, schöne und schnelle 3D-Spiele im Web mit WebGL und den darauf aufbauenden Bibliotheken und Frameworks erstellen.

### Quellcode

Sie können den gesamten Quellcode für diese Reihe von [Demos auf GitHub](https://end3r.github.io/MDN-Games-3D/) finden.

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

- [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Aufbau einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Aufbau einer grundlegenden Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Aufbau einer grundlegenden Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
