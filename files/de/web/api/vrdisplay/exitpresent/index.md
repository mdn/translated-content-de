---
title: "VRDisplay: exitPresent() Methode"
short-title: exitPresent()
slug: Web/API/VRDisplay/exitPresent
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`exitPresent()`**-Methode der {{domxref("VRDisplay")}} Schnittstelle stoppt die Darstellung einer Szene durch das `VRDisplay`.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
exitPresent()
```

### Parameter

Keine.

### Rückgabewert

Ein Promise, das aufgelöst wird, sobald die Präsentation beendet ist. Wenn das `VRDisplay` bei Aufruf von `exitPresent()` nicht darstellt, wird das Promise abgelehnt.

## Beispiele

```js
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 unterstützt");
  // Dann die an den Computer angeschlossenen Displays abrufen
  navigator.getVRDisplays().then((displays) => {
    // Wenn ein Display verfügbar ist, es zur Darstellung der Szene verwenden
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display gefunden");
      // Starten der Präsentation, wenn die Schaltfläche geklickt wird: Es kann nur als Antwort auf eine Benutzeraktion aufgerufen werden
      btn.addEventListener("click", () => {
        if (btn.textContent === "Start VR display") {
          vrDisplay.requestPresent([{ source: canvas }]).then(() => {
            console.log("Präsentation auf WebVR Display gestartet");

            // Setzen der Canvas-Größe auf die Größe des vrDisplay Viewports

            const leftEye = vrDisplay.getEyeParameters("left");
            const rightEye = vrDisplay.getEyeParameters("right");

            canvas.width =
              Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(
              leftEye.renderHeight,
              rightEye.renderHeight,
            );

            // normale Präsentation stoppen und VR-Präsentation starten
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = "Exit VR display";
          });
        } else {
          vrDisplay.exitPresent();
          console.log("Präsentation auf WebVR Display gestoppt");

          btn.textContent = "Start VR display";

          // VR-Präsentation stoppen und normale Präsentation starten
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

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Metas Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
