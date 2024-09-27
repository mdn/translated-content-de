---
title: Web Periodic Background Synchronization API
slug: Web/API/Web_Periodic_Background_Synchronization_API
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Web Periodic Background Synchronization API** bietet eine Möglichkeit, Aufgaben zu registrieren, die zu regelmäßigen Abständen mit Netzwerkverbindung in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) ausgeführt werden sollen. Diese Aufgaben werden als periodische Hintergrund-Synchronisierungsanforderungen bezeichnet.

## Konzepte und Verwendung

Die Periodic Background Sync API ermöglicht es Webanwendungen, ihren Service Worker darauf hinzuweisen, in regelmäßigen Zeitabständen Aktualisierungen vorzunehmen. Anwendungen können beispielsweise das Abrufen der neuesten Inhalte während einer WLAN-Verbindung oder Hintergrundaktualisierungen einer Anwendung umfassen.

Das minimale Zeitintervall wird festgelegt, wenn die API aufgerufen wird; der Benutzeragent könnte jedoch auch andere Faktoren berücksichtigen, die beeinflussen, wann der Service Worker das Ereignis erhält. Zum Beispiel vorheriges Website-Engagement oder Verbindung zu einem bekannten Netzwerk.

Die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle ist über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) verfügbar. Ein eindeutiger Tag-Identifikator wird gesetzt, um das Sync-Ereignis zu 'benennen', das innerhalb des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skripts abgehört werden kann. Sobald das Ereignis empfangen wird, können Sie alle verfügbaren Funktionen ausführen, wie z.B. Caches aktualisieren oder neue Ressourcen abrufen.

Da diese API auf Service Worker angewiesen ist, stehen die Funktionen dieser API nur in einem sicheren Kontext zur Verfügung.

## Schnittstellen

- [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) {{Experimental_Inline}}
  - : Registriert Aufgaben, die in einem Service Worker zu regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen. Diese Aufgaben werden als periodische Hintergrund-Synchronisierungsanforderungen bezeichnet.
- [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) {{Experimental_Inline}}
  - : Stellt ein Synchronisierungsereignis dar, das an den [globalen Geltungsbereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) gesendet wird. Es bietet eine Möglichkeit, Aufgaben mit Netzwerkverbindung im Service Worker auszuführen.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) sind in der Periodic Background Sync-Spezifikation festgelegt, um einen Einstiegspunkt für die Nutzung der Periodic Background Sync zu bieten.

- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz zur [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle zurück, um Aufgaben zu registrieren, die in bestimmten Intervallen ausgeführt werden sollen.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) Ereignis {{Experimental_Inline}}
  - : Tritt in den regulären Intervallen auf, die beim Registrieren eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt wurden.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer Periodischen Hintergrundsynchronisierung

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisierung mit einem minimalen Intervall von einem Tag aus einem Browsing-Kontext:

```js
async function registerPeriodicNewsCheck() {
  const registration = await navigator.serviceWorker.ready;
  try {
    await registration.periodicSync.register("get-latest-news", {
      minInterval: 24 * 60 * 60 * 1000,
    });
  } catch {
    console.log("Periodic Sync could not be registered!");
  }
}
```

### Überprüfen einer Periodischen Hintergrundsynchronisierung nach Tag

Dieser Code überprüft, ob eine Periodische Hintergrundsynchronisierungsaufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer Periodischen Hintergrundsynchronisierungsaufgabe

Der folgende Code entfernt eine Periodische Hintergrundsynchronisierungsaufgabe, um zu verhindern, dass Artikel im Hintergrund synchronisiert werden.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

### Abhören eines periodischen Synchronisationsereignisses innerhalb eines Service Workers

Das folgende Beispiel zeigt, wie auf ein periodisches Synchronisationsereignis im Service Worker reagiert wird.

```js
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "get-latest-news") {
    event.waitUntil(fetchAndCacheLatestNews());
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Ein Artikel zur Verwendung von Periodic Background Sync](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App für Periodic Background Sync](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
