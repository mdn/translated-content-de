---
title: "`browsingContext.downloadEnd`-Ereignis"
short-title: downloadEnd
slug: Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadEnd
l10n:
  sourceCommit: 6cb739dac09c71c59f78190a43d13247835f878e
---

Das [Ereignis](/de/docs/Web/WebDriver/Reference/BiDi/Modules#events) `browsingContext.downloadEnd` des Moduls [`browsingContext`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext) wird ausgelöst, wenn ein Dateidownload endet – entweder weil er abgeschlossen oder weil er abgebrochen wurde.

## Ereignisdaten

Das Feld `params` in der Ereignisbenachrichtigung ist ein Objekt mit einem Feld `status`. Der Wert von `status` bestimmt, welche zusätzlichen Felder vorhanden sind.

- `context`
  - : Ein String mit der ID des [Kontexts](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext#contexts), in dem der Download stattfand.
- `download`
  - : Ein String mit der {{Glossary("UUID", "UUID")}}, die diesen Download eindeutig identifiziert.
    Dieselbe ID ist im zugehörigen Ereignis [`browsingContext.downloadWillBegin`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadWillBegin) enthalten, sodass Sie die beiden Ereignisse einander zuordnen können.
- `filepath` {{optional_inline}}
  - : Ein String mit dem Pfad, unter dem der Browser die heruntergeladene Datei gespeichert hat, oder `null`, wenn der Pfad nicht verfügbar ist.
    Dieses Feld ist nur vorhanden, wenn das Feld [`status`](#status) den Wert `"complete"` hat.
- `navigation`
  - : Ein String mit der {{Glossary("UUID", "UUID")}}, die die zugehörige Navigation eindeutig identifiziert, oder `null`, wenn der Download keiner Navigation zugeordnet ist.
    Wenn die Navigation mit dem Befehl [`browsingContext.navigate`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigate) oder [`browsingContext.reload`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/reload) gestartet wurde, entspricht diese ID dem Wert von `navigation` in der Antwort auf den Befehl.
    Dieselbe ID wird auch von anderen Ereignissen verwendet, die für diese Navigation ausgelöst werden, etwa [`browsingContext.navigationStarted`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/navigationStarted) und Ereignissen des Moduls [`network`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/network).
- `status`
  - : Ein String, der das Ergebnis des Downloads angibt.
    Er hat einen der folgenden Werte:
    - `"canceled"`: Der Download wurde vor seinem Abschluss abgebrochen.
    - `"complete"`: Der Download wurde erfolgreich abgeschlossen.
- `timestamp`
  - : Eine nicht negative Ganzzahl, die den Zeitpunkt angibt, zu dem das Ereignis ausgelöst wurde, gemessen in Millisekunden seit der [Epoche](/de/docs/Web/JavaScript/Reference/Global_Objects/Date#the_epoch_timestamps_and_invalid_date).
- `url`
  - : Ein String mit der URL des Downloads.

## Beispiele

### Ein Ereignis empfangen, wenn ein Download abgeschlossen wird

Angenommen, Sie verfügen über eine [WebDriver-BiDi-Verbindung](/de/docs/Web/WebDriver/How_to/Create_BiDi_connection), eine [aktive Sitzung](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) und ein aktives [Abonnement](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe) für `browsingContext.downloadEnd`.

Wenn ein Download abgeschlossen wird und der Browser die Datei auf dem Datenträger speichert, sendet der Browser die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.downloadEnd",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "download": "6bfa8781-e33c-4f2c-8e63-4d0f6dc5d1a1",
    "filepath": "/home/user/Downloads/report.pdf",
    "navigation": "0e2f4d20-8f0a-4de7-9749-1b12a0d6c8b0",
    "status": "complete",
    "timestamp": 1737033601500,
    "url": "https://example.com/files/report.pdf"
  }
}
```

### Ein Ereignis empfangen, wenn ein Download abgebrochen wird

Nehmen Sie bei derselben Verbindung, Sitzung und demselben Abonnement wie im vorherigen Beispiel an, dass das Feld [`type`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior#type) des Objekts `downloadBehavior`, das an den Befehl `browser.setDownloadBehavior` übergeben wird, auf `"denied"` gesetzt ist.
Dadurch lehnt der Browser den Download ab, statt die Datei zu speichern.
In diesem Fall sendet der Browser die folgende Benachrichtigung:

```json
{
  "type": "event",
  "method": "browsingContext.downloadEnd",
  "params": {
    "context": "93ee5bd6-d256-4608-a002-9a8995cc0e5f",
    "download": "6bfa8781-e33c-4f2c-8e63-4d0f6dc5d1a1",
    "navigation": "0e2f4d20-8f0a-4de7-9749-1b12a0d6c8b0",
    "status": "canceled",
    "timestamp": 1737033601500,
    "url": "https://example.com/files/report.pdf"
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Ereignis [`browsingContext.downloadWillBegin`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browsingContext/downloadWillBegin)
- Befehl [`browser.setDownloadBehavior`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/browser/setDownloadBehavior)
- Befehl [`session.subscribe`](/de/docs/Web/WebDriver/Reference/BiDi/Modules/session/subscribe)
