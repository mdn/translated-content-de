---
title: "PushMessageData: text() Methode"
short-title: text()
slug: Web/API/PushMessageData/text
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`text()`** Methode der {{domxref("PushMessageData")}}-Schnittstelle extrahiert die Push-Nachrichtendaten als einfachen Textstring.

## Syntax

```js-nolint
text()
```

### Parameter

Keine.

### Rückgabewert

Ein String.

## Beispiele

```js
self.addEventListener("push", (event) => {
  const textObj = event.data.text();

  // mach etwas mit Ihrem Text
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
