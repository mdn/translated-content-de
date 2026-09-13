---
title: "XRSession: requestHitTestSource()-Methode"
short-title: requestHitTestSource()
slug: Web/API/XRSession/requestHitTestSource
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestHitTestSource()`**-Methode des [`XRSession`](/de/docs/Web/API/XRSession)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt aufgelöst wird, das an [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) übergeben werden kann.

## Syntax

```js-nolint
requestHitTestSource(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen enthält, insbesondere:
    - `space`
      - : Der [`XRSpace`](/de/docs/Web/API/XRSpace), der von der Hit-Test-Quelle verfolgt wird.
    - `entityTypes` {{Optional_Inline}}
      - : Ein {{jsxref("Array")}}, das die Arten von Entitäten angibt, die zur Erstellung der Hit-Test-Quelle verwendet werden sollen. Wenn kein Entitätstyp angegeben ist, enthält das Array standardmäßig ein einziges Element mit dem Typ `plane`. Mögliche Typen:
        - `point`: Berechnet die Ergebnisse der Hit-Tests basierend auf charakteristischen Punkten.
        - `plane`: Berechnet die Ergebnisse der Hit-Tests basierend auf erkannten realen Ebenen.
        - `mesh`: Berechnet die Ergebnisse der Hit-Tests basierend auf erkannten Netzen.
    - `offsetRay` {{Optional_Inline}}
      - : Das [`XRRay`](/de/docs/Web/API/XRRay)-Objekt, das für die Durchführung des Hit-Tests verwendet wird. Wenn kein `XRRay`-Objekt bereitgestellt wurde, wird ein neues `XRRay`-Objekt ohne Parameter erstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt aufgelöst wird.

### Ausnahmen

Anstelle von echten Ausnahmen lehnt `requestHitTestSource()` das zurückgegebene Promise mit einem [`DOMException`](/de/docs/Web/API/DOMException) ab, insbesondere einer der folgenden:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `hit-test` kein aktiviertes Feature in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Sitzung bereits beendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine unzumutbare Anzahl von Anfragen vorliegt. Einige Benutzeragenten könnten die Nutzung aus Datenschutzgründen einschränken.

## Beispiele

### Anfordern einer Hit-Test-Quelle

Um eine Hit-Test-Quelle anzufordern, starten Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem aktivierten `hit-test`-Sitzungsfeature. Konfigurieren Sie anschließend die Hit-Test-Quelle und speichern Sie sie für die spätere Verwendung in der Frame-Schleife und rufen Sie [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) auf, um das Ergebnis zu erhalten.

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

- [`XRSession.requestHitTestSourceForTransientInput()`](/de/docs/Web/API/XRSession/requestHitTestSourceForTransientInput)
