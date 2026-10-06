---
title: VRDisplayEvent
slug: Web/API/VRDisplayEvent
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

Die Schnittstelle **`VRDisplayEvent`** der [WebVR API](/de/docs/Web/API/WebVR_API) stellt das Ereignisobjekt für WebVR-bezogene Ereignisse dar (siehe die [Liste der WebVR-Fenstererweiterungen](/de/docs/Web/API/WebVR_API#window_events)).

> [!NOTE]
> Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

## Konstruktor

- [`VRDisplayEvent()`](/de/docs/Web/API/VRDisplayEvent/VRDisplayEvent) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Erstellt eine Instanz des Objekts `VRDisplayEvent`.

## Instanzeigenschaften

_`VRDisplayEvent` erbt außerdem Eigenschaften von seinem übergeordneten Objekt [`Event`](/de/docs/Web/API/Event)._

- [`VRDisplayEvent.display`](/de/docs/Web/API/VRDisplayEvent/display) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Das diesem Ereignis zugeordnete [`VRDisplay`](/de/docs/Web/API/VRDisplay).
- [`VRDisplayEvent.reason`](/de/docs/Web/API/VRDisplayEvent/reason) {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Ein für Menschen lesbarer Grund dafür, warum das Ereignis ausgelöst wurde.

## Beispiele

```js
window.addEventListener("vrdisplaypresentchange", (e) => {
  console.log(
    `Display ${e.display.displayId} presentation has changed. Reason given: ${e.reason}.`,
  );
});
```

## Spezifikationen

Diese Schnittstelle war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie im Leitfaden [Meta's Porting from WebVR to WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
