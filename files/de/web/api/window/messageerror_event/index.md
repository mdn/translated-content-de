---
title: "Fenster: messageerror-Ereignis"
short-title: messageerror
slug: Web/API/Window/messageerror_event
l10n:
  sourceCommit: cc070123f72376faec06e36622c4fc723a75325f
---

{{APIRef}}

Das `messageerror`-Ereignis wird auf einem {{domxref('Window')}}-Objekt ausgelöst, wenn es eine Nachricht erhält, die nicht deserialisiert werden kann.

Dieses Ereignis ist nicht abbrichbar und wird nicht gebubbelt.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("messageerror", (event) => {});

onmessageerror = (event) => {};
```

## Ereignistyp

Ein {{domxref("MessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MessageEvent")}}

## Ereigniseigenschaften

_Diese Schnittstelle erbt ebenfalls Eigenschaften von ihrem übergeordneten Element, {{domxref("Event")}}._

- {{domxref("MessageEvent.data")}} {{ReadOnlyInline}}
  - : Die vom Nachrichtensender gesendeten Daten.
- {{domxref("MessageEvent.origin")}} {{ReadOnlyInline}}
  - : Ein String, der den Ursprung des Nachrichtensenders darstellt.
- {{domxref("MessageEvent.lastEventId")}} {{ReadOnlyInline}}
  - : Ein String, der eine eindeutige ID für das Ereignis darstellt.
- {{domxref("MessageEvent.source")}} {{ReadOnlyInline}}
  - : Eine `MessageEventSource` (die ein {{glossary("WindowProxy")}}, ein {{domxref("MessagePort")}} oder ein {{domxref("ServiceWorker")}} Objekt sein kann), die den Nachrichtensender darstellt.
- {{domxref("MessageEvent.ports")}} {{ReadOnlyInline}}
  - : Ein Array von {{domxref("MessagePort")}}-Objekten, die die mit dem Kanal assoziierten Ports darstellen, durch den die Nachricht gesendet wird (wo angemessen, z. B. in Kanalnachrichten oder beim Senden einer Nachricht an einen geteilten Worker).

## Beispiele

Hören Sie auf `messageerror` mit {{domxref("EventTarget/addEventListener", "addEventListener()")}}:

```js
window.addEventListener("messageerror", (event) => {
  console.error(event);
});
```

Das gleiche, aber mit der `onmessageerror` Ereignishandler-Eigenschaft:

```js
window.onmessageerror = (event) => {
  console.error(event);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Window.postMessage()")}}
- Verwandte Ereignisse: {{domxref("Window/message_event", "message")}}.
