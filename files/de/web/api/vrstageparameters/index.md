---
title: VRStageParameters
slug: Web/API/VRStageParameters
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRStageParameters`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert die Werte, die den Bühnenbereich für Geräte beschreiben, die raumgreifende Erfahrungen unterstützen.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Diese Schnittstelle ist über die Eigenschaft {{domxref("VRDisplay.stageParameters")}} zugänglich.

## Instanz-Eigenschaften

- {{domxref("VRStageParameters.sittingToStandingTransform")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Enthält eine Matrix, die die Sitz-Raum-Ansichts-Matrizen von {{domxref("VRFrameData")}} in den Steh-Raum transformiert.
- {{domxref("VRStageParameters.sizeX")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : _Gibt die Breite_ der Spielfeldgrenzen in Metern zurück.
- {{domxref("VRStageParameters.sizeY")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : _Gibt die Tiefe_ der Spielfeldgrenzen in Metern zurück.

## Beispiele

```js
const info = document.querySelector("p");
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  const stageParams = vrDisplay.stageParameters;
  // stageParams ist ein VRStageParameters-Objekt

  if (stageParams === null) {
    info.textContent =
      "Ihre VR-Hardware unterstützt keine raumgreifenden Erfahrungen.";
  } else {
    info.innerText = `
Sitz zu Steh-Transformation: ${stageParams.sittingToStandingTransform}
Spielfeldbreite (m): ${stageParams.sizeX}
Spielfeldtiefe (m): ${stageParams.sizeY}`;
    info.insertBefore(
      document.createElement("strong"),
      info.firstChild,
    ).textContent = "Anzeigestufenparameter";
  }
});
```

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Meta-Leitfaden zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
