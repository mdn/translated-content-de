---
title: "VRDisplay: requestPresent()-Methode"
short-title: requestPresent()
slug: Web/API/VRDisplay/requestPresent
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`requestPresent()`**-Methode des {{domxref("VRDisplay")}}-Interfaces startet das Präsentieren einer Szene durch das `VRDisplay`.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
requestPresent(layers)
```

### Parameter

- `layers`
  - : Ein Array von {{domxref("VRLayerInit")}}-Objekten, die die Szene repräsentieren, die präsentiert werden soll. Derzeit kann dies mindestens 0 und maximal 1 sein.

### Rückgabewert

Ein Promise, das aufgelöst wird, sobald die Präsentation begonnen hat. Es gibt eine Reihe von Regeln bezüglich der Erfüllung oder Ablehnung des Promises:

- Wenn {{domxref("VRDisplayCapabilities.canPresent")}} false ist oder das VRLayer-Array mehr als {{domxref("VRDisplayCapabilities.maxLayers")}} Layer enthält, wird das Promise abgelehnt.
- Wenn das {{domxref("VRDisplay")}} bereits präsentiert, wenn `requestPresent()` aufgerufen wird, wird das `VRLayer`-Array, das präsentiert wird, aktualisiert.
- Wenn ein Aufruf von `requestPresent()` abgelehnt wird, während das `VRDisplay` bereits präsentiert, wird seine Präsentation beendet.
- Wenn `requestPresent()` außerhalb einer Interaktionsgeste aufgerufen wird, wird das Promise abgelehnt, es sei denn, das `VRDisplay` wurde bereits präsentiert. Diese Interaktionsgeste reicht auch aus, um [`requestPointerLock()`](/de/docs/Web/API/Element/requestPointerLock)-Aufrufe zuzulassen, bis die Präsentation beendet ist.

## Beispiele

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 unterstützt");
  // Dann die Displays abrufen, die am Computer angeschlossen sind
  navigator.getVRDisplays().then((displays) => {
    // Wenn ein Display verfügbar ist, verwenden Sie es, um die Szene zu präsentieren
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display gefunden");
      // Starten der Präsentation, wenn der Button geklickt wird: Es kann nur als Reaktion auf eine Benutzeraktion aufgerufen werden
      btn.addEventListener("click", () => {
        if (btn.textContent === "Start VR display") {
          vrDisplay.requestPresent([{ source: canvas }]).then(() => {
            console.log("Präsentation auf WebVR-Display");

            // Setzen der Canvas-Größe auf die Größe des vrDisplay-Ansichtsbereichs

            const leftEye = vrDisplay.getEyeParameters("left");
            const rightEye = vrDisplay.getEyeParameters("right");

            canvas.width =
              Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(
              leftEye.renderHeight,
              rightEye.renderHeight,
            );

            // Beenden der normalen Präsentation und Starten der VR-Präsentation
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = "Exit VR display";
          });
        } else {
          vrDisplay.exitPresent();
          console.log("Präsentation auf WebVR-Display beendet");

          btn.textContent = "Start VR display";

          // Beenden der VR-Präsentation und Starten der normalen Präsentation
          vrDisplay.cancelAnimationFrame(vrSceneFrame);
          drawScene();
        }
      });
    }
  });
}
```

> [!NOTE]
> Sie können diesen vollständigen Code unter [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
