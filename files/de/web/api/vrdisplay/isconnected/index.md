---
title: "VRDisplay: isConnected-Eigenschaft"
short-title: isConnected
slug: Web/API/VRDisplay/isConnected
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`isConnected`** Eigenschaft des {{domxref("VRDisplay")}} Interfaces gibt einen booleschen Wert zurück, der anzeigt, ob das `VRDisplay` mit dem Computer verbunden ist.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein boolescher Wert; `true` bedeutet, das Display ist verbunden; `false` bedeutet, es ist nicht verbunden.

## Beispiele

```js
navigator.getVRDisplays().then((displays) => {
  // Wenn ein Display verfügbar ist, benutzen Sie es, um die Szene zu präsentieren
  if (displays.length > 0) {
    vrDisplay = displays[0];

    // Die Präsentation starten, wenn der Button angeklickt wird: Es kann nur als Reaktion auf eine Benutzeraktion aufgerufen werden
    btn.addEventListener("click", () => {
      // Präsentation nur anfordern, wenn das Display noch verbunden ist.
      if (vrDisplay.isConnected) {
        vrDisplay.requestPresent([{ source: canvas }]).then(() => {
          // Starten Sie das Rendern der Anwendung usw.
        });
      } else {
        console.log("Verbindung zum Display verloren");
      }
    });
  }
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [WebVR zu WebXR Portierungsleitfaden von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [WebVR-API](/de/docs/Web/API/WebVR_API)
