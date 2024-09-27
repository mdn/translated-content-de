---
title: "VRDisplay: requestPresent()-Methode"
short-title: requestPresent()
slug: Web/API/VRDisplay/requestPresent
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`requestPresent()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle startet die Präsentation einer Szene durch das `VRDisplay`.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
requestPresent(layers)
```

### Parameter

- `layers`
  - : Ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekten, die die Szene repräsentieren, die Sie präsentieren möchten. Momentan kann dies mindestens 0 und maximal 1 sein.

### Rückgabewert

Ein Promise, das aufgelöst wird, sobald die Präsentation begonnen hat. Es gibt eine Reihe von Regeln bezüglich der Erfüllung oder Ablehnung des Promises:

- Wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) false ist oder wenn das VRLayer-Array mehr als die in [`VRDisplayCapabilities.maxLayers`](/de/docs/Web/API/VRDisplayCapabilities/maxLayers) erlaubten Ebenen enthält, wird das Promise abgelehnt.
- Wenn das [`VRDisplay`](/de/docs/Web/API/VRDisplay) bereits präsentiert, wenn `requestPresent()` aufgerufen wird, wird das `VRLayer`-Array, das präsentiert wird, aktualisiert.
- Wenn ein Aufruf von `requestPresent()` abgelehnt wird, während das `VRDisplay` bereits präsentiert, wird es seine Präsentation beenden.
- Wenn `requestPresent()` außerhalb einer Interaktionsgeste aufgerufen wird, wird das Promise abgelehnt, es sei denn, das `VRDisplay` präsentierte bereits. Diese Interaktionsgeste reicht auch aus, um [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)-Aufrufe zuzulassen, bis die Präsentation beendet ist.

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
> Sie können diesen vollständigen Code unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) einsehen.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht länger auf einem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Meta's Anleitung zur Portierung von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
