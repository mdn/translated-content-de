---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
l10n:
  sourceCommit: 01e8b5077df6d79e52f2521dfbe734e0923d1fc4
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`ServiceWorkerGlobalScope`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert den globalen Ausführungskontext eines Service Workers.

Entwickler sollten berücksichtigen, dass der Zustand des Service Workers über den Zyklus von Beendigung und Neustart hinweg nicht erhalten bleibt. Jeder Event-Handler sollte daher davon ausgehen, dass er in einem nackten, standardmäßigen globalen Zustand aufgerufen wird.

Sobald ein Service Worker erfolgreich registriert wurde, kann er zur Einsparung von Speicher und Prozessorleistung beendet werden, wenn er im Leerlauf ist. Ein aktiver Service Worker wird automatisch neu gestartet, um auf Ereignisse wie [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) oder [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) zu reagieren.

Zusätzlich sind synchrone Anfragen innerhalb eines Service Workers nicht erlaubt. Nur asynchrone Anfragen, wie die über die [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Methode initiierten, können verwendet werden.

Dieses Interface erbt vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interface und dessen übergeordnetem [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Dieses Interface erbt Eigenschaften vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interface und dessen übergeordnetem [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients) {{ReadOnlyInline}}
  - : Beinhaltet das [`Clients`](/de/docs/Web/API/Clients)-Objekt, das dem Service Worker zugeordnet ist.
- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt zurück, das dem Service Worker zugeordnet ist.
- [`ServiceWorkerGlobalScope.registration`](/de/docs/Web/API/ServiceWorkerGlobalScope/registration) {{ReadOnlyInline}}
  - : Beinhaltet das [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt, das die Registrierung des Service Workers repräsentiert.
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker) {{ReadOnlyInline}}
  - : Beinhaltet das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt, das den Service Worker repräsentiert.

## Instanz-Methoden

_Dieses Interface erbt Methoden vom [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Interface und dessen übergeordnetem [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting)
  - : Erlaubt es der aktuellen Service Worker-Registrierung, vom Wartestand in den aktiven Zustand zu wechseln, während die Service Worker-Clients diese nutzen.

## Ereignisse

Dieses Ereignis kann mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Event-Listeners zur Eigenschaft `oneventname` dieses Interfaces überwacht werden.

- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active)-Worker erhält.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation vom Nutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Nutzer auf die Benutzeroberfläche einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation klickt.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation fehlschlägt.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation erfolgreich sind.
- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) {{Experimental_Inline}}
  - : Wird auf dem Service Worker einer Zahlung ausgeführt, um zu prüfen, ob er bereit ist, eine Zahlung zu bearbeiten. Insbesondere wird es ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft.
- [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event) {{Experimental_Inline}}
  - : Tritt auf, wenn ein Element aus dem [`ContentIndex`](/de/docs/Web/API/ContentIndex) entfernt wird.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Änderung an Cookies eintritt, die zur Abonnementliste des Service Workers passt.
- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - : Tritt auf, wenn ein [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Aufruf erfolgt.
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing)-Worker bekommt.
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - : Tritt auf, wenn eingehende Nachrichten empfangen werden. Kontrollierte Seiten können die Methode [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage) nutzen, um Nachrichten an Service Workers zu senden.
- [`messageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event)
  - : Tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.
- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - : Tritt auf, wenn ein Nutzer auf eine angezeigte Benachrichtigung klickt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event)
  - : Tritt auf, wenn ein Nutzer eine angezeigte Benachrichtigung schließt.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) {{Experimental_Inline}}
  - : Wird in einer Zahlungs-App ausgelöst, wenn ein Zahlungsfluss auf der Händler-Website über die Methode [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show) initiiert wurde.
- [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - : Wird ausgelöst, wenn ein Aufruf von [`SyncManager.register`](/de/docs/Web/API/SyncManager/register) von einer Service Worker-Client-Seite durchgeführt wird. Der Versuch zur Synchronisation erfolgt entweder sofort, wenn das Netzwerk verfügbar ist, oder sobald das Netzwerk verfügbar wird.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) {{Experimental_Inline}}
  - : Tritt in regelmäßigen Abständen auf, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) angegeben wurden.
- [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Tritt auf, wenn eine Push-Benachrichtigung vom Server empfangen wird.
- [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Tritt auf, wenn ein Push-Abo ungültig geworden ist oder dabei ist, ungültig zu werden (z. B. wenn ein Push-Dienst eine Ablaufzeit festlegt).

## Beispiele

Dieser Codeausschnitt stammt aus dem Beispiel [service worker prefetch sample](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [prefetch example live](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Event-Handler überwacht das `fetch`-Ereignis. Wenn dieses ausgelöst wird, gibt der Code ein Promise zurück, das zur ersten passenden Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird. Falls keine Übereinstimmung gefunden wird, holt der Code eine Antwort aus dem Netzwerk.

Der Code behandelt ebenfalls Ausnahmen, die von der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Operation geworfen werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z. B. 404) keine Ausnahme auslöst. Sie wird ein normales Antwortobjekt zurückgeben, in dem der entsprechende Fehlercode gesetzt ist.

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

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
