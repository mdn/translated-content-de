---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
l10n:
  sourceCommit: 5c2abb422d26ae422891e699cc083bdd93c5e410
---

{{AddonSidebar}}

Der `DownloadItem`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert eine heruntergeladene Datei.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `byExtensionId` {{optional_inline}}
  - : Ein `string`, das die ID der Erweiterung darstellt, die den Download ausgelöst hat (falls er von einer Erweiterung ausgelöst wurde). Dies ändert sich nicht, sobald es festgelegt ist. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dies undefiniert.
- `byExtensionName` {{optional_inline}}
  - : Ein `string`, das den Namen der Erweiterung darstellt, die den Download ausgelöst hat (falls er von einer Erweiterung ausgelöst wurde). Dies kann sich ändern, wenn die Erweiterung ihren Namen ändert oder der Benutzer seine Spracheinstellung ändert. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dies undefiniert.
- `bytesReceived`
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes während des Downloads darstellt; dies berücksichtigt keine Dateikompression.
- `canResume`
  - : Ein `boolean`, der anzeigt, ob ein derzeit unterbrochener (z. B. pausierter) Download von dem Punkt an, an dem er unterbrochen wurde, fortgesetzt werden kann (`true`) oder nicht (`false`).
- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattfand. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `danger`
  - : Ein String, der anzeigt, ob dieser Download als sicher gilt oder als verdächtig bekannt ist. Mögliche Werte sind im {{WebExtAPIRef('downloads.DangerType')}}-Typ definiert.
- `endTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Format), das die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Ende dieses Downloads darstellt. Dies ist undefiniert, wenn der Download noch nicht abgeschlossen ist.
- `error` {{optional_inline}}
  - : Ein String, der angibt, warum ein Download unterbrochen wurde. Mögliche Werte sind im {{WebExtAPIRef('downloads.InterruptReason')}}-Typ definiert. Dies ist undefiniert, wenn kein Fehler aufgetreten ist.
- `estimatedEndTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Format), das die geschätzte Anzahl der Millisekunden zwischen der UNIX-Epoche und dem voraussichtlichen Abschluss dieses Downloads darstellt. Dies ist undefiniert, wenn es nicht bekannt ist (insbesondere ist es undefiniert im `DownloadItem`, das in {{WebExtAPIRef("downloads.onCreated")}} übergeben wird).
- `exists`
  - : Ein `boolean`, der angibt, ob eine heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Diese Information könnte veraltet sein, da Browser nicht automatisch die Entfernung von Dateien überwachen — um zu überprüfen, ob eine Datei existiert, rufen Sie die {{WebExtAPIRef('downloads.search()')}}-Methode auf, wobei Sie nach der betreffenden Datei filtern.
- `filename`
  - : Ein `string`, der den absoluten lokalen Pfad der Datei darstellt.
- `fileSize`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der gesamten Datei nach der Dekompression angibt. Ein Wert von -1 hier bedeutet, dass die Gesamtgröße der Datei unbekannt ist.
- `id`
  - : Ein `integer`, der eine eindeutige Kennung für die heruntergeladene Datei darstellt, die über Browser-Sitzungen hinweg beständig ist.
- `incognito`
  - : Ein `boolean`, der angibt, ob der Download im Verlauf des Browsers aufgezeichnet wird (`false`) oder nicht (`true`).
- `mime`
  - : Ein `string`, der den MIME-Typ der heruntergeladenen Datei darstellt.
- `paused`
  - : Ein `boolean`, der angibt, ob der Download pausiert ist, d.h. ob der Download das Lesen von Daten vom Host gestoppt hat, aber die Verbindung offen gehalten hat. Wenn ja, ist der Wert `true`, andernfalls `false`.
- `referrer`
  - : Ein `string`, der den Referrer der heruntergeladenen Datei darstellt.
- `startTime`
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) Format), das die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Beginn dieses Downloads darstellt.
- `state`
  - : Ein `string`, das angibt, ob der Download fortschreitet, unterbrochen oder abgeschlossen ist. Mögliche Werte sind im {{WebExtAPIRef('downloads.State')}}-Typ definiert.
- `totalBytes`
  - : Eine `number`, die die Gesamtanzahl der Bytes in der heruntergeladenen Datei angibt. Dies berücksichtigt keine Dateikompression. Ein Wert von -1 hier bedeutet, dass die Gesamtanzahl der Bytes unbekannt ist.
- `url`
  - : Ein `string`, der die absolute URL darstellt, von der die Datei heruntergeladen wurde.

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf Chromiums [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadItem) API.
