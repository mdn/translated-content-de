---
title: Background Synchronization API
slug: Web/API/Background_Synchronization_API
l10n:
  sourceCommit: dd84b3b089d199be3771d6afe01e068b19889e71
---

{{DefaultAPISidebar("Background Sync")}}{{Securecontext_Header}}{{AvailableInWorkers}}

Die **Background Synchronization API** ermöglicht es einer Web-App, Aufgaben zu verschieben, sodass sie in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ausgeführt werden können, sobald der Benutzer eine stabile Netzwerkverbindung hat.

## Konzepte und Verwendung

Die Background Synchronization API erlaubt es Webanwendungen, Server-Synchronisationsarbeiten an ihren Service Worker zu verschieben, um sie zu einem späteren Zeitpunkt auszuführen, wenn das Gerät offline ist. Einsatzmöglichkeiten könnten das Senden von Anfragen im Hintergrund umfassen, wenn sie nicht gesendet werden konnten, während die Anwendung verwendet wurde.

Beispielsweise könnte eine E-Mail-Client-Anwendung ihren Benutzern ermöglichen, Nachrichten jederzeit zu verfassen und zu senden, auch wenn das Gerät keine Netzwerkverbindung hat. Die Frontend-Anwendung registriert einfach eine Synchronisationsanfrage und der Service Worker wird benachrichtigt, wenn das Netzwerk wieder vorhanden ist, und führt die Synchronisation durch.

Das [`SyncManager`](/de/docs/Web/API/SyncManager)-Interface ist über [`ServiceWorkerRegistration.sync`](/de/docs/Web/API/ServiceWorkerRegistration/sync) verfügbar. Ein eindeutiger Tag-Identifikator wird gesetzt, um das Synchronisationsereignis zu 'benennen', das dann im [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skript abgehört werden kann. Sobald das Ereignis empfangen wird, können Sie jede verfügbare Funktionalität ausführen, wie z.B. Anfragen an den Server zu senden.

Da diese API auf Service Workers beruht, ist die durch diese API bereitgestellte Funktionalität nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- [`SyncManager`](/de/docs/Web/API/SyncManager) {{Experimental_Inline}}
  - : Registriert Aufgaben, die zu einem späteren Zeitpunkt mit Netzwerkverbindung in einem Service Worker ausgeführt werden sollen. Diese Aufgaben werden als _Background Sync Requests_ bezeichnet.
- [`SyncEvent`](/de/docs/Web/API/SyncEvent) {{Experimental_Inline}}
  - : Stellt ein Synchronisationsereignis dar, das an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker auszuführen, sobald das Gerät Netzwerkverbindung hat.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) bieten einen Einstiegspunkt für die Einrichtung der Hintergrundsynchronisation.

- [`ServiceWorkerRegistration.sync`](/de/docs/Web/API/ServiceWorkerRegistration/sync) {{ReadOnlyInline}}
  - : Gibt eine Referenz zur [`SyncManager`](/de/docs/Web/API/SyncManager)-Schnittstelle zurück, um Aufgaben zu registrieren, die ausgeführt werden sollen, sobald das Gerät Netzwerkverbindung hat.
- [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) Event
  - : Ein Event-Handler, der immer dann ausgelöst wird, wenn ein [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)-Ereignis auftritt. Dies geschieht, sobald das Netzwerk verfügbar wird.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle zu verwenden ist.

### Anforderung einer Hintergrundsynchronisation

Die folgende asynchrone Funktion registriert eine Hintergrundsynchronisation aus einem Browsing-Kontext:

```js
async function syncMessagesLater() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.sync.register("sync-messages");
  } catch {
    console.log("Background Sync could not be registered!");
  }
}
```

### Überprüfung einer Hintergrundsynchronisation durch Tag

Dieser Code überprüft, ob eine Hintergrundsynchronisationsaufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes("sync-messages")) {
      console.log("Messages sync already requested");
    }
  });
});
```

### Abhören einer Hintergrundsynchronisation innerhalb eines Service Workers

Das folgende Beispiel zeigt, wie auf ein Hintergrundsynchronisationsereignis im Service Worker reagiert werden kann.

```js
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(sendOutboxMessages());
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in Background Sync](https://developer.chrome.com/blog/background-sync/)
