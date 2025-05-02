---
title: "XRLightProbe: reflectionchange-Event"
short-title: reflectionchange
slug: Web/API/XRLightProbe/reflectionchange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-**`reflectionchange`**-Event wird jedes Mal ausgelöst, wenn sich die geschätzte Reflexions-Würfelkarte ändert. Dies geschieht als Reaktion auf Bewegungen durch verschiedene Lichtbedingungen oder auf direkte Änderungen der Beleuchtung selbst. Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("reflectionchange", (event) => { })

onreflectionchange = (event) => { }
```

## Ereignistyp

[`Event`](/de/docs/Web/API/Event).

## Beispiele

### Verwendung des `reflectionchange`-Events

Jedes Mal, wenn das `reflectionchange`-Event bei einem Light Probe ausgelöst wird, können Sie eine aktualisierte Würfelkarte abrufen, indem Sie [`XRWebGLBinding.getReflectionCubeMap()`](/de/docs/Web/API/XRWebGLBinding/getReflectionCubeMap) aufrufen. Dies ist weniger kostspielig, als Beleuchtungsinformationen mit jedem [`XRFrame`](/de/docs/Web/API/XRFrame) abzurufen.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

### Die `onreflectionchange`-Ereignishandler-Eigenschaft

Das `reflectionchange`-Event ist auch über die `onreflectionchange`-Ereignishandler-Eigenschaft verfügbar.

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
