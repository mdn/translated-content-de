---
title: "XRSession: Methode requestHitTestSourceForTransientInput()"
short-title: requestHitTestSourceForTransientInput()
slug: Web/API/XRSession/requestHitTestSourceForTransientInput
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestHitTestSourceForTransientInput()`**-Methode des
{{domxref("XRSession")}}-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("XRTransientInputHitTestSource")}}-Objekt aufgelöst wird, das an {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} übergeben werden kann.

## Syntax

```js-nolint
requestHitTestSourceForTransientInput(options)
```

### Parameter

- `options`
  - : Ein Objekt, das Konfigurationsoptionen enthält, insbesondere:
    - `profile`
      - : Ein String, der den [Eingabeprofilnamen](/de/docs/Web/API/XRInputSource) der vorübergehenden Eingabequelle angibt, die zur Berechnung der Treffertestergebnisse verwendet wird.
    - `entityTypes` {{Optional_Inline}}
      - : Ein {{jsxref("Array")}}, das die Arten von Entitäten spezifiziert, die zur Erstellung der Treffertestquelle verwendet werden sollen. Wenn kein Entitätstyp angegeben ist, wird das Array standardmäßig auf ein Einzelnes Element mit dem Typ `plane` gesetzt. Mögliche Typen:
        - `point`: Berechnet Treffertestergebnisse basierend auf erkannten charakteristischen Punkten.
        - `plane`: Berechnet Treffertestergebnisse basierend auf erkannten realen Ebenen.
        - `mesh`: Berechnet Treffertestergebnisse basierend auf erkannten Meshes.
    - `offsetRay` {{Optional_Inline}}
      - : Das {{domxref("XRRay")}}-Objekt, das verwendet wird, um den Treffertest durchzuführen. Wenn kein `XRRay`-Objekt bereitgestellt wurde, wird ein neues `XRRay`-Objekt ohne Parameter erstellt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("XRTransientInputHitTestSource")}}-Objekt aufgelöst wird.

### Ausnahmen

Anstatt echte Ausnahmen zu werfen, lehnt `requestHitTestSourceForTransientInput()` das
zurückgegebene Versprechen mit einem {{domxref("DOMException")}} ab, insbesondere einer der folgenden:

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `hit-test` keine aktivierte Funktion in {{domxref("XRSystem.requestSession()")}} ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die Sitzung bereits beendet ist.
- `NotAllowedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn es eine unvernünftige Anzahl von Anfragen gibt. Einige Benutzeragenten könnten die Nutzung aus Datenschutzgründen einschränken.

## Beispiele

### Anfordern einer vorübergehenden Treffertestquelle

Um eine Treffertestquelle anzufordern, starten Sie eine {{domxref("XRSession")}} mit der aktivierten `hit-test`-Sitzungsfunktion. Konfigurieren Sie als nächstes die Treffertestquelle und speichern Sie sie für die spätere Verwendung in der Frame-Schleife, und rufen Sie {{domxref("XRFrame.getHitTestResultsForTransientInput()")}} auf, um das Ergebnis zu erhalten.

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

  // Dinge mit den vorübergehenden Treffertestergebnissen tun
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRSession.requestHitTestSource()")}}
