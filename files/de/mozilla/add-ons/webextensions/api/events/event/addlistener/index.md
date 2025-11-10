---
title: Event.addListener()
slug: Mozilla/Add-ons/WebExtensions/API/events/Event/addListener
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Registriert einen Event-Listener-Callback für ein Ereignis.

## Syntax

```js-nolint
events.Event.addListener(listener)
```

### Parameter

- `listener`
  - : Funktion, die aufgerufen wird, wenn das Ereignis eintritt. Die Parameter dieser Funktion hängen vom Typ des Ereignisses ab.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#method-Event-addListener) API. Diese Dokumentation stammt von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
