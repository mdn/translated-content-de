---
title: ServiceWorkerRegistration
slug: Web/API/ServiceWorkerRegistration
l10n:
  sourceCommit: 828ae6eee278f30c3fa3677a74915d28d9e338b2
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`ServiceWorkerRegistration`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert die Registrierung des Service Workers. Sie registrieren einen Service Worker, um eine oder mehrere Seiten zu steuern, die den gleichen Ursprung teilen.

Die Lebensdauer einer Service Worker-Registrierung überdauert die von `ServiceWorkerRegistration`-Objekten, die sie innerhalb der Lebensdauer ihrer entsprechenden Service Worker-Clients darstellen. Der Browser führt eine persistente Liste aktiver `ServiceWorkerRegistration`-Objekte.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface,_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `activating` oder `activated` ist. Dies ist anfangs auf `null` gesetzt. Ein aktiver Worker wird einen [`Client`](/de/docs/Web/API/Client) steuern, wenn die URL des Clients in den Umfang der Registrierung fällt (die `scope`-Option, die gesetzt wird, wenn [`ServiceWorkerContainer.register`](/de/docs/Web/API/ServiceWorkerContainer/register) zum ersten Mal aufgerufen wird.)
- [`ServiceWorkerRegistration.backgroundFetch`](/de/docs/Web/API/ServiceWorkerRegistration/backgroundFetch) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf ein [`BackgroundFetchManager`](/de/docs/Web/API/BackgroundFetchManager)-Objekt zurück, das Hintergrundabrufvorgänge verwaltet.
- [`ServiceWorkerRegistration.cookies`](/de/docs/Web/API/ServiceWorkerRegistration/cookies) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`CookieStoreManager`](/de/docs/Web/API/CookieStoreManager)-Schnittstelle zurück, die das Abonnieren und Abbestellen von Cookie-Änderungsereignissen ermöglicht.
- [`ServiceWorkerRegistration.index`](/de/docs/Web/API/ServiceWorkerRegistration/index) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`ContentIndex`](/de/docs/Web/API/ContentIndex)-Schnittstelle zurück, zum Verwalten von indizierten Inhalten für die Offline-Ansicht.
- [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `installing` ist. Dies ist anfangs auf `null` gesetzt.
- [`ServiceWorkerRegistration.navigationPreload`](/de/docs/Web/API/ServiceWorkerRegistration/navigationPreload) {{ReadOnlyInline}}
  - : Gibt die Instanz von [`NavigationPreloadManager`](/de/docs/Web/API/NavigationPreloadManager) zurück, die mit der aktuellen Service Worker-Registrierung assoziiert ist.
- [`ServiceWorkerRegistration.paymentManager`](/de/docs/Web/API/ServiceWorkerRegistration/paymentManager) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Instanz eines Zahlungs-App`s [`PaymentManager`](/de/docs/Web/API/PaymentManager) zurück, die verwendet wird, um verschiedene Funktionen der Zahlungs-App zu verwalten.
- [`ServiceWorkerRegistration.periodicSync`](/de/docs/Web/API/ServiceWorkerRegistration/periodicSync) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf die [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager)-Schnittstelle zurück, die das Registrieren von Aufgaben ermöglicht, die in bestimmten Intervallen ausgeführt werden sollen.
- [`ServiceWorkerRegistration.pushManager`](/de/docs/Web/API/ServiceWorkerRegistration/pushManager) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`PushManager`](/de/docs/Web/API/PushManager)-Schnittstelle zurück, um Push-Abonnements zu verwalten, einschließlich Abonnieren, Abrufen eines aktiven Abonnements und Zugreifen auf den Push-Berechtigungsstatus.
- [`ServiceWorkerRegistration.scope`](/de/docs/Web/API/ServiceWorkerRegistration/scope) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der eine URL repräsentiert, die den Registrierungsumfang eines Service Workers definiert; das bedeutet, den Bereich von URLs, die der Service Worker steuern kann.
- [`ServiceWorkerRegistration.sync`](/de/docs/Web/API/ServiceWorkerRegistration/sync) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf die [`SyncManager`](/de/docs/Web/API/SyncManager)-Schnittstelle zurück, die Hintergrundsynchronisierungsprozesse verwaltet.
- [`ServiceWorkerRegistration.updateViaCache`](/de/docs/Web/API/ServiceWorkerRegistration/updateViaCache) {{ReadOnlyInline}}
  - : Gibt den Wert der Einstellung zurück, die bestimmt, unter welchen Umständen der Browser den HTTP-Cache heranzieht, wenn er versucht, den Service Worker oder Skripte, die über [`importScripts()`](/de/docs/Web/API/WorkerGlobalScope/importScripts) importiert werden, zu aktualisieren. Es kann einer der folgenden sein: `imports`, `all` oder `none`.
- [`ServiceWorkerRegistration.waiting`](/de/docs/Web/API/ServiceWorkerRegistration/waiting) {{ReadOnlyInline}}
  - : Gibt einen Service Worker zurück, dessen Zustand `installed` ist. Dies ist anfangs auf `null` gesetzt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Eltern-Interface,_ [`EventTarget`](/de/docs/Web/API/EventTarget).

- [`ServiceWorkerRegistration.getNotifications()`](/de/docs/Web/API/ServiceWorkerRegistration/getNotifications)
  - : Gibt eine Liste der Benachrichtigungen in der Reihenfolge zurück, in der sie über den aktuellen Ursprung über die aktuelle Service Worker-Registrierung erstellt wurden.
- [`ServiceWorkerRegistration.showNotification()`](/de/docs/Web/API/ServiceWorkerRegistration/showNotification)
  - : Zeigt die Benachrichtigung mit dem angeforderten Titel an.
- [`ServiceWorkerRegistration.unregister()`](/de/docs/Web/API/ServiceWorkerRegistration/unregister)
  - : Hebt die Registrierung des Service Workers auf und gibt ein {{jsxref("Promise")}} zurück. Der Service Worker wird alle laufenden Operationen abschließen, bevor er registriert wird.
- [`ServiceWorkerRegistration.update()`](/de/docs/Web/API/ServiceWorkerRegistration/update)
  - : Überprüft den Server auf eine aktualisierte Version des Service Workers, ohne die Caches zu konsultieren.

## Ereignisse

- [`updatefound`](/de/docs/Web/API/ServiceWorkerRegistration/updatefound_event)
  - : Wird ausgelöst, wenn immer die [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Eigenschaft einen neuen Service Worker erhält.

## Beispiele

In diesem Beispiel überprüft der Code zunächst, ob der Browser Service Worker unterstützt, und registriert dann einen, falls ja. Anschließend wird ein `updatefound`-Listener hinzugefügt, in dem die Service Worker-Registrierung verwendet wird, um auf weitere Änderungen im Zustand des Service Workers zu lauschen. Wenn sich der Service Worker seit der letzten Registrierung nicht geändert hat, wird das `updatefound`-Ereignis nicht ausgelöst.

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
- [Grundlegendes Beispiel für Service Worker Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Arbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
