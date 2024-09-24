---
title: ServiceWorkerGlobalScope
slug: Web/API/ServiceWorkerGlobalScope
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`ServiceWorkerGlobalScope`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) repräsentiert den globalen Ausführungskontext eines Service Workers.

Entwickler sollten beachten, dass der Zustand des ServiceWorkers nicht über den Beendigungs-/Neustartzyklus hinweg gespeichert wird; daher sollte jeder Ereignishandler annehmen, dass er mit einem leeren, standardmäßigen globalen Zustand aufgerufen wird.

Ein erfolgreich registrierter Service Worker kann und wird bei Inaktivität beendet, um Speicher und Prozessorleistung zu sparen. Ein aktiver Service Worker wird automatisch neu gestartet, um auf Ereignisse wie {{domxref("ServiceWorkerGlobalScope.fetch_event", "fetch")}} oder {{domxref("ServiceWorkerGlobalScope.message_event", "message")}} zu reagieren.

Zusätzlich sind synchrone Anfragen innerhalb eines Service Workers nicht erlaubt — es können nur asynchrone Anfragen, wie die über die {{domxref("WorkerGlobalScope/fetch", "fetch()")}}-Methode initiierten, verwendet werden.

Dieses Interface erbt vom {{domxref("WorkerGlobalScope")}}-Interface und dessen Eltern {{domxref("EventTarget")}}.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Dieses Interface erbt Eigenschaften vom {{domxref("WorkerGlobalScope")}}-Interface und dessen Eltern {{domxref("EventTarget")}}._

- {{domxref("ServiceWorkerGlobalScope.clients")}} {{ReadOnlyInline}}
  - : Enthält das mit dem Service Worker verknüpfte {{domxref("Clients")}}-Objekt.
