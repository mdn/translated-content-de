---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `DownloadQuery` Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem spezifischen Satz von Downloads zu suchen.

Dieser Typ wird beispielsweise in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} verwendet, um als Abfrageobjekt den Satz von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern, die zurückgegeben oder gelöscht werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattgefunden hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `query` {{optional_inline}}
  - : Ein `array` von `string`s. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename` oder `url` alle der angegebenen Zeichenfolgen enthält. Sie können auch Begriffe einschließen, die mit einem Minuszeichen (-) beginnen – diese Begriffe **dürfen nicht** im `filename` oder `url` des Elements enthalten sein, damit es einbezogen wird.
- `startedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor dem angegebenen Zeitpunkt gestartet wurden.
- `startedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach dem angegebenen Zeitpunkt gestartet wurden.
- `endedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor dem angegebenen Zeitpunkt beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach dem angegebenen Zeitpunkt beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` größer als die angegebene Zahl ist.
- `totalBytesLess` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` kleiner als die angegebene Zahl ist.
- `filenameRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename`-Wert dem angegebenen regulären Ausdruck entspricht.
- `urlRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `url`-Wert dem angegebenen regulären Ausdruck entspricht.
- `limit` {{optional_inline}}
  - : Ein `integer`, der eine Anzahl von Ergebnissen darstellt. Beziehen Sie nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein.
- `orderBy` {{optional_inline}}
  - : Ein `array` von `string`s, die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}-Eigenschaften darstellen, nach denen die Suchergebnisse sortiert werden sollen. Beispielsweise würde das Einfügen von `startTime` und dann `totalBytes` in das Array die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach ihrer Startzeit und dann nach totalen Bytes in aufsteigender Reihenfolge sortieren. Um nach einer Eigenschaft in absteigender Reihenfolge zu sortieren, prefixen Sie sie mit einem Bindestrich, zum Beispiel `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, den Sie abfragen möchten.
- `url` {{optional_inline}}
  - : Eine `string`, die die absolute URL darstellt, von der der Download initiiert wurde, bevor Weiterleitungen stattfanden.
- `filename` {{optional_inline}}
  - : Ein `string`, der den absoluten lokalen Pfad der heruntergeladenen Datei darstellt, die Sie abfragen möchten.
- `danger` {{optional_inline}}
  - : Ein `string`, der einen {{WebExtAPIRef('downloads.DangerType')}} darstellt – beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert ein.
- `mime` {{optional_inline}}
  - : Ein `string`, der einen MIME-Typ darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert ein.
- `startTime` {{optional_inline}}
  - : Ein `string`, das ein Zeitformat nach [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert ein.
- `endTime` {{optional_inline}}
  - : Ein `string`, das ein Zeitformat nach [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert ein.
- `state` {{optional_inline}}
  - : Ein `string`, der einen Download-{{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted` oder `complete`) darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert ein.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download pausiert ist — d.h. das Lesen von Daten vom Host gestoppt wurde, aber die Verbindung (`true`) offen gehalten wird oder nicht (`false`). Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert ein.
- `error` {{optional_inline}}
  - : Ein `string`, der einen {{WebExtAPIRef('downloads.InterruptReason')}} darstellt – einen Grund, warum ein Download unterbrochen wurde. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert ein.
- `bytesReceived` {{optional_inline}}
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes ohne Berücksichtigung der Dateikomprimierung darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert ein.
- `totalBytes` {{optional_inline}}
  - : Eine `number`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei ohne Berücksichtigung der Dateikomprimierung darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert ein.
- `fileSize` {{optional_inline}}
  - : `number`. Anzahl der Bytes in der gesamten Datei nach der Dekomprimierung oder -1, wenn unbekannt. Eine `number`, die die Gesamtanzahl der Bytes in der Datei nach der Dekomprimierung darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert ein.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert ein.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery) API von Chromium.
