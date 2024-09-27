---
title: "ServiceWorkerContainer: startMessages()-Methode"
short-title: startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`startMessages()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces startet explizit den Fluss von Nachrichten, die von einem Service Worker an die von ihm kontrollierten Seiten gesendet werden (z. B. gesendet über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, noch bevor der Inhalt dieser Seite vollständig geladen ist.

## Erläuterung

Standardmäßig werden alle Nachrichten, die von einem Service Worker einer Seite an die Seite gesendet werden (mittels [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)), während des Ladeprozesses der Seite in eine Warteschlange gestellt und erst verarbeitet, wenn das HTML-Dokument der Seite geladen und geparst wurde (d.h. nach dem Auslösen des [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignisses). Es ist möglich, diese Nachrichten früher zu verarbeiten, indem `ServiceWorkerContainer.startMessages()` aufgerufen wird, z. B. wenn Sie einen Nachrichten-Handler mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) vor dem Abschluss des Seitenladevorgangs aufgerufen haben, aber die Nachrichten sofort verarbeiten möchten.

> [!NOTE]
> Die Nachrichten beginnen automatisch gesendet zu werden, wenn Sie den Handler direkt über [`onmessage`](/de/docs/Web/API/ServiceWorkerContainer/message_event) setzen. In diesem Fall benötigen Sie `startMessages()` nicht.

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
