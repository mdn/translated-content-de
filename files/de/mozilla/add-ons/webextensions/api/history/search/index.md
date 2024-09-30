---
title: history.search()
slug: Mozilla/Add-ons/WebExtensions/API/history/search
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

Durchsucht den Verlauf des Browsers nach {{WebExtAPIRef("history.HistoryItem")}}-Objekten, die den angegebenen Kriterien entsprechen.

Dies ist eine asynchrone Funktion, die ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) zurückgibt.

## Syntax

```js-nolint
let searching = browser.history.search(
  query                  // object
)
```

### Parameter

- `query`

  - : Ein Objekt, das angibt, wonach im Browser-Verlauf gesucht werden soll. Dieses Objekt hat die folgenden Felder:

    - `text`

      - : `string`. Suchverlaufseinträge anhand von URL und Titel. Der String wird an Leerraumgrenzen in separate Suchbegriffe aufgeteilt. Jeder Suchbegriff wird ohne Beachtung der Groß-/Kleinschreibung mit der URL und dem Titel des Verlaufselements verglichen. Das Verlaufselement wird zurückgegeben, wenn alle Suchbegriffe übereinstimmen.

        Zum Beispiel, betrachten Sie dieses Element:

        URL: `"http://example.org"`

        Titel: `"Example Domain"`

        ```plain
        "http"              -> matches
        "domain"            -> matches
        "MAIN ample"        -> matches
        "main tt"           -> matches
        "main https"        -> does not match
        ```

        Geben Sie einen leeren String (`""`) an, um alle {{WebExtAPIRef("history.HistoryItem")}}-Objekte abzurufen, die alle anderen Kriterien erfüllen.

    - `startTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit der Epoche. Wenn es angegeben wird, schließt diese Option Ergebnisse aus, deren `lastVisitTime` früher als diese Zeit ist. Wenn es weggelassen wird, ist die Suche auf die letzten 24 Stunden beschränkt.
    - `endTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date)-Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit der Epoche. Wenn es angegeben wird, beschränkt diese Option die Ergebnisse auf diejenigen, die vor diesem Datum besucht wurden. Wenn es weggelassen wird, werden alle Einträge ab der Startzeit berücksichtigt.
    - `maxResults` {{optional_inline}}
      - : `number`. Die maximale Anzahl der abzurufenden Ergebnisse. Standardmäßig auf 100, mit einem Mindestwert von 1. Die Funktion gibt einen Fehler aus, wenn Sie ihr einen `maxResults`-Wert kleiner als 1 übergeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird mit einem Array von Objekten des Typs {{WebExtAPIRef("history.HistoryItem")}} erfüllt, wobei jedes Objekt ein einzelnes passendes Verlaufselement beschreibt. Die Elemente sind in umgekehrter chronologischer Reihenfolge sortiert.

## Beispiele

Protokolliert die URL und die letzte Besuchszeit für alle Verlaufselemente, die in den letzten 24 Stunden besucht wurden:

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history.search({ text: "" }).then(onGot);
```

Protokolliert die URL und die letzte Besuchszeit für alle jemals besuchten Verlaufselemente:

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

Protokolliert die URL und die letzte Besuchszeit des letzten Besuchs einer Seite, die den String "mozilla" enthält:

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
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-search) API von Chromium. Diese Dokumentation wird von [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code abgeleitet.

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
