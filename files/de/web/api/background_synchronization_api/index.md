---
title: API für Hintergrundsynchronisation
slug: Web/API/Background_Synchronization_API
l10n:
  sourceCommit: dd84b3b089d199be3771d6afe01e068b19889e71
---

{{DefaultAPISidebar("Background Sync")}}{{Securecontext_Header}}{{AvailableInWorkers}}

Die **Background Synchronization API** ermöglicht es einer Web-App, Aufgaben aufzuschieben, damit diese in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ausgeführt werden können, sobald der Benutzer eine stabile Netzwerkverbindung hat.

## Konzepte und Nutzung

Die Background Synchronization API erlaubt es Webanwendungen, die Serversynchronisation auf einen Service Worker zu verschieben, um sie zu einem späteren Zeitpunkt durchzuführen, wenn das Gerät offline ist. Mögliche Anwendungsfälle sind das Senden von Anfragen im Hintergrund, wenn sie nicht gesendet werden konnten, während die Anwendung genutzt wurde.

Ein Beispiel ist eine E-Mail-Client-Anwendung, die es den Nutzern ermöglichen könnte, Nachrichten jederzeit zu komponieren und zu senden, auch wenn das Gerät keine Netzwerkverbindung hat. Das Frontend der Anwendung registriert einfach eine Synchronisationsanfrage, und der Service Worker wird benachrichtigt, wenn das Netzwerk wieder verfügbar ist und übernimmt die Synchronisation.

Das {{domxref('SyncManager')}}-Interface ist über {{domxref('ServiceWorkerRegistration.sync')}} verfügbar. Eine eindeutige Tag-Kennung wird festgelegt, um das Synchronisationsereignis zu "benennen", das dann innerhalb des {{domxref('ServiceWorker')}}-Skripts abgehört werden kann. Sobald das Ereignis empfangen wird, kann jegliche verfügbare Funktionalität ausgeführt werden, wie das Senden von Anfragen an den Server.

Da diese API auf Service Workern basiert, ist die durch diese API bereitgestellte Funktionalität nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- {{domxref('SyncManager')}} {{Experimental_Inline}}
  - : Registriert Aufgaben, die zu einem späteren Zeitpunkt im Service Worker mit Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als _Background Sync Requests_ bezeichnet.
- {{domxref('SyncEvent')}} {{Experimental_Inline}}
  - : Stellt ein Synchronisationsereignis dar, das an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines {{domxref('ServiceWorker')}} gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker auszuführen, sobald das Gerät Netzwerkverbindung hat.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) bieten einen Einstiegspunkt für das Einrichten der Hintergrundsynchronisation.

- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das {{domxref("SyncManager")}}-Interface zurück, um Aufgaben zu registrieren, die ausgeführt werden sollen, sobald das Gerät Netzwerkverbindung hat.
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}-Ereignis
  - : Ein Ereignishandler, der immer dann ausgelöst wird, wenn ein {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}-Ereignis auftritt. Dies geschieht, sobald das Netzwerk verfügbar ist.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer Hintergrundsynchronisation

Die folgende asynchrone Funktion registriert eine Hintergrundsynchronisation aus einem Browsing-Kontext heraus:

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

### Überprüfung einer Hintergrundsynchronisation anhand des Tags

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

Das folgende Beispiel zeigt, wie auf ein Hintergrundsynchronisationsereignis im Service Worker reagiert wird.

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

- [Introducing Background Sync](https://developer.chrome.com/blog/background-sync/)
