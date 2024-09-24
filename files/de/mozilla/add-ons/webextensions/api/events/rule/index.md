---
title: events.Rule
slug: Mozilla/Add-ons/WebExtensions/API/events/Rule
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Beschreibung einer deklarativen Regel zur Verarbeitung von Ereignissen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `id` {{optional_inline}}
  - : `string`. Optionaler Bezeichner, der es ermöglicht, diese Regel zu referenzieren.
- `tags` {{optional_inline}}
  - : `array` von `string`. Tags können verwendet werden, um Regeln zu annotieren und Operationen auf Regelsätzen durchzuführen.
- `conditions`
  - : `array` von `any`. Liste von Bedingungen, die die Aktionen auslösen können.
- `actions`
  - : `array` von `any`. Liste von Aktionen, die ausgelöst werden, wenn eine der Bedingungen erfüllt ist.
- `priority` {{optional_inline}}
  - : `integer`. Optionale Priorität dieser Regel. Standardmäßig 100.

## Kompatibilität mit Browsern

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-Rule) API von Chromium. Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
