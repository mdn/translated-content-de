---
title: Verwendung von WebGL-Erweiterungen
slug: Web/API/WebGL_API/Using_Extensions
l10n:
  sourceCommit: 0d8e5e932d471180075f041b73c03289abdf6b3c
---

{{DefaultAPISidebar("WebGL")}}

WebGL, wie seine Schwester-APIs (OpenGL und OpenGL ES), unterstützt Erweiterungen. Eine vollständige Liste der Erweiterungen ist im [Khronos WebGL-Erweiterungsregister](https://registry.khronos.org/webgl/extensions/) verfügbar.

> [!NOTE]
> In WebGL, im Gegensatz zu anderen GL-APIs, sind Erweiterungen nur verfügbar, wenn sie explizit angefordert werden.

## Kanonische Erweiterungsnamen, Anbieterpräfixe und Präferenzen

Erweiterungen können von Browseranbietern unterstützt werden, bevor sie offiziell genehmigt werden (aber nur, wenn sie sich im Entwurfsstadium befinden). In diesem Fall kann ihr Name mit dem Anbieterpräfix (`MOZ_`, `WEBKIT_`, etc.) versehen sein, oder die Erweiterung ist erst verfügbar, nachdem eine Browsereinstellung umgeschaltet wurde.

Wenn Sie mit den neuesten Erweiterungen arbeiten möchten und beabsichtigen, dies auch nach der Genehmigung fortzusetzen (vorausgesetzt, dass sich die Erweiterung nicht in inkompatibler Weise ändert), sollten Sie den kanonischen Erweiterungsnamen sowie den Anbietererweiterungsnamen abfragen. Zum Beispiel:

```js
const ext =
  gl.getExtension("OES_vertex_array_object") ||
  gl.getExtension("MOZ_OES_vertex_array_object") ||
  gl.getExtension("WEBKIT_OES_vertex_array_object");
```

Beachten Sie, dass Anbieterpräfixe entmutigt wurden, daher implementieren die meisten Browser experimentelle Erweiterungen hinter einem Feature-Flag anstelle eines Anbieterpräfixes.

Die Feature-Flags sind:

- `webgl.enable-draft-extensions` in Firefox
- `chrome://flags/#enable-webgl-draft-extensions` in auf Chromium basierenden Browsern (Chrome, Opera).

## Namenskonventionen

WebGL-Erweiterungen sind mit "ANGLE", "OES", "EXT" oder "WEBGL" vorangestellt. Diese Präfixe spiegeln Herkunft und Zweck wider:

- `ANGLE_`: Erweiterungen, die von den Autoren der [ANGLE-Bibliothek](https://en.wikipedia.org/wiki/ANGLE_%28software%29) geschrieben wurden.
- `OES_` und `KHR_`: Erweiterungen, die Funktionalität von OpenGL ES (OES) oder OpenGL-API-Erweiterungen widerspiegeln, die von den jeweiligen Architekturprüfungsräten (Khronos) genehmigt wurden.
- `OVR_`: Erweiterungen, die für virtuelle Realität optimiert sind.
- `EXT_`: Erweiterungen, die andere OpenGL ES- oder OpenGL-API-Erweiterungen widerspiegeln.
- `WEBGL_`: Erweiterungen, die WebGL-spezifisch sind und in mehreren Webbrowsern kompatibel sein sollen. Es sollte auch für Erweiterungen verwendet werden, die aus den OpenGL ES- oder OpenGL-APIs stammen, deren Verhalten jedoch erheblich verändert wurde.

## Abfragen verfügbarer Erweiterungen

Der WebGL-Kontext unterstützt die Abfrage, welche Erweiterungen verfügbar sind.

```js
const available_extensions = gl.getSupportedExtensions();
```

Die Methode {{domxref("WebGLRenderingContext.getSupportedExtensions()")}} gibt ein Array von Zeichenfolgen zurück, eine für jede unterstützte Erweiterung.

## Erweiterungsliste

Die aktuellen Erweiterungen sind:

- {{domxref("ANGLE_instanced_arrays")}}
- {{domxref("EXT_blend_minmax")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("EXT_color_buffer_half_float")}}
- {{domxref("EXT_disjoint_timer_query")}}
- {{domxref("EXT_float_blend")}}
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

## Aktivieren einer Erweiterung

Bevor eine Erweiterung verwendet werden kann, muss sie mit {{domxref("WebGLRenderingContext.getExtension()")}} aktiviert werden. Zum Beispiel:

```js
const float_texture_ext = gl.getExtension("OES_texture_float");
```

Der Rückgabewert ist `null`, wenn die Erweiterung nicht unterstützt wird, oder ein Erweiterungsobjekt andererseits.

## Erweiterungsobjekte

Wenn eine Erweiterung spezifische Symbole oder Funktionen definiert, die in der Kernspezifikation von WebGL nicht verfügbar sind, stehen diese auf dem Erweiterungsobjekt zur Verfügung, das durch den Aufruf von `gl.getExtension()` zurückgegeben wird.

## Siehe auch

- {{domxref("WebGLRenderingContext.getSupportedExtensions()")}}
- {{domxref("WebGLRenderingContext.getExtension()")}}
- [webglreport.com](https://webglreport.com/)
- [web3dsurvey.com - WebGL Extension Support Survey](https://web3dsurvey.com/)
