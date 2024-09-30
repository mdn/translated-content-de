---
title: "VRPose: Position-Eigenschaft"
short-title: position
slug: Web/API/VRPose/position
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die schreibgeschützte **`position`**-Eigenschaft des [`VRPose`](/de/docs/Web/API/VRPose)-Interfaces gibt die Position des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitstempel als 3D-Vektor zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Das Koordinatensystem ist wie folgt:

- Positives X ist zur rechten Seite des Nutzers.
- Positives Y ist nach oben.
- Positives Z ist hinter dem Nutzer.

Positionen werden in Metern von einem Ursprungspunkt gemessen — dieser Punkt ist entweder die Position, an der der Sensor zuerst gelesen wurde, oder die Position des Sensors, an der [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose) zuletzt aufgerufen wurde.

> [!NOTE]
> Standardmäßig werden alle Positionen als Sitzplatzposition angegeben. Die Transformation dieses Punktes mit [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) — beispielsweise wenn Sie mit einem Raum-Display arbeiten — wandelt dies in eine stehende Position um.

## Wert

Ein {{jsxref("Float32Array")}}, oder null, wenn der VR-Sensor keine Positionsdaten bereitstellen kann.

> [!NOTE]
> User Agents können emulierte Positionswerte durch Techniken wie das Nackenmodell bereitstellen; wenn sie dies tun, sollten sie dennoch [`VRDisplayCapabilities.hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition) als false melden.

## Beispiele

Sehen Sie sich [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples) für Beispielcode an.

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie befindet sich nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verlassen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zum Portieren von WebVR auf WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
