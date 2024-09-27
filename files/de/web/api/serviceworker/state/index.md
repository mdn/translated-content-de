---
title: "ServiceWorker: state-Eigenschaft"
short-title: state
slug: Web/API/ServiceWorker/state
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`state`** des [`ServiceWorker`](/de/docs/Web/API/ServiceWorker)-Interfaces gibt einen String zurück, der den aktuellen Zustand des Service Workers darstellt. Es kann einen der folgenden Werte annehmen: `parsed`, `installing`, `installed`, `activating`, `activated` oder `redundant`.

## Wert

Ein {{jsxref("String")}}, der einen der folgenden Werte annehmen kann:

- `"parsed"`
  - : Der Anfangszustand eines Service Workers, nachdem er heruntergeladen und als lauffähig bestätigt wurde. Ein Service Worker wird nie in diesen Zustand aktualisiert, daher wird dies niemals der Wert des [`statechange`](/de/docs/Web/API/ServiceWorker/statechange_event)-Events sein.
- `"installing"`
  - : Der Service Worker in diesem Zustand gilt als ein installierender Worker. Während dieses Zustands kann [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) im `install`-Event-Handler aufgerufen werden, um die Lebensdauer des installierenden Workers zu verlängern, bis das übergebene Promise erfolgreich aufgelöst wird. Dies wird hauptsächlich verwendet, um sicherzustellen, dass der Service Worker erst aktiv wird, wenn alle Kerndatenbanken gefüllt sind.
- `"installed"`
  - : Der Service Worker in diesem Zustand gilt als wartender Worker.
- `"activating"`
  - : Der Service Worker in diesem Zustand gilt als aktiver Worker. Während dieses Zustands kann [`ExtendableEvent.waitUntil()`](/de/docs/Web/API/ExtendableEvent/waitUntil) im `onactivate`-Event-Handler aufgerufen werden, um die Lebensdauer des aktiven Workers zu verlängern, bis das übergebene Promise erfolgreich aufgelöst wird. Keine funktionalen Events werden gesendet, bis der Zustand aktiviert wird.
- `"activated"`
  - : Der Service Worker in diesem Zustand gilt als aktiver Worker, der bereit ist, funktionale Events zu verarbeiten.
- `"redundant"`
  - : Ein neuer Service Worker ersetzt den aktuellen oder der aktuelle Service Worker wird aufgrund eines Installationsfehlers verworfen.

## Beispiele

Dieser Code-Schnipsel stammt aus dem [Beispiel zu Registrierungsevents von Service Workern](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code überwacht Änderungen im `ServiceWorker.state` und gibt dessen Wert zurück.

```js
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
  logState(serviceWorker.state);
  serviceWorker.addEventListener("statechange", (e) => {
    logState(e.target.state);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
