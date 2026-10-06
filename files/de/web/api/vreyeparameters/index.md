---
title: VREyeParameters
slug: Web/API/VREyeParameters
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Schnittstelle **`VREyeParameters`** der [WebVR API](/de/docs/Web/API/WebVR_API) enthält alle Informationen, die zum korrekten Rendern einer Szene für ein bestimmtes Auge erforderlich sind, einschließlich Angaben zum Sichtfeld.

> [!NOTE]
> Diese Schnittstelle war Teil der früheren [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Auf diese Schnittstelle können Sie über die Methode [`VRDisplay.getEyeParameters()`](/de/docs/Web/API/VRDisplay/getEyeParameters) zugreifen.

> [!WARNING]
> Die Werte dieser Schnittstelle sollten nicht zur Berechnung von Ansichts- oder Projektionsmatrizen verwendet werden. Um eine möglichst breite Hardware-Kompatibilität zu gewährleisten, verwenden Sie die von [`VRFrameData`](/de/docs/Web/API/VRFrameData) bereitgestellten Matrizen.

## Instanzeigenschaften

- [`VREyeParameters.offset`](/de/docs/Web/API/VREyeParameters/offset) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt den Abstand zwischen dem Mittelpunkt zwischen den Augen der nutzenden Person und dem Mittelpunkt des jeweiligen Auges in Metern an.
- [`VREyeParameters.fieldOfView`](/de/docs/Web/API/VREyeParameters/fieldOfView) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das aktuelle Sichtfeld des Auges, das sich ändern kann, wenn die nutzende Person ihren Augenabstand (IPD) anpasst.
- [`VREyeParameters.maximumFieldOfView`](/de/docs/Web/API/VREyeParameters/maximumFieldOfView) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das maximal unterstützte Sichtfeld des jeweiligen Auges.
- [`VREyeParameters.minimumFieldOfView`](/de/docs/Web/API/VREyeParameters/minimumFieldOfView) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das minimal unterstützte Sichtfeld des jeweiligen Auges.
- [`VREyeParameters.renderWidth`](/de/docs/Web/API/VREyeParameters/renderWidth) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die empfohlene Breite des Renderziels für den Viewport des jeweiligen Auges in Pixeln an.
- [`VREyeParameters.renderHeight`](/de/docs/Web/API/VREyeParameters/renderHeight) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt die empfohlene Höhe des Renderziels für den Viewport des jeweiligen Auges in Pixeln an.

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

Diese Schnittstelle war Teil der früheren [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, sie zu standardisieren.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
