---
title: "XRSession: Methode requestHitTestSource()"
short-title: requestHitTestSource()
slug: Web/API/XRSession/requestHitTestSource
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestHitTestSource()`** Methode des {{domxref("XRSession")}} Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("XRHitTestSource")}} Objekt aufgelöst wird, das an {{domxref("XRFrame.getHitTestResults()")}} übergeben werden kann.

## Syntax

```js-nolint
requestHitTestSource(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen enthält, insbesondere:
    - `space`
      - : Der {{domxref("XRSpace")}}, der von der Hit-Test-Quelle verfolgt wird.
    - `entityTypes` {{Optional_Inline}}
      - : Ein {{jsxref("Array")}}, das die Arten von Entitäten angibt, die für die Erstellung der Hit-Test-Quelle verwendet werden sollen. Wenn kein Entitätstyp angegeben ist, enthält das Array standardmäßig ein einziges Element vom Typ `plane`. Mögliche Typen:
        - `point`: Berechnen Sie Hit-Test-Ergebnisse basierend auf charakteristischen Punkten.
        - `plane`: Berechnen Sie Hit-Test-Ergebnisse basierend auf erkannten realen Ebenen.
        - `mesh`: Berechnen Sie Hit-Test-Ergebnisse basierend auf erkannten Netzen.
    - `offsetRay` {{Optional_Inline}}
      - : Das {{domxref("XRRay")}} Objekt, das verwendet wird, um den Hit-Test durchzuführen. Wenn kein `XRRay` Objekt bereitgestellt wurde, wird ein neues `XRRay` Objekt ohne Parameter erstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("XRHitTestSource")}} Objekt aufgelöst wird.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, lehnt `requestHitTestSource()` das zurückgegebene Promise mit einem {{domxref("DOMException")}} ab, insbesondere einer der folgenden:

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `hit-test` kein aktiviertes Feature in {{domxref("XRSystem.requestSession()")}} ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Sitzung bereits beendet wurde.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es eine unzumutbare Menge an Anfragen gibt. Einige Benutzeragenten könnten die Nutzung aus Datenschutzgründen einschränken.

## Beispiele

### Anfordern einer Hit-Test-Quelle

Um eine Hit-Test-Quelle anzufordern, starten Sie eine {{domxref("XRSession")}} mit dem aktivierten `hit-test`-Sitzungsmerkmal. Konfigurieren Sie anschließend die Hit-Test-Quelle und speichern Sie sie für die spätere Verwendung in der Frame-Schleife, und rufen Sie {{domxref("XRFrame.getHitTestResults()")}} auf, um das Ergebnis zu erhalten.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let hitTestSource = null;

xrSession
  .requestHitTestSource({
    space: viewerSpace, // obtained from xrSession.requestReferenceSpace("viewer");
    offsetRay: new XRRay({ y: 0.5 }),
  })
  .then((viewerHitTestSource) => {
    hitTestSource = viewerHitTestSource;
  });

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResults(hitTestSource);

  // do things with the hit test results
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRSession.requestHitTestSourceForTransientInput()")}}
