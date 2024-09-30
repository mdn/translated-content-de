---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`ServiceWorkerRegistration`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert die Registrierung eines Service Workers. Sie registrieren einen Service Worker, um eine oder mehrere Seiten zu kontrollieren, die denselben Ursprung teilen.

Die Lebensdauer einer Service Worker-Registrierung geht über die der `ServiceWorkerRegistration`-Objekte hinaus, die sie innerhalb der Lebensdauer ihrer entsprechenden Service Worker-Clients repräsentieren. Der Browser führt eine persistente Liste aktiver `ServiceWorkerRegistration`-Objekte.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von der übergeordneten Schnittstelle,_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `activating` oder `activated` ist. Dies wird zunächst auf `null` gesetzt. Ein aktiver Worker wird einen [`Client`](/de/docs/Web/API/Client) kontrollieren, wenn die URL des Clients innerhalb des Bereichs der Registrierung liegt (die `scope`-Option wird gesetzt, wenn [`ServiceWorkerContainer.register`](/de/docs/Web/API/ServiceWorkerContainer/register) zuerst aufgerufen wird).
- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, welches Hintergrundabrufoperationen verwaltet.
- [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Schnittstelle zurück, die das Abonnieren und Abbestellen von Cookie-Änderungsereignissen ermöglicht.
- [`ServiceWorkerRegistration.index`](/de/docs/Web/API/ServiceWorkerRegistration/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`ContentIndex`](/de/docs/Web/API/ContentIndex)-Schnittstelle zurück, zur Verwaltung indizierter Inhalte für die Offline-Ansicht.
- [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `installing` ist. Dies wird zunächst auf `null` gesetzt.
- [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) {{ReadOnlyInline}}
  - : Gibt die Instanz des [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) zurück, die mit der aktuellen Service Worker-Registrierung verbunden ist.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Instanz des Zahlungsanwendungs-`PaymentManager` zurück, die verwendet wird, um verschiedene Funktionalitäten von Zahlungsanwendungen zu verwalten.
- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle zurück, welche die Registrierung von Aufgaben ermöglicht, die in bestimmten Intervallen ausgeführt werden sollen.
- [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle zurück, um Push-Abonnements zu verwalten, einschließlich Abonnieren, Abrufen eines aktiven Abonnements und Zugriff auf den Push-Berechtigungsstatus.
- [`ServiceWorkerRegistration.scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine URL repräsentiert, die den Registrierungsbereich eines Service Workers definiert; das heißt, der Bereich von URLs, die der Service Worker kontrollieren kann.
- [`ServiceWorkerRegistration.sync`](/de/docs/Web/API/ServiceWorkerRegistration/sync) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`SyncManager`](/de/docs/Web/API/SyncManager)-Schnittstelle zurück, welche die Verwaltung von Hintergrundsynchronisationsprozessen ermöglicht.
- [`ServiceWorkerRegistration.updateViaCache`](/de/docs/Web/API/ServiceWorkerRegistration/updateViaCache) {{ReadOnlyInline}}
  - : Gibt den Wert der Einstellung zurück, der bestimmt, unter welchen Umständen der Browser den HTTP-Cache konsultiert, wenn er versucht, den Service Worker oder irgendein Skript zu aktualisieren, das über [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert wird. Es kann einen der folgenden Werte annehmen: `imports`, `all` oder `none`.
- [`ServiceWorkerRegistration.waiting`](/de/docs/Web/API/ServiceWorkerRegistration/waiting) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `installed` ist. Dies wird zunächst auf `null` gesetzt.

## Instanzmethoden

_Erbt auch Methoden von der übergeordneten Schnittstelle,_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications)
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie vom aktuellen Ursprung über die aktuelle Service Worker-Registrierung erstellt wurden.
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - : Zeigt die Benachrichtigung mit dem gewünschten Titel an.
- [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
  - : Hebt die Registrierung des Service Workers auf und gibt ein {{jsxref("Promise")}} zurück. Der Service Worker wird alle laufenden Operationen abschließen, bevor er abgemeldet wird.
- [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update)
  - : Prüft den Server auf eine aktualisierte Version des Service Workers, ohne Caches zu konsultieren.

## Ereignisse

- [`updatefound`](/de/docs/Web/API/ServiceWorkerRegistration/updatefound_event)
  - : Wird jedes Mal ausgelöst, wenn die [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Eigenschaft einen neuen Service Worker erhält.

## Beispiele

In diesem Beispiel überprüft der Code zuerst, ob der Browser Service Workers unterstützt und registriert, falls ja, einen. Dann fügt er einen `updatefound`-Listener hinzu, in dem er die Service Worker-Registrierung verwendet, um weitere Änderungen am Zustand des Service Workers zu überwachen. Wenn sich der Service Worker seit der letzten Registrierung nicht geändert hat, wird das `updatefound`-Ereignis nicht ausgelöst.

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

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Worker verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
