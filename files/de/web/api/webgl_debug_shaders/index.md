---
title: WEBGL_debug_shaders-Erweiterung
short-title: WEBGL_debug_shaders
slug: Web/API/WEBGL_debug_shaders
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_debug_shaders`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und bietet eine Methode zum Debuggen von Shadern aus privilegierten Kontexten.

Diese Erweiterung ist nicht direkt auf Webseiten verfügbar, da die Art und Weise, wie der Shader übersetzt wird, der Webseite persönlich identifizierbare Informationen über die Art der Grafikkarte im Computer des Benutzers offenbaren könnte.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar. Für weitere Informationen siehe auch [Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Abhängig von den Datenschutzeinstellungen des Browsers könnte diese Erweiterung nur in privilegierten Kontexten verfügbar sein.
>
> Diese Erweiterung ist sowohl in {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}- als auch in {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}-Kontexten verfügbar.

## Instanzmethoden

- [`WEBGL_debug_shaders.getTranslatedShaderSource()`](/de/docs/Web/API/WEBGL_debug_shaders/getTranslatedShaderSource)
  - : Gibt die übersetzte Shader-Quelle zurück.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
