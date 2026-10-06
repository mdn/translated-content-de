---
title: "VRDisplay: Methode requestPresent()"
short-title: requestPresent()
slug: Web/API/VRDisplay/requestPresent
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Methode **`requestPresent()`** der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle startet die Darstellung einer Szene durch das `VRDisplay`.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Syntax

```js-nolint
requestPresent(layers)
```

### Parameter

- `layers`
  - : Ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten, die die darzustellende Szene repräsentieren. Derzeit kann das Array mindestens 0 und höchstens 1 Element enthalten.

### Rückgabewert

Ein Promise, das erfüllt wird, sobald die Darstellung begonnen hat. Für die Erfüllung oder Ablehnung des Promise gelten mehrere Regeln:

- Wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) `false` ist oder das `VRLayer`-Array mehr Layers enthält, als [`VRDisplayCapabilities.maxLayers`](/de/docs/Web/API/VRDisplayCapabilities/maxLayers) zulässt, wird das Promise abgelehnt.
- Wenn das [`VRDisplay`](/de/docs/Web/API/VRDisplay) beim Aufruf von `requestPresent()` bereits eine Szene darstellt, aktualisiert das `VRDisplay` das dargestellte `VRLayer`-Array.
- Wenn ein Aufruf von `requestPresent()` abgelehnt wird, während das `VRDisplay` bereits eine Szene darstellt, beendet es die Darstellung.
- Wenn `requestPresent()` außerhalb einer Interaktionsgeste aufgerufen wird, wird das Promise abgelehnt, sofern das `VRDisplay` nicht bereits eine Szene darstellt. Diese Interaktionsgeste reicht außerdem aus, um Aufrufe von [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock) zu ermöglichen, bis die Darstellung beendet ist.

## Beispiele

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Then get the displays attached to the computer
  navigator.getVRDisplays().then((displays) => {
    // If a display is available, use it to present the scene
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display found");
      // Starting the presentation when the button is clicked: It can only be called in response to a user gesture
      btn.addEventListener("click", () => {
        if (btn.textContent === "Start VR display") {
          vrDisplay.requestPresent([{ source: canvas }]).then(() => {
            console.log("Presenting to WebVR display");

            // Set the canvas size to the size of the vrDisplay viewport

            const leftEye = vrDisplay.getEyeParameters("left");
            const rightEye = vrDisplay.getEyeParameters("right");

            canvas.width =
              Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(
              leftEye.renderHeight,
              rightEye.renderHeight,
            );

            // stop the normal presentation, and start the vr presentation
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = "Exit VR display";
          });
        } else {
          vrDisplay.exitPresent();
          console.log("Stopped presenting to WebVR display");

          btn.textContent = "Start VR display";

          // Stop the VR presentation, and start the normal presentation
          vrDisplay.cancelAnimationFrame(vrSceneFrame);
          drawScene();
        }
      });
    }
  });
}
```

> [!NOTE]
> Den vollständigen Code finden Sie unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js).

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, sie zu standardisieren.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionsfähiger WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
