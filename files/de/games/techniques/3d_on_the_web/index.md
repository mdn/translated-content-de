---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{GamesSidebar}}

Für umfangreiche Spielerfahrungen im Web ist WebGL das Mittel der Wahl, das auf HTML-{{htmlelement("canvas")}} gerendert wird. WebGL ist im Grunde OpenGL ES 2.0 für das Web — es ist eine JavaScript-API, die Werkzeuge bereitstellt, um umfangreiche interaktive Animationen und natürlich auch Spiele zu erstellen. Sie können dynamische 3D-Grafiken mit JavaScript generieren und rendern, die hardwarebeschleunigt sind.

## Dokumentation und Browser-Unterstützung

Die [WebGL](/de/docs/Web/API/WebGL_API)-Projektdokumentation und Spezifikation wird von der [Khronos Group](https://www.khronos.org/) gepflegt, im Gegensatz zu den meisten anderen Web-APIs, die vom W3C verwaltet werden. Die Unterstützung in modernen Browsern ist sehr gut, sogar auf Mobilgeräten, sodass Sie sich darum nicht allzu viele Gedanken machen müssen. Die wichtigsten Browser unterstützen alle WebGL, und Sie müssen sich nur darauf konzentrieren, die Leistung auf den von Ihnen verwendeten Geräten zu optimieren.

Es gibt laufende Bemühungen, WebGL 2.0 (basierend auf OpenGL ES 3.0) in naher Zukunft zu veröffentlichen, was viele Verbesserungen bringen wird und Entwicklern hilft, Spiele für das moderne Web mit aktueller, leistungsfähiger Hardware zu erstellen.

## Erklärung der grundlegenden 3D-Theorie

Die Grundlagen der 3D-Theorie konzentrieren sich auf Formen, die in einem 3D-Raum dargestellt werden, wobei ein Koordinatensystem zur Berechnung ihrer Positionen verwendet wird. Sehen Sie unseren Artikel [Grundlagen der 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) für alle Informationen, die Sie benötigen.

## Erweiterte Konzepte

Mit WebGL kann man noch viel mehr machen. Es gibt einige fortgeschrittene Konzepte, in die Sie sich vertiefen und mehr darüber erfahren sollten — wie Shader, Kollisionsabfrage oder das neueste Trendthema: Virtual Reality im Web.

### Shader

Es lohnt sich, Shader zu erwähnen, die ihre eigene Geschichte sind. Shader verwenden GLSL, eine spezielle OpenGL-Shadersprache, mit einer Syntax ähnlich wie C, die direkt durch die Grafik-Pipeline ausgeführt wird. Sie können in Vertex-Shader und Fragment-Shader (oder Pixel-Shader) unterteilt werden — die ersteren transformieren Formpositionen in reale 3D-Zeichenkoordinaten, während die letzteren Renderfarben und andere Attribute berechnen. Sie sollten definitiv den Artikel [GLSL Shaders](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) ansehen, um mehr über sie zu erfahren.

### Kollisionsabfrage

Es ist schwer, sich ein Spiel ohne Kollisionsabfrage vorzustellen — wir müssen immer herausfinden, wann etwas auf etwas anderes trifft. Wir haben Informationen für Sie bereitgestellt, von denen Sie lernen können:

- [2D-Kollisionsabfrage](/de/docs/Games/Techniques/2D_collision_detection)
- [3D-Kollisionsabfrage](/de/docs/Games/Techniques/3D_collision_detection)

### WebXR

Das Konzept der virtuellen Realität ist nicht neu, drängt aber dank Hardware-Fortschritten wie dem [Meta Quest](https://www.meta.com/quest/) und der (derzeit experimentellen) [WebXR API](/de/docs/Web/API/WebXR_Device_API) für die Erfassung von Informationen aus XR-Hardware und deren Bereitstellung zur Verwendung in JavaScript-Anwendungen auf das Web. Weitere Informationen finden Sie unter [WebXR — Virtuelle und erweiterte Realität für das Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Es gibt auch den Artikel [Grundlegende Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame), der Ihnen zeigt, wie einfach es ist, 3D-Umgebungen für virtuelle Realität mit dem [A-Frame](https://aframe.io/)-Framework zu erstellen.

## Der Aufstieg von Bibliotheken und Frameworks

Das Programmieren von rohem WebGL ist ziemlich komplex, aber auf lange Sicht sollten Sie sich damit auseinandersetzen, da Ihre Projekte fortschrittlicher werden (siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API), um loszulegen.) Für realistische Projekte werden Sie wahrscheinlich auch ein Framework verwenden, um die Entwicklung zu beschleunigen und Ihnen bei der Verwaltung des Projekts zu helfen, an dem Sie arbeiten. Die Verwendung eines Frameworks für 3D-Spiele hilft auch bei der Optimierung der Leistung, da vieles von den von Ihnen verwendeten Tools übernommen wird, sodass Sie sich auf den Aufbau des Spiels selbst konzentrieren können.

Die bekannteste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein vielseitiges Werkzeug, das gängige 3D-Techniken einfacher umsetzbar macht. Es gibt auch andere beliebte Spieleentwicklungs-Bibliotheken und Frameworks, die einen Blick wert sind; [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten mit reichhaltiger Dokumentation, Online-Editoren und aktiven Communities.

### Grundlegende Demo mit A-Frame aufbauen

A-Frame ist ein Web-Framework zum Erstellen von 3D- und VR-Erlebnissen. Unter der Haube ist es ein Three.js-Framework mit einem deklarativen Entity-Component-Muster, was bedeutet, dass wir Szenen nur mit HTML erstellen können. Sehen Sie sich die Unterseite [Grundlegende Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) für den Schritt-für-Schritt-Prozess der Erstellung der Demo an.

### Grundlegende Demo mit Babylon.js aufbauen

Babylon.js ist eine der beliebtesten 3D-Spielengines, die von Entwicklern verwendet wird. Wie bei jeder anderen 3D-Bibliothek bietet sie integrierte Funktionen, um allgemeine 3D-Funktionalitäten schneller zu implementieren. Sehen Sie sich die Unterseite [Grundlegende Demo mit Babylon.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) für die Grundlagen der Verwendung von Babylon.js an, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des benötigten HTML und des Schreibens des JavaScript-Codes.

### Grundlegende Demo mit PlayCanvas aufbauen

PlayCanvas ist eine beliebte 3D-WebGL-Spieleengine, die auf GitHub als Open Source verfügbar ist, mit einem Online-Editor und guter Dokumentation. Sehen Sie sich die Unterseite [Grundlegende Demo mit PlayCanvas aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) für Details auf höherer Ebene an und lesen Sie weitere Artikel, die zeigen, wie man Demos mit der PlayCanvas-Bibliothek und dem Online-Editor erstellt.

### Grundlegende Demo mit Three.js aufbauen

Three.js bietet Ihnen wie jede andere Bibliothek einen großen Vorteil: Statt Hunderte von WebGL-Codezeilen zu schreiben, um etwas Interessantes zu erstellen, können Sie eingebaute Hilfsfunktionen verwenden, um es viel einfacher und schneller zu tun. Sehen Sie sich die Unterseite [Grundlegende Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) für den Schritt-für-Schritt-Prozess der Erstellung der Demo an.

### Weitere Werkzeuge

Sowohl [Unity](https://unity.com/) als auch [Unreal](https://www.unrealengine.com/en-US) können Ihr Spiel nach [WebGL](/de/docs/Web/API/WebGL_API) mit [asm.js](/de/docs/Games/Tools/asm.js) exportieren, sodass Sie frei sind, deren Werkzeuge und Techniken zu verwenden, um Spiele zu erstellen, die ins Web exportiert werden.

![Illustration von drei 3D-Geometrieformen: ein grauer Torus, ein blauer Würfel und ein gelber Zylinder.](shapes.png)

## Wohin als nächstes

Mit diesem Artikel haben wir nur an der Oberfläche dessen gekratzt, was mit den derzeit verfügbaren Technologien möglich ist. Sie können immersive, schöne und schnelle 3D-Spiele im Web mit WebGL und den darauf aufbauenden Bibliotheken und Frameworks erstellen.

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

- [Grundlegende Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Grundlegende Demo mit PlayCanvas aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Grundlegende Demo mit Babylon.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Grundlegende Demo mit A-Frame aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
