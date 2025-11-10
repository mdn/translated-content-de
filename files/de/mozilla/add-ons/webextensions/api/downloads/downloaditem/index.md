---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Der `DownloadItem`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert eine heruntergeladene Datei.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `byExtensionId` {{optional_inline}}
  - : Ein `string`, der die ID der Erweiterung darstellt, die den Download ausgelöst hat (falls er von einer Erweiterung ausgelöst wurde). Dieser Wert ändert sich nicht, wenn er einmal gesetzt ist. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dieser Wert undefiniert.
- `byExtensionName` {{optional_inline}}
  - : Ein `string`, der den Namen der Erweiterung darstellt, die den Download ausgelöst hat (falls er von einer Erweiterung ausgelöst wurde). Dieser Wert kann sich ändern, wenn die Erweiterung ihren Namen ändert oder der Benutzer seine Spracheinstellung ändert. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dieser Wert undefiniert.
- `bytesReceived`
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes während des Downloads darstellt; dies berücksichtigt nicht die Dateikomprimierung.
- `canResume`
  - : Ein `boolean`, der angibt, ob ein derzeit unterbrochener (z.B. pausierter) Download von der Stelle, an der er unterbrochen wurde, fortgesetzt werden kann (`true`) oder nicht (`false`).
- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattgefunden hat. Weitere Informationen finden Sie unter [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities).
- `danger`
  - : Ein String, der angibt, ob dieser Download als sicher oder als verdächtig bekannt ist. Die möglichen Werte sind im {{WebExtAPIRef('downloads.DangerType')}}-Typ definiert.
- `endTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), der die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Ende des Downloads darstellt. Dies ist undefiniert, wenn der Download noch nicht abgeschlossen ist.
- `error` {{optional_inline}}
  - : Ein String, der angibt, warum ein Download unterbrochen wurde. Mögliche Werte sind im {{WebExtAPIRef('downloads.InterruptReason')}}-Typ definiert. Dies ist undefiniert, wenn kein Fehler aufgetreten ist.
- `estimatedEndTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), der die geschätzte Anzahl der Millisekunden zwischen der UNIX-Epoche und dem voraussichtlichen Abschluss dieses Downloads darstellt. Dies ist undefiniert, wenn es nicht bekannt ist (insbesondere ist es in dem `DownloadItem` undefiniert, das in {{WebExtAPIRef("downloads.onCreated")}} übergeben wird).
- `exists`
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Diese Information könnte veraltet sein, da Browser das Entfernen von Dateien nicht automatisch überwachen — um zu überprüfen, ob eine Datei existiert, rufen Sie die {{WebExtAPIRef('downloads.search()')}}-Methode auf und filtern Sie nach der betreffenden Datei.
- `filename`
  - : Ein `string`, der den absoluten lokalen Pfad der Datei darstellt.
- `fileSize`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der ganzen Datei nach der Dekompression anzeigt. Ein Wert von -1 bedeutet, dass die Gesamtgröße der Datei unbekannt ist.
- `id`
  - : Ein `integer`, der eine eindeutige Kennung für die heruntergeladene Datei darstellt, die über Browsersitzungen hinweg bestehen bleibt.
- `incognito`
  - : Ein `boolean`, der angibt, ob der Download im Browserverlauf aufgezeichnet wird (`false`) oder nicht (`true`).
- `mime`
  - : Ein `string`, der den MIME-Typ der heruntergeladenen Datei darstellt.
- `paused`
  - : Ein `boolean`, der angibt, ob der Download pausiert ist, d.h. ob der Download das Lesen von Daten vom Host gestoppt hat, aber die Verbindung offen gehalten wurde. Wenn ja, ist der Wert `true`, andernfalls `false`.
- `referrer`
  - : Ein `string`, der den Referrer der heruntergeladenen Datei darstellt.
- `startTime`
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), der die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Beginn des Downloads darstellt.
- `state`
  - : Ein `string`, der angibt, ob der Download fortschreitet, unterbrochen ist oder abgeschlossen ist. Die möglichen Werte sind im {{WebExtAPIRef('downloads.State')}}-Typ definiert.
- `totalBytes`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei angibt. Dies berücksichtigt die Dateikomprimierung nicht. Ein Wert von -1 bedeutet, dass die Gesamtanzahl der Bytes unbekannt ist.
- `url`
  - : Ein `string`, der die absolute URL darstellt, von der die Datei heruntergeladen wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadItem) API.
