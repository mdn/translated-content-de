---
title: VRFrameData
slug: Web/API/VRFrameData
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRFrameData`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert alle Informationen, die benötigt werden, um einen einzelnen Frame einer VR-Szene zu rendern; erstellt durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Konstruktor

- [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine `VRFrameData`-Objektinstanz.

## Instanz-Eigenschaften

- [`VRFrameData.leftProjectionMatrix`](/de/docs/Web/API/VRFrameData/leftProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für das Rendering des linken Auges verwendet werden soll.
- [`VRFrameData.leftViewMatrix`](/de/docs/Web/API/VRFrameData/leftViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt, die die Sichttransformation beschreibt, die für das Rendering des linken Auges verwendet werden soll.
- [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die [`VRPose`](/de/docs/Web/API/VRPose) des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp).
- [`VRFrameData.rightProjectionMatrix`](/de/docs/Web/API/VRFrameData/rightProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für das Rendering des rechten Auges verwendet werden soll.
- [`VRFrameData.rightViewMatrix`](/de/docs/Web/API/VRFrameData/rightViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt, die die Sichttransformation beschreibt, die für das Rendering des rechten Auges verwendet werden soll.
- [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein ständig steigender Zeitstempelwert, der die Zeit repräsentiert, zu der ein Frame-Update erfolgt ist.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR-API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) Leitfaden für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
