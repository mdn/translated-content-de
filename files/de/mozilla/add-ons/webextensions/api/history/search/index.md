---
title: history.search()
slug: Mozilla/Add-ons/WebExtensions/API/history/search
l10n:
  sourceCommit: b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{AddonSidebar}}

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

  - : Ein Objekt, das angibt, wonach im Verlauf des Browsers gesucht werden soll. Dieses Objekt hat die folgenden Felder:

    - `text`

      - : `string`. Durchsuchen von Verlaufsobjekten nach URL und Titel. Der String wird an Leerzeichen aufgeteilt, um separate Suchbegriffe zu erhalten. Jeder Suchbegriff wird groß- und kleinschreibungsunabhängig mit der URL und dem Titel des Verlaufsobjekts abgeglichen. Das Verlaufsobjekt wird zurückgegeben, wenn alle Suchbegriffe übereinstimmen.

        Beispielsweise, betrachten Sie dieses Objekt:

        URL: `"http://example.org"`

        Titel: `"Example Domain"`

        ```plain
        "http"              -> passt
        "domain"            -> passt
        "MAIN ample"        -> passt
        "main tt"           -> passt
        "main https"        -> passt nicht
        ```

        Geben Sie einen leeren String (`""`) an, um alle {{WebExtAPIRef("history.HistoryItem")}} Objekte abzurufen, die alle anderen Kriterien erfüllen.

    - `startTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann als [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, als [ISO 8601 Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder als Anzahl der Millisekunden seit der Epoche repräsentiert werden. Wenn es angegeben wird, schließt diese Option Ergebnisse aus, deren `lastVisitTime` früher als diese Zeit ist. Wenn es weggelassen wird, ist die Suche auf die letzten 24 Stunden beschränkt.
    - `endTime` {{optional_inline}}
      - : `number` oder `string` oder `object`. Ein Wert, der ein Datum und eine Uhrzeit angibt. Dies kann als [`Date`](/de/docs/Web/JavaScript/Reference/Global_Objects/Date) Objekt, als [ISO 8601 Datumsstring](https://www.iso.org/iso-8601-date-and-time-format.html) oder als Anzahl der Millisekunden seit der Epoche repräsentiert werden. Wenn es angegeben wird, beschränkt diese Option die Ergebnisse auf die, die vor diesem Datum besucht wurden. Wenn es weggelassen wird, werden alle Einträge ab der Startzeit berücksichtigt.
    - `maxResults` {{optional_inline}}
      - : `number`. Die maximale Anzahl der zu abrufenden Ergebnisse. Standardmäßig 100, mit einem Mindestwert von 1. Die Funktion wird einen Fehler auslösen, wenn Sie ihr einen `maxResults` Wert kleiner als 1 übergeben.

### Rückgabewert

Ein [`Promise`](/de/docs/Web/JavaScript/Reference/Global_Objects/Promise) wird mit einem Array von Objekten des Typs {{WebExtAPIRef("history.HistoryItem")}} erfüllt, die jeweils ein einzelnes passendes Verlaufsobjekt beschreiben. Elemente sind in umgekehrter chronologischer Reihenfolge sortiert.

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

Protokolliert die URL und die letzte Besuchszeit des letzten Besuchs auf einer Seite, die den String "mozilla" enthält:

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
> Diese API basiert auf der [`chrome.history`](https://developer.chrome.com/docs/extensions/reference/api/history#method-search) API von Chromium. Diese Dokumentation basiert auf [`history.json`](https://chromium.googlesource.com/chromium/src/+/master/chrome/common/extensions/api/history.json) im Chromium-Code.
