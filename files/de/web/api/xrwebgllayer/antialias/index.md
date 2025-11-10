---
title: "XRWebGLLayer: antialias Eigenschaft"
short-title: antialias
slug: Web/API/XRWebGLLayer/antialias
l10n:
  sourceCommit: 466ca1db767535c1aa9984b4e6c0db41b3a53475
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) Eigenschaft **`antialias`** ist ein Boolean-Wert, der `true` ist, wenn der Framebuffer der Render-Ebene Anti-Aliasing unterstützt. Andernfalls ist der Wert dieser Eigenschaft `false`. Die spezifische Anti-Aliasing-Technik wird der Diskretion des {{Glossary("user_agent", "User-Agents")}} überlassen und kann nicht von der Website oder Web-App festgelegt werden.

## Wert

Ein Boolean-Wert, der `true` ist, wenn der Framebuffer der WebGL-Rendering-Ebene so konfiguriert ist, dass er Anti-Aliasing unterstützt. Andernfalls ist diese Eigenschaft `false`.

Wenn der [WebXR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) aktiviert ist, entspricht dieser Wert dem Wert der `antialias` Eigenschaft des Objekts, das von der Methode [`getContextAttributes()`](/de/docs/Web/API/WebGLRenderingContext/getContextAttributes) des WebGL-Kontexts zurückgegeben wird.

## Verwendungshinweise

Da dies eine schreibgeschützte Eigenschaft ist, können Sie den Anti-Aliasing-Modus nur beim Erstellen der `XRWebGLLayer` festlegen, indem Sie die `antialias` Eigenschaft im `options`-Konfigurationsobjekt des [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) Konstruktors angeben.

## Beispiele

Dieses Beispiel prüft den Wert von `antialias`, um festzustellen, ob zusätzliche Arbeiten ausgeführt werden sollten, um die fehlende Anti-Aliasing-Funktion auf der WebGL-Ebene zu kompensieren.

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
