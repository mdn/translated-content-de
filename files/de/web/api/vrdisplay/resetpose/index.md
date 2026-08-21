---
title: "VRDisplay: resetPose()-Methode"
short-title: resetPose()
slug: Web/API/VRDisplay/resetPose
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die **`resetPose()`**-Methode der [`VRDisplay`](/de/docs/Web/API/VRDisplay)-Schnittstelle setzt die Pose für das `VRDisplay` zurück, indem sie die aktuelle [`VRPose.position`](/de/docs/Web/API/VRPose/position) und [`VRPose.orientation`](/de/docs/Web/API/VRPose/orientation) als "Ursprungs-/Nullwerte" betrachtet.

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Nachdem `resetPost()` aufgerufen wurde, werden zukünftige Posen, die von [`VRDisplay.getPose()`](/de/docs/Web/API/VRDisplay/getPose)/[`VRDisplay.getImmediatePose()`](/de/docs/Web/API/VRDisplay/getImmediatePose) zurückgegeben werden, Positionen im Verhältnis zur Position des `VRDisplay` beschreiben, als `resetPose()` zuletzt aufgerufen wurde. Die Ausrichtung des Displays beim letzten Aufruf von `resetPose()` wird als Vorwärtsorientierung behandelt.

Der gemeldete Roll und Pitch des VRDisplay ändern sich nicht, wenn `resetPose()` aufgerufen wird, da sie relativ zur Schwerkraft sind. Das Aufrufen von `resetPose()` kann die [`VRStageParameters.sittingToStandingTransform`](/de/docs/Web/API/VRStageParameters/sittingToStandingTransform)-Matrix ändern.

## Syntax

```js-nolint
resetPose()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

```js
// Assuming vrDisplay already contains a VRDisplay object,
// and we have a <button> referenced inside btn
btn.addEventListener("click", () => {
  vrDisplay.resetPose();
  console.log("Current pose set as origin/center");
});
```

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Anleitung zum Portieren von WebVR nach WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
