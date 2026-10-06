---
title: "VRDisplayEvent: reason-Eigenschaft"
short-title: reason
slug: Web/API/VRDisplayEvent/reason
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die schreibgeschützte Eigenschaft **`reason`** der Schnittstelle [`VRDisplayEvent`](/de/docs/Web/API/VRDisplayEvent) gibt einen für Menschen lesbaren Grund dafür zurück, warum das Ereignis ausgelöst wurde.

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Wert

Ein String, der den Grund für das Auslösen des Ereignisses angibt. Die verfügbaren Gründe sind im Enum [`VRDisplayEventReason`](https://w3c.github.io/webvr/spec/1.1/#interface-vrdisplayeventreason) definiert:

- `mounted` — [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass die nutzende Person das Gerät aufgesetzt hat (oder dass es anderweitig aktiviert wurde).
- `navigation` — Die Seite wurde von einem Kontext aus aufgerufen, der es ihr ermöglicht, sofort mit der VR-Darstellung zu beginnen, etwa von einer anderen Website, die sich bereits im VR-Darstellungsmodus befand.
- `requested` — Der User-Agent hat angefordert, den VR-Darstellungsmodus zu starten. So können User-Agents eine einheitliche Benutzeroberfläche zum Aktivieren von VR auf verschiedenen Websites anbieten.
- `unmounted` — [`VRDisplay`](/de/docs/Web/API/VRDisplay) hat erkannt, dass die nutzende Person das Gerät abgenommen hat (oder dass es anderweitig in den Ruhe- oder Standby-Modus versetzt wurde).

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in Metas Leitfaden [Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
