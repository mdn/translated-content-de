---
title: "VRFrameData: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/VRFrameData/timestamp
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`timestamp`** des [`VRFrameData`](/de/docs/Web/API/VRFrameData)-Interfaces gibt einen ständig steigenden Zeitstempelwert zurück, der die Zeit angibt, zu der ein Frame-Update erfolgt ist.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Zeitstempel sind nützlich, um festzustellen, ob Positionsdaten vom Hardware aktualisiert wurden. Da die Werte monoton ansteigen, können sie verglichen werden, um die Reihenfolge der Updates zu bestimmen — neuere Werte sind immer größer als oder gleich älteren Werten.

Der Zeitstempel startet bei 0, wenn [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) zum ersten Mal für ein bestimmtes [`VRDisplay`](/de/docs/Web/API/VRDisplay) aufgerufen wird.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt.

## Beispiele

```js
const frameData = new VRFrameData();
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  console.log("Display found");
  // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      drawVRScene();
    });
  });
});

// WebVR: Draw the scene for the WebVR display.
function drawVRScene() {
  // WebVR: Request the next frame of the animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // Populate frameData with the data of the next frame to display
  vrDisplay.getFrameData(frameData);

  // grab the current timestamp on each run of the rendering loop
  // and do something with it
  frameData.timestamp;

  // …

  // WebVR: Indicates that we are ready to present the rendered frame to the VR display
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden zur Portierung von Meta von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
