---
title: "MediaKeySession: message Ereignis"
short-title: message
slug: Web/API/MediaKeySession/message_event
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`message`** Ereignis der
[`MediaKeySession`](/de/docs/Web/API/MediaKeySession) Schnittstelle tritt auf, wenn eine Nachricht vom Inhaltsentschlüsselungsmodul generiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener), oder setzen Sie eine Ereignishandler-Eigenschaft.

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## Ereignistyp

Ein [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaKeyMessageEvent")}}

## Ereigniseigenschaften

- [`MediaKeyMessageEvent.message`](/de/docs/Web/API/MediaKeyMessageEvent/message) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}} mit einer Nachricht vom Inhaltsentschlüsselungsmodul zurück. Nachrichten variieren je nach Schlüsselsystem.
- [`MediaKeyMessageEvent.messageType`](/de/docs/Web/API/MediaKeyMessageEvent/messageType) {{ReadOnlyInline}}
  - : Gibt den Typ der Nachricht an. Kann `license-request`, `license-renewal`, `license-release` oder `individualization-request` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
