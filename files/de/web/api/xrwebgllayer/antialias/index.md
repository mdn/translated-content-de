---
title: "XRWebGLLayer: antialias-Eigenschaft"
short-title: antialias
slug: Web/API/XRWebGLLayer/antialias
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte Eigenschaft **`antialias`** von {{domxref("XRWebGLLayer")}} ist ein boolescher Wert, der `true` ist, wenn der Framebuffer der Rendering-Ebene Anti-Aliasing unterstützt. Andernfalls ist der Wert dieser Eigenschaft `false`. Die spezifische Anti-Aliasing-Technik, die verwendet wird, liegt im Ermessen des {{Glossary("user agent", "User-Agents")}} und kann nicht von der Website oder Web-App festgelegt werden.

## Syntax

```js-nolint
xrWebGLLayer.antialias
```

### Wert

Ein boolescher Wert, der `true` ist, wenn der Framebuffer der WebGL-Rendering-Ebene so konfiguriert ist, dass er Anti-Aliasing unterstützt. Andernfalls ist diese Eigenschaft `false`.

Wenn der [WebXR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) aktiviert ist, entspricht dieser Wert dem Wert der `antialias`-Eigenschaft des Objekts, das durch die Methode {{domxref("WebGLRenderingContext.getContextAttributes", "getContentAttributes()")}} des WebGL-Kontexts zurückgegeben wird.

## Anmerkungen zur Verwendung

Da dies eine schreibgeschützte Eigenschaft ist, können Sie den Anti-Aliasing-Modus nur beim erstmaligen Erstellen von `XRWebGLLayer` festlegen, indem Sie die `antialias`-Eigenschaft im `options`-Konfigurationsobjekt des {{domxref("XRWebGLLayer.XRWebGLLayer", "XRWebGLLayer()")}} Konstruktors angeben.

## Beispiele

Dieses Snippet überprüft den Wert von `antialias`, um festzustellen, ob es zusätzliche Maßnahmen ergreifen muss, um den Mangel an Anti-Aliasing in der WebGL-Ebene auszugleichen.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

/* .. */

if (!glLayer.antialias) {
  /* compensate for lack of anti-aliasing */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
