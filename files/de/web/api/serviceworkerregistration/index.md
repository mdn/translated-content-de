---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`ServiceWorkerRegistration`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert die Registrierung des Service Workers. Sie registrieren einen Service Worker, um eine oder mehrere Seiten zu kontrollieren, die denselben Ursprung teilen.

Die Lebensdauer einer Registrierung eines Service Workers überschreitet die der `ServiceWorkerRegistration`-Objekte, die sie innerhalb der Lebensdauer ihrer entsprechenden Service Worker-Clients darstellen. Der Browser führt eine persistente Liste von aktiven `ServiceWorkerRegistration`-Objekten.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface,_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `activating` oder `activated` ist. Dies ist zu Beginn auf `null` gesetzt. Ein aktiver Worker kontrolliert einen [`Client`](/de/docs/Web/API/Client), wenn die URL des Clients innerhalb des Gültigkeitsbereichs der Registrierung liegt (die `scope`-Option, die festgelegt wird, wenn [`ServiceWorkerContainer.register`](/de/docs/Web/API/ServiceWorkerContainer/register) zuerst aufgerufen wird).
- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das Hintergrundabruf-Operationen verwaltet.
- [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Interface zurück, das die Anmeldung und Abmeldung bei Cookie-Änderungsereignissen ermöglicht.
- [`ServiceWorkerRegistration.index`](/de/docs/Web/API/ServiceWorkerRegistration/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`ContentIndex`](/de/docs/Web/API/ContentIndex)-Interface zurück, um indizierte Inhalte für die Offline-Ansicht zu verwalten.
- [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) {{ReadOnlyInline}}
  - : Gibt einen Service Worker in einem `installing`-Zustand zurück. Dies ist zu Beginn auf `null` gesetzt.
- [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) {{ReadOnlyInline}}
  - : Gibt die Instanz des [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) zurück, die mit der aktuellen Registrierung des Service Workers verbunden ist.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Instanz des [`PaymentManager`](/de/docs/Web/API/PaymentManager) einer Zahlungs-App zurück, die verwendet wird, um verschiedene Funktionen von Zahlungs-Apps zu verwalten.
- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Interface zurück, das das Registrieren von Aufgaben ermöglicht, die in bestimmten Intervallen ausgeführt werden sollen.
- [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`PushManager`](/de/docs/Web/API/PushManager)-Interface zurück, um Push-Abonnements zu verwalten, einschließlich des Abonnierens, Abrufen eines aktiven Abonnements und Zugriffs auf den Push-Berechtigungsstatus.
- [`ServiceWorkerRegistration.scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die eine URL darstellt, die den Registrierungsbereich eines Service Workers definiert, d. h. den Bereich der URLs, die der Service Worker kontrollieren kann.
- [`ServiceWorkerRegistration.sync`](/de/docs/Web/API/ServiceWorkerRegistration/sync) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`SyncManager`](/de/docs/Web/API/SyncManager)-Interface zurück, das Hintergrund-Synchronisationsprozesse verwaltet.
- [`ServiceWorkerRegistration.updateViaCache`](/de/docs/Web/API/ServiceWorkerRegistration/updateViaCache) {{ReadOnlyInline}}
  - : Gibt den Wert der Einstellung zurück, die bestimmt, unter welchen Umständen der Browser den HTTP-Cache konsultiert, wenn versucht wird, den Service Worker oder Skripte, die über [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden, zu aktualisieren. Dies kann einer der folgenden Werte sein: `imports`, `all` oder `none`.
- [`ServiceWorkerRegistration.waiting`](/de/docs/Web/API/ServiceWorkerRegistration/waiting) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `installed` ist. Dies ist zu Beginn auf `null` gesetzt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface,_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications)
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie vom aktuellen Ursprung über die aktuelle Registrierung des Service Workers erstellt wurden.
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.
- [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
  - : Hebt die Registrierung des Service Workers auf und gibt ein {{jsxref("Promise")}} zurück. Der Service Worker wird alle laufenden Operationen beenden, bevor er abgemeldet wird.
- [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update)
  - : Überprüft den Server auf eine aktualisierte Version des Service Workers, ohne Caches zu konsultieren.

## Ereignisse

- [`updatefound`](/de/docs/Web/API/ServiceWorkerRegistration/updatefound_event)
  - : Wird jedes Mal ausgelöst, wenn die [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Eigenschaft einen neuen Service Worker erhält.

## Beispiele

In diesem Beispiel überprüft der Code zunächst, ob der Browser Service Worker unterstützt, und registriert dann einen. Anschließend wird ein `updatefound`-Listener hinzugefügt, in dem die Registrierung des Service Workers verwendet wird, um weitere Änderungen am Zustand des Service Workers zu überwachen. Wenn sich der Service Worker seit der letzten Registrierung nicht geändert hat, wird das `updatefound`-Ereignis nicht ausgelöst.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      registration.addEventListener("updatefound", () => {
        // If updatefound is fired, it means that there's
        // a new service worker being installed.
        const installingWorker = registration.installing;
        console.log(
          "A new service worker is being installed:",
          installingWorker,
        );

        // You can listen for changes to the installing service worker's
        // state via installingWorker.onstatechange
      });
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });
} else {
  console.error("Service workers are not supported.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
