---
title: ServiceWorker
slug: Web/API/ServiceWorker
l10n:
  sourceCommit: 583d48191a7a8605d831aff357bef6cc63aef2e3
---

{{securecontext_header}}{{APIRef("Service Workers API")}}{{AvailableInWorkers}}

Das **`ServiceWorker`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet eine Referenz auf einen Service Worker. Mehrere [Browsing-Kontexte](/de/docs/Glossary/browsing_context) (z. B. Seiten, Worker, etc.) können mit demselben Service Worker verbunden sein, jeder durch ein einzigartiges `ServiceWorker`-Objekt.

Ein `ServiceWorker`-Objekt ist über eine Reihe von Eigenschaften verfügbar:

- [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active)
- [`ServiceWorkerGlobalScope.serviceWorker`](/de/docs/Web/API/ServiceWorkerGlobalScope/serviceWorker)
- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) — wenn der Service Worker im Zustand `activating` oder `activated` ist
- [`ServiceWorkerRegistration.installing`](/de/docs/Web/API/ServiceWorkerRegistration/installing) — wenn der Service Worker im Zustand `installing` ist
- [`ServiceWorkerRegistration.waiting`](/de/docs/Web/API/ServiceWorkerRegistration/waiting) — wenn der Service Worker im Zustand `installed` ist

Das `ServiceWorker`-Interface löst eine Reihe von Lebenszyklusereignissen — `install` und `activate` — sowie funktionale Ereignisse inklusive `fetch` aus. Ein `ServiceWorker`-Objekt hat einen zugeordneten [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state), der sich auf seinen Lebenszyklus bezieht.

Service Worker erlauben die statische Einbindung von [ECMAScript-Modulen](/de/docs/Web/JavaScript/Guide/Modules), falls unterstützt, mittels [`import`](/de/docs/Web/JavaScript/Reference/Statements/import). Die dynamische Einbindung ist durch die Spezifikation untersagt — ein Aufruf von [`import()`](/de/docs/Web/JavaScript/Reference/Operators/import) wird einen Fehler auslösen.

Service Worker können nur im Window-Kontext in einigen oder allen Browsern registriert werden, da das `ServiceWorker`-Objekt nicht in [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) zur Verfügung steht. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Das `ServiceWorker`-Interface erbt Eigenschaften von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.scriptURL`](/de/docs/Web/API/ServiceWorker/scriptURL) {{ReadOnlyInline}}
  - : Gibt die serialisierte Skript-URL des `ServiceWorker` zurück, die als Teil der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) definiert ist. Die URL muss mit dem gleichen Ursprung wie das Dokument übereinstimmen, das den `ServiceWorker` registriert.
- [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) {{ReadOnlyInline}}
  - : Gibt den Zustand des Service Workers zurück. Es kann einen der folgenden Werte zurückgeben: `parsed`, `installing`, `installed`, `activating`, `activated` oder `redundant`.

## Instanz-Methoden

_Das `ServiceWorker`-Interface erbt Methoden von seinem Elternteil, [`EventTarget`](/de/docs/Web/API/EventTarget)._

- [`ServiceWorker.postMessage()`](/de/docs/Web/API/ServiceWorker/postMessage)
  - : Sendet eine Nachricht — bestehend aus einem beliebigen [struktur-klonbaren](/de/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) JavaScript-Objekt — an den Service Worker. Die Nachricht wird über ein [`message`](/de/docs/Web/API/ServiceWorkerGlobalScope/message_event)-Ereignis im globalen Kontext auf den Service Worker übertragen.

## Ereignisse

- [`statechange`](/de/docs/Web/API/ServiceWorker/statechange_event)

  - : Wird ausgelöst, wenn sich der [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) ändert.

- [`error`](/de/docs/Web/API/ServiceWorker/error_event)
  - : Wird ausgelöst, wenn ein Fehler innerhalb des `ServiceWorker`-Objekts auftritt.

## Beispiele

Dieser Codeausschnitt stammt aus dem [Beispiel für Service Worker-Registrierungsereignisse](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code überwacht jede Änderung im [`ServiceWorker.state`](/de/docs/Web/API/ServiceWorker/state) und gibt dessen Wert zurück.

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
- [Grundbeispiel für einen Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web-Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
