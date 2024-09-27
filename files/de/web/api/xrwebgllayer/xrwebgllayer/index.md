---
title: "XRWebGLLayer: XRWebGLLayer() Konstruktor"
short-title: XRWebGLLayer()
slug: Web/API/XRWebGLLayer/XRWebGLLayer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRWebGLLayer()`** Konstruktor erstellt und
gibt ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) Objekt zurück, das die Verbindung zwischen dem
WebXR-Gerät und der WebGL-Grafikschicht bereitstellt, die verwendet wird, um die 3D-Szene zu rendern.

## Syntax

```js-nolint
new XRWebGLLayer(session, context)
new XRWebGLLayer(session, context, options)
```

### Parameter

- `session`
  - : Ein [`XRSession`](/de/docs/Web/API/XRSession) Objekt, das die WebXR-Sitzung angibt, die unter Verwendung des WebGL-Kontexts gerendert wird.
- `context`
  - : Ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext),
    der den WebGL-Zeichenkontext angibt, der zum Rendern der Szene für die angegebene
    WebXR-Sitzung verwendet werden soll.
- `options` {{optional_inline}}

  - : Ein Objekt, das Konfigurationsoptionen für den neuen `XRWebGLLayer` bereitstellt. Die verfügbaren Optionen
    sind:

    - `alpha`
      - : Der Farb-Puffer des Frame-Buffers wird mit einem Alpha-Kanal eingerichtet, wenn die boolesche Eigenschaft `alpha` `true` ist. Andernfalls wird der Farb-Puffer keinen Alpha-Kanal haben. Der Standardwert ist `true`.
    - `antialias`
      - : Ein boolescher Wert, der `true` ist, wenn Anti-Aliasing beim Rendern im Kontext verwendet werden soll; ansonsten `false`. Der Browser wählt die zu verwendende Anti-Aliasing-Methode aus; es gibt noch keine Unterstützung für die Anforderung eines bestimmten Modus. Der Standardwert ist `true`.
    - `depth`
      - : Ein boolescher Wert, der, wenn `true`, verlangt, dass die neue Schicht einen Tiefenpuffer hat; andernfalls wird kein Tiefenpuffer zugewiesen. Der Standard ist `true`.
    - `framebufferScaleFactor`
      - : Ein Gleitkommawert, der verwendet wird, um das Bild während der Zusammensetzung zu skalieren, wobei ein Wert von 1,0 die Standard-Pixelgröße für den Frame-Buffer darstellt. Die statische [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) Funktion [`XRWebGLLayer.getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static) gibt die Skalierung zurück, die ein 1:1-Pixel-Verhältnis ergibt, und stellt so sicher, dass das Rendering in der nativen Auflösung des Geräts erfolgt. Der Standard ist 1.0.
    - `ignoreDepthValues`
      - : Ein boolescher Wert, der angibt, ob die Inhalte des Tiefenpuffers beim Zusammensetzen der Szene ignoriert werden sollen oder nicht. Der Standard ist `false`.
    - `stencil`
      - : Ein boolescher Wert, der, wenn `true`, verlangt, dass die neue Schicht einen Stencil-Puffer enthält. Andernfalls wird kein Stencil-Puffer zugewiesen. Der Standard ist `false`.

### Rückgabewert

Ein neu erstellter [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), der die angegebene
[`XRSession`](/de/docs/Web/API/XRSession) mit dem WebGL-Kontext verbindet, der durch `context` angegeben ist und
als Renderer für die Sitzung verwendet wird. Alle in `layerInit` angegebenen Optionen
werden verwendet, um die Konfiguration des Renderingsystems anzupassen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der neue `XRWebGLLayer` aufgrund eines oder mehrerer möglicher Zustandsfehler nicht erstellt werden konnte:
    - Die durch `session` angegebene [`XRSession`](/de/docs/Web/API/XRSession) wurde bereits
      gestoppt.
    - Der angegebene WebGL-Kontext, `context`, [wurde verloren](/de/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) aus irgendeinem Grund, wie z.B. einem GPU-Wechsel oder -Reset.
    - Die angegebene `session` ist immersiv, aber der `context` ist nicht WebXR-kompatibel.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Ressourcen (einschließlich der Speicherpuffer), die zur Funktion der Schicht benötigt werden, nicht zugeteilt werden konnten.

## Beispiele

In diesem Beispiel wird ein neuer [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) für eine WebXR-Sitzung,
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

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- [Umgang mit verlorenem Kontext in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL Wiki
