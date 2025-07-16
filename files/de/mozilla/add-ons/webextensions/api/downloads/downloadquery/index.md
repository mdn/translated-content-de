---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der `DownloadQuery`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem bestimmten Satz von Downloads zu suchen.

Dieser Typ wird beispielsweise in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} als Abfrageobjekt verwendet, um den Satz von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern, die zurückgegeben oder gelöscht werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattfand. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `query` {{optional_inline}}
  - : Ein `array` von `string`s. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename` oder `url` alle angegebenen Zeichenfolgen enthält. Sie können auch Begriffe, die mit einem Minuszeichen (-) beginnen, einfügen — diese Begriffe **dürfen nicht** im `filename` oder `url` des Elements enthalten sein, um einbezogen zu werden.
- `startedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit gestartet wurden.
- `startedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit gestartet wurden.
- `endedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die vor der angegebenen Zeit beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, die nach der angegebenen Zeit beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` größer als die angegebene Anzahl ist.
- `totalBytesLess` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `totalBytes` kleiner als die angegebene Anzahl ist.
- `filenameRegex` {{optional_inline}}
  - : Ein `string`, der einen regulären Ausdruck darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `filename`-Wert dem angegebenen regulären Ausdruck entspricht.
- `urlRegex` {{optional_inline}}
  - : Ein `string`, der einen regulären Ausdruck darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein, deren `url`-Wert dem angegebenen regulären Ausdruck entspricht.
- `limit` {{optional_inline}}
  - : Ein `integer`, der eine Anzahl von Ergebnissen repräsentiert. Beziehen Sie nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} ein.
- `orderBy` {{optional_inline}}
  - : Ein `array` von `string`s, das {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}-Eigenschaften darstellt, nach denen die Suchergebnisse sortiert werden sollen. Zum Beispiel würde das Einfügen von `startTime` und dann `totalBytes` im Array die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach ihrer Startzeit und dann nach der Gesamtanzahl der Bytes in aufsteigender Reihenfolge sortieren. Um die Sortierung nach einer Eigenschaft in absteigender Reihenfolge zu spezifizieren, setzen Sie ein Minuszeichen vor, z.B. `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} darstellt, das Sie abfragen möchten.
- `url` {{optional_inline}}
  - : Ein `string`, der die absolute URL darstellt, von der der Download initiiert wurde, bevor irgendeine Weiterleitung erfolgte.
- `filename` {{optional_inline}}
  - : Ein String, der den absoluten lokalen Pfad der Download-Datei darstellt, die Sie abfragen möchten.
- `danger` {{optional_inline}}
  - : Ein String, der einen {{WebExtAPIRef('downloads.DangerType')}} darstellt — Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert ein.
- `mime` {{optional_inline}}
  - : Ein `string`, der einen MIME-Typ darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert ein.
- `startTime` {{optional_inline}}
  - : Ein `string`, der ein Zeitformat im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Format darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert ein.
- `endTime` {{optional_inline}}
  - : Ein `string`, der ein Zeitformat im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Format darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert ein.
- `state` {{optional_inline}}
  - : Ein `string`, der einen Download-{{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted` oder `complete`) darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert ein.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download pausiert ist — d.h. ob das Lesen von Daten vom Host gestoppt, die Verbindung jedoch offen gehalten wurde (`true`), oder nicht (`false`). Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert ein.
- `error` {{optional_inline}}
  - : Ein String, der einen {{WebExtAPIRef('downloads.InterruptReason')}} darstellt — ein Grund, warum ein Download unterbrochen wurde. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert ein.
- `bytesReceived` {{optional_inline}}
  - : Eine `number`, die die bislang ohne Berücksichtigung der Dateikompression vom Host empfangenen Bytes darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert ein.
- `totalBytes` {{optional_inline}}
  - : Eine `number`, die die Gesamtanzahl von Bytes in der heruntergeladenen Datei ohne Berücksichtigung der Dateikompression darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert ein.
- `fileSize` {{optional_inline}}
  - : `number`. Anzahl der Bytes nach der Dekompression der gesamten Datei oder -1, wenn unbekannt. Eine `number`, die die Gesamtzahl der Bytes in der Datei nach der Dekompression darstellt. Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert ein.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Beziehen Sie nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert ein.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery) API von Chromium.
