---
title: VRFrameData
slug: Web/API/VRFrameData
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRFrameData`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert alle Informationen, die benötigt werden, um ein einzelnes Bild einer VR-Szene zu rendern; konstruiert durch [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData).

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Konstruktor

- [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine `VRFrameData` Objektinstanz.

## Instanz-Eigenschaften

- [`VRFrameData.leftProjectionMatrix`](/de/docs/Web/API/VRFrameData/leftProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für das Rendern des linken Auges verwendet werden soll.
- [`VRFrameData.leftViewMatrix`](/de/docs/Web/API/VRFrameData/leftViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Ansichtstransformation beschreibt, die für das Rendern des linken Auges verwendet werden soll.
- [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die [`VRPose`](/de/docs/Web/API/VRPose) des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp).
- [`VRFrameData.rightProjectionMatrix`](/de/docs/Web/API/VRFrameData/rightProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für das Rendern des rechten Auges verwendet werden soll.
- [`VRFrameData.rightViewMatrix`](/de/docs/Web/API/VRFrameData/rightViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Ansichtstransformation beschreibt, die für das Rendern des rechten Auges verwendet werden soll.
- [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein ständig zunehmender Zeitstempelwert, der die Zeit angibt, zu der ein Frame-Update aufgetreten ist.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu setzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden zur Portierung von WebVR zu WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
