---
title: "ServiceWorkerGlobalScope: push event"
short-title: push
slug: Web/API/ServiceWorkerGlobalScope/push_event
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`push`**-Ereignis wird an den globalen Bereich eines Service Workers gesendet (repräsentiert durch die Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)), wenn der Service Worker eine Push-Nachricht erhalten hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht propagiert.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("push", (event) => {});

onpush = (event) => {};
```

## Ereignistyp

Ein [`PushEvent`](/de/docs/Web/API/PushEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PushEvent")}}

## Ereignis-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Zusätzliche Eigenschaften:_

- [`PushEvent.data`](/de/docs/Web/API/PushEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf ein [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt zurück, das Daten enthält, die an die [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet wurden.

## Beispiel

Dieses Beispiel richtet einen Handler für `push`-Ereignisse ein, der [JSON](/de/docs/Glossary/JSON)-Daten entgegennimmt, diese analysiert und die Nachricht zur Behandlung basierend auf den im Nachrichtentext enthaltenen Informationen weiterleitet.

```js
self.addEventListener(
  "push",
  (event) => {
    let message = event.data.json();

    switch (message.type) {
      case "init":
        doInit();
        break;
      case "shutdown":
        doShutdown();
        break;
    }
  },
  false,
);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Push API](/de/docs/Web/API/Push_API)
- [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event) Ereignis
