---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`VRDisplayCapabilities`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay). Anhand dieser Eigenschaften lässt sich beispielsweise prüfen, ob ein VR-Gerät Positionsinformationen zurückgeben kann.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Auf diese Schnittstelle kann über die Eigenschaft [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities) zugegriffen werden.

## Instanzeigenschaften

- [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display Inhalte darstellen kann (z. B. über ein Head-Mounted Display).
- [`VRDisplayCapabilities.hasExternalDisplay`](/de/docs/Web/API/VRDisplayCapabilities/hasExternalDisplay) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display vom primären Display des Geräts getrennt ist.
- [`VRDisplayCapabilities.hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display Orientierungsinformationen erfassen und zurückgeben kann.
- [`VRDisplayCapabilities.hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display Positionsinformationen erfassen und zurückgeben kann.
- [`VRDisplayCapabilities.maxLayers`](/de/docs/Web/API/VRDisplayCapabilities/maxLayers) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Zahl zurück, die angibt, wie viele [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)-Objekte das VR-Display gleichzeitig darstellen kann (z. B. die maximale Länge des Arrays, das [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) akzeptiert).

## Beispiele

```js
function reportDisplays() {
  navigator.getVRDisplays().then((displays) => {
    displays.forEach((display, i) => {
      const cap = display.capabilities;
      // cap is a VRDisplayCapabilities object
      const listItem = document.createElement("li");
      listItem.innerText = `
VR Display ID: ${display.displayId}
VR Display Name: ${display.displayName}
Display can present content: ${cap.canPresent}
Display is separate from the computer's main display: ${cap.hasExternalDisplay}
Display can return position info: ${cap.hasPosition}
Display can return orientation info: ${cap.hasOrientation}
Display max layers: ${cap.maxLayers}`;
      listItem.insertBefore(
        document.createElement("strong"),
        listItem.firstChild,
      ).textContent = `Display ${i + 1}`;
      list.appendChild(listItem);
    });
  });
}
```

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden, um browserübergreifend funktionierende WebXR-Anwendungen zu entwickeln. Weitere Informationen finden Sie in [Metas Leitfaden zur Portierung von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
