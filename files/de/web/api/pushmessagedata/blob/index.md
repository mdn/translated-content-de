---
title: "PushMessageData: blob()-Methode"
short-title: blob()
slug: Web/API/PushMessageData/blob
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`blob()`**-Methode der [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Schnittstelle extrahiert Push-Daten als ein [`Blob`](/de/docs/Web/API/Blob)-Objekt.

## Syntax

```js-nolint
blob()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Blob`](/de/docs/Web/API/Blob).

## Beispiele

```js
self.addEventListener("push", (event) => {
  const blob = event.data.blob();

  // do something with your Blob
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
