---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Für reichhaltige Spielerlebnisse im Web ist die Waffe der Wahl WebGL, das auf HTML {{htmlelement("canvas")}} gerendert wird. WebGL ist im Grunde ein OpenGL ES 2.0 für das Web — es ist ein JavaScript-API, das Werkzeuge zum Erstellen von reichhaltigen interaktiven Animationen und natürlich auch Spielen bereitstellt. Sie können dynamische 3D-Grafiken mit JavaScript erstellen und rendern, die hardwarebeschleunigt sind.

## Dokumentation und Browser-Kompatibilität

Die [WebGL](/de/docs/Web/API/WebGL_API)-Projektdokumentation und -spezifikation wird von der [Khronos Group](https://www.khronos.org/) geführt, nicht wie bei den meisten Web-APIs vom W3C. Die Unterstützung auf modernen Browsern ist sehr gut, sogar auf Mobilgeräten, sodass Sie sich darüber nicht allzu viele Sorgen machen müssen. Die Hauptbrowser unterstützen alle WebGL, und alles, worauf Sie sich konzentrieren müssen, ist die Optimierung der Performance auf den von Ihnen verwendeten Geräten.

Es gibt laufende Bemühungen, WebGL 2.0 (basierend auf OpenGL ES 3.0) in naher Zukunft zu veröffentlichen, was viele Verbesserungen bringen und Entwicklern helfen wird, Spiele für das moderne Web unter Verwendung aktueller, leistungsstarker Hardware zu entwickeln.

## Erklärung der grundlegenden 3D-Theorie

Die Grundlagen der 3D-Theorie konzentrieren sich auf Formen, die in einem 3D-Raum dargestellt werden, wobei ein Koordinatensystem verwendet wird, um ihre Positionen zu berechnen. Lesen Sie unseren Artikel [Erklärung der grundlegenden 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) für alle Informationen, die Sie benötigen.

## Fortgeschrittene Konzepte

Mit WebGL können Sie viel mehr machen. Es gibt einige fortgeschrittene Konzepte, in die Sie eintauchen und mehr darüber lernen sollten — wie Shader, Kollisions­erkennung oder das neueste heiße Thema: virtuelle Realität im Web.

### Shader

Es lohnt sich, Shader zu erwähnen, die eine eigene Geschichte sind. Shader verwenden GLSL, eine spezielle OpenGL-Shadersprache mit einer Syntax ähnlich zu C, die direkt von der Grafikpipeline ausgeführt wird. Sie können in Vertex-Shader und Fragment-Shader (oder Pixel-Shader) unterteilt werden — erstere transformieren die Formpositionen in echte 3D-Zeichenkoordinaten, während letztere Renderfarben und andere Attribute berechnen. Sie sollten sich definitiv den Artikel [GLSL Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) ansehen, um mehr über sie zu erfahren.

### Kollisions­erkennung

Es ist schwer, sich ein Spiel ohne Kollisions­erkennung vorzustellen — wir müssen immer herausfinden, wann etwas auf etwas anderes trifft. Wir haben Informationen, aus denen Sie lernen können:

- [2D-Kollisions­erkennung](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisions­erkennung](/de/docs/Games/Techniques/3D_collision_detection)

### WebXR

Das Konzept der virtuellen Realität ist nicht neu, aber es dringt dank Hardwareentwicklungen wie dem [Meta Quest](https://www.meta.com/quest/) und der (derzeit experimentellen) [WebXR API](/de/docs/Web/API/WebXR_Device_API) zur Erfassung von Informationen von XR-Hardware und die Bereitstellung zur Nutzung in JavaScript-Anwendungen in das Web ein. Weitere Informationen finden Sie in [WebXR — Virtuelle und erweiterte Realität für das Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Es gibt auch den Artikel [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame), der Ihnen zeigt, wie Sie 3D-Umgebungen für virtuelle Realität mit dem [A-Frame](https://aframe.io/) Framework erstellen.

## Der Aufstieg von Bibliotheken und Frameworks

Das Programmieren von rohem WebGL ist ziemlich komplex, aber Sie sollten es langfristig verstehen, da Ihre Projekte fortschrittlicher werden (lesen Sie unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API), um anzufangen). Für reale Projekte werden Sie wahrscheinlich auch ein Framework verwenden, um die Entwicklung zu beschleunigen und Ihnen bei der Verwaltung des Projekts zu helfen, an dem Sie arbeiten. Die Verwendung eines Frameworks für 3D-Spiele hilft auch dabei, die Performance zu optimieren, da vieles von den verwendeten Tools erledigt wird, sodass Sie sich auf die eigentliche Spielentwicklung konzentrieren können.

Die beliebteste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein vielseitiges Werkzeug, das die Umsetzung gängiger 3D-Techniken vereinfacht. Es gibt auch andere beliebte Spielentwicklungsbibliotheken und -frameworks, die es wert sind, überprüft zu werden; [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten mit umfangreicher Dokumentation, Online-Editoren und aktiven Communities.

### Aufbau einer einfachen Demo mit A-Frame

A-Frame ist ein Web-Framework zum Erstellen von 3D und VR-Erlebnissen. Unter der Haube ist es ein Three.js-Framework mit einem deklarativen Entitätskomponentenmuster, was bedeutet, dass wir Szenen einfach mit HTML erstellen können. Sehen Sie sich die Unterseite [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) an, um den schrittweisen Prozess der Erstellung der Demo kennenzulernen.

### Aufbau einer einfachen Demo mit Babylon.js

Babylon.js ist einer der bekanntesten 3D-Spiel-Engines, die von Entwicklern genutzt werden. Wie jede andere 3D-Bibliothek bietet es integrierte Funktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller zu implementieren. Sehen Sie sich die Unterseite [Aufbau einer einfachen Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) an, um die Grundlagen der Verwendung von Babylon.js zu erfahren, einschließlich Einrichten einer Entwicklungsumgebung, Strukturierung des notwendigen HTML und Schreiben des JavaScript-Codes.

### Aufbau einer einfachen Demo mit PlayCanvas

PlayCanvas ist ein beliebter 3D-WebGL-Spiele-Engine, der auf GitHub als Open-Source verfügbar ist, mit einem Online-Editor und guter Dokumentation. Sehen Sie sich die Unterseite [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) an, um Details auf höherer Ebene zu erfahren, und weitere Artikel, die zeigen, wie man Demos mit der PlayCanvas-Bibliothek und dem Online-Editor erstellt.

### Aufbau einer einfachen Demo mit Three.js

Three.js bietet Ihnen, wie jede andere Bibliothek, einen großen Vorteil: Anstatt Hunderte Zeilen von WebGL-Code zu schreiben, um etwas Interessantes zu bauen, können Sie integrierte Hilfsfunktionen nutzen, um es viel schneller zu machen. Sehen Sie sich die Unterseite [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) an, um den schrittweisen Prozess der Erstellung der Demo zu erfahren.

### Andere Werkzeuge

Sowohl [Unity](https://unity.com/) als auch [Unreal](https://www.unrealengine.com/) können Ihr Spiel nach [WebGL](/de/docs/Web/API/WebGL_API) mit [asm.js](/de/docs/Games/Tools/asm.js) exportieren, sodass Sie deren Tools und Techniken nutzen können, um Spiele zu bauen, die für das Web exportiert werden.

![Illustration von drei 3D-Geometrieformen: ein grauer Torus, ein blauer Würfel und ein gelber Zylinder.](shapes.png)

## Wohin als nächstes?

Mit diesem Artikel haben wir gerade an der Oberfläche dessen gekratzt, was mit derzeit verfügbaren Technologien möglich ist. Sie können immersive, schöne und schnelle 3D-Spiele im Web mit WebGL und den darauf aufbauenden Bibliotheken und Frameworks erstellen.

### Quelltext

Sie können den gesamten Quellcode für diese Serie [Demos auf GitHub](https://end3r.github.io/MDN-Games-3D/) finden.

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

- [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Aufbau einer einfachen Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
