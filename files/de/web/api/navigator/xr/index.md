---
title: "Navigator: xr-Eigenschaft"
short-title: xr
slug: Web/API/Navigator/xr
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte **`xr`**-Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurück, das verwendet werden kann, um auf die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zuzugreifen.

## Wert

Das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt, das verwendet wird, um mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) im aktuellen Kontext zu interagieren. Dies kann verwendet werden, um dem Benutzer erweiterte und/oder virtuelle Realität zu präsentieren.

## Beispiele

Jedes [`Window`](/de/docs/Web/API/Window) hat seine eigene Instanz von [`Navigator`](/de/docs/Web/API/Navigator), die als [`window.navigator`](/de/docs/Web/API/Window/navigator) oder als [`navigator`](/de/docs/Web/API/Window/navigator) aufgerufen werden kann. Gleichzeitig wird eine neue [`XRSystem`](/de/docs/Web/API/XRSystem)-Instanz erstellt und an die `navigator`-Instanz als `navigator.xr` angehängt. Wenn die `xr`-Eigenschaft existiert, können Sie sie verwenden, um auf die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zuzugreifen.

Um festzustellen, ob WebXR verfügbar ist, können Sie etwas wie folgt tun:

```js
if ("xr" in window.navigator) {
  /* WebXR can be used! */
} else {
  /* WebXR isn't available */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL API](/de/docs/Web/API/WebGL_API): 2D- und 3D-beschleunigte Grafiken für das Web
- [Canvas API](/de/docs/Web/API/Canvas_API): 2D-Grafik-API
