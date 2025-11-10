---
title: "NDEFReadingEvent: message-Eigenschaft"
short-title: message
slug: Web/API/NDEFReadingEvent/message
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web NFC API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`message`**-Eigenschaft des [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Interfaces gibt ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt zurück, das die empfangene Nachricht enthält.

## Wert

Ein [`NDEFMessage`](/de/docs/Web/API/NDEFMessage)-Objekt.

## Beispiele

Dieses Beispiel zeigt, wie Sie eine praktische Funktion erstellen, die ein einziges Tag liest und dann das Abfragen stoppt, um durch die Reduzierung unnötiger Arbeiten die Batterielebensdauer zu verlängern. Das Beispiel könnte leicht erweitert werden, um nach einer bestimmten Anzahl von Millisekunden eine Zeitüberschreitung zu erreichen.

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
