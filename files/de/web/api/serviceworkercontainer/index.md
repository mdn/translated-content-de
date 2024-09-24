---
title: ServiceWorkerContainer
slug: Web/API/ServiceWorkerContainer
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`ServiceWorkerContainer`**-Interface der [Service Worker API](/de/docs/Web/API/Service_Worker_API) stellt ein Objekt dar, das den Service Worker als Gesamteinheit in der Netzwerkinfrastruktur repräsentiert. Es bietet Möglichkeiten, Service Worker zu registrieren, zu deregistrieren, zu aktualisieren und den Status von Service Workern und deren Registrierungen abzurufen.

Am wichtigsten ist, dass es die Methode {{domxref("ServiceWorkerContainer.register()")}} bereitstellt, die zum Registrieren von Service Workern verwendet wird, und die Eigenschaft {{domxref("ServiceWorkerContainer.controller")}}, die verwendet wird, um zu bestimmen, ob die aktuelle Seite aktiv gesteuert wird.

Service Worker können derzeit nur im Window-Bereich in einigen oder allen Browsern registriert werden, da das `ServiceWorkerContainer`-Objekt nicht in {{domxref("DedicatedWorkerGlobalScope")}} und {{domxref("SharedWorkerGlobalScope")}} verfügbar ist. Überprüfen Sie die [Browser-Kompatibilität](#browser-kompatibilität) für weitere Informationen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("ServiceWorkerContainer.controller")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("ServiceWorker")}}-Objekt zurück, wenn dessen Zustand `activating` oder `activated` ist (dasselbe Objekt, das von {{domxref("ServiceWorkerRegistration.active")}} zurückgegeben wird). Diese Eigenschaft gibt `null` zurück, während einer erzwungenen Aktualisierungsanfrage (_Shift_ + Aktualisieren) oder wenn kein aktiver Worker vorhanden ist.
- {{domxref("ServiceWorkerContainer.ready")}} {{ReadOnlyInline}}
  - : Bietet eine Möglichkeit, die Code-Ausführung zu verzögern, bis ein Service Worker aktiv ist. Es gibt ein {{jsxref("Promise")}} zurück, das niemals ablehnt und unbegrenzt wartet, bis die mit der aktuellen Seite verknüpfte {{domxref("ServiceWorkerRegistration")}} einen {{domxref("ServiceWorkerRegistration.active")}} Worker hat. Sobald diese Bedingung erfüllt ist, wird es mit der {{domxref("ServiceWorkerRegistration")}} aufgelöst.

## Instanz-Methoden

- {{domxref("ServiceWorkerContainer.getRegistration()")}}
  - : Ruft ein {{domxref("ServiceWorkerRegistration")}}-Objekt ab, dessen Bereich mit der angegebenen Dokument-URL übereinstimmt. Die Methode gibt ein {{jsxref("Promise")}} zurück, das auf eine {{domxref("ServiceWorkerRegistration")}} oder `undefined` aufgelöst wird.
- {{domxref("ServiceWorkerContainer.getRegistrations()")}}
  - : Gibt alle {{domxref("ServiceWorkerRegistration")}}-Objekte zurück, die einem `ServiceWorkerContainer` in einem Array zugeordnet sind. Die Methode gibt ein {{jsxref("Promise")}} zurück, das auf ein Array von {{domxref("ServiceWorkerRegistration")}} aufgelöst wird.
- {{domxref("ServiceWorkerContainer.register()")}}
  - : Erstellt oder aktualisiert eine {{domxref("ServiceWorkerRegistration")}} für die angegebene `scriptURL`.
- {{domxref("ServiceWorkerContainer.startMessages()")}}
  - : Startet explizit den Nachrichtenfluss von einem Service Worker zu den von ihm kontrollierten Seiten (z. B. gesendet über {{domxref("Client.postMessage()")}}). Dies kann verwendet werden, um auf gesendete Nachrichten früher zu reagieren, sogar bevor der Inhalt der Seite vollständig geladen ist.

## Ereignisse

- {{domxref("ServiceWorkerContainer/controllerchange_event", "controllerchange")}}
  - : Tritt auf, wenn die dem Dokument zugeordnete {{domxref("ServiceWorkerRegistration")}} einen neuen {{domxref("ServiceWorkerRegistration.active", "aktiven")}} Worker erhält.
- {{domxref("ServiceWorkerContainer/error_event", "error")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Wird immer dann ausgelöst, wenn ein Fehler in den zugeordneten Service Workern auftritt.
- {{domxref("ServiceWorkerContainer/message_event", "message")}}
  - : Tritt auf, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt empfangen werden (z. B. über einen {{domxref("MessagePort.postMessage()")}}-Aufruf).
- {{domxref("ServiceWorkerContainer/messageerror_event", "messageerror")}}
  - : Tritt auf, wenn eingehende Nachrichten vom `ServiceWorkerContainer`-Objekt nicht deserialisiert werden können (z. B. über einen {{domxref("MessagePort.postMessage()")}}-Aufruf).

## Beispiele

Das folgende Beispiel prüft zunächst, ob der Browser Service Worker unterstützt. Wenn dies unterstützt wird, registriert der Code den Service Worker und bestimmt, ob die Seite aktiv vom Service Worker kontrolliert wird. Wenn nicht, wird der Benutzer aufgefordert, die Seite neu zu laden, damit der Service Worker die Kontrolle übernehmen kann. Der Code meldet auch alle Registrierungsfehler.

```js
if ("serviceWorker" in navigator) {
  // Register a service worker hosted at the root of the
  // site using the default scope.
  navigator.serviceWorker
    .register("/sw.js")
    .then((registration) => {
      console.log("Service worker registration succeeded:", registration);

      // At this point, you can optionally do something
      // with registration. See https://developer.mozilla.org/de/docs/Web/API/ServiceWorkerRegistration
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

- [Using Service Workers](/de/docs/Web/API/Service_Worker_API/Using_Service_Workers)
- [Beispielcode für grundlegende Service Worker](https://github.com/mdn/dom-examples/tree/main/service-worker/simple-service-worker)
- [Verwendung von Web Workern](/de/docs/Web/API/Web_Workers_API/Using_web_workers)
