---
title: "XRWebGLLayer: framebuffer-Eigenschaft"
short-title: framebuffer
slug: Web/API/XRWebGLLayer/framebuffer
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`framebuffer`** ist ein undurchsichtiger [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), der verwendet wird, um das gerenderte Bild zu puffern, wenn der [XR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) verwendet wird. Andernfalls hat diese Eigenschaft den Wert `null`. Der undurchsichtige Framebuffer ist funktional nahezu identisch mit einem Standard-WebGL-Framebuffer, abgesehen von den Unterschieden, die im Abschnitt [Warum undurchsichtige Framebuffer besonders sind](#warum_undurchsichtige_framebuffer_besonders_sind) unten beschrieben sind.

## Wert

Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt, das den Framebuffer darstellt, in den die 3D-Szene gerendert wird, oder `null`, wenn der [XR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) für die Sitzung deaktiviert ist.

## Verwendungshinweise

### Warum undurchsichtige Framebuffer besonders sind

Der durch die `framebuffer`-Eigenschaft dargestellte Framebuffer ist undurchsichtig. Daher unterscheidet sich sein Verhalten in mehreren Punkten von einem Standard-WebGL-Kontext. Diese Unterschiede führen dazu, dass sich der undurchsichtige Framebuffer mehr wie der Standard-WebGL-Framebuffer verhält:

- Undurchsichtige Framebuffer _könnten_ [Antialiasing](/de/docs/Web/API/XRWebGLLayer/antialias) unterstützen, sogar unter WebGL 1.0, das dies normalerweise nicht tut.
- Die Anhänge (Puffer und Ähnliches) von undurchsichtigen Framebuffern können nicht inspiziert oder geändert werden. Wenn Funktionen wie [`framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), [`framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer), [`deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer) oder [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) auf einen undurchsichtigen Framebuffer angewendet werden, führt dies zu dem WebGL-Fehler `INVALID_OPERATION` (`0x0502`).
- Undurchsichtige Framebuffer werden als unvollständig betrachtet und sind nur während der Ausführung des [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Callbacks zum Rendern verfügbar. Der Versuch, den Framebuffer zu löschen, zu zeichnen oder daraus zu lesen, führt zu einem WebGL `INVALID_FRAMEBUFFER_OPERATION`-Fehler (`0x0506`). Ein Aufruf von [`checkFramebufferStatus()`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) im WebGL-Kontext außerhalb des Animationsframe-Callbacks führt zu dem WebGL-Fehler `FRAMEBUFFER_UNSUPPORTED` (`0x8CDD`).
- Undurchsichtige Framebuffer, die mit der `depth`-Eigenschaft auf `false` initialisiert werden, besitzen keinen Tiefenpuffer und verlassen sich allein auf die Koordinaten, um Entfernungen zu bestimmen.
- Undurchsichtige Framebuffer, die ohne Angabe einer `stencil`-Eigenschaft initialisiert werden, haben keinen Stencil-Puffer.
- Undurchsichtige Framebuffer werden keinen Alphakanal haben, es sei denn, die `alpha`-Eigenschaft ist auf `true` gesetzt, wenn die Ebene erstellt wird.
- Der XR-Kompositor geht davon aus, dass undurchsichtige Framebuffer Farben mit vorvermultipliziertem Alpha verwenden, unabhängig davon, ob das [`premultipliedAlpha`](/de/docs/Web/API/HTMLCanvasElement/getContext#premultipliedalpha)-Kontextattribut des WebGL-Kontexts gesetzt ist oder nicht.

> [!NOTE]
> Die `depth`- und `stencil`-Eigenschaften müssen nicht unterstützt werden, damit ein Browser als vollständig WebGL-kompatibel angesehen wird.

### Die Standardkonfiguration eines neuen Framebuffers

Beim Erstellen eines neuen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) wird sein neuer Framebuffer wie der Standard-Framebuffer für jede WebGL-Schnittstelle initialisiert:

- Der Farb-Puffer wird mit seinem Löschwert auf die Farbe (0, 0, 0, 0) konfiguriert (bedeutet transparentes Schwarz).
- Der Löschwert des Tiefenpuffers ist die Zahl 1.0.
- Der Stencil-Puffer wird mit 0 gefüllt.

## Beispiele

In diesem Beispiel wird das `XRWebGLLayer` für eine Sitzung abgerufen und dann wird dessen Framebuffer in die [`bindFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFramebuffer)-Funktion des WebGL-Kontexts übergeben.

```js
let glLayer = xrSession.renderState.baselayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
