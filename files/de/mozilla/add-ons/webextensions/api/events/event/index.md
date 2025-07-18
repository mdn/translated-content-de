---
title: events.Event
slug: Mozilla/Add-ons/WebExtensions/API/events/Event
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Ein Objekt, das das Hinzufügen und Entfernen von Listenern für ein Browserevent ermöglicht.

## Typ

Werte dieses Typs sind Objekte.

## Methoden

- {{WebExtAPIRef("events.Event.addListener","events.Event.addListener()")}}
  - : Registriert einen Event-Listener für ein Event.
- {{WebExtAPIRef("events.Event.removeListener","events.Event.removeListener()")}}
  - : Deregistriert einen Event-Listener von einem Event.
- {{WebExtAPIRef("events.Event.hasListener","events.Event.hasListener()")}}
  - : Prüft den Registrierungsstatus eines Listeners.
- {{WebExtAPIRef("events.Event.hasListeners","events.Event.hasListeners()")}}
  - : Prüft, ob Listener für das Event registriert sind.
- {{WebExtAPIRef("events.Event.addRules","events.Event.addRules()")}}
  - : Registriert Regeln zur Handhabung von Events.
- {{WebExtAPIRef("events.Event.getRules","events.Event.getRules()")}}
  - : Gibt aktuell registrierte Regeln zurück.
- {{WebExtAPIRef("events.Event.removeRules","events.Event.removeRules()")}}
  - : Deregistriert aktuell registrierte Regeln.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-Event) API von Chromium. Diese Dokumentation ist abgeleitet von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.
