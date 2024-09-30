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
  - : Entregistriert einen Ereignis-Listener von einem Ereignis.
- {{WebExtAPIRef("events.Event.hasListener","events.Event.hasListener()")}}
  - : Prüft den Registrierungsstatus eines Listeners.
- {{WebExtAPIRef("events.Event.hasListeners","events.Event.hasListeners()")}}
  - : Prüft, ob Listener für das Ereignis registriert sind.
- {{WebExtAPIRef("events.Event.addRules","events.Event.addRules()")}}
  - : Registriert Regeln, um Ereignisse zu bearbeiten.
- {{WebExtAPIRef("events.Event.getRules","events.Event.getRules()")}}
  - : Gibt aktuell registrierte Regeln zurück.
- {{WebExtAPIRef("events.Event.removeRules","events.Event.removeRules()")}}
  - : Hebt die Registrierung aktuell registrierter Regeln auf.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.events`](https://developer.chrome.com/docs/extensions/reference/api/events#type-Event) API von Chromium. Diese Dokumentation ist aus [`events.json`](https://chromium.googlesource.com/chromium/src/+/master/extensions/common/api/events.json) im Chromium-Code abgeleitet.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
