---
title: "NDEFReadingEvent: message-Eigenschaft"
short-title: message
slug: Web/API/NDEFReadingEvent/message
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Die **`message`**-Eigenschaft der {{domxref("NDEFReadingEvent")}}-Schnittstelle gibt ein {{DOMxRef("NDEFMessage")}}-Objekt zurück, das die empfangene Nachricht enthält.

## Wert

Ein {{domxref("NDEFMessage")}}-Objekt.

## Beispiele

Dieses Beispiel zeigt, wie Sie eine praktische Funktion erstellen, die ein einzelnes Tag liest und dann das Abfragen stoppt, um Batterieleistung zu sparen, indem unnötige Arbeit vermieden wird. Das Beispiel könnte leicht erweitert werden, um nach einer bestimmten Zeit in Millisekunden abzubrechen.

```js
const ndefReader = new NDEFReader();

function read() {
  return new Promise((resolve, reject) => {
    const ctlr = new AbortController();
    ctlr.signal.onabort = reject;
    ndefReader.addEventListener(
      "reading",
      (event) => {
        ctlr.abort();
        resolve(event);
      },
      { once: true },
    );
    ndefReader.scan({ signal: ctlr.signal }).catch((err) => reject(err));
  });
}

read().then(({ serialNumber }) => {
  console.log(serialNumber);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
