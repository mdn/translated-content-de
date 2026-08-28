---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`ServiceWorkerContainer`**-Schnittstelle der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet ein Objekt, das den Service Worker als eine Gesamteinheit im Netzwerk-Ökosystem darstellt. Dazu gehören Funktionen zum Registrieren, Deregistrieren und Aktualisieren von Service Workern sowie der Zugriff auf den Status von Service Workern und deren Registrierungen.

Am wichtigsten ist, dass sie die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) bereitstellt, die verwendet wird, um Service Worker zu registrieren, und die Eigenschaft [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller), die verwendet wird, um festzustellen, ob die aktuelle Seite aktiv kontrolliert wird.

`ServiceWorkerContainer`-Objekte sind im Windowscope über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und in Worker-Skripten über [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar (wenn unterstützt — siehe [Browser-Kompatibilität](#browser-kompatibilität)).

{{InheritanceDiagram}}

## Instanzen-Eigenschaften

- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) {{ReadOnlyInline}}
  - : Ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt, das den aktiven Service Worker repräsentiert, der die aktuelle Seite kontrolliert, oder `null`, wenn die Seite keinen aktiven oder aktivierenden Service Worker hat.
- [`ServiceWorkerContainer.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref('Promise')}} zurück, das mit der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird, die mit der aktuellen Seite verknüpft ist, aber nur, wenn ein aktiver Service Worker vorhanden ist.
    Dies bietet einen Mechanismus zum Aufschieben der Codeausführung, bis ein Service Worker aktiv ist.

## Instanzen-Methoden

- [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration)
  - : Ruft ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt ab, dessen Geltungsbereich mit der angegebenen Dokument-URL übereinstimmt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das auf eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) oder `undefined` aufgelöst wird.
- [`ServiceWorkerContainer.getRegistrations()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistrations)
  - : Gibt alle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekte zurück, die mit einem `ServiceWorkerContainer` in einem Array verbunden sind. Die Methode gibt ein {{jsxref("Promise")}} zurück, das auf ein Array von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird.
- [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
  - : Erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.
- [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages)
  - : Startet explizit den Nachrichtenfluss, der von einem Service Worker an Seiten unter seiner Kontrolle gesendet wird (z.B. gesendet über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, noch bevor der Inhalt dieser Seite vollständig geladen ist.

## Ereignisse

- [`controllerchange`](/de/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : Wird ausgelöst, wenn die mit dem Dokument verbundene [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`aktive`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.
- [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt empfangen werden (z.B. über einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).
- [`messageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt nicht deserialisiert werden können (z.B. über einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).

## Beispiele

Das folgende Beispiel überprüft zunächst, ob der Browser Service Worker unterstützt. Wenn ja, registriert der Code den Service Worker und bestimmt, ob die Seite aktiv von diesem kontrolliert wird. Wenn nicht, wird der Benutzer aufgefordert, die Seite neu zu laden, damit der Service Worker die Kontrolle übernehmen kann. Der Code meldet auch Registrierungsfehler.

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
- [Grundlegendes Code-Beispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Webworkern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
