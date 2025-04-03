---
title: downloads.DownloadQuery
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadQuery
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Der `DownloadQuery`-Typ der {{WebExtAPIRef("downloads")}} API definiert eine Reihe von Parametern, die verwendet werden können, um im Download-Manager nach einem bestimmten Satz von Downloads zu suchen.

Dieser Typ wird beispielsweise in {{WebExtAPIRef("downloads.search()")}} und {{WebExtAPIRef("downloads.erase()")}} verwendet, als Abfrageobjekt, um die Menge der {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zu filtern, die zurückgegeben oder gelöscht werden sollen.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattfand. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `query` {{optional_inline}}
  - : Ein `array` von `string`s. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, deren `filename` oder `url` alle angegebenen Strings enthalten. Sie können auch Begriffe einbeziehen, die mit einem Bindestrich (-) beginnen — diese Begriffe **dürfen nicht** im `filename` oder `url` des Elements enthalten sein, damit es einbezogen wird.
- `startedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, die vor der angegebenen Zeit gestartet wurden.
- `startedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, die nach der angegebenen Zeit gestartet wurden.
- `endedBefore` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, die vor der angegebenen Zeit beendet wurden.
- `endedAfter` {{optional_inline}}
  - : Ein {{WebExtAPIRef('downloads.DownloadTime', "DownloadTime")}}. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, die nach der angegebenen Zeit beendet wurden.
- `totalBytesGreater` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, deren `totalBytes` größer sind als die angegebene Zahl.
- `totalBytesLess` {{optional_inline}}
  - : Eine `number`, die eine Anzahl von Bytes repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, deren `totalBytes` kleiner sind als die angegebene Zahl.
- `filenameRegex` {{optional_inline}}
  - : Ein `string`, der einen regulären Ausdruck repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, deren `filename`-Wert dem angegebenen regulären Ausdruck entspricht.
- `urlRegex` {{optional_inline}}
  - : Ein `string`, der einen regulären Ausdruck repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen, deren `url`-Wert dem angegebenen regulären Ausdruck entspricht.
- `limit` {{optional_inline}}
  - : Ein `integer`, der eine Anzahl von Ergebnissen repräsentiert. Nur die angegebene Anzahl von {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} einbeziehen.
- `orderBy` {{optional_inline}}
  - : Ein `array` von `string`s, der {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}}-Eigenschaften repräsentiert, nach denen die Suchergebnisse sortiert werden sollen. Beispielsweise würde die Einbeziehung von `startTime` und dann `totalBytes` in das Array die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} nach ihrer Startzeit und dann nach Gesamtbytes sortieren — in aufsteigender Reihenfolge. Um eine Eigenschaft in absteigender Reihenfolge zu sortieren, wird sie mit einem Bindestrich vorangestellt, z. B. `-startTime`.
- `id` {{optional_inline}}
  - : Ein `integer`, der die ID des {{WebExtAPIRef("downloads.DownloadItem")}} repräsentiert, nach dem Sie suchen möchten.
- `url` {{optional_inline}}
  - : Ein `string`, der die absolute URL repräsentiert, von der der Download initiiert wurde, vor jeglichen Weiterleitungen.
- `filename` {{optional_inline}}
  - : Ein String, der den absoluten lokalen Pfad der Download-Datei repräsentiert, nach der Sie suchen möchten.
- `danger` {{optional_inline}}
  - : Ein String, der einen {{WebExtAPIRef('downloads.DangerType')}} repräsentiert — nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `danger`-Wert einbeziehen.
- `mime` {{optional_inline}}
  - : Ein `string`, der einen MIME-Typ repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `mime`-Wert einbeziehen.
- `startTime` {{optional_inline}}
  - : Ein `string`, der eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `startTime`-Wert einbeziehen.
- `endTime` {{optional_inline}}
  - : Ein `string`, der eine Zeit im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format repräsentiert. Nur die {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `endTime`-Wert einbeziehen.
- `state` {{optional_inline}}
  - : Ein `string`, der einen Download-{{WebExtAPIRef('downloads.State')}} (`in_progress`, `interrupted`, oder `complete`) repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `state`-Wert einbeziehen.
- `paused` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob ein Download pausiert ist — d.h. das Lesen von Daten vom Host gestoppt hat, aber die Verbindung offen gehalten hat (`true`), oder nicht (`false`). Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `paused`-Wert einbeziehen.
- `error` {{optional_inline}}
  - : Ein String, der einen {{WebExtAPIRef('downloads.InterruptReason')}} repräsentiert — ein Grund, warum ein Download unterbrochen wurde. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `error`-Wert einbeziehen.
- `bytesReceived` {{optional_inline}}
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes ohne Berücksichtigung der Dateikomprimierung repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `bytesReceived`-Wert einbeziehen.
- `totalBytes` {{optional_inline}}
  - : Eine `number`, die die Gesamtzahl der Bytes in der heruntergeladenen Datei ohne Berücksichtigung der Dateikomprimierung repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `totalBytes`-Wert einbeziehen.
- `fileSize` {{optional_inline}}
  - : `number`. Anzahl der Bytes in der gesamten Datei nach Dekomprimierung, oder -1, wenn unbekannt. Eine `number`, die die Gesamtzahl der Bytes in der Datei nach Dekomprimierung repräsentiert. Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `fileSize`-Wert einbeziehen.
- `exists` {{optional_inline}}
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Nur {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} mit diesem `exists`-Wert einbeziehen.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der API [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadQuery) von Chromium.
