---
title: "XRWebGLLayer: XRWebGLLayer()-Konstruktor"
short-title: XRWebGLLayer()
slug: Web/API/XRWebGLLayer/XRWebGLLayer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRWebGLLayer()`**-Konstruktor erstellt und gibt ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt zurück. Dieses bietet die Verbindung zwischen dem WebXR-Gerät und der WebGL-Grafikschicht, die zur Darstellung der 3D-Szene verwendet wird.

## Syntax

```js-nolint
new XRWebGLLayer(session, context)
new XRWebGLLayer(session, context, options)
```

### Parameter

- `session`
  - : Ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, das die WebXR-Session angibt, die mit dem WebGL-Kontext gerendert wird.
- `context`
  - : Ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext), der den WebGL-Zeichenkontext identifiziert, der zur Darstellung der Szene für die angegebene WebXR-Session verwendet wird.
- `options` {{optional_inline}}

  - : Ein Objekt, das Konfigurationsoptionen für das neue `XRWebGLLayer` bereitstellt. Die verfügbaren Optionen sind:

    - `alpha`
      - : Der Farb-Puffer des Framebuffers wird mit einem Alpha-Kanal erstellt, wenn die `alpha`-Boolean-Eigenschaft `true` ist. Andernfalls wird der Farb-Puffer keinen Alpha-Kanal enthalten. Der Standardwert ist `true`.
    - `antialias`
      - : Ein Boolean-Wert, der `true` ist, wenn Anti-Aliasing beim Rendern im Kontext verwendet werden soll; andernfalls `false`. Der Browser wählt die zu verwendende Anti-Aliasing-Methode aus; es gibt noch keine Unterstützung für die Anforderung eines bestimmten Modus. Der Standardwert ist `true`.
    - `depth`
      - : Ein Boolean-Wert, der, falls `true`, anfordert, dass die neue Ebene einen Tiefenpuffer hat; andernfalls wird kein Tiefenlayer bereitgestellt. Der Standardwert ist `true`.
    - `framebufferScaleFactor`
      - : Ein Gleitkommawert, der zur Skalierung des Bildes während der Komposition verwendet wird, wobei ein Wert von 1.0 die Standardpixelgröße für den Framebuffer darstellt. Die statische [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Funktion [`XRWebGLLayer.getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static) gibt die Skalierung zurück, die zu einem 1:1 Pixelverhältnis führen würde, wodurch sichergestellt wird, dass die Wiedergabe in der nativen Auflösung des Geräts erfolgt. Der Standardwert ist 1.0.
    - `ignoreDepthValues`
      - : Ein Boolean-Wert, der angibt, ob der Inhalt des Tiefenpuffers bei der Komposition der Szene ignoriert werden soll oder nicht. Der Standardwert ist `false`.
    - `stencil`
      - : Ein Boolean-Wert, der, falls `true`, anfordert, dass die neue Ebene einen Stencil-Puffer enthält. Andernfalls wird kein Stencil-Puffer bereitgestellt. Der Standardwert ist `false`.

### Rückgabewert

Ein neu erstelltes [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), das die angegebene [`XRSession`](/de/docs/Web/API/XRSession) mit dem durch `context` angegebenen WebGL-Kontext verbindet, der als Renderer für die Session verwendet wird. Alle in `layerInit` angegebenen Optionen werden verwendet, um die Konfiguration des Renderingsystems anzupassen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, falls das neue `XRWebGLLayer` aufgrund eines der möglichen Zustandsfehler nicht erstellt werden konnte:
    - Die durch `session` angegebene [`XRSession`](/de/docs/Web/API/XRSession) wurde bereits gestoppt.
    - Der angegebene WebGL-Kontext, `context`, [wurde verloren](/de/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) aus irgendeinem Grund, wie z. B. einem GPU-Wechsel oder -Reset.
    - Die angegebene `session` ist immersiv, aber der `context` ist nicht WebXR-kompatibel.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, falls die für den Betrieb der Ebene benötigten Ressourcen (einschließlich Speicherpuffer) nicht zugewiesen werden konnten.

## Beispiele

In diesem Beispiel wird ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) für eine WebXR-Session, `xrSession`, erstellt.

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
- [Umgang mit verlorenem Kontext in WebGL](https://www.khronos.org/webgl/wiki/HandlingContextLost): Khronos WebGL wiki
