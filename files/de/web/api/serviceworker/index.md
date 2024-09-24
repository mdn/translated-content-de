---
title: ServiceWorker
slug: Web/API/ServiceWorker
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

Das **`ServiceWorker`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet eine Referenz zu einem Service Worker. Mehrere {{glossary("browsing context", "browsing contexts")}} (z.B. Seiten, Worker usw.) können mit demselben Service Worker verbunden sein, jeweils über ein einzigartiges `ServiceWorker`-Objekt.

Ein `ServiceWorker`-Objekt ist über mehrere Eigenschaften verfügbar:

- {{domxref("ServiceWorkerRegistration.active")}}
- {{domxref("ServiceWorkerGlobalScope.serviceWorker")}}
- {{domxref("ServiceWorkerContainer.controller")}} — wenn der Service Worker im Zustand `activating` oder `activated` ist
- {{domxref("ServiceWorkerRegistration.installing")}} — wenn der Service Worker im Zustand `installing` ist
- {{domxref("ServiceWorkerRegistration.waiting")}} — wenn der Service Worker im Zustand `installed` ist

Das `ServiceWorker`-Interface wird eine Reihe von Lebenszyklus-Events — `install` und `activate` — sowie funktionale Events wie `fetch` übermittelt. Ein `ServiceWorker`-Objekt hat einen zugehörigen {{domxref("ServiceWorker.state")}}, der sich auf seinen Lebenszyklus bezieht.

Service Worker ermöglichen den statischen Import von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), falls unterstützt, mit [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
Dynamischer Import ist durch die Spezifikation nicht erlaubt — der Aufruf von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler auslösen.

Service Worker können nur im Window-Bereich in einigen oder allen Browsern registriert werden, da das `ServiceWorker`-Objekt nicht im {{domxref("DedicatedWorkerGlobalScope")}} und {{domxref("SharedWorkerGlobalScope")}} verfügbar ist.
Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für Informationen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Das `ServiceWorker`-Interface erbt Eigenschaften von seiner Elternklasse, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.scriptURL")}} {{ReadOnlyInline}}
  - : Gibt die serialisierte Skript-URL des `ServiceWorker` zurück, die als Teil der {{domxref("ServiceWorkerRegistration")}} definiert ist. Die URL muss im selben Ursprung wie das Dokument sein, das den `ServiceWorker` registriert.
- {{domxref("ServiceWorker.state")}} {{ReadOnlyInline}}
  - : Gibt den Zustand des Service Workers zurück. Es gibt einen der folgenden Werte zurück: `parsed`, `installing`, `installed`, `activating`, `activated` oder `redundant`.

## Instanzmethoden

_Das `ServiceWorker`-Interface erbt Methoden von seiner Elternklasse, {{domxref("EventTarget")}}._

- {{domxref("ServiceWorker.postMessage()")}}
  - : Sendet eine Nachricht — bestehend aus einem beliebigen [strukturiert klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) JavaScript-Objekt — an den Service Worker. Die Nachricht wird an den Service Worker unter Verwendung eines {{domxref("ServiceWorkerGlobalScope.message_event", "message")}}-Events in seinem globalen Bereich übertragen.

## Events

- {{domxref("ServiceWorker.statechange_event", "statechange")}}

  - : Wird ausgelöst, wenn sich {{domxref("ServiceWorker.state")}} ändert.

- {{domxref("ServiceWorker.error_event", "error")}}
  - : Wird ausgelöst, wenn ein Fehler im `ServiceWorker`-Objekt auftritt.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Beispiel zur Registrierung von Service-Worker-Ereignissen](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code lauscht auf jede Änderung im {{domxref("ServiceWorker.state")}} und gibt dessen Wert zurück.

```js
if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("service-worker.js", {
      scope: "./",
    })
    .then((registration) => {
      let serviceWorker;
      if (registration.installing) {
        serviceWorker = registration.installing;
        document.querySelector("#kind").textContent = "installing";
      } else if (registration.waiting) {
        serviceWorker = registration.waiting;
        document.querySelector("#kind").textContent = "waiting";
      } else if (registration.active) {
        serviceWorker = registration.active;
        document.querySelector("#kind").textContent = "active";
      }
      if (serviceWorker) {
        // logState(serviceWorker.state);
        serviceWorker.addEventListener("statechange", (e) => {
          // logState(e.target.state);
        });
      }
    })
    .catch((error) => {
      // Something went wrong during registration. The service-worker.js file
      // might be unavailable or contain a syntax error.
    });
} else {
  // The current browser doesn't support service workers.
  // Perhaps it is too old or we are not in a Secure Context.
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Das Offline-Kochbuch](https://web.dev/articles/offline-cookbook) (Service Worker)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Service-Worker-Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
