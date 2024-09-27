---
title: "XRSession: requestHitTestSourceForTransientInput()-Methode"
short-title: requestHitTestSourceForTransientInput()
slug: Web/API/XRSession/requestHitTestSourceForTransientInput
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestHitTestSourceForTransientInput()`**-Methode der [`XRSession`](/de/docs/Web/API/XRSession)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt erfüllt wird. Dieses Objekt kann an [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) übergeben werden.

## Syntax

```js-nolint
requestHitTestSourceForTransientInput(options)
```

### Parameter

- `options`
  - : Ein Objekt mit Konfigurationsoptionen, insbesondere:
    - `profile`
      - : Ein Zeichenfolgenwert, der den [Eingabedateiname](/de/docs/Web/API/XRInputSource) der transienten Eingabequelle angibt, die zur Berechnung der Hit-Test-Ergebnisse verwendet wird.
    - `entityTypes` {{Optional_Inline}}
      - : Ein {{jsxref("Array")}}, das die Typen von Entitäten angibt, die für die Erstellung der Hit-Test-Quelle verwendet werden. Wenn kein Entitätstyp angegeben wird, wird das Array standardmäßig auf ein Element mit dem Typ `plane` gesetzt. Mögliche Typen:
        - `point`: Berechnet Hit-Test-Ergebnisse basierend auf charakteristischen erkannten Punkten.
        - `plane`: Berechnet Hit-Test-Ergebnisse basierend auf erkannten realen Ebenen.
        - `mesh`: Berechnet Hit-Test-Ergebnisse basierend auf erkannten Meshes.
    - `offsetRay` {{Optional_Inline}}
      - : Das [`XRRay`](/de/docs/Web/API/XRRay)-Objekt, das verwendet wird, um den Hit-Test durchzuführen. Wenn kein `XRRay`-Objekt bereitgestellt wurde, wird ein neues `XRRay`-Objekt ohne Parameter erstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt erfüllt wird.

### Ausnahmen

Anstelle von echten Ausnahmen lehnt `requestHitTestSourceForTransientInput()` das zurückgegebene Promise mit einer [`DOMException`](/de/docs/Web/API/DOMException) ab, insbesondere einer der folgenden:

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn `hit-test` keine aktivierte Funktion in [`XRSystem.requestSession()`](/de/docs/Web/API/XRSystem/requestSession) ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn die Sitzung bereits beendet ist.
- `NotAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn es eine unzumutbare Menge an Anfragen gibt. Einige User Agents könnten die Nutzung aus Datenschutzgründen einschränken.

## Beispiele

### Anfordern einer transienten Hit-Test-Quelle

Um eine Hit-Test-Quelle anzufordern, starten Sie eine [`XRSession`](/de/docs/Web/API/XRSession) mit der aktivierten `hit-test`-Sitzungsfunktion. Konfigurieren Sie anschließend die Hit-Test-Quelle und speichern Sie sie zur späteren Verwendung in der Frame-Schleife. Rufen Sie [`XRFrame.getHitTestResultsForTransientInput()`](/de/docs/Web/API/XRFrame/getHitTestResultsForTransientInput) auf, um das Ergebnis zu erhalten.

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
