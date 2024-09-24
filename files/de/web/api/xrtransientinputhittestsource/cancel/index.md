---
title: "XRTransientInputHitTestSource: cancel()-Methode"
short-title: cancel()
slug: Web/API/XRTransientInputHitTestSource/cancel
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`cancel()`**-Methode der Schnittstelle {{domxref("XRTransientInputHitTestSource")}} meldet einen transienten Eingabe-Hit-Test ab.

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

Die `cancel()`-Methode meldet eine transiente Eingabe-Hit-Test-Quelle ab. Da das {{domxref("XRTransientInputHitTestSource")}}-Objekt nicht mehr verwendet werden kann, können Sie es bereinigen und auf [`null`](/de/docs/Web/JavaScript/Reference/Operators/null) setzen.

```js
transientHitTestSource.cancel();
transientHitTestSource = null;
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
