---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{AddonSidebar}}

Der `DownloadItem`-Typ des {{WebExtAPIRef("downloads")}} API repräsentiert eine heruntergeladene Datei.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `byExtensionId` {{optional_inline}}
  - : Ein `string`, der die ID der Erweiterung darstellt, die den Download ausgelöst hat (falls er durch eine Erweiterung ausgelöst wurde). Diese ändert sich nicht, sobald sie gesetzt wurde. Wenn der Download nicht durch eine Erweiterung ausgelöst wurde, ist dies undefiniert.
- `byExtensionName` {{optional_inline}}
  - : Ein `string`, der den Namen der Erweiterung darstellt, die den Download ausgelöst hat (falls er durch eine Erweiterung ausgelöst wurde). Dies kann sich ändern, wenn die Erweiterung ihren Namen ändert oder der Benutzer seine Lokalisierung ändert. Wenn der Download nicht durch eine Erweiterung ausgelöst wurde, ist dies undefiniert.
- `bytesReceived`
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes während des Downloads darstellt; dies berücksichtigt keine Dateikomprimierung.
- `canResume`
  - : Ein `boolean`, der anzeigt, ob ein aktuell unterbrochener (z.B. pausierter) Download von der Stelle, an der er unterbrochen wurde, fortgesetzt werden kann (`true`), oder nicht (`false`).
- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattgefunden hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `danger`
  - : Ein String, der angibt, ob dieser Download als sicher oder als verdächtig bekannt angesehen wird. Seine möglichen Werte sind im {{WebExtAPIRef('downloads.DangerType')}}-Typ definiert.
- `endTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Format), das die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Zeitpunkt darstellt, zu dem dieser Download endete. Dies ist undefiniert, wenn der Download noch nicht abgeschlossen ist.
- `error` {{optional_inline}}
  - : Ein String, der angibt, warum ein Download unterbrochen wurde. Mögliche Werte sind im {{WebExtAPIRef('downloads.InterruptReason')}}-Typ definiert. Dies ist undefiniert, wenn kein Fehler aufgetreten ist.
- `estimatedEndTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Format), das die geschätzte Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Zeitpunkt darstellt, zu dem dieser Download voraussichtlich abgeschlossen sein wird. Dies ist undefiniert, wenn unbekannt (insbesondere ist es undefiniert im `DownloadItem`, der in {{WebExtAPIRef("downloads.onCreated")}} übergeben wird).
- `exists`
  - : Ein `boolean`, der anzeigt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Diese Information könnte veraltet sein, da Browser nicht automatisch auf Dateientfernung achten — um zu überprüfen, ob eine Datei existiert, rufen Sie die {{WebExtAPIRef('downloads.search()')}}-Methode auf und filtern Sie nach der betreffenden Datei.
- `filename`
  - : Ein `string`, der den absoluten lokalen Pfad der Datei darstellt.
- `fileSize`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der gesamten Datei nach der Dekomprimierung angibt. Ein Wert von -1 bedeutet hier, dass die Gesamtgröße der Datei unbekannt ist.
- `id`
  - : Ein `integer`, der eine eindeutige Kennung für die heruntergeladene Datei darstellt, die über Browser-Sitzungen hinweg persistent ist.
- `incognito`
  - : Ein `boolean`, der anzeigt, ob der Download im Browserverlauf aufgezeichnet ist (`false`) oder nicht (`true`).
- `mime`
  - : Ein `string`, der den MIME-Typ der heruntergeladenen Datei darstellt.
- `paused`
  - : Ein `boolean`, der anzeigt, ob der Download pausiert ist, d.h. ob der Download das Lesen von Daten vom Host gestoppt hat, aber die Verbindung offen gehalten hat. Wenn ja, ist der Wert `true`, `false` wenn nicht.
- `referrer`
  - : Ein `string`, der den Referrer der heruntergeladenen Datei darstellt.
- `startTime`
  - : Ein `string` (im [ISO 8601](https://de.wikipedia.org/wiki/ISO_8601)-Format), das die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Zeitpunkt darstellt, zu dem dieser Download begann.
- `state`
  - : Ein `string`, der anzeigt, ob der Download fortschreitet, unterbrochen oder abgeschlossen ist. Mögliche Werte sind im {{WebExtAPIRef('downloads.State')}}-Typ definiert.
- `totalBytes`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei angibt. Dies berücksichtigt keine Dateikomprimierung. Ein Wert von -1 bedeutet hier, dass die Gesamtanzahl der Bytes unbekannt ist.
- `url`
  - : Ein `string`, der die absolute URL darstellt, von der die Datei heruntergeladen wurde.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Dieses API basiert auf Chromium's [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadItem) API.
