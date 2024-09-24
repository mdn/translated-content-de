---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DownloadItem`-Typ der {{WebExtAPIRef("downloads")}}-API repräsentiert eine heruntergeladene Datei.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `byExtensionId` {{optional_inline}}
  - : Ein `string`, der die ID der Erweiterung darstellt, die den Download ausgelöst hat (falls er durch eine Erweiterung ausgelöst wurde). Dies ändert sich nicht, sobald es festgelegt ist. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dies undefiniert.
- `byExtensionName` {{optional_inline}}
  - : Ein `string`, der den Namen der Erweiterung darstellt, die den Download ausgelöst hat (falls er durch eine Erweiterung ausgelöst wurde). Dies kann sich ändern, wenn die Erweiterung ihren Namen ändert oder der Benutzer seine Sprache ändert. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dies undefiniert.
- `bytesReceived`
  - : Eine `number`, die die Anzahl der bisher vom Host während des Downloads empfangenen Bytes darstellt; dies berücksichtigt keine Dateikomprimierung.
- `canResume`
  - : Ein `boolean`, der angibt, ob ein derzeit unterbrochener (z.B. pausierter) Download von dem Punkt aus fortgesetzt werden kann, an dem er unterbrochen wurde (`true`), oder nicht (`false`).
- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattfand. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `danger`
  - : Ein String, der anzeigt, ob dieser Download als sicher gilt oder als verdächtig bekannt ist. Die möglichen Werte sind im {{WebExtAPIRef('downloads.DangerType')}}-Typ definiert.
- `endTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), der die Anzahl der Millisekunden zwischen der UNIX-Zeit und dem Zeitpunkt darstellt, zu dem dieser Download beendet wurde. Dies ist undefiniert, wenn der Download noch nicht abgeschlossen ist.
- `error` {{optional_inline}}
  - : Ein String, der angibt, warum ein Download unterbrochen wurde. Mögliche Werte sind im {{WebExtAPIRef('downloads.InterruptReason')}}-Typ definiert. Dies ist undefiniert, wenn kein Fehler aufgetreten ist.
- `estimatedEndTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), der die geschätzte Anzahl von Millisekunden zwischen der UNIX-Zeit und dem Zeitpunkt, an dem dieser Download voraussichtlich abgeschlossen sein wird, darstellt. Dies ist undefiniert, wenn es nicht bekannt ist (insbesondere ist es undefiniert im `DownloadItem`, das in {{WebExtAPIRef("downloads.onCreated")}} übergeben wird).
- `exists`
  - : Ein `boolean`, das angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Diese Information könnte veraltet sein, da Browser Dateientfernungen nicht automatisch überwachen — um zu überprüfen, ob eine Datei existiert, rufen Sie die {{WebExtAPIRef('downloads.search()')}}-Methode auf, wobei nach der betreffenden Datei gefiltert wird.
- `filename`
  - : Ein `string`, das den absoluten lokalen Pfad der Datei darstellt.
- `fileSize`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der gesamten Datei nach Dekomprimierung angibt. Ein Wert von -1 bedeutet hier, dass die Gesamtgröße der Datei unbekannt ist.
- `id`
  - : Ein `integer`, der eine eindeutige Kennung für die heruntergeladene Datei darstellt, die über Browsersitzungen hinweg bestehen bleibt.
- `incognito`
  - : Ein `boolean`, das angibt, ob der Download im Browserverlauf (`false`) aufgezeichnet wird oder nicht (`true`).
- `mime`
  - : Ein `string`, der den MIME-Typ der heruntergeladenen Datei darstellt.
- `paused`
  - : Ein `boolean`, das angibt, ob der Download pausiert ist, d.h. ob der Download das Lesen von Daten vom Host gestoppt hat, aber die Verbindung offen gehalten hat. Wenn ja, ist der Wert `true`, wenn nein, `false`.
- `referrer`
  - : Ein `string`, der den Referrer der heruntergeladenen Datei darstellt.
- `startTime`
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), der die Anzahl der Millisekunden zwischen der UNIX-Zeit und dem Zeitpunkt darstellt, an dem dieser Download begann.
- `state`
  - : Ein `string`, der angibt, ob der Download fortschreitet, unterbrochen oder abgeschlossen ist. Mögliche Werte sind im {{WebExtAPIRef('downloads.State')}}-Typ definiert.
- `totalBytes`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der herunterzuladenden Datei angibt. Dies berücksichtigt keine Dateikomprimierung. Ein Wert von -1 bedeutet hier, dass die Gesamtanzahl der Bytes unbekannt ist.
- `url`
  - : Ein `string`, der die absolute URL darstellt, von der die Datei heruntergeladen wurde.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadItem)-API von Chromium.

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
