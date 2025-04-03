---
title: ServiceWorker
slug: Web/API/ServiceWorker
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

Die **`ServiceWorker`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet eine Referenz auf einen Service Worker. Mehrere {{Glossary("browsing_context", "Browsing-Kontexte")}} (z.B. Seiten, Worker, usw.) können mit demselben Service Worker verbunden sein, jeder durch ein einzigartiges `ServiceWorker`-Objekt.

Ein `ServiceWorker`-Objekt ist über verschiedene Eigenschaften verfügbar:

- [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active)
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker)
- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) — wenn sich der Service Worker im Zustand `activating` oder `activated` befindet
- [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) — wenn sich der Service Worker im Zustand `installing` befindet
- [`ServiceWorkerRegistration.waiting`](/de/docs/Web/API/ServiceWorkerRegistration/waiting) — wenn sich der Service Worker im Zustand `installed` befindet

Die Eigenschaft [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) und das [`statechanged`-Ereignis](/de/docs/Web/API/ServiceWorker/statechange_event) können verwendet werden, um Änderungen im Lebenszyklusstatus des zugehörigen Service Workers zu überprüfen und zu beobachten. Verwandte Lebenszyklusereignisse wie [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event) werden am Service Worker selbst ausgelöst.

Service Worker erlauben den statischen Import von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), falls unterstützt, mittels [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
Dynamischer Import ist durch die Spezifikation nicht erlaubt – ein Aufruf von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) führt zu einem Fehler.

Service Worker können nur im Window-Bereich in einigen oder allen Browsern registriert werden, da das `ServiceWorker`-Objekt nicht im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar ist.
Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Die `ServiceWorker`-Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.scriptURL`](/de/docs/Web/API/ServiceWorker/scriptURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte Script-URL des `ServiceWorker` zurück, die als Teil der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) definiert ist. Die URL muss auf demselben Ursprung wie das Dokument liegen, das den `ServiceWorker` registriert.
- [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) {{ReadOnlyInline}}
  - : Gibt den Zustand des Service Workers zurück. Es gibt einen der folgenden Werte zurück: `parsed`, `installing`, `installed`, `activating`, `activated` oder `redundant`.

## Instanzmethoden

_Die `ServiceWorker`-Schnittstelle erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage)
  - : Sendet eine Nachricht — bestehend aus einem beliebigen [strukturiert-klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) JavaScript-Objekt — an den Service Worker. Die Nachricht wird über ein [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis in ihrem globalen Bereich an den Service Worker übermittelt.

## Ereignisse

- [`statechange`](/de/docs/Web/API/ServiceWorker/statechange_event)

  - : Wird ausgelöst, wenn sich der Zustand des [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) ändert.

- [`error`](/de/docs/Web/API/ServiceWorker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im `ServiceWorker`-Objekt auftritt.

## Beispiele

Dieser Code-Snippet stammt aus dem [Beispiel für Service Worker-Registrierungsereignisse](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code lauscht auf jede Änderung im [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) und gibt dessen Wert zurück.

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

- [The Offline Cookbook](https://web.dev/articles/offline-cookbook) (Service Worker)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Einfaches Beispielcode für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
