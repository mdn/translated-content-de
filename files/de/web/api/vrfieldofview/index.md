---
title: VRFieldOfView
slug: Web/API/VRFieldOfView
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_header}}

Das **`VRFieldOfView`**-Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert ein Sichtfeld, das durch vier Winkelwerte in Grad definiert wird. Diese beschreiben die Sicht von einem Mittelpunkt aus.

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Instanzeigenschaften

- [`VRFieldOfView.upDegrees`](/de/docs/Web/API/VRFieldOfView/upDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad, um die sich das Sichtfeld nach oben erstreckt.
- [`VRFieldOfView.rightDegrees`](/de/docs/Web/API/VRFieldOfView/rightDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad, um die sich das Sichtfeld nach rechts erstreckt.
- [`VRFieldOfView.downDegrees`](/de/docs/Web/API/VRFieldOfView/downDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die Anzahl der Grad, um die sich das Sichtfeld nach unten erstreckt.
- [`VRFieldOfView.leftDegrees`](/de/docs/Web/API/VRFieldOfView/leftDegrees) {{deprecated_inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
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

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Es ist nicht mehr vorgesehen, dieses Interface zu standardisieren.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
