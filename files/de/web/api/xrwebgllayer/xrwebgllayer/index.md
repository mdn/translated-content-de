---
title: "XRWebGLLayer: XRWebGLLayer() Konstruktor"
short-title: XRWebGLLayer()
slug: Web/API/XRWebGLLayer/XRWebGLLayer
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) **`XRWebGLLayer()`** Konstruktor erstellt und
gibt ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Objekt zurück, das die Verbindung zwischen dem
WebXR-Gerät und der WebGL-Grafikebene bereitstellt, die zur Darstellung der 3D-Szene verwendet wird.

## Syntax

```js-nolint
new XRWebGLLayer(session, context)
new XRWebGLLayer(session, context, options)
```

### Parameter

- `session`
  - : Ein [`XRSession`](/de/docs/Web/API/XRSession)-Objekt, das die WebXR-Sitzung angibt, die
    mit dem WebGL-Kontext gerendert wird.
- `context`
  - : Ein [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext),
    der den WebGL-Zeichnungskontext identifiziert, der zum Rendern der Szene für die angegebene
    WebXR-Sitzung verwendet wird.
- `options` {{optional_inline}}
  - : Ein Objekt, das Konfigurationsoptionen für das neue `XRWebGLLayer` bereitstellt. Die verfügbaren Optionen
    sind:
    - `alpha`
      - : Der Farb-Puffer des Framebuffers wird mit einem Alphakanal eingerichtet, wenn die `alpha`-Boolean-Eigenschaft `true` ist. Andernfalls hat der Farbpuffer keinen Alphakanal. Der Standardwert ist `true`.
    - `antialias`
      - : Ein Boolean-Wert, der `true` ist, wenn Anti-Aliasing beim Rendern im Kontext verwendet werden soll; andernfalls `false`. Der Browser wählt die zu verwendende Anti-Aliasing-Methode; es gibt derzeit keine Unterstützung, um einen bestimmten Modus anzufordern. Der Standardwert ist `true`.
    - `depth`
      - : Ein Boolean-Wert, der, wenn `true`, verlangt, dass die neue Ebene einen Tiefenpuffer hat; andernfalls wird keine Tiefenschicht zugewiesen. Der Standardwert ist `true`.
    - `framebufferScaleFactor`
      - : Ein Gleitkommawert, der verwendet wird, um das Bild während des Komponierens zu skalieren. Ein Wert von 1,0 repräsentiert die Standard-Pixelgröße für den Framebuffer. Die statische [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Funktion [`XRWebGLLayer.getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static) gibt die Skala zurück, die zu einem 1:1-Pixelverhältnis führen würde und dadurch sicherstellt, dass das Rendering in der nativen Auflösung des Geräts erfolgt. Der Standardwert ist 1,0.
    - `ignoreDepthValues`
      - : Ein Boolean-Wert, der angibt, ob der Inhalt des Tiefenpuffers beim Komponieren der Szene ignoriert werden soll oder nicht. Der Standardwert ist `false`.
    - `stencil`
      - : Ein Boolean-Wert, der, wenn `true`, verlangt, dass die neue Ebene einen Schablonenpuffer beinhaltet. Andernfalls wird kein Schablonenpuffer zugewiesen. Der Standardwert ist `false`.

### Rückgabewert

Ein neu erstelltes [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), das die angegebene
[`XRSession`](/de/docs/Web/API/XRSession) mit dem durch `context` angegebenen WebGL-Kontext verknüpft, der
als Renderer für die Sitzung verwendet wird. Alle in `layerInit` angegebenen Optionen
werden verwendet, um die Konfiguration des Renderingsystems anzupassen.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das neue `XRWebGLLayer` aufgrund eines von mehreren möglichen
    Zustandsfehlern nicht erstellt werden konnte:
    - Die durch `session` angegebene [`XRSession`](/de/docs/Web/API/XRSession) wurde bereits
      gestoppt.
    - Der angegebene WebGL-Kontext, `context`, [ist verloren gegangen](/de/docs/Web/API/WebGLRenderingContext/isContextLost#usage_notes) aus irgendeinem Grund, wie z.B. einem GPU-Wechsel oder -Reset.
    - Die angegebene `session` ist immersiv, aber der `context` ist
      nicht WebXR-kompatibel.
- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Ressourcen (einschließlich Speicherpuffer), die für den Betrieb der Ebene erforderlich sind, nicht
    zugewiesen werden konnten.

## Beispiele

In diesem Beispiel wird ein neues [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) für eine WebXR-Sitzung,
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
- [Einführung in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- [Umgang mit verlorenem Kontext in WebGL](https://wikis.khronos.org/webgl/HandlingContextLost): Khronos WebGL Wiki