- {{domxref("ServiceWorkerGlobalScope.cookieStore")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt eine Referenz auf das mit dem Service Worker verknüpfte {{domxref("CookieStore")}}-Objekt zurück.
- {{domxref("ServiceWorkerGlobalScope.registration")}} {{ReadOnlyInline}}
  - : Enthält das {{domxref("ServiceWorkerRegistration")}}-Objekt, das die Registrierung des Service Workers darstellt.
- {{domxref("ServiceWorkerGlobalScope.serviceWorker")}} {{ReadOnlyInline}}
  - : Enthält das {{domxref("ServiceWorker")}}-Objekt, das den Service Worker darstellt.

## Instanzmethoden

_Dieses Interface erbt Methoden vom {{domxref("WorkerGlobalScope")}}-Interface und dessen Eltern {{domxref("EventTarget")}}._

- {{domxref("ServiceWorkerGlobalScope.skipWaiting()")}}
  - : Ermöglicht es der aktuellen Service Worker-Registrierung, vom wartenden in den aktiven Zustand überzugehen, während Service Worker Clients sie verwenden.

## Ereignisse

Hören Sie dieses Ereignis mit {{domxref("EventTarget/addEventListener()", "addEventListener()")}} oder durch Zuweisen eines Ereignislisteners zur `oneventname`-Eigenschaft dieses Interfaces an.

- {{domxref("ServiceWorkerGlobalScope/activate_event", "activate")}}
  - : Tritt auf, wenn eine {{domxref("ServiceWorkerRegistration")}} einen neuen {{domxref("ServiceWorkerRegistration.active")}}-Worker erhält.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchabort_event", "backgroundfetchabort")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation vom Benutzer oder der App abgebrochen wurde.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchclick_event", "backgroundfetchclick")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn der Benutzer auf die Benutzeroberfläche für eine [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation klickt.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchfail_event", "backgroundfetchfail")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn mindestens eine der Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation fehlgeschlagen ist.
- {{domxref("ServiceWorkerGlobalScope/backgroundfetchsuccess_event", "backgroundfetchsuccess")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn alle Anfragen in einer [Background Fetch](/de/docs/Web/API/Background_Fetch_API)-Operation erfolgreich waren.
- {{domxref("ServiceWorkerGlobalScope/canmakepayment_event", "canmakepayment")}} {{Experimental_Inline}}
  - : Wird im Service Worker einer Zahlungs-App ausgelöst, um zu prüfen, ob sie bereit ist, eine Zahlung zu bearbeiten. Insbesondere wird es ausgelöst, wenn die Händlerwebsite den {{domxref("PaymentRequest.PaymentRequest", "PaymentRequest()")}}-Konstruktor aufruft.
- {{domxref("ServiceWorkerGlobalScope/contentdelete_event", "contentdelete")}} {{Experimental_Inline}}
  - : Tritt auf, wenn ein Element aus dem {{domxref("ContentIndex")}} entfernt wird.
- {{domxref("ServiceWorkerGlobalScope/cookiechange_event", "cookiechange")}} {{Experimental_Inline}}
  - : Wird ausgelöst, wenn eine Cookie-Änderung stattgefunden hat, die mit der Cookie-Änderungsabonnementliste des Service Workers übereinstimmt.
- {{domxref("ServiceWorkerGlobalScope/fetch_event", "fetch")}}
  - : Tritt auf, wenn ein {{domxref("WorkerGlobalScope/fetch", "fetch()")}} aufgerufen wird.
- {{domxref("ServiceWorkerGlobalScope/install_event", "install")}}
  - : Tritt auf, wenn eine {{domxref("ServiceWorkerRegistration")}} einen neuen {{domxref("ServiceWorkerRegistration.installing")}}-Worker erhält.
- {{domxref("ServiceWorkerGlobalScope/message_event", "message")}}
  - : Tritt auf, wenn eingehende Nachrichten empfangen werden. Kontrollierte Seiten können die {{domxref("MessagePort.postMessage()")}}-Methode verwenden, um Nachrichten an Service Workers zu senden.
- {{domxref("ServiceWorkerGlobalScope/messageerror_event", "messageerror")}}
  - : Tritt auf, wenn eingehende Nachrichten nicht deserialisiert werden können.
- {{domxref("ServiceWorkerGlobalScope/notificationclick_event", "notificationclick")}}
  - : Tritt auf, wenn ein Benutzer auf eine angezeigte Benachrichtigung klickt.
- {{domxref("ServiceWorkerGlobalScope/notificationclose_event", "notificationclose")}}
  - : Tritt auf, wenn ein Benutzer eine angezeigte Benachrichtigung schließt.
- {{domxref("ServiceWorkerGlobalScope/paymentrequest_event", "paymentrequest")}} {{Experimental_Inline}}
  - : Wird in einer Zahlungs-App ausgelöst, wenn ein Zahlungsablauf auf der Händlerwebsite über die {{domxref("PaymentRequest.show()")}}-Methode initiiert wurde.
- {{domxref("ServiceWorkerGlobalScope/sync_event", "sync")}}
  - : Wird ausgelöst, wenn von einer Service Worker Client-Seite ein Aufruf an {{domxref("SyncManager.register")}} vorgenommen wird. Der Versuch zu synchronisieren wird entweder sofort durchgeführt, wenn das Netzwerk verfügbar ist, oder sobald das Netzwerk verfügbar wird.
- {{domxref("ServiceWorkerGlobalScope/periodicsync_event", "periodicsync")}} {{Experimental_Inline}}
  - : Tritt in periodischen Intervallen auf, die bei der Registrierung eines {{domxref("PeriodicSyncManager")}} angegeben wurden.
- {{domxref("ServiceWorkerGlobalScope/push_event", "push")}}
  - : Tritt auf, wenn eine Server-Push-Benachrichtigung empfangen wird.
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}
  - : Tritt auf, wenn ein Push-Abonnement ungültig geworden ist oder kurz davor steht, ungültig zu werden (z.B. wenn ein Push-Dienst eine Ablaufzeit festlegt).

## Beispiele

Dieses Code-Beispiel stammt aus dem [Service Worker Prefetch-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/prefetch/service-worker.js) (siehe [Live-Prefetch-Beispiel](https://googlechrome.github.io/samples/service-worker/prefetch/).) Der {{domxref("ServiceWorkerGlobalScope.fetch_event", "onfetch")}}-Ereignishandler lauscht auf das `fetch`-Ereignis. Wenn es ausgelöst wird, gibt der Code ein Versprechen zurück, das sich in die erste passende Anfrage im {{domxref("Cache")}}-Objekt auflöst. Wenn keine Übereinstimmung gefunden wird, holt der Code eine Antwort aus dem Netzwerk.

Der Code behandelt auch Ausnahmen, die bei der {{domxref("WorkerGlobalScope/fetch", "fetch()")}}-Operation ausgelöst werden. Beachten Sie, dass eine HTTP-Fehlerantwort (z.B. 404) keine Ausnahme auslöst. Es wird ein normales Antwortobjekt zurückgegeben, das den entsprechenden Fehlercode enthält.

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

- [Service Workers verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispielcode für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
