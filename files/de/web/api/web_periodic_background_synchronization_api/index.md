---
title: Web Periodic Background Synchronization API
slug: Web/API/Web_Periodic_Background_Synchronization_API
l10n:
  sourceCommit: 4b33c650e27ddb5f82b6b0fc6f83c9a810eaca81
---

{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Web Periodische Hintergrundsynchronisierung API** bietet eine Möglichkeit, Aufgaben zu registrieren, die in einem [Service Worker](/de/docs/Web/API/Service_Worker_API) in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als periodische Hintergrundsynchronisierungsanforderungen bezeichnet.

## Konzepte und Verwendung

Die Periodische Hintergrundsynchronisierungs-API ermöglicht es Webanwendungen, ihren Service Worker darauf aufmerksam zu machen, in einem periodischen Zeitintervall Aktualisierungen vorzunehmen. Anwendungen könnten das Abrufen der neuesten Inhalte während einer Verbindung des Geräts mit Wi-Fi oder Hintergrundaktualisierungen einer Anwendung beinhalten.

Das minimale Zeitintervall wird festgelegt, wenn die API aufgerufen wird; der Benutzeragent könnte jedoch auch andere Faktoren berücksichtigen, die beeinflussen, wann der Service Worker das Ereignis empfängt. Zum Beispiel vorheriges Website-Engagement oder Verbindung mit einem bekannten Netzwerk.

Die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle ist über [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) verfügbar. Ein eindeutiger Tag-Identifier wird gesetzt, um das Sync-Ereignis zu 'benennen', das dann im [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Skript überwacht werden kann. Sobald das Ereignis empfangen wird, kann jede verfügbare Funktionalität ausgeführt werden, wie das Aktualisieren von Caches oder das Abrufen neuer Ressourcen.

Da diese API auf Service Workers angewiesen ist, ist die von dieser API bereitgestellte Funktionalität nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) {{Experimental_Inline}}
  - : Registriert Aufgaben, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden. Diese Aufgaben werden als periodische Hintergrundsynchronisierungsanforderungen bezeichnet.
- [`PeriodicSyncEvent`](/de/docs/Web/API/PeriodicSyncEvent) {{Experimental_Inline}}
  - : Repräsentiert ein Synchronisierungsereignis, das an den [globalen Bereich](/de/docs/Web/API/ServiceWorkerGlobalScope) eines [ServiceWorkers](/de/docs/Web/API/Service_Worker_API) gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker mit Netzwerkverbindung auszuführen.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur [Service Worker API](/de/docs/Web/API/Service_Worker_API) sind in der Spezifikation für die periodische Hintergrundsynchronisierung angegeben, um einen Einstiegspunkt für die Verwendung der Periodischen Hintergrundsynchronisierung bereitzustellen.

- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle zurück, um Aufgaben zu registrieren, die in bestimmten Intervallen ausgeführt werden sollen.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event)-Ereignis {{Experimental_Inline}}
  - : Tritt in regelmäßigen Abständen auf, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) angegeben wurden.

## Sicherheitsüberlegungen

Der Zugriff auf die periodische Hintergrundsynchronisierung wird durch die Berechtigung `periodic-background-sync` gesteuert. Sie können die [Permissions API](/de/docs/Web/API/Permissions_API) verwenden, um zu überprüfen, ob diese Berechtigung erteilt wurde:

```js
const status = await navigator.permissions.query({
  name: "periodic-background-sync",
});
```

In Chrome wird die Berechtigung nur einer [installierten Web-App](/de/docs/Web/Progressive_web_apps/Guides/Installing) erteilt, die als separate Anwendung gestartet wurde. Chrome verwendet auch den [Engagement-Score der Website](https://developer.chrome.com/docs/capabilities/periodic-background-sync#getting_user_engagement_right), um zu bestimmen, ob und wie oft periodische Sync-Ereignisse ausgelöst werden.

## Beispiele

Die folgenden Beispiele zeigen, wie die Schnittstelle verwendet wird.

### Anfordern einer Periodischen Hintergrundsynchronisierung

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisierung mit einem Mindestintervall von einem Tag aus einem Browserkontext:

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

### Überprüfen einer Hintergrund-Periodensync nach Tag

Dieser Code überprüft, ob eine Periodische Hintergrundsynchronisierungsaufgabe mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer Periodischen Hintergrundsynchronisierungsaufgabe

Der folgende Code entfernt eine Periodische Hintergrundsynchronisierungsaufgabe, um das Synchronisieren von Artikeln im Hintergrund zu stoppen:

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

### Zuhören auf eine Periodische Hintergrundsynchronisierung innerhalb eines Service Workers

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

- [Ein Artikel zur Verwendung der Periodischen Hintergrundsynchronisierung](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
