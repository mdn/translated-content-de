---
title: VRDisplayCapabilities
slug: Web/API/VRDisplayCapabilities
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRDisplayCapabilities`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) beschreibt die Fähigkeiten eines {{domxref("VRDisplay")}} — ihre Funktionen können verwendet werden, um Tests zur Leistungsfähigkeit von VR-Geräten durchzuführen, z.B. ob es Positionsinformationen zurückgeben kann.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Diese Schnittstelle ist über die {{domxref("VRDisplay.capabilities")}}-Eigenschaft zugänglich.

## Instanz-Eigenschaften

- {{domxref("VRDisplayCapabilities.canPresent")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display in der Lage ist, Inhalte zu präsentieren (z.B. durch ein HMD).
- {{domxref("VRDisplayCapabilities.hasExternalDisplay")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display vom primären Display des Geräts getrennt ist.
- {{domxref("VRDisplayCapabilities.hasOrientation")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display die Orientierung nachverfolgen und zurückgeben kann.
- {{domxref("VRDisplayCapabilities.hasPosition")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob das VR-Display die Position nachverfolgen und zurückgeben kann.
- {{domxref("VRDisplayCapabilities.maxLayers")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Gibt eine Zahl zurück, die die maximale Anzahl von {{domxref("VRLayerInit")}}s angibt, die das VR-Display gleichzeitig präsentieren kann (z.B. die maximale Länge des Arrays, das {{domxref("VRDisplay.requestPresent()")}} akzeptieren kann.)

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

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
