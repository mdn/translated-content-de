---
title: Background Synchronization API
slug: Web/API/Background_Synchronization_API
l10n:
  sourceCommit: dd84b3b089d199be3771d6afe01e068b19889e71
---

{{DefaultAPISidebar("Background Sync")}}{{Securecontext_Header}}{{AvailableInWorkers}}

Die **Background Synchronization API** ermöglicht es einer Webanwendung, Aufgaben zu verschieben, sodass diese in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ausgeführt werden können, sobald der Benutzer eine stabile Netzwerkverbindung hat.

## Konzepte und Nutzung

Die Background Synchronization API erlaubt es Webanwendungen, die Serversynchronisationsarbeit an ihren Service Worker zu übertragen, um sie zu einem späteren Zeitpunkt auszuführen, wenn das Gerät offline ist. Anwendungsfälle könnten das Versenden von Anfragen im Hintergrund umfassen, falls diese nicht gesendet werden konnten, während die Anwendung benutzt wurde.

Zum Beispiel könnte eine E-Mail-Client-Anwendung es ihren Benutzern ermöglichen, Nachrichten zu verfassen und zu senden, auch wenn das Gerät keine Netzwerkverbindung hat. Das Frontend der Anwendung registriert einfach eine Synchronisierungsanfrage, und der Service Worker wird benachrichtigt, wenn das Netzwerk wieder verfügbar ist und führt die Synchronisierung durch.

Das [`SyncManager`](/de/docs/Web/API/SyncManager)-Interface ist über [`ServiceWorkerRegistration.sync`](/de/docs/Web/API/ServiceWorkerRegistration/sync) verfügbar. Ein einzigartiger Tag-Bezeichner wird gesetzt, um das Synchronisierungsereignis zu "benennen", auf das dann im [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skript gehört werden kann. Sobald das Ereignis empfangen wird, können Sie jede verfügbare Funktionalität ausführen, wie zum Beispiel das Senden von Anfragen an den Server.

Da diese API auf Service Worker angewiesen ist, ist die durch diese API bereitgestellte Funktionalität nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- [`SyncManager`](/de/docs/Web/API/SyncManager) {{Experimental_Inline}}
  - : Registriert Aufgaben, die zu einem späteren Zeitpunkt mit Netzwerkanbindung in einem Service Worker ausgeführt werden sollen. Diese Aufgaben werden als _Hintergrundsynchronisierungsanfragen_ bezeichnet.
- [`SyncEvent`](/de/docs/Web/API/SyncEvent) {{Experimental_Inline}}
  - : Stellt ein Synchronisierungsereignis dar, das an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker auszuführen, sobald das Gerät eine Netzwerkverbindung hat.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) bieten einen Einstiegspunkt für das Einrichten von Hintergrundsynchronisierungen.

- [`ServiceWorkerRegistration.sync`](/de/docs/Web/API/ServiceWorkerRegistration/sync) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`SyncManager`](/de/docs/Web/API/SyncManager)-Schnittstelle zurück, um Aufgaben zu registrieren, die ausgeführt werden, sobald das Gerät eine Netzwerkverbindung hat.
- [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event) Ereignis
  - : Ein Ereignis-Handler, der immer dann ausgelöst wird, wenn ein [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)-Ereignis auftritt. Dies geschieht, sobald das Netzwerk verfügbar wird.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer Hintergrundsynchronisierung

Die folgende asynchrone Funktion registriert eine Hintergrundsynchronisierung aus einem Browsing-Kontext:

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

### Überprüfen einer Hintergrundsynchronisierung nach Tag

Dieser Code überprüft, ob eine Hintergrundsynchronisierungsaufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.sync.getTags().then((tags) => {
    if (tags.includes("sync-messages")) {
      console.log("Messages sync already requested");
    }
  });
});
```

### Lauschen auf eine Hintergrundsynchronisierung innerhalb eines Service Workers

Das folgende Beispiel zeigt, wie auf ein Hintergrundsynchronisierungsereignis im Service Worker reagiert werden kann.

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

- [Einführung in die Hintergrundsynchronisierung](https://developer.chrome.com/blog/background-sync/)
