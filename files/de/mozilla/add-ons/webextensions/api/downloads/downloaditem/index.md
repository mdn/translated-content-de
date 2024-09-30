---
title: downloads.DownloadItem
slug: Mozilla/Add-ons/WebExtensions/API/downloads/DownloadItem
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Der `DownloadItem`-Typ der {{WebExtAPIRef("downloads")}} API repräsentiert eine heruntergeladene Datei.

## Typ

Werte dieses Typs sind Objekte. Sie enthalten die folgenden Eigenschaften:

- `byExtensionId` {{optional_inline}}
  - : Ein `string`, der die ID der Erweiterung darstellt, die den Download ausgelöst hat (falls er von einer Erweiterung ausgelöst wurde). Dies ändert sich nicht, sobald es festgelegt ist. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dies undefiniert.
- `byExtensionName` {{optional_inline}}
  - : Ein `string`, der den Namen der Erweiterung darstellt, die den Download ausgelöst hat (falls er von einer Erweiterung ausgelöst wurde). Dies kann sich ändern, wenn die Erweiterung ihren Namen ändert oder der Benutzer sein Gebietsschema ändert. Wenn der Download nicht von einer Erweiterung ausgelöst wurde, ist dies undefiniert.
- `bytesReceived`
  - : Eine `number`, die die Anzahl der bisher vom Host empfangenen Bytes während des Downloads darstellt; dies berücksichtigt keine Dateikomprimierung.
- `canResume`
  - : Ein `boolean`, der angibt, ob ein derzeit unterbrochener (z.B. angehaltener) Download von dem Punkt, an dem er unterbrochen wurde, fortgesetzt werden kann (`true`) oder nicht (`false`).
- `cookieStoreId` {{optional_inline}}
  - : Die Cookie-Store-ID der [kontextuellen Identität](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities), in der der Download stattfand. Siehe [Arbeiten mit kontextuellen Identitäten](/de/docs/Mozilla/Add-ons/WebExtensions/Work_with_contextual_identities) für weitere Informationen.
- `danger`
  - : Ein String, der anzeigt, ob dieser Download als sicher oder als verdächtig angesehen wird. Die möglichen Werte sind im {{WebExtAPIRef('downloads.DangerType')}}-Typ definiert.
- `endTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), das die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Zeitpunkt darstellt, an dem dieser Download endete. Dies ist undefiniert, wenn der Download noch nicht abgeschlossen ist.
- `error` {{optional_inline}}
  - : Ein String, der angibt, warum ein Download unterbrochen wurde. Mögliche Werte sind im {{WebExtAPIRef('downloads.InterruptReason')}}-Typ definiert. Dies ist undefiniert, wenn kein Fehler aufgetreten ist.
- `estimatedEndTime` {{optional_inline}}
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), das die geschätzte Anzahl der Millisekunden zwischen der UNIX-Epoche und dem voraussichtlichen Zeitpunkt darstellt, an dem dieser Download abgeschlossen sein soll. Dies ist undefiniert, wenn es nicht bekannt ist (insbesondere ist es undefiniert im `DownloadItem`, das in {{WebExtAPIRef("downloads.onCreated")}} übergeben wird).
- `exists`
  - : Ein `boolean`, der angibt, ob die heruntergeladene Datei noch existiert (`true`) oder nicht (`false`). Diese Information könnte veraltet sein, da Browser nicht automatisch auf das Entfernen von Dateien achten - um zu überprüfen, ob eine Datei existiert, rufen Sie die {{WebExtAPIRef('downloads.search()')}}-Methode mit Filterung nach der betreffenden Datei auf.
- `filename`
  - : Ein `string`, der den absoluten lokalen Pfad der Datei darstellt.
- `fileSize`
  - : Ein `number`, der die Gesamtzahl der Bytes in der gesamten Datei nach der Dekomprimierung angibt. Ein Wert von -1 bedeutet hier, dass die Gesamtdateigröße unbekannt ist.
- `id`
  - : Ein `integer`, der eine eindeutige Kennung für die heruntergeladene Datei darstellt, die über Browser-Sitzungen hinweg beständig ist.
- `incognito`
  - : Ein `boolean`, der angibt, ob der Download im Verlauf des Browsers aufgezeichnet wird (`false`) oder nicht (`true`).
- `mime`
  - : Ein `string`, der den MIME-Typ der heruntergeladenen Datei darstellt.
- `paused`
  - : Ein `boolean`, der angibt, ob der Download angehalten ist, d.h. ob der Download das Lesen von Daten vom Host gestoppt hat, aber die Verbindung offen gehalten hat. Wenn ja, ist der Wert `true`, andernfalls `false`.
- `referrer`
  - : Ein `string`, der den Referrer der heruntergeladenen Datei darstellt.
- `startTime`
  - : Ein `string` (im [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)-Format), das die Anzahl der Millisekunden zwischen der UNIX-Epoche und dem Zeitpunkt, an dem dieser Download begonnen hat, darstellt.
- `state`
  - : Ein `string`, der anzeigt, ob der Download voranschreitet, unterbrochen oder abgeschlossen ist. Mögliche Werte sind im {{WebExtAPIRef('downloads.State')}}-Typ definiert.
- `totalBytes`
  - : Ein `number`, der die Gesamtanzahl der Bytes in der heruntergeladenen Datei angibt. Dies berücksichtigt keine Dateikomprimierung. Ein Wert von -1 bedeutet hier, dass die Gesamtanzahl der Bytes unbekannt ist.
- `url`
  - : Ein `string`, der die absolute URL darstellt, von der die Datei heruntergeladen wurde.

## Browser-Kompatibilität

{{Compat}}

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#type-DownloadItem)-API von Chromium.
