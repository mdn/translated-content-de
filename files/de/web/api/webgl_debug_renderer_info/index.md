---
title: WEBGL_debug_renderer_info Erweiterung
short-title: WEBGL_debug_renderer_info
slug: Web/API/WEBGL_debug_renderer_info
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{APIRef("WebGL")}}

Die **`WEBGL_debug_renderer_info`** Erweiterung ist Teil der [WebGL API](/de/docs/Web/API/WebGL_API) und stellt zwei Konstanten mit Informationen über den Grafiktreiber für Debugging-Zwecke bereit.

Abhängig von den Datenschutzeinstellungen des Browsers könnte diese Erweiterung nur in privilegierten Kontexten verfügbar sein. Im Allgemeinen sollten die Informationen über den Grafiktreiber nur in Ausnahmefällen genutzt werden, um Ihre WebGL-Inhalte zu optimieren oder um Probleme mit der GPU zu debuggen. Die Methode [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) kann Ihnen helfen, zu erkennen, welche Funktionen unterstützt werden, und das Attribut [`failIfMajorPerformanceCaveat`](/de/docs/Web/API/HTMLCanvasElement/getContext) ermöglicht Ihnen zu steuern, ob ein Kontext überhaupt zurückgegeben werden soll, wenn die Leistung drastisch langsam wäre.

WebGL-Erweiterungen sind verfügbar über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension). Für weitere Informationen siehe auch [Verwendung von Erweiterungen](/de/docs/Web/API/WebGL_API/Using_Extensions) im [WebGL-Tutorial](/de/docs/Web/API/WebGL_API/Tutorial).

> [!NOTE]
> Abhängig von den Datenschutzeinstellungen des Browsers könnte diese Erweiterung nur in privilegierten Kontexten verfügbar oder überhaupt nicht funktionsfähig sein. In Firefox wird diese Erweiterung deaktiviert, wenn `privacy.resistFingerprinting` auf `true` gesetzt ist.
>
> Diese Erweiterung ist sowohl für [WebGL1](/de/docs/Web/API/WebGLRenderingContext) als auch für [WebGL2](/de/docs/Web/API/WebGL2RenderingContext) Kontexte verfügbar.

## Konstanten

- ext.UNMASKED_VENDOR_WEBGL
  - : Hersteller-String des Grafiktreibers.
- ext.UNMASKED_RENDERER_WEBGL
  - : Renderer-String des Grafiktreibers.

## Beispiele

Mit Hilfe dieser Erweiterung können privilegierte Kontexte Debug-Informationen über den Grafiktreiber des Benutzers abrufen:

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

- [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension)
