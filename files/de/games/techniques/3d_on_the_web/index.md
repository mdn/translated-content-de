---
title: 3D-Spiele im Web
slug: Games/Techniques/3D_on_the_web
l10n:
  sourceCommit: d86a376c3e6e4761d747314a015fa6afe121600f
---

Für aufwendige Spielerlebnisse im Web eignen sich die [WebGL API](/de/docs/Web/API/WebGL_API) und ihr Nachfolger, die [WebGPU API](/de/docs/Web/API/WebGPU_API). Beide können hardwarebeschleunigte 3D-Grafiken auf einem HTML-{{htmlelement("canvas")}} rendern.

## Grundlagen der 3D-Theorie

Die 3D-Theorie befasst sich mit Formen in einem dreidimensionalen Raum und einem Koordinatensystem, mit dem sich ihre Positionen berechnen lassen. In unserem Artikel [Grundlagen der 3D-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) finden Sie alle nötigen Informationen.

## Fortgeschrittene Konzepte

Mit WebGL und WebGPU lässt sich vieles umsetzen. Zu den wichtigen Konzepten, mit denen Sie sich näher befassen sollten, gehören Shader, Kollisionserkennung und virtuelle Realität.

### Shader

Shader verdienen eine eigene Betrachtung. Sie verwenden die Sprachen GLSL (für WebGL) und WGSL (für WebGPU), deren Syntax C ähnelt und die direkt in der Grafikpipeline ausgeführt werden. Man unterscheidet Vertex-Shader und Fragment-Shader (oder Pixel-Shader): Erstere wandeln die Positionen von Formen in tatsächliche 3D-Zeichenkoordinaten um, während Letztere die Farben und weitere Eigenschaften für das Rendering berechnen.

[GLSL-Shader](/de/docs/Games/Techniques/3D_on_the_web/GLSL_Shaders) bietet weitere Informationen und ein GLSL-Beispiel für WebGL.

### Kollisionserkennung

Ein Spiel ohne Kollisionserkennung ist kaum vorstellbar: Wir müssen stets feststellen können, wann ein Objekt mit einem anderen zusammenstößt. Weitere Informationen finden Sie unter [3D-Kollisionserkennung](/de/docs/Games/Techniques/3D_collision_detection).

### WebXR

