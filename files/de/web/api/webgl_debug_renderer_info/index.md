---
title: WEBGL_debug_renderer_info-Erweiterung
short-title: WEBGL_debug_renderer_info
slug: Web/API/WEBGL_debug_renderer_info
l10n:
  sourceCommit: dd898d5f2411a1743936097781268b5d649acdf9
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

Die **`WEBGL_debug_renderer_info`**-Erweiterung ist Teil der [WebGL-API](/de/docs/Web/API/WebGL_API) und stellt zwei Konstanten mit Informationen über den Grafiktreiber für Debugging-Zwecke bereit.

Abhängig von den Datenschutzeinstellungen des Browsers ist diese Erweiterung möglicherweise nur in privilegierten Kontexten verfügbar. Im Allgemeinen sollten Informationen über den Grafiktreiber nur in Ausnahmefällen verwendet werden, um Ihre WebGL-Inhalte zu optimieren oder GPU-Probleme zu untersuchen. Mit der Methode [`WebGLRenderingContext.getParameter()`](/de/docs/Web/API/WebGLRenderingContext/getParameter) können Sie feststellen, welche Funktionen unterstützt werden. Mit dem Kontextattribut [`failIfMajorPerformanceCaveat`](/de/docs/Web/API/HTMLCanvasElement/getContext) können Sie steuern, ob überhaupt ein Kontext zurückgegeben werden soll, wenn die Leistung erheblich beeinträchtigt wäre.

WebGL-Erweiterungen sind über die Methode [`WebGLRenderingContext.getExtension()`](/de/docs/Web/API/WebGLRenderingContext/getExtension) verfügbar.
Weitere Informationen finden Sie unter [WebGL-Erweiterungen verwenden](/de/docs/Web/API/WebGL_API/Using_Extensions).

> [!NOTE]
> Abhängig von den Datenschutzeinstellungen des Browsers ist diese Erweiterung möglicherweise nur in privilegierten Kontexten verfügbar oder funktioniert überhaupt nicht. In Firefox ist diese Erweiterung deaktiviert, wenn `privacy.resistFingerprinting` auf `true` gesetzt ist.
>
> Diese Erweiterung ist sowohl für [WebGL1](/de/docs/Web/API/WebGLRenderingContext)- als auch für [WebGL2](/de/docs/Web/API/WebGL2RenderingContext)-Kontexte verfügbar.

## Konstanten

- ext.UNMASKED_VENDOR_WEBGL
  - : Vendor-String des Grafiktreibers.
- ext.UNMASKED_RENDERER_WEBGL
  - : Renderer-String des Grafiktreibers.

## Beispiele

Mithilfe dieser Erweiterung können privilegierte Kontexte Debugging-Informationen über den Grafiktreiber der Benutzerin oder des Benutzers abrufen:

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
