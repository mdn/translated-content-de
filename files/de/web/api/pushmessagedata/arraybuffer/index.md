---
title: "PushMessageData: arrayBuffer()-Methode"
short-title: arrayBuffer()
slug: Web/API/PushMessageData/arrayBuffer
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`arrayBuffer()`**-Methode der [`PushMessageData`](/de/docs/Web/API/PushMessageData) Schnittstelle extrahiert Push-Nachrichtendaten als ein {{jsxref("ArrayBuffer")}}-Objekt.

## Syntax

```js-nolint
arrayBuffer()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}.

## Beispiele

```js
self.addEventListener("push", (event) => {
  const buffer = event.data.arrayBuffer();

  // do something with your array buffer
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
