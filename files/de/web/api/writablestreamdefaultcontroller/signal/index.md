---
title: "WritableStreamDefaultController: signal-Eigenschaft"
short-title: signal
slug: Web/API/WritableStreamDefaultController/signal
l10n:
  sourceCommit: f6dc3de83f8ad9f074deddc5c41a547a81d503ec
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte **`signal`**-Eigenschaft der [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController)-Schnittstelle gibt das mit dem Controller verknüpfte [`AbortSignal`](/de/docs/Web/API/AbortSignal) zurück.

## Wert

Ein [`AbortSignal`](/de/docs/Web/API/AbortSignal)-Objekt.

## Beispiele

### Abbrechen eines langen Schreibvorgangs

In diesem Beispiel simulieren wir einen langsamen Vorgang mit einem lokalen Sink: Wir tun nichts, wenn einige Daten geschrieben werden, außer eine Sekunde zu warten. Dies gibt uns genügend Zeit, die `writer.abort()`-Methode aufzurufen und das Versprechen sofort abzulehnen.

```js
const writingStream = new WritableStream({
  // Define the slow local sink to simulate a long operation
  write(chunk, controller) {
    return new Promise((resolve, reject) => {
      controller.signal.addEventListener("abort", () =>
        reject(controller.signal.reason),
      );

      // Do nothing but wait with the data: it is a local sink
      setTimeout(resolve, 1000); // Timeout to simulate a slow operation
    });
  },
});

// Perform the write
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// Abort the write manually
await writer.abort("Manual abort!");
```

### Übertragen des `AbortSignal` auf die darunterliegende Ebene

In diesem Beispiel verwenden wir die [Fetch API](/de/docs/Web/API/Fetch_API), um die Nachricht tatsächlich an einen Server zu senden. Die Fetch API unterstützt ebenfalls [`AbortSignal`](/de/docs/Web/API/AbortSignal): Es ist möglich, dasselbe Objekt sowohl für die `fetch`-Methode als auch den [`WritableStreamDefaultController`](/de/docs/Web/API/WritableStreamDefaultController) zu verwenden.

```js
const endpoint = "https://www.example.com/api"; // Fake URL for example purpose
const writingStream = new WritableStream({
  async write(chunk, controller) {
    // Write to the server using the Fetch API
    const response = await fetch(endpoint, {
      signal: controller.signal, // We use the same object for both fetch and controller
      method: "POST",
      body: chunk,
    });
    await response.text();
  },
});

// Perform the write
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// Abort the write manually
await writer.abort("Manual abort!");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
