---
title: "XRHitTestResult: createAnchor()-Methode"
short-title: createAnchor()
slug: Web/API/XRHitTestResult/createAnchor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createAnchor()`**-Methode des [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult)-Interfaces erstellt einen [`XRAnchor`](/de/docs/Web/API/XRAnchor) aus einem Treffertest-Ergebnis, das an ein reales Objekt angehängt ist.

## Syntax

```js-nolint
createAnchor()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`XRAnchor`](/de/docs/Web/API/XRAnchor)-Objekt aufgelöst wird.

## Beispiele

### Erstellen eines Ankers aus einem Treffertest-Ergebnis

Das folgende Beispiel beginnt mit einem [`XRHitTestResult`](/de/docs/Web/API/XRHitTestResult), das durch Aufrufen von [`XRFrame.getHitTestResults()`](/de/docs/Web/API/XRFrame/getHitTestResults) erhalten wurde. Nach dem Aufruf von `createAnchor()` wird das Promise mit einem [`XRAnchor`](/de/docs/Web/API/XRAnchor) aufgelöst, um ein virtuelles Objekt an diesem Ort zu befestigen.

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
