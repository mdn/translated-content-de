---
title: "VRDisplay: getPose()-Methode"
short-title: getPose()
slug: Web/API/VRDisplay/getPose
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`getPose()`**-Methode der {{domxref("VRDisplay")}}-Schnittstelle gibt ein {{domxref("VRPose")}}-Objekt zurück, das die zukünftige vorhergesagte Pose des `VRDisplay` definiert, wie es sein wird, wenn der aktuelle Frame tatsächlich dargestellt wird.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.
>
> Sie wurde dort sogar als veraltet erklärt — stattdessen sollten Sie {{domxref("VRDisplay.getFrameData()")}} verwenden, welches ebenfalls ein {{domxref("VRPose")}}-Objekt bereitstellt.

## Syntax

```js-nolint
getPose()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("VRPose")}}-Objekt.

## Beispiele

Sobald wir eine Referenz zu einem {{domxref("VRDisplay")}}-Objekt haben, können wir das {{domxref("VRPose")}} abrufen, das die aktuelle Pose des Displays darstellt.

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Dann die mit dem Computer verbundenen Displays abrufen
  navigator.getVRDisplays().then((displays) => {
    // Wenn ein Display verfügbar ist, verwendet es, um die Szene darzustellen
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display gefunden");

      // Das aktuelle VRPose-Objekt für das Display zurückgeben
      const pose = vrDisplay.getPose();

      // …
    }
  });
}
```

Es wird jedoch empfohlen, die nicht veraltete {{domxref("VRFrameData.pose", "pose")}} Eigenschaft des {{domxref("VRFrameData")}}-Objekts zu verwenden (abgerufen über {{domxref("VRDisplay.getFrameData()")}}), um die aktuelle Pose für jeden Frame abzurufen, bevor er an das Display gesendet wird, um dargestellt zu werden. Dies geschieht bei jeder Iteration der Rendering-Schleife Ihrer App, sodass Sie sicher sein können, dass die Posendaten aktuell sind.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
