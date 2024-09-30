---
title: VRFieldOfView
slug: Web/API/VRFieldOfView
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_header}}{{Non-standard_header}}

Die **`VRFieldOfView`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert ein Sichtfeld, das durch 4 verschiedene Gradwerte beschrieben wird, die die Ansicht von einem Mittelpunkt aus beschreiben.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Instanzeigenschaften

- [`VRFieldOfView.upDegrees`](/de/docs/Web/API/VRFieldOfView/upDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad nach oben, um die sich das Sichtfeld erstreckt.
- [`VRFieldOfView.rightDegrees`](/de/docs/Web/API/VRFieldOfView/rightDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad nach rechts, um die sich das Sichtfeld erstreckt.
- [`VRFieldOfView.downDegrees`](/de/docs/Web/API/VRFieldOfView/downDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad nach unten, um die sich das Sichtfeld erstreckt.
- [`VRFieldOfView.leftDegrees`](/de/docs/Web/API/VRFieldOfView/leftDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad nach links, um die sich das Sichtfeld erstreckt.

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
    // lEye and rEye are VREyeParameters objects

    const lFOV = lEye.fieldOfView;
    const rFOV = rEye.fieldOfView;
    // lFOV and rFOV are VRFieldOfView objects

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

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
