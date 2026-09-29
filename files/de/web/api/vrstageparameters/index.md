---
title: VRStageParameters
slug: Web/API/VRStageParameters
l10n:
  sourceCommit: 5351b03470685486d841a3340c6971351058194f
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VRStageParameters`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) stellt die Werte dar, die den verfügbaren Bewegungsbereich für Geräte beschreiben, die raumfüllende VR-Erlebnisse unterstützen.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Auf dieses Interface kann über die Eigenschaft [`VRDisplay.stageParameters`](/de/docs/Web/API/VRDisplay/stageParameters) zugegriffen werden.

## Instanzeigenschaften

- [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Enthält eine Matrix, die die Ansichtsmatrizen von [`VRFrameData`](/de/docs/Web/API/VRFrameData) vom Koordinatensystem für sitzende Personen in das Koordinatensystem für stehende Personen transformiert.
- [`VRStageParameters.sizeX`](/de/docs/Web/API/VRStageParameters/sizeX) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : _Gibt die Breite_ des Spielbereichs in Metern zurück.
- [`VRStageParameters.sizeZ`](/de/docs/Web/API/VRStageParameters/sizeZ) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : _Gibt die Tiefe_ des Spielbereichs in Metern zurück.

## Beispiele

```js
const info = document.querySelector("p");
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  const stageParams = vrDisplay.stageParameters;
  // stageParams is a VRStageParameters object

  if (stageParams === null) {
    info.textContent =
      "Your VR Hardware does not support room-scale experiences.";
  } else {
    info.innerText = `
Sitting to standing transform: ${stageParams.sittingToStandingTransform}
Play area width (m): ${stageParams.sizeX}
Play area depth (m): ${stageParams.sizeZ}`;
    info.insertBefore(
      document.createElement("strong"),
      info.firstChild,
    ).textContent = "Display stage parameters";
  }
});
```

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, es zu standardisieren.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
