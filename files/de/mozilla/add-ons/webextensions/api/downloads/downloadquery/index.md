---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

Der `DownloadQuery`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem bestimmten Satz von Downloads zu suchen.

Dieser Typ wird beispielsweise in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} als Abfrageobjekt verwendet, um den Satz von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern, die zurückgegeben oder gelöscht werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattfand. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `query` {{optional_inline}}
  - : Ein `array` von `string`s. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, deren `filename` oder `url` alle angegebenen Zeichenfolgen enthält. Sie können auch Begriffe einschließen, die mit einem Minuszeichen (-) beginnen — diese Begriffe **dürfen nicht** im `filename` oder `url` des Elements enthalten sein, damit es eingeschlossen wird.
- `startedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, die vor der angegebenen Zeit gestartet wurden.
- `startedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, die nach der angegebenen Zeit gestartet wurden.
- `endedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, die vor der angegebenen Zeit beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, die nach der angegebenen Zeit beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, deren `totalBytes` größer als die angegebene Zahl ist.
- `totalBytesLess` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, deren `totalBytes` kleiner als die angegebene Zahl ist.
- `filenameRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, deren `filename`-Wert dem angegebenen regulären Ausdruck entspricht.
- `urlRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen, deren `url`-Wert dem angegebenen regulären Ausdruck entspricht.
- `limit` {{optional_inline}}
  - : Ein `integer`, der eine Anzahl von Ergebnissen darstellt. Nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einschließen.
- `orderBy` {{optional_inline}}
  - : Ein `array` von `string`s, die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}-Eigenschaften darstellen, nach denen die Suchergebnisse sortiert werden sollen. Wenn Sie zum Beispiel `startTime` und dann `totalBytes` im Array einschließen, werden die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach ihrer Startzeit und dann nach der Gesamtbytezahl in aufsteigender Reihenfolge sortiert. Um die Sortierung nach einer Eigenschaft in absteigender Reihenfolge anzugeben, stellen Sie ihr ein Minuszeichen voran, zum Beispiel `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, den Sie abfragen möchten.
- `url` {{optional_inline}}
  - : Eine `string`, die die absolute URL darstellt, von der aus der Download initiiert wurde, noch vor allen Weiterleitungen.
- `filename` {{optional_inline}}
  - : Eine Zeichenfolge, die den absoluten lokalen Pfad der heruntergeladenen Datei darstellt, die Sie abfragen möchten.
- `danger` {{optional_inline}}
  - : Eine Zeichenfolge, die einen {{WebExtAPIRef('downloads.DangerType')}} darstellt — nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert einschließen.
- `mime` {{optional_inline}}
  - : Ein `string`, der einen MIME-Typ darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert einschließen.
- `startTime` {{optional_inline}}
  - : Eine `string`, die eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert einschließen.
- `endTime` {{optional_inline}}
  - : Eine `string`, die eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format darstellt. Nur auf {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert beschränkt.
- `state` {{optional_inline}}
  - : Ein `string`, der einen Download-{{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted` oder `complete`) darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert einschließen.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download pausiert ist — d.h. ob das Lesen von Daten vom Host gestoppt wurde, die Verbindung jedoch offen gehalten wird (`true`) oder nicht (`false`). Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert einschließen.
- `error` {{optional_inline}}
  - : Eine Zeichenfolge, die einen {{WebExtAPIRef('downloads.InterruptReason')}} darstellt — einen Grund, warum ein Download unterbrochen wurde. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert einschließen.
- `bytesReceived` {{optional_inline}}
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes darstellt, ohne dabei die Datei-Kompression zu berücksichtigen. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert einschließen.
- `totalBytes` {{optional_inline}}
  - : Eine `number`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei darstellt, ohne dabei die Datei-Kompression zu berücksichtigen. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert einschließen.
- `fileSize` {{optional_inline}}
  - : `number`. Anzahl der Bytes in der gesamten Datei nach Dekomprimierung oder -1, wenn unbekannt. Eine `number`, die die Gesamtanzahl der Bytes in der Datei nach der Dekomprimierung darstellt. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert einschließen.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert einschließen.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery) API.
