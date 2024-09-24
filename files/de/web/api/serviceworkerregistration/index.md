---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
l10n:
  sourceCommit: e9b95b3735a9e928fbdf3fe0a9f69c420b44cd79
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`ServiceWorkerRegistration`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert die Registrierung eines Service Workers. Sie registrieren einen Service Worker, um eine oder mehrere Seiten zu steuern, die denselben Ursprung teilen.

Die Lebensdauer einer Service Worker-Registrierung übersteigt die der `ServiceWorkerRegistration`-Objekte, die sie innerhalb der Lebensdauer ihrer entsprechenden Service Worker-Clients darstellen. Der Browser pflegt eine persistente Liste von aktiven `ServiceWorkerRegistration`-Objekten.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.active")}} {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `activating` oder `activated` ist. Dies ist anfänglich auf `null` gesetzt. Ein aktiver Worker wird einen {{domxref("Client")}} steuern, wenn die URL des Clients innerhalb des Registrierungsbereichs liegt (die `scope`-Option, die beim ersten Aufruf von {{domxref("ServiceWorkerContainer.register")}} festgelegt wird).
- {{domxref("ServiceWorkerRegistration.backgroundFetch")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein {{domxref("BackgroundFetchManager")}}-Objekt zurück, das Hintergrundabrufoperationen verwaltet.
- {{domxref("ServiceWorkerRegistration.cookies")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die {{domxref("CookieStoreManager")}}-Schnittstelle zurück, die es ermöglicht, sich für Cookie-Änderungsereignisse zu abonnieren oder abzubestellen.
- {{domxref("ServiceWorkerRegistration.index")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die {{domxref("ContentIndex")}}-Schnittstelle zurück, um indizierte Inhalte für die Offline-Anzeige zu verwalten.
- {{domxref("ServiceWorkerRegistration.installing")}} {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `installing` ist. Dies ist anfänglich auf `null` gesetzt.
- {{domxref("ServiceWorkerRegistration.navigationPreload")}} {{ReadOnlyInline}}
  - : Gibt die Instanz des {{domxref("NavigationPreloadManager")}} zurück, die mit der aktuellen Service Worker-Registrierung verbunden ist.
- {{domxref("ServiceWorkerRegistration.paymentManager")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die {{domxref("PaymentManager")}}-Instanz einer Zahlungs-App zurück, die verwendet wird, um verschiedene Funktionen der Zahlungs-App zu verwalten.
- {{domxref("ServiceWorkerRegistration.periodicSync")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die {{domxref("PeriodicSyncManager")}}-Schnittstelle zurück, die es ermöglicht, Aufgaben zu registrieren, die in bestimmten Intervallen ausgeführt werden sollen.
- {{domxref("ServiceWorkerRegistration.pushManager")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die {{domxref("PushManager")}}-Schnittstelle zurück, um Push-Abonnements zu verwalten, einschließlich Abonnieren, Abrufen eines aktiven Abonnements und Zugriff auf den Push-Berechtigungsstatus.
- {{domxref("ServiceWorkerRegistration.scope")}} {{ReadOnlyInline}}
  - : Gibt eine Zeichenkette zurück, die eine URL darstellt, die den Registrierungsbereich eines Service Workers definiert; das heißt, den Bereich von URLs, die der Service Worker steuern kann.
- {{domxref("ServiceWorkerRegistration.sync")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die {{domxref("SyncManager")}}-Schnittstelle zurück, die Hintergrundsynchronisierungsprozesse verwaltet.
- {{domxref("ServiceWorkerRegistration.updateViaCache")}} {{ReadOnlyInline}}
  - : Gibt den Wert der Einstellung zurück, die verwendet wird, um die Umstände zu bestimmen, unter denen der Browser den HTTP-Cache konsultiert, wenn er versucht, den Service Worker oder alle Skripte zu aktualisieren, die mit {{domxref("WorkerGlobalScope.importScripts", "importScripts()")}} importiert werden. Es kann einer der folgenden Werte sein: `imports`, `all` oder `none`.
- {{domxref("ServiceWorkerRegistration.waiting")}} {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `installed` ist. Dies ist anfänglich auf `null` gesetzt.

## Instanzmethoden

_Erbt auch Methoden von seiner übergeordneten Schnittstelle,_ {{domxref("EventTarget")}}.

- {{domxref("ServiceWorkerRegistration.getNotifications()")}}
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie vom aktuellen Ursprung über die aktuelle Service Worker-Registrierung erstellt wurden.
- {{domxref("ServiceWorkerRegistration.showNotification()")}}
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.
- {{domxref("ServiceWorkerRegistration.unregister()")}}
  - : Hebt die Registrierung des Service Workers auf und gibt ein {{jsxref("Promise")}} zurück. Der Service Worker wird alle laufenden Operationen abschließen, bevor er abgemeldet wird.
- {{domxref("ServiceWorkerRegistration.update()")}}
  - : Überprüft den Server auf eine aktualisierte Version des Service Workers, ohne Caches zu konsultieren.

## Ereignisse

- {{domxref("ServiceWorkerRegistration.updatefound_event", "updatefound")}}
  - : Wird ausgelöst, wenn die {{domxref("ServiceWorkerRegistration.installing")}}-Eigenschaft einen neuen Service Worker erhält.

## Beispiele

In diesem Beispiel überprüft der Code zuerst, ob der Browser Service Worker unterstützt, und registriert einen, wenn dies der Fall ist. Anschließend wird ein `updatefound`-Listener hinzugefügt, in dem die Service Worker-Registrierung verwendet wird, um weitere Änderungen am Zustand des Service Workers zu überwachen. Wenn sich der Service Worker seit der letzten Registrierung nicht geändert hat, wird das `updatefound`-Ereignis nicht ausgelöst.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Worker](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
