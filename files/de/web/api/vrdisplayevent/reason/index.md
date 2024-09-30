---
title: "VRDisplayEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/VRDisplayEvent/reason
l10n:
  sourceCommit: ce094c10e0b71ff594e013d459b9c29110a6442a
---

{{APIRef("WebVR API")}}{{Deprecated_Header}}{{Non-standard_Header}}

Die **`reason`** schreibgeschützte Eigenschaft der [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Schnittstelle gibt einen menschenlesbaren Grund an, warum das Ereignis ausgelöst wurde.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein String, der den Grund angibt, warum das Ereignis ausgelöst wurde. Die verfügbaren Gründe sind im [`VRDisplayEventReason`](https://w3c.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason)-Enum definiert und lauten wie folgt:

- `mounted` — Das [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass der Benutzer es aufgesetzt hat (oder es anderweitig aktiviert wurde).
- `navigation` — Die Seite wurde von einem Kontext aus aufgerufen, der es dieser Seite erlaubt, sofort mit der Präsentation zu beginnen, z. B. von einer anderen Seite, die bereits im VR-Präsentationsmodus war.
- `requested` — Der Benutzeragent hat angefragt, dass der VR-Präsentationsmodus gestartet wird. Dies ermöglicht es den Benutzeragenten, eine einheitliche Benutzeroberfläche zum Betreten von VR über verschiedene Seiten hinweg bereitzustellen.
- `unmounted` — Das [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass der Benutzer es abgenommen hat (oder es anderweitig in den Ruhemodus/Standby versetzt wurde).

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie wird nicht mehr als Standard weiterverfolgt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, sich auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) zu verlassen oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu nutzen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den [Leitfaden von Meta zur Portierung von WebVR zu WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
