---
title: "VRPose: position-Eigenschaft"
short-title: position
slug: Web/API/VRPose/position
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`position`**-Eigenschaft der [`VRPose`](/de/docs/Web/API/VRPose)-Schnittstelle gibt die Position des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitstempel als 3D-Vektor zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Das Koordinatensystem ist wie folgt:

- Positives X ist zur rechten Seite des Nutzers.
- Positives Y ist nach oben.
- Positives Z ist hinter dem Nutzer.

Positionen werden in Metern von einem Ursprungspunkt gemessen — dieser Punkt ist entweder die Position, an der der Sensor zuerst gelesen wurde, oder die Position des Sensors zu dem Zeitpunkt, an dem [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) zuletzt aufgerufen wurde.

> [!NOTE]
> Standardmäßig werden alle Positionen als Sitzposition angegeben. Die Umwandlung dieses Punktes mit [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) — wenn Sie beispielsweise mit einem Raum-Display arbeiten — konvertiert dies in eine Stehposition.

## Wert

Ein {{jsxref("Float32Array")}}, oder null, wenn der VR-Sensor keine Positionsdaten bereitstellen kann.

> [!NOTE]
> Benutzeragenten können emulierte Positionswerte durch Techniken wie beispielsweise Halsmodellierung bereitstellen; wenn sie dies tun, sollten sie dennoch [`VRDisplayCapabilities.hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition) als falsch melden.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden Metas Porting von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
