---
title: "ServiceWorkerGlobalScope: push-Ereignis"
short-title: push
slug: Web/API/ServiceWorkerGlobalScope/push_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`push`**-Ereignis wird an den globalen Kontext eines Service Workers gesendet (repräsentiert durch das [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Interface), wenn der Service Worker eine Push-Nachricht empfangen hat.

Dieses Ereignis kann nicht abgebrochen werden und es blubbert nicht.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("push", (event) => { })

onpush = (event) => { }
```

## Ereignistyp

Ein [`PushEvent`](/de/docs/Web/API/PushEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PushEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Zusätzliche Eigenschaften:_

- [`PushEvent.data`](/de/docs/Web/API/PushEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Referenz auf ein [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt zurück, das Daten enthält, die an das [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet wurden.

## Beispiel

Dieses Beispiel richtet einen Handler für `push`-Ereignisse ein, der {{Glossary("JSON", "JSON")}}-Daten entgegennimmt, sie analysiert und die Nachricht zur Weiterverarbeitung basierend auf den im Nachrichtentext enthaltenen Informationen weiterleitet.

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
