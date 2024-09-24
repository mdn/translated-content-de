---
title: WEBGL_debug_shaders-Erweiterung
short-title: WEBGL_debug_shaders
slug: Web/API/WEBGL_debug_shaders
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_debug_shaders`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt eine Methode bereit, um Shader aus privilegierten Kontexten zu debuggen.

Diese Erweiterung ist nicht direkt für Websites verfügbar, da die Art und Weise, wie der Shader übersetzt wird, persönlich identifizierbare Informationen über die Art der Grafikkarte im Computer des Nutzers an die Webseite preisgeben könnte.

WebGL-Erweiterungen sind verfügbar über die Methode {{domxref("WebGLRenderingContext.getExtension()")}}. Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Je nach den Datenschutzeinstellungen des Browsers könnte diese Erweiterung nur in privilegierten Kontexten verfügbar sein.
>
> Diese Erweiterung ist sowohl für {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} Kontexte verfügbar.

## Instanzmethoden

- {{domxref("WEBGL_debug_shaders.getTranslatedShaderSource()")}}
  - : Gibt die übersetzte Shader-Quelle zurück.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
