---
title: windows
slug: Mozilla/Add-ons/WebExtensions/API/windows
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Interagieren Sie mit Browserfenstern. Sie können diese API verwenden, um Informationen über offene Fenster zu erhalten sowie Fenster zu öffnen, zu ändern und zu schließen. Außerdem können Sie auf Ereignisse wie das Öffnen, Schließen und Aktivieren von Fenstern lauschen.

## Typen

- {{WebExtAPIRef("windows.WindowType")}}
  - : Der Typ des Browserfensters.
- {{WebExtAPIRef("windows.WindowState")}}
  - : Der Zustand dieses Browserfensters.
- {{WebExtAPIRef("windows.Window")}}
  - : Enthält Informationen über ein Browserfenster.
- {{WebExtAPIRef("windows.CreateType")}}
  - : Gibt den Typ des zu erstellenden Browserfensters an.

## Konstanten

- {{WebExtAPIRef("windows.WINDOW_ID_NONE")}}
  - : Der `windowId`-Wert, der die Abwesenheit eines Browserfensters darstellt.
- {{WebExtAPIRef("windows.WINDOW_ID_CURRENT")}}
  - : Ein Wert, der anstelle einer `windowId` in einigen APIs verwendet werden kann, um das aktuelle Fenster darzustellen.

## Methoden

- {{WebExtAPIRef("windows.get()")}}
  - : Ruft Details über ein Fenster anhand seiner ID ab.
- {{WebExtAPIRef("windows.getCurrent()")}}
  - : Ruft das aktuelle Fenster ab.
- {{WebExtAPIRef("windows.getLastFocused()")}}
  - : Ruft das Fenster ab, das zuletzt fokussiert war — typischerweise das Fenster 'oben'.
- {{WebExtAPIRef("windows.getAll()")}}
  - : Ruft alle Fenster ab.
- {{WebExtAPIRef("windows.create()")}}
  - : Erstellt ein neues Fenster.
- {{WebExtAPIRef("windows.update()")}}
  - : Aktualisiert die Eigenschaften eines Fensters. Verwenden Sie dies, um ein Fenster zu verschieben, seine Größe zu ändern und den Fokus (un)setzen, usw.
- {{WebExtAPIRef("windows.remove()")}}
  - : Schließt ein Fenster und alle seine Tabs.

## Ereignisse

- {{WebExtAPIRef("windows.onBoundsChanged")}}
  - : Wird ausgelöst, wenn ein Fenster in der Größe verändert oder verschoben wird.
- {{WebExtAPIRef("windows.onCreated")}}
  - : Wird ausgelöst, wenn ein Fenster erstellt wird.
- {{WebExtAPIRef("windows.onRemoved")}}
  - : Wird ausgelöst, wenn ein Fenster geschlossen wird.
- {{WebExtAPIRef("windows.onFocusChanged")}}
  - : Wird ausgelöst, wenn sich das aktuell fokussierte Fenster ändert.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.windows`](https://developer.chrome.com/docs/extensions/reference/api/windows) API von Chromium. Diese Dokumentation ist abgeleitet von [`windows.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/windows.json) im Chromium-Code.

<!--
/ Copyright 2015 The Chromium Authors. All rights reserved.
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
