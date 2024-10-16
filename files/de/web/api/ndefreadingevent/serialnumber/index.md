---
title: "NDEFReadingEvent: serialNumber-Eigenschaft"
short-title: serialNumber
slug: Web/API/NDEFReadingEvent/serialNumber
l10n:
  sourceCommit: d47348199a379f68bea876a403eb510628ec4ccb
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Die **`serialNumber`**-Eigenschaft der [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Schnittstelle gibt die Seriennummer des Geräts zurück, die zur Kollisionsvermeidung und Identifikation verwendet wird, oder einen leeren String, wenn keine Seriennummer verfügbar ist.

## Wert

Ein String, der die Seriennummer des Geräts enthält.

## Beispiele

Dieses Beispiel zeigt, wie Sie eine praktische Funktion erstellen, die ein einzelnes Tag liest und dann das Abfragen stoppt, um die Batterielebensdauer zu verlängern, indem unnötige Arbeit vermieden wird. Das Beispiel könnte leicht erweitert werden, um nach einer bestimmten Anzahl von Millisekunden zu stoppen.

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
