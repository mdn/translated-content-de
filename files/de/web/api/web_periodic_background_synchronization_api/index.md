---
title: Web Periodische Hintergrundsynchronisations-API
slug: Web/API/Web_Periodic_Background_Synchronization_API
l10n:
  sourceCommit: b74d47ab6e99d2bd43ef9638367d9c69fca04402
---

{{DefaultAPISidebar("Periodic Background Sync")}}{{SecureContext_Header}}{{SeeCompatTable}}{{AvailableInWorkers}}

Die **Web Periodische Hintergrundsynchronisations-API** bietet eine Möglichkeit, Aufgaben zu registrieren, die in einem {{domxref("Service Worker API", "Service Worker", "", "nocode")}} in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen. Diese Aufgaben werden als Anfragen zur periodischen Hintergrundsynchronisation bezeichnet.

## Konzepte und Verwendung

Die Periodische Hintergrundsynchronisations-API ermöglicht es Webanwendungen, ihren Service Worker anzuweisen, in regelmäßigen Zeitabständen Aktualisierungen vorzunehmen. Anwendungen könnten beispielsweise aktuelle Inhalte abrufen, während ein Gerät mit einem Wi-Fi verbunden ist, oder Hintergrundaktualisierungen für eine Anwendung ermöglichen.

Das minimale Zeitintervall wird festgelegt, wenn die API aufgerufen wird; der Benutzeragent kann jedoch auch andere Faktoren berücksichtigen, die beeinflussen, wann der Service Worker das Ereignis empfängt. Zum Beispiel vorheriges Website-Engagement oder Verbindung zu einem bekannten Netzwerk.

Das {{domxref('PeriodicSyncManager')}} Interface ist über {{domxref('ServiceWorkerRegistration.periodicSync')}} verfügbar. Ein eindeutiger Tag-Identifikator wird festgelegt, um das Synchronisationsereignis zu „benennen“, welches dann im {{domxref('ServiceWorker')}}-Skript abgehört werden kann. Sobald das Ereignis empfangen wird, können Sie jede verfügbare Funktionalität ausführen, wie z.B. Caches aktualisieren oder neue Ressourcen abrufen.

Da diese API von Service Workern abhängt, ist die durch diese API bereitgestellte Funktionalität nur in einem sicheren Kontext verfügbar.

## Schnittstellen

- {{domxref("PeriodicSyncManager")}} {{Experimental_Inline}}
  - : Registriert Aufgaben, die in einem Service Worker in regelmäßigen Abständen mit Netzwerkverbindung ausgeführt werden sollen. Diese Aufgaben werden als Anfragen zur periodischen Hintergrundsynchronisation bezeichnet.
- {{domxref("PeriodicSyncEvent")}} {{Experimental_Inline}}
  - : Repräsentiert ein Synchronisationsereignis, das an den {{domxref("ServiceWorkerGlobalScope", "global scope", "", "nocode")}} eines {{domxref("Service Worker API", "ServiceWorkers", "", "nocode")}} gesendet wird. Es bietet eine Möglichkeit, Aufgaben im Service Worker mit Netzwerkverbindung auszuführen.

### Erweiterungen zu anderen Schnittstellen

Die folgenden Ergänzungen zur {{domxref("Service Worker API", "", "", "nocode")}} sind in der Spezifikation der Periodischen Hintergrundsynchronisation angegeben, um einen Einstiegspunkt für die Nutzung der Periodischen Hintergrundsynchronisation zu bieten.

- {{domxref("ServiceWorkerRegistration.periodicSync")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das {{domxref("PeriodicSyncManager")}} Interface zurück, um Aufgaben zu registrieren, die in bestimmten Intervallen ausgeführt werden sollen.
- {{domxref("ServiceWorkerGlobalScope/periodicsync_event", "periodicsync")}} Ereignis {{Experimental_Inline}}
  - : Tritt in regelmäßigen Abständen auf, die bei der Registrierung eines {{domxref("PeriodicSyncManager")}} angegeben wurden.

## Beispiele

Die folgenden Beispiele zeigen, wie man die Schnittstelle verwendet.

### Anfordern einer periodischen Hintergrundsynchronisation

Die folgende asynchrone Funktion registriert eine periodische Hintergrundsynchronisation in einem minimalen Intervall von einem Tag aus einem Browsing-Kontext:

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

### Überprüfen einer Hintergrundsynchronisation durch Tag

Dieses Codebeispiel prüft, ob eine Aufgabe zur periodischen Hintergrundsynchronisation mit einem bestimmten Tag registriert ist.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.getTags().then((tags) => {
    if (tags.includes("get-latest-news")) skipDownloadingLatestNewsOnPageLoad();
  });
});
```

### Entfernen einer periodischen Hintergrundsynchronisationsaufgabe

Der folgende Code entfernt eine periodische Hintergrundsynchronisationsaufgabe, um das Synchronisieren von Artikeln im Hintergrund zu stoppen.

```js
navigator.serviceWorker.ready.then((registration) => {
  registration.periodicSync.unregister("get-latest-news");
});
```

### Abhören eines periodischen Hintergrundsynchronisationsereignisses in einem Service Worker

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

- [Ein Artikel über die Verwendung der Periodischen Hintergrundsynchronisation](https://developer.chrome.com/docs/capabilities/periodic-background-sync)
- [Eine Demo-App zur Periodischen Hintergrundsynchronisation](https://webplatformapis.com/periodic_sync/periodicSync_improved.html)
