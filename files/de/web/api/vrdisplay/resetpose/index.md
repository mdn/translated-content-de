---
title: "VRDisplay: resetPose() Methode"
short-title: resetPose()
slug: Web/API/VRDisplay/resetPose
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`resetPose()`** Methode der {{domxref("VRDisplay")}} Schnittstelle setzt die Pose für das `VRDisplay` zurück und behandelt die aktuelle {{domxref("VRPose.position")}} und {{domxref("VRPose.orientation")}} als "Ursprungs-/Nullwerte".

> [!NOTE]
> Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

Nachdem `resetPost()` aufgerufen wurde, beschreiben zukünftige Posen, die von {{domxref("VRDisplay.getPose()")}}/{{domxref("VRDisplay.getImmediatePose()")}} zurückgegeben werden, Positionen relativ zu der Position des `VRDisplay`, als `resetPose()` zuletzt aufgerufen wurde, und behandeln die Gier des Displays, als `resetPose()` zuletzt aufgerufen wurde, als Vorwärtsausrichtung.

Die gemeldete Roll- und Nicklage des VRDisplay ändert sich nicht, wenn `resetPose()` aufgerufen wird, da sie relativ zur Schwerkraft sind. Das Aufrufen von `resetPose()` kann die {{domxref("VRStageParameters.sittingToStandingTransform")}}-Matrix verändern.

## Syntax

```js-nolint
resetPose()
```

### Parameter

Keine.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

```js
// Angenommen, vrDisplay enthält bereits ein VRDisplay-Objekt,
// und wir haben einen <button>, der in btn referenziert wird
btn.addEventListener("click", () => {
  vrDisplay.resetPose();
  console.log("Aktuelle Pose als Ursprung/Mitte gesetzt");
});
```

## Spezifikationen

Diese Methode war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie ist nicht mehr auf dem Weg, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/), oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu stützen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie [Metas Leitfaden zum Portieren von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
