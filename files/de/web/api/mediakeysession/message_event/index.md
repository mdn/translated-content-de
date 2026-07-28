---
title: "MediaKeySession: message-Ereignis"
short-title: message
slug: Web/API/MediaKeySession/message_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`message`**-Ereignis des
[`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Interfaces wird ausgelöst, wenn eine Nachricht vom
Inhaltsentschlüsselungsmodul generiert wird.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignisbehandlungseigenschaft.

```js-nolint
addEventListener("message", (event) => { })

onmessage = (event) => { }
```

## Ereignistyp

Ein [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaKeyMessageEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
