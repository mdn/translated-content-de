---
title: "ServiceWorkerGlobalScope: push-Ereignis"
short-title: push
slug: Web/API/ServiceWorkerGlobalScope/push_event
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`push`**-Ereignis wird an den globalen Bereich eines Service Workers (repräsentiert durch die Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)) gesendet, wenn der Service Worker eine Push-Nachricht erhalten hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergeleitet.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Event-Handler-Eigenschaft.

```js
addEventListener("push", (event) => {});

onpush = (event) => {};
```

## Ereignistyp

Ein [`PushEvent`](/de/docs/Web/API/PushEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PushEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem übergeordneten Element [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Zusätzliche Eigenschaften:_

- [`PushEvent.data`](/de/docs/Web/API/PushEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Referenz zu einem [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt zurück, das die an das [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendeten Daten enthält.

## Beispiel

Dieses Beispiel richtet einen Handler für `push`-Ereignisse ein, der {{Glossary("JSON", "JSON")}}-Daten entgegennimmt, sie analysiert und die Nachricht zur Bearbeitung basierend auf den im Nachrichtentext enthaltenen Informationen weiterleitet.

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
- [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)-Ereignis
