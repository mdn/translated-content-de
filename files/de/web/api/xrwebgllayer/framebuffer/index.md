---
title: "XRWebGLLayer: framebuffer-Eigenschaft"
short-title: framebuffer
slug: Web/API/XRWebGLLayer/framebuffer
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte {{domxref("XRWebGLLayer")}}-Eigenschaft
**`framebuffer`** ist ein undurchsichtiges {{domxref("WebGLFramebuffer")}}, das zum Puffern des gerenderten Bildes verwendet wird, wenn der [XR Compositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) verwendet wird. Andernfalls ist der Wert dieser Eigenschaft `null`. Der undurchsichtige Framebuffer ist funktional fast identisch mit einem herkömmlichen WebGL-Framebuffer, mit den in dem Abschnitt [Wie undurchsichtige Framebuffer besonders sind](#wie_undurchsichtige_framebuffer_besonders_sind) unten beschriebenen Unterschieden.

## Wert

Ein {{domxref("WebGLFramebuffer")}}-Objekt, das den Framebuffer repräsentiert, in den die 3D-Szene gerendert wird, oder `null`, wenn der [XR Compositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) für die Sitzung deaktiviert ist.

## Verwendungsnotizen

### Wie undurchsichtige Framebuffer besonders sind

Der durch die `framebuffer`-Eigenschaft dargestellte Framebuffer ist undurchsichtig. Daher unterscheidet sich sein Verhalten in mehreren Punkten von einem Standard-WebGL-Kontext. Diese Unterschiede führen dazu, dass sich der undurchsichtige Framebuffer mehr wie der Standard-WebGL-Framebuffer verhält:

- Undurchsichtige Framebuffer _können_ [Anti-Aliasing](/de/docs/Web/API/XRWebGLLayer/antialias) unterstützen, selbst unter WebGL 1.0, das dies normalerweise nicht tut.
- Die Anhänge (Buffers und dergleichen) von undurchsichtigen Framebuffers können nicht geprüft oder geändert werden. Das Aufrufen von Funktionen wie {{domxref("WebGLRenderingContext.framebufferTexture2D", "framebufferTexture2D()")}}, {{domxref("WebGLRenderingContext.framebufferRenderbuffer", "framebufferRenderbuffer()")}}, {{domxref("WebGLRenderingContext.deleteFramebuffer","deleteFramebuffer()")}} oder {{domxref("WebGLRenderingContext.getFramebufferAttachmentParameter", "getFramebufferAttachmentParameter()")}} auf einem undurchsichtigen Framebuffer führt zu dem WebGL-Fehler `INVALID_OPERATION` (`0x0502`).
- Undurchsichtige Framebuffer gelten als unvollständig und sind nur während der Ausführung des {{domxref("XRSession.requestAnimationFrame","requestAnimationFrame()")}}-Callbacks für das Rendering verfügbar. Der Versuch, den Framebuffer zu löschen, zu zeichnen oder daraus zu lesen, führt zu einem WebGL-Fehler `INVALID_FRAMEBUFFER_OPERATION` (`0x0506`). Das Aufrufen von {{domxref("WebGLRenderingContext.checkFramebufferStatus", "checkFramebufferStatus()")}} im WebGL-Kontext von außerhalb des Animations-Frame-Callbacks verursacht den WebGL-Fehler `FRAMEBUFFER_UNSUPPORTED` (`0x8CDD`).
- Undurchsichtige Framebuffer, die mit der `depth`-Eigenschaft auf `false` initialisiert werden, haben keinen Tiefenpuffer und verlassen sich allein auf die Koordinaten zur Bestimmung der Entfernung.
- Undurchsichtige Framebuffer, die ohne Festlegung einer `stencil`-Eigenschaft initialisiert werden, haben keinen Schablonenpuffer.
- Undurchsichtige Framebuffer werden keinen Alphakanal zur Verfügung haben, es sei denn, die `alpha`-Eigenschaft ist beim Erstellen der Ebene `true`.
- Der XR Compositor geht davon aus, dass undurchsichtige Framebuffer Farben mit vorvervielfachtem Alpha verwenden, unabhängig davon, ob das [`premultipliedAlpha`](/de/docs/Web/API/HTMLCanvasElement/getContext#premultipliedalpha)-Attribute des WebGL-Kontexts gesetzt ist oder nicht.

> [!NOTE]
> Die `depth`- und `stencil`-Eigenschaften müssen nicht unterstützt werden, damit ein Browser als vollständig WebGL-kompatibel angesehen wird.

### Die Standardeinstellung eines neuen Framebuffers

Beim Erstellen eines neuen {{domxref("XRWebGLLayer")}} wird dessen neuer Framebuffer genau wie der Standard-Framebuffer für jede WebGL-Oberfläche initialisiert:

- Der Farb-Puffer wird so konfiguriert, dass sein Löschwert auf die Farbe (0, 0, 0, 0) gesetzt ist (was transparentes Schwarz bedeutet).
- Der Löschwert des Tiefen-Puffers ist die Zahl 1.0.
- Der Schablonenpuffer wird mit 0 gefüllt.

## Beispiele

Dieses Beispiel erhält die `XRWebGLLayer` für eine Sitzung und übergibt dann ihren Framebuffer an die {{domxref("WebGLRenderingContext.bindFramebuffer", "bindFramebuffer()")}}-Funktion des WebGL-Kontexts.

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
