---
title: events.Event
slug: Mozilla/Add-ons/WebExtensions/API/events/Event
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Ein Objekt, das das Hinzufügen und Entfernen von Listenern für ein Browser-Ereignis ermöglicht.

## Typ

Werte dieses Typs sind Objekte.

## Methoden

- {{WebExtAPIRef("events.Event.addListener","events.Event.addListener()")}}
  - : Registriert einen Ereignis-Listener für ein Ereignis.
- {{WebExtAPIRef("events.Event.removeListener","events.Event.removeListener()")}}
  - : Deregistriert einen Ereignis-Listener von einem Ereignis.
- {{WebExtAPIRef("events.Event.hasListener","events.Event.hasListener()")}}
  - : Testet den Registrierungsstatus eines Listeners.
- {{WebExtAPIRef("events.Event.hasListeners","events.Event.hasListeners()")}}
  - : Testet, ob Listener für das Ereignis registriert sind.
- {{WebExtAPIRef("events.Event.addRules","events.Event.addRules()")}}
  - : Registriert Regeln zur Bearbeitung von Ereignissen.
- {{WebExtAPIRef("events.Event.getRules","events.Event.getRules()")}}
  - : Gibt derzeit registrierte Regeln zurück.
- {{WebExtAPIRef("events.Event.removeRules","events.Event.removeRules()")}}
  - : Deregistriert derzeit registrierte Regeln.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-Event) API. Diese Dokumentation ist abgeleitet von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
