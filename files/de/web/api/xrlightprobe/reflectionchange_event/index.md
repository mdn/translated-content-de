---
title: "XRLightProbe: reflectionchange-Ereignis"
short-title: reflectionchange
slug: Web/API/XRLightProbe/reflectionchange_event
l10n:
  sourceCommit: 92c5e81c587ffea6177431743106118984f1675d
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Das WebXR-Ereignis **`reflectionchange`** wird jedes Mal ausgelöst, wenn sich die geschätzte Reflection Cube Map ändert. Dies geschieht, wenn sich Benutzer durch Bereiche mit unterschiedlichen Lichtverhältnissen bewegen oder wenn sich die Beleuchtung selbst direkt ändert. Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("reflectionchange", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onreflectionchange = (event) => { }
```

## Ereignistyp

[`Event`](/de/docs/Web/API/Event).

## Beispiele

### Das Ereignis `reflectionchange` verwenden

Wenn das Ereignis `reflectionchange` auf einer Light Probe ausgelöst wird, können Sie durch Aufrufen von [`XRWebGLBinding.getReflectionCubeMap()`](/de/docs/Web/API/XRWebGLBinding/getReflectionCubeMap) eine aktualisierte Cube Map abrufen. Dies ist weniger aufwendig, als Beleuchtungsinformationen bei jedem [`XRFrame`](/de/docs/Web/API/XRFrame) abzurufen.

```js
const glBinding = new XRWebGLBinding(xrSession, gl);
const lightProbe = await xrSession.requestLightProbe();
let glCubeMap = glBinding.getReflectionCubeMap(lightProbe);

lightProbe.addEventListener("reflectionchange", () => {
  glCubeMap = glBinding.getReflectionCubeMap(lightProbe);
});
```

### Die Event-Handler-Eigenschaft `onreflectionchange`

Das Ereignis `reflectionchange` ist auch über die Event-Handler-Eigenschaft `onreflectionchange` verfügbar. Beachten Sie jedoch, dass dadurch andere mit `onreflectionchange` hinzugefügte Event-Listener ersetzt werden, sofern vorhanden.

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
