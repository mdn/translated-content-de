---
title: VRLayerInit
slug: Web/API/VRLayerInit
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VRLayerInit`**-Dictionary der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert eine Inhaltsebene (ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement) oder [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)), die Sie auf einem VR-Display darstellen möchten.

> [!NOTE]
> Dieses Dictionary war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Sie können `VRLayerInit`-Objekte mit [`VRDisplay.getLayers()`](/de/docs/Web/API/VRDisplay/getLayers) abrufen und sie mit der Methode [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) darstellen.

## Instanzeigenschaften

- [`VRLayerInit.leftBounds`](/de/docs/Web/API/VRLayerInit/leftBounds) {{deprecated_inline}}
  - : Definiert die linken Texturgrenzen des Canvas, dessen Inhalt vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt wird.
- [`VRLayerInit.rightBounds`](/de/docs/Web/API/VRLayerInit/rightBounds) {{deprecated_inline}}
  - : Definiert die rechten Texturgrenzen des Canvas, dessen Inhalt vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt wird.
- [`VRLayerInit.source`](/de/docs/Web/API/VRLayerInit/source) {{deprecated_inline}}
  - : Definiert den Canvas, dessen Inhalt vom [`VRDisplay`](/de/docs/Web/API/VRDisplay) dargestellt wird, wenn [`VRDisplay.submitFrame()`](/de/docs/Web/API/VRDisplay/submitFrame) aufgerufen wird.

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

`VRLayerInit`-Objekte sehen ungefähr so aus:

```js
const init = {
  leftBounds: [/* … */],
  rightBounds: [/* … */],
  source: canvasReference,
};
```

> [!NOTE]
> `canvasReference` bezieht sich auf das {{htmlelement("canvas")}}-Element selbst, nicht auf den mit dem Canvas verknüpften WebGL-Kontext. Die beiden anderen Member sind Arrays.

## Spezifikationen

Dieses Dictionary war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es wird nicht mehr angestrebt, es zu einem Standard zu machen.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
