---
title: "WebGL: 2D- und 3D-Grafiken für das Web"
slug: Web/API/WebGL_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("WebGL")}}

**WebGL** (Web Graphics Library) ist eine JavaScript-API zum Rendern von leistungsstarken interaktiven 3D- und 2D-Grafiken in jedem kompatiblen Webbrowser ohne die Verwendung von Plug-ins. WebGL führt dies durch die Einführung einer API durch, die eng an OpenGL ES 2.0 angepasst ist und in HTML-{{HTMLElement("canvas")}}-Elementen verwendet werden kann. Diese Konformität ermöglicht es der API, die Hardware-Grafikbeschleunigung des Geräts des Benutzers zu nutzen.

Unterstützung für WebGL ist in allen modernen Browsern vorhanden (siehe die [Kompatibilitätstabellen](#browserkompatibilität) unten); das Gerät des Benutzers muss jedoch auch über Hardware verfügen, die diese Funktionen unterstützt.

Die [WebGL 2](#webgl_2)-API führt die Unterstützung für einen Großteil des OpenGL ES 3.0-Funktionsumfangs ein; sie wird über das {{domxref("WebGL2RenderingContext")}}-Interface bereitgestellt.

Das {{HTMLElement("canvas")}}-Element wird auch von der [Canvas API](/de/docs/Web/API/Canvas_API) für 2D-Grafiken auf Webseiten verwendet.

## Referenz

### Standard-Interfaces

- {{domxref("WebGLRenderingContext")}}
- {{domxref("WebGL2RenderingContext")}}
- {{domxref("WebGLActiveInfo")}}
- {{domxref("WebGLBuffer")}}
- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLFramebuffer")}}
- {{domxref("WebGLProgram")}}
- {{domxref("WebGLQuery")}}
- {{domxref("WebGLRenderbuffer")}}
- {{domxref("WebGLSampler")}}
- {{domxref("WebGLShader")}}
- {{domxref("WebGLShaderPrecisionFormat")}}
- {{domxref("WebGLSync")}}
- {{domxref("WebGLTexture")}}
- {{domxref("WebGLTransformFeedback")}}
- {{domxref("WebGLUniformLocation")}}
- {{domxref("WebGLVertexArrayObject")}}

### Erweiterungen

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_float_blend")}} {{experimental_inline}}
- {{domxref("EXT_frag_depth")}}
- {{domxref("EXT_shader_texture_lod")}}
- {{domxref("EXT_sRGB")}}
- {{domxref("EXT_texture_compression_bptc")}}
- {{domxref("EXT_texture_compression_rgtc")}}
- {{domxref("EXT_texture_filter_anisotropic")}}
- {{domxref("EXT_texture_norm16")}}
- {{domxref("KHR_parallel_shader_compile")}}
- {{domxref("OES_draw_buffers_indexed")}}
- {{domxref("OES_element_index_uint")}}
- {{domxref("OES_fbo_render_mipmap")}}
- {{domxref("OES_standard_derivatives")}}
- {{domxref("OES_texture_float")}}
- {{domxref("OES_texture_float_linear")}}
- {{domxref("OES_texture_half_float")}}
- {{domxref("OES_texture_half_float_linear")}}
- {{domxref("OES_vertex_array_object")}}
- {{domxref("OVR_multiview2")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WEBGL_compressed_texture_astc")}}
- {{domxref("WEBGL_compressed_texture_etc")}}
- {{domxref("WEBGL_compressed_texture_etc1")}}
- {{domxref("WEBGL_compressed_texture_pvrtc")}}
- {{domxref("WEBGL_compressed_texture_s3tc")}}
- {{domxref("WEBGL_compressed_texture_s3tc_srgb")}}
- {{domxref("WEBGL_debug_renderer_info")}}
- {{domxref("WEBGL_debug_shaders")}}
- {{domxref("WEBGL_depth_texture")}}
- {{domxref("WEBGL_draw_buffers")}}
- {{domxref("WEBGL_lose_context")}}
- {{domxref("WEBGL_multi_draw")}}

### Ereignisse

- {{domxref("HTMLCanvasElement/webglcontextlost_event", "webglcontextlost")}}
- {{domxref("HTMLCanvasElement/webglcontextrestored_event", "webglcontextrestored")}}
- {{domxref("HTMLCanvasElement/webglcontextcreationerror_event", "webglcontextcreationerror")}}

### Konstanten und Typen

- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
- [WebGL-Typen](/de/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 ist ein bedeutendes Update für WebGL, das über das {{domxref("WebGL2RenderingContext")}}-Interface bereitgestellt wird. Es basiert auf OpenGL ES 3.0 und umfasst neue Funktionen wie:

- [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
- [Uniform-Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
- [Sync-Objekte](/de/docs/Web/API/WebGLSync),
- [Query-Objekte](/de/docs/Web/API/WebGLQuery),
- [Transform-Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
- Beförderte Erweiterungen, die nun Kernelemente von WebGL 2 sind: [Vertex-Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [Mehrfache Renderziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragmenttiefe](/de/docs/Web/API/EXT_frag_depth).

Siehe auch den Blogbeitrag ["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) und [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für einige Demos.

## Anleitungen und Tutorials

Im Folgenden finden Sie eine Auswahl an Anleitungen, die Ihnen helfen, WebGL-Konzepte zu erlernen, sowie Tutorials mit schrittweisen Lektionen und Beispielen.

### Anleitungen

- [Daten in WebGL](/de/docs/Web/API/WebGL_API/Data)
  - : Eine Anleitung zu Variablen, Buffern und anderen Datentypen, die beim Schreiben von WebGL-Code verwendet werden.
- [WebGL Best Practices](/de/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : Tipps und Vorschläge, um die Qualität, Leistung und Zuverlässigkeit Ihrer WebGL-Inhalte zu verbessern.
- [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
  - : Eine Anleitung zur Verwendung von WebGL-Erweiterungen.

### Tutorials

- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
  - : Ein Anfängerleitfaden für die Kernkonzepte von WebGL. Ein guter Ausgangspunkt, wenn Sie keine vorherige WebGL-Erfahrung haben.

### Beispiele

- [Ein einfaches 2D-WebGL-Animation-Beispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : Dieses Beispiel demonstriert die einfache Animation einer einfarbigen Form. Untersuchte Themen sind die Anpassung an Unterschiede im {{glossary("Seitenverhältnis")}}, eine Funktion zur Erstellung von Shader-Programmen aus Sets mehrerer Shader und die Grundlagen des Zeichnens in WebGL.
- [WebGL nach Beispiel](/de/docs/Web/API/WebGL_API/By_example)
  - : Eine Reihe von Live-Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten veranschaulichen. Die Beispiele sind nach Thema und Schwierigkeitsgrad sortiert und decken den WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktion und mehr ab.

### Fortgeschrittene Tutorials

- [WebGL Modellansichtprojektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : Eine detaillierte Erklärung der drei Kernmatrizen, die typischerweise verwendet werden, um eine 3D-Objektansicht darzustellen: die Modell-, Ansichts- und Projektionsmatrix.
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Ein nützlicher Leitfaden dazu, wie 3D-Transformationsmatrizen funktionieren und im Web verwendet werden können — sowohl für WebGL-Berechnungen als auch in CSS-Transformationen.

## Ressourcen

- [Khronos WebGL-Website](https://www.khronos.org/webgl/) Die Hauptwebsite für WebGL bei der Khronos Group.
- [WebGL-Grundlagen](https://web.dev/articles/webgl-fundamentals) Ein grundlegendes Tutorial zu den Grundlagen von WebGL.
- [Rohes WebGL: Eine Einführung in WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Ein Vortrag von Nick Desaulniers, der die Grundlagen von WebGL vorstellt.
- [WebGL Akademie](http://www.webglacademy.com/) Ein HTML/JavaScript-Editor mit Tutorials zum Erlernen der Grundlagen der WebGL-Programmierung.
- [WebGL-Statistiken](https://webglreport.com/) Eine Website mit Statistiken über WebGL-Fähigkeiten in Browsern auf verschiedenen Plattformen.

### Bibliotheken

- [three.js](https://threejs.org/) ist eine Open-Source, vollständig ausgestattete 3D-WebGL-Bibliothek.
- [Babylon.js](https://www.babylonjs.com/) ist eine leistungsstarke, einfache und offene Spiel- und 3D-Rendering-Engine, die in einem benutzerfreundlichen JavaScript-Framework verpackt ist.
- [Pixi.js](https://pixijs.com/) ist ein schneller, quelloffener 2D-WebGL-Renderer.
- [Phaser](https://phaser.io/) ist ein schnelles, kostenloses und unterhaltsames Open-Source-Framework für Canvas- und WebGL-gesteuerte Browserspiele.
- [PlayCanvas](https://playcanvas.com/) ist eine Open-Source-Spiel-Engine.
- [glMatrix](https://github.com/toji/gl-matrix) ist eine JavaScript-Matrix- und Vektorbibliothek für hochleistungsfähige WebGL-Anwendungen.
- [twgl](https://twgljs.org/) ist eine Bibliothek, um WebGL weniger wortreich zu machen.
- [RedGL](https://github.com/redcamel/RedGL2) ist eine Open-Source-3D-WebGL-Bibliothek.
- [vtk.js](https://kitware.github.io/vtk-js/) ist eine JavaScript-Bibliothek für wissenschaftliche Visualisierung in Ihrem Browser.
- [webgl-lint](https://greggman.github.io/webgl-lint/) hilft, Fehler in Ihrem WebGL-Code zu finden und nützliche Informationen bereitzustellen.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

### Kompatibilitätsnotizen

Zusätzlich zum Browser muss auch die GPU selbst das Feature unterstützen. S3 Texture Compression (S3TC) ist zum Beispiel nur auf Tegra-basierten Tablets verfügbar. Die meisten Browser stellen den WebGL-Kontext über den `webgl` Kontextnamen zur Verfügung, aber ältere benötigen auch `experimental-webgl`. Darüber hinaus ist das kommende [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) vollständig abwärtskompatibel und wird den Kontextnamen `webgl2` haben.

### Gecko-Hinweise

#### WebGL-Debugging und -Testing

Firefox bietet zwei verfügbare Einstellungen, die es Ihnen ermöglichen, die Fähigkeiten von WebGL zu Testzwecken zu steuern:

- `webgl.min_capability_mode`
  - : Eine Boolean-Eigenschaft, die bei `true` einen Mindestfähigkeitsmodus aktiviert. In diesem Modus ist WebGL so konfiguriert, dass es nur die minimal erforderlichen Funktionen und Fähigkeiten unterstützt, die von der WebGL-Spezifikation gefordert werden. Dies ermöglicht es Ihnen sicherzustellen, dass Ihr WebGL-Code auf jedem Gerät oder Browser funktioniert, unabhängig von deren Fähigkeiten. Standardmäßig ist dies `false`.
- `webgl.disable_extensions`
  - : Eine Boolean-Eigenschaft, die bei `true` alle WebGL-Erweiterungen deaktiviert. Standardmäßig ist dies `false`.

## Siehe auch

- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [Kompatibilitätsinfo zu WebGL-Erweiterungen](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#browser_compatibility)
