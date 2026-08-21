---
title: "VRDisplayEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/VRDisplayEvent/reason
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte **`reason`**-Eigenschaft des [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent)-Interfaces gibt einen menschenlesbaren Grund an, warum das Ereignis ausgelöst wurde.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt.

## Wert

Ein String, der den Grund darstellt, warum das Ereignis ausgelöst wurde. Die verfügbaren Gründe sind im [`VRDisplayEventReason`](https://w3c.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason)-Enum definiert und lauten wie folgt:

- `mounted` — Das [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass der Benutzer es aufgesetzt hat (oder es anderweitig aktiviert wurde).
- `navigation` — Die Seite wurde aus einem Kontext heraus aufgerufen, der es dieser Seite erlaubt, sofort mit der Präsentation zu beginnen, zum Beispiel von einer anderen Seite, die bereits im VR-Präsentationsmodus war.
- `requested` — Der Benutzeragent hat angefordert, dass der VR-Präsentationsmodus gestartet wird. Dies ermöglicht es Benutzeragenten, eine konsistente Benutzeroberfläche bereitzustellen, um VR über verschiedene Seiten hinweg zu betreten.
- `unmounted` — Das [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass der Benutzer es abgenommen hat (oder es in den Schlaf- oder Standby-Modus versetzt wurde).

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) ersetzt wurde. Sie steht nicht mehr in Aussicht, ein Standard zu werden.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, wird empfohlen, auf Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder ein [Polyfill](https://github.com/immersive-web/webxr-polyfill) zurückzugreifen, um WebXR-Anwendungen zu entwickeln, die in allen Browsern funktionieren. Lesen Sie den Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/horizon/documentation/web/port-vr-xr/) für weitere Informationen.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
