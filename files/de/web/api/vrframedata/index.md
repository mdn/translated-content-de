---
title: VRFrameData
slug: Web/API/VRFrameData
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Schnittstelle **`VRFrameData`** der [WebVR API](/de/docs/Web/API/WebVR_API) enthält alle Informationen, die zum Rendern eines einzelnen Frames einer VR-Szene benötigt werden. Sie wird von [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData) erstellt.

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Konstruktor

- [`VRFrameData()`](/de/docs/Web/API/VRFrameData/VRFrameData) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine `VRFrameData`-Objektinstanz.

## Instanzeigenschaften

- [`VRFrameData.leftProjectionMatrix`](/de/docs/Web/API/VRFrameData/leftProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4×4-Matrix darstellt, die die für das Rendern des linken Auges zu verwendende Projektion beschreibt.
- [`VRFrameData.leftViewMatrix`](/de/docs/Web/API/VRFrameData/leftViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4×4-Matrix darstellt, die die für das Rendern des linken Auges zu verwendende Ansichtstransformation beschreibt.
- [`VRFrameData.pose`](/de/docs/Web/API/VRFrameData/pose) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Die [`VRPose`](/de/docs/Web/API/VRPose) des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum Zeitpunkt von [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp).
- [`VRFrameData.rightProjectionMatrix`](/de/docs/Web/API/VRFrameData/rightProjectionMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4×4-Matrix darstellt, die die für das Rendern des rechten Auges zu verwendende Projektion beschreibt.
- [`VRFrameData.rightViewMatrix`](/de/docs/Web/API/VRFrameData/rightViewMatrix) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein {{jsxref("Float32Array")}}, das eine 4×4-Matrix darstellt, die die für das Rendern des rechten Auges zu verwendende Ansichtstransformation beschreibt.
- [`VRFrameData.timestamp`](/de/docs/Web/API/VRFrameData/timestamp) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein stetig steigender Zeitstempelwert, der den Zeitpunkt angibt, zu dem ein Frame aktualisiert wurde.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples).

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
