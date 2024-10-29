---
title: "XRWebGLLayer: framebuffer-Eigenschaft"
short-title: framebuffer
slug: Web/API/XRWebGLLayer/framebuffer
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`framebuffer`** ist ein undurchsichtiges [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer), das zum Puffern des gerenderten Bildes verwendet wird, wenn der [XR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) genutzt wird. Andernfalls ist der Wert dieser Eigenschaft `null`. Das undurchsichtige `framebuffer` ist funktional nahezu identisch mit einem Standard-WebGL-Framebuffer, mit Ausnahme der Unterschiede, die im Abschnitt [Wie undurchsichtige Framebuffers besonders sind](#wie_undurchsichtige_framebuffers_besonders_sind) unten beschrieben werden.

## Wert

Ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer)-Objekt, das den Framebuffer darstellt, in den die 3D-Szene gerendert wird, oder `null`, wenn der [XR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) für die Sitzung deaktiviert ist.

## Verwendungshinweise

### Wie undurchsichtige Framebuffers besonders sind

Das durch die `framebuffer`-Eigenschaft dargestellte Framebuffer ist undurchsichtig. Daher unterscheidet sich sein Verhalten in mehreren Punkten von einem Standard-WebGL-Kontext. Diese Unterschiede führen dazu, dass das undurchsichtige Framebuffer sich eher wie das Standard-WebGL-Framebuffer verhält:

- Undurchsichtige Framebuffers _können_ [Anti-Aliasing](/de/docs/Web/API/XRWebGLLayer/antialias) unterstützen, selbst unter WebGL 1.0, das normalerweise dies nicht tut.
- Die Anhänge (Puffer und dergleichen) von undurchsichtigen Framebuffers können nicht inspiziert oder geändert werden. Das Aufrufen von Funktionen wie [`framebufferTexture2D()`](/de/docs/Web/API/WebGLRenderingContext/framebufferTexture2D), [`framebufferRenderbuffer()`](/de/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer), [`deleteFramebuffer()`](/de/docs/Web/API/WebGLRenderingContext/deleteFramebuffer) oder [`getFramebufferAttachmentParameter()`](/de/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter) auf einem undurchsichtigen Framebuffer führt zu dem WebGL-Fehler `INVALID_OPERATION` (`0x0502`).
- Undurchsichtige Framebuffers werden als unvollständig betrachtet und stehen außer während der Ausführung des [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Callbacks nicht zum Rendern zur Verfügung. Der Versuch, das Framebuffer zu löschen, darin zu zeichnen oder es auszulesen, führt zu einem WebGL-Fehler `INVALID_FRAMEBUFFER_OPERATION` (`0x0506`). Das Aufrufen von [`checkFramebufferStatus()`](/de/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus) auf dem WebGL-Kontext außerhalb des Animations-Frame-Callbacks verursacht den WebGL-Fehler `FRAMEBUFFER_UNSUPPORTED` (`0x8CDD`).
- Undurchsichtige Framebuffers, die mit der `depth`-Eigenschaft auf `false` initialisiert wurden, haben keinen Tiefenpuffer und stützen sich allein auf die Koordinaten zur Entfernungsbestimmung.
- Undurchsichtige Framebuffers, die ohne Angabe einer `stencil`-Eigenschaft initialisiert werden, haben keinen Stencil-Puffer.
- Undurchsichtige Framebuffers haben keinen Alphakanal verfügbar, es sei denn, die `alpha`-Eigenschaft ist `true` beim Erstellen der Schicht.
- Der XR-Kompositor geht davon aus, dass undurchsichtige Framebuffers Farben mit vorvermultipliziertem Alpha verwenden, unabhängig davon, ob das [`premultipliedAlpha`](/de/docs/Web/API/HTMLCanvasElement/getContext#premultipliedalpha)-Attribut des WebGL-Kontextes gesetzt ist oder nicht.

> [!NOTE]
> Die `depth`- und `stencil`-Eigenschaften müssen nicht unterstützt werden, damit ein Browser als vollständig WebGL-kompatibel angesehen wird.

### Die Standardkonfiguration eines neuen Framebuffers

Beim Erstellen einer neuen [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) wird ihr neues Framebuffer genauso initialisiert wie das Standard-Framebuffer für jede WebGL-Schnittstelle:

- Der Farb-Puffer ist mit seinem Löschwert auf die Farbe (0, 0, 0, 0) (bedeutet transparentes Schwarz) konfiguriert.
- Der Löschwert des Tiefen-Puffers ist die Zahl 1.0.
- Der Stencil-Puffer ist mit 0 gefüllt.

## Beispiele

Dieses Beispiel holt die `XRWebGLLayer` für eine Sitzung und übergibt dann deren `framebuffer` an die `bindFramebuffer()`-Funktion des WebGL-Kontextes.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
