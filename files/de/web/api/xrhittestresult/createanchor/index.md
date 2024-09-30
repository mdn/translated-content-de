---
title: "XRHitTestResult: Methode createAnchor()"
short-title: createAnchor()
slug: Web/API/XRHitTestResult/createAnchor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createAnchor()`**-Methode der [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Schnittstelle erstellt einen [`XRAnchor`](/de/docs/Web/API/XRAnchor) aus einem Treffergebnis, das einem realen Objekt zugeordnet ist.

## Syntax

```js-nolint
createAnchor()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekt aufgelöst wird.

## Beispiele

### Erstellen eines Anchors aus einem Treffergebnis

Das folgende Beispiel beginnt mit einem [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult), das durch Aufruf von [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) abgerufen wurde. Nach dem Aufruf von `createAnchor()` wird das Promise mit einem [`XRAnchor`](/de/docs/Web/API/XRAnchor) aufgelöst, um ein virtuelles Objekt an diesem Ort zu befestigen.

```js
hitTestResult.createAnchor().then(
  (anchor) => {
    // add anchored objects to the scene
  },
  (error) => {
    console.error(`Could not create anchor: ${error}`);
  },
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRAnchor`](/de/docs/Web/API/XRAnchor)
- [`XRFrame.createAnchor()`](/de/docs/Web/API/XRFrame/createAnchor)
