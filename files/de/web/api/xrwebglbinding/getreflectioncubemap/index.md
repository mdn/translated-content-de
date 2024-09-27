---
title: "XRWebGLBinding: Methode getReflectionCubeMap()"
short-title: getReflectionCubeMap()
slug: Web/API/XRWebGLBinding/getReflectionCubeMap
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getReflectionCubeMap()`**-Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Schnittstelle gibt ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt zurück, das eine Reflexions-Cube-Map-Textur enthält.

Das Texturformat wird durch das `reflectionFormat` der Sitzung spezifiziert. Weitere Details finden Sie im `options` Parameter bei [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) und [`XRSession.preferredReflectionFormat`](/de/docs/Web/API/XRSession/preferredReflectionFormat). Standardmäßig wird das `srgba8`-Format verwendet. Wenn das `rgba16f`-Format verwendet wird, müssen Sie sich in einem WebGL-2.0-Kontext befinden oder die [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)-Erweiterung innerhalb von WebGL-1.0-Kontexten aktivieren.

## Syntax

```js-nolint
getReflectionCubeMap(lightProbe)
```

### Parameter

- `lightProbe`
  - : Ein [`XRLightProbe`](/de/docs/Web/API/XRLightProbe)-Objekt, das durch den Aufruf von [`XRSession.requestLightProbe()`](/de/docs/Web/API/XRSession/requestLightProbe) zurückgegeben wird.

### Rückgabewert

Ein [`WebGLTexture`](/de/docs/Web/API/WebGLTexture)-Objekt.

## Beispiele

Sie rufen typischerweise `getReflectionCubeMap()` immer dann auf, wenn das `reflectionchange`-Event auf einer Lichtsonde ausgelöst wird, um eine aktualisierte Cube-Map abzurufen. Dies ist weniger aufwendig als das Abrufen von Beleuchtungsinformationen bei jedem [`XRFrame`](/de/docs/Web/API/XRFrame).

Wenn das `rgba16f`-Format verwendet wird, aktivieren Sie die [`OES_texture_half_float`](/de/docs/Web/API/OES_texture_half_float)-Erweiterung innerhalb von WebGL-1.0-Kontexten.

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
