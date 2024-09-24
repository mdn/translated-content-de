---
title: "XRHitTestResult: createAnchor()-Methode"
short-title: createAnchor()
slug: Web/API/XRHitTestResult/createAnchor
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createAnchor()`**-Methode der {{domxref("XRHitTestResult")}} Schnittstelle erstellt ein {{domxref("XRAnchor")}} aus einem Trefferergebnis, das an ein reales Objekt angehängt ist.

## Syntax

```js-nolint
createAnchor()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("XRAnchor")}}-Objekt aufgelöst wird.

## Beispiele

### Erstellen eines Ankers aus einem Trefferergebnis

Das folgende Beispiel beginnt mit einem {{domxref("XRHitTestResult")}}, das durch Aufrufen von {{domxref("XRFrame.getHitTestResults()")}} abgerufen wurde. Nach dem Aufruf von `createAnchor()` wird das Promise mit einem {{domxref("XRAnchor")}} aufgelöst, um ein virtuelles Objekt an dieser Position zu befestigen.

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

- {{domxref("XRAnchor")}}
- {{domxref("XRFrame.createAnchor()")}}
