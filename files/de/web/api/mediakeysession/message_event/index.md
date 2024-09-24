---
title: "MediaKeySession: message-Ereignis"
short-title: message
slug: Web/API/MediaKeySession/message_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`message`**-Ereignis der {{domxref("MediaKeySession")}}-Schnittstelle wird ausgelöst, wenn eine Nachricht vom Inhaltsentschlüsselungsmodul generiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie {{domxref("EventTarget.addEventListener", "addEventListener()")}}, oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein {{domxref("MediaKeyMessageEvent")}}. Erbt von {{domxref("Event")}}.

{{InheritanceDiagram("MediaKeyMessageEvent")}}

## Ereigniseigenschaften

- {{domxref("MediaKeyMessageEvent.message")}} {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}} mit einer Nachricht vom Inhaltsentschlüsselungsmodul zurück. Die Nachrichten variieren je nach Schlüsselsystem.
- {{domxref("MediaKeyMessageEvent.messageType")}} {{ReadOnlyInline}}
  - : Gibt den Nachrichtentyp an. Kann `license-request`, `license-renewal`, `license-release` oder `individualization-request` sein.

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
