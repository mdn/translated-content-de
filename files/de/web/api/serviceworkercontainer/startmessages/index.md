---
title: "ServiceWorkerContainer: startMessages()-Methode"
short-title: startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`startMessages()`**-Methode des {{domxref("ServiceWorkerContainer")}}-Interfaces startet explizit den Nachrichtenfluss, der von einem Service Worker zu den von ihm kontrollierten Seiten gesendet wird (z.B. gesendet über {{domxref("Client.postMessage()")}}). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, sogar bevor der Inhalt der Seite vollständig geladen ist.

## Erklärung

Standardmäßig werden alle Nachrichten, die von einem Service Worker der Seite zur Seite gesendet werden (unter Verwendung von {{domxref("Client.postMessage()")}}), während des Ladens der Seite in die Warteschlange gestellt und werden erst dann versendet, wenn das HTML-Dokument der Seite geladen und geparst wurde (d.h. nachdem das {{domxref("Document/DOMContentLoaded_event", "DOMContentLoaded")}}-Ereignis eintritt). Es ist möglich, die Zustellung dieser Nachrichten früher zu starten, indem man `ServiceWorkerContainer.startMessages()` aufruft, zum Beispiel wenn Sie einen Nachrichten-Handler mit {{domxref("EventTarget.addEventListener()")}} aufgerufen haben, bevor die Seite fertig geladen ist, aber die Nachrichten sofort verarbeiten möchten.

> [!NOTE]
> Die Nachrichten werden automatisch gesendet, wenn der Handler direkt mit {{domxref("ServiceWorkerContainer.message_event", "onmessage")}} festgelegt wird. In diesem Fall benötigen Sie `startMessages()` nicht.

## Syntax

```js-nolint
startMessages()
```

### Parameter

Keine.

### Rückgabewert

`undefined`.

## Beispiele

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").then(() => {
    console.log("Service Worker Registered");
  });
}

// …

navigator.serviceWorker.addEventListener("message", (e) => {
  // …
});

navigator.serviceWorker.startMessages();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
