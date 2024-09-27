---
title: "XRWebGLLayer: framebuffer-Eigenschaft"
short-title: framebuffer
slug: Web/API/XRWebGLLayer/framebuffer
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`framebuffer`** ist ein undurchsichtiges [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), das zum Puffern der gerenderten Bilder verwendet wird, wenn der [XR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) verwendet wird. Andernfalls ist der Wert dieser Eigenschaft `null`. Das undurchsichtige `framebuffer` ist funktional fast dasselbe wie ein Standard-WebGL-Framebuffer, abgesehen von den Unterschieden, die im Abschnitt [Wie sich undurchsichtige Framebuffer unterscheiden](#wie_sich_undurchsichtige_framebuffer_unterscheiden) unten beschrieben werden.

## Wert

Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt, das den Framebuffer darstellt, in den die 3D-Szene gerendert wird, oder `null`, wenn der [XR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) für die Sitzung deaktiviert ist.

## Anmerkungen zur Verwendung

### Wie sich undurchsichtige Framebuffer unterscheiden

Der durch die `framebuffer`-Eigenschaft dargestellte Framebuffer ist undurchsichtig. Dies führt dazu, dass sein Verhalten in mehreren Aspekten von einem Standard-WebGL-Kontext abweicht. Diese Unterschiede lassen das undurchsichtige Framebuffer sich mehr wie das Standard-WebGL-Framebuffer verhalten:

- Durchsichtige Framebuffer _können_ [Antialiasing](/de/docs/Web/API/XRWebGLLayer/antialias) unterstützen, selbst unter WebGL 1.0, das normalerweise nicht dazu in der Lage ist.
- Die Anhänge (Puffer und dergleichen) von undurchsichtigen Framebuffers können nicht inspiziert oder verändert werden. Das Aufrufen von Funktionen wie [`framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), [`framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer), [`deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer) oder [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) an einem undurchsichtigen Framebuffer führt zum WebGL-Fehler `INVALID_OPERATION` (`0x0502`).
- Undurchsichtige Framebuffer gelten als unvollständig und sind nur während der Ausführung des [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Callbacks zum Rendern verfügbar. Der Versuch, den Framebuffer zu löschen, zu zeichnen oder zu lesen, führt zu einem WebGL-Fehler `INVALID_FRAMEBUFFER_OPERATION` (`0x0506`). Das Aufrufen von [`checkFramebufferStatus()`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) im WebGL-Kontext außerhalb des Animations-Frame-Callbacks führt zum WebGL-Fehler `FRAMEBUFFER_UNSUPPORTED` (`0x8CDD`).
- Undurchsichtige Framebuffer, die mit dem `depth`-Eigenschaft auf `false` initialisiert werden, haben keinen Tiefenpuffer und verlassen sich allein auf die Koordinaten, um die Entfernung zu bestimmen.
- Undurchsichtige Framebuffer, die ohne Angabe einer `stencil`-Eigenschaft initialisiert werden, haben keinen Stencil-Puffer.
- Undurchsichtige Framebuffer haben keinen Alphakanal zur Verfügung, es sei denn, die `alpha`-Eigenschaft ist `true`, wenn die Schicht erstellt wird.
- Der XR-Kompositor geht davon aus, dass undurchsichtige Framebuffer Farben mit vorvermultipliziertem Alpha verwenden, unabhängig davon, ob das [`premultipliedAlpha`](/de/docs/Web/API/HTMLCanvasElement/getContext#premultipliedalpha)-Kontextattribut des WebGL-Kontexts gesetzt ist oder nicht.

> [!NOTE]
> Die `depth`- und `stencil`-Eigenschaften müssen nicht unterstützt werden, damit ein Browser als vollständig WebGL-kompatibel gilt.

### Die Standardkonfiguration eines neuen Framebuffers

Beim Erstellen eines neuen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) wird sein neuer Framebuffer genauso initialisiert wie das Standard-Framebuffer für jede WebGL-Schnittstelle:

- Der Farb-Puffer wird mit seinem Löschwert auf die Farbe (0, 0, 0, 0) konfiguriert (was transparentes Schwarz bedeutet).
- Der Löschwert des Tiefenpuffers ist die Zahl 1.0.
- Der Stencil-Puffer wird mit 0 gefüllt.

## Beispiele

In diesem Beispiel wird der `XRWebGLLayer` für eine Sitzung abgerufen und dann sein Framebuffer in die `bindFramebuffer()`-Funktion des WebGL-Kontexts übergeben.

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
