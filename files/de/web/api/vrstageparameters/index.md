---
title: VRStageParameters
slug: Web/API/VRStageParameters
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VRStageParameters`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) stellt die Werte dar, die den Bereich der Bühne für Geräte beschreiben, die Erfahrungen im Raummaßstab unterstützen.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Interface ist über die [`VRDisplay.stageParameters`](/de/docs/Web/API/VRDisplay/stageParameters)-Eigenschaft zugänglich.

## Instanzeigenschaften

- [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Enthält eine Matrix, die die Ansichts-Matrizen im Sitzmodus von [`VRFrameData`](/de/docs/Web/API/VRFrameData) in den Stehmodus transformiert.
- [`VRStageParameters.sizeX`](/de/docs/Web/API/VRStageParameters/sizeX) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : _Gibt die Breite_ der Spielfeldgrenzen in Metern zurück.
- [`VRStageParameters.sizeY`](/de/docs/Web/API/VRStageParameters/sizeY) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : _Gibt die Tiefe_ der Spielfeldgrenzen in Metern zurück.

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
Play area depth (m): ${stageParams.sizeY}`;
    info.insertBefore(
      document.createElement("strong"),
      info.firstChild,
    ).textContent = "Display stage parameters";
  }
});
```

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) Leitfaden für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
