---
title: "XRWebGLLayer: XRWebGLLayer() Konstruktor"
short-title: XRWebGLLayer()
slug: Web/API/XRWebGLLayer/XRWebGLLayer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRWebGLLayer()`** Konstruktor erstellt und
gibt ein neues {{domxref("XRWebGLLayer")}}-Objekt zurück, welches die Verbindung zwischen dem
WebXR-Gerät und der WebGL-Grafikebene herstellt, die zur Darstellung der 3D-Szene verwendet wird.

## Syntax

```js-nolint
new XRWebGLLayer(session, context)
new XRWebGLLayer(session, context, options)
```

### Parameter

- `session`
  - : Ein {{domxref("XRSession")}}-Objekt, das die WebXR-Sitzung angibt, welche mit dem WebGL-Kontext
    gerendert werden soll.
- `context`
  - : Ein {{domxref("WebGLRenderingContext")}} oder {{domxref("WebGL2RenderingContext")}},
    der den WebGL-Zeichenkontext identifiziert, der zum Rendern der Szene für die angegebene
    WebXR-Sitzung verwendet werden soll.
- `options` {{optional_inline}}

  - : Ein Objekt, das Konfigurationsoptionen für die neue `XRWebGLLayer` bereitstellt. Die verfügbaren Optionen
    sind:

    - `alpha`
      - : Der Farb-Puffer des Framebuffers wird mit einem Alpha-Kanal erstellt, wenn die `alpha`-Boolean-Eigenschaft `true` ist. Andernfalls wird der Farb-Puffer keinen Alpha-Kanal haben. Der Standardwert ist `true`.
    - `antialias`
      - : Ein Boolean-Wert, der `true` ist, wenn Anti-Aliasing beim Rendern im Kontext verwendet werden soll; andernfalls `false`. Der Browser wählt die Anti-Aliasing-Methode aus, die verwendet werden soll; es gibt noch keine Unterstützung, um einen spezifischen Modus anzufordern. Der Standardwert ist `true`.
    - `depth`
      - : Ein Boolean-Wert, der, wenn `true`, angibt, dass die neue Schicht einen Tiefenpuffer haben soll; andernfalls wird kein Tiefenlayer zugewiesen. Der Standardwert ist `true`.
    - `framebufferScaleFactor`
      - : Ein Fließkommawert, der zur Skalierung des Bildes während der Komposition verwendet wird, wobei ein Wert von 1.0 die Standard-Pixelgröße für den Framebuffer darstellt. Die statische {{domxref("XRWebGLLayer")}}-Funktion {{domxref("XRWebGLLayer.getNativeFramebufferScaleFactor_static", "XRWebGLLayer.getNativeFramebufferScaleFactor()")}} gibt die Skalierung zurück, die ein 1:1-Pixelverhältnis ergeben würde, und stellt damit sicher, dass das Rendering in der nativen Auflösung des Geräts erfolgt. Der Standardwert ist 1.0.
    - `ignoreDepthValues`
      - : Ein Boolean-Wert, der angibt, ob die Inhalte des Tiefenpuffers bei der Komposition der Szene ignoriert werden sollen oder nicht. Der Standardwert ist `false`.
    - `stencil`
      - : Ein Boolean-Wert, der, wenn `true`, angibt, dass die neue Schicht einen Stencil-Puffer beinhalten soll. Andernfalls wird kein Stencil-Puffer zugewiesen. Der Standardwert ist `false`.

### Rückgabewert

Eine neu erstellte {{domxref("XRWebGLLayer")}}, die die angegebene
{{domxref("XRSession")}} mit dem WebGL-Kontext, der durch `context` angegeben wird, verbindet, welche
als Renderer für die Sitzung verwendet wird. Alle in `layerInit` angegebenen Optionen
werden verwendet, um die Konfiguration des Renderingsystems anzupassen.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die neue `XRWebGLLayer` aufgrund eines von mehreren möglichen Zustandsfehlern nicht erstellt werden konnte:
    - Die {{domxref("XRSession")}}, die durch `session` angegeben wird, wurde bereits
      gestoppt.
    - Der angegebene WebGL-Kontext, `context`, [wurde verloren](/de/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) aus irgendeinem Grund, wie einem GPU-Wechsel oder -Reset.
    - Die angegebene `session` ist immersiv, aber der `context` ist
      nicht WebXR-kompatibel.
- `OperationError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Ressourcen (einschließlich Speicherpuffer), die für den Betrieb der Schicht benötigt werden, nicht
    zugewiesen werden konnten.

## Beispiele

In diesem Beispiel wird eine neue {{domxref("XRWebGLLayer")}} für eine WebXR-Sitzung,
`xrSession`, erstellt.

```js
xrSession.updateRenderState({
  baseLayer: new XRWebGLLayer(xrSession, gl, {
    alpha: false,
    antialias: false,
    depth: false,
    framebufferScaleFactor: 0.5,
    ignoreDepthValues: true,
    stencil: false,
  }),
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- [Umgang mit verlorenem Kontext in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL-Wiki
