---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DownloadQuery`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem spezifischen Satz von Downloads zu suchen.

Dieser Typ wird beispielsweise in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} als Abfrageobjekt verwendet, um die Menge der {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern, die zurückgegeben oder gelöscht werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten folgende Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextbezogenen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattgefunden hat. Siehe [Arbeiten mit kontextbezogenen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für mehr Informationen.
- `query` {{optional_inline}}
  - : Ein `array` von `string`s. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename` oder `url` alle angegebenen Zeichenfolgen enthalten. Sie können auch Begriffe hinzufügen, die mit einem Bindestrich (-) beginnen — diese Begriffe **dürfen nicht** im `filename` oder der `url` des Elements enthalten sein, damit es eingeschlossen wird.
- `startedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit begonnen haben.
- `startedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit begonnen haben.
- `endedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` größer ist als die angegebene Zahl.
- `totalBytesLess` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` kleiner ist als die angegebene Zahl.
- `filenameRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename`-Wert mit dem angegebenen regulären Ausdruck übereinstimmt.
- `urlRegex` {{optional_inline}}
  - : Eine `string`, die einen regulären Ausdruck darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `url`-Wert mit dem angegebenen regulären Ausdruck übereinstimmt.
- `limit` {{optional_inline}}
  - : Ein `integer`, der eine Anzahl von Ergebnissen darstellt. Schließen Sie nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein.
- `orderBy` {{optional_inline}}
  - : Ein `array` von `string`s, die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}-Eigenschaften darstellen, nach denen die Suchergebnisse sortiert werden sollen. Beispielsweise würde das Einschließen von `startTime` und dann `totalBytes` in das Array die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach ihrer Startzeit und dann nach den gesamten Bytes sortieren — in aufsteigender Reihenfolge. Um die Sortierung nach einer Eigenschaft in absteigender Reihenfolge anzugeben, fügen Sie ihr ein Minuszeichen voran, zum Beispiel `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, den Sie abfragen möchten.
- `url` {{optional_inline}}
  - : Eine `string`, die die absolute URL repräsentiert, von der der Download initiiert wurde, vor jeglichen Umleitungen.
- `filename` {{optional_inline}}
  - : Eine `string`, die den absoluten lokalen Pfad der Download-Datei darstellt, die Sie abfragen möchten.
- `danger` {{optional_inline}}
  - : Eine `string`, die einen {{WebExtAPIRef('downloads.DangerType')}} darstellt — schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert ein.
- `mime` {{optional_inline}}
  - : Eine `string`, die einen MIME-Typ darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert ein.
- `startTime` {{optional_inline}}
  - : Eine `string`, die eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert ein.
- `endTime` {{optional_inline}}
  - : Eine `string`, die eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format darstellt. Wird auf {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert beschränkt.
- `state` {{optional_inline}}
  - : Eine `string`, die einen Download-{{WebExtAPIRef('downloads.State')}} darstellt (`in_progress`, `interrupted` oder `complete`). Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert ein.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download pausiert ist — d.h. das Lesen von Daten vom Host gestoppt wurde, die Verbindung jedoch offen blieb (`true`) oder nicht (`false`). Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert ein.
- `error` {{optional_inline}}
  - : Eine `string`, die einen {{WebExtAPIRef('downloads.InterruptReason')}} darstellt — ein Grund, warum ein Download unterbrochen wurde. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert ein.
- `bytesReceived` {{optional_inline}}
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes ohne Berücksichtigung der Dateikomprimierung darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert ein.
- `totalBytes` {{optional_inline}}
  - : Eine `number`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei ohne Berücksichtigung der Dateikomprimierung darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert ein.
- `fileSize` {{optional_inline}}
  - : `number`. Anzahl der Bytes in der gesamten Datei nach der Dekomprimierung oder -1, wenn unbekannt. Eine `number`, die die Gesamtanzahl der Bytes in der Datei nach der Dekomprimierung darstellt. Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert ein.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Schließen Sie nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert ein.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery) API von Chromium.
