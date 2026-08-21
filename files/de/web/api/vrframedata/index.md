---
title: VRFrameData
slug: Web/API/VRFrameData
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Das **`VRFrameData`** Interface der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert alle Informationen, die benötigt werden, um einen einzelnen Frame einer VR-Szene zu rendern; konstruiert durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).

> [!NOTE]
> Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Es wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Konstruktor

- [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine Instanz eines `VRFrameData` Objekts.

## Instanzeigenschaften

- [`VRFrameData.leftProjectionMatrix`](/de/docs/Web/API/VRFrameData/leftProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt und die Projektion beschreibt, die für das Rendering des linken Auges verwendet werden soll.
- [`VRFrameData.leftViewMatrix`](/de/docs/Web/API/VRFrameData/leftViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt und die Sichttransformation beschreibt, die für das Rendering des linken Auges verwendet werden soll.
- [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Das [`VRPose`](/de/docs/Web/API/VRPose) des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp).
- [`VRFrameData.rightProjectionMatrix`](/de/docs/Web/API/VRFrameData/rightProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt und die Projektion beschreibt, die für das Rendering des rechten Auges verwendet werden soll.
- [`VRFrameData.rightViewMatrix`](/de/docs/Web/API/VRFrameData/rightViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4x4-Matrix darstellt und die Sichttransformation beschreibt, die für das Rendering des rechten Auges verwendet werden soll.
- [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein stetig ansteigender Zeitstempelwert, der die Zeit darstellt, zu der ein Frame-Update stattgefunden hat.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Dieses Interface war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht länger auf Kurs, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
