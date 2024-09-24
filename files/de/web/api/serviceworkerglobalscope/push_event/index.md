---
title: "ServiceWorkerGlobalScope: push-Ereignis"
short-title: push
slug: Web/API/ServiceWorkerGlobalScope/push_event
l10n:
  sourceCommit: 3a91caa0ebbc5131ed75afe0e5168cd5bffc0976
---

{{APIRef("Push API")}}{{SecureContext_Header}}{{AvailableInWorkers("service")}}

Das **`push`**-Ereignis wird an den globalen Bereich eines Service Workers gesendet (repräsentiert durch das {{domxref("ServiceWorkerGlobalScope")}}-Interface), wenn der Service Worker eine Push-Nachricht empfangen hat.

Dieses Ereignis ist nicht abbrechbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("push", (event) => {});

onpush = (event) => {};
```

## Ereignistyp

Ein {{domxref("PushEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("PushEvent")}}

## Ereigniseigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("ExtendableEvent")}}. Zusätzliche Eigenschaften:_

- {{domxref("PushEvent.data")}} {{ReadOnlyInline}}
  - : Gibt eine Referenz auf ein {{domxref("PushMessageData")}}-Objekt zurück, das Daten enthält, die an das {{domxref("PushSubscription")}} gesendet wurden.

## Beispiel

Dieses Beispiel richtet einen Handler für `push`-Ereignisse ein, der {{Glossary("JSON")}}-Daten entgegennimmt, sie analysiert und die Nachricht basierend auf den im Nachrichtentext enthaltenen Informationen verarbeitet.

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
- {{domxref("ServiceWorkerGlobalScope/pushsubscriptionchange_event", "pushsubscriptionchange")}}-Ereignis
