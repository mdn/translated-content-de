---
title: "Navigator: xr-Eigenschaft"
short-title: xr
slug: Web/API/Navigator/xr
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die schreibgeschützte **`xr`**-Eigenschaft, die durch das {{domxref("Navigator")}}-Interface bereitgestellt wird, gibt ein {{domxref("XRSystem")}}-Objekt zurück, das verwendet werden kann, um auf die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zuzugreifen.

## Wert

Das {{domxref("XRSystem")}}-Objekt, das verwendet wird, um mit der [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) im aktuellen Kontext zu interagieren. Dieses kann verwendet werden, um erweiterte und/oder virtuelle Realität dem Benutzer zu präsentieren.

## Beispiele

Jedes {{domxref("Window")}} hat seine eigene Instanz von {{domxref("Navigator")}}, die als {{domxref("Window.navigator","window.navigator")}} oder als {{domxref("Window.navigator", "navigator")}} zugänglich ist. Gleichzeitig wird eine neue {{domxref("XRSystem")}}-Instanz erstellt und an die `navigator`-Instanz als `navigator.xr` angehängt. Wenn die `xr`-Eigenschaft existiert, können Sie sie verwenden, um auf die [WebXR Device API](/de/docs/Web/API/WebXR_Device_API) zuzugreifen.

Um festzustellen, ob WebXR verfügbar ist, können Sie etwas wie dieses verwenden:

```js
if ("xr" in window.navigator) {
  /* WebXR kann verwendet werden! */
} else {
  /* WebXR ist nicht verfügbar */
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGL API](/de/docs/Web/API/WebGL_API): 2D- und 3D-beschleunigte Grafiken für das Web
- [Canvas API](/de/docs/Web/API/Canvas_API): 2D-Grafik-API
