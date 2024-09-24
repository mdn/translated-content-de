---
title: "XRLightProbe: reflectionchange-Ereignis"
short-title: reflectionchange
slug: Web/API/XRLightProbe/reflectionchange_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR **`reflectionchange`**-Ereignis wird jedes Mal ausgelöst, wenn sich die geschätzte Reflexions-Würfelkarte ändert. Dies geschieht in Reaktion auf Bewegungen durch verschiedene Lichtverhältnisse oder direkte Änderungen der Beleuchtung selbst. Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}} oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("reflectionchange", (event) => {});

onreflectionchange = (event) => {};
```

## Ereignistyp

{{domxref("Event")}}.

## Beispiele

### Verwendung des `reflectionchange`-Ereignisses

Jedes Mal, wenn das `reflectionchange`-Ereignis bei einer Lichtsonde ausgelöst wird, können Sie eine aktualisierte Würfelkarte abrufen, indem Sie {{domxref("XRWebGLBinding.getReflectionCubeMap()")}} aufrufen. Dies ist weniger aufwendig, als Beleuchtungsinformationen mit jedem {{domxref("XRFrame")}} abzurufen.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

### Die `onreflectionchange`-Ereignis-Handler-Eigenschaft

Das `reflectionchange`-Ereignis ist auch über die `onreflectionchange`-Ereignis-Handler-Eigenschaft verfügbar.

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

- {{domxref("EventTarget.addEventListener", "addEventListener()")}}
