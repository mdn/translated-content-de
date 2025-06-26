---
title: "WebGL: 2D and 3D graphics for the web"
slug: Web/API/WebGL_API
l10n:
  sourceCommit: d0ed4906719465102739e604bdb35213fb19f251
---

{{DefaultAPISidebar("WebGL")}}{{AvailableInWorkers}}

**WebGL** (Web Graphics Library) ist eine JavaScript-API für das Rendern von hochleistungsfähigen interaktiven 3D- und 2D-Grafiken in jedem kompatiblen Webbrowser, ohne den Einsatz von Plug-ins. WebGL erreicht dies durch die Einführung einer API, die eng an OpenGL ES 2.0 angelehnt ist und in HTML-{{HTMLElement("canvas")}}-Elementen verwendet werden kann. Diese Konformität ermöglicht es der API, von der Hardware-Beschleunigung durch die Grafik des Geräts des Nutzers zu profitieren.

Unterstützung für WebGL ist in allen modernen Browsern vorhanden (siehe die [Kompatibilitätstabellen](#browser-kompatibilität) unten); das Gerät des Nutzers muss jedoch auch Hardware besitzen, die diese Funktionen unterstützt.

Die [WebGL 2](#webgl_2) API führt Unterstützung für viele Funktionen des OpenGL ES 3.0-Sets ein; sie wird über das [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Interface bereitgestellt.

Das {{HTMLElement("canvas")}}-Element wird auch von der [Canvas API](/de/docs/Web/API/Canvas_API) verwendet, um 2D-Grafiken auf Webseiten zu erstellen.

## Referenz

### Standard-Schnittstellen

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)
- [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)
- [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)
- [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent)
- [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
- [`WebGLProgram`](/de/docs/Web/API/WebGLProgram)
- [`WebGLQuery`](/de/docs/Web/API/WebGLQuery)
- [`WebGLRenderbuffer`](/de/docs/Web/API/WebGLRenderbuffer)
- [`WebGLSampler`](/de/docs/Web/API/WebGLSampler)
- [`WebGLShader`](/de/docs/Web/API/WebGLShader)
- [`WebGLShaderPrecisionFormat`](/de/docs/Web/API/WebGLShaderPrecisionFormat)
- [`WebGLSync`](/de/docs/Web/API/WebGLSync)
- [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)
- [`WebGLTransformFeedback`](/de/docs/Web/API/WebGLTransformFeedback)
- [`WebGLUniformLocation`](/de/docs/Web/API/WebGLUniformLocation)
- [`WebGLVertexArrayObject`](/de/docs/Web/API/WebGLVertexArrayObject)

### Erweiterungen

- [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays)
- [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)
- [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)
- [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
- [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend) {{experimental_inline}}
- [`EXT_frag_depth`](/de/docs/Web/API/EXT_frag_depth)
- [`EXT_shader_texture_lod`](/de/docs/Web/API/EXT_shader_texture_lod)
- [`EXT_sRGB`](/de/docs/Web/API/EXT_sRGB)
- [`EXT_texture_compression_bptc`](/de/docs/Web/API/EXT_texture_compression_bptc)
- [`EXT_texture_compression_rgtc`](/de/docs/Web/API/EXT_texture_compression_rgtc)
- [`EXT_texture_filter_anisotropic`](/de/docs/Web/API/EXT_texture_filter_anisotropic)
- [`EXT_texture_norm16`](/de/docs/Web/API/EXT_texture_norm16)
- [`KHR_parallel_shader_compile`](/de/docs/Web/API/KHR_parallel_shader_compile)
- [`OES_draw_buffers_indexed`](/de/docs/Web/API/OES_draw_buffers_indexed)
- [`OES_element_index_uint`](/de/docs/Web/API/OES_element_index_uint)
- [`OES_fbo_render_mipmap`](/de/docs/Web/API/OES_fbo_render_mipmap)
- [`OES_standard_derivatives`](/de/docs/Web/API/OES_standard_derivatives)
- [`OES_texture_float`](/de/docs/Web/API/OES_texture_float)
- [`OES_texture_float_linear`](/de/docs/Web/API/OES_texture_float_linear)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
- [`OES_texture_half_float_linear`](/de/docs/Web/API/OES_texture_half_float_linear)
- [`OES_vertex_array_object`](/de/docs/Web/API/OES_vertex_array_object)
- [`OVR_multiview2`](/de/docs/Web/API/OVR_multiview2)
- [`WEBGL_color_buffer_float`](/de/docs/Web/API/WEBGL_color_buffer_float)
- [`WEBGL_compressed_texture_astc`](/de/docs/Web/API/WEBGL_compressed_texture_astc)
- [`WEBGL_compressed_texture_etc`](/de/docs/Web/API/WEBGL_compressed_texture_etc)
- [`WEBGL_compressed_texture_etc1`](/de/docs/Web/API/WEBGL_compressed_texture_etc1)
- [`WEBGL_compressed_texture_pvrtc`](/de/docs/Web/API/WEBGL_compressed_texture_pvrtc)
- [`WEBGL_compressed_texture_s3tc`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc)
- [`WEBGL_compressed_texture_s3tc_srgb`](/de/docs/Web/API/WEBGL_compressed_texture_s3tc_srgb)
- [`WEBGL_debug_renderer_info`](/de/docs/Web/API/WEBGL_debug_renderer_info)
- [`WEBGL_debug_shaders`](/de/docs/Web/API/WEBGL_debug_shaders)
- [`WEBGL_depth_texture`](/de/docs/Web/API/WEBGL_depth_texture)
- [`WEBGL_draw_buffers`](/de/docs/Web/API/WEBGL_draw_buffers)
- [`WEBGL_lose_context`](/de/docs/Web/API/WEBGL_lose_context)
- [`WEBGL_multi_draw`](/de/docs/Web/API/WEBGL_multi_draw)

### Ereignisse

- [`webglcontextlost`](/de/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
- [`webglcontextrestored`](/de/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)
- [`webglcontextcreationerror`](/de/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)

### Konstanten und Typen

- [WebGL-Konstanten](/de/docs/Web/API/WebGL_API/Constants)
- [WebGL-Typen](/de/docs/Web/API/WebGL_API/Types)

### WebGL 2

WebGL 2 ist ein bedeutendes Update für WebGL, welches durch das [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Interface bereitgestellt wird. Es basiert auf OpenGL ES 3.0 und neue Funktionen umfassen:

- [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
- [Uniform-Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
- [Synchronisationsobjekte](/de/docs/Web/API/WebGLSync),
- [Abfrageobjekte](/de/docs/Web/API/WebGLQuery),
- [Transform-Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
- Aufgestiegene Erweiterungen, die jetzt Bestandteil von WebGL 2 sind: [Vertex-Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [mehrere Render-Ziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragmenttiefen](/de/docs/Web/API/EXT_frag_depth).

Sehen Sie auch den Blogbeitrag ["WebGL 2 landet in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) und [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für ein paar Demos.

## Leitfäden und Tutorials

Nachfolgend finden Sie eine Auswahl von Leitfäden, die Ihnen helfen, WebGL-Konzepte zu lernen und Tutorials, die schrittweise Lektionen und Beispiele bieten.

### Leitfäden

- [Daten in WebGL](/de/docs/Web/API/WebGL_API/Data)
  - : Ein Leitfaden zu Variablen, Puffern und anderen Datentypen, die beim Schreiben von WebGL-Code verwendet werden.
- [Beste Praktiken für WebGL](/de/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : Tipps und Vorschläge, um die Qualität, Leistung und Zuverlässigkeit Ihres WebGL-Inhalts zu verbessern.
- [Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions)
  - : Ein Leitfaden zur Verwendung von WebGL-Erweiterungen.

### Tutorials

- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
  - : Ein Anfängerleitfaden zu den Kernkonzepten von WebGL. Ein guter Startpunkt, wenn Sie keine Vorkenntnisse mit WebGL haben.

### Beispiele

- [Ein einfaches 2D-WebGL-Animation-Beispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : Dieses Beispiel demonstriert die einfache Animation einer einfarbigen Form. Untersuchte Themen sind die Anpassung an Unterschiede im {{Glossary("aspect_ratio", "Seitenverhältnis")}}, eine Funktion, um Shader-Programme aus Sets von mehreren Shadern zu erstellen, und die Grundlagen des Zeichnens in WebGL.
- [WebGL an Beispielen](/de/docs/Web/API/WebGL_API/By_example)
  - : Eine Serie von Live-Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten zeigen. Die Beispiele sind nach Thema und Schwierigkeitsgrad sortiert und behandeln den WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktionen und mehr.

### Fortgeschrittene Tutorials

- [Komprimierte Texturformate](/de/docs/Web/API/WebGL_API/Compressed_texture_formats)
  - : Wie man komprimierte Texturformate für eine bessere Speicherleistung aktiviert und verwendet.
- [WebGL-Modellansicht-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : Eine detaillierte Erklärung der drei Kernmatrizen, die typischerweise verwendet werden, um eine 3D-Objektansicht darzustellen: die Modell-, Ansichts- und Projektionsmatrizen.
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Ein nützlicher Leitfaden, wie 3D-Transformationsmatrizen funktionieren und im Web verwendet werden können — sowohl für WebGL-Berechnungen als auch in CSS-Transformationen.

## Ressourcen

- [Khronos WebGL-Website](https://www.khronos.org/webgl/) Die Hauptwebsite für WebGL bei der Khronos Gruppe.
- [WebGL-Grundlagen](https://web.dev/articles/webgl-fundamentals) Ein grundlegendes Tutorial zu den Grundlagen von WebGL.
- [Raw WebGL: Eine Einführung in WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Ein Vortrag von Nick Desaulniers, der die Grundlagen von WebGL vorstellt.
- [WebGL Academy](http://www.webglacademy.com/) Ein HTML/JavaScript-Editor mit Tutorials, um die Grundlagen der WebGL-Programmierung zu lernen.
- [WebGL Stats](https://webglreport.com/) Eine Website mit Statistiken über WebGL-Fähigkeiten in Browsern auf verschiedenen Plattformen.

### Bibliotheken

- [three.js](https://threejs.org/) ist eine Open-Source-, voll ausgestattete 3D-WebGL-Bibliothek.
- [Babylon.js](https://www.babylonjs.com/) ist eine leistungsstarke, einfache und offene Spiel- und 3D-Rendering-Engine, verpackt in einem benutzerfreundlichen JavaScript-Framework.
- [Pixi.js](https://pixijs.com/) ist ein schneller, Open-Source 2D-WebGL-Renderer.
- [Phaser](https://phaser.io/) ist ein schnelles, kostenloses und unterhaltsames Open-Source-Framework für Canvas- und WebGL-basierte Browserspiele.
- [PlayCanvas](https://playcanvas.com/) ist eine Open-Source-Spiele-Engine.
- [glMatrix](https://github.com/toji/gl-matrix) ist eine JavaScript-Matrix- und Vektorbibliothek für leistungsstarke WebGL-Anwendungen.
- [twgl](https://twgljs.org/) ist eine Bibliothek, die WebGL weniger umständlich machen soll.
- [RedGL](https://github.com/redcamel/RedGL2) ist eine Open-Source 3D-WebGL-Bibliothek.
- [vtk.js](https://kitware.github.io/vtk-js/) ist eine JavaScript-Bibliothek für die wissenschaftliche Visualisierung im Browser.
- [webgl-lint](https://greggman.github.io/webgl-lint/) hilft dabei, Fehler in Ihrem WebGL-Code zu finden und nützliche Informationen bereitzustellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitäts-Hinweise

Zusätzlich zum Browser muss auch die GPU selbst die Funktion unterstützen. Zum Beispiel ist S3 Texture Compression (S3TC) nur auf Tegra-basierten Tablets verfügbar. Die meisten Browser machen den WebGL-Kontext über den `webgl`-Kontextnamen verfügbar, aber ältere benötigen zusätzlich `experimental-webgl`. Außerdem ist das kommende [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) vollständig rückwärtskompatibel und wird den Kontextnamen `webgl2` haben.

### Gecko-Hinweise

#### WebGL-Debugging und -Tests

Firefox bietet zwei verfügbare Einstellungen, die Ihnen erlauben, die Fähigkeiten von WebGL zu Testzwecken zu kontrollieren:

- `webgl.min_capability_mode`
  - : Eine boolesche Eigenschaft, die, wenn sie `true` ist, einen Modus mit minimalen Fähigkeiten aktiviert. In diesem Modus wird WebGL so konfiguriert, dass es nur das absolute Minimum an Funktionen und Fähigkeiten unterstützt, das durch die WebGL-Spezifikation erforderlich ist. Dies lässt Sie sicherstellen, dass Ihr WebGL-Code auf jedem Gerät oder Browser funktioniert, unabhängig von deren Fähigkeiten. Dies ist standardmäßig `false`.
- `webgl.disable_extensions`
  - : Eine boolesche Eigenschaft, die, wenn sie `true` ist, alle WebGL-Erweiterungen deaktiviert. Dies ist standardmäßig `false`.

## Siehe auch

- [Canvas API](/de/docs/Web/API/Canvas_API)
- [Kompatibilitätsinfos zu WebGL-Erweiterungen](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#browser_compatibility)
