---
title: "VRDisplay: Methode getPose()"
short-title: getPose()
slug: Web/API/VRDisplay/getPose
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getPose()`** Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die zukünftige prognostizierte Pose der `VRDisplay` angibt, wie sie sein wird, wenn der aktuelle Frame tatsächlich präsentiert wird.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.
>
> Sie wurde dort sogar veraltet — stattdessen sollten Sie [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) verwenden, das auch ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt bereitstellt.

## Syntax

```js-nolint
getPose()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt.

## Beispiele

Sobald wir eine Referenz auf ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt haben, können wir das [`VRPose`](/de/docs/Web/API/VRPose), das die aktuelle Pose des Displays repräsentiert, abrufen.

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

Es wird jedoch empfohlen, die nicht veraltete [`pose`](/de/docs/Web/API/VRFrameData/pose)-Eigenschaft des [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekts (abgerufen über [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData)) zu verwenden, um die aktuelle Pose für jeden Frame abzurufen, bevor dieser an das Display zur Präsentation übermittelt wird. Dies geschieht bei jeder Iteration der Rendering-Schleife Ihrer Anwendung, sodass Sie sicher sein können, dass die Posendaten aktuell sind.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr dabei, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zur Übertragung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
