---
title: sessions
slug: Mozilla/Add-ons/WebExtensions/API/sessions
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie die sessions API, um Tabs und Fenster aufzulisten und wiederherzustellen, die während der Ausführung des Browsers geschlossen wurden.

Die Funktion {{WebExtAPIRef("sessions.getRecentlyClosed()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}} und {{WebExtAPIRef("windows.Window")}} Objekten zurück, die Tabs und Fenster darstellen, die seit dem Start des Browsers geschlossen wurden, bis zu dem in {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} definierten Maximum.

Sie können dann ein Fenster oder einen Tab mit der Funktion {{WebExtAPIRef("sessions.restore()")}} wiederherstellen. Das Wiederherstellen öffnet nicht nur den Tab erneut: Es stellt auch den Verlauf des Tabs wieder her, sodass die Vorwärts-/Rückwärts-Schaltflächen funktionieren.

Diese API bietet auch eine Gruppe von Funktionen, die es einer Erweiterung ermöglichen, zusätzlichen Zustand zu speichern, der mit einem Tab oder Fenster verbunden ist. Wenn der Tab oder das Fenster geschlossen und anschließend wiederhergestellt wird, kann die Erweiterung den Zustand abrufen. Ein Beispiel wäre eine Tab-Gruppenerweiterung, die damit speichert, zu welcher Gruppe ein Tab gehört, um ihn beim Wiederherstellen in die richtige Gruppe zuzuordnen.

Um die sessions API zu verwenden, müssen Sie die "sessions" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) besitzen.

## Typen

- {{WebExtAPIRef("sessions.Filter")}}
  - : Ermöglicht es Ihnen, die Anzahl der {{WebExtAPIRef("sessions.Session", "Session")}} Objekte zu begrenzen, die von einem Aufruf von {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zurückgegeben werden.
- {{WebExtAPIRef("sessions.Session")}}
  - : Stellt einen Tab oder ein Fenster dar, das der Benutzer in der aktuellen Browsersitzung geschlossen hat.

## Eigenschaften

- {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}
  - : Die maximale Anzahl von Sitzungen, die durch einen Aufruf von [`sessions.getRecentlyClosed()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed) zurückgegeben werden.

## Funktionen

- {{WebExtAPIRef("sessions.forgetClosedTab()")}}
  - : Entfernt einen geschlossenen Tab aus der Liste der kürzlich geschlossenen Tabs des Browsers.
- {{WebExtAPIRef("sessions.forgetClosedWindow()")}}
  - : Entfernt ein geschlossenes Fenster aus der Liste der kürzlich geschlossenen Fenster des Browsers.
- {{WebExtAPIRef("sessions.getRecentlyClosed()")}}
  - : Gibt ein Array von {{WebExtAPIRef("sessions.Session", "Session")}} Objekten zurück, die Fenster und Tabs repräsentieren, die in der aktuellen Browsersitzung geschlossen wurden (also: seit der Browser gestartet wurde).
- {{WebExtAPIRef("sessions.restore()")}}
  - : Stellt einen geschlossenen Tab oder ein Fenster wieder her.
- {{WebExtAPIRef("sessions.setTabValue()")}}
  - : Speichert ein Schlüssel/Wert-Paar, das mit einem gegebenen Tab verbunden ist.
- {{WebExtAPIRef("sessions.getTabValue()")}}
  - : Ruft einen zuvor für einen gegebenen Tab gespeicherten Wert anhand seines Schlüssels ab.
- {{WebExtAPIRef("sessions.removeTabValue()")}}
  - : Entfernt ein Schlüssel/Wert-Paar aus einem gegebenen Tab.
- {{WebExtAPIRef("sessions.setWindowValue()")}}
  - : Speichert ein Schlüssel/Wert-Paar, das mit einem gegebenen Fenster verbunden ist.
- {{WebExtAPIRef("sessions.getWindowValue()")}}
  - : Ruft einen zuvor für ein gegebenes Fenster gespeicherten Wert anhand seines Schlüssels ab.
- {{WebExtAPIRef("sessions.removeWindowValue()")}}
  - : Entfernt ein Schlüssel/Wert-Paar aus einem gegebenen Fenster.

## Ereignisse

- {{WebExtAPIRef("sessions.onChanged")}}
  - : Wird ausgelöst, wenn ein Tab oder Fenster geschlossen wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf der [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions) API von Chromium.

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
