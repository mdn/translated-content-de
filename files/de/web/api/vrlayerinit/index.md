---
title: VRLayerInit
slug: Web/API/VRLayerInit
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}

Das **`VRLayerInit`**-Wörterbuch der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert eine Inhaltsschicht (ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)), die in einem VR-Display präsentiert werden soll.

> [!NOTE]
> Dieses Wörterbuch war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Sie können `VRLayerInit`-Objekte mit [`VRDisplay.getLayers()`](/de/docs/Web/API/VRDisplay/getLayers) abrufen und sie mit der Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) präsentieren.

## Instanzeigenschaften

- [`VRLayerInit.leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) {{deprecated_inline}}
  - : Definiert die linken Texturgrenzen der Leinwand, deren Inhalte vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden.
- [`VRLayerInit.rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds) {{deprecated_inline}}
  - : Definiert die rechten Texturgrenzen der Leinwand, deren Inhalte vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden.
- [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) {{deprecated_inline}}
  - : Definiert die Leinwand, deren Inhalte vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) präsentiert werden, wenn [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufgerufen wird.

## Beispiele

```js
// currently returns an empty array
let layers = vrDisplay.getLayers();

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
        vrDisplay.requestPresent([{ source: canvas }]).then(() => {
          console.log("Presenting to WebVR display");

          // Here it returns an array of VRLayerInit objects
          layers = vrDisplay.getLayers();

          // …
        });
      });
    }
  });
}
```

`VRLayerInit`-Objekte sehen etwa so aus:

```js
{
  leftBounds : [/* … */],
  rightBounds: [/* … */],
  source: canvasReference
}
```

> [!NOTE]
> Der `canvasReference` bezieht sich auf das {{htmlelement("canvas")}}-Element selbst, nicht auf den mit der Leinwand verknüpften WebGL-Kontext. Die anderen beiden Mitglieder sind Arrays

## Spezifikationen

Dieses Wörterbuch war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden zum Portieren von WebVR auf WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
