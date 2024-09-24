---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GamesSidebar}}

Für reichhaltige Spielerlebnisse im Web ist WebGL das Mittel der Wahl, das auf HTML {{htmlelement("canvas")}} gerendert wird. WebGL ist im Grunde ein OpenGL ES 2.0 für das Web – es ist eine JavaScript-API, die Werkzeuge zum Erstellen von reichen interaktiven Animationen bietet und natürlich auch Spiele. Sie können mit JavaScript dynamische 3D-Grafiken erzeugen und rendern, die hardwarebeschleunigt sind.

## Dokumentation und Browserunterstützung

Die [WebGL](/de/docs/Web/API/WebGL_API)-Projektdokumentation und Spezifikation wird von der [Khronos Group](https://www.khronos.org/) gepflegt, nicht wie die meisten Web-APIs vom W3C. Die Unterstützung auf modernen Browsern ist sehr gut, auch auf mobilen Geräten, sodass Sie sich darüber nicht allzu viele Sorgen machen müssen. Die wichtigsten Browser unterstützen alle WebGL und Sie müssen sich nur darauf konzentrieren, die Leistung auf den von Ihnen verwendeten Geräten zu optimieren.

Es gibt laufende Bemühungen, WebGL 2.0 (basierend auf OpenGL ES 3.0) in naher Zukunft zu veröffentlichen, was viele Verbesserungen bringen wird und Entwicklern helfen wird, Spiele für das moderne Web mit aktueller, leistungsfähiger Hardware zu erstellen.

## Erklärung der grundlegenden 3D-Theorie

Die Grundlagen der 3D-Theorie konzentrieren sich auf Formen, die in einem 3D-Raum dargestellt werden, wobei ein Koordinatensystem verwendet wird, um ihre Positionen zu berechnen. Siehe unseren Artikel [Erklärung der grundlegenden 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) für alle Informationen, die Sie benötigen.

## Fortgeschrittene Konzepte

Mit WebGL können Sie noch viel mehr machen. Es gibt einige fortgeschrittene Konzepte, in die Sie eintauchen und mehr darüber lernen sollten – wie Shader, Kollisionsabfrage oder das neueste heiße Thema: virtuelle Realität im Web.

### Shader

Es lohnt sich, Shader zu erwähnen, die eine eigene Geschichte sind. Shader verwenden GLSL, eine spezielle OpenGL-Shading-Sprache, mit einer ähnlichen Syntax wie C, die direkt von der Grafik-Pipeline ausgeführt wird. Sie können in Vertex-Shader und Fragment-Shader (oder Pixel-Shader) unterteilt werden – erstere transformieren die Formpositionen in echte 3D-Zeichenkoordinaten, während letztere Renderfarben und andere Attribute berechnen. Sie sollten unbedingt unseren Artikel über [GLSL-Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) ansehen, um mehr darüber zu erfahren.

### Kollisionsabfrage

Es ist schwer, sich ein Spiel ohne Kollisionsabfrage vorzustellen – wir müssen immer herausfinden, wann etwas auf etwas anderes trifft. Wir haben Informationen, die Sie lernen können:

- [2D-Kollisionsabfrage](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsabfrage](/de/docs/Games/Techniques/3D_collision_detection)

### WebXR

Das Konzept der virtuellen Realität ist nicht neu, stürmt aber dank Hardware-Fortschritten wie der [Meta Quest](https://www.meta.com/quest/) ins Web, und der (derzeit experimentellen) [WebXR API](/de/docs/Web/API/WebXR_Device_API), um Informationen von XR-Hardware zu erfassen und für die Verwendung in JavaScript-Anwendungen bereitzustellen. Für mehr Informationen lesen Sie [WebXR – Virtuelle und erweiterte Realität für das Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Es gibt auch den Artikel [Erstellen einer grundlegenden Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame), der Ihnen zeigt, wie einfach es ist, 3D-Umgebungen für die virtuelle Realität mit dem [A-Frame](https://aframe.io/) Framework zu erstellen.

## Der Aufstieg von Bibliotheken und Frameworks

Das Programmieren von rohem WebGL ist ziemlich komplex, aber Sie sollten es im Laufe der Zeit beherrschen, da Ihre Projekte immer anspruchsvoller werden (sehen Sie sich unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) an, um loszulegen). Für echte Projekte werden Sie wahrscheinlich auch ein Framework verwenden, um die Entwicklung zu beschleunigen und bei der Verwaltung des Projekts zu helfen, an dem Sie arbeiten. Die Verwendung eines Frameworks für 3D-Spiele hilft auch dabei, die Leistung zu optimieren, da vieles von den eingesetzten Werkzeugen übernommen wird, sodass Sie sich auf die Erstellung des Spiels selbst konzentrieren können.

Die bekannteste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein Mehrzweckwerkzeug, das übliche 3D-Techniken einfacher zu implementieren macht. Es gibt auch andere beliebte Spieleentwicklungsbibliotheken und -frameworks, die es wert sind, geprüft zu werden; [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten mit umfangreicher Dokumentation, Online-Editoren und aktiven Gemeinschaften.

### Erstellen einer grundlegenden Demo mit A-Frame

A-Frame ist ein Web-Framework für den Aufbau von 3D- und VR-Erlebnissen. Im Hintergrund ist es ein Three.js-Framework mit einem deklarativen Entitätskomponenten-Muster, was bedeutet, dass wir Szenen einfach mit HTML erstellen können. Sehen Sie sich die Unterseite [Erstellen einer grundlegenden Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) für den Schritt-für-Schritt-Prozess zur Erstellung der Demo an.

### Erstellen einer grundlegenden Demo mit Babylon.js

Babylon.js ist eine der beliebtesten 3D-Spiel-Engines, die von Entwicklern verwendet wird. Wie jede andere 3D-Bibliothek bietet sie integrierte Funktionen, die Ihnen helfen, häufige 3D-Funktionalitäten schneller zu implementieren. Sehen Sie sich die Unterseite [Erstellen einer grundlegenden Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) für die Grundlagen der Verwendung von Babylon.js an, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des erforderlichen HTML und dem Schreiben des JavaScript-Codes.

### Erstellen einer grundlegenden Demo mit PlayCanvas

PlayCanvas ist eine beliebte 3D-WebGL-Spiel-Engine, die auf GitHub als Open Source verfügbar ist, mit einem Online-Editor und umfassender Dokumentation. Sehen Sie sich die Unterseite [Erstellen einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) für Details auf höherer Ebene an und weitere Artikel, die zeigen, wie man Demos mit der PlayCanvas-Bibliothek und dem Online-Editor erstellt.

### Erstellen einer grundlegenden Demo mit Three.js

Three.js bietet Ihnen, wie jede andere Bibliothek, einen großen Vorteil: Anstatt Hunderte von Zeilen WebGL-Code zu schreiben, um etwas Interessantes zu bauen, können Sie integrierte Hilfsfunktionen verwenden, um es einfacher und schneller zu machen. Sehen Sie sich die Unterseite [Erstellen einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) für den Schritt-für-Schritt-Prozess zur Erstellung der Demo an.

### Andere Werkzeuge

Sowohl [Unity](https://unity.com/) als auch [Unreal](https://www.unrealengine.com/en-US) können Ihr Spiel in [WebGL](/de/docs/Web/API/WebGL_API) mit [asm.js](/de/docs/Games/Tools/asm.js) exportieren, sodass Sie deren Werkzeuge und Techniken verwenden können, um Spiele zu erstellen, die ins Web exportiert werden.

![Illustration von drei geometrischen 3D-Formen: ein grauer Torus, ein blauer Würfel und ein gelber Zylinder.](shapes.png)

## Wohin als nächstes

Mit diesem Artikel haben wir nur die Oberfläche dessen angekratzt, was mit den derzeit verfügbaren Technologien möglich ist. Sie können immersive, schöne und schnelle 3D-Spiele im Web mit WebGL und darauf aufbauenden Bibliotheken und Frameworks erstellen.

### Quellcode

Den gesamten Quellcode für diese Serie finden Sie [demos auf GitHub](https://end3r.github.io/MDN-Games-3D/).

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

- [Erstellen einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Erstellen einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Erstellen einer grundlegenden Demo mit Babylon.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Erstellen einer grundlegenden Demo mit A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
