---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GamesSidebar}}

Für reichhaltige Spielerlebnisse im Web ist die Waffe der Wahl WebGL, das auf dem HTML-{{htmlelement("canvas")}} gerendert wird. WebGL ist im Grunde genommen ein OpenGL ES 2.0 für das Web — es handelt sich um eine JavaScript-API, die Werkzeuge bereitstellt, um reichhaltige interaktive Animationen und natürlich auch Spiele zu erstellen. Sie können damit dynamische 3D-Grafiken mit JavaScript generieren und rendern, die hardwarebeschleunigt sind.

## Dokumentation und Browser-Kompatibilität

Die [WebGL](/de/docs/Web/API/WebGL_API)-Projektdokumentation und -spezifikation wird von der [Khronos Group](https://www.khronos.org/) gepflegt, anders als bei den meisten Web-APIs, die vom W3C verwaltet werden. Die Unterstützung in modernen Browsern ist sehr gut, sogar auf Mobilgeräten, sodass Sie sich darüber nicht allzu viele Gedanken machen müssen. Die Hauptbrowser unterstützen alle WebGL, und Sie müssen sich nur darauf konzentrieren, die Leistung auf den von Ihnen verwendeten Geräten zu optimieren.

Es gibt laufende Bemühungen zur Veröffentlichung von WebGL 2.0 (basierend auf OpenGL ES 3.0) in naher Zukunft, die viele Verbesserungen bringen und Entwicklern helfen wird, Spiele für das moderne Web mit aktueller, leistungsstarker Hardware zu erstellen.

## Erklärung der grundlegenden 3D-Theorie

Die Grundlagen der 3D-Theorie konzentrieren sich auf Formen, die in einem 3D-Raum dargestellt werden, wobei ein Koordinatensystem verwendet wird, um deren Positionen zu berechnen. Sehen Sie unseren Artikel [Grundlagen der 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) für alle Informationen, die Sie benötigen.

## Erweiterte Konzepte

Mit WebGL können Sie viel mehr machen. Es gibt einige fortgeschrittene Konzepte, in die Sie sich vertiefen und mehr darüber lernen sollten — wie Shader, Kollisionsabfrage oder das neueste heiße Thema: virtuelle Realität im Web.

### Shader

Es lohnt sich, Shader zu erwähnen, die eine eigenständige Geschichte für sich sind. Shader verwenden GLSL, eine spezielle OpenGL-Shading-Sprache mit Syntax ähnlich zu C, die direkt von der Grafikpipeline ausgeführt wird. Sie können in Vertex-Shader und Fragment-Shader (oder Pixel-Shader) unterteilt werden — Erstere transformieren Formenpositionen in reale 3D-Zeichenkoordinaten, während Letztere Renderingfarben und andere Attribute berechnen. Sie sollten sich definitiv unseren Artikel [GLSL-Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) ansehen, um mehr darüber zu erfahren.

### Kollisionsabfrage

Es ist schwer, sich ein Spiel ohne Kollisionsabfrage vorzustellen — wir müssen immer herausfinden, wann etwas auf etwas anderes trifft. Wir haben Informationen für Sie verfügbar, von denen Sie lernen können:

- [2D-Kollisionsabfrage](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsabfrage](/de/docs/Games/Techniques/3D_collision_detection)

### WebXR

Das Konzept der virtuellen Realität ist nicht neu, stürmt jedoch dank Hardware-Entwicklungen wie der [Meta Quest](https://www.meta.com/quest/) und der (derzeit experimentellen) [WebXR-API](/de/docs/Web/API/WebXR_Device_API) auf das Web, die Informationen von XR-Hardware erfasst und für die Verwendung in JavaScript-Anwendungen verfügbar macht. Lesen Sie für mehr [WebXR — Virtual and Augmented Reality for the Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Es gibt auch den Artikel [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame), der Ihnen zeigt, wie einfach es ist, 3D-Umgebungen für die virtuelle Realität mit dem [A-Frame](https://aframe.io/)-Framework zu erstellen.

## Der Aufstieg von Bibliotheken und Frameworks

Das Programmieren mit rohem WebGL ist ziemlich komplex, aber Sie werden sich auf lange Sicht damit vertraut machen wollen, wenn Ihre Projekte fortschrittlicher werden (sehen Sie unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API), um loszulegen). Für realistische Projekte werden Sie wahrscheinlich auch ein Framework nutzen, um die Entwicklung zu beschleunigen und Ihnen bei der Verwaltung des Projekts, an dem Sie arbeiten, zu helfen. Die Verwendung eines Frameworks für 3D-Spiele hilft auch, die Leistung zu optimieren, da vieles von den Werkzeugen, die Sie verwenden, übernommen wird, sodass Sie sich auf den Bau des Spiels konzentrieren können.

Die beliebteste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein vielseitiges Werkzeug, das gängige 3D-Techniken einfacher umsetzbar macht. Es gibt auch andere beliebte Spielentwicklungsbibliotheken und Frameworks, die es wert sind, ausprobiert zu werden; [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten mit reichhaltiger Dokumentation, Online-Editoren und aktiven Gemeinschaften.

### Aufbau einer einfachen Demo mit A-Frame

A-Frame ist ein Web-Framework zum Erstellen von 3D- und VR-Erlebnissen. Im Hintergrund ist es ein Three.js-Framework mit einem deklarativen Entity-Component-Muster, was bedeutet, dass wir Szenen nur mit HTML erstellen können. Sehen Sie die Unterseite [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) für den Schritt-für-Schritt-Prozess zur Erstellung der Demo.

### Aufbau einer einfachen Demo mit Babylon.js

Babylon.js ist eine der beliebtesten 3D-Spiel-Engines, die von Entwicklern verwendet wird. Wie bei jeder anderen 3D-Bibliothek bietet es eingebaute Funktionen, die Ihnen helfen, gängige 3D-Funktionen schneller zu implementieren. Sehen Sie die Unterseite [Aufbau einer einfachen Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) für die Grundlagen der Nutzung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML und dem Schreiben des JavaScript-Codes.

### Aufbau einer einfachen Demo mit PlayCanvas

PlayCanvas ist eine beliebte 3D-WebGL-Game-Engine, die auf GitHub als Open Source verfügbar ist, mit einem Online-Editor und guter Dokumentation. Sehen Sie die Unterseite [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) für Details auf höherer Ebene und weitere Artikel, die zeigen, wie man Demos mit der PlayCanvas-Bibliothek und dem Online-Editor erstellt.

### Aufbau einer einfachen Demo mit Three.js

Three.js bietet Ihnen, wie jede andere Bibliothek, einen großen Vorteil: Anstatt Hunderte von Zeilen WebGL-Code zu schreiben, um etwas Interessantes zu erstellen, können Sie eingebaute Hilfsfunktionen nutzen, um es viel einfacher und schneller zu tun. Sehen Sie die Unterseite [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) für den Schritt-für-Schritt-Prozess zur Erstellung der Demo.

### Andere Werkzeuge

Sowohl [Unity](https://unity.com/) als auch [Unreal](https://www.unrealengine.com/en-US) können Ihr Spiel mit [asm.js](/de/docs/Games/Tools/asm.js) nach [WebGL](/de/docs/Web/API/WebGL_API) exportieren, sodass Sie frei sind, deren Werkzeuge und Techniken zu nutzen, um Spiele zu erstellen, die für das Web exportiert werden.

![Illustration von drei 3D-Geometrieformen: ein grauer Torus, ein blauer Würfel und ein gelber Zylinder.](shapes.png)

## Wohin als nächstes

Mit diesem Artikel haben wir gerade erst die Oberfläche des Möglichen mit den derzeit verfügbaren Technologien angekratzt. Sie können fesselnde, schöne und schnelle 3D-Spiele im Web mit WebGL und den darauf aufbauenden Bibliotheken und Frameworks erstellen.

### Quellcode

Sie finden den gesamten Quellcode für diese Serie [Demos auf GitHub](https://end3r.github.io/MDN-Games-3D/).

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
