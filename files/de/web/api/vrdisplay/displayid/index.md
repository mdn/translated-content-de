---
title: "VRDisplay: displayId-Eigenschaft"
short-title: displayId
slug: Web/API/VRDisplay/displayId
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`displayId`**-Eigenschaft des [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Interfaces ist eine schreibgeschützte Eigenschaft, die eine Kennung für dieses spezielle `VRDisplay` zurückgibt. Diese Kennung wird auch als Verbindungspunkt in der [Gamepad API](/de/docs/Web/API/Gamepad_API) verwendet (siehe [`Gamepad.displayId`](/de/docs/Web/API/Gamepad/displayId)).

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Eine Zahl, die die ID des spezifischen `VRDisplay` darstellt.

## Beispiele

Siehe [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/)-Leitfaden von Meta für mehr Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
