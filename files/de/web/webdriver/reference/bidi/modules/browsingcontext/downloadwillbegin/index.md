---
title: "`browsingContext.downloadWillBegin`-Ereignis"
short-title: downloadWillBegin
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadWillBegin
l10n:
  sourceCommit: 6cb739dac09c71c59f78190a43d13247835f878e
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `browsingContext.downloadWillBegin` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) wird ausgelöst, wenn der Browser kurz davor steht, einen Dateidownload zu starten.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit den folgenden Feldern:

- `context`
  - : Eine Zeichenfolge mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem der Download ausgelöst wurde.
- `download`
  - : Eine Zeichenfolge mit der {{Glossary("UUID", "UUID")}}, die diesen Download eindeutig identifiziert.
    Dieselbe ID ist im zugehörigen Ereignis [`browsingContext.downloadEnd`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadEnd) enthalten, sodass Sie die beiden Ereignisse einander zuordnen können.
- `navigation`
  - : Eine Zeichenfolge mit der {{Glossary("UUID", "UUID")}}, die die zugehörige Navigation eindeutig identifiziert, oder `null`, wenn der Download keiner Navigation zugeordnet ist.
    Wenn die Navigation mit dem Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) gestartet wurde, stimmt diese ID mit dem Wert von `navigation` in der Antwort auf den Befehl überein.
    Dieselbe ID wird auch von anderen Ereignissen verwendet, die bei dieser Navigation ausgelöst werden, beispielsweise [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) und Ereignissen des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network).
- `suggestedFilename`
  - : Eine Zeichenfolge mit dem Dateinamen, den der Browser für den Download vorschlägt.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Zeitpunkt angibt, zu dem das Ereignis ausgelöst wurde, als Anzahl der seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date) verstrichenen Millisekunden.
- `url`
  - : Eine Zeichenfolge mit der URL des Downloads.

## Beschreibung

Ein Download kann auf verschiedene Weise starten. Er kann beispielsweise beginnen, wenn ein Link mit dem Attribut [`download`](/de/docs/Web/HTML/Reference/Elements/a#download) aktiviert wird. Er kann auch beginnen, wenn der Browser eine Antwort mit einem [`Content-Disposition`](/de/docs/Web/HTTP/Reference/Headers/Content-Disposition)-Header erhält, der die Ressource als Anhang kennzeichnet.

Nachdem dieses Ereignis ausgelöst wurde, bestimmt der Browser anhand des mit [`browser.setDownloadBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior) konfigurierten Download-Verhaltens, ob der Download zugelassen und wo er gespeichert wird.

## Beispiele

### Ein Ereignis beim Start eines Downloads empfangen

Angenommen, Sie haben eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein aktives [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.downloadWillBegin`.

Ein Link auf der Seite verweist auf `https://example.com/files/report.pdf`.
Bevor der Download startet, sendet der Browser die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.downloadWillBegin",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "download": "6bfa8781-e33c-4f2c-8e63-4d0f6dc5d1a1",
    "navigation": "0e2f4d20-8f0a-4de7-9749-1b12a0d6c8b0",
    "suggestedFilename": "report.pdf",
    "timestamp": 1737033600000,
    "url": "https://example.com/files/report.pdf"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`browsingContext.downloadEnd`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadEnd)
- Befehl [`browser.setDownloadBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
