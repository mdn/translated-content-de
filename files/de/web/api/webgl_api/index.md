---
title: "WebGL: 2D and 3D graphics for the web"
slug: Web/API/WebGL_API
l10n:
  sourceCommit: d71da812ee94c20658cb1916a123a42254ea545c
---

{{DefaultAPISidebar("WebGL")}}

**WebGL** (Web Graphics Library) ist eine JavaScript-API zur Darstellung von hochleistungsfähigen, interaktiven 3D- und 2D-Grafiken in jedem kompatiblen Webbrowser ohne den Einsatz von Plug-ins. WebGL führt eine API ein, die eng mit OpenGL ES 2.0 konform ist und in HTML `<canvas>`-Elementen verwendet werden kann. Diese Konformität ermöglicht es der API, die Vorteile von Hardware-Grafikbeschleunigung zu nutzen, die durch das Gerät des Benutzers bereitgestellt wird.

Die Unterstützung für WebGL ist in allen modernen Browsern vorhanden (siehe die [Kompatibilitätstabellen](#browser-kompatibilität) unten); allerdings muss das Gerät des Benutzers ebenfalls Hardware haben, die diese Funktionen unterstützt.

Die [WebGL 2](#webgl_2) API führt Unterstützung für einen großen Teil des OpenGL ES 3.0-Feature-Sets ein; sie wird über die [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Schnittstelle bereitgestellt.

Das `<canvas>`-Element wird auch von der [Canvas-API](/de/docs/Web/API/Canvas_API) verwendet, um 2D-Grafiken auf Webseiten zu erstellen.

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

WebGL 2 ist ein großes Update für WebGL, das über die [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)-Schnittstelle bereitgestellt wird. Es basiert auf OpenGL ES 3.0 und neue Funktionen umfassen:

- [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
- [Uniform-Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
- [Sync-Objekte](/de/docs/Web/API/WebGLSync),
- [Query-Objekte](/de/docs/Web/API/WebGLQuery),
- [Transform Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
- Geförderte Erweiterungen, die jetzt zum Kerne von WebGL 2 gehören: [Vertex-Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [Mehrfache Render-Ziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers), [Fragmenttiefe](/de/docs/Web/API/EXT_frag_depth).

Siehe auch den Blogbeitrag ["WebGL 2 lands in Firefox"](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) und [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/) für einige Demos.

## Leitfäden und Tutorials

Im Folgenden finden Sie eine Auswahl an Leitfäden, die Ihnen helfen, WebGL-Konzepte zu erlernen, und Tutorials, die Ihnen schrittweise Lektionen und Beispiele bieten.

### Leitfäden

- [Daten in WebGL](/de/docs/Web/API/WebGL_API/Data)
  - : Ein Leitfaden zu Variablen, Puffern und anderen Datentypen, die beim Schreiben von WebGL-Code verwendet werden.
- [Beste Praktiken für WebGL](/de/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : Tipps und Vorschläge, die Ihnen helfen, die Qualität, Leistung und Zuverlässigkeit Ihrer WebGL-Inhalte zu verbessern.
- [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions)
  - : Ein Leitfaden zur Verwendung von WebGL-Erweiterungen.

### Tutorials

- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
  - : Eine Einführung in die Kernkonzepte von WebGL. Ein guter Startpunkt, wenn Sie keine Vorkenntnisse in WebGL haben.

### Beispiele

- [Ein einfaches 2D-WebGL-Animationsbeispiel](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : Dieses Beispiel demonstriert die einfache Animation einer einfarbigen Form. Untersuchte Themen sind die Anpassung an Unterschiede im [Seitenverhältnis](/de/docs/Glossary/aspect_ratio), eine Funktion zur Erstellung von Shader-Programmen aus Sets mehrerer Shader und die Grundlagen des Zeichnens in WebGL.
- [WebGL anhand von Beispielen](/de/docs/Web/API/WebGL_API/By_example)
  - : Eine Reihe von Beispielen mit kurzen Erklärungen, die WebGL-Konzepte und -Fähigkeiten präsentieren. Die Beispiele sind nach Thema und Schwierigkeitsgrad sortiert und umfassen den WebGL-Rendering-Kontext, Shader-Programmierung, Texturen, Geometrie, Benutzerinteraktion und mehr.

### Fortgeschrittene Tutorials

- [WebGL-Modell-Ansicht-Projektion](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : Eine detaillierte Erklärung der drei Kernmatrizen, die typischerweise zur Darstellung einer 3D-Objektansicht verwendet werden: die Modell-, Ansichts- und Projektionsmatrix.
- [Matrixmath für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Ein nützlicher Leitfaden, wie 3D-Transformationsmatrizen funktionieren und im Web verwendet werden können – sowohl für WebGL-Berechnungen als auch in CSS-Transformationen.

## Ressourcen

- [Khronos WebGL Seite](https://www.khronos.org/webgl/) Die Hauptwebsite für WebGL bei der Khronos Group.
- [WebGL-Grundlagen](https://web.dev/articles/webgl-fundamentals) Ein grundlegendes Tutorial zu den Grundlagen von WebGL.
- [Raw WebGL: Eine Einführung in WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Ein Vortrag von Nick Desaulniers, der die Grundlagen von WebGL vorstellt.
- [WebGL Academy](http://www.webglacademy.com/) Ein HTML/JavaScript-Editor mit Tutorials, um die Grundlagen der WebGL-Programmierung zu erlernen.
- [WebGL-Statistiken](https://webglreport.com/) Eine Seite mit Statistiken über WebGL-Fähigkeiten in Browsern auf verschiedenen Plattformen.

### Bibliotheken

- [three.js](https://threejs.org/) ist eine Open-Source, vollständig ausgestattete 3D-WebGL-Bibliothek.
- [Babylon.js](https://www.babylonjs.com/) ist eine leistungsfähige, einfache und offene Spiele- und 3D-Rendering-Engine in einem freundlichen JavaScript-Framework.
- [Pixi.js](https://pixijs.com/) ist ein schneller, Open-Source 2D-WebGL-Renderer.
- [Phaser](https://phaser.io/) ist ein schnelles, kostenloses und unterhaltsames Open-Source-Framework für Canvas- und WebGL-basierte Browser-Spiele.
- [PlayCanvas](https://playcanvas.com/) ist eine Open-Source-Spiele-Engine.
- [glMatrix](https://github.com/toji/gl-matrix) ist eine JavaScript-Matrix- und Vektorbibliothek für hochleistungsfähige WebGL-Anwendungen.
- [twgl](https://twgljs.org/) ist eine Bibliothek, um WebGL weniger umfangreich zu machen.
- [RedGL](https://github.com/redcamel/RedGL2) ist eine Open-Source 3D-WebGL-Bibliothek.
- [vtk.js](https://kitware.github.io/vtk-js/) ist eine JavaScript-Bibliothek für wissenschaftliche Visualisierung in Ihrem Browser.
- [webgl-lint](https://greggman.github.io/webgl-lint/) hilft dabei, Fehler in Ihrem WebGL-Code zu finden und nützliche Informationen bereitzustellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Kompatibilitätsanmerkungen

Zusätzlich zum Browser muss auch die GPU selbst das Feature unterstützen. So ist beispielsweise S3 Texture Compression (S3TC) nur auf Tegra-basierten Tablets verfügbar. Die meisten Browser machen den WebGL-Kontext über den Kontextnamen `webgl` verfügbar, aber ältere benötigen auch `experimental-webgl`. Darüber hinaus ist das kommende [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) vollständig abwärtskompatibel und wird den Kontextnamen `webgl2` haben.

### Gecko-Anmerkungen

#### WebGL-Debugging und -Testing

Firefox bietet zwei Einstellungen, die Ihnen die Kontrolle über die Fähigkeiten von WebGL für Testzwecke ermöglichen:

- `webgl.min_capability_mode`
  - : Eine boolesche Eigenschaft, die, wenn sie auf `true` gesetzt ist, einen Mindestfähigkeitsmodus aktiviert. In diesem Modus wird WebGL so konfiguriert, dass es nur das minimal erforderliche Featureset und die minimal notwendigen Fähigkeiten unterstützt, die von der WebGL-Spezifikation gefordert werden. Dies ermöglicht es Ihnen sicherzustellen, dass Ihr WebGL-Code auf jedem Gerät oder Browser funktioniert, unabhängig von deren Fähigkeiten. Der Standardwert ist `false`.
- `webgl.disable_extensions`
  - : Eine boolesche Eigenschaft, die, wenn sie auf `true` gesetzt ist, alle WebGL-Erweiterungen deaktiviert. Der Standardwert ist `false`.

## Siehe auch

- [Canvas-API](/de/docs/Web/API/Canvas_API)
- [Kompatibilitätsinformationen über WebGL-Erweiterungen](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#browser_compatibility)
