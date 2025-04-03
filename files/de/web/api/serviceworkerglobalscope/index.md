---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`ServiceWorkerGlobalScope`** Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert den globalen Ausführungskontext eines Service Workers.

Entwickler sollten beachten, dass der Zustand eines Service Workers nicht über den Beendigungs/Neustart-Zyklus hinaus erhalten bleibt, daher sollte jeder Ereignishandler davon ausgehen, dass er mit einem nackten, standardmäßigen globalen Zustand aufgerufen wird.

Sobald ein Service Worker erfolgreich registriert ist, kann und wird er im Leerlauf beendet, um Speicher und Prozessorleistung zu sparen. Ein aktiver Service Worker wird automatisch neu gestartet, um auf Ereignisse zu reagieren, wie z.B. [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) oder [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event).

Darüber hinaus sind synchrone Anfragen innerhalb eines Service Workers nicht erlaubt — es können nur asynchrone Anfragen, wie solche, die über die [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) Methode initiiert werden, verwendet werden.

Dieses Interface erbt vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface und dessen Elterninterface [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface und dessen Elterninterface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients) {{ReadOnlyInline}}
  - : Enthält das [`Clients`](/de/docs/Web/API/Clients) Objekt, das dem Service Worker zugeordnet ist.
- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore) Objekt zurück, das dem Service Worker zugeordnet ist.
- [`ServiceWorkerGlobalScope.registration`](/de/docs/Web/API/ServiceWorkerGlobalScope/registration) {{ReadOnlyInline}}
  - : Enthält das [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt, das die Registrierung des Service Workers darstellt.
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker) {{ReadOnlyInline}}
  - : Enthält das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt, das den Service Worker repräsentiert.

## Instanz-Methoden

_Dieses Interface erbt Methoden vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface und dessen Elterninterface [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting)
  - : Ermöglicht es der aktuellen Service Worker Registrierung, von der wartenden in die aktive Phase überzugehen, während Service Worker Clients sie nutzen.

## Ereignisse

Dieses Ereignis kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) überwacht werden oder durch Zuweisung eines Ereignislisteners zur `oneventname` Eigenschaft dieses Interfaces.

- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation vom Benutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation klickt.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation erfolgreich waren.
- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) {{Experimental_Inline}}
  - : Wird auf einem Payment App Service Worker ausgelöst, um zu prüfen, ob er bereit ist, eine Zahlung durchzuführen. Insbesondere wird es ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufruft.
- [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event) {{Experimental_Inline}}
  - : Tritt auf, wenn ein Element aus dem [`ContentIndex`](/de/docs/Web/API/ContentIndex) entfernt wird.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Cookie-Änderung stattgefunden hat, die mit der Cookie-Änderungs-Abonnementliste des Service Workers übereinstimmt.
- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - : Tritt auf, wenn ein [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) aufgerufen wird.
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Worker erhält.
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - : Tritt auf, wenn eingehende Nachrichten empfangen werden. Kontrollierte Seiten können die [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) Methode verwenden, um Nachrichten an Service Workers zu senden.
- [`messageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event)
  - : Tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.
- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte Benachrichtigung klickt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event)
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) {{Experimental_Inline}}
  - : Wird in einer Payment App ausgelöst, wenn ein Zahlungsvorgang auf der Händler-Website über die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) Methode eingeleitet wurde.
- [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - : Wird ausgelöst, wenn ein Aufruf an [`SyncManager.register`](/de/docs/Web/API/SyncManager/register) von einer Service Worker Client-Seite aus erfolgt. Der Versuch zu synchronisieren wird entweder sofort unternommen, wenn das Netzwerk verfügbar ist, oder sobald das Netzwerk verfügbar wird.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) {{Experimental_Inline}}
  - : Tritt in periodischen Intervallen auf, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) angegeben wurden.
- [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Tritt auf, wenn eine Server-Push-Benachrichtigung empfangen wird.
- [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Tritt auf, wenn ein Push-Abonnement ungültig geworden ist oder kurz davor ist, ungültig zu werden (z.B. wenn ein Push-Dienst eine Ablaufzeit setzt).

## Beispiele

Dieses Codebeispiel stammt aus dem [Service Worker Prefetch Sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch-Beispiel live](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignishandler lauscht auf das `fetch` Ereignis. Wenn es ausgelöst wird, gibt der Code ein Promise zurück, das sich zur ersten übereinstimmenden Anfrage im [`Cache`](/de/docs/Web/API/Cache) Objekt auflöst. Wenn keine Übereinstimmung gefunden wird, holt der Code eine Antwort aus dem Netzwerk.

Der Code behandelt auch Ausnahmen, die von der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) Operation geworfen werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z.B. 404) keine Ausnahme auslöst. Es wird ein normales Antwortobjekt zurückgegeben, das den entsprechenden Fehlercode gesetzt hat.

```js
self.addEventListener("fetch", (event) => {
  console.log("Handling fetch event for", event.request.url);

  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        console.log("Found response in cache:", response);

        return response;
      }
      console.log("No response found in cache. About to fetch from network…");

      return fetch(event.request).then(
        (response) => {
          console.log("Response from network is:", response);

          return response;
        },
        (error) => {
          console.error("Fetching failed:", error);

          throw error;
        },
      );
    }),
  );
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
