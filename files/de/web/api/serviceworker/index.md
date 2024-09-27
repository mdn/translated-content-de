---
title: ServiceWorker
slug: Web/API/ServiceWorker
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

Das **`ServiceWorker`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet eine Referenz auf einen Service Worker. Mehrere [Browser-Kontexte](/de/docs/Glossary/browsing_context) (z.B. Seiten, Worker usw.) können mit demselben Service Worker verbunden sein, jeweils durch ein einzigartiges `ServiceWorker`-Objekt.

Ein `ServiceWorker`-Objekt ist über eine Reihe von Eigenschaften verfügbar:

- [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active)
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker)
- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) — wenn der Service Worker sich im Zustand `activating` oder `activated` befindet
- [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) — wenn der Service Worker sich im Zustand `installing` befindet
- [`ServiceWorkerRegistration.waiting`](/de/docs/Web/API/ServiceWorkerRegistration/waiting) — wenn der Service Worker sich im Zustand `installed` befindet

Das `ServiceWorker`-Interface löst eine Reihe von Lebenszyklus-Ereignissen aus — `install` und `activate` — sowie funktionale Ereignisse einschließlich `fetch`. Ein `ServiceWorker`-Objekt hat einen zugehörigen [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state), der mit seinem Lebenszyklus verbunden ist.

Service Worker erlauben den statischen Import von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), sofern unterstützt, durch Verwendung von [`import`](/de/docs/Web/JavaScript/Reference/Statements/import).
Dynamischer Import ist durch die Spezifikation nicht erlaubt — der Aufruf von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler werfen.

Service Worker können in einigen oder allen Browsern nur im Fensterbereich registriert werden, da das `ServiceWorker`-Objekt nicht für [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) freigelegt ist.
Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `ServiceWorker`-Interface erbt Eigenschaften von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.scriptURL`](/de/docs/Web/API/ServiceWorker/scriptURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte Skript-URL des `ServiceWorker` zurück, die als Teil von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) definiert ist. Die URL muss dieselbe Herkunft haben wie das Dokument, das den `ServiceWorker` registriert.
- [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) {{ReadOnlyInline}}
  - : Gibt den Zustand des Service Workers zurück. Es gibt einen der folgenden Werte zurück: `parsed`, `installing`, `installed`, `activating`, `activated` oder `redundant`.

## Instanz-Methoden

_Das `ServiceWorker`-Interface erbt Methoden von seinem übergeordneten Interface, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage)
  - : Sendet eine Nachricht — bestehend aus einem beliebigen [strukturiert klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) JavaScript-Objekt — an den Service Worker. Die Nachricht wird über ein [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis in seinem globalen Bereich an den Service Worker übermittelt.

## Ereignisse

- [`statechange`](/de/docs/Web/API/ServiceWorker/statechange_event)

  - : Wird ausgelöst, wenn sich der [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) ändert.

- [`error`](/de/docs/Web/API/ServiceWorker/error_event)
  - : Wird ausgelöst, wenn ein Fehler im `ServiceWorker`-Objekt auftritt.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Beispiel zu Service Worker Registrierungs-Ereignissen](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code hört auf jede Änderung im [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) und gibt dessen Wert zurück.

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
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