Das Konzept der virtuellen Realität (VR) ist nicht neu, gewinnt aber im Web stark an Bedeutung. Dazu tragen Fortschritte bei der Hardware wie die [Meta Quest](https://www.meta.com/quest/) sowie die [WebXR API](/de/docs/Web/API/WebXR_Device_API) bei, die Informationen von XR-Hardware erfasst und für JavaScript-Anwendungen verfügbar macht. Mehr dazu erfahren Sie unter [WebXR – virtuelle und erweiterte Realität für das Web](/de/docs/Games/Techniques/3D_on_the_web/WebXR).

Daneben erleichtert das Framework [A-Frame](https://aframe.io/) die Erstellung von Web-VR-Erlebnissen. Weitere Einzelheiten finden Sie unter [Eine einfache Demo mit A-Frame erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame).

## Der Aufstieg von Bibliotheken und Frameworks

Direkt mit WebGL oder WebGPU zu programmieren ist recht komplex. Wenn Ihre Projekte anspruchsvoller werden, lohnt es sich jedoch, sich langfristig damit vertraut zu machen. Bei Projekten für den praktischen Einsatz werden Sie wahrscheinlich ein Framework verwenden, um die Entwicklung zu beschleunigen und Ihren Code besser zu verwalten. Ein Framework für 3D-Spiele hilft außerdem bei der Leistungsoptimierung: Die eingesetzten Werkzeuge übernehmen viele Aufgaben, sodass Sie sich auf die Entwicklung des Spiels konzentrieren können.

Die beliebteste JavaScript-3D-Bibliothek ist [Three.js](https://threejs.org/), ein vielseitiges Werkzeug, das die Umsetzung gängiger 3D-Techniken vereinfacht. Auch andere beliebte Bibliotheken und Frameworks für die Spieleentwicklung sind einen Blick wert. [A-Frame](https://aframe.io/), [PlayCanvas](https://playcanvas.com/) und [Babylon.js](https://www.babylonjs.com/) gehören zu den bekanntesten und bieten umfangreiche Dokumentationen, Online-Editoren und aktive Communitys.

### Eine einfache Demo mit A-Frame erstellen

A-Frame ist ein Web-Framework zum Erstellen von 3D- und VR-Erlebnissen. Es basiert auf Three.js und verwendet ein deklaratives Entity-Component-Muster. Dadurch lassen sich Szenen allein mit HTML erstellen. Auf der Unterseite [Eine einfache Demo mit A-Frame erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) wird die Erstellung der Demo Schritt für Schritt beschrieben.

### Eine einfache Demo mit Babylon.js erstellen

Babylon.js ist eine der beliebtesten 3D-Spiele-Engines unter Entwicklern. Wie andere 3D-Bibliotheken stellt es integrierte Funktionen bereit, mit denen Sie gängige 3D-Funktionen schneller umsetzen können. Auf der Unterseite [Eine einfache Demo mit Babylon.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js) lernen Sie die Grundlagen der Verwendung von Babylon.js kennen: das Einrichten einer Entwicklungsumgebung, die Strukturierung des erforderlichen HTML und das Schreiben des JavaScript-Codes.

### Eine einfache Demo mit PlayCanvas erstellen

PlayCanvas ist eine beliebte 3D-Spiele-Engine, die mit WebGL und WebGPU rendert. Ihr Quellcode ist auf GitHub verfügbar; außerdem gibt es einen Online-Editor und eine gute Dokumentation. Die Unterseite [Eine einfache Demo mit PlayCanvas erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) bietet einen Überblick. Weitere Artikel zeigen, wie Sie mit der PlayCanvas-Bibliothek und dem Online-Editor Demos erstellen.

### Eine einfache Demo mit Three.js erstellen

Wie andere Bibliotheken bietet Three.js einen großen Vorteil: Statt Hunderte Zeilen WebGL- oder WebGPU-Code für ein interessantes Ergebnis zu schreiben, können Sie integrierte Hilfsfunktionen verwenden und so deutlich schneller ans Ziel kommen. Eine grundlegende Einführung finden Sie unter [Eine einfache Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js).

### Weitere Werkzeuge

[Unity](https://unity.com/) und [Unreal](https://www.unrealengine.com/) sind sehr beliebte 3D-Engines. Beide können Projekte für WebGL oder WebGPU exportieren. Sie können daher ihre Werkzeuge und Techniken nutzen, um Spiele zu entwickeln und anschließend für das Web zu exportieren.

![Abbildung von drei geometrischen 3D-Formen: einem grauen Torus, einem blauen Würfel und einem gelben Zylinder.](shapes.png)

## Wie es weitergeht

Dieser Artikel hat die Möglichkeiten der derzeit verfügbaren Technologien nur angerissen. Mit WebGL oder WebGPU und den zugehörigen Bibliotheken und Frameworks können Sie immersive, ansprechende und leistungsfähige 3D-Spiele für das Web entwickeln.

### Quellcode

Den gesamten Quellcode für die Demos dieser Artikelreihe finden Sie [auf GitHub](https://end3r.github.io/MDN-Games-3D/).

### APIs

- [Canvas API](/de/docs/Web/API/Canvas_API)
- [WebGL API](/de/docs/Web/API/WebGL_API)
- [WebGPU API](/de/docs/Web/API/WebGPU_API)
- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)

### Frameworks

- [Three.js](https://threejs.org/)
- [PlayCanvas](https://playcanvas.com/)
- [Babylon.js](https://www.babylonjs.com/)
- [A-Frame](https://aframe.io/)

### Tutorials

- [Eine einfache Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js)
- [Eine einfache Demo mit PlayCanvas erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas)
- [Eine einfache Demo mit Babylon.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js)
- [Eine einfache Demo mit A-Frame erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame)
