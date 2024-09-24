---
title: "WritableStreamDefaultController: Eigenschaft signal"
short-title: signal
slug: Web/API/WritableStreamDefaultController/signal
l10n:
  sourceCommit: f6dc3de83f8ad9f074deddc5c41a547a81d503ec
---

{{APIRef("Streams")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`signal`** des {{domxref("WritableStreamDefaultController")}}-Interfaces gibt das mit dem Controller verknüpfte {{domxref("AbortSignal")}} zurück.

## Wert

Ein {{domxref("AbortSignal")}}-Objekt.

## Beispiele

### Abbrechen einer langen Schreiboperation

In diesem Beispiel simulieren wir eine langsame Operation mit einem lokalen Ziel: Wir tun nichts, wenn einige Daten geschrieben werden, außer eine Sekunde zu warten. Dies gibt uns genug Zeit, um die Methode `writer.abort()` aufzurufen und das Versprechen sofort abzulehnen.

```js
const writingStream = new WritableStream({
  // Definieren Sie das langsame lokale Ziel, um eine lange Operation zu simulieren
  write(chunk, controller) {
    return new Promise((resolve, reject) => {
      controller.signal.addEventListener("abort", () =>
        reject(controller.signal.reason),
      );

      // Tun Sie nichts, außer mit den Daten zu warten: Es ist ein lokales Ziel
      setTimeout(resolve, 1000); // Timeout, um eine langsame Operation zu simulieren
    });
  },
});

// Führen Sie den Schreibvorgang aus
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// Brechen Sie den Schreibvorgang manuell ab
await writer.abort("Manual abort!");
```

### Übertragung des `AbortSignal` auf die zugrunde liegende Schicht

In diesem Beispiel verwenden wir die [Fetch-API](/de/docs/Web/API/Fetch_API), um die Nachricht tatsächlich an einen Server zu senden. Die Fetch-API unterstützt auch {{domxref("AbortSignal")}}: Es ist möglich, dasselbe Objekt sowohl für die `fetch`-Methode als auch für den {{domxref("WritableStreamDefaultController")}} zu verwenden.

```js
const endpoint = "https://www.example.com/api"; // Gefälschte URL zu Beispielzwecken
const writingStream = new WritableStream({
  async write(chunk, controller) {
    // Schreiben Sie mit der Fetch-API an den Server
    const response = await fetch(endpoint, {
      signal: controller.signal, // Wir verwenden dasselbe Objekt für sowohl fetch als auch controller
      method: "POST",
      body: chunk,
    });
    await response.text();
  },
});

// Führen Sie den Schreibvorgang aus
const writer = writingStream.getWriter();
writer.write("Lorem ipsum test data");

// Brechen Sie den Schreibvorgang manuell ab
await writer.abort("Manual abort!");
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
