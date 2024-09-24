---
title: "PushMessageData: blob() Methode"
short-title: blob()
slug: Web/API/PushMessageData/blob
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`blob()`** Methode der {{domxref("PushMessageData")}} Schnittstelle extrahiert die Push-Nachrichtendaten als ein {{domxref("Blob")}} Objekt.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("Blob")}}.

## Beispiele

```js
self.addEventListener("push", (event) => {
  const blob = event.data.blob();

  // do something with your Blob
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
