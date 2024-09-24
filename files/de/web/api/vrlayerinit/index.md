---
title: VRLayerInit
slug: Web/API/VRLayerInit
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

Das **`VRLayerInit`** Wörterbuch der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert eine Inhaltsschicht (ein {{domxref("HTMLCanvasElement")}} oder {{domxref("OffscreenCanvas")}}), die Sie auf einem VR-Display präsentieren möchten.

> [!NOTE]
> Dieses Wörterbuch war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Sie können `VRLayerInit`-Objekte mit {{domxref("VRDisplay.getLayers()")}} abrufen und sie mit der Methode {{domxref("VRDisplay.requestPresent()")}} präsentieren.

## Instanzeigenschaften

- {{domxref("VRLayerInit.leftBounds")}} {{deprecated_inline}}
  - : Definiert die linken Texturgrenzen der Leinwand, deren Inhalte vom {{domxref("VRDisplay")}} präsentiert werden.
- {{domxref("VRLayerInit.rightBounds")}} {{deprecated_inline}}
  - : Definiert die rechten Texturgrenzen der Leinwand, deren Inhalte vom {{domxref("VRDisplay")}} präsentiert werden.
- {{domxref("VRLayerInit.source")}} {{deprecated_inline}}
  - : Definiert die Leinwand, deren Inhalte vom {{domxref("VRDisplay")}} präsentiert werden, wenn {{domxref("VRDisplay.submitFrame()")}} aufgerufen wird.

## Beispiele

```js
// gibt derzeit ein leeres Array zurück
let layers = vrDisplay.getLayers();

if (navigator.getVRDisplays) {
  console.log("WebVR 1.1 supported");
  // Dann die an den Computer angeschlossenen Displays abrufen
  navigator.getVRDisplays().then((displays) => {
    // Wenn ein Display verfügbar ist, dieses zur Präsentation der Szene verwenden
    if (displays.length > 0) {
      vrDisplay = displays[0];
      console.log("Display gefunden");
      // Beginnt die Präsentation, wenn der Button geklickt wird: Es kann nur als Reaktion auf eine Benutzeraktion aufgerufen werden
      btn.addEventListener("click", () => {
        vrDisplay.requestPresent([{ source: canvas }]).then(() => {
          console.log("Präsentation auf WebVR-Display");

          // Hier wird ein Array von VRLayerInit-Objekten zurückgegeben
          layers = vrDisplay.getLayers();

          // …
        });
      });
    }
  });
}
```

`VRLayerInit`-Objekte sehen folgendermaßen aus:

```js
{
  leftBounds : [/* … */],
  rightBounds: [/* … */],
  source: canvasReference
}
```

> [!NOTE]
> Der `canvasReference` bezieht sich auf das {{htmlelement("canvas")}}-Element selbst, nicht auf den mit dem Canvas verbundenen WebGL-Kontext. Die anderen beiden Mitglieder sind Arrays

## Spezifikationen

Dieses Wörterbuch war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Metas Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
