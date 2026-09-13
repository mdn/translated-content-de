---
title: "VRFrameData: VRFrameData() Konstruktor"
short-title: VRFrameData()
slug: Web/API/VRFrameData/VRFrameData
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Der **`VRFrameData()`** Konstruktor erstellt eine Instanz eines [`VRFrameData`](/de/docs/Web/API/VRFrameData) Objekts.

> [!NOTE]
> Dieser Konstruktor war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Er wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Syntax

```js-nolint
new VRFrameData()
```

### Parameter

Keine.

## Beispiele

Sehen Sie sich [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode an.

## Spezifikationen

Dieser Konstruktor war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Es ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden zum Portieren von WebVR auf WebXR von Meta](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
