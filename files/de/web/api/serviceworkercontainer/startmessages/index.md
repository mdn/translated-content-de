---
title: "ServiceWorkerContainer: startMessages() Methode"
short-title: startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`startMessages()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces startet explizit den Fluss von Nachrichten, die von einem Service Worker an die von ihm kontrollierten Seiten gesendet werden (z. B. über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, noch bevor der Inhalt der Seite vollständig geladen ist.

## Erklärung

Standardmäßig werden alle Nachrichten, die von einem Seite kontrollierenden Service Worker an die Seite gesendet werden (verwendet [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)), während des Ladens der Seite in eine Warteschlange gestellt und werden ausgeliefert, nachdem das HTML-Dokument der Seite geladen und geparst worden ist (d.h. nachdem das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wird). Es ist möglich, diese Nachrichten früher zuzustellen, indem `ServiceWorkerContainer.startMessages()` aufgerufen wird, zum Beispiel wenn Sie einen Nachrichtenhandler mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen haben, bevor die Seite vollständig geladen ist, aber die Nachrichten sofort verarbeiten möchten.

> [!NOTE]
> Die Nachrichten beginnen automatisch gesendet zu werden, wenn der Handler direkt mit [`onmessage`](/de/docs/Web/API/ServiceWorkerContainer/message_event) gesetzt wird. In diesem Fall benötigen Sie `startMessages()` nicht.

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
