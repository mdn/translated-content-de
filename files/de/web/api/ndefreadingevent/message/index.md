---
title: "NDEFReadingEvent: message-Eigenschaft"
short-title: message
slug: Web/API/NDEFReadingEvent/message
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Die **`message`**-Eigenschaft des [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Interfaces gibt ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt zurück, das die empfangene Nachricht enthält.

## Wert

Ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt.

## Beispiele

Dieses Beispiel zeigt, wie eine praktische Funktion erstellt wird, die ein einzelnes Tag liest und dann das Abfragen stoppt, um durch das Vermeiden unnötiger Arbeit Akkulaufzeit zu sparen. Das Beispiel könnte leicht erweitert werden, um nach einer bestimmten Anzahl von Millisekunden zu stoppen.

```js
const ndefReader = new NDEFReader();

function read() {
  return new Promise((resolve, reject) => {
    const controller = new AbortController();
    controller.signal.onabort = reject;
    ndefReader.addEventListener(
      "reading",
      (event) => {
        controller.abort();
        resolve(event);
      },
      { once: true },
    );
    ndefReader.scan({ signal: controller.signal }).catch((err) => reject(err));
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
