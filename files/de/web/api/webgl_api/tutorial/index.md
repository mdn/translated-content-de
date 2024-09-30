---
title: WebGL-Tutorial
slug: Web/API/WebGL_API/Tutorial
l10n:
  sourceCommit: 621c7978886787ca66bc5e90e457cf1466e58d35
---

{{DefaultAPISidebar("WebGL")}}

Dieses Tutorial beschreibt, wie Sie das {{HTMLElement("canvas")}}-Element verwenden, um WebGL-Grafiken zu zeichnen, beginnend mit den Grundlagen. Die bereitgestellten Beispiele sollten Ihnen einige klare Vorstellungen darüber geben, was Sie mit WebGL machen können, und enthalten Code-Snippets, die Ihnen den Einstieg in die Erstellung eigener Inhalte erleichtern können.

[WebGL](https://www.khronos.org/webgl/) ermöglicht es, dass Webinhalte eine API basierend auf [OpenGL ES](https://www.khronos.org/opengles/) 2.0 verwenden, um 3D-Rendering in einem HTML `<canvas>` in unterstützenden Browsern ohne die Verwendung von Plug-ins durchzuführen. WebGL-Programme bestehen aus Steuerungscode, der in JavaScript geschrieben wird, und Spezialeffektcode (Shader-Code), der auf der Graphikprozessor-Einheit (GPU) eines Computers ausgeführt wird. WebGL-Elemente können mit anderen HTML-Elementen vermischt und mit anderen Teilen der Seite oder dem Seitenhintergrund zusammengesetzt werden.

## Bevor Sie beginnen

Die Verwendung des `<canvas>`-Elements ist nicht sehr schwierig, aber Sie benötigen ein grundlegendes Verständnis von [HTML](/de/docs/Web/HTML) und [JavaScript](/de/docs/Web/JavaScript). Das `<canvas>`-Element und WebGL werden in einigen älteren Browsern nicht unterstützt, aber in den aktuellen Versionen aller großen Browser. Um Grafiken auf der Leinwand zu zeichnen, verwenden wir ein JavaScript-Kontextobjekt, das Grafiken in Echtzeit erstellt.

## In diesem Tutorial

- [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
  - : Wie man einen WebGL-Kontext einrichtet.
- [Hinzufügen von 2D-Inhalten zu einem WebGL-Kontext](/de/docs/Web/API/WebGL_API/Tutorial/Adding_2D_content_to_a_WebGL_context)
  - : Wie man einfache flache Formen mit WebGL rendert.
- [Verwendung von Shadern zur Farbgestaltung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL)
  - : Zeigt, wie man Formen mit Shadern einfärbt.
- [Objekte mit WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL)
  - : Zeigt, wie man Objekte dreht und verschiebt, um einfache Animationen zu erstellen.
- [Erstellen von 3D-Objekten mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL)
  - : Zeigt, wie man ein 3D-Objekt (in diesem Fall einen Würfel) erstellt und animiert.
- [Verwendung von Texturen in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)
  - : Demonstriert, wie man Texturen auf die Flächen eines Objekts abbildet.
- [Beleuchtung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Lighting_in_WebGL)
  - : Wie man Beleuchtungseffekte in Ihrem WebGL-Kontext simuliert.
- [Texturen in WebGL animieren](/de/docs/Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL)
  - : Zeigt, wie man Texturen animiert; in diesem Fall durch das Abbilden eines Ogg-Videos auf die Flächen eines rotierenden Würfels.
