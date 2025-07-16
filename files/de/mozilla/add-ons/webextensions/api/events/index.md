---
title: events
slug: Mozilla/Add-ons/WebExtensions/API/events
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Allgemeine Typen, die von APIs verwendet werden, die Ereignisse auslösen.

## Typen

- {{WebExtAPIRef("events.Rule")}}
  - : Beschreibung einer deklarativen Regel zur Behandlung von Ereignissen.
- {{WebExtAPIRef("events.Event")}}
  - : Ein Objekt, das das Hinzufügen und Entfernen von Zuhörern für ein Browser-Ereignis ermöglicht.
- {{WebExtAPIRef("events.UrlFilter")}}
  - : Filtert URLs nach verschiedenen Kriterien. Wenn eines der angegebenen Kriterien zutrifft, dann entspricht der ganze Filter.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events) API von Chromium. Diese Dokumentation ist abgeleitet von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
