---
title: "VRDisplay: isConnected-Eigenschaft"
short-title: isConnected
slug: Web/API/VRDisplay/isConnected
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`isConnected`** der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle gibt einen booleschen Wert zurück, der angibt, ob das `VRDisplay` mit dem Computer verbunden ist.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein boolescher Wert: `true` bedeutet, dass das Display verbunden ist; `false` bedeutet, dass es nicht verbunden ist.

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

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, sie zu standardisieren.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, bei der Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Porting from WebVR to WebXR von Meta](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
