---
title: "VRDisplay: cancelAnimationFrame() Methode"
short-title: cancelAnimationFrame()
slug: Web/API/VRDisplay/cancelAnimationFrame
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`cancelAnimationFrame()`** Methode der {{domxref("VRDisplay")}} Schnittstelle ist eine spezielle Implementierung von {{domxref("Window.cancelAnimationFrame")}}, die Rückrufmethoden abmeldet, die mit {{domxref("VRDisplay.requestAnimationFrame()")}} registriert wurden.

> [!NOTE]
> Diese Methode war Bestandteil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
cancelAnimationFrame(handle)
```

### Parameter

- `handle`
  - : Der Handle, der durch den Aufruf von {{domxref("VRDisplay.requestAnimationFrame()")}} zurückgegeben wurde und den Sie abmelden möchten.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
drawScene();

// WebVR: Überprüfen, ob WebVR unterstützt wird
if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 unterstützt");
  // Dann die an den Computer angeschlossenen Displays holen
  navigator.getVRDisplays().then((displays) => {
    // Wenn ein Display verfügbar ist, verwenden Sie es, um die Szene darzustellen
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display gefunden");
      // Die Präsentation starten, wenn der Button angeklickt wird: Es kann nur als Reaktion auf eine Benutzeraktion aufgerufen werden
      btn.addEventListener("click", () => {
        if (btn.textContent === "Start VR display") {
          vrDisplay.requestPresent([{ source: canvas }]).then(() => {
            console.log("Vorstellung auf WebVR Display");

            // Setzen Sie die Größe der Leinwand auf die Größe des vrDisplay Viewports

            const leftEye = vrDisplay.getEyeParameters("left");
            const rightEye = vrDisplay.getEyeParameters("right");

            canvas.width =
              Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
            canvas.height = Math.max(
              leftEye.renderHeight,
              rightEye.renderHeight,
            );

            // Stoppen Sie die normale Präsentation und starten Sie die VR-Präsentation
            window.cancelAnimationFrame(normalSceneFrame);
            drawVRScene();

            btn.textContent = "Exit VR display";
          });
        } else {
          vrDisplay.exitPresent();
          console.log("Vorstellung auf WebVR Display gestoppt");

          btn.textContent = "Start VR display";

          // Stoppen Sie die VR-Präsentation und starten Sie die normale Präsentation
          vrDisplay.cancelAnimationFrame(vrSceneFrame);
          drawScene();
        }
      });
    }
  });
} else {
  info.textContent = "WebVR API wird von diesem Browser nicht unterstützt.";
}

function drawVRScene() {
  // WebVR: Fordern Sie das nächste Bild der Animation an
  vrSceneFrame = vrDisplay.requestAnimationFrame(drawVRScene);

  // …
}
```

> [!NOTE]
> Sie können diesen vollständigen Code bei [raw-webgl-example](https://github.com/mdn/webvr-tests/blob/main/webvr/raw-webgl-example/webgl-demo.js) sehen.

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die [Portierung von Meta von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) Anleitung für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
