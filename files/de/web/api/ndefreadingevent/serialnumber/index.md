---
title: "NDEFReadingEvent: serialNumber-Eigenschaft"
short-title: serialNumber
slug: Web/API/NDEFReadingEvent/serialNumber
l10n:
  sourceCommit: 62cedc63226017e9e7d0718b6fea3529ca8dbf37
---

{{securecontext_header}}{{APIRef}}{{SeeCompatTable}}

Die **`serialNumber`**-Eigenschaft der [`NDEFReadingEvent`](/de/docs/Web/API/NDEFReadingEvent)-Schnittstelle gibt die Seriennummer des Geräts zurück, die zur Kollisionserkennung und Identifikation verwendet wird, oder einen leeren String, wenn keine Seriennummer verfügbar ist.

## Wert

Ein String, der die Seriennummer des Geräts enthält.

## Beispiele

Dieses Beispiel zeigt, wie man eine praktische Funktion erstellt, die ein einzelnes Tag liest und dann das Abfragen stoppt, um die Batterielebensdauer zu verlängern, indem unnötige Arbeit vermieden wird. Das Beispiel könnte leicht erweitert werden, um nach einer bestimmten Anzahl von Millisekunden zu stoppen.

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
