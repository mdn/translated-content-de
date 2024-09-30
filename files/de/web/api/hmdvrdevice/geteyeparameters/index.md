---
title: "HMDVRDevice: getEyeParameters()-Methode"
short-title: getEyeParameters()
slug: Web/API/HMDVRDevice/getEyeParameters
l10n:
  sourceCommit: ccbc5d4100e0a5de844e060b025883ef1611d7b8
---

{{deprecated_header}}{{APIRef("WebVR API")}}{{Non-standard_header}}

Die **`getEyeParameters()`**-Methode der [`HMDVRDevice`](/de/docs/Web/API/HMDVRDevice)-Schnittstelle gibt die aktuellen Parameter für das Auge zurück, das als Argument angegeben wird ("left" oder "right") — gespeichert in einem [`VREyeParameters`](/de/docs/Web/API/VREyeParameters)-Objekt.

Dies beinhaltet Informationen über das Sichtfeld und mehr.

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

Das folgende Beispiel stammt aus dem [threejs-vr-boilerplate](https://github.com/MozillaReality/vr-web-examples/tree/master/threejs-vr-boilerplate)-Code des Mozilla VR-Teams — genauer gesagt aus der [VREffect.js-Datei](https://github.com/MozillaReality/vr-web-examples/blob/master/threejs-vr-boilerplate/js/VREffect.js). Früh im Code wird die `getEyeParameters()`-Methode verwendet, um Informationen über jedes Auge zu erhalten, die dann später für Berechnungen beim Rendering genutzt werden.

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
