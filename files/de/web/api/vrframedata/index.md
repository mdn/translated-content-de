---
title: VRFrameData
slug: Web/API/VRFrameData
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`VRFrameData`**-Schnittstelle der [WebVR API](/de/docs/Web/API/WebVR_API) repräsentiert alle Informationen, die benötigt werden, um einen einzelnen Frame einer VR-Szene darzustellen; sie wird durch {{domxref("VRDisplay.getFrameData()")}} konstruiert.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Konstruktor

- {{domxref("VRFrameData.VRFrameData", "VRFrameData()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine Instanz eines `VRFrameData`-Objekts.

## Instanz-Eigenschaften

- {{domxref("VRFrameData.leftProjectionMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für die Darstellung des linken Auges verwendet werden soll.
- {{domxref("VRFrameData.leftViewMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Sichttransformation beschreibt, die für die Darstellung des linken Auges verwendet werden soll.
- {{domxref("VRFrameData.pose")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die {{domxref("VRPose")}} des {{domxref("VRDisplay")}} beim aktuellen {{domxref("VRFrameData.timestamp")}}.
- {{domxref("VRFrameData.rightProjectionMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Projektion beschreibt, die für die Darstellung des rechten Auges verwendet werden soll.
- {{domxref("VRFrameData.rightViewMatrix")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, der eine 4x4-Matrix darstellt, die die Sichttransformation beschreibt, die für die Darstellung des rechten Auges verwendet werden soll.
- {{domxref("VRFrameData.timestamp")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein kontinuierlich ansteigender Zeitstempelwert, der die Zeit eines Frame-Updates darstellt.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie die Anleitung [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
