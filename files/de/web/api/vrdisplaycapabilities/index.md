---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRDisplayCapabilities`** Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) beschreibt die Fähigkeiten eines [`VRDisplay`](/de/docs/Web/API/VRDisplay) – ihre Funktionen können verwendet werden, um Tests zur Gerätetauglichkeit durchzuführen, zum Beispiel ob es Positionsinformationen zurückgeben kann.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Auf diese Schnittstelle kann über die [`VRDisplay.capabilities`](/de/docs/Web/API/VRDisplay/capabilities) Eigenschaft zugegriffen werden.

## Instanzeigenschaften

- [`VRDisplayCapabilities.canPresent`](/de/docs/Web/API/VRDisplayCapabilities/canPresent) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display in der Lage ist, Inhalte zu präsentieren (z.B. über ein HMD).
- [`VRDisplayCapabilities.hasExternalDisplay`](/de/docs/Web/API/VRDisplayCapabilities/hasExternalDisplay) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display von dem primären Display des Geräts getrennt ist.
- [`VRDisplayCapabilities.hasOrientation`](/de/docs/Web/API/VRDisplayCapabilities/hasOrientation) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display die Orientierung verfolgen und zurückgeben kann.
- [`VRDisplayCapabilities.hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display die Position verfolgen und zurückgeben kann.
- [`VRDisplayCapabilities.maxLayers`](/de/docs/Web/API/VRDisplayCapabilities/maxLayers) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Zahl an, die die maximale Anzahl von [`VRLayerInit`](/de/docs/Web/API/VRLayerInit)s angibt, die das VR-Display gleichzeitig präsentieren kann (z.B. die maximale Länge des Arrays, das [`VRDisplay.requestPresent()`](/de/docs/Web/API/VRDisplay/requestPresent) akzeptieren kann).

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

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
