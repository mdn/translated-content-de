---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`ServiceWorkerContainer`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) bietet ein Objekt, das den Service Worker als Gesamteinheit im Netzwerk-Ökosystem darstellt. Es umfasst Funktionen zum Registrieren, Deregistrieren und Aktualisieren von Service Workern sowie zum Abrufen des Zustands von Service Workern und ihrer Registrierungen.

Wichtig ist, dass es die Methode [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register) bereitstellt, die zum Registrieren von Service Workern verwendet wird, und die Eigenschaft [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller), die bestimmt, ob die aktuelle Seite aktiv gesteuert wird.

Service Worker können derzeit nur im Fensterbereich in einigen oder allen Browsern registriert werden, da das `ServiceWorkerContainer`-Objekt nicht im [`DedicatedWorkerGlobalScope`](/de/docs/Web/API/DedicatedWorkerGlobalScope) und [`SharedWorkerGlobalScope`](/de/docs/Web/API/SharedWorkerGlobalScope) verfügbar ist. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`ServiceWorkerContainer.controller`](/de/docs/Web/API/ServiceWorkerContainer/controller) {{ReadOnlyInline}}
  - : Gibt ein [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Objekt zurück, wenn sein Zustand `activating` oder `activated` ist (dasselbe Objekt, das von [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) zurückgegeben wird). Diese Eigenschaft gibt `null` während einer erzwungenen Aktualisierungsanfrage (_Shift_ + Aktualisieren) oder wenn kein aktiver Worker vorhanden ist, zurück.
- [`ServiceWorkerContainer.ready`](/de/docs/Web/API/ServiceWorkerContainer/ready) {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit, die Codeausführung zu verzögern, bis ein Service Worker aktiv ist. Es gibt ein {{jsxref("Promise")}} zurück, das niemals fehlschlägt und unbegrenzt wartet, bis die [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration), die mit der aktuellen Seite verknüpft ist, einen aktiven Worker [`ServiceWorkerRegistration.active`](/de/docs/Web/API/ServiceWorkerRegistration/active) hat. Sobald diese Bedingung erfüllt ist, wird es mit der jeweiligen [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst.

## Instanzmethoden

- [`ServiceWorkerContainer.getRegistration()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistration)
  - : Ruft ein [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekt ab, dessen Bereich mit der bereitgestellten Dokument-URL übereinstimmt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das entweder zu einer [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) oder `undefined` aufgelöst wird.
- [`ServiceWorkerContainer.getRegistrations()`](/de/docs/Web/API/ServiceWorkerContainer/getRegistrations)
  - : Gibt alle [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration)-Objekte zurück, die mit einem `ServiceWorkerContainer` in einem Array verknüpft sind. Die Methode gibt ein {{jsxref("Promise")}} zurück, das zu einem Array von [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) aufgelöst wird.
- [`ServiceWorkerContainer.register()`](/de/docs/Web/API/ServiceWorkerContainer/register)
  - : Erstellt oder aktualisiert eine [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) für die angegebene `scriptURL`.
- [`ServiceWorkerContainer.startMessages()`](/de/docs/Web/API/ServiceWorkerContainer/startMessages)
  - : Startet ausdrücklich den Fluss von Nachrichten, die von einem Service Worker an die von ihm kontrollierten Seiten gesendet werden (z. B. über [`Client.postMessage()`](/de/docs/Web/API/Client/postMessage)). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, selbst bevor der Inhalt der Seite vollständig geladen ist.

## Ereignisse

- [`controllerchange`](/de/docs/Web/API/ServiceWorkerContainer/controllerchange_event)
  - : Tritt auf, wenn die mit dem Dokument verknüpfte [`ServiceWorkerRegistration`](/de/docs/Web/API/ServiceWorkerRegistration) einen neuen [`active`](/de/docs/Web/API/ServiceWorkerRegistration/active) Worker erhält.
- [`error`](/de/docs/Web/API/ServiceWorkerContainer/error_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird ausgelöst, wenn in den zugehörigen Service Workern ein Fehler auftritt.
- [`message`](/de/docs/Web/API/ServiceWorkerContainer/message_event)
  - : Tritt auf, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt empfangen werden (z. B. durch einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).
- [`messageerror`](/de/docs/Web/API/ServiceWorkerContainer/messageerror_event)
  - : Tritt auf, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt nicht deserialisiert werden können (z. B. durch einen Aufruf von [`MessagePort.postMessage()`](/de/docs/Web/API/MessagePort/postMessage)).

## Beispiele

Das folgende Beispiel prüft zunächst, ob der Browser Service Worker unterstützt. Wenn dies der Fall ist, registriert der Code den Service Worker und bestimmt, ob die Seite aktiv vom Service Worker gesteuert wird. Wenn nicht, wird der Benutzer aufgefordert, die Seite zu aktualisieren, damit der Service Worker die Kontrolle übernehmen kann. Der Code meldet auch Registrierungsfehler.

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
- [Grundlegendes Codebeispiel für Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
