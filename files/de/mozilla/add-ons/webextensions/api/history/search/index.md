---
title: history.search()
slug: Mozilla/Add-ons/WebExtensions/API/history/search
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{AddonSidebar}}

Durchsucht den Browserverlauf nach {{WebExtAPIRef("history.HistoryItem")}} Objekten, die den angegebenen Kriterien entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.history.search(
  query                  // object
)
```

### Parameter

- `query`

  - : Ein Objekt, das angibt, wonach im Browserverlauf gesucht werden soll. Dieses Objekt hat die folgenden Felder:

    - `text`

      - : `string`. Durchsucht Verlaufsobjekte nach URL und Titel. Der String wird an Leerraumgrenzen in separate Suchbegriffe aufgeteilt. Jeder Suchbegriff wird ohne Berücksichtigung der Groß- und Kleinschreibung mit der URL und dem Titel des Verlaufsobjekts verglichen. Das Verlaufsobjekt wird zurückgegeben, wenn alle Suchbegriffe übereinstimmen.

        Zum Beispiel, betrachten Sie dieses Objekt:

        URL: `"http://example.org"`

        Titel: `"Example Domain"`

        ```plain
        "http"              -> matches
        "domain"            -> matches
        "MAIN ample"        -> matches
        "main tt"           -> matches
        "main https"        -> does not match
        ```

        Geben Sie einen leeren String (`""`) an, um alle {{WebExtAPIRef("history.HistoryItem")}} Objekte abzurufen, die alle anderen Kriterien erfüllen.

    - `startTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601 Datumstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit dem Epoch. Wenn es angegeben wird, schließt diese Option Ergebnisse aus, deren `lastVisitTime` früher als diese Zeit ist. Wenn es weggelassen wird, ist die Suche auf die letzten 24 Stunden beschränkt.
    - `endTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601 Datumstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit dem Epoch. Wenn es angegeben wird, beschränkt diese Option die Ergebnisse auf diejenigen, die vor diesem Datum besucht wurden. Wenn es weggelassen wird, werden alle Einträge ab der Startzeit berücksichtigt.
    - `maxResults` {{optional_inline}}
      - : `number`. Die maximale Anzahl von Ergebnissen, die abgerufen werden sollen. Standardmäßig 100, mit einem Mindestwert von 1. Die Funktion löst einen Fehler aus, wenn Sie einen `maxResults`-Wert kleiner als 1 übergeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird mit einem Array von Objekten des Typs {{WebExtAPIRef("history.HistoryItem")}} erfüllt, die jeweils einen einzelnen passenden Verlaufsobjekt beschreiben. Die Objekte sind in umgekehrter chronologischer Reihenfolge sortiert.

## Beispiele

Protokolliert die URL und die letzte Besuchszeit für alle Verlaufsobjekte, die in den letzten 24 Stunden besucht wurden:

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history.search({ text: "" }).then(onGot);
```

Protokolliert die URL und die letzte Besuchszeit für alle jemals besuchten Verlaufsobjekte:

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history
  .search({
    text: "",
    startTime: 0,
  })
  .then(onGot);
```

Protokolliert die URL und die letzte Besuchszeit des jüngsten Besuchs einer Seite, die den String "mozilla" enthält:

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history
  .search({
    text: "mozilla",
    startTime: 0,
    maxResults: 1,
  })
  .then(onGot);
```

{{WebExtExamples}}

## Browser-Kompatibilität

{{Compat}}

> [!NOTE]
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-search) API von Chromium. Diese Dokumentation ist abgeleitet von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.

<!--
// Copyright 2015 The Chromium Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
-->
