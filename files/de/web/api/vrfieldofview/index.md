---
title: VRFieldOfView
slug: Web/API/VRFieldOfView
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_header}}{{Non-standard_header}}

Die **`VRFieldOfView`**-Schnittstelle der [WebVR-API](/de/docs/Web/API/WebVR_API) stellt ein Sichtfeld dar, das durch vier verschiedene Gradwerte definiert wird, die die Sicht von einem Mittelpunkt aus beschreiben.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR-Geräte-API](https://immersive-web.github.io/webxr/) ersetzt.

## Instanzeigenschaften

- {{domxref("VRFieldOfView.upDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad, um die sich das Sichtfeld nach oben erstreckt.
- {{domxref("VRFieldOfView.rightDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad, um die sich das Sichtfeld nach rechts erstreckt.
- {{domxref("VRFieldOfView.downDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad, um die sich das Sichtfeld nach unten erstreckt.
- {{domxref("VRFieldOfView.leftDegrees")}} {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad, um die sich das Sichtfeld nach links erstreckt.

## Beispiele

```js
const info = document.querySelector("p");
const list = document.querySelector("ul");
let vrDisplay;

if (navigator.getVRDisplays) {
  reportFieldOfView();
} else {
  info.textContent = "WebVR API not supported by this browser.";
}

function reportFieldOfView() {
  navigator.getVRDisplays().then((displays) => {
    vrDisplay = displays[0];
    const lEye = vrDisplay.getEyeParameters("left");
    const rEye = vrDisplay.getEyeParameters("right");
    // lEye und rEye sind VREyeParameters Objekte

    const lFOV = lEye.fieldOfView;
    const rFOV = rEye.fieldOfView;
    // lFOV und rFOV sind VRFieldOfView Objekte

    const listitem1 = document.createElement("li");
    const listitem2 = document.createElement("li");

    listitem1.innerText = `
Offset: ${lEye.offset}
Render width: ${lEye.renderWidth}
Render height: ${lEye.renderHeight}
Up degrees: ${lFOV.upDegrees}
Right degrees: ${lFOV.rightDegrees}
Down degrees: ${lFOV.downDegrees}
Left degrees: ${lFOV.leftDegrees}`;
    listitem1.insertBefore(
      document.createElement("strong"),
      listitem1.firstChild,
    ).textContent = "Left eye parameters";

    listitem2.innerText = `
Offset: ${rEye.offset}
Render width: ${rEye.renderWidth}
Render height: ${rEye.renderHeight}
Up degrees: ${rFOV.upDegrees}
Right degrees: ${rFOV.rightDegrees}
Down degrees: ${rFOV.downDegrees}
Left degrees: ${rFOV.leftDegrees}`;
    listitem2.insertBefore(
      document.createElement("strong"),
      listitem2.firstChild,
    ).textContent = "Right eye parameters";

    list.appendChild(listitem1);
    list.appendChild(listitem2);
  });
}
```

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR-Geräte-API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR-APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR-API](/de/docs/Web/API/WebVR_API)
