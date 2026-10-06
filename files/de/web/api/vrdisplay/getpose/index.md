---
title: "VRDisplay: getPose()-Methode"
short-title: getPose()
slug: Web/API/VRDisplay/getPose
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`getPose()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle gibt ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt zurück, das die vorhergesagte Pose von `VRDisplay` zu dem Zeitpunkt beschreibt, an dem das aktuelle Frame tatsächlich angezeigt wird.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.
>
> Sie wurde sogar innerhalb der WebVR API als veraltet eingestuft. Verwenden Sie stattdessen [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData), das ebenfalls ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt bereitstellt.

## Syntax

```js-nolint
getPose()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VRPose`](/de/docs/Web/API/VRPose)-Objekt.

## Beispiele

Sobald eine Referenz auf ein [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Objekt vorliegt, können Sie das [`VRPose`](/de/docs/Web/API/VRPose)-Objekt abrufen, das die aktuelle Pose des Displays darstellt.

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

Es wird jedoch empfohlen, die nicht veraltete Eigenschaft [`pose`](/de/docs/Web/API/VRFrameData/pose) des [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Objekts zu verwenden, das Sie über [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) erhalten. So können Sie die aktuelle Pose für jedes Frame abrufen, bevor es zur Anzeige an das Display übergeben wird. Dies geschieht bei jedem Durchlauf der Rendering-Schleife Ihrer Anwendung, sodass Sie sicher sein können, dass die Posedaten aktuell sind.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
