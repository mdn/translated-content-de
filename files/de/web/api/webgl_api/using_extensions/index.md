---
title: WebGL-Erweiterungen verwenden
slug: Web/API/WebGL_API/Using_Extensions
l10n:
  sourceCommit: 4707a91d383770b89cbb38bd5c6c373a25b25790
---

{{DefaultAPISidebar("WebGL")}}

WebGL unterstützt wie die verwandten APIs OpenGL und OpenGL ES Erweiterungen. Eine vollständige Liste finden Sie im [Khronos-Register für WebGL-Erweiterungen](https://registry.khronos.org/webgl/extensions/).

> [!NOTE]
> Anders als bei anderen GL-APIs sind Erweiterungen in WebGL nur verfügbar, wenn sie ausdrücklich angefordert werden.

## Kanonische Erweiterungsnamen, Anbieterpräfixe und Einstellungen

Browseranbieter können Erweiterungen unterstützen, bevor diese offiziell verabschiedet wurden (allerdings nur, solange sie sich im Entwurfsstadium befinden). In diesem Fall kann dem Namen ein Anbieterpräfix (`MOZ_`, `WEBKIT_` usw.) vorangestellt sein, oder die Erweiterung ist erst verfügbar, nachdem eine Browsereinstellung aktiviert wurde.

Wenn Sie neue Erweiterungen frühzeitig verwenden und Ihren Code auch nach deren Verabschiedung weiter nutzen möchten (vorausgesetzt, die Erweiterung ändert sich nicht auf inkompatible Weise), sollten Sie sowohl den kanonischen Namen als auch den Namen mit Anbieterpräfix abfragen. Zum Beispiel:

```js
const ext =
  gl.getExtension("OES_vertex_array_object") ||
  gl.getExtension("MOZ_OES_vertex_array_object") ||
  gl.getExtension("WEBKIT_OES_vertex_array_object");
```

Beachten Sie, dass von Anbieterpräfixen abgeraten wird. Die meisten Browser stellen experimentelle Erweiterungen daher hinter einem Feature-Flag bereit, statt ein Anbieterpräfix zu verwenden.

Die Feature-Flags sind:

- `webgl.enable-draft-extensions` in Firefox
- `chrome://flags/#enable-webgl-draft-extensions` in Chromium-basierten Browsern (Chrome, Opera).

## Namenskonventionen

WebGL-Erweiterungen tragen die Präfixe „ANGLE“, „OES“, „EXT“ oder „WEBGL“. Diese Präfixe geben Herkunft und Zweck an:

- `ANGLE_`: Erweiterungen, die von den Autoren der [ANGLE-Bibliothek](https://en.wikipedia.org/wiki/ANGLE_%28software%29) geschrieben wurden.
- `OES_` und `KHR_`: Erweiterungen, die Funktionen von OpenGL ES (OES) oder OpenGL API-Erweiterungen übernehmen, welche von den jeweiligen Architekturprüfungsgremien (Khronos) genehmigt wurden.
- `OVR_`: Erweiterungen, die für Virtual Reality optimiert sind.
- `EXT_`: Erweiterungen, die andere Erweiterungen von OpenGL ES oder der OpenGL API übernehmen.
- `WEBGL_`: WebGL-spezifische Erweiterungen, die mit mehreren Webbrowsern kompatibel sein sollen. Dieses Präfix sollte auch für Erweiterungen verwendet werden, die ursprünglich aus OpenGL ES oder den OpenGL APIs stammen, deren Verhalten aber erheblich verändert wurde.

## Verfügbare Erweiterungen abfragen

Über den WebGL-Kontext können Sie abfragen, welche Erweiterungen verfügbar sind.

```js
const availableExtensions = gl.getSupportedExtensions();
```

Die Methode [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions) gibt ein Array von Zeichenfolgen zurück, eine für jede unterstützte Erweiterung.

## Liste der Erweiterungen

Die derzeitigen Erweiterungen sind:

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

## Eine Erweiterung aktivieren

Bevor Sie eine Erweiterung verwenden können, müssen Sie sie mit [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) aktivieren. Zum Beispiel:

```js
const ext = gl.getExtension("OES_texture_float");
```

Der Rückgabewert ist `null`, wenn die Erweiterung nicht unterstützt wird. Andernfalls wird ein Erweiterungsobjekt zurückgegeben.

## Erweiterungsobjekte

Wenn eine Erweiterung eigene Symbole oder Funktionen definiert, die nicht zur WebGL-Kernspezifikation gehören, sind diese auf dem Erweiterungsobjekt verfügbar, das der Aufruf von `gl.getExtension()` zurückgibt.

## Siehe auch

- [`WebGLRenderingContext.getSupportedExtensions()`](/de/docs/Web/API/WebGLRenderingContext/getSupportedExtensions)
- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
- [webglreport.com](https://webglreport.com/)
- [web3dsurvey.com – Umfrage zur Unterstützung von WebGL-Erweiterungen](https://web3dsurvey.com/)
