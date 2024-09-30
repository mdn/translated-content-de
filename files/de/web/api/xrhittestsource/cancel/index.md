---
title: "XRHitTestSource: cancel()-Methode"
short-title: cancel()
slug: Web/API/XRHitTestSource/cancel
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`cancel()`**-Methode der [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Schnittstelle hebt die Anmeldung für einen Hit-Test auf.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Abmeldung vom Hit-Test

Die `cancel()`-Methode meldet sich von einer Hit-Test-Quelle ab. Da das [`XRHitTestSource`](/de/docs/Web/API/XRHitTestSource)-Objekt nicht mehr verwendet werden kann, können Sie aufräumen und es auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
