---
title: Web Periodic Background Synchronization API
slug: Web/API/Web_Periodic_Background_Synchronization_API
l10n:
  sourceCommit: 0ca040b6a9cfd931558bd1d3a402707abddc1924
---

{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Periodic Background Synchronization API** bietet eine Möglichkeit, Aufgaben zu registrieren, die in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen. Diese Aufgaben werden als Anfragen für periodische Hintergrundsynchronisierung bezeichnet.

## Konzepte und Verwendung

Die Periodic Background Sync API ermöglicht es Webanwendungen, ihren Service Worker dazu zu veranlassen, in regelmäßigen Abständen Aktualisierungen vorzunehmen. Dies kann beinhalten, die neuesten Inhalte herunterzuladen, während ein Gerät mit Wi-Fi verbunden ist, oder Hintergrundaktualisierungen einer Anwendung zuzulassen.

Das minimale Zeitintervall wird festgelegt, wenn die API aufgerufen wird; der Benutzeragent kann jedoch auch andere Faktoren berücksichtigen, die beeinflussen, wann der Service Worker das Ereignis empfängt. Zum Beispiel das vorherige Engagement mit der Website oder die Verbindung zu einem bekannten Netzwerk.

Die Schnittstelle [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) ist über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) verfügbar. Ein eindeutiges Tag wird festgelegt, um das Synchronisierungsereignis zu "benennen", das dann im Skript des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) abgehört werden kann. Sobald das Ereignis eingetroffen ist, können Sie jede verfügbare Funktionalität ausführen, wie das Aktualisieren von Caches oder das Abrufen neuer Ressourcen.

Da diese API auf Service Worker angewiesen ist, ist die durch diese API bereitgestellte Funktionalität nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) {{Experimental_Inline}}
  - : Registriert Aufgaben, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen. Diese Aufgaben werden als Anfragen für periodische Hintergrundsynchronisierung bezeichnet.
- [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) {{Experimental_Inline}}
  - : Repräsentiert ein Synchronisierungsereignis, das an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker mit Netzwerkverbindung auszuführen.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) sind in der Spezifikation der Periodic Background Sync definiert, um einen Einstiegspunkt für die Nutzung der Periodic Background Sync bereitzustellen.

- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die Schnittstelle [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) zurück, um Aufgaben zu registrieren, die zu bestimmten Intervallen ausgeführt werden.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) Ereignis {{Experimental_Inline}}
  - : Tritt in regelmäßigen Abständen auf, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt wurden.

## Beispiele

Die folgenden Beispiele zeigen, wie man die Schnittstelle verwendet.

### Anfordern einer Periodischen Hintergrundsynchronisation

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisation in einem Mindestintervall von einem Tag aus einem Browsing-Kontext:

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

### Überprüfen einer Hintergrundsynchronisation nach Tag

Dieser Code überprüft, ob eine Aufgabe für die Periodische Hintergrundsynchronisation mit einem gegebenen Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer Aufgabe für Periodische Hintergrundsynchronisation

Der folgende Code entfernt eine Aufgabe für die Periodische Hintergrundsynchronisation, um das synchronisieren von Artikeln im Hintergrund zu stoppen.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

### Abhören einer Periodischen Hintergrundsynchronisation innerhalb eines Service Workers

Das folgende Beispiel zeigt, wie man auf ein periodisches Synchronisierungsereignis im Service Worker reagiert.

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

- [Ein Artikel über die Nutzung der Periodischen Hintergrundsynchronisation](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
