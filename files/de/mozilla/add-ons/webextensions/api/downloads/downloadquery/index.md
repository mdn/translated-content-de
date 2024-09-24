---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DownloadQuery`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um den Download-Manager nach einem bestimmten Satz von Downloads zu durchsuchen.

Dieser Typ wird zum Beispiel in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} als Abfrageobjekt verwendet, um die Menge der zurückzugebenden oder zu löschenden {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattgefunden hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `query` {{optional_inline}}
  - : Ein `Array` von `Strings`. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename` oder `url` alle angegebenen Strings enthält. Sie können auch Begriffe einschließen, die mit einem Minuszeichen (-) beginnen — diese Begriffe dürfen **nicht** im `filename` oder der `url` des Elements enthalten sein, damit es einbezogen wird.
- `startedBefore` {{optional_inline}}
  - : Eine {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit begonnen haben.
- `startedAfter` {{optional_inline}}
  - : Eine {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit begonnen haben.
- `endedBefore` {{optional_inline}}
  - : Eine {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Eine {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `Nummer`, die eine Anzahl von Bytes darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` größer als die angegebene Zahl sind.
- `totalBytesLess` {{optional_inline}}
  - : Eine `Nummer`, die eine Anzahl von Bytes darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` kleiner als die angegebene Zahl sind.
- `filenameRegex` {{optional_inline}}
  - : Ein `String`, der einen regulären Ausdruck darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename`-Wert mit dem angegebenen regulären Ausdruck übereinstimmt.
- `urlRegex` {{optional_inline}}
  - : Ein `String`, der einen regulären Ausdruck darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `url`-Wert mit dem angegebenen regulären Ausdruck übereinstimmt.
- `limit` {{optional_inline}}
  - : Ein `integer`, der die Anzahl der Ergebnisse darstellt. Beziehen Sie nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein.
- `orderBy` {{optional_inline}}
  - : Ein `Array` von `Strings`, das {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}-Eigenschaften darstellt, nach denen die Suchergebnisse sortiert werden sollen. Zum Beispiel würde das Einschließen von `startTime` und dann `totalBytes` im Array die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach ihrer Startzeit und dann nach den Gesamtbytes sortieren — in aufsteigender Reihenfolge. Um die Sortierung nach einer Eigenschaft in absteigender Reihenfolge anzugeben, setzen Sie ein Minuszeichen davor, zum Beispiel `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, das Sie abfragen möchten.
- `url` {{optional_inline}}
  - : Ein `String`, der die absolute URL darstellt, von der der Download initiiert wurde, bevor Umleitungen stattfanden.
- `filename` {{optional_inline}}
  - : Ein String, der den absoluten lokalen Pfad der herunterzuladenden Datei darstellt, die Sie abfragen möchten.
- `danger` {{optional_inline}}
  - : Ein String, der einen {{WebExtAPIRef('downloads.DangerType')}} darstellt — beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert ein.
- `mime` {{optional_inline}}
  - : Ein `String`, der einen MIME-Typ darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert ein.
- `startTime` {{optional_inline}}
  - : Ein `String`, der eine [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Zeit im Format darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert ein.
- `endTime` {{optional_inline}}
  - : Ein `String`, der eine [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Zeit im Format darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert ein.
- `state` {{optional_inline}}
  - : Ein `String`, der einen Download-{{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted` oder `complete`) darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert ein.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download pausiert ist — d.h. das Lesen von Daten vom Host gestoppt, aber die Verbindung offen gehalten (`true`) oder nicht (`false`). Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert ein.
- `error` {{optional_inline}}
  - : Ein String, der einen {{WebExtAPIRef('downloads.InterruptReason')}} darstellt — ein Grund, warum ein Download unterbrochen wurde. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert ein.
- `bytesReceived` {{optional_inline}}
  - : Eine `Nummer`, die die bisher vom Host empfangene Anzahl von Bytes darstellt, ohne die Dateikompression zu berücksichtigen. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert ein.
- `totalBytes` {{optional_inline}}
  - : Eine `Nummer`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei darstellt, ohne die Dateikompression zu berücksichtigen. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert ein.
- `fileSize` {{optional_inline}}
  - : `Nummer`. Anzahl der Bytes in der gesamten Datei nach Dekomprimierung, oder -1, wenn unbekannt. Eine `Nummer`, die die Gesamtanzahl der Bytes in der Datei nach der Dekomprimierung darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert ein.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der anzeigt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert ein.

## Kompatibilität der Browser

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery) von Chromium.

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
