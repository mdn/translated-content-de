---
title: "XRSession: requestHitTestSourceForTransientInput()-Methode"
short-title: requestHitTestSourceForTransientInput()
slug: Web/API/XRSession/requestHitTestSourceForTransientInput
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestHitTestSourceForTransientInput()`**-Methode der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt aufgelöst wird, das an [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) übergeben werden kann.

## Syntax

```js-nolint
requestHitTestSourceForTransientInput(options)
```

### Parameter

- `options`
  - : Ein Objekt mit Konfigurationsoptionen, speziell:
    - `profile`
      - : Ein String, der den [Eingabeprofilnamen](/de/docs/Web/API/XRInputSource) der transienten Eingabequelle angibt, die zur Berechnung der Trefferergebnisse verwendet wird.
    - `entityTypes` {{Optional_Inline}}
      - : Ein {{jsxref("Array")}}, das die Typen von Entitäten spezifiziert, die zur Erstellung der Trefferquelle verwendet werden sollen. Wenn kein Entitätstyp angegeben ist, standardisiert das Array auf ein einzelnes Element mit dem Typ `plane`. Mögliche Typen:
        - `point`: Berechnen Sie Trefferergebnisse basierend auf charakteristischen Punkten, die erkannt wurden.
        - `plane`: Berechnen Sie Trefferergebnisse basierend auf realen Ebenen, die erkannt wurden.
        - `mesh`: Berechnen Sie Trefferergebnisse basierend auf erkannten Netzen.
    - `offsetRay` {{Optional_Inline}}
      - : Das [`XRRay`](/de/docs/Web/API/XRRay)-Objekt, das zur Durchführung des Treffers verwendet wird. Wenn kein `XRRay`-Objekt bereitgestellt wurde, wird ein neues `XRRay`-Objekt ohne Parameter konstruiert.

### Rückgabewert

Ein {{jsxref("Promise")}} das mit einem [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt aufgelöst wird.

### Ausnahmen

Statt echte Ausnahmen zu werfen, lehnt `requestHitTestSourceForTransientInput()` das zurückgegebene Promise mit einem [`DOMException`](/de/docs/Web/API/DOMException) ab, insbesondere einer der folgenden:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `hit-test` kein aktiviertes Feature in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Sitzung bereits beendet wurde.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine unangemessene Anzahl von Anfragen vorliegt. Einige Benutzeragenten könnten die Nutzung aus Datenschutzgründen einschränken.

## Beispiele

### Anfordern einer transienten Trefferquelle

Um eine Trefferquelle anzufordern, starten Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit dem aktivierten `hit-test`-Sitzungs-Feature. Konfigurieren Sie anschließend die Trefferquelle und speichern Sie sie für die spätere Verwendung in der Frameroutine und rufen Sie [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) auf, um das Ergebnis zu erhalten.

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
