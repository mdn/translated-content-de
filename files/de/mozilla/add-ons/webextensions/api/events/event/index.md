---
title: events.Event
slug: Mozilla/Add-ons/WebExtensions/API/events/Event
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
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
  - : Überprüft den Registrierungsstatus eines Listeners.
- {{WebExtAPIRef("events.Event.hasListeners","events.Event.hasListeners()")}}
  - : Überprüft, ob irgendwelche Listener für das Ereignis registriert sind.
- {{WebExtAPIRef("events.Event.addRules","events.Event.addRules()")}}
  - : Registriert Regeln zur Behandlung von Ereignissen.
- {{WebExtAPIRef("events.Event.getRules","events.Event.getRules()")}}
  - : Gibt die derzeit registrierten Regeln zurück.
- {{WebExtAPIRef("events.Event.removeRules","events.Event.removeRules()")}}
  - : Entfernt derzeit registrierte Regeln.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-Event) von Chromium. Diese Dokumentation stammt von [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions von Quellcode müssen den obigen Copyright-Hinweis,
// diese Liste von Bedingungen und den folgenden Haftungsausschluss
// enthalten.
//    * Redistributions in binärer Form müssen den obigen
// Copyright-Hinweis, diese Liste von Bedingungen und den folgenden
// Haftungsausschluss in der Dokumentation und/oder anderen Materialien
// enthalten, die mit der Verteilung bereitgestellt werden.
//    * Weder der Name Google Inc. noch die Namen seiner
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet sind, zu unterstützen oder zu fördern, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND MITWIRKENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, DIE
// IMPLIZIERTEN GARANTIEN DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK, SIND ABGELEHNT. IN KEINEM FALL SIND DIE
// COPYRIGHT-INHABER ODER MITWIRKENDEN HAFTBAR FÜR JEDWEDEN DIREKTEN,
// INDIREKTEN, ZUFÄLLIGEN, BESONDEREN, EXEMPLARISCHEN ODER FOLGESCHÄDEN
// (EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF, BESCHAFFUNG VON
// ERSATZWAREN ODER DIENSTLEISTUNGEN; NUTZUNGSVERLUST, DATEN ODER
// GEWINNE; ODER BETRIEBSUNTERBRECHUNG) WIE AUCH IMMER VERURSACHT UND
// UNTER JEGLICHER HAFTUNGSTHEORIE, SEI ES IN VERTRAG, STRIKTER HAFTUNG
// ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE IN IRGENDEINER WEISE AUS DER NUTZUNG DIESER SOFTWARE
// ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT SOLCHER SCHÄDEN HINGEWIESEN
// WURDE.
-->
