---
title: history.search()
slug: Mozilla/Add-ons/WebExtensions/API/history/search
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
      - : `string`. Sucht Verlaufsobjekte nach URL und Titel. Der String wird an Leerzeichen in separate Suchbegriffe aufgeteilt. Jeder Suchbegriff wird fallunempfindlich mit der URL und dem Titel des Verlaufsobjekts verglichen. Das Verlaufsobjekt wird zurückgegeben, wenn alle Suchbegriffe übereinstimmen.

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
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601 Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit dem Epoch-Zeitpunkt. Wenn es angegeben ist, schließt diese Option Ergebnisse aus, deren `lastVisitTime` vor diesem Zeitpunkt liegt. Wenn es weggelassen wird, ist die Suche auf die letzten 24 Stunden beschränkt.
    - `endTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann dargestellt werden als: ein [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, ein [ISO 8601 Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder die Anzahl der Millisekunden seit dem Epoch-Zeitpunkt. Wenn es angegeben ist, beschränkt diese Option die Ergebnisse auf diejenigen, die vor diesem Datum besucht wurden. Wenn es weggelassen wird, werden alle Einträge ab der Startzeit berücksichtigt.
    - `maxResults` {{optional_inline}}
      - : `number`. Die maximale Anzahl an Ergebnissen, die abgerufen werden sollen. Standardmäßig 100, mit einem Mindestwert von 1. Die Funktion wird einen Fehler auslösen, wenn `maxResults` mit einem Wert kleiner als 1 übergeben wird.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird mit einem Array von Objekten vom Typ {{WebExtAPIRef("history.HistoryItem")}} erfüllt, das jeweils ein einzelnes übereinstimmendes Verlaufsobjekt beschreibt. Die Objekte sind in umgekehrter chronologischer Reihenfolge sortiert.

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
