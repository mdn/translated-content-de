---
title: "Navigator: xr-Eigenschaft"
short-title: xr
slug: Web/API/Navigator/xr
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte **`xr`**-Eigenschaft, die von der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle bereitgestellt wird, gibt ein [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt zurück, das zum Zugriff auf die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) verwendet werden kann.

## Wert

Das [`XRSystem`](/de/docs/Web/API/XRSystem)-Objekt, das verwendet wird, um mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) im aktuellen Kontext zu interagieren. Dies kann verwendet werden, um dem Benutzer erweiterte und/oder virtuelle Realität darzustellen.

## Beispiele

Jedes [`Window`](/de/docs/Web/API/Window) hat seine eigene Instanz von [`Navigator`](/de/docs/Web/API/Navigator), die als [`window.navigator`](/de/docs/Web/API/Window/navigator) oder als [`navigator`](/de/docs/Web/API/Window/navigator) zugänglich ist. Gleichzeitig wird auch eine neue Instanz von [`XRSystem`](/de/docs/Web/API/XRSystem) erstellt und an die `navigator`-Instanz als `navigator.xr` angehängt. Wenn die `xr`-Eigenschaft existiert, können Sie sie verwenden, um auf die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zuzugreifen.

Um festzustellen, ob WebXR verfügbar ist, können Sie Folgendes tun:

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
