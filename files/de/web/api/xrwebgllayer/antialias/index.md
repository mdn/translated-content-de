---
title: "XRWebGLLayer: Antialias-Eigenschaft"
short-title: antialias
slug: Web/API/XRWebGLLayer/antialias
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Eigenschaft **`antialias`** ist ein boolescher Wert, der `true` ist, wenn der Frame-Puffer der Darstellungsebene Anti-Aliasing unterstützt. Andernfalls ist der Wert dieser Eigenschaft `false`. Die spezifische Anti-Aliasing-Technik wird vom [User Agent](/de/docs/Glossary/user_agent) festgelegt und kann nicht von der Website oder Webanwendung vorgegeben werden.

## Syntax

```js-nolint
xrWebGLLayer.antialias
```

### Wert

Ein boolescher Wert, der `true` ist, wenn der Frame-Puffer der WebGL-Darstellungsebene so konfiguriert ist, dass er Anti-Aliasing unterstützt. Andernfalls ist diese Eigenschaft `false`.

Wenn der [WebXR-Compositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) aktiviert ist, entspricht dieser Wert dem Wert der `antialias`-Eigenschaft des Objekts, das von der `getContextAttributes()`-Methode des WebGL-Kontextes zurückgegeben wird.

## Hinweise zur Verwendung

Da dies eine schreibgeschützte Eigenschaft ist, können Sie den Anti-Aliasing-Modus nur beim erstmaligen Erstellen der `XRWebGLLayer` festlegen, indem Sie die `antialias`-Eigenschaft im `options`-Konfigurationsobjekt des [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer)-Konstruktors angeben.

## Beispiele

Dieser Codeausschnitt überprüft den Wert von `antialias`, um festzustellen, ob zusätzliche Arbeiten durchgeführt werden sollten, um den Mangel an Anti-Aliasing in der WebGL-Ebene zu kompensieren.

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
