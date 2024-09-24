---
title: "XRWebGLBinding: getReflectionCubeMap()-Methode"
short-title: getReflectionCubeMap()
slug: Web/API/XRWebGLBinding/getReflectionCubeMap
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getReflectionCubeMap()`**-Methode der {{domxref("XRWebGLBinding")}}-Schnittstelle gibt ein {{domxref("WebGLTexture")}}-Objekt zurück, das eine Reflexions-Cube-Map-Textur enthält.

Das Texturformat wird durch das `reflectionFormat` der Sitzung bestimmt. Weitere Informationen finden Sie im `options`-Parameter bei {{domxref("XRSession.requestLightProbe()")}} und {{domxref("XRSession.preferredReflectionFormat")}}. Standardmäßig wird das `srgba8`-Format verwendet. Bei Verwendung des `rgba16f`-Formats müssen Sie sich in einem WebGL 2.0-Kontext befinden oder die {{domxref("OES_texture_half_float")}}-Erweiterung in WebGL 1.0-Kontexten aktivieren.

## Syntax

```js-nolint
getReflectionCubeMap(lightProbe)
```

### Parameter

- `lightProbe`
  - : Ein {{domxref("XRLightProbe")}}-Objekt, das durch den Aufruf von {{domxref("XRSession.requestLightProbe()")}} zurückgegeben wird.

### Rückgabewert

Ein {{domxref("WebGLTexture")}}-Objekt.

## Beispiele

Üblicherweise ruft man `getReflectionCubeMap()` auf, wenn das `reflectionchange`-Ereignis auf einer Lichtsonde ausgelöst wird, um eine aktualisierte Cube-Map zu erhalten. Dies ist weniger aufwendig, als Beleuchtungsinformationen bei jedem {{domxref("XRFrame")}} abzurufen.

Wenn das Format `rgba16f` verwendet wird, aktivieren Sie die {{domxref("OES_texture_half_float")}}-Erweiterung in WebGL 1.0-Kontexten.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
gl.getExtension("OES_texture_half_float"); // falls rgba16f das bevorzugte ReflectionFormat ist

xrSession.requestLightProbe().then((lightProbe) => {
  lightProbe.addEventListener("reflectionchange", () => {
    glBinding.getReflectionCubeMap(lightProbe);
  });
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{domxref("XRLightProbe")}}
- {{domxref("OES_texture_half_float")}}
