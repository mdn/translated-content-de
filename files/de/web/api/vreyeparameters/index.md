---
title: VREyeParameters
slug: Web/API/VREyeParameters
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VREyeParameters`** Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert alle Informationen, die benötigt werden, um eine Szene für ein bestimmtes Auge korrekt darzustellen, einschließlich der Informationen zum Sichtfeld.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Dieses Interface ist über die Methode [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) zugänglich.

> [!WARNING]
> Die Werte in diesem Interface sollten nicht verwendet werden, um View- oder Projektionsmatrizen zu berechnen. Um die größtmögliche Hardware-Kompatibilität zu gewährleisten, sollte man die Matrizen verwenden, die von [`VRFrameData`](/de/docs/Web/API/VRFrameData) bereitgestellt werden.

## Instanz-Eigenschaften

- [`VREyeParameters.offset`](/de/docs/Web/API/VREyeParameters/offset) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Repräsentiert den Versatz vom Mittelpunkt zwischen den Augen des Benutzers zum Mittelpunkt des Auges, gemessen in Metern.
- [`VREyeParameters.fieldOfView`](/de/docs/Web/API/VREyeParameters/fieldOfView) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das aktuelle Sichtfeld für das Auge, das sich ändern kann, wenn der Benutzer seinen Augenabstand (IPD) anpasst.
- [`VREyeParameters.maximumFieldOfView`](/de/docs/Web/API/VREyeParameters/maximumFieldOfView) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das maximal unterstützte Sichtfeld für das aktuelle Auge.
- [`VREyeParameters.minimumFieldOfView`](/de/docs/Web/API/VREyeParameters/minimumFieldOfView) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das minimal unterstützte Sichtfeld für das aktuelle Auge.
- [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt die empfohlene Breite des Render-Zieles für jede Augenansicht, in Pixeln.
- [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt die empfohlene Höhe des Render-Zieles für jede Augenansicht, in Pixeln.

## Beispiele

```js
navigator.getVRDisplays().then((displays) => {
  // If a display is available, use it to present the scene
  vrDisplay = displays[0];
  console.log("Display found");
  // Starting the presentation when the button is clicked:
  //   It can only be called in response to a user gesture
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      console.log("Presenting to WebVR display");

      // Set the canvas size to the size of the vrDisplay viewport

      const leftEye = vrDisplay.getEyeParameters("left");
      const rightEye = vrDisplay.getEyeParameters("right");

      canvas.width = Math.max(leftEye.renderWidth, rightEye.renderWidth) * 2;
      canvas.height = Math.max(leftEye.renderHeight, rightEye.renderHeight);

      drawVRScene();
    });
  });
});
```

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/), oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Porting from WebVR to WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
