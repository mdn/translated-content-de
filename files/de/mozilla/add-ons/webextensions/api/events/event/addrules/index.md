---
title: Event.addRules()
slug: Mozilla/Add-ons/WebExtensions/API/events/Event/addRules
l10n:
  sourceCommit: 8bcd10489059539a341f82985eac9f1115e87483
---

{{AddonSidebar}}

Registriert Regeln für ein deklaratives Ereignis.

## Syntax

```js-nolint
events.Event.addRules(rules, callback)
```

### Parameter

- `rules`

  - : `array` von {{WebExtAPIRef("events.Rule")}}. Zu registrierende Regeln. Diese Regeln ersetzen nicht die bereits registrierten Regeln.

- `callback` {{optional_inline}}

  - : `function`. Wird aufgerufen, wenn die Regeln registriert sind. Der Parameter der Callback-Funktion ist ein Array der registrierten {{WebExtAPIRef("events.Rule")}} Objekte.

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#method-Event-addRules) API von Chromium. Diese Dokumentation ist abgeleitet von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
