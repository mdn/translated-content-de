---
title: "VRDisplayCapabilities: hasExternalDisplay-Eigenschaft"
short-title: hasExternalDisplay
slug: Web/API/VRDisplayCapabilities/hasExternalDisplay
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Die schreibgeschützte **`hasExternalDisplay`**-Eigenschaft der [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities)-Schnittstelle gibt `true` zurück, wenn das VR-Display von dem Hauptdisplay des Geräts getrennt ist.

> [!NOTE]
> Wenn das Präsentieren von VR-Inhalten andere Inhalte auf dem Gerät verdecken würde, wird `false` zurückgegeben, in welchem Fall die Anwendung nicht versuchen sollte, VR-Inhalte zu spiegeln oder nicht-VR-Benutzeroberflächen zu aktualisieren, da diese Inhalte nicht sichtbar sein werden.

## Wert

Ein boolescher Wert.

## Beispiele

Siehe [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
