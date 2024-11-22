---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 5d29bef0815f8cc4b5b152b9ee1ab53f002ee617
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`ServiceWorkerContainer`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerkökosystem darstellt. Es umfasst Möglichkeiten zur Registrierung, Deregistrierung und Aktualisierung von Service Workern sowie zum Zugriff auf den Status der Service Worker und deren Registrierungen.

Am wichtigsten ist, dass es die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) bereitstellt, die zur Registrierung von Service Workern verwendet wird, und die Eigenschaft [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller), die bestimmt, ob die aktuelle Seite aktiv gesteuert wird.

`ServiceWorkerContainer`-Objekte sind im Fensterscope über [`Navigator.serviceWorker`](/de/docs/Web/API/Navigator/serviceWorker) und in Worker-Threads mithilfe von [`WorkerNavigator.serviceWorker`](/de/docs/Web/API/WorkerNavigator/serviceWorker) verfügbar (falls unterstützt - siehe [Browser-Kompatibilität](#browser-kompatibilität)).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) {{ReadOnlyInline}}
  - : Gibt ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt zurück, wenn dessen Status `activating` oder `activated` ist (dasselbe Objekt, das von [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) zurückgegeben wird). Diese Eigenschaft gibt `null` zurück während einer erzwungenen Neuladung (_Shift_ + Aktualisieren) oder wenn kein aktiver Worker vorhanden ist.
- [`ServiceWorkerContainer.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit, die Ausführung von Code zu verzögern, bis ein Service Worker aktiv ist. Es liefert ein {{jsxref("Promise")}} zurück, das niemals abgelehnt wird und unbegrenzt wartet, bis die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) der aktuellen Seite einen aktiven [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker hat. Sobald diese Bedingung erfüllt ist, wird es mit der [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst.

## Instanz-Methoden

- [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration)
  - : Ruft ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt ab, dessen Scope mit der angegebenen Dokument-URL übereinstimmt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) oder `undefined` aufgelöst wird.
- [`ServiceWorkerContainer.getRegistrations()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistrations)
  - : Gibt alle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekte zurück, die mit einem `ServiceWorkerContainer` in einem Array verbunden sind. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem Array von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird.
- [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
  - : Erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.
- [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages)
  - : Startet explizit den Nachrichtenfluss, der von einem Service Worker an die von ihm kontrollierten Seiten gesendet wird (z.B. gesendet über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, noch bevor der Inhalts der Seite vollständig geladen ist.

## Ereignisse

- [`controllerchange`](/de/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : Wird ausgelöst, wenn die der Seite zugeordnete [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erwirbt.
- [`error`](/de/docs/Web/API/ServiceWorkerContainer/error_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn ein Fehler in den zugeordneten Service Workern auftritt.
- [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten von dem `ServiceWorkerContainer`-Objekt empfangen werden (z.B. durch einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).
- [`messageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event)
  - : Wird ausgelöst, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt nicht deserialisiert werden können (z.B. durch einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).

## Beispiele

Im folgenden Beispiel wird zunächst überprüft, ob der Browser Service Worker unterstützt. Wenn unterstützt, registriert der Code den Service Worker und bestimmt, ob die Seite aktiv vom Service Worker gesteuert wird. Falls nicht, wird der Benutzer aufgefordert, die Seite neu zu laden, damit der Service Worker die Kontrolle übernehmen kann. Der Code meldet auch alle Registrierungsfehler.

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

- [Verwenden von Service Workern](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Service Worker Basis-Codebeispiel](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwenden von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
