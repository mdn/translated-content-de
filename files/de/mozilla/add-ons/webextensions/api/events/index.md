---
title: Ereignisse
slug: Mozilla/Add-ons/WebExtensions/API/events
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Häufig verwendete Typen von APIs, die Ereignisse auslösen.

## Typen

- {{WebExtAPIRef("events.Rule")}}
  - : Beschreibung einer deklarativen Regel zur Bearbeitung von Ereignissen.
- {{WebExtAPIRef("events.Event")}}
  - : Ein Objekt, das das Hinzufügen und Entfernen von Listenern für ein Browserereignis ermöglicht.
- {{WebExtAPIRef("events.UrlFilter")}}
  - : Filtert URLs nach verschiedenen Kriterien. Wenn eines der angegebenen Kriterien übereinstimmt, dann stimmt der gesamte Filter überein.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events) API von Chromium. Diese Dokumentation stammt aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
