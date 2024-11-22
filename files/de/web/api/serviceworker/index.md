---
title: ServiceWorker
slug: Web/API/ServiceWorker
l10n:
  sourceCommit: 5d29bef0815f8cc4b5b152b9ee1ab53f002ee617
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

Die **`ServiceWorker`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet eine Referenz zu einem Service Worker. Mehrere {{Glossary("browsing_context", "Browsing-Kontexte")}} (z. B. Seiten, Worker, etc.) können mit demselben Service Worker verbunden sein, jeder durch ein einzigartiges `ServiceWorker`-Objekt.

Ein `ServiceWorker`-Objekt ist über eine Reihe von Eigenschaften verfügbar:

- [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active)
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker)
- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) — wenn der Service Worker sich im `activating`- oder `activated`-Zustand befindet
- [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) — wenn der Service Worker sich im `installing`-Zustand befindet
- [`ServiceWorkerRegistration.waiting`](/de/docs/Web/API/ServiceWorkerRegistration/waiting) — wenn der Service Worker sich im `installed`-Zustand befindet

Die [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state)-Eigenschaft und das [`statechanged`-Ereignis](/de/docs/Web/API/ServiceWorker/statechange_event) können verwendet werden, um Änderungen im Lebenszyklus-Zustand des zugehörigen Service Workers des Objekts zu überprüfen und zu beobachten.
Verwandte Lebenszyklusereignisse, wie [`install`](/de/docs/Web/API/ServiceWorkerGlobalScope/install_event) und [`activate`](/de/docs/Web/API/ServiceWorkerGlobalScope/activate_event), werden am Service Worker selbst ausgelöst.

Service Worker erlauben, falls unterstützt, die statische Einbindung von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules) mittels [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
Dynamischer Import ist durch die Spezifikation verboten — der Aufruf von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler werfen.

Service Worker können nur im Fensterscope in einigen oder allen Browsern registriert werden, da das `ServiceWorker`-Objekt nicht zu [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) freigegeben wird.
Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für Informationen.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Die `ServiceWorker`-Schnittstelle erbt Eigenschaften von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.scriptURL`](/de/docs/Web/API/ServiceWorker/scriptURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte Skript-URL des `ServiceWorker` zurück, die als Teil von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) definiert ist. Die URL muss auf demselben Ursprung wie das Dokument sein, das den `ServiceWorker` registriert.
- [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) {{ReadOnlyInline}}
  - : Gibt den Zustand des Service Workers zurück. Es gibt einen der folgenden Werte zurück: `parsed`, `installing`, `installed`, `activating`, `activated` oder `redundant`.

## Instanzmethoden

_Die `ServiceWorker`-Schnittstelle erbt Methoden von ihrem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage)
  - : Sendet eine Nachricht — bestehend aus einem beliebigen [strukturell-klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) JavaScript-Objekt — an den Service Worker. Die Nachricht wird mittels eines [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignisses an dessen globalem Scope zum Service Worker übertragen.

## Ereignisse

- [`statechange`](/de/docs/Web/API/ServiceWorker/statechange_event)

  - : Wird ausgelöst, wenn sich [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) ändert.

- [`error`](/de/docs/Web/API/ServiceWorker/error_event)
  - : Wird ausgelöst, wenn innerhalb des `ServiceWorker`-Objekts ein Fehler auftritt.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Service Worker Registration-Events-Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code hört auf jede Änderung in [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) und gibt dessen Wert zurück.

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

- [The Offline Cookbook](https://web.dev/articles/offline-cookbook) (Service Workers)
- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
