---
title: VRStageParameters
slug: Web/API/VRStageParameters
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`VRStageParameters`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert die Werte, die den Bühnenbereich für Geräte beschreiben, die raumgroße Erfahrungen unterstützen.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Dieses Interface ist über die [`VRDisplay.stageParameters`](/de/docs/Web/API/VRDisplay/stageParameters)-Eigenschaft zugänglich.

## Instanz-Eigenschaften

- [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Enthält eine Matrix, die die Sitzraum-Ansichtsmatrizen von [`VRFrameData`](/de/docs/Web/API/VRFrameData) in den Stehraum transformiert.
- [`VRStageParameters.sizeX`](/de/docs/Web/API/VRStageParameters/sizeX) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die _Breite der Spielbereichsgrenzen_ in Metern zurück.
- [`VRStageParameters.sizeY`](/de/docs/Web/API/VRStageParameters/sizeY) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die _Tiefe der Spielbereichsgrenzen_ in Metern zurück.

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

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
