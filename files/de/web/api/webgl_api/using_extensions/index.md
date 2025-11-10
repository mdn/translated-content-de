---
title: Verwenden von WebGL-Erweiterungen
slug: Web/API/WebGL_API/Using_Extensions
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("WebGL")}}

WebGL unterstützt, ähnlich wie seine Schwester-APIs (OpenGL und OpenGL ES), Erweiterungen. Eine vollständige Liste von Erweiterungen ist im [Khronos WebGL-Erweiterungsregister](https://registry.khronos.org/webgl/extensions/) verfügbar.

> [!NOTE]
> In WebGL, im Gegensatz zu anderen GL-APIs, sind Erweiterungen nur verfügbar, wenn sie explizit angefordert werden.

## Kanonische Erweiterungsnamen, Anbieterpräfixe und Präferenzen

Erweiterungen können von Browser-Entwicklern unterstützt werden, bevor sie offiziell ratifiziert sind (aber nur solange sie sich im Entwurfsstadium befinden). In diesem Fall kann ihr Name durch das Anbieterpräfix (`MOZ_`, `WEBKIT_`, etc.) erweitert werden oder die Erweiterung ist nur verfügbar, wenn eine Browser-Einstellung umgeschaltet wurde.

Wenn Sie mit den neuesten Erweiterungen arbeiten möchten und auch nach der Ratifizierung (vorausgesetzt, die Erweiterung ändert sich nicht auf inkompatible Weise) weiterarbeiten wollen, sollten Sie sowohl den kanonischen Erweiterungsnamen als auch den Anbieternamen abfragen. Zum Beispiel:

```js
const ext =
  gl.getExtension("OES_vertex_array_object") ||
  gl.getExtension("MOZ_OES_vertex_array_object") ||
  gl.getExtension("WEBKIT_OES_vertex_array_object");
```

Beachten Sie, dass Anbieterpräfixe nicht mehr empfohlen werden, daher implementieren die meisten Browser experimentelle Erweiterungen hinter einem Feature-Flag anstelle des Anbieterpräfixes.

Die Feature-Flags sind:

- `webgl.enable-draft-extensions` in Firefox
- `chrome://flags/#enable-webgl-draft-extensions` in Chromium-basierten Browsern (Chrome, Opera).

## Namenskonventionen

WebGL-Erweiterungen werden mit "ANGLE", "OES", "EXT" oder "WEBGL" vorangestellt. Diese Präfixe spiegeln Ursprung und Absicht wider:

- `ANGLE_`: Erweiterungen, die von den Autoren der [ANGLE-Bibliothek](https://en.wikipedia.org/wiki/ANGLE_%28software%29) geschrieben wurden.
- `OES_` und `KHR_`: Erweiterungen, die Funktionalitäten von OpenGL ES (OES) oder OpenGL API-Erweiterungen widerspiegeln, die von den jeweiligen Architektur-Überprüfungsgremien (Khronos) genehmigt wurden.
- `OVR_`: Erweiterungen, die für Virtual Reality optimieren.
- `EXT_`: Erweiterungen, die andere OpenGL ES- oder OpenGL API-Erweiterungen widerspiegeln.
- `WEBGL_`: Erweiterungen, die WebGL-spezifisch sind und für die Kompatibilität mit mehreren Webbrowsern gedacht sind. Dies sollte auch für Erweiterungen gelten, die ursprünglich von den OpenGL ES- oder OpenGL APIs stammen, deren Verhalten jedoch erheblich verändert wurde.

## Abfragen verfügbarer Erweiterungen

Der WebGL-Kontext unterstützt die Abfrage, welche Erweiterungen verfügbar sind.

```js
const availableExtensions = gl.getSupportedExtensions();
```

Die Methode [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions) gibt ein Array von Zeichenfolgen zurück, eine für jede unterstützte Erweiterung.

## Erweiterungsliste

Die aktuellen Erweiterungen sind:

- [`ANGLE_instanced_arrays`](/de/docs/Web/API/ANGLE_instanced_arrays)
- [`EXT_blend_minmax`](/de/docs/Web/API/EXT_blend_minmax)
- [`EXT_color_buffer_float`](/de/docs/Web/API/EXT_color_buffer_float)
- [`EXT_color_buffer_half_float`](/de/docs/Web/API/EXT_color_buffer_half_float)
- [`EXT_disjoint_timer_query`](/de/docs/Web/API/EXT_disjoint_timer_query)
- [`EXT_float_blend`](/de/docs/Web/API/EXT_float_blend)
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

## Aktivieren einer Erweiterung

Bevor eine Erweiterung verwendet werden kann, muss sie mit [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) aktiviert werden. Zum Beispiel:

```js
const ext = gl.getExtension("OES_texture_float");
```

Der Rückgabewert ist `null`, wenn die Erweiterung nicht unterstützt wird, oder ein Erweiterungsobjekt, andernfalls.

## Erweiterungsobjekte

Wenn eine Erweiterung bestimmte Symbole oder Funktionen definiert, die im Kern der WebGL-Spezifikation nicht enthalten sind, sind sie auf dem Erweiterungsobjekt verfügbar, das durch den Aufruf von `gl.getExtension()` zurückgegeben wird.

## Siehe auch

- [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [webglreport.com](https://webglreport.com/)
- [web3dsurvey.com - WebGL Extension Support Survey](https://web3dsurvey.com/)
