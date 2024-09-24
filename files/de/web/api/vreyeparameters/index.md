---
title: VREyeParameters
slug: Web/API/VREyeParameters
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VREyeParameters`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) stellt alle Informationen bereit, die zum korrekten Rendern einer Szene für ein bestimmtes Auge erforderlich sind, einschließlich Informationen über das Sichtfeld.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Diese Schnittstelle ist über die Methode {{domxref("VRDisplay.getEyeParameters()")}} zugänglich.

> [!WARNING]
> Die Werte in dieser Schnittstelle sollten nicht zur Berechnung von Sicht- oder Projektionsmatrizen verwendet werden. Um die größtmögliche Hardware-Kompatibilität sicherzustellen, verwenden Sie die von {{domxref("VRFrameData")}} bereitgestellten Matrizen.

## Instanzeigenschaften

- {{domxref("VREyeParameters.offset")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Repräsentiert den Versatz vom Mittelpunkt zwischen den Augen des Benutzers bis zum Zentrum des Auges, gemessen in Metern.
- {{domxref("VREyeParameters.fieldOfView")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das aktuelle Sichtfeld für das Auge, das sich ändern kann, wenn der Benutzer den Augenabstand (IPD) anpasst.
- {{domxref("VREyeParameters.maximumFieldOfView")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das maximale unterstützte Sichtfeld für das aktuelle Auge.
- {{domxref("VREyeParameters.minimumFieldOfView")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt das minimale unterstützte Sichtfeld für das aktuelle Auge.
- {{domxref("VREyeParameters.renderWidth")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt die empfohlene Renderzielbreite jedes Augen-Viewports, in Pixeln.
- {{domxref("VREyeParameters.renderHeight")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Beschreibt die empfohlene Renderzielhöhe jedes Augen-Viewports, in Pixeln.

## Beispiele

```js
navigator.getVRDisplays().then((displays) => {
  // Wenn ein Display verfügbar ist, verwenden Sie es, um die Szene zu präsentieren
  vrDisplay = displays[0];
  console.log("Display gefunden");
  // Präsentation starten, wenn die Taste geklickt wird:
  //   Es kann nur als Reaktion auf eine Benutzeraktion aufgerufen werden
  btn.addEventListener("click", () => {
    vrDisplay.requestPresent([{ source: canvas }]).then(() => {
      console.log("Präsentation auf WebVR-Display");

      // Setzen Sie die Canvas-Größe auf die Größe des vrDisplay-Viewports

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

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Solange nicht alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Porting von WebVR zu WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
