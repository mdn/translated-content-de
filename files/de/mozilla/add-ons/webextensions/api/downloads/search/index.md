---
title: downloads.search()
slug: Mozilla/Add-ons/WebExtensions/API/downloads/search
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Die **`search()`** Funktion der {{WebExtAPIRef("downloads")}} API durchsucht die im Download-Manager des Browsers verfügbaren {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} und gibt diejenigen zurück, die den angegebenen Suchkriterien entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.downloads.search(query);
```

### Parameter

- `query`
  - : Ein {{WebExtAPIRef('downloads.DownloadQuery')}} Objekt.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise). Das Promise wird mit einem `array` von `{{WebExtAPIRef('downloads.DownloadItem')}}` Objekten erfüllt, die den angegebenen Kriterien entsprechen.

## Browser-Kompatibilität

{{Compat}}

## Beispiele

Im Allgemeinen schränken Sie die abgerufenen Elemente mit dem `query` Parameter ein.

### Downloads abrufen, die "query" entsprechen

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.downloads
  .search({
    query: ["imgur"],
  })
  .then(logDownloads, onError);
```

### Ein spezifisches Element abrufen

Um ein spezifisches {{WebExtAPIRef("downloads.DownloadItem", "DownloadItem")}} zu erhalten, ist es am einfachsten, nur das `id` Feld festzulegen, wie im folgenden Codeausschnitt gezeigt:

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

const id = 13;

browser.downloads.search({ id }).then(logDownloads, onError);
```

### Alle Downloads abrufen

Wenn Sie alle {{WebExtAPIRef("downloads.DownloadItem", "DownloadItems")}} zurückgeben möchten, setzen Sie `query` auf ein leeres Objekt.

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.downloads.search({}).then(logDownloads, onError);
```

### Den neuesten Download abrufen

Sie können den neuesten Download abrufen, indem Sie die folgenden Suchparameter angeben:

```js
function logDownloads(downloads) {
  for (const download of downloads) {
    console.log(download.id);
    console.log(download.url);
  }
}

function onError(error) {
  console.log(`Error: ${error}`);
}

browser.downloads
  .search({
    limit: 1,
    orderBy: ["-startTime"],
  })
  .then(logDownloads, onError);
```

Sie können diesen Code in unserem [latest-download](https://github.com/mdn/webextensions-examples/blob/main/latest-download/popup/latest_download.js) Beispiel in Aktion sehen.

{{WebExtExamples}}

> [!NOTE]
> Diese API basiert auf der [`chrome.downloads`](https://developer.chrome.com/docs/extensions/reference/api/downloads#method-search) API von Chromium.

<!--
// Urheberrecht 2015 The Chromium Authors. Alle Rechte vorbehalten.
//
// Die Weitergabe und Nutzung in sowohl nicht modifizierter als auch
// modifizierter Form sind unter folgenden Bedingungen gestattet:
//
//    * Weitergaben des Quellcodes müssen den obigen Urheberrechtshinweis,
//      diese Liste der Bedingungen und den folgenden Haftungsausschluss
//      enthalten.
//    * Weitergaben in binärer Form müssen den obigen Urheberrechtshinweis,
//      diese Liste der Bedingungen und den folgenden Haftungsausschluss
//      in der Dokumentation und/oder anderen Materialien enthalten, die mit
//      der Weitergabe verteilt werden.
//    * Weder der Name von Google Inc. noch die Namen der Mitwirkenden
//      dürfen zur Unterstützung oder Werbung für Produkte, die von dieser
//      Software abgeleitet wurden, ohne spezifische vorherige schriftliche
//      Genehmigung verwendet werden.
//
// DIESE SOFTWARE WIRD VOM COPYRIGHT-INHABER UND DEN BEITRAGENDEN
// "WIE BESEHEN" BEREITGESTELLT UND JEGLICHE AUSDRÜCKLICHE ODER IMPLIZIERTE
// GEWÄHRLEISTUNGEN, EINSCHLIESSLICH, ABER NICHT BESCHRÄNKT AUF
// DIE IMPLIZIERTE GEWÄHRLEISTUNG DER MARKTGÄNGIGKEIT UND EIGNUNG FÜR
// EINEN BESTIMMTEN ZWECK, WERDEN ABGELEHNT. IN KEINEM FALL SIND DER
// COPYRIGHT-INHABER ODER DIE BEITRAGENDEN FÜR JEGLICHE DIREKTEN, INDIREKTEN,
// ZUFÄLLIGEN, SPEZIELLEN, EXEMPLARISCHEN ODER FOLGESCHÄDEN HAFTBAR (EINSCHLIESSLICH,
// ABER NICHT BESCHRÄNKT AUF DIE BESCHAFFUNG VON ERSATZGÜTERN ODER DIENSTLEISTUNGEN;
// NUTZUNGSAUSFALL, DATEN- ODER GEWINNAUSFALL; GESCHÄFTSUNTERBRECHUNG),
// WIE AUCH IMMER VERURSACHT UND DURCH JEGLICHE HAFTUNGSTHEORIE,
// OB IN VERTRAG, STRIKTER HAFTUNG ODER UNERLAUBTER HANDLUNG
// (EINSCHLIESSLICH FAHRLÄSSIGKEIT ODER ANDERWEITIG), DIE DURCH DIE
// NUTZUNG DIESER SOFTWARE ENTSTEHEN, SELBST WENN AUF DIE MÖGLICHKEIT EINES SOLCHEN SCHADENS
// HINGEWIESEN WURDE.
-->
