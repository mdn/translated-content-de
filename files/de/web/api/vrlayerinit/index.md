---
title: VRLayerInit
slug: Web/API/VRLayerInit
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Das **`VRLayerInit`** Wörterbuch der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert eine Inhaltsebene (ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)), die Sie in einem VR-Display darstellen möchten.

> [!NOTE]
> Dieses Wörterbuch war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Sie können `VRLayerInit`-Objekte mit [`VRDisplay.getLayers()`](/de/docs/Web/API/VRDisplay/getLayers) abrufen und sie mit der Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) darstellen.

## Instanz-Eigenschaften

- [`VRLayerInit.leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) {{deprecated_inline}}
  - : Definiert die linken Texturgrenzen der Leinwand, deren Inhalte vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt werden.
- [`VRLayerInit.rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds) {{deprecated_inline}}
  - : Definiert die rechten Texturgrenzen der Leinwand, deren Inhalte vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt werden.
- [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) {{deprecated_inline}}
  - : Definiert die Leinwand, deren Inhalte vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt werden, wenn [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufgerufen wird.

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

`VRLayerInit`-Objekte sehen in etwa so aus:

```js
const init = {
  leftBounds: [/* … */],
  rightBounds: [/* … */],
  source: canvasReference,
};
```

> [!NOTE]
> Das `canvasReference` bezieht sich auf das {{htmlelement("canvas")}}-Element selbst, nicht auf den mit der Leinwand verbundenen WebGL-Kontext. Die anderen beiden Mitglieder sind Arrays.

## Spezifikationen

Dieses Wörterbuch war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es steht nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) zurückzugreifen oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden "Porting from WebVR to WebXR" von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
