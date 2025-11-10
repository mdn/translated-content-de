---
title: events.Rule
slug: Mozilla/Add-ons/WebExtensions/API/events/Rule
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Beschreibung einer deklarativen Regel zur Handhabung von Ereignissen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `id` {{optional_inline}}
  - : `string`. Optionale Kennung, die das Referenzieren dieser Regel ermöglicht.
- `tags` {{optional_inline}}
  - : `array` von `string`. Tags können verwendet werden, um Regeln zu annotieren und Operationen auf Mengen von Regeln durchzuführen.
- `conditions`
  - : `array` von `any`. Liste von Bedingungen, die die Aktionen auslösen können.
- `actions`
  - : `array` von `any`. Liste von Aktionen, die ausgelöst werden, wenn eine der Bedingungen erfüllt ist.
- `priority` {{optional_inline}}
  - : `integer`. Optionale Priorität dieser Regel. Standardwert ist 100.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-Rule) API. Diese Dokumentation stammt von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
