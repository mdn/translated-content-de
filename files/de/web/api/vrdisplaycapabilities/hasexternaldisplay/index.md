---
title: "VRDisplayCapabilities: hasExternalDisplay-Eigenschaft"
short-title: hasExternalDisplay
slug: Web/API/VRDisplayCapabilities/hasExternalDisplay
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

{{APIRef("WebVR API")}}{{Non-standard_Header}}

> [!NOTE]
> Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/). Sie wurde durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst.

Die schreibgeschützte Eigenschaft **`hasExternalDisplay`** der Schnittstelle [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities) gibt `true` zurück, wenn das VR-Display vom primären Display des Geräts getrennt ist.

> [!NOTE]
> Wenn die Darstellung von VR-Inhalten andere Inhalte auf dem Gerät verdecken würde, gibt diese Eigenschaft `false` zurück. In diesem Fall sollte die Anwendung weder versuchen, VR-Inhalte auf einem anderen Display zu spiegeln, noch die Nicht-VR-Benutzeroberfläche aktualisieren, da diese Inhalte nicht sichtbar wären.

## Wert

Ein boolescher Wert.

## Beispiele

Beispielcode finden Sie unter [`VRDisplayCapabilities`](/de/docs/Web/API/VRDisplayCapabilities#examples).

## Spezifikationen

Diese Eigenschaft war Teil der alten [WebVR API](https://immersive-web.github.io/webvr/spec/1.1/), die durch die [WebXR Device API](https://immersive-web.github.io/webxr/) abgelöst wurde. Sie wird nicht mehr als Standard weiterentwickelt.

Bis alle Browser die neuen [WebXR APIs](/de/docs/Web/API/WebXR_Device_API/Fundamentals) implementiert haben, empfiehlt es sich, für die Entwicklung browserübergreifend funktionierender WebXR-Anwendungen Frameworks wie [A-Frame](https://aframe.io/), [Babylon.js](https://www.babylonjs.com/) oder [Three.js](https://threejs.org/) oder einen [Polyfill](https://github.com/immersive-web/webxr-polyfill) zu verwenden. Weitere Informationen finden Sie in [Metas Leitfaden zur Migration von WebVR zu WebXR](https://developers.meta.com/vr/documentation/web/port-vr-xr/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebVR API](/de/docs/Web/API/WebVR_API)
