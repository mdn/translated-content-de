---
title: "MediaKeySession: message-Ereignis"
short-title: message
slug: Web/API/MediaKeySession/message_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Encrypted Media Extensions")}}{{SecureContext_Header}}

Das **`message`**-Ereignis der [`MediaKeySession`](/de/docs/Web/API/MediaKeySession)-Schnittstelle wird ausgelöst, wenn das Modul zur Inhaltsentschlüsselung eine Nachricht erzeugt.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("message", (event) => { })
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onmessage = (event) => { }
```

## Ereignistyp

Ein [`MediaKeyMessageEvent`](/de/docs/Web/API/MediaKeyMessageEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("MediaKeyMessageEvent")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
