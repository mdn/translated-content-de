---
title: "VRFrameData: timestamp-Eigenschaft"
short-title: timestamp
slug: Web/API/VRFrameData/timestamp
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`timestamp`**-Eigenschaft der {{domxref("VRFrameData")}}-Schnittstelle gibt einen ständig zunehmenden Zeitstempelwert zurück, der die Zeit angibt, zu der ein Frame-Update stattgefunden hat.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR-Device-API](https://immersive-web.github.io/webxr/) ersetzt.

Zeitstempel sind nützlich, um festzustellen, ob Positionsstatusdaten von der Hardware aktualisiert wurden. Da die Werte monoton ansteigen, können sie verglichen werden, um die Reihenfolge der Updates zu bestimmen – neuere Werte sind immer größer als oder gleich älteren Werten.

Der Zeitstempel beginnt bei 0, wenn {{domxref("VRDisplay.getFrameData()")}} zum ersten Mal für ein bestimmtes {{domxref("VRDisplay")}} aufgerufen wird.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Objekt.

## Beispiele

```js
const frameData = new VRFrameData();
let vrDisplay;

navigator.getVRDisplays().then((displays) => {
  vrDisplay = displays[0];
  console.log("Display found");
  // Starten der Präsentation, wenn der Button angeklickt wird: Es kann nur als Reaktion auf eine Benutzeraktion aufgerufen werden
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      drawVRScene();
    });
  });
});

// WebVR: Zeichnen der Szene für das WebVR-Display.
function drawVRScene() {
  // WebVR: Anfordern des nächsten Frames der Animation
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // FrameData mit den Daten des nächsten anzuzeigenden Frames befüllen
  vrDisplay.getFrameData(frameData);

  // Erfassen des aktuellen Zeitstempels bei jedem Durchlauf der Render-Schleife
  // und etwas damit tun
  framedata.timestamp;

  // …

  // WebVR: Gibt an, dass wir bereit sind, das gerenderte Frame auf dem VR-Display zu präsentieren
  vrDisplay.submitFrame();
}
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR-Device-API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR-API](/de/docs/Web/API/WebVR_API)
