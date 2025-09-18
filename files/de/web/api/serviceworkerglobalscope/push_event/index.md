---
title: "ServiceWorkerGlobalScope: push-Ereignis"
short-title: push
slug: Web/API/ServiceWorkerGlobalScope/push_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`push`**-Ereignis wird an den globalen Scope eines Service Workers gesendet (vertreten durch die [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)-Schnittstelle), wenn der Service Worker eine Push-Nachricht erhalten hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("push", (event) => { })

onpush = (event) => { }
```

## Ereignistyp

Ein [`PushEvent`](/de/docs/Web/API/PushEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PushEvent")}}

## Ereigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`ExtendableEvent`](/de/docs/Web/API/ExtendableEvent). Zusätzliche Eigenschaften:_

- [`PushEvent.data`](/de/docs/Web/API/PushEvent/data) {{ReadOnlyInline}}
  - : Gibt eine Referenz zu einem [`PushMessageData`](/de/docs/Web/API/PushMessageData)-Objekt zurück, das Daten enthält, die an das [`PushSubscription`](/de/docs/Web/API/PushSubscription) gesendet wurden.

## Beispiel

Dieses Beispiel richtet einen Handler für `push`-Ereignisse ein, der {{Glossary("JSON", "JSON")}}-Daten entnimmt, sie analysiert und die Nachricht basierend auf den im Nachrichteninhalt enthaltenen Informationen zur Verarbeitung weiterleitet.

```js
self.addEventListener("push", (event) => {
  let message = event.data.json();

  switch (message.type) {
    case "init":
      doInit();
      break;
    case "shutdown":
      doShutdown();
      break;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Push API](/de/docs/Web/API/Push_API)
- [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)-Ereignis
