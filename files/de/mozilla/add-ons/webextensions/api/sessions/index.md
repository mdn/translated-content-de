---
title: Sitzungen
slug: Mozilla/Add-ons/WebExtensions/API/sessions
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Verwenden Sie die Sitzungs-API, um Tabs und Fenster aufzulisten und wiederherzustellen, die geschlossen wurden, während der Browser lief.

Die Funktion {{WebExtAPIRef("sessions.getRecentlyClosed()")}} gibt ein Array von {{WebExtAPIRef("tabs.Tab")}} und {{WebExtAPIRef("windows.Window")}} Objekten zurück, die Tabs und Fenster darstellen, die seit dem Start des Browsers geschlossen wurden, bis zu dem in {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}} definierten Maximum.

Sie können dann ein Fenster oder einen Tab mit der Funktion {{WebExtAPIRef("sessions.restore()")}} wiederherstellen. Das Wiederherstellen öffnet den Tab nicht nur erneut: Es stellt auch den Navigationsverlauf des Tabs wieder her, sodass die Vor- und Zurück-Schaltflächen funktionieren.

Diese API bietet auch eine Gruppe von Funktionen, die es einer Erweiterung ermöglichen, zusätzlichen Zustand zu speichern, der mit einem Tab oder einem Fenster verbunden ist. Wenn der Tab oder das Fenster geschlossen und anschließend wiederhergestellt wird, kann die Erweiterung den Zustand abrufen. Zum Beispiel könnte eine Tab-Gruppierungs-Erweiterung dies verwenden, um sich zu merken, in welcher Gruppe sich ein Tab befindet, um ihn in die richtige Gruppe wiederherzustellen, wenn der Benutzer den Tab wiederherstellt.

Um die Sitzungs-API zu verwenden, müssen Sie die "sessions" [API-Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#api_permissions) haben.

## Typen

- {{WebExtAPIRef("sessions.Filter")}}
  - : Ermöglicht Ihnen, die Anzahl der von einem Aufruf an {{WebExtAPIRef("sessions.getRecentlyClosed()")}} zurückgegebenen {{WebExtAPIRef("sessions.Session", "Session")}} Objekte zu beschränken.
- {{WebExtAPIRef("sessions.Session")}}
  - : Stellt einen Tab oder ein Fenster dar, das der Benutzer in der aktuellen Browsersitzung geschlossen hat.

## Eigenschaften

- {{WebExtAPIRef("sessions.MAX_SESSION_RESULTS")}}
  - : Die maximale Anzahl von Sitzungen, die von einem Aufruf an [`sessions.getRecentlyClosed()`](/de/docs/Mozilla/Add-ons/WebExtensions/API/sessions/getRecentlyClosed) zurückgegeben werden.

## Funktionen

- {{WebExtAPIRef("sessions.forgetClosedTab()")}}
  - : Entfernt einen geschlossenen Tab aus der Liste der kürzlich geschlossenen Tabs des Browsers.
- {{WebExtAPIRef("sessions.forgetClosedWindow()")}}
  - : Entfernt ein geschlossenes Fenster aus der Liste der kürzlich geschlossenen Fenster des Browsers.
- {{WebExtAPIRef("sessions.getRecentlyClosed()")}}
  - : Gibt ein Array von {{WebExtAPIRef("sessions.Session", "Session")}} Objekten zurück, die Fenster und Tabs darstellen, die in der aktuellen Browsersitzung geschlossen wurden (d.h.: die Zeit seit dem Start des Browsers).
- {{WebExtAPIRef("sessions.restore()")}}
  - : Stellt einen geschlossenen Tab oder ein geschlossenes Fenster wieder her.
- {{WebExtAPIRef("sessions.setTabValue()")}}
  - : Speichert ein Schlüssel/Wert-Paar, das mit einem bestimmten Tab verknüpft ist.
- {{WebExtAPIRef("sessions.getTabValue()")}}
  - : Ruft einen zuvor gespeicherten Wert für einen gegebenen Tab ab, basierend auf seinem Schlüssel.
- {{WebExtAPIRef("sessions.removeTabValue()")}}
  - : Entfernt ein Schlüssel/Wert-Paar aus einem bestimmten Tab.
- {{WebExtAPIRef("sessions.setWindowValue()")}}
  - : Speichert ein Schlüssel/Wert-Paar, das mit einem bestimmten Fenster verknüpft ist.
- {{WebExtAPIRef("sessions.getWindowValue()")}}
  - : Ruft einen zuvor gespeicherten Wert für ein bestimmtes Fenster ab, basierend auf seinem Schlüssel.
- {{WebExtAPIRef("sessions.removeWindowValue()")}}
  - : Entfernt ein Schlüssel/Wert-Paar aus einem bestimmten Fenster.

## Ereignisse

- {{WebExtAPIRef("sessions.onChanged")}}
  - : Wird ausgelöst, wenn ein Tab oder Fenster geschlossen wird.

{{WebExtExamples("h2")}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.sessions`](https://developer.chrome.com/docs/extensions/reference/api/sessions).

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
