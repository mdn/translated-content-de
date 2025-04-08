---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 81d713ef85ba3bd918922f40a25789ce7e264b30
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`ServiceWorkerContainer`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) stellt ein Objekt dar, das den Service Worker als Gesamteinheit im Netzwerk-Ökosystem repräsentiert, inklusive Funktionen zum Registrieren, Deregistrieren und Aktualisieren von Service Workern sowie zum Zugriff auf den Status der Service Worker und ihrer Registrierungen.

Am wichtigsten ist, dass es die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) zum Registrieren von Service Workern bereitstellt und die Eigenschaft [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) verwendet wird, um festzustellen, ob die aktuelle Seite aktiv gesteuert wird.

`ServiceWorkerContainer`-Objekte werden im Fensterbereich über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und in Workern mithilfe von [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) bereitgestellt (falls unterstützt — siehe [Browser-Kompatibilität](#browser-kompatibilität)).

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) {{ReadOnlyInline}}
  - : Gibt ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt zurück, wenn sein Status `activating` oder `activated` ist (dasselbe Objekt, das von [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) zurückgegeben wird). Diese Eigenschaft gibt `null` zurück während einer erzwungenen Aktualisierungsanfrage (_Shift_ + Aktualisierung) oder wenn kein aktiver Worker vorhanden ist.
- [`ServiceWorkerContainer.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit, die Codeausführung zu verzögern, bis ein Service Worker aktiv ist. Es gibt ein {{jsxref("Promise")}} zurück, das niemals abgelehnt wird und das unbegrenzt wartet, bis die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die mit der aktuellen Seite verknüpft ist, einen [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker hat. Sobald diese Bedingung erfüllt ist, wird sie mit der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst.

## Instanzmethoden

- [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration)
  - : Ruft ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt ab, dessen Umfang mit der angegebenen Dokument-URL übereinstimmt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) oder `undefined` aufgelöst wird.
- [`ServiceWorkerContainer.getRegistrations()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistrations)
  - : Gibt alle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekte zurück, die mit einem `ServiceWorkerContainer` in einem Array verknüpft sind. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem Array von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird.
- [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
  - : Erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.
- [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages)
  - : Startet explizit den Nachrichtenfluss, der von einem Service Worker an die von ihm kontrollierten Seiten gesendet wird (z. B. gesendet über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, noch bevor der Inhalt dieser Seite vollständig geladen wurde.

## Ereignisse

- [`controllerchange`](/de/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : Wird ausgelöst, wenn die mit dem Dokument verknüpfte [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.
- [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt empfangen werden (z. B. über einen [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Aufruf).
- [`messageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten nicht vom `ServiceWorkerContainer`-Objekt deserialisiert werden können (z. B. über einen [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)-Aufruf).

## Beispiele

Im folgenden Beispiel wird zunächst überprüft, ob der Browser Service Worker unterstützt. Wenn dies der Fall ist, registriert der Code den Service Worker und stellt fest, ob die Seite aktiv vom Service Worker gesteuert wird. Falls nicht, wird der Benutzer aufgefordert, die Seite neu zu laden, damit der Service Worker die Kontrolle übernehmen kann. Der Code meldet auch Registrierungsfehler.

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

- [Service Worker verwenden](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Grundlegendes Beispiel für Service Workers](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Web Workers verwenden](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
