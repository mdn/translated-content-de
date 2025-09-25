---
title: "NDEFReadingEvent: serialNumber Eigenschaft"
short-title: serialNumber
slug: Web/API/NDEFReadingEvent/serialNumber
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("Web NFC API")}}{{securecontext_header}}{{SeeCompatTable}}

Die **`serialNumber`**-Eigenschaft der [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Schnittstelle gibt die Seriennummer des Geräts zurück, die zur Kollisionsvermeidung und Identifikation verwendet wird, oder einen leeren String, wenn keine Seriennummer verfügbar ist.

## Wert

Ein String, der die Seriennummer des Geräts enthält.

## Beispiele

Dieses Beispiel zeigt, wie eine praktische Funktion erstellt wird, die ein einziges Tag liest und dann das Abfragen stoppt, um Energie zu sparen, indem unnötige Arbeit vermieden wird. Das Beispiel könnte leicht erweitert werden, um nach einer bestimmten Anzahl von Millisekunden abzubrechen.

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
