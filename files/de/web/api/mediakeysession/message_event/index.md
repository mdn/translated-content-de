---
title: "MediaKeySession: message Ereignis"
short-title: message
slug: Web/API/MediaKeySession/message_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`message`** Ereignis der [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Schnittstelle wird ausgelöst, wenn eine Nachricht vom Inhaltsentschlüsselungsmodul generiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent). Wird von [`Event`](/de/docs/Web/API/Event) geerbt.

{{InheritanceDiagram("MediaKeyMessageEvent")}}

## Ereigniseigenschaften

- [`MediaKeyMessageEvent.message`](/de/docs/Web/API/MediaKeyMessageEvent/message) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}} mit einer Nachricht vom Inhaltsentschlüsselungsmodul zurück. Die Nachrichten variieren je nach Schlüssel-System.
- [`MediaKeyMessageEvent.messageType`](/de/docs/Web/API/MediaKeyMessageEvent/messageType) {{ReadOnlyInline}}
  - : Gibt den Nachrichtentyp an. Kann einer der folgenden sein: `license-request`, `license-renewal`, `license-release` oder `individualization-request`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
