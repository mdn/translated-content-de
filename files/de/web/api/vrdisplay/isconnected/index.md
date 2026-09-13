---
title: "VRDisplay: Eigenschaft isConnected"
short-title: isConnected
slug: Web/API/VRDisplay/isConnected
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`isConnected`** des [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob das `VRDisplay` mit dem Computer verbunden ist.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein boolescher Wert; `true` bedeutet, dass das Display verbunden ist; `false` bedeutet, dass es nicht verbunden ist.

## Beispiele

```js
navigator.getVRDisplays().then((displays) => {
  // If a display is available, use it to present the scene
  if (displays.length > 0) {
    vrDisplay = displays[0];

    // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
    btn.addEventListener("click", () => {
      // Only request presentation if the display is still connected.
      if (vrDisplay.isConnected) {
        vrDisplay.requestPresent([{ source: canvas }]).then(() => {
          // start rendering the app, etc.
        });
      } else {
        console.log("Connection to display lost");
      }
    });
  }
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Portierungsleitfaden von Meta von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
