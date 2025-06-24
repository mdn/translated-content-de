---
title: "XRWebGLLayer: XRWebGLLayer() Konstruktor"
short-title: XRWebGLLayer()
slug: Web/API/XRWebGLLayer/XRWebGLLayer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRWebGLLayer()`** Konstruktor erstellt und gibt ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) Objekt zurück, das die Verbindung zwischen dem WebXR-Gerät und der WebGL-Grafikschicht bereitstellt, die zur Anzeige der 3D-Szene verwendet wird.

## Syntax

```js-nolint
new XRWebGLLayer(session, context)
new XRWebGLLayer(session, context, options)
```

### Parameter

- `session`
  - : Ein [`XRSession`](/de/docs/Web/API/XRSession) Objekt, das die WebXR-Sitzung spezifiziert, die mit dem WebGL-Kontext gerendert wird.
- `context`
  - : Ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), der den WebGL-Zeichenkontext identifiziert, der zum Rendern der Szene für die angegebene WebXR-Sitzung verwendet wird.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für das neue `XRWebGLLayer` bereitstellt. Die verfügbaren Optionen sind:
    - `alpha`
      - : Der Farb-Puffer des Framebuffers wird mit einem Alpha-Kanal erstellt, wenn die `alpha` Boolesche Eigenschaft `true` ist. Andernfalls hat der Farb-Puffer keinen Alpha-Kanal. Der Standardwert ist `true`.
    - `antialias`
      - : Ein Boolescher Wert, der `true` ist, wenn Antialiasing beim Rendern im Kontext verwendet werden soll; andernfalls `false`. Der Browser wählt die zu verwendende Antialiasing-Methode aus; es gibt derzeit keine Unterstützung für das Anfordern eines bestimmten Modus. Der Standardwert ist `true`.
    - `depth`
      - : Ein Boolescher Wert, der, wenn `true`, verlangt, dass die neue Schicht einen Tiefenpuffer hat; andernfalls wird keine Tiefenschicht zugewiesen. Der Standardwert ist `true`.
    - `framebufferScaleFactor`
      - : Ein Gleitkommawert, der verwendet wird, um das Bild während der Komposition zu skaliert. Ein Wert von 1,0 repräsentiert die Standard-Pixelgröße für den Framebuffer. Die statische [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) Funktion [`XRWebGLLayer.getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static) gibt die Skalierung zurück, die zu einem 1:1 Pixelverhältnis führt, wodurch sichergestellt wird, dass das Rendering in der nativen Auflösung des Geräts erfolgt. Der Standardwert ist 1,0.
    - `ignoreDepthValues`
      - : Ein Boolescher Wert, der angibt, ob die Inhalte des Tiefenpuffers beim Zusammensetzen der Szene ignoriert werden sollen oder nicht. Der Standardwert ist `false`.
    - `stencil`
      - : Ein Boolescher Wert, der, wenn `true`, verlangt, dass die neue Schicht einen Stencil-Puffer enthält. Andernfalls wird kein Stencil-Puffer zugewiesen. Der Standardwert ist `false`.

### Rückgabewert

Eine neu erstellte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die die angegebene [`XRSession`](/de/docs/Web/API/XRSession) mit dem durch `context` angegebenen WebGL-Kontext verknüpft, der als Renderer für die Sitzung verwendet wird. Alle in `layerInit` angegebenen Optionen werden verwendet, um die Konfiguration des Renderingsystems anzupassen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das neue `XRWebGLLayer` aufgrund eines der möglichen Zustandsfehler nicht erstellt werden konnte:
    - Die durch `session` angegebene [`XRSession`](/de/docs/Web/API/XRSession) wurde bereits gestoppt.
    - Der angegebene WebGL-Kontext `context` [ging verloren](/de/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) aus irgendeinem Grund, z.B. durch einen GPU-Wechsel oder -Reset.
    - Die angegebene `session` ist immersiv, aber der `context` ist nicht WebXR-kompatibel.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die für den Betrieb der Schicht benötigten Ressourcen (einschließlich Speicherpuffer) nicht zugewiesen werden konnten.

## Beispiele

In diesem Beispiel wird eine neue [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) für eine WebXR-Sitzung `xrSession` erstellt.

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
