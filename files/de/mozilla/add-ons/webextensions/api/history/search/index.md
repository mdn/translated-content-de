---
title: history.search()
slug: Mozilla/Add-ons/WebExtensions/API/history/search
l10n:
  sourceCommit: f99d00a1c3697e26a679925954e26564e7e79b98
---

Durchsucht den Browser-Verlauf nach {{WebExtAPIRef("history.HistoryItem")}} Objekten, die den angegebenen Kriterien entsprechen.

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
      - : `string`. Durchsucht Verlaufseinträge nach URL und Titel. Der String wird bei Leerzeichen in separate Suchbegriffe aufgeteilt. Jeder Suchbegriff wird case-insensitiv mit der URL und dem Titel des Verlaufseintrags verglichen. Der Verlaufseintrag wird zurückgegeben, wenn alle Suchbegriffe übereinstimmen.

        Zum Beispiel, betrachten Sie diesen Eintrag:

        URL: `"http://example.org"`

        Titel: `"Example Domain"`

        ```plain
        "http"              -> matches
        "domain"            -> matches
        "MAIN ample"        -> matches
        "main tt"           -> matches
        "main https"        -> does not match
        ```

        Geben Sie eine leere Zeichenkette (`""`) an, um alle {{WebExtAPIRef("history.HistoryItem")}} Objekte abzurufen, die alle anderen Kriterien erfüllen.

    - `startTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl von Millisekunden seit dem Epoch. Wenn angegeben, schließt diese Option Ergebnisse aus, deren `lastVisitTime` früher als diese Zeit liegt. Wenn sie nicht angegeben wird, ist die Suche auf die letzten 24 Stunden beschränkt.
    - `endTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601-Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl von Millisekunden seit dem Epoch. Wenn angegeben, beschränkt diese Option die Ergebnisse auf solche, die vor diesem Datum besucht wurden. Wenn sie nicht angegeben wird, werden alle Einträge ab der Startzeit berücksichtigt.
    - `maxResults` {{optional_inline}}
      - : `number`. Die maximale Anzahl der abzurufenden Ergebnisse. Standardwert ist 100, mit einem Mindestwert von 1. Die Funktion löst einen Fehler aus, wenn Sie ihr einen `maxResults` Wert kleiner als 1 übergeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird mit einem Array von Objekten vom Typ {{WebExtAPIRef("history.HistoryItem")}} erfüllt, von denen jedes einen einzelnen passenden Verlaufseintrag beschreibt. Einträge sind in umgekehrt chronologischer Reihenfolge sortiert.

## Beispiele

Protokolliert die URL und die Zeit des letzten Besuchs für alle Verlaufseinträge, die in den letzten 24 Stunden besucht wurden:

```js
function onGot(historyItems) {
  for (const item of historyItems) {
    console.log(item.url);
    console.log(new Date(item.lastVisitTime));
  }
}

browser.history.search({ text: "" }).then(onGot);
```

Protokolliert die URL und die Zeit des letzten Besuchs für alle jemals besuchten Verlaufseinträge:

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

Protokolliert die URL und die Zeit des letzten Besuchs einer Seite, die die Zeichenkette "mozilla" enthält:

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
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-search) API von Chromium. Diese Dokumentation stammt aus [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
