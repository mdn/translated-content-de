---
title: Web Periodic Background Synchronization API
slug: Web/API/Web_Periodic_Background_Synchronization_API
l10n:
  sourceCommit: de5b264fa7bf6bb49811bf79f8f28f10835bfb79
---

{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Web Periodic Background Synchronization API** bietet eine Möglichkeit, Aufgaben zu registrieren, die in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als periodische Hintergrundsynchronisationsanfragen bezeichnet.

## Konzepte und Anwendung

Die Periodic Background Sync API ermöglicht es Webanwendungen, ihrem Service Worker mitzuteilen, in regelmäßigen Zeitabständen Aktualisierungen vorzunehmen. Dies kann verwendet werden, um die neuesten Inhalte abzurufen, während ein Gerät mit einem WLAN verbunden ist, oder um Hintergrundaktualisierungen für eine Anwendung zu ermöglichen.

Das minimale Zeitintervall wird bei der Nutzung der API festgelegt; jedoch könnte der Benutzeragent auch andere Faktoren berücksichtigen, die beeinflussen, wann der Service Worker das Ereignis erhält. Zum Beispiel vorheriges Engagement der Website oder die Verbindung zu einem bekannten Netzwerk.

Die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle ist über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) verfügbar. Ein einzigartiger Kennzeichner wird festgelegt, um das Synchronisationsereignis zu "benennen", das dann im [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skript abgehört werden kann. Sobald das Ereignis empfangen wird, können beliebige verfügbare Funktionen ausgeführt werden, wie zum Beispiel das Aktualisieren von Caches oder das Abrufen neuer Ressourcen.

Da diese API auf Service Worker basiert, ist die Funktionalität, die diese API bietet, nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) {{Experimental_Inline}}
  - : Registriert Aufgaben, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als periodische Hintergrundsynchronisationsanfragen bezeichnet.
- [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) {{Experimental_Inline}}
  - : Stellt ein Synchronisationsereignis dar, das an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker mit Netzwerkverbindung auszuführen.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) sind in der Periodic Background Sync-Spezifikation angegeben, um einen Einstiegspunkt für die Verwendung von Periodic Background Sync bereitzustellen.

- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen Verweis auf die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle zurück, um Aufgaben zu registrieren, die in bestimmten Intervallen ausgeführt werden sollen.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) Ereignis {{Experimental_Inline}}
  - : Tritt in den angegebenen regelmäßigen Abständen auf, die beim Registrieren eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt wurden.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer periodischen Hintergrundsynchronisation

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisation in einem Mindestintervall von einem Tag aus einem Browser-Kontext heraus:

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

### Überprüfung einer periodischen Hintergrundsynchronisation nach Tag

Dieser Code überprüft, ob eine Periodic Background Sync-Aufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer periodischen Hintergrundsynchronisationsaufgabe

Der folgende Code entfernt eine Periodic Background Sync-Aufgabe, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

### Abhören einer periodischen Hintergrundsynchronisation innerhalb eines Service Workers

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

- [Ein Artikel über die Verwendung von Periodic Background Sync](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
