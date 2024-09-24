---
title: WEBGL_debug_renderer_info-Erweiterung
short-title: WEBGL_debug_renderer_info
slug: Web/API/WEBGL_debug_renderer_info
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_debug_renderer_info`**-Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt zwei Konstanten mit Informationen über den Grafiktreiber zu Debugging-Zwecken zur Verfügung.

Je nach den Datenschutzeinstellungen des Browsers kann diese Erweiterung nur in privilegierten Kontexten verfügbar sein. Allgemein sollten die Informationen über den Grafiktreiber nur in Ausnahmefällen verwendet werden, um Ihr WebGL-Inhalte zu optimieren oder GPU-Probleme zu debuggen. Die Methode {{domxref("WebGLRenderingContext.getParameter()")}} kann Ihnen helfen zu erkennen, welche Funktionen unterstützt werden, und das [`failIfMajorPerformanceCaveat`](/de/docs/Web/API/HTMLCanvasElement/getContext) Kontextattribut ermöglicht es Ihnen, zu steuern, ob ein Kontext überhaupt zurückgegeben werden sollte, wenn die Leistung dramatisch langsam wäre.

WebGL-Erweiterungen sind über die Methode {{domxref("WebGLRenderingContext.getExtension()")}} verfügbar. Weitere Informationen finden Sie unter [Using Extensions](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Je nach den Datenschutzeinstellungen des Browsers kann diese Erweiterung nur in privilegierten Kontexten verfügbar sein oder überhaupt nicht funktionieren. In Firefox wird diese Erweiterung deaktiviert, wenn `privacy.resistFingerprinting` auf `true` gesetzt ist.
>
> Diese Erweiterung ist für sowohl {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}}- als auch {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}}-Kontexte verfügbar.

## Konstanten

- ext.UNMASKED_VENDOR_WEBGL
  - : Vendor-String des Grafiktreibers.
- ext.UNMASKED_RENDERER_WEBGL
  - : Renderer-String des Grafiktreibers.

## Beispiele

Mit Hilfe dieser Erweiterung können privilegierte Kontexte Debugging-Informationen über den Grafiktreiber des Benutzers abrufen:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
const vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
const renderer = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

console.log(vendor);
console.log(renderer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGLRenderingContext.getExtension()")}}
