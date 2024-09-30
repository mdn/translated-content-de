---
title: "ServiceWorkerContainer: startMessages()-Methode"
short-title: startMessages()
slug: Web/API/ServiceWorkerContainer/startMessages
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`startMessages()`**-Methode des [`ServiceWorkerContainer`](/de/docs/Web/API/ServiceWorkerContainer)-Interfaces startet explizit den Fluss von Nachrichten, die von einem Service Worker an Seiten unter seiner Kontrolle gesendet werden (z.B. versendet über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann genutzt werden, um auf gesendete Nachrichten früher zu reagieren, sogar bevor die Inhalte der Seite vollständig geladen sind.

## Erläuterung

Standardmäßig werden alle Nachrichten, die von einem Service Worker einer Seite an die Seite gesendet werden (unter Verwendung von [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)), in eine Warteschlange gestellt, während die Seite lädt, und werden versendet, sobald das HTML-Dokument der Seite geladen und geparst ist (d.h. nachdem das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis ausgelöst wurde). Es ist möglich, das Versenden dieser Nachrichten früher zu starten, indem `ServiceWorkerContainer.startMessages()` aufgerufen wird, zum Beispiel, wenn Sie einen Nachrichten-Handler mit [`EventTarget.addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) aufgerufen haben, bevor die Seite vollständig geladen ist, aber sofort mit der Verarbeitung der Nachrichten beginnen möchten.

> [!NOTE]
> Die Nachrichten werden automatisch gesendet, wenn der Handler direkt mit [`onmessage`](/de/docs/Web/API/ServiceWorkerContainer/message_event) gesetzt wird. In diesem Fall benötigen Sie `startMessages()` nicht.

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
