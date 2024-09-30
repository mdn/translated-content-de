---
title: "XRWebGLBinding: getReflectionCubeMap() Methode"
short-title: getReflectionCubeMap()
slug: Web/API/XRWebGLBinding/getReflectionCubeMap
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getReflectionCubeMap()`** Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding) Schnittstelle gibt ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt zurück, das eine Reflection-Cube-Map-Textur enthält.

Das Texturformat wird durch das `reflectionFormat` der Session spezifiziert. Weitere Details finden Sie im `options` Parameter von [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) und [`XRSession.preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat). Standardmäßig wird das `srgba8`-Format verwendet. Bei Verwendung des `rgba16f` Formats müssen Sie sich in einem WebGL 2.0 Kontext befinden oder die [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) Erweiterung innerhalb von WebGL 1.0 Kontexten aktivieren.

## Syntax

```js-nolint
getReflectionCubeMap(lightProbe)
```

### Parameter

- `lightProbe`
  - : Ein [`XRLightProbe`](/de/docs/Web/API/XRLightProbe) Objekt, das durch den Aufruf von [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) zurückgegeben wird.

### Rückgabewert

Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture) Objekt.

## Beispiele

Sie rufen `getReflectionCubeMap()` typischerweise immer dann auf, wenn das `reflectionchange` Ereignis bei einer Lichtsonde ausgelöst wird, um eine aktualisierte Cube-Map abzurufen. Dies ist weniger aufwendig, als Beleuchtungsinformationen bei jedem [`XRFrame`](/de/docs/Web/API/XRFrame) abzurufen.

Wenn das `rgba16f` Format verwendet wird, aktivieren Sie die [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float) Erweiterung innerhalb von WebGL 1.0 Kontexten.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
gl.getExtension("OES_texture_half_float"); // if rgba16f is the preferredReflectionFormat

xrSession.requestLightProbe().then((lightProbe) => {
  lightProbe.addEventListener("reflectionchange", () => {
    glBinding.getReflectionCubeMap(lightProbe);
  });
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)
- [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)
