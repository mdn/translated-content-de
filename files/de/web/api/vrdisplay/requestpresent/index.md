---
title: "VRDisplay: requestPresent() Methode"
short-title: requestPresent()
slug: Web/API/VRDisplay/requestPresent
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`requestPresent()`** Methode des [`VRDisplay`](/de/docs/Web/API/VRDisplay) Interfaces startet das Präsentieren einer Szene durch das `VRDisplay`.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
requestPresent(layers)
```

### Parameter

- `layers`
  - : Ein Array von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit) Objekten, die die Szene darstellen, die Sie präsentieren möchten. Zurzeit kann dies ein Minimum von 0 und ein Maximum von 1 sein.

### Rückgabewert

Ein Versprechen, das aufgelöst wird, sobald die Präsentation begonnen hat. Es gibt eine Reihe von Regeln bezüglich der Erfüllung oder Ablehnung des Versprechens:

- Wenn [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) falsch ist oder wenn das VRLayer-Array mehr als [`VRDisplayCapabilities.maxLayers`](/de/docs/Web/API/VRDisplayCapabilities/maxLayers) Schichten enthält, wird das Versprechen abgelehnt.
- Wenn das [`VRDisplay`](/de/docs/Web/API/VRDisplay) bereits präsentiert, wenn `requestPresent()` aufgerufen wird, wird das `VRLayer`-Array, das präsentiert wird, aktualisiert.
- Wenn ein Aufruf von `requestPresent()` abgelehnt wird, während das `VRDisplay` bereits präsentiert, wird die Präsentation beendet.
- Wenn `requestPresent()` außerhalb einer Engagement-Geste aufgerufen wird, wird das Versprechen abgelehnt, es sei denn, das `VRDisplay` präsentierte bereits. Diese Engagement-Geste ist auch ausreichend, um `requestPointerLock()` Aufrufe zu erlauben, bis die Präsentation beendet ist.

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
> Sie können diesen kompletten Code unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
