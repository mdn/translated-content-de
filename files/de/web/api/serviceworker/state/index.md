---
title: "ServiceWorker: state Eigenschaft"
short-title: state
slug: Web/API/ServiceWorker/state
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{APIRef("Service Workers API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`state`** schreibgeschützte Eigenschaft der {{domxref("ServiceWorker")}}-Schnittstelle gibt einen String zurück, der den aktuellen Status des Service Workers darstellt. Es kann einer der folgenden Werte sein: `parsed`, `installing`, `installed`, `activating`, `activated` oder `redundant`.

## Wert

Ein {{jsxref("String")}}, der einer der folgenden Werte annehmen kann:

- `"parsed"`
  - : Der anfängliche Zustand eines Service Workers, nachdem er heruntergeladen und als ausführbar bestätigt wurde. Ein Service Worker wird niemals in diesen Zustand aktualisiert, daher wird dies niemals der Wert des {{DOMxRef("ServiceWorker.statechange_event", "statechange")}}-Ereignisses sein.
- `"installing"`
  - : Der Service Worker in diesem Zustand wird als installierender Worker betrachtet. Während dieses Zustands kann {{DOMxRef("ExtendableEvent.waitUntil()")}} im `install`-Ereignishandler aufgerufen werden, um die Lebensdauer des installierenden Workers zu verlängern, bis das übergebene Promise erfolgreich aufgelöst ist. Dies wird hauptsächlich verwendet, um sicherzustellen, dass der Service Worker erst aktiv wird, wenn alle wichtigen Caches gefüllt sind.
- `"installed"`
  - : Der Service Worker in diesem Zustand wird als wartender Worker betrachtet.
- `"activating"`
  - : Der Service Worker in diesem Zustand wird als aktiver Worker betrachtet. Während dieses Zustands kann {{DOMxRef("ExtendableEvent.waitUntil()")}} im `onactivate`-Ereignishandler aufgerufen werden, um die Lebensdauer des aktiven Workers zu verlängern, bis das übergebene Promise erfolgreich aufgelöst ist. Es werden keine funktionalen Ereignisse gesendet, bis der Zustand aktiviert wird.
- `"activated"`
  - : Der Service Worker in diesem Zustand wird als aktiver Worker betrachtet, der bereit ist, funktionale Ereignisse zu behandeln.
- `"redundant"`
  - : Ein neuer Service Worker ersetzt den aktuellen Service Worker, oder der aktuelle Service Worker wird aufgrund eines Installationsfehlers verworfen.

## Beispiele

Dieses Codebeispiel stammt aus dem [Service Worker Registration-Events Beispiel](https://github.com/GoogleChrome/samples/blob/gh-pages/service-worker/registration-events/index.html) ([Live-Demo](https://googlechrome.github.io/samples/service-worker/registration-events/)). Der Code überwacht jede Änderung im `ServiceWorker.state` und gibt seinen Wert zurück.

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
