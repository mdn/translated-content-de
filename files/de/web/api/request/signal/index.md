---
title: "Anforderung: signal Eigenschaft"
short-title: signal
slug: Web/API/Request/signal
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("Fetch API")}}

Die schreibgeschützte **`signal`**-Eigenschaft der {{DOMxRef("Request")}}-Schnittstelle gibt das mit der Anforderung verknüpfte {{domxref("AbortSignal")}} zurück.

## Wert

Ein {{DOMxRef("AbortSignal")}} Objekt.

## Beispiele

```js
// Erstellen Sie einen neuen AbortController
const controller = new AbortController();

// Erstellen Sie eine Anforderung mit dem AbortSignal-Objekt dieses Controllers
const req = new Request("/", { signal: controller.signal });

// Fügen Sie einen Ereignishandler hinzu, der im Falle eines Abbruchs eine Nachricht protokolliert
req.signal.addEventListener("abort", () => {
  console.log("abort");
});

// Im Falle eines Abbruchs das AbortSignal-Derivat, falls vorhanden, protokollieren
fetch(req).catch(() => {
  if (signal.aborted) {
    if (signal.reason) {
      console.log(`Anforderung mit Grund abgebrochen: ${signal.reason}`);
    } else {
      console.log("Anforderung abgebrochen, aber kein Grund angegeben.");
    }
  } else {
    console.log("Anforderung nicht abgebrochen, aber abnormal beendet.");
  }
});

// Tatsächlich die Anforderung abbrechen
controller.abort();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
