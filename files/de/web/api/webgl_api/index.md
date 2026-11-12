---
title: "WebGL: 2D and 3D graphics for the web"
slug: Web/API/WebGL_API
l10n:
  sourceCommit: f81527232ae480626f8cec10a7d2775a698be30a
---

{{DefaultAPISidebar("WebGL")}}{{AvailableInWorkers}}

**WebGL** (Web Graphics Library) ist eine JavaScript-API zum Rendern leistungsstarker, interaktiver 3D- und 2D-Grafiken in jedem kompatiblen Webbrowser – ohne Plug-ins. Dazu stellt WebGL eine API bereit, die sich eng an OpenGL ES 2.0 orientiert und in HTML-{{HTMLElement("canvas")}}-Elementen verwendet werden kann. Dadurch kann die API die Hardware-Grafikbeschleunigung des Geräts nutzen.

Alle modernen Browser unterstützen WebGL (siehe die [Kompatibilitätstabellen](#browser-kompatibilität) unten). Allerdings muss auch die Hardware des Geräts die entsprechenden Funktionen unterstützen.

Die [WebGL 2](#webgl_2)-API unterstützt einen Großteil der Funktionen von OpenGL ES 3.0. Sie wird über das Interface [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) bereitgestellt.

Das Element {{HTMLElement("canvas")}} wird auch von der [Canvas API](/de/docs/Web/API/Canvas_API) verwendet, um 2D-Grafiken auf Webseiten darzustellen.

## Referenz

### Standard-Interfaces

- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext)
- [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)
- [`WebGLActiveInfo`](/de/docs/Web/API/WebGLActiveInfo)
- [`WebGLBuffer`](/de/docs/Web/API/WebGLBuffer)
- [`WebGLContextEvent`](/de/docs/Web/API/WebGLContextEvent)
- [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)
- [`WebGLObject`](/de/docs/Web/API/WebGLObject) {{experimental_inline}}
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
- [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend)
- [`EXT_frag_depth`](/de/docs/Web/API/EXT_frag_depth)
- [`EXT_polygon_offset_clamp`](/de/docs/Web/API/EXT_polygon_offset_clamp)
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

WebGL 2 ist eine umfassende Aktualisierung von WebGL, die über das Interface [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) bereitgestellt wird. Es basiert auf OpenGL ES 3.0. Zu den neuen Funktionen gehören:

- [3D-Texturen](/de/docs/Web/API/WebGL2RenderingContext/texImage3D),
- [Sampler-Objekte](/de/docs/Web/API/WebGLSampler),
- [Uniform-Buffer-Objekte](/de/docs/Web/API/WebGL2RenderingContext#uniform_buffer_objects),
- [Sync-Objekte](/de/docs/Web/API/WebGLSync),
- [Query-Objekte](/de/docs/Web/API/WebGLQuery),
- [Transform-Feedback-Objekte](/de/docs/Web/API/WebGLTransformFeedback),
- Erweiterungen, die nun zum Kern von WebGL 2 gehören: [Vertex-Array-Objekte](/de/docs/Web/API/WebGLVertexArrayObject), [Instancing](/de/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced), [mehrere Render-Ziele](/de/docs/Web/API/WebGL2RenderingContext/drawBuffers) und [Fragment-Tiefe](/de/docs/Web/API/EXT_frag_depth).

Einige Demos finden Sie auch im Blogbeitrag [„WebGL 2 lands in Firefox“](https://hacks.mozilla.org/2017/01/webgl-2-lands-in-firefox/) und auf [webglsamples.org/WebGL2Samples](https://webglsamples.org/WebGL2Samples/).

## Leitfäden und Tutorials

Im Folgenden finden Sie verschiedene Leitfäden, die Ihnen helfen, WebGL-Konzepte zu verstehen, sowie Tutorials mit Schritt-für-Schritt-Anleitungen und Beispielen.

### Leitfäden

- [Daten in WebGL](/de/docs/Web/API/WebGL_API/Data)
  - : Ein Leitfaden zu Variablen, Buffern und anderen Datentypen, die beim Schreiben von WebGL-Code verwendet werden.
- [Best Practices für WebGL](/de/docs/Web/API/WebGL_API/WebGL_best_practices)
  - : Tipps und Vorschläge, mit denen Sie Qualität, Leistung und Zuverlässigkeit Ihrer WebGL-Inhalte verbessern können.
- [Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions)
  - : Ein Leitfaden zur Verwendung von WebGL-Erweiterungen.

### Tutorials

- [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial)
  - : Ein Leitfaden zu den grundlegenden WebGL-Konzepten für Einsteiger. Ein guter Ausgangspunkt, wenn Sie noch keine Erfahrung mit WebGL haben.

### Fortgeschrittene Tutorials

- [Komprimierte Texturformate](/de/docs/Web/API/WebGL_API/Compressed_texture_formats)
  - : So aktivieren und verwenden Sie komprimierte Texturformate, um den Speicher effizienter zu nutzen.
- [Modell-, Ansichts- und Projektionsmatrizen in WebGL](/de/docs/Web/API/WebGL_API/WebGL_model_view_projection)
  - : Eine ausführliche Erklärung der drei grundlegenden Matrizen, die üblicherweise zur Darstellung eines 3D-Objekts verwendet werden: Modell-, Ansichts- und Projektionsmatrix.
- [Matrixmathematik für das Web](/de/docs/Web/API/WebGL_API/Matrix_math_for_the_web)
  - : Ein nützlicher Leitfaden dazu, wie 3D-Transformationsmatrizen funktionieren und im Web eingesetzt werden können – sowohl für WebGL-Berechnungen als auch für CSS-Transformationen.

## Ressourcen

- [Khronos-WebGL-Website](https://www.khronos.org/webgl/) Die Hauptwebsite der Khronos Group zu WebGL.
- [WebGL Fundamentals](https://web.dev/articles/webgl-fundamentals) Ein grundlegendes Tutorial zu WebGL.
- [Raw WebGL: An introduction to WebGL](https://www.youtube.com/embed/H4c8t6myAWU/?feature=player_detailpage) Ein Vortrag von Nick Desaulniers, der die Grundlagen von WebGL vorstellt.
- [WebGL Academy](https://www.webglacademy.com/) Ein HTML-/JavaScript-Editor mit Tutorials zum Erlernen der Grundlagen der WebGL-Programmierung.
- [WebGL Stats](https://webglreport.com/) Eine Website mit Statistiken zu den WebGL-Fähigkeiten von Browsern auf verschiedenen Plattformen.

### Bibliotheken

- [three.js](https://threejs.org/) ist eine quelloffene, umfassend ausgestattete 3D-WebGL-Bibliothek.
- [Babylon.js](https://www.babylonjs.com/) ist eine leistungsfähige, einfach zu verwendende und offene Engine für Spiele und 3D-Rendering in einem benutzerfreundlichen JavaScript-Framework.
- [Pixi.js](https://pixijs.com/) ist ein schneller, quelloffener 2D-WebGL-Renderer.
- [Phaser](https://phaser.io/) ist ein schnelles, kostenloses und quelloffenes Framework für Browser-Spiele auf Basis von Canvas und WebGL.
- [PlayCanvas](https://playcanvas.com/) ist eine quelloffene Spiele-Engine.
- [glMatrix](https://github.com/toji/gl-matrix) ist eine JavaScript-Bibliothek für Matrizen und Vektoren in leistungsstarken WebGL-Anwendungen.
- [twgl](https://twgljs.org/) ist eine Bibliothek, mit der sich WebGL-Code kompakter schreiben lässt.
- [RedGL](https://github.com/redcamel/RedGL2) ist eine quelloffene 3D-WebGL-Bibliothek.
- [vtk.js](https://kitware.github.io/vtk-js/) ist eine JavaScript-Bibliothek für wissenschaftliche Visualisierungen im Browser.
- [webgl-lint](https://greggman.github.io/webgl-lint/) hilft Ihnen, Fehler in Ihrem WebGL-Code zu finden, und liefert nützliche Informationen.

## Beispiele

- [Ein einfaches Beispiel für eine 2D-Animation mit WebGL](/de/docs/Web/API/WebGL_API/Basic_2D_animation_example)
  - : Dieses Beispiel zeigt die einfache Animation einer einfarbigen Form. Behandelt werden die Anpassung an unterschiedliche {{Glossary("aspect_ratio", "Seitenverhältnisse")}}, eine Funktion zum Erstellen von Shader-Programmen aus mehreren Shadern sowie die Grundlagen des Zeichnens mit WebGL.
- [WebGL anhand von Beispielen](/de/docs/Web/API/WebGL_API/By_example)
  - : Eine Reihe interaktiver Beispiele mit kurzen Erklärungen, die Konzepte und Möglichkeiten von WebGL veranschaulichen. Die Beispiele sind nach Thema und Schwierigkeitsgrad geordnet und behandeln unter anderem den WebGL-Rendering-Kontext, die Shader-Programmierung, Texturen, Geometrie und Benutzerinteraktion.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

### Hinweise zur Kompatibilität

Neben dem Browser muss auch die GPU die jeweilige Funktion unterstützen. Beispielsweise ist S3 Texture Compression (S3TC) nur auf Tegra-basierten Tablets verfügbar. Die meisten Browser stellen den WebGL-Kontext unter dem Kontextnamen `webgl` bereit; bei älteren Browsern kann zusätzlich `experimental-webgl` erforderlich sein. Außerdem ist [WebGL 2](/de/docs/Web/API/WebGL2RenderingContext) vollständig abwärtskompatibel und verwendet den Kontextnamen `webgl2`.

### Hinweise zu Gecko

#### WebGL debuggen und testen

Firefox bietet zwei Einstellungen, mit denen Sie die WebGL-Funktionen zu Testzwecken steuern können:

- `webgl.min_capability_mode`
  - : Eine boolesche Eigenschaft, die bei `true` einen Modus mit minimalem Funktionsumfang aktiviert. In diesem Modus wird WebGL so konfiguriert, dass es nur die von der WebGL-Spezifikation vorgeschriebenen Mindestfunktionen und -fähigkeiten unterstützt. So können Sie sicherstellen, dass Ihr WebGL-Code unabhängig von den Fähigkeiten des Geräts oder Browsers funktioniert. Der Standardwert ist `false`.
- `webgl.disable_extensions`
  - : Eine boolesche Eigenschaft, die bei `true` alle WebGL-Erweiterungen deaktiviert. Der Standardwert ist `false`.

## Siehe auch

- [Canvas API](/de/docs/Web/API/Canvas_API)
- [Kompatibilitätsinformationen zu WebGL-Erweiterungen](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions#browser_compatibility)
