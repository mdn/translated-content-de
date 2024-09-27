---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DownloadQuery`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem bestimmten Satz von Downloads zu suchen.

Dieser Typ wird beispielsweise in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} verwendet, als ein Abfrageobjekt, um den Satz von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern, die zurückgegeben oder gelöscht werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattfand. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `query` {{optional_inline}}
  - : Ein `array` von `string`s. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename` oder `url` alle angegebenen Zeichenfolgen enthält. Sie können auch Begriffe mit einem Minuszeichen (-) beginnen — diese Begriffe **dürfen nicht** im `filename` oder `url` des Elements enthalten sein, damit es einbezogen wird.
- `startedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit begonnen haben.
- `startedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit begonnen haben.
- `endedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` größer als die angegebene Zahl ist.
- `totalBytesLess` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` kleiner als die angegebene Zahl ist.
- `filenameRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename`-Wert mit dem angegebenen regulären Ausdruck übereinstimmt.
- `urlRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `url`-Wert mit dem angegebenen regulären Ausdruck übereinstimmt.
- `limit` {{optional_inline}}
  - : Ein `integer`, der eine Anzahl von Ergebnissen darstellt. Schließt nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein.
- `orderBy` {{optional_inline}}
  - : Ein `array` von `string`s, die Eigenschaften von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} darstellen, nach denen die Suchergebnisse sortiert werden sollen. Zum Beispiel, wenn `startTime` dann `totalBytes` in das Array aufgenommen werden, würden die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach ihrer Startzeit und danach nach der Gesamtzahl der Bytes sortiert — in aufsteigender Reihenfolge. Um die Sortierung nach einer Eigenschaft in absteigender Reihenfolge anzugeben, prefixen Sie es mit einem Bindestrich, zum Beispiel `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, das Sie abfragen möchten.
- `url` {{optional_inline}}
  - : Eine `string`, die die absolute URL darstellt, von der der Download initiiert wurde, bevor Weiterleitungen erfolgten.
- `filename` {{optional_inline}}
  - : Eine Zeichenfolge, die den absoluten lokalen Pfad der heruntergeladenen Datei darstellt, die Sie abfragen möchten.
- `danger` {{optional_inline}}
  - : Eine Zeichenfolge, die eine {{WebExtAPIRef('downloads.DangerType')}} darstellt — schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert ein.
- `mime` {{optional_inline}}
  - : Eine `string`, die einen MIME-Typ darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert ein.
- `startTime` {{optional_inline}}
  - : Eine `string`, die ein Zeitformat im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Format darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert ein.
- `endTime` {{optional_inline}}
  - : Eine `string`, die ein Zeitformat im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Format darstellt. Begrenzung auf {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert.
- `state` {{optional_inline}}
  - : Eine `string`, die einen Download-{{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted` oder `complete`) darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert ein.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download pausiert ist — d.h., das Lesen von Daten vom Host gestoppt, aber die Verbindung offen gehalten (`true`) oder nicht (`false`). Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert ein.
- `error` {{optional_inline}}
  - : Eine Zeichenfolge, die einen {{WebExtAPIRef('downloads.InterruptReason')}} darstellt — ein Grund, warum ein Download unterbrochen wurde. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert ein.
- `bytesReceived` {{optional_inline}}
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes ohne Berücksichtigung der Dateikomprimierung darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert ein.
- `totalBytes` {{optional_inline}}
  - : Eine `number`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei darstellt, ohne Berücksichtigung der Dateikomprimierung. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert ein.
- `fileSize` {{optional_inline}}
  - : `number`. Anzahl der Bytes in der gesamten Datei nach der Dekomprimierung, oder -1, falls unbekannt. Eine `number`, die die Gesamtanzahl der Bytes in der Datei nach der Dekomprimierung darstellt. Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert ein.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Schließt nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert ein.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der Chromium-API [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery).

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
