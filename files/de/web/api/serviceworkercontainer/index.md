---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 981e2d17e897c6280fd27364746a34d8560d30d1
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`ServiceWorkerContainer`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet ein Objekt, das den Service Worker als gesamte Einheit im Netzwerk-Ökosystem repräsentiert. Es umfasst Funktionen zum Registrieren, Deregistrieren und Aktualisieren von Service Workern sowie den Zugriff auf den Status von Service Workern und deren Registrierungen.

Am wichtigsten ist, dass es die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) bereitstellt, die zum Registrieren von Service Workern verwendet wird, und die Eigenschaft [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller), mit der bestimmt wird, ob die aktuelle Seite aktiv gesteuert wird.

`ServiceWorkerContainer`-Objekte sind im Fensterbereich über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und in Arbeitern über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar (falls unterstützt — siehe [Browser-Kompatibilität](#browser-kompatibilität)).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) {{ReadOnlyInline}}
  - : Ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt, das den aktiven Service Worker repräsentiert, der die aktuelle Seite steuert, oder `null`, wenn die Seite keinen aktiven oder aktivierenden Service Worker hat.
- [`ServiceWorkerContainer.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird, die mit der aktuellen Seite verknüpft ist, jedoch nur, wenn ein aktiver Service Worker existiert.
    Dies bietet einen Mechanismus, um die Codeausführung zu verzögern, bis ein Service Worker aktiv ist.

## Instanz-Methoden

- [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration)
  - : Erhält ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt, dessen Geltungsbereich zur angegebenen Dokument-URL passt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) oder `undefined` aufgelöst wird.
- [`ServiceWorkerContainer.getRegistrations()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistrations)
  - : Gibt alle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekte zurück, die mit einem `ServiceWorkerContainer` in einem Array verknüpft sind. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem Array von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird.
- [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
  - : Erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.
- [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages)
  - : Startet ausdrücklich den Fluss von Nachrichten, die von einem Service Worker zu Seiten gesendet werden, die unter seiner Kontrolle stehen (z.B. gesendet über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann verwendet werden, um früher auf gesendete Nachrichten zu reagieren, noch bevor der Inhalt der Seite vollständig geladen ist.

## Ereignisse

- [`controllerchange`](/de/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : Wird ausgelöst, wenn die dem Dokument zugeordnete [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.
- [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt empfangen werden (z.B. über einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).
- [`messageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt nicht deserialisiert werden können (z.B. über einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).

## Beispiele

Das folgende Beispiel prüft zunächst, ob der Browser Service Worker unterstützt. Wenn Unterstützung vorhanden ist, registriert der Code den Service Worker und bestimmt, ob die Seite aktiv vom Service Worker gesteuert wird. Falls nicht, wird der Benutzer aufgefordert, die Seite neu zu laden, damit der Service Worker die Kontrolle übernehmen kann. Der Code meldet auch Registrierungsfehler.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service worker registration succeeded:", registration);

      // At this point, you can optionally do something
      // with registration. See https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration
    })
    .catch((error) => {
      console.error(`Service worker registration failed: ${error}`);
    });

  // Independent of the registration, let's also display
  // information about whether the current page is controlled
  // by an existing service worker, and when that
  // controller changes.

  // First, do a one-off check if there's currently a
  // service worker in control.
  if (navigator.serviceWorker.controller) {
    console.log(
      "This page is currently controlled by:",
      navigator.serviceWorker.controller,
    );
  }

  // Then, register a handler to detect when a new or
  // updated service worker takes control.
  navigator.serviceWorker.oncontrollerchange = () => {
    console.log(
      "This page is now controlled by",
      navigator.serviceWorker.controller,
    );
  };
} else {
  console.log("Service workers are not supported.");
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service-Worker-Code](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webarbeitern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
