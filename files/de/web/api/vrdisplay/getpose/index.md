---
title: "VRDisplay: getPose()-Methode"
short-title: getPose()
slug: Web/API/VRDisplay/getPose
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getPose()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die zukünftige vorhergesagte Position des `VRDisplay` definiert, so wie sie angezeigt wird, wenn der aktuelle Frame tatsächlich präsentiert wird.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.
>
> Sie wurde sogar dort als veraltet erklärt – stattdessen sollten Sie [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) verwenden, das ebenfalls ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt bereitstellt.

## Syntax

```js-nolint
getPose()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt.

## Beispiele

Sobald wir eine Referenz zu einem [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir das [`VRPose`](/de/docs/Web/API/VRPose) abrufen, das die aktuelle Position des Displays darstellt.

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then((displays) => {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display found");

      // Return the current VRPose object for the display
      const pose = vrDisplay.getPose();

      // …
    }
  });
}
```

Es wird jedoch empfohlen, die nicht veraltete [`pose`](/de/docs/Web/API/VRFrameData/pose)-Eigenschaft des [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekts (abgerufen über [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)) zu verwenden, um die aktuelle Position für jeden Frame abzurufen, bevor dieser dem Display zur Präsentation übergeben wird. Dies geschieht bei jeder Iteration der Render-Schleife Ihrer App, sodass Sie sicher sein können, dass die Positionsdaten aktuell sind.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
