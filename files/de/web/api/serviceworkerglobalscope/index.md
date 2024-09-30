---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`ServiceWorkerGlobalScope`** Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert den globalen Ausführungskontext eines Service Workers.

Entwickler sollten beachten, dass der Zustand des ServiceWorkers nicht über den Beendigungs-/Neustartzyklus hinweg beibehalten wird. Jeder Ereignishandler sollte daher annehmen, dass er mit einem leeren, standardmäßigen globalen Zustand aufgerufen wird.

Nach erfolgreicher Registrierung kann und wird ein Service Worker beendet, wenn er inaktiv ist, um Speicher und Prozessorleistung zu sparen. Ein aktiver Service Worker wird automatisch neu gestartet, um auf Ereignisse zu reagieren, wie zum Beispiel [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) oder [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event).

Darüber hinaus sind synchrone Anfragen innerhalb eines Service Workers nicht erlaubt — es können nur asynchrone Anfragen verwendet werden, wie sie zum Beispiel über die Methode [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) initiiert werden.

Dieses Interface erbt vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface und dessen Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface und dessen Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients) {{ReadOnlyInline}}
  - : Beinhaltet das [`Clients`](/de/docs/Web/API/Clients) Objekt, das mit dem Service Worker verbunden ist.
- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore) Objekt zurück, das mit dem Service Worker verbunden ist.
- [`ServiceWorkerGlobalScope.registration`](/de/docs/Web/API/ServiceWorkerGlobalScope/registration) {{ReadOnlyInline}}
  - : Beinhaltet das [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) Objekt, das die Registrierung des Service Workers repräsentiert.
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker) {{ReadOnlyInline}}
  - : Beinhaltet das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) Objekt, das den Service Worker repräsentiert.

## Instanz-Methoden

_Dieses Interface erbt Methoden vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope) Interface und dessen Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting)
  - : Erlaubt es der aktuellen Registrierung des Service Workers, vom Wartezustand in den aktiven Zustand zu wechseln, während Service Worker Clients es verwenden.

## Ereignisse

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder indem Sie einen Ereignis-Listener auf die `oneventname`-Eigenschaft dieses Interfaces zuweisen.

- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erwirbt.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Operation des [Background Fetch](/de/docs/Web/API/Background_Fetch_API) vom Benutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche für eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation geklickt hat.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API) Operation erfolgreich waren.
- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) {{Experimental_Inline}}
  - : Wird auf dem Service Worker einer Zahlungs-App ausgelöst, um zu überprüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Speziell wird es ausgelöst, wenn die Händlerwebsite den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest) Konstruktor aufruft.
- [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event) {{Experimental_Inline}}
  - : Tritt auf, wenn ein Element aus dem [`ContentIndex`](/de/docs/Web/API/ContentIndex) entfernt wird.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Cookie-Änderung aufgetreten ist, die mit der Cookie-Änderungs-Abonnementliste des Service Workers übereinstimmt.
- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - : Tritt auf, wenn ein [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) aufgerufen wird.
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Worker erwirbt.
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - : Tritt auf, wenn eingehende Nachrichten im Empfang festgestellt werden. Kontrollierte Seiten können die Methode [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) verwenden, um Nachrichten an Service Workers zu senden.
- [`messageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event)
  - : Tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.
- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte Benachrichtigung klickt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event)
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) {{Experimental_Inline}}
  - : Wird in einer Zahlungs-App ausgelöst, wenn ein Zahlungsablauf auf der Händlerwebsite über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) eingeleitet wurde.
- [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - : Wird ausgelöst, wenn ein Aufruf an [`SyncManager.register`](/de/docs/Web/API/SyncManager/register) von einer Service Worker Client-Seite gemacht wird. Der Versuch, zu synchronisieren, wird entweder sofort unternommen, wenn das Netzwerk verfügbar ist, oder sobald das Netzwerk verfügbar wird.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) {{Experimental_Inline}}
  - : Tritt bei periodischen Intervallen auf, die beim Registrieren eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) festgelegt wurden.
- [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Tritt auf, wenn eine Server-Push-Benachrichtigung empfangen wird.
- [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Tritt auf, wenn ein Push-Abonnement ungültig geworden ist oder kurz davor steht ungültig zu werden (z.B. wenn ein Push-Dienst eine Ablaufzeit setzt).

## Beispiele

Dieses Code-Snippet stammt aus dem [Service Worker Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch-Beispiel live](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) Ereignishandler hört auf das `fetch` Ereignis. Bei Auslösung gibt der Code ein Versprechen zurück, das auf die erste passende Anfrage im [`Cache`](/de/docs/Web/API/Cache) Objekt auflöst. Wenn keine Übereinstimmung gefunden wird, holt der Code eine Antwort aus dem Netzwerk.

Der Code behandelt auch Ausnahmen, die von der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) Operation ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z.B. 404) keine Ausnahme auslöst. Sie wird ein normales Antwortobjekt zurückgeben, das den entsprechenden Fehlercode gesetzt hat.

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
- [Service Workers grundlegendes Code-Beispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
