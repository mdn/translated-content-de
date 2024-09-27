---
title: "XRTransientInputHitTestSource: cancel() Methode"
short-title: cancel()
slug: Web/API/XRTransientInputHitTestSource/cancel
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`cancel()`** Methode der [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Schnittstelle meldet einen transienten Eingabe-Treffer-Test ab.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Abmeldung vom Treffer-Test

Die `cancel()` Methode meldet von einer transienten Eingabe-Treffer-Testquelle ab. Da das [`XRTransientInputHitTestSource`](/de/docs/Web/API/XRTransientInputHitTestSource)-Objekt nicht mehr verwendbar sein wird, können Sie aufräumen und es auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
transientHitTestSource.cancel();
transientHitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
