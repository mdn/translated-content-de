---
title: WEBGL_debug_shaders-Erweiterung
short-title: WEBGL_debug_shaders
slug: Web/API/WEBGL_debug_shaders
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die Erweiterung **`WEBGL_debug_shaders`** ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt eine Methode zum Debuggen von Shadern in privilegierten Kontexten bereit.

Diese Erweiterung steht Websites nicht direkt zur Verfügung, da die Art und Weise, wie der Shader übersetzt wird, der Webseite personenbezogene Informationen über die Grafikkarte im Computer des Benutzers offenlegen könnte.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Abhängig von den Datenschutzeinstellungen des Browsers ist diese Erweiterung möglicherweise nur in privilegierten Kontexten verfügbar.
>
> Diese Erweiterung ist sowohl in [WebGL1-](/de/docs/Web/API/WebGLRenderingContext) als auch in [WebGL2-Kontexten](/de/docs/Web/API/WebGL2RenderingContext) verfügbar.

## Instanzmethoden

- [`WEBGL_debug_shaders.getTranslatedShaderSource()`](/de/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource)
  - : Gibt den übersetzten Shader-Quelltext zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
