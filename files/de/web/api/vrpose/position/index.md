---
title: "VRPose: position-Eigenschaft"
short-title: position
slug: Web/API/VRPose/position
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`position`** der Schnittstelle [`VRPose`](/de/docs/Web/API/VRPose) gibt die Position des [`VRDisplay`](/de/docs/Web/API/VRDisplay) zum aktuellen Zeitstempel als 3D-Vektor zurück.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Das Koordinatensystem ist wie folgt definiert:

- Die positive X-Richtung zeigt nach rechts aus Sicht des Benutzers.
- Die positive Y-Richtung zeigt nach oben.
- Die positive Z-Richtung zeigt hinter den Benutzer.

Positionen werden in Metern relativ zu einem Ursprungspunkt gemessen. Dieser Punkt ist entweder die Position, an der der Sensor erstmals ausgelesen wurde, oder die Position des Sensors zum Zeitpunkt des letzten Aufrufs von [`VRDisplay.resetPose()`](/de/docs/Web/API/VRDisplay/resetPose).

> [!NOTE]
> Standardmäßig werden alle Positionen als Position im Sitzen angegeben. Wenn Sie beispielsweise mit einem raumfüllenden Display arbeiten, können Sie diesen Punkt mit [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform) in eine Position im Stehen umwandeln.

## Wert

Ein {{jsxref("Float32Array")}} oder `null`, wenn der VR-Sensor keine Positionsdaten liefern kann.

> [!NOTE]
> User Agents können emulierte Positionswerte mithilfe von Techniken wie der Nackenmodellierung bereitstellen. In diesem Fall sollten sie [`VRDisplayCapabilities.hasPosition`](/de/docs/Web/API/VRDisplayCapabilities/hasPosition) dennoch als `false` melden.

## Beispiele

Beispielcode finden Sie unter [`VRDisplay.getFrameData()`](/de/docs/Web/API/VRDisplay/getFrameData#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder auf einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen. Weitere Informationen finden Sie in [Metas Leitfaden zur Portierung von WebVR auf WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
