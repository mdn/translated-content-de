---
title: "XRLightProbe: reflectionchange-Ereignis"
short-title: reflectionchange
slug: Web/API/XRLightProbe/reflectionchange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`reflectionchange`**-Ereignis wird jedes Mal ausgelöst, wenn sich die geschätzte Reflexions-Cube-Map ändert. Dies geschieht als Reaktion auf Bewegungen von Anwendern durch verschiedene Lichtverhältnisse oder auf direkte Änderungen der Beleuchtung selbst. Dieses Ereignis ist nicht abbrechbar.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("reflectionchange", (event) => {});

onreflectionchange = (event) => {};
```

## Ereignistyp

[`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `reflectionchange`-Ereignisses

Immer wenn das `reflectionchange`-Ereignis bei einer Lichtsonde ausgelöst wird, können Sie eine aktualisierte Cube-Map abrufen, indem Sie [`XRWebGLBinding.getReflectionCubeMap()`](/de/docs/Web/API/XRWebGLBinding/getReflectionCubeMap) aufrufen. Dies ist weniger aufwändig, als bei jedem [`XRFrame`](/de/docs/Web/API/XRFrame) Beleuchtungsinformationen abzurufen.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

### Die `onreflectionchange`-Ereignishandler-Eigenschaft

Das `reflectionchange`-Ereignis ist auch über die `onreflectionchange`-Ereignishandler-Eigenschaft verfügbar.

```js
lightProbe.onreflectionchange = (event) => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener)
