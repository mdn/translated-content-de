---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
l10n:
  sourceCommit: 828ae6eee278f30c3fa3677a74915d28d9e338b2
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Die **`ServiceWorkerGlobalScope`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert den globalen Ausführungskontext eines Service Workers.

Entwickler sollten berücksichtigen, dass der Zustand eines ServiceWorkers nicht über den Beenden-/Neustartszyklus beibehalten wird. Jedes Ereignishandling sollte davon ausgehen, dass es mit einem nackten, standardmäßigen globalen Zustand aufgerufen wird.

Einmal erfolgreich registriert, kann und wird ein Service Worker terminiert werden, wenn er im Leerlauf ist, um Speicher und Prozessorleistung zu sparen. Ein aktiver Service Worker wird automatisch neu gestartet, um auf Ereignisse wie [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event) oder [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event) zu reagieren.

Zusätzlich sind synchrone Anfragen innerhalb eines Service Workers nicht erlaubt — es können nur asynchrone Anfragen, wie die über die [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Methode initiierten, verwendet werden.

Diese Schnittstelle erbt von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle und ihrem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Diese Schnittstelle erbt Eigenschaften von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle und ihrem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.clients`](/de/docs/Web/API/ServiceWorkerGlobalScope/clients) {{ReadOnlyInline}}
  - : Enthält das [`Clients`](/de/docs/Web/API/Clients)-Objekt, das dem Service Worker zugeordnet ist.
- [`ServiceWorkerGlobalScope.cookieStore`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookieStore) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf das [`CookieStore`](/de/docs/Web/API/CookieStore)-Objekt zurück, das dem Service Worker zugeordnet ist.
- [`ServiceWorkerGlobalScope.registration`](/de/docs/Web/API/ServiceWorkerGlobalScope/registration) {{ReadOnlyInline}}
  - : Enthält das [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt, das die Registrierung des Service Workers darstellt.
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker) {{ReadOnlyInline}}
  - : Enthält das [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt, das den Service Worker darstellt.

## Instanz-Methoden

_Diese Schnittstelle erbt Methoden von der [`WorkerGlobalScope`](/de/docs/Web/API/WorkerGlobalScope)-Schnittstelle und ihrem Elternteil [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorkerGlobalScope.skipWaiting()`](/de/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting)
  - : Ermöglicht es der aktuellen Service Worker-Registrierung, vom Wartezustand in den aktiven Zustand überzugehen, während es von Service Worker-Clients verwendet wird.

## Ereignisse

Hören Sie auf dieses Ereignis mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder durch Zuweisung eines Ereignis-Listeners zur `oneventname`-Eigenschaft dieser Schnittstelle.

- [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erwirbt.
- [`backgroundfetchabort`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchabort_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API)-Vorgang vom Benutzer oder der App abgebrochen wurde.
- [`backgroundfetchclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchclick_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn ein Benutzer auf die Benutzeroberfläche für einen [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API)-Vorgang geklickt hat.
- [`backgroundfetchfail`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchfail_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einem [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API)-Vorgang fehlgeschlagen ist.
- [`backgroundfetchsuccess`](/de/docs/Web/API/ServiceWorkerGlobalScope/backgroundfetchsuccess_event) {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einem [Hintergrundabruf](/de/docs/Web/API/Background_Fetch_API)-Vorgang erfolgreich waren.
- [`canmakepayment`](/de/docs/Web/API/ServiceWorkerGlobalScope/canmakepayment_event) {{Experimental_Inline}}
  - : Wird auf dem Service Worker einer Payment-App ausgelöst, um zu prüfen, ob sie bereit ist, eine Zahlung abzuwickeln. Konkreter wird es ausgelöst, wenn die Händler-Website den [`PaymentRequest()`](/de/docs/Web/API/PaymentRequest/PaymentRequest)-Konstruktor aufruft.
- [`contentdelete`](/de/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event) {{Experimental_Inline}}
  - : Tritt auf, wenn ein Element aus dem [`ContentIndex`](/de/docs/Web/API/ContentIndex) entfernt wird.
- [`cookiechange`](/de/docs/Web/API/ServiceWorkerGlobalScope/cookiechange_event)
  - : Wird ausgelöst, wenn eine Cookie-Änderung erfolgt, die mit der Cookie-Änderungs-Abonnementliste des Service Workers übereinstimmt.
- [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)
  - : Tritt auf, wenn ein [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch) aufgerufen wird.
- [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - : Tritt auf, wenn eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) Worker erwirbt.
- [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - : Tritt auf, wenn eingehende Nachrichten empfangen werden. Kontrollierte Seiten können die [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Methode verwenden, um Nachrichten an Service Worker zu senden.
- [`messageerror`](/de/docs/Web/API/ServiceWorkerGlobalScope/messageerror_event)
  - : Tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.
- [`notificationclick`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte Benachrichtigung klickt.
- [`notificationclose`](/de/docs/Web/API/ServiceWorkerGlobalScope/notificationclose_event)
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- [`paymentrequest`](/de/docs/Web/API/ServiceWorkerGlobalScope/paymentrequest_event) {{Experimental_Inline}}
  - : Wird auf einer Payment-App ausgelöst, wenn ein Zahlungsablauf auf der Händler-Website über die [`PaymentRequest.show()`](/de/docs/Web/API/PaymentRequest/show)-Methode initiiert wurde.
- [`sync`](/de/docs/Web/API/ServiceWorkerGlobalScope/sync_event)
  - : Wird ausgelöst, wenn ein Aufruf an [`SyncManager.register`](/de/docs/Web/API/SyncManager/register) von einer Service Worker-Clientseite ausgelöst wird. Der Versuch, zu synchronisieren, wird entweder sofort unternommen, wenn das Netzwerk verfügbar ist, oder sobald das Netzwerk verfügbar wird.
- [`periodicsync`](/de/docs/Web/API/ServiceWorkerGlobalScope/periodicsync_event) {{Experimental_Inline}}
  - : Tritt in regelmäßigen Abständen auf, die bei der Registrierung eines [`PeriodicSyncManager`](/de/docs/Web/API/PeriodicSyncManager) angegeben wurden.
- [`push`](/de/docs/Web/API/ServiceWorkerGlobalScope/push_event)
  - : Tritt auf, wenn eine Push-Benachrichtigung vom Server empfangen wird.
- [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - : Tritt auf, wenn ein Push-Abonnement ungültig geworden ist oder kurz davor ist, ungültig zu werden (z. B. wenn ein Push-Dienst eine Ablaufzeit festlegt).

## Beispiele

Dieses Codebeispiel stammt aus dem [Service Worker Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Prefetch-Beispiel live](https://googlechrome.github.io/samples/service-worker/prefetch/)). Der [`onfetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler horcht auf das `fetch`-Ereignis. Wenn es ausgelöst wird, gibt der Code ein Versprechen zurück, das in die erste übereinstimmende Anfrage im [`Cache`](/de/docs/Web/API/Cache)-Objekt aufgelöst wird. Wenn keine Übereinstimmung gefunden wird, holt der Code eine Antwort aus dem Netzwerk.

Der Code behandelt auch Ausnahmen, die von der [`fetch()`](/de/docs/Web/API/WorkerGlobalScope/fetch)-Operation ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z. B. 404) keine Ausnahme auslöst. Es wird ein normales Antwortobjekt zurückgegeben, das den entsprechenden Fehlercode gesetzt hat.

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

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
