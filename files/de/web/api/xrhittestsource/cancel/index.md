---
title: "XRHitTestSource: cancel() Methode"
short-title: cancel()
slug: Web/API/XRHitTestSource/cancel
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`cancel()`**-Methode der {{domxref("XRHitTestSource")}}-Schnittstelle meldet einen Hit-Test ab.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Vom Hit-Test abmelden

Die `cancel()`-Methode meldet eine Hit-Test-Quelle ab. Da das {{domxref("XRHitTestSource")}}-Objekt nicht mehr verwendet werden kann, können Sie es bereinigen und auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
hitTestSource.cancel();
hitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
