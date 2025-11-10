---
title: downloads.removeFile()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/removeFile
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Die **`removeFile()`** Funktion der {{WebExtAPIRef("downloads")}} API entfernt eine heruntergeladene Datei von der Festplatte.

Diese API entfernt die Datei von der Festplatte, jedoch nicht aus dem Download-Verlauf des Browsers. Ein Aufruf von {{WebExtAPIRef("downloads.search()")}} wird das Element weiterhin als {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} zurückgeben, aber dessen `exists` Attribut wird `false` sein.

Um eine Datei aus dem Download-Verlauf zu entfernen, müssen Sie {{WebExtAPIRef("downloads.erase()")}} verwenden.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

> [!NOTE]
> Wenn Sie eine heruntergeladene Datei von der Festplatte _und_ aus dem Verlauf löschen möchten, müssen Sie `removeFile()` aufrufen, bevor Sie {{WebExtAPIRef("downloads.erase()")}} aufrufen. Wenn Sie es in umgekehrter Reihenfolge versuchen, tritt ein Fehler auf, wenn `removeFile()` aufgerufen wird, da der Browser keinen Eintrag mehr für den Download hat.

## Syntax

```js-nolint
let removing = browser.downloads.removeFile(
  downloadId      // integer
)
```

### Parameter

- `downloadId`
  - : Eine `integer`, die die ID des {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} darstellt, das Sie von der Festplatte löschen möchten.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Wenn die Anfrage erfolgreich war, wird das Promise ohne Argumente erfüllt. Wenn die Anfrage fehlschlug, wird das Promise mit einer Fehlermeldung abgelehnt.

## Beispiele

Entfernen Sie die zuletzt heruntergeladene Datei:

```js
function onRemoved() {
  console.log(`Removed item`);
}

function onError(error) {
  console.log(`Error: ${error}`);
}

function remove(downloadItems) {
  if (downloadItems.length > 0) {
    let removing = browser.downloads.removeFile(downloadItems[0].id);
    removing.then(onRemoved, onError);
  }
}

let searching = browser.downloads.search({
  limit: 1,
  orderBy: ["-startTime"],
});

searching.then(remove, onError);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-removeFile) API von Chromium.

<!--
// Copyright 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Weitergabe und Nutzung in Quell- und Binärformen, mit oder ohne
// Modifikation, sind unter den folgenden Bedingungen erlaubt:
//
//    * Weitergaben des Quellcodes müssen den obigen Urheberrechtshinweis,
// diesen Bedingungen und den folgenden Haftungsausschluss enthalten.
//    * Weitergaben in binärer Form müssen den obigen Urheberrechtshinweis,
// diese Bedingungen und den folgenden Haftungsausschluss in der
// Dokumentation und/oder anderen Materialien enthalten, die mit der
// Verteilung bereitgestellt werden.
//    * Weder der Name der Google Inc. noch die Namen ihrer
// Mitwirkenden dürfen verwendet werden, um Produkte, die von dieser
// Software abgeleitet wurden, zu unterstützen oder zu fördern, ohne
// vorherige schriftliche Genehmigung.
//
// DIESE SOFTWARE WIRD VON DEN COPYRIGHT-INHABERN UND BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT, UND JEGLICHE AUSDRÜCKLICHEN ODER
// IMPLIZIERTEN GARANTIEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF,
// DIE IMPLIZIERTEN GARANTIEN DER HANDELSÜBLICHKEIT UND EIGNUNG FÜR EINEN
// BESTIMMTEN ZWECK WERDEN ABGELEHNT. IN KEINEM FALL HAFTEN DIE
// COPYRIGHT-INHABER ODER BEITRAGENDEN FÜR DIREKTE, INDIREKTE, ZUFÄLLIGE,
// SPEZIELLE, EXEMPLARISCHE ODER FOLGESCHÄDEN (EINSCHLIESSLICH, ABER
// NICHT BESCHRÄNKT AUF, DIE BESCHAFFUNG VON ERSATZWAREN ODER -DIENSTLEISTUNGEN;
// NUTZUNGSVERLUST, DATEN, ODER GEWINNE; ODER GESCHÄFTSUNTERBRECHUNG),
// AUF WELCHER HAFTUNGSTHEORIE AUCH IMMER, OB IN VERTRAG, STRIKTER
// HAFTUNG ODER UNERLAUBTER HANDLUNG (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER
// ANDERWEITIG), DIE AUS DER NUTZUNG DER SOFTWARE ENTSTEHT, AUCH WENN
// ÜBER DIE MÖGLICHKEIT SOLCHER SCHÄDEN INFORMIERT WURDE.
-->
