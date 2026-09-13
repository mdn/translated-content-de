---
title: "HMDVRDevice: getEyeParameters()-Methode"
short-title: getEyeParameters()
slug: Web/API/HMDVRDevice/getEyeParameters
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getEyeParameters()`**-Methode der [`HMDVRDevice`](/de/docs/Web/API/HMDVRDevice)-Schnittstelle gibt die aktuellen Parameter für das als Argument angegebene Auge ("left" oder "right") zurück — diese werden in einem [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt gespeichert.

Dies umfasst Informationen über das Sichtfeld und mehr.

## Syntax

```js-nolint
getEyeParameters(whichEye)
```

### Parameter

- `whichEye`
  - : Ein String, der das Auge repräsentiert, über das Sie Informationen abrufen möchten. Der Wert kann `left` oder `right` sein.

### Rückgabewert

Ein [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt.

## Beispiele

Das folgende Beispiel stammt aus dem Code des Mozilla VR Teams [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate) — genauer gesagt aus der [VREffect.js-Datei](https://github.com/MozillaReality/vr-web-examples/blob/master/threejs-vr-boilerplate/js/VREffect.js). Früh im Code wird die `getEyeParameters()`-Methode verwendet, um Informationen über jedes Auge zu erhalten, die später für Berechnungen beim Rendering genutzt werden.

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
