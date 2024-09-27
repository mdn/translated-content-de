---
title: "HMDVRDevice: Methode getEyeParameters()"
short-title: getEyeParameters()
slug: Web/API/HMDVRDevice/getEyeParameters
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getEyeParameters()`**-Methode der Schnittstelle [`HMDVRDevice`](/de/docs/Web/API/HMDVRDevice) gibt die aktuellen Parameter für das angegebene Auge ("left" oder "right") zurück — gespeichert in einem [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt.

Dies umfasst Informationen zum Sichtfeld und mehr.

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameter

- `whichEye`
  - : Ein String, der das Auge darstellt, über das Sie Informationen erhalten möchten. Der Wert kann `left` oder `right` sein.

### Rückgabewert

Ein [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt.

## Beispiele

Das folgende Beispiel stammt aus dem Code des Mozilla VR Teams [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — genauer gesagt aus der [VREffect.js Datei](https://github.com/MozillaReality/vr-web-examples/blob/master/threejs-vr-boilerplate/js/VREffect.js). Früh im Code wird die `getEyeParameters()`-Methode verwendet, um Informationen zu jedem Auge zu erhalten, die später für Berechnungen beim Rendering verwendet werden.

```js
if (vrHMD.getEyeParameters !== undefined) {
  const eyeParamsL = vrHMD.getEyeParameters("left");
  const eyeParamsR = vrHMD.getEyeParameters("right");

  eyeTranslationL = eyeParamsL.eyeTranslation;
  eyeTranslationR = eyeParamsR.eyeTranslation;
  eyeFOVL = eyeParamsL.recommendedFieldOfView;
  eyeFOVR = eyeParamsR.recommendedFieldOfView;
} else {
  // …
}
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
