---
title: Web Periodic Background Synchronization API
slug: Web/API/Web_Periodic_Background_Synchronization_API
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Web Periodic Background Synchronization API** bietet eine Möglichkeit, Aufgaben zu registrieren, die in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) in regelmäßigen Abständen bei vorhandener Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als periodische Hintergrundsynchronisierungsanfragen bezeichnet.

## Konzepte und Verwendung

Die Periodic Background Sync API ermöglicht es Webanwendungen, ihren Service Worker darauf hinzuweisen, in regelmäßigen Abständen Aktualisierungen vorzunehmen. Mögliche Verwendungen umfassen das Abrufen der neuesten Inhalte, während ein Gerät mit Wi-Fi verbunden ist, oder Hintergrundaktualisierungen einer Anwendung zu ermöglichen.

Das Mindestzeitintervall wird festgelegt, wenn die API aufgerufen wird; der Benutzeragent kann jedoch auch andere Faktoren berücksichtigen, die beeinflussen, wann der Service Worker das Ereignis erhält. Beispielsweise kann vorheriges Engagement der Website oder eine Verbindung zu einem bekannten Netzwerk einen Einfluss haben.

Die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle ist über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) verfügbar. Ein eindeutiger Tag-Identifikator wird festgelegt, um das Synchronisierungsereignis zu "benennen", das dann im Skript des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) abgehört werden kann. Sobald das Ereignis empfangen wird, können Sie jede verfügbare Funktionalität ausführen, wie zum Beispiel das Aktualisieren von Caches oder das Abrufen neuer Ressourcen.

Da diese API auf Service Workern basiert, ist die von dieser API bereitgestellte Funktionalität nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) {{Experimental_Inline}}
  - : Registriert Aufgaben, die in einem Service Worker in regelmäßigen Abständen bei vorhandener Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als periodische Hintergrundsynchronisierungsanfragen bezeichnet.
- [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) {{Experimental_Inline}}
  - : Stellt ein Synchronisationsereignis dar, das an den [globalen Geltungsbereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [ServiceWorker](/de/docs/Web/API/Service_Worker_API) gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker mit Netzwerkverbindung auszuführen.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) sind in der Periodic Background Sync-Spezifikation angegeben, um einen Einstiegspunkt für die Nutzung der periodischen Hintergrundsynchronisierung bereitzustellen.

- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle zurück, um Aufgaben zu registrieren, die in bestimmten Intervallen ausgeführt werden sollen.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) Ereignis {{Experimental_Inline}}
  - : Tritt in regelmäßigen Abständen auf, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt wurden.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer periodischen Hintergrundsynchronisierung

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisierung in einem Mindestintervall von einem Tag aus einem Browsing-Kontext:

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

### Überprüfen einer periodischen Hintergrundsynchronisierung nach Tag

Dieser Code überprüft, ob eine periodische Hintergrundsynchronisierungsaufgabe mit einem gegebenen Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer periodischen Hintergrundsynchronisierungsaufgabe

Der folgende Code entfernt eine periodische Hintergrundsynchronisierungsaufgabe, um den Sync von Artikeln im Hintergrund zu stoppen.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

### Abhören eines periodischen Hintergrundsynchronisierungsereignisses innerhalb eines Service Workers

Das folgende Beispiel zeigt, wie auf ein periodisches Synchronisierungsereignis im Service Worker reagiert wird.

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

- [Ein Artikel zur Verwendung der periodischen Hintergrundsynchronisierung](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-Anwendung zur periodischen Hintergrundsynchronisierung](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
