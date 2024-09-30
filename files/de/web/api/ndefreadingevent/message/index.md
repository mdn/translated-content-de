---
title: "NDEFReadingEvent: message-Eigenschaft"
short-title: message
slug: Web/API/NDEFReadingEvent/message
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Die **`message`**-Eigenschaft der [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Schnittstelle gibt ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt zurück, das die empfangene Nachricht enthält.

## Wert

Ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt.

## Beispiele

Dieses Beispiel zeigt, wie eine praktische Funktion erstellt wird, die ein einzelnes Tag liest und dann die Abfrage stoppt, um die Akkulaufzeit zu verlängern, indem unnötige Arbeit reduziert wird. Das Beispiel könnte leicht erweitert werden, um nach einer bestimmten Anzahl von Millisekunden zu stoppen.

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
