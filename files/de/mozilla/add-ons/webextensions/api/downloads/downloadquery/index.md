---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

Der `DownloadQuery`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einer spezifischen Menge von Downloads zu suchen.

Dieser Typ wird beispielsweise in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} als Abfrageobjekt verwendet, um die Menge der {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern, die zurückgegeben oder gelöscht werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattgefunden hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `query` {{optional_inline}}
  - : Ein `array` von `string`s. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename` oder `url` alle angegebenen Zeichenfolgen enthält. Sie können auch Begriffe einschließen, die mit einem Minuszeichen (-) beginnen — diese Begriffe **dürfen nicht** im `filename` oder `url` des Elements enthalten sein, damit es eingeschlossen wird.
- `startedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor dem angegebenen Zeitpunkt gestartet wurden.
- `startedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach dem angegebenen Zeitpunkt gestartet wurden.
- `endedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor dem angegebenen Zeitpunkt beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach dem angegebenen Zeitpunkt beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` größer als die angegebene Zahl ist.
- `totalBytesLess` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` kleiner als die angegebene Zahl ist.
- `filenameRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename`-Wert dem angegebenen regulären Ausdruck entspricht.
- `urlRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `url`-Wert dem angegebenen regulären Ausdruck entspricht.
- `limit` {{optional_inline}}
  - : Ein `integer`, der eine Anzahl von Ergebnissen darstellt. Schließen Sie nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein.
- `orderBy` {{optional_inline}}
  - : Ein `array` von `string`s, die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} Eigenschaften darstellen, nach denen die Suchergebnisse sortiert werden sollen. Zum Beispiel würde das Hinzufügen von `startTime` und dann `totalBytes` zum Array die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach Startzeit und dann Gesamtbytes sortieren — in aufsteigender Reihenfolge. Um die Sortierung nach einer Eigenschaft in absteigender Reihenfolge anzugeben, präfixen Sie sie mit einem Minuszeichen, zum Beispiel `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, den Sie abfragen möchten.
- `url` {{optional_inline}}
  - : Eine `string`, die die absolute URL darstellt, von der der Download initiiert wurde, vor jeglichen Umleitungen.
- `filename` {{optional_inline}}
  - : Eine `string`, die den absoluten lokalen Pfad der Download-Datei darstellt, die Sie abfragen möchten.
- `danger` {{optional_inline}}
  - : Eine `string`, die einen {{WebExtAPIRef('downloads.DangerType')}} darstellt — schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert ein.
- `mime` {{optional_inline}}
  - : Eine `string`, die einen MIME-Typ darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert ein.
- `startTime` {{optional_inline}}
  - : Eine `string`, die eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert ein.
- `endTime` {{optional_inline}}
  - : Eine `string`, die eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert ein.
- `state` {{optional_inline}}
  - : Eine `string`, die einen Download-{{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted`, oder `complete`) darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert ein.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download angehalten ist — d.h. das Lesen von Daten vom Host gestoppt hat, die Verbindung jedoch offen gehalten hat (`true`), oder nicht (`false`). Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert ein.
- `error` {{optional_inline}}
  - : Eine `string`, die einen {{WebExtAPIRef('downloads.InterruptReason')}} darstellt — ein Grund, warum ein Download unterbrochen wurde. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert ein.
- `bytesReceived` {{optional_inline}}
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes darstellt, ohne Datei-Komprimierung zu berücksichtigen. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert ein.
- `totalBytes` {{optional_inline}}
  - : Eine `number`, die die Gesamtanzahl an Bytes in der heruntergeladenen Datei darstellt, ohne Datei-Komprimierung zu berücksichtigen. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert ein.
- `fileSize` {{optional_inline}}
  - : `number`. Anzahl der Bytes in der gesamten Datei nach Dekompression, oder -1, wenn unbekannt. Eine `number`, die die Gesamtanzahl an Bytes in der Datei nach der Dekompression darstellt. Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert ein.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Schließen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert ein.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery) API.

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
