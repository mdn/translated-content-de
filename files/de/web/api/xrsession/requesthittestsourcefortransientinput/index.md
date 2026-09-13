---
title: "XRSession: requestHitTestSourceForTransientInput() Methode"
short-title: requestHitTestSourceForTransientInput()
slug: Web/API/XRSession/requestHitTestSourceForTransientInput
l10n:
  sourceCommit: f542ed344953b3312fc92150bba11536667e288a
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestHitTestSourceForTransientInput()`** Methode der [`XRSession`](/de/docs/Web/API/XRSession) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource) Objekt aufgelöst wird, das an [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) übergeben werden kann.

## Syntax

```js-nolint
requestHitTestSourceForTransientInput(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen enthält, insbesondere:
    - `profile`
      - : Ein String, der den [Eingabeprofilsnamen](/de/docs/Web/API/XRInputSource) der transienten Eingabequelle angibt, die zur Berechnung der Hit-Test-Ergebnisse verwendet wird.
    - `entityTypes` {{Optional_Inline}}
      - : Ein {{jsxref("Array")}}, das die Typen von Entitäten spezifiziert, die zur Erstellung der Hit-Test-Quelle verwendet werden sollen. Wenn kein Entitätstyp angegeben ist, wird das Array standardmäßig als ein einziges Element mit dem Typ `plane` festgelegt. Mögliche Typen:
        - `point`: Berechnet Hit-Test-Ergebnisse basierend auf erkannten charakteristischen Punkten.
        - `plane`: Berechnet Hit-Test-Ergebnisse basierend auf erkannten realen Ebenen.
        - `mesh`: Berechnet Hit-Test-Ergebnisse basierend auf erkannten Meshes.
    - `offsetRay` {{Optional_Inline}}
      - : Das [`XRRay`](/de/docs/Web/API/XRRay) Objekt, das verwendet wird, um den Hit-Test durchzuführen. Wenn kein `XRRay` Objekt bereitgestellt wurde, wird ein neues `XRRay` Objekt ohne Parameter konstruiert.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource) Objekt aufgelöst wird.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, weist `requestHitTestSourceForTransientInput()` das zurückgegebene Promise mit einem [`DOMException`](/de/docs/Web/API/DOMException) zurück, insbesondere mit einer der folgenden:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `hit-test` kein aktiviertes Feature in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Sitzung bereits beendet ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn es eine unzumutbare Anzahl von Anfragen gibt. Einige User Agents könnten die Nutzung aus Datenschutzgründen einschränken.

## Beispiele

### Anfordern einer transienten Hit-Test-Quelle

Um eine Hit-Test-Quelle anzufordern, starten Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem `hit-test` Sitzungsmerkmal aktiviert. Konfigurieren Sie anschließend die Hit-Test-Quelle und speichern Sie sie zur späteren Verwendung in der Frame-Schleife und rufen Sie [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) auf, um das Ergebnis zu erhalten.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["local", "hit-test"],
});

let transientHitTestSource = null;

xrSession
  .requestHitTestSourceForTransientInput({
    profile: "generic-touchscreen",
    offsetRay: new XRRay(),
  })
  .then((touchScreenHitTestSource) => {
    transientHitTestSource = touchScreenHitTestSource;
  });

// frame loop
function onXRFrame(time, xrFrame) {
  let hitTestResults = xrFrame.getHitTestResultsForTransientInput(
    transientHitTestSource,
  );

  // do things with the transient hit test results
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSession.requestHitTestSource()`](/de/docs/Web/API/XRSession/requestHitTestSource)
