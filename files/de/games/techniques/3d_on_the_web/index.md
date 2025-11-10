---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Für reichhaltige Spielerlebnisse im Web ist die Waffe der Wahl WebGL, das auf HTML-{{htmlelement("canvas")}} gerendert wird. WebGL ist im Grunde OpenGL ES 2.0 für das Web — es ist eine JavaScript-API, die Werkzeuge zur Verfügung stellt, um reichhaltige interaktive Animationen zu erstellen und natürlich auch Spiele. Sie können dynamische 3D-Grafiken mit JavaScript generieren und rendern, die hardwarebeschleunigt sind.

## Dokumentation und Browser-Kompatibilität

Die [WebGL](/de/docs/Web/API/WebGL_API)-Projektdokumentation und Spezifikation wird von der [Khronos Group](https://www.khronos.org/) gepflegt, nicht wie die meisten anderen Web-APIs vom W3C. Die Unterstützung in modernen Browsern ist sehr gut, sogar auf mobilen Geräten, sodass Sie sich darum nicht allzu viel Sorgen machen müssen. Die Hauptbrowser unterstützen alle WebGL und Sie müssen sich nur darauf konzentrieren, die Leistung auf den von Ihnen verwendeten Geräten zu optimieren.

Es gibt eine laufende Anstrengung, WebGL 2.0 (basierend auf OpenGL ES 3.0) in naher Zukunft zu veröffentlichen, was viele Verbesserungen bringen und Entwicklern helfen wird, Spiele für das moderne Web mit aktueller, leistungsfähiger Hardware zu erstellen.

## Erklärung der grundlegenden 3D-Theorie

Die Grundlagen der 3D-Theorie konzentrieren sich auf Formen, die in einem 3D-Raum dargestellt werden, wobei ein Koordinatensystem verwendet wird, um ihre Positionen zu berechnen. In unserem Artikel über die [Erklärung der grundlegenden 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) finden Sie alle notwendigen Informationen.

## Erweitere Konzepte

Mit WebGL können Sie viel mehr machen. Es gibt einige erweiterte Konzepte, in die Sie eintauchen und mehr darüber lernen sollten — wie Shader, Kollisionsabfrage oder das neueste heiße Thema: Virtual Reality im Web.

### Shader

Es lohnt sich, Shader zu erwähnen, die eine eigene Geschichte für sich sind. Shader verwenden GLSL, eine spezielle OpenGL-Shadersprache mit einer Syntax, die C ähnlich ist und direkt von der Grafik-Pipeline ausgeführt wird. Sie können in Vertex-Shader und Fragment-Shader (oder Pixel-Shader) unterteilt werden — erstere transformieren Positionsformen in reale 3D-Zeichenkoordinaten, während letztere Rendering-Farben und andere Attribute berechnen. Sie sollten sich definitiv den Artikel über [GLSL Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) ansehen, um mehr über sie zu lernen.

### Kollisionsabfrage

Es ist schwer, sich ein Spiel ohne Kollisionsabfrage vorzustellen — wir müssen immer herausfinden, wann etwas auf etwas anderes trifft. Wir haben Informationen, von denen Sie lernen können:

- [2D-Kollisionsabfrage](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsabfrage](/de/docs/Games/Techniques/3D_collision_detection)

### WebXR

Das Konzept der virtuellen Realität ist nicht neu, erlebt aber dank technischer Fortschritte wie der [Meta Quest](https://www.meta.com/quest/) und der (derzeit experimentellen) [WebXR API](/de/docs/Web/API/WebXR_Device_API) einen Aufschwung im Web, um Informationen von XR-Hardware zu erfassen und in JavaScript-Anwendungen nutzbar zu machen. Weitere Informationen finden Sie in [WebXR — Virtual and Augmented Reality for the Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Es gibt auch den Artikel [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame), der zeigt, wie einfach es ist, 3D-Umgebungen für die virtuelle Realität mit dem [A-Frame](https://aframe.io/) Framework zu bauen.

## Der Aufstieg von Bibliotheken und Frameworks

Das Codieren von rohem WebGL ist ziemlich komplex, aber auf lange Sicht sollten Sie lernen, damit umzugehen, da Ihre Projekte fortschrittlicher werden (siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API), um loszulegen). Für reale Projekte werden Sie wahrscheinlich auch ein Framework verwenden, um die Entwicklung zu beschleunigen und Ihnen bei der Verwaltung des Projekts zu helfen, an dem Sie arbeiten. Die Verwendung eines Frameworks für 3D-Spiele hilft auch, die Leistung zu optimieren, da vieles von den verwendeten Werkzeugen übernommen wird, sodass Sie sich auf den eigentlichen Bau des Spiels konzentrieren können.

Die populärste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein vielseitiges Werkzeug, das übliche 3D-Techniken einfacher umsetzbar macht. Es gibt auch andere beliebte Spieleentwicklungsbibliotheken und Frameworks, die es sich anzuschauen lohnt; [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten, mit umfangreicher Dokumentation, Online-Editoren und aktiven Communities.

### Aufbau einer einfachen Demo mit A-Frame

A-Frame ist ein Web-Framework zum Erstellen von 3D- und VR-Erlebnissen. Im Kern handelt es sich um ein Three.js-Framework mit einem deklarativen Entity-Component-Muster, was bedeutet, dass wir Szenen nur mit HTML erstellen können. Im Unterartikel [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) finden Sie den Schritt-für-Schritt-Prozess zur Erstellung der Demo.

### Aufbau einer einfachen Demo mit Babylon.js

Babylon.js ist eine der beliebtesten 3D-Spiel-Engines, die von Entwicklern verwendet wird. Wie jede andere 3D-Bibliothek bietet sie eingebaute Funktionen, die Ihnen helfen, gängige 3D-Funktionen schneller zu implementieren. Im Unterartikel [Aufbau einer einfachen Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) finden Sie die Grundlagen zur Verwendung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML und dem Schreiben des JavaScript-Codes.

### Aufbau einer einfachen Demo mit PlayCanvas

PlayCanvas ist eine beliebte 3D-WebGL-Spiel-Engine, die auf GitHub als Open Source verfügbar ist, mit einem Online-Editor und guter Dokumentation. Der Unterartikel [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) enthält Details auf höherer Ebene, und weitere Artikel zeigen, wie man Demos mit der PlayCanvas-Bibliothek und dem Online-Editor erstellt.

### Aufbau einer einfachen Demo mit Three.js

Three.js bietet, wie jede andere Bibliothek, einen großen Vorteil: Anstatt Hunderte von Zeilen WebGL-Code zu schreiben, um etwas Interessantes zu bauen, können Sie es mit eingebauten Hilfsfunktionen viel einfacher und schneller tun. Im Unterartikel [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wird der Schritt-für-Schritt-Prozess zur Erstellung der Demo beschrieben.

### Andere Werkzeuge

Sowohl [Unity](https://unity.com/) als auch [Unreal](https://www.unrealengine.com/en-US) können Ihr Spiel nach [WebGL](/de/docs/Web/API/WebGL_API) mit [asm.js](/de/docs/Games/Tools/asm.js) exportieren, so dass Sie deren Werkzeuge und Techniken verwenden können, um Spiele zu erstellen, die ins Web exportiert werden sollen.

![Illustration von drei 3D-Geometrieformen: ein grauer Torus, ein blauer Würfel und ein gelber Zylinder.](shapes.png)

## Wohin es als nächstes gehen soll

Mit diesem Artikel haben wir nur an der Oberfläche dessen gekratzt, was mit den derzeit verfügbaren Technologien möglich ist. Sie können immersive, schöne und schnelle 3D-Spiele im Web mit WebGL und den darauf aufbauenden Bibliotheken und Frameworks erstellen.

### Quellcode

Den gesamten Quellcode zu dieser Serie finden Sie [demos auf GitHub](https://end3r.github.io/MDN-Games-3D/).

### APIs

- [Canvas API](/de/docs/Web/API/Canvas_API)
- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebVR API](/de/docs/Web/API/WebVR_API)

### Frameworks

- [Three.js](https://threejs.org/)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](https://www.babylonjs.com/)
- [A-Frame](https://aframe.io/)

### Anleitungen

- [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Aufbau einer einfachen Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Aufbau einer einfachen Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
