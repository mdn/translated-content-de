---
title: "ServiceWorkerGlobalScope: push-Ereignis"
short-title: push
slug: Web/API/ServiceWorkerGlobalScope/push_event
l10n:
  sourceCommit: 60898650ee472d10cc15cb91c982fede0d0c5e34
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`push`**-Ereignis wird an den globalen Gültigkeitsbereich eines Service Workers gesendet (repräsentiert durch die Schnittstelle [`ServiceWorkerGlobalScope`](/de/docs/Web/API/ServiceWorkerGlobalScope)), wenn der Service Worker eine Push-Nachricht empfangen hat.

Dieses Ereignis kann nicht abgebrochen werden und wird nicht nach oben weitergegeben.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("push", (event) => { })
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onpush = (event) => { }
```

## Ereignistyp

Ein [`PushEvent`](/de/docs/Web/API/PushEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("PushEvent")}}

## Beispiel

Dieses Beispiel richtet einen Handler für `push`-Ereignisse ein, der {{Glossary("JSON", "JSON")}}-Daten entgegennimmt und parst. Anschließend leitet er die Nachricht anhand der darin enthaltenen Informationen zur Verarbeitung weiter.

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
- Ereignis [`pushsubscriptionchange`](/de/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
