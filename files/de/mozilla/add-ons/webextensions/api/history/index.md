---
title: history
slug: Mozilla/Add-ons/WebExtensions/API/history
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Verwenden Sie die `history` API, um mit dem Browserverlauf zu interagieren.

Wenn Sie Informationen über den Sitzungsverlauf des Browsers suchen, sehen Sie sich die [History-Schnittstelle](/de/docs/Web/API/History) an.

> [!NOTE]
> Downloads werden als [`HistoryItem`](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem)-Objekte behandelt. Daher werden Ereignisse wie [`history.onVisited`](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/onVisited) für Downloads ausgelöst.

Der Browserverlauf ist eine chronologische Aufzeichnung der Seiten, die ein Benutzer besucht hat. Die History API ermöglicht es Ihnen:

- [nach Seiten zu suchen, die im Browserverlauf erscheinen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/search)
- [einzelne Seiten aus dem Browserverlauf zu entfernen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteUrl)
- [Seiten zum Browserverlauf hinzuzufügen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/addUrl)
- [alle Seiten aus dem Browserverlauf zu entfernen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteAll).

Der Benutzer hat jedoch möglicherweise eine einzelne Seite mehrfach besucht, daher hat die API auch das Konzept der "Besuche". So können Sie mit dieser API auch:

- [das gesamte Set von Besuchen, das der Benutzer zu einer bestimmten Seite gemacht hat, abrufen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/getVisits)
- [Besuche von Seiten, die innerhalb eines bestimmten Zeitraums gemacht wurden, löschen](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/deleteRange).

Um diese API zu verwenden, muss eine Erweiterung die "history"-[Berechtigung](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) in ihrer [`manifest.json`](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)-Datei anfordern.

## Typen

- {{WebExtAPIRef("history.TransitionType")}}
  - : Beschreibt, wie der Browser zu einer bestimmten Seite navigiert ist.
- {{WebExtAPIRef("history.HistoryItem")}}
  - : Bietet Informationen über eine bestimmte Seite im Browserverlauf.
- {{WebExtAPIRef("history.VisitItem")}}
  - : Beschreibt einen einzelnen Besuch auf einer Seite.

## Funktionen

- {{WebExtAPIRef("history.search()")}}
  - : Durchsucht den Browserverlauf nach [`history.HistoryItem`](/de/docs/Mozilla/Add-ons/WebExtensions/API/history/HistoryItem)-Objekten, die den angegebenen Kriterien entsprechen.
- {{WebExtAPIRef("history.getVisits()")}}
  - : Ruft Informationen über Besuche auf einer bestimmten Seite ab.
- {{WebExtAPIRef("history.addUrl()")}}
  - : Fügt einen Eintrag zum Browserverlauf über einen Besuch auf der angegebenen Seite hinzu.
- {{WebExtAPIRef("history.deleteUrl()")}}
  - : Entfernt alle Besuche der angegebenen URL aus dem Browserverlauf.
- {{WebExtAPIRef("history.deleteRange()")}}
  - : Entfernt alle Besuche von Seiten, die der Benutzer innerhalb des angegebenen Zeitraums gemacht hat.
- {{WebExtAPIRef("history.deleteAll()")}}
  - : Entfernt alle Besuche aus dem Browserverlauf.

## Ereignisse

- {{WebExtAPIRef("history.onTitleChanged")}}
  - : Wird ausgelöst, wenn der Titel einer vom Benutzer besuchten Seite aufgezeichnet wird.
- {{WebExtAPIRef("history.onVisited")}}
  - : Wird jedes Mal ausgelöst, wenn der Benutzer eine Seite besucht, und stellt die {{WebExtAPIRef("history.HistoryItem")}}-Daten für diese Seite bereit.
- {{WebExtAPIRef("history.onVisitRemoved")}}
  - : Wird ausgelöst, wenn eine URL vollständig aus dem Browserverlauf entfernt wird.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples("h2")}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history) API. Diese Dokumentation ist abgeleitet von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

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
