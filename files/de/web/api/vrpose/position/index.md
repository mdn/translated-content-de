---
title: "VRPose: position-Eigenschaft"
short-title: position
slug: Web/API/VRPose/position
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`position`** schreibgeschützte Eigenschaft des [`VRPose`](/de/docs/Web/API/VRPose)-Interfaces gibt die Position des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitpunkt als 3D-Vektor zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Das Koordinatensystem ist wie folgt:

- Positive X zeigt nach rechts vom Benutzer.
- Positive Y zeigt nach oben.
- Positive Z zeigt hinter den Benutzer.

Positionen werden in Metern von einem Ursprungspunkt aus gemessen — dieser Punkt ist entweder die Position, bei der der Sensor zum ersten Mal gelesen wurde, oder die Position des Sensors zu dem Zeitpunkt, an dem [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) zuletzt aufgerufen wurde.

> [!NOTE]
> Standardmäßig werden alle Positionen als Sitzplatzpositionen angegeben. Die Transformation dieses Punktes mit [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) — wenn Sie beispielsweise mit einem Raumdisplay arbeiten — wandelt dies in eine stehende Platzposition um.

## Wert

Ein {{jsxref("Float32Array")}}, oder null, wenn der VR-Sensor keine Positionsdaten bereitstellen kann.

> [!NOTE]
> Benutzeragenten können emulierte Positionswerte durch Techniken wie Nackenmodellierung bereitstellen; dabei sollten sie dennoch [`VRDisplayCapabilities.hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition) als falsch melden.

## Beispiele

Siehe [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die von der [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
